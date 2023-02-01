/*BUTTON DE MENU*/

const button_bars = document.getElementById('fa-bars') //boton bars
const links_nav=document.getElementById('links') //area de links
const nav_hidden = document.getElementById('nav_hidden') //ocultar links
const button_close =document.getElementById('close_nav')//boton de cierre
const links_free= document.getElementById('links_free')
const links_a = document.getElementById('links_a')
const ancla_links=document.querySelectorAll('.links_a')

button_bars.addEventListener('click',()=>{
    links_nav.classList.add('links_show')
    nav_hidden.classList.add('nav_hidden_show')
    links_free.classList.add('links_free_show')

    
})
button_close.addEventListener('click',()=>{
    links_nav.classList.remove('links_show')
    nav_hidden.classList.remove('nav_hidden_show')
    links_free.classList.remove('links_free_show')
})
links_free.addEventListener('click',()=>{
    links_nav.classList.remove('links_show')
    nav_hidden.classList.remove('nav_hidden_show')
    links_free.classList.remove('links_free_show')
})
ancla_links.forEach(a => {
    a.addEventListener('click',()=>{
        
    links_nav.classList.remove('links_show')
    nav_hidden.classList.remove('nav_hidden_show')
    links_free.classList.remove('links_free_show')
       
    })
});


/*
window.addEventListener('click',(e)=>{
    if (links_nav.classList.contains('links')&& e.target !=links_nav) {
        console.log('es un link')
        links_nav.classList.toggle('links_show')
    }
    else{
        console.log('no es un link')
    }
})
*/
/*
window.addEventListener('click',(e)=>{
    if (menu.classList.contains('spread')&& e.target !=menu && e.target !=hamburger) {
        menu.classList.toggle('spread')
    }
})
*/

/*toggle de ventana modal
const button_close=document.getElementById('toggle_window_modal')
const window_modal=document.getElementById('window_modal')

button_close.addEventListener('click',()=>{
	window_modal.classList.add('.window_modal_hidden')
    })
*/
/*GALLERY LEER MAS*/ 
const link_gallery=document.getElementById('link_gallery1')
const gallery_text=document.getElementById('gallery_text1')
link_gallery.addEventListener('click',()=>{
    gallery_text.classList.toggle('gallery_text')
    if (gallery_text.classList.contains('gallery_text')) {
        link_gallery.innerHTML='Ver mas';
    } else{
        link_gallery.innerHTML='Ver menos';
    }
})
const link_gallery2=document.getElementById('link_gallery2')
const gallery_text2=document.getElementById('gallery_text2')
link_gallery2.addEventListener('click',()=>{
    gallery_text2.classList.toggle('gallery_text')
    if (gallery_text2.classList.contains('gallery_text')) {
        link_gallery2.innerHTML='Ver mas';
    } else{
        link_gallery2.innerHTML='Ver menos';
    }
})
const link_gallery3=document.getElementById('link_gallery3')
const gallery_text3=document.getElementById('gallery_text3')
link_gallery3.addEventListener('click',()=>{
    gallery_text3.classList.toggle('gallery_text')
    if (gallery_text3.classList.contains('gallery_text')) {
        link_gallery3.innerHTML='Ver mas';
    } else{
        link_gallery3.innerHTML='Ver menos';
    }
})
const link_gallery4=document.getElementById('link_gallery4')
const gallery_text4=document.getElementById('gallery_text4')
link_gallery4.addEventListener('click',()=>{
    gallery_text4.classList.toggle('gallery_text')
    if (gallery_text4.classList.contains('gallery_text')) {
        link_gallery4.innerHTML='Ver mas';
    } else{
        link_gallery4.innerHTML='Ver menos';
    }
})


/*link_gallery.addEventListener('click',()=>{
        gallery_text_show.classList.toggle('gallery_text')
    })*/
/*VENTANA MODAL DE PORTAFOLIO DISEÑO */
const images=document.querySelectorAll('.img');
const containerImage=document.querySelector('.container_img');
const imageContainer=document.querySelector('.img_show')
const text_img= document.querySelector('.copy')


images.forEach(i => {
    i.addEventListener('click',()=>{
        addImage(i.getAttribute('src'),i.getAttribute('alt'));
        
       
    })
});
const addImage=(src,alt)=>{
    containerImage.classList.toggle('move');
    imageContainer.src=src;
    text_img.innerHTML=alt;
    
}
containerImage.addEventListener('click',()=>{
    containerImage.classList.toggle('move')
})


/*

const images=document.querySelectorAll('.img')
const containerImage=document.querySelector('.container_img')


images.forEach(i => {
    i.addEventListener('click',()=>{
        containerImage.classList.toggle('move')
        addImage(i.getAttribute('src'))
        addImage(i.getAttribute('alt'))
       
    })
});

const addImage=(src,alt)=>{

}
*/ 

