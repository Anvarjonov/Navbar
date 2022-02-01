 const MenuBtn = document.querySelector("#menu-btn");



 MenuBtn.onclick = function(){
     MenuBtn.classList.toggle('fa-times');
     document.querySelector('.navbar').classList.toggle('active');
 }