const themeToggle = document.querySelector(".theme-toggle")
const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobilenav")
const hopen = document.querySelector(".h-open")
const hclose = document.querySelector(".h-close")

themeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("darkTheme")
    if (themeToggle.textContent === "🌙") {
        themeToggle.textContent = "☀️"
    } else {
        themeToggle.textContent = "🌙"
    }
})

hamburger.addEventListener("click", function () {
     mobileNav.classList.toggle("hidden")
     hclose.classList.toggle("hidden")
     hopen.classList.toggle("hidden")
})