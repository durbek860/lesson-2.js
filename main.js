let nav = document.querySelector("nav")
let bars = document.querySelector(".fa-bars")
let xIcon = document.querySelector(".fa-close")

let loginPage = document.querySelector(".login")


function openBar(){
    nav.style.top = "60px"
    bars.style.display = "none"
    xIcon.style.display = "block"
}

function closeBar(){
    nav.style.top = "-100%"
     bars.style.display = "block"
    xIcon.style.display = "none"
}


function openLoginPage(){
    loginPage.style.display = "grid"
}

function closeLoginPage(){
    loginPage.style.display = "none"
}
