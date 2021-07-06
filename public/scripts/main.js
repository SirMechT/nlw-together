import Modal from './modal.js'

const modal = Modal()

// Pegar todos o botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // adcionar a escuta
    button.addEventListener("click", event =>{
        // abrir a modal
        modal.open()
    })
})