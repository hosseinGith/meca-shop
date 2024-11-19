
// compare modal

let selectProduct=document.getElementById('selectProduct');
let compareModal=document.getElementById('compareModal');
let closeCompareModal=document.getElementById('closeCompareModal');

selectProduct.addEventListener('click',function () {
    compareModal.classList.add('active');
    overlay.classList.add('active');
})
closeCompareModal.addEventListener('click',function () {
    compareModal.classList.remove('active');
    overlay.classList.remove('active');
})
overlay.addEventListener('click',function () {
    compareModal.classList.remove('active');
    overlay.classList.remove('active');
})