const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const sideCount = mainSlide.querySelectorAll('div').length
sideBar.style.top = `-${(sideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSide('up')
})

downBtn.addEventListener('click', () => {
    changeSide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSide('up')
    } else if (event.key === 'ArrowDown'){
        changeSide('down')
    }
})

let activeSlideIndex = 0

const height = container.clientHeight

function changeSide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === sideCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = sideCount - 1
        }
    }
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}