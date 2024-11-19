let addComment=Array.from(document.getElementsByClassName('addComment'));
let commentModal=document.getElementById('commentModal');

addComment.forEach((item)=>{
    item.addEventListener('click',function () {
        commentModal.classList.add('active');
        overlay.classList.add('active');
    })
})
closeModal.addEventListener('click',function () {
    commentModal.classList.remove('active');
    overlay.classList.remove('active');
})
overlay.addEventListener('click',function () {
    commentModal.classList.remove('active');
    overlay.classList.remove('active');
})