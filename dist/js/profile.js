
// edit profile

let editProfile=document.getElementById('edit-profile');
let editModal=document.getElementById('editModal');
let closeEditModal=document.getElementById('closeEditModal');
let openProfileMenu=document.getElementById('openProfileMenu');
let profileMenu=document.getElementById('profile-menu');

editProfile.addEventListener('click',function () {
   overlay.classList.add('active');
   editModal.classList.add('active');
})
closeEditModal.addEventListener('click',function () {
    overlay.classList.remove('active');
    editModal.classList.remove('active');
 })
openProfileMenu.addEventListener('click',function () {
    profileMenu.classList.toggle('active');
 })
 overlay.addEventListener('click',function () {
   overlay.classList.remove('active');
   editModal.classList.remove('active');
})