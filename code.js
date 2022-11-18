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
