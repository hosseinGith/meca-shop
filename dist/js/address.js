// edit address
let editAddressBtn = document.getElementById('editAddressBtn');
let editAddress = document.getElementById('editAddress');
let closeAddressModal=document.getElementById('closeAddressModal');

editAddressBtn.addEventListener('click', function () {
    editAddress.classList.add('active');
    overlay.classList.add('active');
})
closeAddressModal.addEventListener('click', function () {
    editAddress.classList.remove('active');
    overlay.classList.remove('active');
})
overlay.addEventListener('click', function () {
    editAddress.classList.remove('active');
    overlay.classList.remove('active');
})