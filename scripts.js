function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("active");
}

function closeMenu() {
  document.querySelector(".nav-links").classList.remove("active");
  document.querySelector(".menu-toggle").classList.remove("active");
}

document.addEventListener("click", function (event) {
  let nav = document.querySelector(".nav-links");
  let toggle = document.querySelector(".menu-toggle");

  if (!nav.contains(event.target) && !toggle.contains(event.target)) {
    closeMenu();
  }
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > lastScrollY) {
    navbar.classList.add("hidden"); 
  } else {
    navbar.classList.remove("hidden"); 
  }
  lastScrollY = window.scrollY;
});

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("active");
}

const slider = document.querySelector(".about-grid");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".services-container");
  let isDown = false;
  let startX, scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add("active");
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
});

document.querySelector(".apply-form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  let formData = new FormData(this);

  fetch("send.php", {
      method: "POST",
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      document.getElementById("responseMessage").style.display = "block";

      document.getElementById("responseMessage").innerText = data;
  })
  .catch(error => {
      document.getElementById("responseMessage").innerText = "Yuborish xatosi";
      
      document.getElementById("responseMessage").style.display = "block";
    });

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-100px"; 
    } else {
      navbar.style.top = "0"; 
    }

    lastScrollTop = scrollTop;
  });
});


document.getElementById('myForm').addEventListener('submit', function(e) {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    // Капча не пройдена
    e.preventDefault(); // Отменяем отправку
    alert('Iltimos, robot emasligingizni tasdiqlang.');
  }
});





