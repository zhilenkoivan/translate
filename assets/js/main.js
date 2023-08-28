const modal = document.querySelector('.front-modal');
const close = document.querySelector('.front-close');
setTimeout(() => {
    modal.classList.add("front-modal--active");
}, 1500);

close.addEventListener('click', ()=> {
    modal.style.display = "none";
})