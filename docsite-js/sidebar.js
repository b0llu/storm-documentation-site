const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebarMenu = document.querySelector("#sidebar-menu");
const closeSidebar = document.querySelector('#close-sidebar');

sidebarToggle.addEventListener("click", () => {
    sidebarMenu.classList.add("position-open");
    sidebarMenu.classList.remove("position-hidden");
});

closeSidebar.addEventListener('click', () => {
    sidebarMenu.classList.add("position-hidden");
    sidebarMenu.classList.remove("position-open");
})