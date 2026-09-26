/* contact.js
   Client-side validation only — there is no backend here, so a
   successful submit just clears the form and shows a confirmation
   message rather than sending anything anywhere. */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");
    let valid = true;

    valid = validateField(name, "Please enter your name.") && valid;
    valid = validateEmail(email) && valid;
    valid = validateField(message, "Please add a short message.") && valid;

    const successEl = document.getElementById("form-success");

    if (valid) {
      successEl.style.display = "block";
      successEl.textContent = `Thanks, ${name.value.trim()} — this is a static demo form, so nothing was actually sent, but on a live site your message would be on its way.`;
      form.reset();
    } else {
      successEl.style.display = "none";
    }
  });
});

function validateField(input, errorMessage) {
  const errorEl = document.getElementById(`${input.id}-error`);
  if (input.value.trim() === "") {
    errorEl.textContent = errorMessage;
    return false;
  }
  errorEl.textContent = "";
  return true;
}

function validateEmail(input) {
  const errorEl = document.getElementById(`${input.id}-error`);
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (input.value.trim() === "") {
    errorEl.textContent = "Please enter your email.";
    return false;
  }
  if (!pattern.test(input.value.trim())) {
    errorEl.textContent = "Please enter a valid email address.";
    return false;
  }
  errorEl.textContent = "";
  return true;
}
