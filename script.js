$(function(){
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    var i = 0;
    var line1 = 'Hi, My name is';
    var line2 = 'Praveen Kumar Emani.';
    var line3 =' I am a ';
    var line4 ='Full stack web Developer';
    var speed = 80;
    
    function typeWriter(text,divid) {
      if (i < text.length) {
        document.getElementById(divid).innerHTML += text.charAt(i);
        i++;
        setTimeout(function(){typeWriter(text,divid)}, speed);
      }
    }

    typeWriter(line1,"line1");
    
    setTimeout(function(){
        i=0;
        typeWriter(line2,"line2");
    },2500);
   
    setTimeout(function(){
        i=0;
        typeWriter(line3,"line3");
    },5000);
  
    setTimeout(function(){
        i=0;
        typeWriter(line4,"line4");
    },6000);
    
    
  
   
    
    // i=0;
    // typeWriter(line2,"line2");
    // i=0;
    // typeWriter(line3,"line3");
    // i=0;
    // typeWriter(line4,"line4");

    setTimeout(() => {
        $(".home-btn").css({
            "display":"block"
        });
        $(".home-btn").addClass("animated fadeInDown");
        
    }, 8000);
    

    var lastScrollTop = 0;

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll code

            $(".box").css({
                "animation": "spin1 5s ease-in-out",
                "animation-fill-mode": "forwards",


            })
        } else {
            // upscroll code

            $(".box").css({
                "animation": "spin2 4s ease-in-out",
                "animation-fill-mode": "forwards",


            })
        }
        lastScrollTop = st;
        });

        $(".home-btn").click(function(){
            
            $(".box").css({
              "animation": "spin1 5s ease-in-out",
              "animation-fill-mode": "forwards",
            });
         })
          
        
})