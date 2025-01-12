document.addEventListener("DOMContentLoaded", function () {
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
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  
  // Function to change slides
  function changeSlide() {
    // Remove the "active" class from the current slide
    slides[currentIndex].classList.remove('active');
    
    // Move to the next slide (or loop back to the first)
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Add the "active" class to the new slide
    slides[currentIndex].classList.add('active');
    
    // Adjust the transform property to show the next slide
    document.querySelector('.hero-slider').style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  // Set interval to auto-change slides every 5 seconds
  setInterval(changeSlide, 5000);
});
