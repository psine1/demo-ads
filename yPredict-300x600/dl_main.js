
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
    .add(animEyes(), 0)

    ;


    var tl_stars = gsap.timeline({});
    tl_stars.timeScale(1);  
    tl_stars
      .from('[id*="stars1"]', 0.75, { autoAlpha: 0, repeat: -1, yoyo: true, ease: "none"}, 0)
      .from('[id*="stars2"]', 0.75, { autoAlpha: 0, repeat: -1, yoyo: true, ease: "none"}, "<+0.7")



        var tl_arm = gsap.timeline();
        tl_arm.timeScale(1);  
        tl_arm
          .to('[id*="-arm"]', 1, { rotation: 5, repeat: -1, yoyo: true, ease: "power1.out"}, ">")

function animEyes() {

  var tl_eyes = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 2.2});
  tl_eyes.timeScale(1);  
  tl_eyes
    .from('[id*="-eyes"]', 0.1, { autoAlpha: 0, ease: "none"}, 0)
    .to('[id*="-eyes"]', 0.1, { autoAlpha: 0, ease: "none"}, ">")

  return tl_eyes;
}

      
function fr1(){
  var tl_ = gsap.timeline();
      tl_.timeScale(1);  
      tl_

        .from('.wrap-character', 1.4, { x: -800, ease: Power3.easeOut}, 0)
        .to('.wrap-character div', 1, { y: -5, repeat: -1, yoyo: true, ease: "none"}, 0)

        .from('[id*="txt-1-a"]', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out"}, "<+0.7")
        .from('[id*="txt-1-b"]', .75, { y: 20, autoAlpha: 0, ease: "power3.out"}, "<+0.2")


        .fromTo("[id*='traders']", 0.5, {clip:"rect(0px 75px 25px 75px)"}, {clip:"rect(0px 140px 25px 0px)", ease: "power3.out"}, "<+1")
        .fromTo("[id*='number']", 0.01, {clip:"rect(0px 158px 68px 0px)"}, {clip:"rect(0px 158px 68px 0px)", ease: "power3.out"}, "<")
        .from("[id*='number'] img", 0.75, {y: 100, scale: 0.3, ease: "back.out(1.1)"}, "<+0.1")

        .from("[id*='cta']", 0.3, {autoAlpha: 0, ease: "power3.out"}, "<+1")
        .from("[id*='cta']", 0.75, {scale: 1.5, ease: "bounce.out"}, "<")


return tl_  
}


tl_stars.addPause(15);
multitimeline.addPause(15);
tl_arm.addPause(15);


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
        .to("#cta", 0.2, {scale: 1.05, rotation: 0, ease: "power3.out"}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta", 0.2, {scale: 1, rotation: 0.01, ease: "power3.out"}, 0)

    },
  };

}

