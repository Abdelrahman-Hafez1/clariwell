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


    AOS.init({
        duration: 1200,
      })