document.addEventListener("DOMContentLoaded", function () {
  // Sidebar / Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Buat container sidebar
  const navContainer = document.createElement("div");
  navContainer.className = "nav-container";

  // Buat tanda panah kiri untuk tombol back
  const backArrow = document.createElement("span");
  backArrow.className = "back-arrow";
  backArrow.innerHTML = "&#8592;"; // Tanda panah kiri menggunakan Unicode

  // Tambahkan tanda panah dan kloning nav-links ke dalam sidebar
  navContainer.appendChild(backArrow);
  navContainer.appendChild(navLinks.cloneNode(true));

  // Tambahkan sidebar ke dalam body
  document.body.appendChild(navContainer);

  // Toggle sidebar saat tombol hamburger diklik
  hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("show");
  });

  // Tutup sidebar saat tanda panah diklik
  backArrow.addEventListener("click", () => {
    navContainer.classList.remove("show");
  });

  // Pastikan sidebar tertutup saat ukuran layar diperbesar (desktop view)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navContainer.classList.remove("show");
    }
  });

  // Slider Auto-Pagination
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".hero-slider");
  const pagination = document.createElement("div");
  pagination.className = "pagination";
  let currentIndex = 0;

  // Tambahkan pagination bullets
  slides.forEach((_, index) => {
    const bullet = document.createElement("div");
    bullet.className = "bullet";
    if (index === 0) bullet.classList.add("active"); // Bullet pertama aktif
    bullet.addEventListener("click", () => goToSlide(index));
    pagination.appendChild(bullet);
  });

  // Masukkan pagination ke dalam hero section
  document.querySelector("#hero").appendChild(pagination);

  const bullets = document.querySelectorAll(".bullet");

  // Fungsi untuk berpindah slide
  function changeSlide() {
    slides[currentIndex].classList.remove("active");
    bullets[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
    bullets[currentIndex].classList.add("active");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Fungsi untuk pergi ke slide tertentu
  function goToSlide(index) {
    slides[currentIndex].classList.remove("active");
    bullets[currentIndex].classList.remove("active");

    currentIndex = index;

    slides[currentIndex].classList.add("active");
    bullets[currentIndex].classList.add("active");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Set interval untuk auto-slide setiap 5 detik
  setInterval(changeSlide, 5000);

  // Prompt Input Nama dan Ganti ID "name"
  const userName = prompt("What can we call you?", "Enter your name here");
  if (userName) {
    const nameElement = document.getElementById("name");
    const nameElement2 = document.getElementById("name2");
    nameElement.textContent = userName;
    nameElement2.textContent = userName;
  }
  
  // Smooth Scroll untuk Discover More Button
  const discoverBtn = document.querySelector(".btn-discover");
  discoverBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.getElementById("why-choose-us");

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });

  // Efek Timbul pada Card saat Scroll (Mobile)
  const cards = document.querySelectorAll(".card");

  const handleScroll = () => {
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 100) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  };

  // Jalankan saat halaman di-scroll
  window.addEventListener("scroll", handleScroll);

  // Jalankan saat halaman pertama kali dimuat
  handleScroll();

  // Tambahkan kelas CSS show pada card saat muncul di viewport
  cards.forEach((card) => {
    card.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  });
});
