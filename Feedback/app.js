// Gettings Elements from the DOM
const rating = document.querySelectorAll('.ratings');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

// Attach Events
ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('ratings')) {
        // console.log(e.target.parentNode.classList.contains('ratings'))

        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `
})

function removeActive() {
    for (let i = 0; i < rating.length; i++) {
        rating[i].classList.remove('active');
    }
}