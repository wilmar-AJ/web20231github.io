const hamburguer = document.querySelector("#hamburguer");
const closed = document.querySelector("#close");
const menu = document.querySelector("#menu");

hamburguer.addEventListener('click',()=>{
    menu.style.display='flex';
    closed.style.display='block';
    hamburguer.style.display='none';
});
closed.addEventListener('click',()=>{
    menu.style.display='none';
    closed.style.display='none';
    hamburguer.style.display='block';
});