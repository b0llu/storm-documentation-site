const toggleThemeBtn = document.querySelector("#toggle-theme");
const bodyDoc = document.querySelector("body");

const rootDoc = document.querySelector(":root");

const addDarkTheme = () => {
  rootDoc.style.setProperty("--default-color", "#101011");
  rootDoc.style.setProperty("--white-black", "#ffffff");
  rootDoc.style.setProperty("--red", "#ff002b");
  rootDoc.style.setProperty("--primary-color", "#55E5F5");
  rootDoc.style.setProperty("--primary-color-dark", "#66e8f6");
  rootDoc.style.setProperty("--secondary-color", "#c3c5c7");
  rootDoc.style.setProperty("--alert-color", "#e65147");
  rootDoc.style.setProperty("--success-color", "#4caf50");
  rootDoc.style.setProperty("--warning-color", "#ff9800");
  rootDoc.style.setProperty("--nav-bg-color", "#272727");
  rootDoc.style.setProperty("--header-color", "#238ac5");
  rootDoc.style.setProperty("--content-color", "#b6bab3");
  rootDoc.style.setProperty("--card-container-bg", "#aeabab");
  rootDoc.style.setProperty("--text-color", "#1c1b1b");
};

const addLightTheme = () => {
  rootDoc.style.setProperty("--default-color", "#ffffff");
  rootDoc.style.setProperty("--white-black", "#171616");
  rootDoc.style.setProperty("--red", "#ff002b");
  rootDoc.style.setProperty("--primary-color", "#36c4d3");
  rootDoc.style.setProperty("--primary-color-dark", "#66e8f6");
  rootDoc.style.setProperty("--secondary-color", "#c3c5c7");
  rootDoc.style.setProperty("--alert-color", "#e65147");
  rootDoc.style.setProperty("--success-color", "#4caf50");
  rootDoc.style.setProperty("--warning-color", "#ff9800");
  rootDoc.style.setProperty("--nav-bg-color", "#41535c");
  rootDoc.style.setProperty("--header-color", "#238ac5");
  rootDoc.style.setProperty("--content-color", "#000000");
  rootDoc.style.setProperty("--card-container-bg", "#aeabab");
  rootDoc.style.setProperty("--text-color", "#000000");
};

const darkThemeToggleBtn = () => {
  toggleThemeBtn.classList.remove("fa-moon");
  toggleThemeBtn.classList.add("fa-sun");
};

const lightThemeToggleBtn = () => {
  toggleThemeBtn.classList.add("fa-moon");
  toggleThemeBtn.classList.remove("fa-sun");
};

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme")) {
    addDarkTheme();
    darkThemeToggleBtn();
  } else {
    addLightTheme();
    lightThemeToggleBtn();
  }
});

toggleThemeBtn.addEventListener("click", () => {
  if (toggleThemeBtn.classList.contains("fa-moon")) {
    darkThemeToggleBtn();
    addDarkTheme();
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
    lightThemeToggleBtn();
    addLightTheme();
  }
});
