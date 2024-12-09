$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $(".sticky-header").addClass("fixed");
    } else {
      $(".sticky-header").removeClass("fixed");
    }
  });
  //slider by owl-carousel
  $(".user-feedback ").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items: 2,
    presentation: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  // auto slider by owl-carousel
  $(".evanto-brand").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    center: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
// navbar active class add and remove
const navLinks = document.querySelectorAll(".nav-link");
// Loop through each nav link and add a click event listener
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    navLinks.forEach((nav) => nav.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
// footer nav item active class add and remove
document.addEventListener("DOMContentLoaded", () => {
  let previousElement = null;

  document.querySelectorAll(".list-item").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      // Remove class from previously selected element
      if (previousElement) {
        previousElement.classList.remove("active");
      }
      // Add class to the currently clicked element
      this.classList.add("active");

      // Update the previousElement reference
      previousElement = this;
    });
  });
});
// preventDefault
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Check if the link has a hash or is an external link
    if (!this.href || this.getAttribute("href") === "#") {
      e.preventDefault(); // Prevent default for specific cases
    }
  });
});
const bookForm = document.querySelector(".book-form ");
const standard = document.getElementById("standard");
const mainTitle = document.querySelector(".book-form-left .main-title");
standard.addEventListener("click", (e) => {
  e.preventDefault();
  bookForm.style.backgroundColor = "green";
  mainTitle.innerHTML = ` Get Our Hey <span class="text-warning">Texico standard</span> Online  Booking Form`;
});
//search box display class add and remove
let searchIcon = document.querySelector(".search-icon");
let navSearchBox = document.querySelector(".nav-search-box");
searchIcon.addEventListener("click", () => {
  navSearchBox.classList.toggle("box-show");
});
// animation
AOS.init({
  duration: 1000,
  offset: 50,
});

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
