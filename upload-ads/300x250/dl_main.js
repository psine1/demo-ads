
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array("images/prod.png");

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
var r = 100;
var dur = 1;

var multitimeline = gsap.timeline({repeat: 1});
    multitimeline
    .add(fr1(), 0)

    ;

  //  multitimeline.play(18);

//gsap.set("#bgblue", {y: 259})

function fr1(){

var tl_ = gsap.timeline();
tl_.timeScale( 1 );  
tl_

.from("#bg, #prod, .light-mask", 15, {scale: 1.1, transformOrigin: "10% 80%", ease: "power3.out"}, 0)
.from("#prod", 0.8, {x: -120, y: -10, ease: "power3.out"}, 0)

.from("#txt-1-1 path", 0.35, {scale: 0, transformOrigin: "50% 100%", stagger: 0.03, ease: "back.out(1.7)"}, "<")
.from("#txt-1-1-shadow path", 0.35, {scale: 0, transformOrigin: "50% 100%", stagger: 0.03, ease: "back.out(1.7)"}, "<")
.from("[id*='txt-1-1']", 0.5, {x: 200, transformOrigin: "50% 100%", stagger: 0.02, ease: "power1.out"}, "<")

.from("#txt-1-2 path", 0.35, {scale: 0, transformOrigin: "100% 50%", stagger: 0.03, ease: "back.out(1.7)"}, "<+0.35")
.from("#txt-1-2-shadow path", 0.35, {scale: 0, transformOrigin: "50% 100%", stagger: 0.03, ease: "back.out(1.7)"}, "<")

.from("#txt-1-3 path", 0.35, {scale: 0, transformOrigin: "100% 50%", stagger: 0.03, ease: "back.out(1.7)"}, "<+0.35")
.from("#txt-1-3-shadow path", 0.35, {scale: 0, transformOrigin: "50% 100%", stagger: 0.03, ease: "back.out(1.7)"}, "<")


.from("#ft-1-1", 0.8, {x: -60, autoAlpha: 0, ease: "power3.out"}, "<")
.from("#ft-1-2", 0.8, {x: 60, autoAlpha: 0, ease: "power3.out"}, "<")
.from("#ft-1-glob", 0.5, {scale: 0.6, autoAlpha: 0, rotation: 30, transformOrigin: "0% 50%", ease: "power3.out"}, "<+0.5")

.from("#ft-2-1", 0.5, {x: 20, autoAlpha: 0, ease: "power3.out"}, "<+0.2")
.from("#ft-1-sign", 0.5, {scale: 0.35, rotation: 360, autoAlpha: 0, transformOrigin: "0% 75%", ease: "power3.out"}, "<+0.2")
.from("#ft-2-2", 0.5, {x: 20, autoAlpha: 0, ease: "power3.out"}, "<")

.from("#ft-3-1", 0.5, {y: -10, autoAlpha: 0, ease: "power3.out"}, "<+0.2")

    .fromTo(".light", { x: -100 }, { x: 500, duration: 6, ease: "power3.out" }, "<") 
    .fromTo(".light-mask", { autoAlpha: 0.5 }, { autoAlpha: 1, duration: 3, ease: "power3.out" }, "<") 

.to("#ft-1-glob", 0.65, {scale: 1.1, repeat: 1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.out"}, "<+0.5")
.to("#ft-2-1", 0.65, {scale: 1.1, repeat: 1, yoyo: true, ease: "power3.out"}, "<")
.to("#ft-1-sign", 0.65, {scale: 1.1, repeat: 1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.out"}, "<")
.to("#ft-2-2", 0.65, {scale: 1.1, repeat: 1, yoyo: true, ease: "power3.out"}, "<")

;

return tl_  



}





function initAnimations(){
    multitimeline.timeScale(1); 
}


//HANDLERS
function initHandlers() {

var clicktag = document.getElementById('clicTr');
    clicktag.addEventListener('mouseup', function(event) {
        
         
    //    window.open(window.clickTag,'_blank');
        
          
    })


setTimeout(function() {

  clicktag.addEventListener('mouseenter', function (e) {
      a.enter();
  });

  clicktag.addEventListener('mouseleave', function (e) {
      a.leave();
  });

}, 1000);






  var a = {
    enter: function () {
      console.log('enter');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta img", 0.3, {scale: 1, backgroundColor: "#A3082A", borderRadius: "30px", ease:Power2.easeOut}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta img", 0.3, {scale: 1, backgroundColor: "#EB0029", borderRadius: "30px", ease:Power2.easeOut}, 0)

    },
  };

}

