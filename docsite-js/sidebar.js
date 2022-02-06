const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebarMenu = document.querySelector("#sidebar-menu");
const closeSidebar = document.querySelector('#close-sidebar');
const body = document.querySelector('body')

sidebarToggle.addEventListener("click", () => {
    sidebarMenu.classList.add("position-open");
    sidebarMenu.classList.remove("position-hidden");
    body.classList.add("position-fixed")
});

closeSidebar.addEventListener('click', () => {
    sidebarMenu.classList.add("position-hidden");
    sidebarMenu.classList.remove("position-open");
    body.classList.remove("position-fixed")
})