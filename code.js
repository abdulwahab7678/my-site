
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





// modal_start
const body = document.querySelector("body")
const modalOpenBtn = document.querySelector("#modalOpenBtn")
const modalCloseBtn = document.querySelectorAll(".modalCloseBtn")
const modal = document.querySelector("#modal")

modalOpenBtn.addEventListener("click", ()=>{
  modal.classList.add("show")
  body.style.cssText="overflow-y: hidden;"
})


modalCloseBtn.forEach(e => {
  e.addEventListener("click",()=>{
    modal.classList.remove("show")
    body.style.cssText="overflow-y: auto;"
  })
 });

// modal_end


// navbar_menu_start

const menuBtn = document.querySelector("#menuToggle")
const nav_links = document.querySelectorAll(".nav-link")
const navbar = document.querySelector(".nav-ul-p")

menuBtn.addEventListener("click", ()=>{
  navbar.classList.toggle("show")
  menuBtn.classList.toggle("active")
  const currentState = menuBtn.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    menuBtn.setAttribute("data-state", "opened");
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    menuBtn.setAttribute("data-state", "closed");
    menuBtn.setAttribute("aria-expanded", "false");
  }
})

nav_links.forEach(e => {
  e.addEventListener("click",()=>{
    navbar.classList.remove("show")
    menuBtn.classList.remove("active")
  const currentState = menuBtn.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    menuBtn.setAttribute("data-state", "opened");
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    menuBtn.setAttribute("data-state", "closed");
    menuBtn.setAttribute("aria-expanded", "false");
  }
  })
});
// navbar_menu_end
