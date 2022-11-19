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






// darkAndLightMode

const setDarkMode = (active = false) => {
  const wrapper = document.querySelector(":root");
  if (active) {
    wrapper.setAttribute("data-theme", "dark");
    // localStorage.setItem("theme", "dark");
  } else {
    wrapper.setAttribute("data-theme", "light");
    // localStorage.setItem("theme", "light");
  }
};

const toggleDarkMode = () => {
  const theme = document.querySelector(":root").getAttribute("data-theme");
  // If the current theme is "light", we want to activate dark
  setDarkMode(theme === "light");
};

const initDarkMode = () => {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  let active = query.matches;
  setDarkMode(active);

  query.addListener(e => setDarkMode(e.matches));

  const toggleButton = document.querySelector(".js__dark-mode-toggle");
  toggleButton.addEventListener("click", toggleDarkMode);
};

initDarkMode();



// form

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});





// // We select the element we want to target
// var target = document.querySelector("footer");

// var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
// var rootElement = document.documentElement;

// // Next we want to create a function that will be called when that element is intersected
// function callback(entries, observer) {
//   // The callback will return an array of entries, even if you are only observing a single item
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Show button
//       scrollToTopBtn.classList.add("showBtn");
//     } else {
//       // Hide button
//       scrollToTopBtn.classList.remove("showBtn");
//     }
//   });
// }

// function scrollToTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);

// // Next we instantiate the observer with the function we created above. This takes an optional configuration
// // object that we will use in the other examples.
// let observer = new IntersectionObserver(callback);
// // Finally start observing the target element
// observer.observe(target);
















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



const menuBtn = document.querySelector(".menuBtn")
const navbar = document.querySelector(".nav-ul-p")

menuBtn.addEventListener("click", ()=>{
  navbar.classList.toggle("show")
})

