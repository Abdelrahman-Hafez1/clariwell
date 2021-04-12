$(document).ready(function(){

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
    
    
    var slides=document.querySelector('.slides').children;
    var right=$('.fa-angle-right');
    var left=$('.fa-angle-left');
    let count=0;

    right.click(function(){

        plus();
    });

    function plus(){
        $('.overlay').fadeOut(80).fadeIn(80);
        if(count==slides.length-1){
            count=0;
        }else{
            count++;
        }
        
        change();
    }

    left.click(function(){
        if(count==0){
            count=slides.length-1;
        }else{
            count--;
        }
        
        change();
    });
    function change(){
        $('.S').removeClass('slide');
        slides[count].classList.add('slide');
    };

    setInterval(plus,5000);
    var countall=document.querySelector('.count')
    var counter_1=document.querySelector('.numPlus_1');
    var counter_2=document.querySelector('.numPlus_2');
    var counter_3=document.querySelector('.numPlus_3');
    var counter_4=document.querySelector('.numPlus_4');
    

    
    $(window).scroll(function(){
       
        if(Math.floor($(window).scrollTop())>=1280&&Math.floor($(window).scrollTop())<=1295){
            var txt1=counter_1.textContent;
            var new_txt=0;
        
        
            var interval=setInterval(function(){
                
                if(new_txt+1<=txt1){
                    new_txt+=1
                    counter_1.innerHTML=new_txt;
                }else{
                    clearInterval(interval);
                }
                
            },20);

            //second
    
    var txt2=counter_2.textContent;
    var new_txt_2=0;


    var interval_2=setInterval(function(){
        
        if(new_txt_2+1<=txt2){
            new_txt_2+=1
            counter_2.innerHTML=new_txt_2;
        }else{
            clearInterval(interval_2);
        }
        
    },15);
    

    // third

    var txt3=counter_3.textContent;
    var new_txt_3=0;


    var interval_3=setInterval(function(){
        
        if(new_txt_3+1<=txt3){
            new_txt_3+=1
            counter_3.innerHTML=new_txt_3;
            
        }else{
            clearInterval(interval_3);
        }
        
    },40);

    // fourth
    var txt4=counter_4.textContent;
    var new_txt_4=0;


    var interval_4=setInterval(function(){
        
        if(new_txt_4+1<=txt4){
            new_txt_4+=1
            counter_4.innerHTML=new_txt_4;
        }else{
            clearInterval(interval_4);
        }
        
    },15);
        }
    })

    // testimonials Slide Says
    var SaysDiv=document.querySelector('.saysss');
    var Sayss=document.querySelector('.sayss');
    var Says=document.querySelectorAll('.says');
    let counter=0;
    var divWidth=SaysDiv.clientWidth;

    function testPlus(){
        if(counter==Says.length-1){
            counter=0;
        }
        else{
            counter++;
        }
        testChange()
    };
    
    function testMinus(){
        if(counter==0){
            counter=Says.length-1;
        }
        else{
            counter--;
        }
        testChange();
    };

    function testChange(){
        Sayss.style.transform='translate('+(-1*counter*divWidth)+'px)';
    }



    //moving by click&move
    var initialPosition=null
    var newPosition=null;
    var diff=0;
    var moving=false;

    var transform;
    var translate=0;
    
    Sayss.addEventListener('mousedown',function(e){
        Sayss.style.transition='none';
        initialPosition=e.pageX;
        console.log(initialPosition);
        moving=true;
        
    });

    Sayss.addEventListener('mousemove',function(e){
        if(moving){

            newPosition=e.pageX;
            diff=newPosition-initialPosition;
            Sayss.style.transform='translateX('+(diff+translate)+'px)';
        }
    });
    Sayss.addEventListener('mouseup',function(e){
        moving=false;
        Sayss.style.transition='transform 0.5s ease-in-out'
        transform=window.getComputedStyle(Sayss).getPropertyValue('transform');
        
            if(transform!=='none'){
                translate=parseInt(transform.split(',')[4].trim());

                if(diff>100){
                    testMinus();
                    translate=-1*counter*Says[0].clientWidth;
                }
                else if(diff<100){
                    testPlus();
                    translate=-1*counter*Says[0].clientWidth;

                }
            }
    });

    //touch

    Sayss.addEventListener('touchstart',function(e){
        Sayss.style.transition='none';
        initialPosition=e.touches[0].clientX
        console.log(initialPosition);
        moving=true;
        
    });

    Sayss.addEventListener('touchmove',function(e){
        if(moving){

            newPosition=e.touches[0].clientX;
            diff=newPosition-initialPosition;
            Sayss.style.transform='translateX('+(diff+translate)+'px)';
        }
    });
    Sayss.addEventListener('touchend',function(e){
        moving=false;
        Sayss.style.transition='transform 0.5s ease-in-out'
        transform=window.getComputedStyle(Sayss).getPropertyValue('transform');
        
            if(transform!=='none'){
                translate=parseInt(transform.split(',')[4].trim());

                if(diff>100){
                    testMinus();
                    translate=-1*counter*Says[0].clientWidth;
                }
                else if(diff<100){
                    testPlus();
                    translate=-1*counter*Says[0].clientWidth;

                }
            }
    });



    //overlay popup

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
    })

   
    

    AOS.init({
        duration: 1200,
      })
      
});

        