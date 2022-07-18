const mobileNav = document.querySelector(".mobile-nav")
const hamburgerMenu = document.querySelector(".hamburger")
const hamburgerClose = document.querySelector(".hamburger-close")
const mobileNavLink = document.querySelectorAll(".mobile-nav-link")

hamburgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("is-active")
  hamburgerClose.classList.toggle("is-active")
})

mobileNavLink.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.toggle("is-active")
    hamburgerClose.classList.toggle("is-active")
  })
});

