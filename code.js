


// NavLinkActived


const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  }
};

const spyScrolling = () => {
  const sections = document.querySelectorAll(".hero-bg");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href*=${id}]`)
          .classList.add("active");
      }
  };
};

makeNavLinksSmooth();
spyScrolling();



// goTopBtn

let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function() {
  const goTopButton = document.querySelector('[data-action="gotop"]');
  const windowViewPortHeight = window.innerHeight; // browser viewport height
  let isRequestingAnimationFrame = false;

  if (!goTopButton) {
    return;
  }

  goTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    if (!isRequestingAnimationFrame) {
      requestAnimationFrame(filterGoTopButtonVisibility);
      isRequestingAnimationFrame = true;
    }
  });

  function filterGoTopButtonVisibility(timestamp) {
    let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
    if (windowPageYOffset > windowViewPortHeight) {
      goTopButton.classList.add('showBtn');
      isRequestingAnimationFrame = false;
    } else {
      goTopButton.classList.remove('showBtn');
      requestAnimationFrame(filterGoTopButtonVisibility);
    }
  }
})



// darkMode
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


// menuNavbar

const menuBtn = document.querySelector("#menuToggle")
const navbar = document.querySelector(".nav-ul-p")

menuBtn.addEventListener("click", ()=>{
  navbar.classList.toggle("show")
  menuBtn.classList.toggle("active")
})



$(document).ready(function () {
  $("#link_cv").click(function (e) {
      e.preventDefault();
      window.location.href = "abdulwahab.pdf";
  });
});