const myFoto = document.querySelector('.about-me__img-container')
const aboutMeSubtitle = document.querySelector('.about-me__subtitle')
const aboutMe = document.querySelector('.about-me__inner')

appendFoto()
window.addEventListener('resize', appendFoto)

function appendFoto(){
    if(document.documentElement.clientWidth < 768){
        aboutMeSubtitle.after(myFoto)
    } else{
        aboutMe.prepend(myFoto)
    }
}