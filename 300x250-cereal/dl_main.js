
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array(
  'images/bg1.jpg'
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

    function changebkg() { 
      document.querySelector(".flair").style.backgroundImage = 'url("images/particle-1-a.png")';
      document.querySelector(".flair--2").style.backgroundImage = 'url("images/particle-1-a.png")';
      document.querySelector(".flair--3").style.backgroundImage = 'url("images/particle-2-a.png")';
      document.querySelector(".flair--4").style.backgroundImage = 'url("images/particle-3-a.png")';
      document.querySelector(".flair--5").style.backgroundImage = 'url("images/particle-4-a.png")';
      document.querySelector(".flair--6").style.backgroundImage = 'url("images/particle-5-a.png")';
      document.querySelector(".flair--7").style.backgroundImage = 'url("images/particle-6-a.png")';
     }

//     multitimeline.play(8)



var endframe = 0;

function fr1(){
  
  gsap.from('#starbust img', 60, { rotation: 360, ease: "none" }, "<")


  const tl_ = gsap.timeline({
    repeat: 1,
    onRepeat: () => {
      gsap.to(".wrapAd", 0.35, { autoAlpha: 0, repeat: 1, yoyo: true  }, "<")

      endframe ++
      console.log("endframe" + endframe);

    }
  });
  

      tl_.timeScale(1);  
      tl_

      .to("#s2, #m2, #i2, #l2, #e2", { duration: 0.01, fill: "#ffa300"  }, "<")
      .to('#starbust', 0.01, { autoAlpha: 0.25, ease: "none" }, "<")

      .to('#logo', 0.01, { y: 90, scale: 1.65, ease: "power3.out" }, "<")      

      .from('#logo', 0.5, { autoAlpha: 0, scale: 1.5, ease: "power3.out" }, "<")
      .from('#catalina', 0.5, { y: 30, autoAlpha: 0, ease: "power3.out" }, "<+0.2")
      .from('#sun1', 1, { scale: 1.35, autoAlpha: 0, transformOrigin: "50% 50%", ease: "power3.out" }, "<")
      .from('#sun2', 0.5, { scale: 0, transformOrigin: "50% 100%", ease: "elastic.out(0.5,0.3)" }, "<")
      .from('#crunch', 0.5, { y: 30, autoAlpha: 0, ease: "power3.out" }, "<+0.2")

      .to('#logo', 0.65, { y: 0, scale: 1, ease: "power3.out" }, "<+0.65")    

      .from('#prod1', 0.5, { autoAlpha: 0, ease: "power3.out" }, "<+0.15")
      .from('#bg1', 1, { scale: 1.8, transformOrigin: "50% 0%", ease: "power3.out" }, "<")
      .from('#starbust', 1, { scale: 1.8, transformOrigin: "50% 0%", ease: "power3.out" }, "<")      
      .from('#prod1', 1.25, { y: 50, scale: 1.35, ease: "power3.out" }, "<-0.2")
      
      .from('#txt1', 0.65, { y: 50, ease: "power3.out" }, "<+0.3")

      .to('#txt-1-a path', 0.01, { fill: "#ffa300", ease: "power3.out" }, "<")
      .from('#txt-1-a', 0.65, { y: 50, autoAlpha: 0, ease: "power3.out" }, "<")
      .to('#txt-1-a path', 0.4, { fill: "#FFFFFF", ease: "power3.out" }, "<+0.2")

      .to('#txt-1-b path', 0.01, { fill: "#ffa300", ease: "power3.out" }, "<")
      .from('#txt-1-b', 0.65, { y: 50, autoAlpha: 0, ease: "power3.out" }, "<")
      .to('#txt-1-b path', 0.4, { fill: "#FFFFFF", ease: "power3.out" }, "<+0.2")
      .from('.excR', 0.65, { scale: 0, stagger: 0.05, transformOrigin: "50% 50%", ease: "elastic.out(1,0.3)" }, ">-0.2")

      .from(".wrapper", 0.01, {autoAlpha: 0}, "<-0.5")
      .add( function (){flairs(1)}, "<" )
      .add( function () {endframe ++} , "<")
      .add( function () {console.log("endframe" + endframe)} , "<")

      .from('#cta', 0.65, { y: 100, ease: "elastic.out(0.2,0.3)" }, "<")

      .to('#prod1', 0.75, { x: -250, ease: "back.inOut(1.1)" }, "<+2.35")
      .to('#txt1', 0.35, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.1")  

    
      .from('#prod2', 1.25, { x: 250, ease: "back.inOut(1.1)"}, "<")
      .from('#bg2', 0.5, { autoAlpha: 0, ease: "power3.out" }, "<0.8")
      .to('#starbust', 0.35, { autoAlpha: 0.5, ease: "none" }, "<")


      .from('#txt2', 0.65, { y: 50, ease: "power3.out" }, "<+0.3")

      .to('#txt-2-a path', 0.01, { fill: "#ffa300", ease: "power3.out" }, "<")
      .from('#txt-2-a', 0.65, { y: 50, autoAlpha: 0, ease: "power3.out" }, "<")
      .to('#txt-2-a path', 0.4, { fill: "#FFFFFF", ease: "power3.out" }, "<+0.2")

      .to('#txt-2-b path', 0.01, { fill: "#ffa300", ease: "power3.out" }, "<")
      .from('#txt-2-b', 0.65, { y: 50, autoAlpha: 0, ease: "power3.out" }, "<")
      .to('#txt-2-b path', 0.4, { fill: "#FFFFFF", ease: "power3.out" }, "<+0.2")
      .from('.excL', 0.65, { scale: 0, stagger: 0.05, transformOrigin: "50% 50%", ease: "elastic.out(1,0.3)" }, ">-0.2")          

      .add( function (){flairs(2)}, "<-0.8" )
      .add( function () {endframe ++} , "<")
      .add( function () {console.log("endframe" + endframe)} , "<")

      .to('#prod2', 0.75, { x: -250, ease: "back.inOut(1.1)" }, "<+2.35")

      .to('#txt2', 0.35, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.1")  
    
      .from('#prod3', 1.25, { x: 250, ease: "back.inOut(1.1)"}, "<")
      .from('#bg3', 0.5, { autoAlpha: 0, ease: "power3.out" }, "<+0.8")
      .to('#starbust', 0.35, { autoAlpha: 0.25, ease: "none" }, "<")


      .from('#txt3', 0.65, { y: 50, ease: "power3.out" }, "<+0.3")

      .to('#txt-3-a path', 0.01, { fill: "#ffa300", ease: "power3.out" }, "<")
      .from('#txt-3-a', 0.65, { y: 50, autoAlpha: 0, ease: "power3.out" }, "<")
      .to('#txt-3-a path', 0.4, { fill: "#FFFFFF", ease: "power3.out" }, "<+0.2")

      .to('#txt-3-b path', 0.01, { fill: "#ffa300", ease: "power3.out" }, "<")
      .from('#txt-3-b', 0.65, { y: 50, autoAlpha: 0, ease: "power3.out" }, "<")
      .to('#txt-3-b path', 0.4, { fill: "#FFFFFF", ease: "power3.out" }, "<+0.2")
      .from('.excL2', 0.65, { scale: 0, stagger: 0.05, transformOrigin: "50% 50%", ease: "elastic.out(1,0.3)" }, ">-0.2")          

     // .add( function () {endframe = 3} , "<-0.8")
      .add( function () {endframe ++} , "<")
      .add( function () {console.log("endframe" + endframe)} , "<")
      .add( function (){ flairs(3) }, "<" )

      .from('#null', 0.5, { y: 30, autoAlpha: 0, ease: "power3.out" }, "<+4")


    

return tl_  
}


function flairs(flairIndex = 1) {

  const masterTl = gsap.timeline({ paused: true });
  const cannon = document.querySelector(".cannon");
  const angle = 15;
  
  let tl1 = gsap.timeline({})
    .to(cannon, { rotation: -angle, duration: 0.15, ease: "power1.inOut" })
    .to(cannon, { rotation: angle, ease: "power1.inOut", duration: 0.15, repeat: -1, yoyo: true })
    .to(cannon, { rotation: 0, duration: 0.15, ease: "power1.inOut" });
  
  const bullets = [];
  const bulletsContainer = document.querySelector(".flair-container");
  const tl1Time = tl1.duration();
  
  for (let i = 0; i < 80; i++) {
    const randomSuffix = gsap.utils.random(2, 7, 1);
    const className = `flair${flairIndex}--${randomSuffix}`;
    const flairBullet = document.createElement("div");
    flairBullet.setAttribute("class", `flair flair-bullet ${className}`);
    bulletsContainer.appendChild(flairBullet);
    bullets.push(flairBullet);
    gsap.set(flairBullet, { scale: gsap.utils.random(0.4, 0.8), opacity: 0, x: 0, y: 0, rotation: gsap.utils.random(0, 360) });
  }
  
  // explosion
   let tl2 = gsap.timeline()
    .to(bullets, { opacity: 1, duration: 0.1, stagger: { each: 0.005 } })
    .to(bullets, { duration: tl1Time, physics2D: { velocity: "random(600, 450)", angle: () => 270 + gsap.getProperty(cannon, "rotation"),  gravity: 600  }, rotation: "random(0, 360)", stagger: { each: 0.02 },
  
    onComplete: () => {
      bullets.forEach(b => b.remove());
    }
    
  
  }, 0);
  
  masterTl.add(tl1, 0).add(tl2, 0).play();
  
  
  
  
  
  if ( endframe === 7 ){
      tl2.play();
      gsap.delayedCall(2.65, () => {
        tl2.pause();  // Pausar la animación después de 4 segundos (2 segundos después de que comienza)
        tl1.pause();
      });
    }
  
  else {
    tl2.play();
    tl1.play();
  
  }
  
  
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

