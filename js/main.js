/* ClassIQ — mobile nav, subscribe and auth form validation. */
(function () {
  "use strict";

  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  var subscribe = document.querySelector(".subscribe");
  if (subscribe) {
    var msg = subscribe.querySelector(".form-msg");
    subscribe.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = subscribe.querySelector("input[type=email]");
      var value = input.value.trim();

      if (!EMAIL.test(value)) {
        msg.textContent = "Please enter a valid email address.";
        msg.className = "form-msg is-error";
        input.focus();
        return;
      }
      msg.textContent = "Thanks! You're subscribed.";
      msg.className = "form-msg is-ok";
      subscribe.reset();
    });
  }

  var authForm = document.querySelector(".auth-form");
  if (authForm) {
    authForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;

      authForm.querySelectorAll(".field").forEach(function (field) {
        var input = field.querySelector("input");
        var note = field.querySelector(".field-msg");
        var value = input.value.trim();
        var error = "";

        if (!value) {
          error = "This field is required.";
        } else if (input.type === "email" && !EMAIL.test(value)) {
          error = "Please enter a valid email address.";
        } else if (input.type === "password" && value.length < 6) {
          error = "Password must be at least 6 characters.";
        }

        note.textContent = error;
        input.setAttribute("aria-invalid", error ? "true" : "false");
        if (error && ok) { input.focus(); ok = false; }
      });

      if (ok) window.location.href = "dashboard.html";
    });

    authForm.querySelectorAll(".field input").forEach(function (input) {
      input.addEventListener("input", function () {
        input.setAttribute("aria-invalid", "false");
        var note = input.closest(".field").querySelector(".field-msg");
        if (note) note.textContent = "";
      });
    });
  }
})();
