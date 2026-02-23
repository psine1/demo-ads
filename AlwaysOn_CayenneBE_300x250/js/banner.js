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
    document.getElementById('wrapper').style.display = 'block';
    

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
    
//   multitimeline.pause(4);

function fr1(){
  var tl_ = gsap.timeline();
      tl_.timeScale(1);  
      tl_

	  .from('#bg, .light-mask', 8, {scale: 2.2, transformOrigin: "50% 20%", ease: "power3.out"}, 0)
    .fromTo(".light", { x: 150 }, { x: 400, duration: 6, ease: "power3.out" }, "<") 
    .fromTo(".light-mask", { autoAlpha: 0 }, { autoAlpha: 0.7, duration: 3, ease: "power3.out" }, "<") 
	  .from('#logo', 1.5, { opacity: 0, ease: "power3.out"}, "<+0.5")			
	  .from('[id*="txt-1-"]', 1, {autoAlpha: 0, y: 20, stagger: 0.2, ease: "power3.out"}, "<+0.75")
    .from('[id*="txt-2-"]', 1, {autoAlpha: 0, y: 20, stagger: 0.2, ease: "power3.out"}, "<+0.3")
	  .fromTo('#btn', 1, {opacity: 0}, {opacity: 1, ease: "power3.out"}, "<+1")

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
		.to("#btn-text img", 0.2, {x: 0, background: "#FFFFFF1A", ease:Power2.easeOut}, 0)

	},
	leave: function () {
	  console.log('leave');
	  var tl = new TimelineMax({
		defaults: { duration: 0.5, ease: 'easeInOut' },
	  });
	  tl
		.to("#btn-text img", 0.2, {x: 0, background: "transparent", ease:Power2.easeOut}, 0)

	},
  };

}

