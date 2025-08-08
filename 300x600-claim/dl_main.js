
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
    
    ;


    
//    multitimeline.pause(9);

function pauseAllAnimations() {
  timelines.forEach(tl => tl.pause());
}

//tl_All.pause(5);

  const stairFills = [
  ".stair-purple1",
  ".stair-light",
  ".stair-purple2",
  ".stair-purple3",
  ".stair-path1",
  ".stair-gray1",
  ".stair-gray2",
  ".stair-purple4",
  ".stair-gray3",
  ".stair-purple5",
  ".stair-purple6"
];


  const tl_lines = gsap.timeline({  });
      tl_lines.timeScale(1);  
      tl_lines
      .fromTo(".line1", {drawSVG: "0% 10%"}, {duration: 3, stagger: 0.05, drawSVG: "70% 100%", repeat: -1, yoyo: true, ease: "none"}, "<")
      .from("#line1_wrap", {duration: 5, rotation: 60, repeat: -1, yoyo: true, ease: "none"}, "<+0.4")
      .fromTo(".line2", {drawSVG: "20% 0%"}, {duration: 3, stagger: 0.05, drawSVG: "80% 100%", repeat: -1, yoyo: true, ease: "none"}, "<+0.5")
      .from("#line2_wrap", {duration: 5, rotation: -90, repeat: -1, yoyo: true, ease: "none"}, "<")


  const tl_All = gsap.timeline({  });

      tl_All.timeScale(1);  
      tl_All



      .fromTo("#logo", {scale: 3, y: 260}, {duration: 0.75, y: 260, scale: 1.5, ease: "power3.out"})
      .to("#logo", {duration: 0.75, y: 0, scale: 1, ease: "power3.out"}, ">+0.2")


      .from(".stair-stroke", {duration: 0.75, stagger: 0.05, drawSVG: 0, ease: "power3.out"}, ">-0.5")
      .fromTo(stairFills, { opacity: 0 }, { autoAlpha: 1, duration: 0.25, stagger: 0.05, ease: "power3.out" }, "<+0.2")
      .from(".golden", {duration: 0.45, y: -200, autoAlpha: 0, ease: "power3.inOut"}, ">-0.6")
      .from("#door-wrap", {duration: 0.01, autoAlpha: 0, ease: "power3.inOut"}, "<")
      .from("#door-wrap svg", {duration: 0.75, y: 300, transformOrigin: "50% 100%", ease: "power3.inOut"}, ">")

      .from("#wrap-image", {duration: 4, scale: 1.3, transformOrigin: " 100% 20%", ease: "power3.out"}, "<")
      
      .from("#character1", {duration: 1, x: -100, y: 50, transformOrigin: "50% 50%", ease: "power3.out"}, "<+0.75")
      .from("#character1", {duration: 0.5, autoAlpha: 0, ease: "power3.out"}, "<")      

      .from("#character2", {duration: 1, x: -100, y: 50, transformOrigin: "50% 50%", ease: "power3.out"}, "<+0.2")
      .from("#character2", {duration: 0.5, autoAlpha: 0, ease: "power3.out"}, "<")

      .from("#character3", {duration: 1, x: -100, y: 50, transformOrigin: "50% 50%", ease: "power3.out"}, "<+0.2")
      .from("#character3", {duration: 0.5, autoAlpha: 0, ease: "power3.out"}, "<")      

      .from("#character4", {duration: 1, x: -100, y: 50, transformOrigin: "50% 50%", ease: "power3.out"}, "<+0.2")
      .from("#character4", {duration: 0.5, autoAlpha: 0, ease: "power3.out"}, "<")

      .from("#stars-wrap", {duration: 0.5, scale: 0, autoAlpha: 0, stagger: 0.2, ease: "power3.out"}, "<-0.8")

      .from(".star1", {duration: 0.5, scale: 0, repeat: -1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.inOut"}, "<")
      .from(".star2", {duration: 0.7, scale: 0, repeat: -1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.inOut"}, "<+0.05")
      .from(".star3", {duration: 0.5, scale: 0, repeat: -1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.inOut"}, "<+0.05")
      .from(".star4", {duration: 0.8, scale: 0, repeat: -1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.inOut"}, "<+0.1")
      .from(".star5", {duration: 0.5, scale: 0, repeat: -1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.inOut"}, "<+0.05")
      .from(".star6", {duration: 0.9, scale: 0, repeat: -1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.inOut"}, "<+0.05")
      .from(".star7", {duration: 0.5, scale: 0, repeat: -1, yoyo: true, transformOrigin: "50% 50%", ease: "power3.inOut"}, "<+0.05")

      .from("[id*='txt-1-']", {duration: 0.5, y: 50, autoAlpha: 0, stagger: 0.2, ease: "power3.out"}, "<+0.5")


      .from("#button", {duration: 0.5, autoAlpha: 0, scale: 1.35, ease: "power3.out"}, "<+1")      





  const tl_door = gsap.timeline({  });

      tl_door.timeScale(1);  
      tl_door

      .fromTo("#boy", {rotation: -2, transformOrigin: "50% 50%"}, {duration: 0.75, rotation: 2, repeat: -1, yoyo: true, repeatDelay: 0.1,  transformOrigin: "50% 50%", ease: "none"}, "<")      
      .fromTo("#girl", {x: -3, transformOrigin: "50% 50%"}, {duration: 1.4, x: 5, repeat: -1, yoyo: true, repeatDelay: 0.1,  transformOrigin: "50% 50%", ease: "none"}, "<")      
      .fromTo("#head1", {y: -1, transformOrigin: "50% 50%"}, {duration: 0.75, y: 1, repeat: -1, yoyo: true, repeatDelay: 0.1,  transformOrigin: "50% 50%", ease: "none"}, "<")      
      .fromTo("#girl1", {rotation: -2, transformOrigin: "50% 50%"}, {duration: 1, rotation: 0, repeat: -1, yoyo: true, repeatDelay: 0.1,  transformOrigin: "50% 50%", ease: "none"}, "<")      

      .fromTo("#head2", {rotation: -2, transformOrigin: "50% 50%"}, {duration: 1, rotation: 3, repeat: -1, yoyo: true, repeatDelay: 0.1,  transformOrigin: "50% 50%", ease: "none"}, "<")      
      .fromTo("#head3", {rotation: 5, transformOrigin: "50% 50%"}, {duration: 1, rotation: 0, repeat: -1, yoyo: true, repeatDelay: 0.1,  transformOrigin: "50% 50%", ease: "none"}, "<")      




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
      var tl_hover = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl_hover
        .to(".topButton ", 0.2, {y: 2, x: 2, rotation: 0, ease: "power3.out"}, 0)

    },
    leave: function () {
      console.log('leave');
      var tl_hover = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl_hover
        .to(".topButton ", 0.2, {y: 0, x: 0, rotation: 0.01, ease: "power3.out"}, 0)

    },
  };

}

