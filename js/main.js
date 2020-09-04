window.onscroll = function(){

    let navBar = document.getElementById('nav');

    if ( window.scrollY > 0 ){
        navBar.classList.add("nav-bar-scrolled");
    }else{
        navBar.classList.remove("nav-bar-scrolled");
    }

}
