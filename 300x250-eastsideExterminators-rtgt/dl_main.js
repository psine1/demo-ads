
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




var cockroach = gsap.timeline();
cockroach.timeScale(1.5);  
cockroach
.fromTo('[id*="leg1"]', 0.75, {rotation: 5}, { rotation: -5, repeat: -1,   transformOrigin: "center center",  yoyo: true, ease: "none" }, "<")
.fromTo('[id*="leg2"]', 0.75, {rotation: 10}, { rotation: -10, repeat: -1, transformOrigin: "center center",  yoyo: true, ease: "none" }, "<+0.2")
.fromTo('[id*="leg3"]', 0.75, {rotation: -5}, { rotation: 5, repeat: -1, transformOrigin: "center center",  yoyo: true, ease: "none" }, "<+0.2")
.to('[id*="body"]', 0.5, { rotation: -2, repeat: -1,   transformOrigin: "center center",  yoyo: true, ease: "none" }, "<")

.fromTo('#cockroach', 5, {x: 300}, { x: -400,   transformOrigin: "center center",  yoyo: true, ease: "none" }, "<")



function fr1(){
  var tl_ = gsap.timeline();
      tl_.timeScale(1);  
      tl_
      .from('#footer1', 0.75, { y: 200, ease: "power3.out" }, "<")
      .from('#footer2', 0.75, { y: 200, ease: "power3.out" }, "<+0.05")
      .from('#logo', 1, { autoAlpha: 0, ease: "power3.out" }, "<+0.5")
      .from('#cta', 0.75, { autoAlpha: 0, scale: 0.85, ease: "power3.out" }, "<+0.5")

      .from('#txt-1-1', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<")
      .from('#txt-1-2', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")
      .from('#txt-2-1', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+1.5")
      .from('#txt-2-2', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")

      .fromTo('#smoke1', 6, {x: -300, scale: 0.5, y: -50}, { x: 300, scale: 3, y: -50, ease: "power3.out" }, "<+1")      
      .fromTo('#smoke2', 6, {x: -300, scale: 1.2, y: 50}, { x: 300, scale: 4, y: 50, ease: "power3.out" }, "<+0.5 ")     
      .to('[id*="txt-1"], [id*="txt-2"]', 0.75, { autoAlpha: 0, ease: "power3.out" }, "<")


      .to('#smoke2, #smoke1', 2, {autoAlpha: 0, ease: "power3.out" }, "<")     
      .to('#wrap', 1, {autoAlpha: 0, ease: "power3.out" }, "< ")     
      
      
      .from('#txt-3-1', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.5")
      .from('#txt-3-2', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")
      .from('#txt-3-3', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")
      .from('#txt-3-4', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")

      .from('#txt-4-1', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+1.5")
      .from('#txt-4-2', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")
      


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
        .to("#cta", 0.2, {backgroundColor: "#7f1519", ease: "power3.out"}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta", 0.2, {backgroundColor: "#dc1119", ease: "power3.out"}, 0)

    },
  };

}

