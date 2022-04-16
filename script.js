const menuBar = document.querySelector(".menu-bar")
const menuModal = document.querySelector(".modal-menu")

menuBar.addEventListener("click", function() {
    menuModal.classList.toggle("hide-menu-modal")
})