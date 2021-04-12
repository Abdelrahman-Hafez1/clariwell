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

    var countall=document.querySelector('.count')
    var counter_1=document.querySelector('.numPlus_1');
    var counter_2=document.querySelector('.numPlus_2');
    var counter_3=document.querySelector('.numPlus_3');
    var counter_4=document.querySelector('.numPlus_4');
    

    
    $(window).scroll(function(){

        if(Math.floor($(window).scrollTop())>=2250&&Math.floor($(window).scrollTop())<=2400){
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


    AOS.init({
        duration: 1200,
      })