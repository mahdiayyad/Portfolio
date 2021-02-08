var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 50);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.querySelector("body").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1);
});

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var elementToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });
  scroll(loop);
}
loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

const callback = function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function (target) {
  observer.observe(target);
});
