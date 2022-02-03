const toggleThemeBtn = document.querySelector("#toggle-theme");
const bodyDoc = document.querySelector("body");

const rootDoc = document.querySelector(":root");

const addDarkTheme = () => {
  rootDoc.style.setProperty("--default-color", "#101011");
  rootDoc.style.setProperty("--for-theme", "#ffffff");
  rootDoc.style.setProperty("--primary-color", "#55E5F5");
  rootDoc.style.setProperty("--primary-color-dark", "#05cddf");
  rootDoc.style.setProperty("--secondary-color", "#c3c5c7");
  rootDoc.style.setProperty("--alert-color", "#e65147");
  rootDoc.style.setProperty("--success-color", "#4caf50");
  rootDoc.style.setProperty("--warning-color", "#ff9800");
  rootDoc.style.setProperty("--nav-bg-color", "#272727");
  rootDoc.style.setProperty("--header-color", "#238ac5");
  rootDoc.style.setProperty("--content-color", "#b6bab3");
  rootDoc.style.setProperty("--card-container-bg", "#f0f0f0");
  rootDoc.style.setProperty("--text-color", "#1c1b1b");
  rootDoc.style.setProperty("--icon-color", "#b6bab3");
};

const addLightTheme = () => {
  rootDoc.style.setProperty("--default-color", "#e8ecee");
  rootDoc.style.setProperty("--for-theme", "#171616");
  rootDoc.style.setProperty("--primary-color", "#238ac5");
  rootDoc.style.setProperty("--primary-color-dark", "#66e8f6");
  rootDoc.style.setProperty("--secondary-color", "#c3c5c7");
  rootDoc.style.setProperty("--alert-color", "#e65147");
  rootDoc.style.setProperty("--success-color", "#4caf50");
  rootDoc.style.setProperty("--warning-color", "#ff9800");
  rootDoc.style.setProperty("--nav-bg-color", "#272727");
  rootDoc.style.setProperty("--header-color", "#238ac5");
  rootDoc.style.setProperty("--content-color", "#000000");
  rootDoc.style.setProperty("--card-container-bg", "#f0f0f0");
  rootDoc.style.setProperty("--text-color", "#000000");
  rootDoc.style.setProperty("--icon-color", "#ffffff");
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
