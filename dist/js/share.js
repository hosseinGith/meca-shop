// share modal

let shareIcon =  Array.from(document.getElementsByClassName('shareIcon'));
let shareModal = document.getElementById('shareModal');
let closeShareModal = document.getElementById('closeShareModal');
// let overlay = document.getElementById('overlay');

shareIcon.forEach((item)=>{
    item.addEventListener('click', function () {
        shareModal.classList.add('active');
        overlay.classList.add('active');
    })
})
closeShareModal.addEventListener('click', function () {
    shareModal.classList.remove('active');
    overlay.classList.remove('active');
    document.getElementById('threeModal').classList.remove('active');
})
overlay.addEventListener('click', function () {
    shareModal.classList.remove('active');
    overlay.classList.remove('active');
})