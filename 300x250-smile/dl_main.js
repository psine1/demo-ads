
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

  alert("IE");
  
}


// VARIABLES GLOBALES
var multitimeline = gsap.timeline();
    multitimeline.timeScale(1);
    multitimeline
    .add(fr1(), 0)
    
    ;


    
//    multitimeline.pause(9);


gsap.registerPlugin(MorphSVGPlugin);



function fr1(){
  var tl_ = gsap.timeline();
      tl_.timeScale(1);  
      tl_

      .from('#starbust img', 60, { rotation: 360, ease: "none" }, "<")
      .to("#s2, #m2, #i2, #l2, #e2", { duration: 0.01, fill: "#ffa300"  }, "<")

      .to('#txt1', 0.01, { y: 110, ease: "power3.out" }, "<")

      .to('#txt1', 0.01, { scale: 1.5, ease: "power3.out" }, "<")


      .from('#txt-1-a', 0.65, { x: -100, autoAlpha: 0, ease: "power3.out" }, "<")
      .from('#txt-1-b', 0.65, { x: 100, autoAlpha: 0, ease: "power3.out" }, "<")
      .to('#txt1', 0.65, { scale: 1.25, y: 0, ease: "power3.out" }, ">-0.3")

      .to('#txt-1-c path', 0.01, { fill: "#ffa300", ease: "power3.out" }, "<")
      .from('#txt-1-c', 0.65, { y: 100, autoAlpha: 0, ease: "power3.out" }, "<")
      .to('#txt-1-c path', 0.4, { fill: "#FFFFFF", ease: "power3.out" }, "<+0.2")


      .from('#prod1', 0.5, { autoAlpha: 0, ease: "power3.out" }, "<")
      .from('#bg', 1, { scale: 1.8, transformOrigin: "50% 0%", ease: "power3.out" }, "<")
      .from('#starbust', 1, { scale: 1.8, transformOrigin: "50% 0%", ease: "power3.out" }, "<")      
      .from('#prod1', 1.25, { y: 50, scale: 1.35, ease: "power3.out" }, "<-0.2")
      .from('#prod2', 1.25, { x: -60, scale: 0.75, transformOrigin: "50% 80%", ease: "power3.out" }, "<+0.5")
      .from('#prod3', 1.25, { x: 60, scale: 0.75, transformOrigin: "50% 80%", ease: "power3.out" }, "<")
      .from('#prod2, #prod3', 0.01, { autoAlpha: 0, ease: "power3.out" }, "<")      

      .from('#smileGroup', 0.65, { y: 100, autoAlpha: 0, ease: "power3.out" }, "<+0.5")    
      .fromTo("#s2", {morphSVG: "#s2", fill: "#ffa300"}, { duration: 0.35, fill: "#FFFFFF", morphSVG: "#s1", ease: "back.out(1.7)"  }, ">-0.3")
      .fromTo("#m2", {morphSVG: "#m2", fill: "#ffa300"}, { duration: 0.35, fill: "#FFFFFF", morphSVG: "#m1", ease: "back.out(1.7)"  }, "<")
      .fromTo("#i2", {morphSVG: "#i2", fill: "#ffa300"}, { duration: 0.35, fill: "#FFFFFF", morphSVG: "#i1", ease: "back.out(1.7)"  }, "<")
      .fromTo("#l2", {morphSVG: "#l2", fill: "#ffa300"}, { duration: 0.35, fill: "#FFFFFF", morphSVG: "#l1", ease: "back.out(1.7)"  }, "<")
      .fromTo("#e2", {morphSVG: "#e2", fill: "#ffa300"}, { duration: 0.35, fill: "#FFFFFF", morphSVG: "#e1", ease: "back.out(1.7)"  }, "<")
      .from('.excR', 0.65, { scale: 0, stagger: 0.05, transformOrigin: "50% 50%", ease: "elastic.out(1,0.3)" }, ">-0.2")
      .from('.excL', 0.65, { scale: 0, stagger: 0.05, transformOrigin: "50% 50%", ease: "elastic.out(1,0.3)" }, "<")      


      .from('#cta', 0.65, { y: 100, ease: "elastic.out(0.2,0.3)" }, "<+1")
      .add( function () {}, "<+1")

      .to('#txt1', 0.5, { autoAlpha: 0, scale: 0.85, transformOrigin: "50% 50%", ease: "power3.out" }, "<+2")
      .from('#logo', 0.5, { autoAlpha: 0, scale: 0.85, ease: "power3.out" }, "<")
      .from('#catalina', 0.5, { y: 30, autoAlpha: 0, ease: "power3.out" }, "<+0.2")
      .from('#sun1', 1, { scale: 1.35, autoAlpha: 0, transformOrigin: "50% 50%", ease: "power3.out" }, "<")
      .from('#sun2', 0.5, { scale: 0, transformOrigin: "50% 100%", ease: "elastic.out(0.5,0.3)" }, "<")
      .from('#crunch', 0.5, { y: 30, autoAlpha: 0, ease: "power3.out" }, "<+0.2")




return tl_  
}



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
        .to("#cta img", 0.2, {y: -3, rotation: 0, ease: "power3.out"}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta img", 0.2, {y: 0, rotation: 0.01, ease: "power3.out"}, 0)

    },
  };

}

