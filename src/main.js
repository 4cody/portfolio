"use strict";
var a = document.querySelector("#contact-form");
var s = document.querySelector("#contact-message-success");
var r = document.querySelector("#contact-message-error");
var e = document.querySelector("#contact-send-again");
a.addEventListener("submit", function (e) {
  document.querySelector("#loading").classList.remove("u-display-none");
  e.preventDefault();
  var t = document.querySelector("#name").value;
  var o = document.querySelector("#email").value;
  var n = document.querySelector("#message").value;
  var c = new XMLHttpRequest();
  c.onreadystatechange = function () {
    if (c.readyState == XMLHttpRequest.DONE) {
      if (c.status === 200) {
        try {
          a.classList.add("u-display-none");
          r.classList.add("u-display-none");
          s.classList.remove("u-display-none");
          document.querySelector("#loading").classList.add("u-display-none");
        } catch (e) {}
      } else {
        a.classList.add("u-display-none");
        r.classList.remove("u-display-none");
        s.classList.add("u-display-none");
        document.querySelector("#loading").classList.add("u-display-none");
      }
    }
  };
  c.open("POST", "/contact", true);
  c.setRequestHeader("Content-Type", "application/json");
  c.send(JSON.stringify({ name: t, email: o, message: n }));
});
e.addEventListener("click", function () {
  a.classList.remove("u-display-none");
  r.classList.add("u-display-none");
  s.classList.add("u-display-none");
  document.querySelector("#message").value = "";
  document.querySelector("#message").focus();
});
function smoothScroll(e, n) {
  var e = document.querySelector(e);
  var c = e.getBoundingClientRect().top;
  var a = window.pageYOffset;
  var s = null;
  function animation(e) {
    if (s === null) s = e;
    var t = e - s;
    var o = ease(t, a, c, n);
    window.scrollTo(0, o);
    if (t < n) requestAnimationFrame(animation);
  }
  function ease(e, t, o, n) {
    e /= n / 2;
    if (e < 1) return (o / 2) * e * e * e * e + t;
    e -= 2;
    return (-o / 2) * (e * e * e * e - 2) + t;
  }
  requestAnimationFrame(animation);
}
window.onscroll = function () {
  var e = window.pageYOffset | document.body.scrollTop;
  if (e > document.querySelector("#tasks").offsetTop + 120) {
    document.querySelector("#sticky-nav").classList.remove("u-display-none");
    setTimeout(function () {
      document.querySelector("#sticky-nav").style.opacity = 1;
    }, 200);
  } else {
    document.querySelector("#sticky-nav").style.opacity = 0;
    setTimeout(function () {
      document.querySelector("#sticky-nav").classList.add("u-display-none");
    }, 200);
  }
};
document.addEventListener("click", function (e) {
  if (
    document.activeElement.toString() == "[object HTMLButtonElement]" ||
    document.activeElement.toString() == "javascript:void(0)"
  ) {
    document.activeElement.blur();
  }
});
document.querySelectorAll(".info").forEach(function (e) {
  e.addEventListener("click", function () {
    this.classList.toggle("open");
    document.querySelectorAll(".info img").forEach(function (e) {
      if (e.parentElement.classList.contains("open")) {
        e.src = "/img/up-arrow.svg";
      } else {
        e.src = "/img/down-arrow.svg";
      }
    });
  });
});
document.querySelectorAll(".skill").forEach(function (e) {
  e.addEventListener("click", function (e) {
    var t = document.querySelector("#modal-skills");
    document.querySelector("#modal-skills h3").innerHTML =
      this.getAttribute("data-title") || e.target.text;
    document.querySelector("#modal-skills .mdl__body").innerHTML =
      this.getAttribute("data-desc");
    t.classList.remove("u-display-none");
  });
});
document.querySelectorAll(".project").forEach(function (e) {
  e.addEventListener("click", function (e) {
    var t = document.querySelector("#modal-projects");
    var o = this.getAttribute("data-plink");
    var n = this.getAttribute("data-slink");
    var c = this.getAttribute("data-img");
    var a = this.getAttribute("data-title");
    var s = this.getAttribute("data-text");
    var r = this.getAttribute("data-technologies").split("-");
    document.querySelector("#modal-projects h3").innerHTML = a;
    document.querySelectorAll("#modal-projects .link-complete")[0].href = o;
    if (n) {
      document.querySelectorAll("#modal-projects .link-complete")[1].href = n;
      document
        .querySelectorAll("#modal-projects .link-complete")[1]
        .classList.remove("u-display-none");
    } else {
      document
        .querySelectorAll("#modal-projects .link-complete")[1]
        .classList.add("u-display-none");
    }
    document.querySelector("#modal-projects-img").src = c;
    document.querySelector("#modal-projects .mdl__text").innerHTML = s;
    document.querySelector("#modal-projects .technologies").innerHTML = "";
    r.forEach(function (e) {
      var t = document.createElement("div");
      t.setAttribute("class", "skill-sm");
      t.textContent = e;
      document.querySelector("#modal-projects .technologies").append(t);
    });
    t.classList.remove("u-display-none");
  });
});
document.querySelectorAll(".mdl__close").forEach(function (e) {
  e.addEventListener("click", function (e) {
    var t = e.target.getAttribute("data-target");
    document.querySelector("#" + t).classList.add("u-display-none");
  });
});
