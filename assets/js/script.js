'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// SIDEBAR
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}


// TESTIMONIALS MODAL
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

testimonialsItem.forEach(item => {

  item.addEventListener("click", function () {

    if (modalImg)
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;

    if (modalTitle)
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;

    if (modalText)
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}

if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
}


// CUSTOM SELECT
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });
}

selectItems.forEach(item => {

  item.addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();

    if (selectValue)
      selectValue.innerText = this.innerText;

    elementToggleFunc(select);
    filterFunc(selectedValue);

  });

});


// FILTER
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  filterItems.forEach(item => {

    if (selectedValue === "all") {
      item.classList.add("active");
    } 
    else if (selectedValue === item.dataset.category) {
      item.classList.add("active");
    } 
    else {
      item.classList.remove("active");
    }

  });

};


// FILTER BUTTONS
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {

  btn.addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();

    if (selectValue)
      selectValue.innerText = this.innerText;

    filterFunc(selectedValue);

    if (lastClickedBtn)
      lastClickedBtn.classList.remove("active");

    this.classList.add("active");

    lastClickedBtn = this;

  });

});


// CONTACT FORM
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {

  input.addEventListener("input", function () {

    if (form && form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } 
    else {
      formBtn.setAttribute("disabled", "");
    }

  });

});


// PAGE NAVIGATION (FIXED)
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {

  link.addEventListener("click", () => {

    pages.forEach(page => page.classList.remove("active"));
    navigationLinks.forEach(nav => nav.classList.remove("active"));

    pages[index].classList.add("active");
    navigationLinks[index].classList.add("active");

    window.scrollTo(0,0);

  });

});