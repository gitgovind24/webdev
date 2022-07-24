var  modalBtn=document.querySelector( ".modal-btn")
var modalOverlay =document.querySelector(".modal-overlay ")
var closeBtn=document.querySelector(".close-btn")

modalBtn.addEventListener('click',function(){
    modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click',function(){
    modalOverlay.classList.remove('open-modal')
})