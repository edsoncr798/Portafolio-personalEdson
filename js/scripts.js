
// let menu=document.querySelector('#menu');

// let menu_bar=document.querySelector('#menu-bar');

//     menu_bar.addEventListener('click', function(){
//         menu.classList.toggle("menu-toggle");
//     });


let menu=document.getElementById('navbar__menu');

let abrir=document.getElementById('navbar__btn__accion');

let cerrar=document.getElementById('navbar__cerrar');

let active=document.getElementById('active');


abrir.addEventListener('click', (e)=>{
    menu.classList.add('mostrar__menu')
    active.classList.remove('active')
})

cerrar.addEventListener('click', (e)=>{
    menu.classList.remove('mostrar__menu')
    active.classList.add('active')
})