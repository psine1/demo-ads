//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array(
  'images/endFrame.jpg'
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

gsap.set( "#th1, #th2, #th3", {autoAlpha: 0 } )

function fr1(){
  var tl_ = gsap.timeline();
      tl_.timeScale(1);  
      tl_


    //.from(".st0", {duration: 0.01, drawSVG: 0}, "<")

    //.to("#svgRay, #lighten", {duration: 0.35, autoAlpha: 0}, ">")


	  .from('#img1, #svgRay', 1, {scale: 2, rotation: 0.05, transformOrigin: "20% 60%", ease: "power3.inOut"}, "<")
      .add( function (){animThunder(".ray1Prod", ".ray2Prod", ".ray3Prod", ".th1Prod", ".th2Prod", ".th3Prod", 0.65, 0.55)}, "<" )
	  .from('#logo', 0.65, { y: 300, ease: Power4.easeOut}, "<")	

	  .from('[id*="txt-1-"]', 0.65, {autoAlpha: 0, y: 20, stagger: 0.15, ease: "power3.out"}, "<+0.65")
	  .from('#price', 1, {x: 150, ease: "power3.out"}, "<")
	  .from('#cta', 1, {scale: 0.5, autoAlpha: 0, ease: "power3.out"}, "<+0.5")

	  .to('[id*="txt-1-"]', 0.65, {autoAlpha: 0, y: 0, ease: "power3.out"}, "<+2.2")
	  .to('#img1, #svgRay', 1.25, {scale: 1, y: 200, rotation: 0.05, transformOrigin: "10% 50%", ease: "power3.out"}, "<")


	  .from('[id*="txt-2-"]', 0.65, {autoAlpha: 0, y: 20, stagger: 0.15, ease: "power3.out"}, "<+0.5")
	  .from('#img2', 5, {scale: 1.25, ease: "power3.out"}, "<")
	  .from('#img2', 0.25, {autoAlpha: 0, ease: "power3.out"}, "<")

	  .to('#cta', 0.65, {x: -90, ease: "power3.out"}, "<")
	  .to('#price', 0.65, {x: 300, ease: "power3.out"}, "<")

	  .to('[id*="txt-2-"]', 0.65, {autoAlpha: 0, y: 0, ease: "power3.out"}, "<+2.2")
	  .to('#img2', 1.25, {scale: 1.25, autoAlpha: 0, rotation: 0.05, transformOrigin: "50% 50%", ease: "power3.out"}, "<")

	  .from('[id*="txt-3-"]', 0.65, {autoAlpha: 0, y: 20, stagger: 0.15, ease: "power3.out"}, "<+0.5")
	  .from('#img3', 5, {scale: 1.25, ease: "power3.out"}, "<")
	  .from('#img3', 0.25, {autoAlpha: 0, ease: "power3.out"}, "<")


	  .to('[id*="txt-3-"]', 0.65, {autoAlpha: 0, y: 0, ease: "power3.out"}, "<+2.2")
	  .to('#img3', 1.25, {scale: 1.25, autoAlpha: 0, rotation: 0.05, transformOrigin: "50% 50%", ease: "power3.out"}, "<")
    
    

    .from('[id*="txt-4-"]', 0.65, {autoAlpha: 0, y: 20, stagger: 0.15, ease: "power3.out"}, "<+0.5")
	  .fromTo('#clinic1', 1, {x: 500}, {x: 0, ease: "power3.out"}, "<")
	  .fromTo('#clinic2', 1, {x: 500, scale: 0.6}, {x: 125, scale: 0.6, ease: "power3.out"}, "<")
    
    .add( function (){animThunder(".ray1", ".ray2", ".ray3", ".th1", ".th2", ".th3", 0.75, 0.65)}, "<" )

    .to('#price', 1, {x: 300, ease: "power3.out"}, "<")
	  .to('#cta', 1, {x: -90, ease: "power3.out"}, "<")

	  .to('#clinic1', 1, {x: -125, scale: 0.6, ease: "power3.out"}, "<+1.5")
	  .to('#clinic2', 1, {x: 0, scale: 1, ease: "power3.out"}, "<")    

    .to('#clinic2, #clinic1', 1, {x: -300, ease: "power3.out"}, "<+1.5")    
	  .to('[id*="txt-4-"]', 0.65, {autoAlpha: 0, y: 0, ease: "power3.out"}, "<")

	  .from('#img5', 5, {scale: 1.25, rotation: 0.05, transformOrigin: "50% 50%", ease: "power3.out"}, "<")
	  .from('#img5', 0.35, {autoAlpha: 0, transformOrigin: "50% 50%", ease: "power3.out"}, "<")        
    .to('#thunderGroup', 0.65, {autoAlpha: 0, scale: 0.5, ease: "power3.out"}, "<")    

    .from('[id*="txt-5-"]', 0.65, {autoAlpha: 0, y: 20, stagger: 0.15, ease: "power3.out"}, "<+0.5")
    .from('[id*="numbers"]', 0.65, {autoAlpha: 0, Y: 50, ease: "power3.out"}, "<+0.5")


    .to('[id*="txt-5-"]', 0.65, {autoAlpha: 0, ease: "power3.out"}, "<+2.5")
    .to('[id*="numbers"]', 0.65, {autoAlpha: 0, scale: 0.5, ease: "power3.out"}, "<")    

    .from('[id*="txt-6-"]', 0.65, {autoAlpha: 0, y: 20, stagger: 0.15, ease: "power3.out"}, "<+0.5")


//    .from('[id*="txt-6-"]', 0.65, {autoAlpha: 0, y: 20, stagger: 0.15, ease: "power3.out"}, "<+0.5")
	  .from('#endFrame', 3.5, {scale: 1.25, rotation: 0.05, transformOrigin: "50% 50%", ease: "power3.out"}, "<")
	  .from('#endFrame', 0.35, {autoAlpha: 0, transformOrigin: "50% 50%", ease: "power3.out"}, "<")    
    
    .to('#price', 1, {x: 0, ease: "power3.out"}, "<")
    .to('#cta', 1.25, {x: 0, ease: "power3.out"}, "<")


return tl_  
}




