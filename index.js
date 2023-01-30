const animatedImage = document.querySelector('.animated__img')
window.addEventListener('scroll' , () => {
    let value = window.scrollY
    console.log(value)
    if(value > 30) {
        animatedImage.classList.add('animated__img__animate')
    }
    if(value > 750) {
        animatedImage.classList.remove('animated__img__animate')
    }
})
