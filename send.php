<?php
$time_limit = 60;

if (isset($_SESSION['last_submission_time']) && (time() - $_SESSION['last_submission_time']) < $time_limit) {
    die("Iltimos, formani qayta yuborishdan oldin biroz kuting. <br>
    Пожалуйста, подождите немного перед повторной отправкой формы.");
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(403);
    exit("To‘g‘ridan-to‘g‘ri kirish taqiqlangan.
    Прямой доступ запрещён");
}

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));  // Генерация случайного токена
}
// Очистка CSRF токена после успешной отправки
unset($_SESSION['csrf_token']);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверка капчи
    $recaptchaToken = $_POST['g-recaptcha-response'];

    if (empty($recaptchaToken)) {
        echo "Captcha xatosi. Iltimos, siz robot emasligingizni tasdiqlang
        Ошибка капчи. Пожалуйста подтвердите, что вы не робот";
        exit;
    }

    // Отправка запроса на сервер Google для проверки токена
    $captchaSecret = $_ENV['RECAPTCHA_SECRET_KEY'];
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$captchaSecret}&response={$recaptchaToken}");
    $responseKeys = json_decode($response, true);

    if (!$responseKeys["success"]) {
        echo "Kapcha xatosi. Iltimos, yana bir bor urinib ko‘ring.
        Ошибка капчи. Пожалуйста, попробуйте снова.";
        exit;
    }

    // Данные формы
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $tel = htmlspecialchars(trim($_POST["tel"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $_SESSION['last_submission_time'] = time();

    $mail = new PHPMailer(true);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email noto‘g‘ri formatda kiritilgan.
        Неверный формат email.";
        exit;
    }    

    try {
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USER'];
        $mail->Password = $_ENV['SMTP_PASS'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $_ENV['SMTP_PORT'];

        $mail->CharSet = 'UTF-8';

        $mail->setFrom($_ENV['SMTP_USER'], 'Saytdagi forma');
        $mail->addAddress($_ENV['SMTP_USER']);
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = 'Saytdan yangi xabar';
        $mail->Body = "<strong>Ismi:</strong> $name <br>
                       <strong>Email:</strong> $email <br>
                       <strong>Telefon raqami:</strong> $tel <br>
                       <strong>Xabar:</strong> $message";

        $mail->send();
        echo "Xabaringiz yuborildi!
        Сообщение отправлено!";
    } catch (Exception $e) {
        echo "Yuborishda xatolik yuz berdi: {$mail->ErrorInfo}
        Некорректный метод запроса!: {$mail->ErrorInfo}";
    }
} else {
    echo "Noto‘g‘ri so‘rov usuli! <br>
    Некорректный метод запроса!";
}
?>
