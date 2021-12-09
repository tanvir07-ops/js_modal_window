"use strict";

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
openModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// globally jate amar keyboard er escape(Esc) button click korlei jate remove hoye jay tar jonne:

document.addEventListener("keydown", function (e) {
  // eikhane !modal.classList.contains("hidden") er means holo jotokkhon obdi modal class er moddeh hidden class nah thakbe(mane e modal ti jotokkhon obdi display dekhabe tokhon ei esc te click korle jate remove hoy jay modal ti)
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
