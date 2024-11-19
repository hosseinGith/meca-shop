// share modal

let notifIcon = Array.from(document.getElementsByClassName('notifIcon'));
let notifModal = document.getElementById('notifModal');
let closeNotifModal = document.getElementById('closeNotifModal');
// let overlay = document.getElementById('overlay');

notifIcon.forEach((item)=>{
    item.addEventListener('click', function () {
        notifModal.classList.add('active');
        overlay.classList.add('active');
    })
})

closeNotifModal.addEventListener('click', function () {
    notifModal.classList.remove('active');
    overlay.classList.remove('active');
    document.getElementById('threeModal').classList.remove('active');
})
overlay.addEventListener('click', function () {
    notifModal.classList.remove('active');
    overlay.classList.remove('active');
})