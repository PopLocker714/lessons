const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearObjectFunction()
        slide.classList.add('active')
    })
}

function clearObjectFunction () {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}