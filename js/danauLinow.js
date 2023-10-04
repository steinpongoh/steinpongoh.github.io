let menuDetail = document.getElementById('menuDetail')
let goToArticle = document.getElementById('goToArticle')
function toggleMenu() {
    menuDetail.classList.toggle("active")
}

window.onscroll = function () {
    let verticalScroll = scrollY
    console.log(verticalScroll)
    if (verticalScroll >= 460) {
        document.querySelector('header').classList.add('navActive')
    } else {
        document.querySelector('header').classList.remove('navActive')
    }
}

function navigate(className){
    let getVertical=document.querySelector(className).offsetTop - 50
    window.scrollTo(0, getVertical)
}