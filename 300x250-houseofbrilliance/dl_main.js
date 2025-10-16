
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array(
  'images/bg.jpg'
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

  
}


// VARIABLES GLOBALES
var multitimeline = gsap.timeline();
    multitimeline.timeScale(1);
    multitimeline
    
    ;
gsap.set("#lights", {autoAlpha: 0})

    
//    multitimeline.pause(9);

const timelines = [];


function pauseAllAnimations() {
  timelines.forEach(tl => tl.pause());
}


    const wrap = document.getElementById('wrap_seq');

    // CONFIG: carpeta/base de las imágenes
    const basePath = 'images/';  // cambialo a lo que uses en tu ad
    const total    = 22;

    for (let i = 1; i <= total; i++) {
      const img = new Image();
      img.src = basePath + i + '.jpg';
      img.alt = 'frame ' + i;
      img.loading   = 'lazy';   // rendimiento
      img.decoding  = 'async';
      img.referrerPolicy = 'no-referrer'; // por si el ad server lo requiere
      // si querés forzar ancho fijo por frame (ej: 150px), descomentá:
       img.style.width = '165px'; img.style.height = 'auto';


      wrap.appendChild(img);
    }


    gsap.set(".wrapAd", { scale: 1.4, transformOrigin: "123px 186px", ease: "power3.out"  })



  const tl_All = gsap.timeline({ repeat: 1 });

      tl_All.timeScale(1);  
      tl_All

      .from("#bg", { duration: 6, scale: 1.2, rotation: 0.05, transformOrigin: "90% 90%", ease: "power3.out"  }, "<")

       .from("#logo", { duration: 1, y: -100, ease: "power3.out"  }, "<+0.35")

      .from("[id*='txt-1-']", { duration: 0.75, y: 20, autoAlpha: 0, stagger: 0.2, ease: "power3.out"  }, "<+0.5")

       .from("#cta", { duration: 0.75, y: 100, ease: "power3.out"  }, "<+1.2")
       .from("#cta", { duration: 0.35, autoAlpha: 0, ease: "power3.out"  }, "<")

      .to("[id*='txt-1-']", { duration: 0.75, autoAlpha: 0, ease: "power3.out"  }, "<+3")

      .to("#bg", { duration: 6, scale: 1.2, rotation: 0.05, transformOrigin: "90% 90%", ease: "power3.out"  }, "<")
      .to("#bg", { duration: 1, autoAlpha: 0, ease: "power3.out"  }, "<+0.35")
      .to("#wrap_seq img", { duration: 1.4, x: -3465, repeat: -1, ease: "steps(21)" }, "<")

      .from("[id*='txt-2-']", { duration: 0.75, y: 20, autoAlpha: 0, stagger: 0.2, ease: "power3.out"  }, "<+0.5")
      .from("#wrap_seq", { duration: 1, y: 200, ease: "power3.out" }, "<")

      .from("[id*='txt-3']", { duration: 0.75, y: 20, autoAlpha: 0, stagger: 0.2, ease: "power3.out"  }, ">")
      
      .from(".null", { duration: 0.75, y: 5 }, "<")

      

  const shines = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      shines
       .fromTo(".hover", {x: -150}, { duration: 2, x: 150, ease: "power3.out"  }, "<+0.5")




  const stopTimelines = gsap.timeline({  });
      stopTimelines
             .add(function () {  pauseAllAnimations()  }, "<+28")
     .add(function () { tl_All.pause()  }, "<")




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


gsap.to(".hover", 0.01, {x: -300}, 0)

  var a = {
    enter: function () {      
      console.log('enter');
      var tl_hover = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl_hover
        .fromTo(".hover", 1.15, {x: -150}, {x: 150, ease: "power3.out"}, 0)
        .to("#cta", 0.2, {scale: 1.05, rotation: 0, ease: "power3.out"}, 0)

    },
    leave: function () {
      console.log('leave');
      var tl_hover = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl_hover
        .to("#cta", 0.2, {scale: 1, rotation: 0.01, ease: "power3.out"}, 0)

    },
  };

}

