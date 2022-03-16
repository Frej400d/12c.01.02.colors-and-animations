"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  let theme = localStorage.getItem("data-theme");
  const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
    localStorage.setItem("data-theme", "dark"); // save theme to local storage
  };

  const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light"); // set theme light
    localStorage.setItem("data-theme", "light"); // save theme to local storage
  };

  // Get the element based on ID
  const checkbox = document.getElementById("switch");
  // Apply retrived them to the website
  checkbox.addEventListener("change", () => {
    let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
    if (theme === "dark") {
      changeThemeToLight();
    } else {
      changeThemeToDark();
    }
  });
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
  animations();
}

function animations() {
  const properties = {
    duration: 1000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out",
  };

  const keyframes = [
    { transform: "translate(0,10px)" },
    { transform: "translate(0,0)" },
  ];

  const keyframes2 = [
    { transform: "translate(0,0)" },
    { transform: "translate(0,10px)" },
  ];

  const ball1 = document.querySelector("#ball1");
  const ball2 = document.querySelector("#ball2");
  const ball1Animation = ball1.animate(keyframes, properties);
  const ball2Animation = ball2.animate(keyframes2, properties);

  const buttonProperties = {
    duration: 4000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out",
  };

  const buttonKeyframes = [
    { offset: 0, transform: "translate(0,0)" },
    { offset: 0.02, transform: "translate(5px,0)" },
    { offset: 0.04, transform: "translate(0,0)" },
    { offset: 0.06, transform: "translate(5px,0)" },
    { offset: 0.08, transform: "translate(0,0)" },
    { offset: 0.1, transform: "translate(5px,0)" },
    { offset: 0.12, transform: "translate(0,0)" },
    { offset: 1, transform: "translate(0,0)" },
  ];

  const button = document.querySelector("#frontpage_button");
  const buttonAnimation = button.animate(buttonKeyframes, buttonProperties);
}

const scrollElements = document.querySelectorAll(".js_scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
