window.onscroll = function(){

    let navBar = document.getElementById('nav');

    if ( window.scrollY > 0 ){
        navBar.classList.add("nav-bar-scrolled");
    }else{
        navBar.classList.remove("nav-bar-scrolled");
    }
}


document.addEventListener( 'DOMContentLoaded', function () {

    let slider = document.getElementsByClassName('image-slider');
    for ( let i = 0; i < slider.length ; i ++){
        new Splide( slider[i], {
            'heightRatio': 0.5,
            'width': 600,
            'height': 400,
            'cover': true,
            'drag': true,
        } ).mount();
    }

} );


const menuBtn = document.querySelector('.toggle-content');
const toggle_nav = document.querySelector('.toggle-nav');
const tog_section = document.querySelector('.toggle-section-1');
const tog_section_2 = document.querySelector('.toggle-section-2');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (menuOpen === false){
        menuOpen = true;
        menuBtn.classList.add('open');
        toggle_nav.classList.add('open-toggle');
        tog_section.classList.add('translate-tog');
        tog_section_2.classList.add('translate-tog');

    }else{
        menuOpen = false;
        menuBtn.classList.remove('open');
        toggle_nav.classList.remove('open-toggle');
        tog_section.classList.remove('translate-tog');
        tog_section_2.classList.remove('translate-tog');
    }
});

function CloseToggle (){
    menuOpen = false;
    menuBtn.classList.remove('open');
    toggle_nav.classList.remove('open-toggle');
    tog_section.classList.remove('translate-tog');
    tog_section_2.classList.remove('translate-tog');
}


window.onscroll = function(){
    navBarScrollEffect();
}

function navBarScrollEffect (){
    let refElement = document.getElementById('nav');
    let toggleContent = document.getElementsByClassName('toggle-content')[0];
    let toggleBtn = document.getElementsByClassName('btn_burger')[0];

    if ( window.scrollY > 0){
        refElement.classList.add("nav-bar-scrolled");
        toggleContent.classList.add("nav-bar-scrolled");
        toggleBtn.classList.add("nav-bar-scrolled");
    }else {
        refElement.classList.remove("nav-bar-scrolled");
        toggleContent.classList.remove("nav-bar-scrolled");
        toggleBtn.classList.remove("nav-bar-scrolled");
    }
}
