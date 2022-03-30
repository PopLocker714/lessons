const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)    // Вызывается когда находимся над ph
    placeholder.addEventListener('dragenter', dragenter)  // Вызывается когда заходим на територию
    placeholder.addEventListener('dragleave', dragleave)    // Вызывается когда перетащили но вышили
    placeholder.addEventListener('drop', dragdrop)        // Вызывается когда отпустили
}


function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'))
    if (item.textContent === 'Перетащи меня') {item.textContent = 'Отпусти пж'}
}

function dragend(event) {
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item' // перетираем все классы и добовляем item
}


function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    if (item.textContent === 'Отпусти пж') {item.textContent = 'Перетащи меня'}
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    if (item.textContent === 'Отпусти пж') {item.textContent = 'Перетащи меня'}
}