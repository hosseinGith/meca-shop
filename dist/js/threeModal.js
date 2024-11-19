// three modal

let threeIcon = document.getElementById('threeIcon');
let threeModal = document.getElementById('threeModal');

threeIcon.addEventListener('click', function () {
    threeModal.classList.add('active');
    overlay.classList.add('active');
})
overlay.addEventListener('click', function () {
    threeModal.classList.remove('active');
    overlay.classList.remove('active');
})