function animThunder(ray1, ray2, ray3, th1, th2, th3, timeRay, timeTh) {

    let time1 = timeRay;
    let time2 = timeTh


  gsap.set([th1, th2, th3], { autoAlpha: 1 });
    let tl_thunder = gsap.timeline({ repeat: 5 });
        tl_thunder 
        
          .from(ray1, {duration: time1, drawSVG: 0}, "<")    
          .to(th1, {duration: time2, autoAlpha: 0, repeat: 1, ease: "power2.out"}, "<") 

          .from(ray2, {duration: time1, drawSVG: 0}, ">")    
          .to(th2, {duration: time2, autoAlpha: 0, repeat: 1, ease: "power2.out"}, "<") 
          
          .from(ray3, {duration: time1, drawSVG: 0}, ">")    
          .to(th3, {duration: time2, autoAlpha: 0, repeat: 1, ease: "power2.out"}, "<") 
}



const subdivisions = 4; // Más detalle en la animación
const amplitude = 9;    // Intensidad del "zigzag"

const bolts = document.querySelectorAll(".st0");

bolts.forEach(bolt => {
  const rawPoints = bolt.getAttribute("points")?.trim();
  if (!rawPoints) return;

  const basePoints = rawPoints
    .split(/\s+/) // Soporta múltiples espacios
    .map(p => p.split(",").map(Number))
    .filter(pair => pair.length === 2 && !pair.some(isNaN)); // Elimina puntos malformados

  if (basePoints.length < 2) return; // Se necesita al menos 2 puntos

  function interpolatePoints(points) {
    const newPoints = [];

    for (let i = 0; i < points.length - 1; i++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[i + 1];

      newPoints.push([x1, y1]);

      for (let j = 1; j < subdivisions; j++) {
        const t = j / subdivisions;
        const x = x1 + (x2 - x1) * t;
        const y = y1 + (y2 - y1) * t;

        const dx = (Math.random() - 0.5) * amplitude;
        const dy = (Math.random() - 0.5) * amplitude;

        newPoints.push([x + dx, y + dy]);
      }
    }

    newPoints.push(points[points.length - 1]); // último punto intacto
    return newPoints;
  }

  function draw(points) {
    const valid = points.filter(p => p.length === 2 && !p.some(isNaN));
    bolt.setAttribute("points", valid.map(p => p.join(",")).join(" "));
  }

  function animateBolt() {
    const jittered = interpolatePoints(basePoints);
    draw(jittered);

    gsap.fromTo(bolt, { opacity: 1 }, {
      opacity: 1,
      duration: 0.03,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        setTimeout(animateBolt, 10 + Math.random());
      }
    });
  }

  animateBolt();
});


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
	  var tl = new TimelineMax({
		defaults: { duration: 0.5, ease: 'easeInOut' },
	  });
	  tl
		.to("#cta", 0.2, {background: "#1f8cb9", ease:Power2.easeOut}, 0)

	},
	leave: function () {
	  var tl = new TimelineMax({
		defaults: { duration: 0.5, ease: 'easeInOut' },
	  });
	  tl
		.to("#cta", 0.2, {background: "#2aace2", ease:Power2.easeOut}, 0)

	},
  };

}

