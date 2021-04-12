var x=true;
    var icon=$('.nav-toggle-icon');
    var nav=$('.toggle-nav');
    icon.click(function(){
            nav.slideToggle(700)
    });
        
    $('.fa-search').click(function(){
        $('.search').fadeIn(500)
    });
    $('.fa-times').click(function(){
        $('.search').fadeOut(500)
    });

    var click=$('.overlay-img-show .overlay');
    var father=document.querySelectorAll('.overlay-card');
    var overlay=document.querySelectorAll('.overlay-card .overlay-all');
    var popupLay=document.querySelectorAll('.overlay-car .card-show');
    var close=document.querySelectorAll('.card-show .fa-window-close');
    
    click[0].addEventListener('click',function(e){
        father[0].classList.remove('d-none');
        father[0].classList.remove('remove-overlay')
        father[0].classList.add('show-overLay');
        
    });
    click[1].addEventListener('click',function(e){
        father[1].classList.remove('d-none');
        father[1].classList.remove('remove-overlay');
        father[1].classList.add('show-overLay');

    });
    click[2].addEventListener('click',function(e){
        father[2].classList.remove('d-none');
        father[2].classList.remove('remove-overlay')
        father[2].classList.add('show-overLay');

    });

    close.forEach(function(clo){
        clo.addEventListener('click',function(){
            father.forEach(function(fath){
                fath.classList.remove('show-overLay')
                fath.classList.add('d-none');
            })
        })
    });


    AOS.init({
        duration: 1200,
      })