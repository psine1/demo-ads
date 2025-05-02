
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array(
  'images/logo.png'
);

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;
    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

function imagesLoaded() {
    
    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('banner_content').style.display = 'block';
    

    initHandlers();
    initAnimations();

}

/* PARA DETECTAR SI ES IOs */
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (is_Mac == true || iOS == true) {
     
}



/* PARA DETECTAR SI ES IE */
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){

  alert("IE");
  
}



// VARIABLES GLOBALES
var multitimeline = gsap.timeline();
    multitimeline.timeScale(1);
    multitimeline
    .add(fr1(), 0)
    
    ;

//    multitimeline.pause(9);

gsap.registerPlugin(SplitText)


function fr1(){
  var text1 = new SplitText("#text-1 p", {type: "lines"});
  var text5 = new SplitText("#text-5 p", {type: "lines"});

  var tl_ = gsap.timeline();
      tl_.timeScale(1);  
      tl_
      .from("#bg1", 9, {scale: 1.35, transformOrigin: "50% 30%", ease: "power3.out"}, "<")

      
       .fromTo("#right-skyBlue", 2, {scale: 4.5, x: -250, y: -350, rotation: 20}, {scale: 1.5, x: 0, y: -50, rotation: 20, transformOrigin: "0% 50%", ease: "power3.out"}, "<")


      .from(text1.lines, { duration: 0.65, y: 20, autoAlpha: 0,  autoAlpha: 0,  stagger: 0.15 },  "<+0.3")
      .from("#cta", 0.65, {scale: 0.75, autoAlpha: 0, ease: "power3.out"}, ">")    



      .to("#right-skyBlue", 1, {scale: 1, y: -70, rotation: 20, scale: 1.5, transformOrigin: "0% 50%", ease: "power3.out"}, "<+2.5")
      .from("#lines", 1, {autoAlpha: 0, x: -200, y: -200, ease: "power3.out"}, "<-0.2")

      .to("#text-1", 0.5, { autoAlpha: 0, ease: "power3.out"}, "<+0.5") 

      .from("#img1", 0.35, {autoAlpha: 0, ease: "power3.out"}, "<")
      .from("#img1", 9, {scale: 1.35, transformOrigin: "50% 30%", ease: "power3.out"}, "<")      

      .from("[id*='circle1']", 0.65, { autoAlpha: 0, scale: 0, ease: "power3.out"}, "<+0.5")      
      .fromTo("#circle1-icon img", 0.65, {rotation: -5}, { rotation: 5, transformOrigin: "50% 25%", repeat: -1, yoyo: true, ease: "none"}, "<")          

      .from("#text-2", 0.65, { autoAlpha: 0, y: 20, ease: "power3.out"}, "<+0.2")  
      .to("#cta", 0.35, {scale: 1.05, rotation: 0.05, repeat: 1, yoyo: true, ease: "power1.out"}, ">")    

      .to("#bg1", 0.01, {autoAlpha: 0, ease: "power3.out"}, "<")

      .to("[id*='circle1']", 0.65, { autoAlpha: 0, scale: 0, ease: "power3.out"}, "<+2.5")      
      .to("#text-2", 0.65, { autoAlpha: 0, ease: "power3.out"}, "<")  

      .add(pauseParticles)

      .from("[id*='circle2']", 0.65, { autoAlpha: 0, scale: 0, ease: "power3.out"}, "<+0.2")      
      .fromTo("#circle2-icon-a img", 0.65, {y: -5}, { y: 0, transformOrigin: "50% 25%", repeat: -1, yoyo: true, ease: "power1.inOut"}, "<")  

      .from("#img2", 0.35, {autoAlpha: 0, ease: "power3.out"}, "<")
      .from("#img2", 9, {scale: 1.35, transformOrigin: "50% 30%", ease: "power3.out"}, "<")        

      .from("#text-3", 0.65, { autoAlpha: 0, y: 20, ease: "power3.out"}, "<+0.2")  
      .to("#cta", 0.35, {scale: 1.05, rotation: 0.05, repeat: 1, yoyo: true, ease: "power1.out"}, ">")    

      .to("[id*='circle2']", 0.65, { autoAlpha: 0, scale: 0, ease: "power3.out"}, "<+4")      
      .to("#text-3", 0.65, { autoAlpha: 0, ease: "power3.out"}, "<")  

      .from("#img3", 0.35, {autoAlpha: 0, ease: "power3.out"}, "<")
      .from("#img3", 9, {scale: 1.35, transformOrigin: "50% 30%", ease: "power3.out"}, "<")        

      .from("[id*='circle3']", 0.65, { autoAlpha: 0, scale: 0, ease: "power3.out"}, "<+0.2")      
      .fromTo("#circle3-icon img", 0.65, {scale: 1}, { scale: 1.08, repeat: -1, yoyo: true, ease: "power1.inOut"}, "<")          
      .from("#text-4", 0.65, { autoAlpha: 0, y: 20, ease: "power3.out"}, "<+0.2")  
      .to("#cta", 0.35, {scale: 1.05, rotation: 0.05, repeat: 1, yoyo: true, ease: "power1.out"}, ">")       
      
      
      .to("[id*='circle3']", 0.65, { autoAlpha: 0, scale: 0, ease: "power3.out"}, "<+4")   

      .to("#right-skyBlue", 1, {scale: 1.5, x: 0, y: -50, rotation: 20, transformOrigin: "0% 50%", ease: "power3.out"}, "<")

      .to("#lines", 1, {autoAlpha: 0, x: -200, y: -200, ease: "power3.out"}, "<")

      .from("#bgEnd", 0.01, {autoAlpha: 0, ease: "power3.out"}, "<")
      .from("#bgEnd", 9, {scale: 1.35, transformOrigin: "50% 30%", ease: "power3.out"}, "<")


      .to("#text-4", 0.65, { autoAlpha: 0, ease: "power3.out"}, "<")  

      .from(text5.lines, { duration: 0.65, y: 20, autoAlpha: 0,  autoAlpha: 0,  stagger: 0.15 },  "<+0.3")
      .to("#cta", 0.35, {scale: 1.05, rotation: 0.05, repeat: 1, yoyo: true, ease: "power1.out"}, ">")       
      

return tl_  
}


function pauseParticles() {
  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom[0].pJS.particles.move.enable = false;
    window.pJSDom[0].pJS.fn.particlesRefresh();
  }
}

function particleWrap (id){
  
  particlesJS(id, {
  "particles": {
    "number": {
      "value": 500,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.75,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": true
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 160,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.6
        }
      },
      "bubble": {
        "distance": 200,
        "size": 20,
        "duration": 2,
        "opacity": 0.8,
        "speed": 6
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});  

}

particleWrap("particles-js");



function initAnimations(){
    multitimeline.timeScale(1); 
    
}


//HANDLERS
function initHandlers() {

  var clicktag = document.getElementById('clickTag');
  clicktag.addEventListener('mouseup', function(event) {
      
       
      window.open(window.clickTag,'_blank');
      
        
  })


  


  clicktag.addEventListener('mouseenter', function (e) {
      a.enter();
  });

  clicktag.addEventListener('mouseleave', function (e) {
      a.leave();
  });


  var a = {
    enter: function () {
      console.log('enter');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta", 0.2, {backgroundColor: "#344f40", ease: "power3.out"}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta", 0.2, {backgroundColor: "#389241", ease: "power3.out"}, 0)

    },
  };

}

