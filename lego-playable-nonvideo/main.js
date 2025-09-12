//PRELOAD DE IMG
//this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array(
  'images/bg-game.jpg', 'images/sun.png'
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
    document.getElementById('ad').style.display = 'block';
    

    initHandlers();
    initAnimations();

}

    // === Configuración de bases ===
    const BASES = {
      portrait:  { w: 640,  h: 1080 },
      landscape: { w: 1024, h: 600  }
    };

    const ad   = document.getElementById('ad');
    const stage= document.getElementById('stage');

    // Clase de orientación en <body> para togglear CSS de contenido
    function setOrientationClass(kind){
      document.body.classList.remove('is-portrait','is-landscape');
      document.body.classList.add(kind === 'portrait' ? 'is-portrait' : 'is-landscape');
    }

    // Decide orientación por relación de aspecto del contenedor real
    function currentOrientation(){
      const w = ad.clientWidth, h = ad.clientHeight;
      if (!w || !h) return 'landscape';
      return (w / h) >= 1 ? 'landscape' : 'portrait';
    }

    function fit(){
      const kind = currentOrientation();
      const base = BASES[kind];
      // fija tamaño lógico de la stage
      stage.style.width  = base.w + 'px';
      stage.style.height = base.h + 'px';

      // calcula escala para que entre completo en el contenedor
      const cw = ad.clientWidth, ch = ad.clientHeight;
      const scale = Math.min(cw / base.w, ch / base.h);
      const ox = (cw - base.w * scale) / 2;
      const oy = (ch - base.h * scale) / 2;

      stage.style.transform = `translate(${ox}px, ${oy}px) scale(${scale})`;

      setOrientationClass(kind);
    }

    // Interacciones demo (reemplazar por tu tracking / lógica real)
    function wireInteractions(){
      document.getElementById('ctaPortrait')?.addEventListener('click', e=>{
        e.preventDefault();
        // TODO: Tracking portrait (ej. Enabler.exit('Click_Portrait'))
        console.log('CTA Portrait');
      });
      document.getElementById('ctaLandscape')?.addEventListener('click', e=>{
        e.preventDefault();
        // TODO: Tracking landscape (ej. Enabler.exit('Click_Landscape'))
        console.log('CTA Landscape');
      });
    }


/* PARA DETECTAR SI ES IOs */
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (is_Mac == true || iOS == true) {
     
}



/* PARA DETECTAR SI ES IE */
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){

//  alert("IE");
  
}


// VARIABLES GLOBALES
var multitimeline = gsap.timeline();
    multitimeline.timeScale(1);
    multitimeline



    const tl_game = gsap.timeline({paused: false});
      tl_game.timeScale(1);  
      tl_game
      .to('#clickTag', 0.01, {autoAlpha: 0, ease: "powe3.out" }, "<")      
      .to('.wrapVideo, .skip, .controls', 0.25, {autoAlpha: 0, ease: "powe3.out" }, "<")      
      .to('.endframe', 0.01, {autoAlpha: 0, ease: "powe3.out" }, "<")      
      .from('.bg', 1.2, {scale: 1.8, rotation: 0.05, transformOrigin: "50% 50%", ease: "power3.out" }, "<")      
      .from('.sun', 1.5, {scale: 2.5, rotation: 0.05, transformOrigin: "50% 50%", ease: "power3.out" }, "<")              
      .from('#car1', 0.5, {scale: 0.3, rotation: 0.05, x: 400, y: -80, transformOrigin: "50% 50%", ease: "power3.out" }, "<")      
      .from('#man1', 0.65, {y: -100, rotation: 0.05,  transformOrigin: "50% 50%", ease: "power3.out" }, "<+0.25")      
      .from('#man1', 0.25, {autoAlpha: 0, ease: "power3.out" }, "<")    
      .from('#productName1', 0.65, {y: 160, ease: "power3.out" }, "<")    
      .from('#productName1', 0.25, {autoAlpha: 0, ease: "power3.out" }, "<")          
      .from('#boxToy1', 0.65, {x: -700, ease: "power3.out" }, "<+0.15")    
      .from('[class*="selectPlayer-"]', 0.35, {scale: 0, stagger: {  from: "random", amount: 0.3 }, ease: "back.out(1.7)" }, "<")    
      .from('.text-game', 0.65, {y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.15")    
      .from('#cta-game', 0.65, {scale: 0, ease: "back.out(1.7)" }, "<+0.35")    

    const tl_endFrame = gsap.timeline({paused: true});
      tl_endFrame.timeScale(1);  
      tl_endFrame
      .to('#clickTag', 0.01, {autoAlpha: 1, ease: "powe3.out" }, "<")      
      .to('.text-game', 0.35, {y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.15")    
      .to('[class*="selectPlayer-"]', 0.35, {scale: 0, stagger: {  from: "random", amount: 0.3 }, ease: "power3.out" }, "<")    
      .to('#cta-game', 0.35, {scale: 0, ease: "power3.out" }, "<+0.35")    
      .to('.game', 0.35, {autoAlpha: 0, ease: "powe3.out" }, "<")      

      .to('.endframe', 0.01, {autoAlpha: 1, ease: "powe3.out" }, "<")      
      .from('[class*="character-"]', 0.5, {scale: 0.6, stagger: {  from: "random", amount: 0.3 }, ease: "power3.out" }, "<")    
      .from('[class*="character-"]', 0.5, {autoAlpha: 0, ease: "power3.out" }, "<")    

      .from('[class*="text-endframe"]', 0.5, {scale: 1.8, ease: "power3.out" }, "<")    
      .from('[class*="text-endframe"]', 0.35, {autoAlpha: 0, ease: "power3.out" }, "<")    

      .to('[class*="bg"], .speed, .sun', 0.5, {y: 94, ease: "power3.out" }, "<")    
      .from('[class*="right"]', 0.75, {y: 1000, x: 1000, ease: "power3.out" }, "<")    

      .from('[class*="anim1"]', 0.5, {scale: 0.3, rotation: 0.05, x: 600, y: -180, ease: "power3.out" }, "<")    
      .from('[class*="anim2"]', 0.8, {scale: 0.3, rotation: 0.05, x: 600, y: -160, ease: "power3.out" }, "<")    
      .from('[class*="anim3"]', 1, {scale: 0.3, rotation: 0.05, x: 600, y: -160, ease: "power3.out" }, "<")    

      .from('.cta-endframe', 0.65, {scale: 0, ease: "back.out(1.7)" }, "<+0.5")    

    let ctaGame = document.getElementById('cta-game');
    ctaGame.addEventListener('mouseup', function(event) {             
        
        tl_endFrame.play();
        Enabler.exit('click: get started');

    })






/* game */

  // oculta todos los fragmentos player al inicio
  gsap.set('[id^="player"]', {autoAlpha:0, pointerEvents:'none'});
  gsap.set('[id^="player-1"]', {autoAlpha:1, pointerEvents:'none'});
  gsap.to('[class*="selectPlayer-1"]', {pointerEvents:'none'});
  gsap.set('[class*="selectPlayer-1"]', { filter: 'drop-shadow(0 0 6px rgb(242 245 91)) drop-shadow(8px 12px 10px rgba(242,245,91,1))'}, "<")

  gsap.set('[class*="selectPlayer-"]', {pointerEvents:'auto'});

$('div[class*="selectPlayer-"]').on('click touch', function(event){
  
    var index = $(this).attr('class').split('-')[1];

    var elem = $('div[id*="player-'+index+'"]');
    var car = $('div[id*="car'+index+'"]');
    var man = $('div[id*="man'+index+'"]');
    var productName = $('div[id*="productName'+index+'"]');
    var boxToy = $('div[id*="boxToy'+index+'"]');
    var selectPlayer = $('[class*="selectPlayer-'+index+'"]');

    Enabler.exit('play game');
    

    if (event.type === 'click' || event.type === 'touch') {
        if(elem.css('visibility') == 'hidden'){
            $('div[id*="player"]').not(elem).css({'visibility':'hidden', 'opacity': '0'});
            elem.css({'visibility':'visible', 'opacity': '1'});

            tl = gsap.timeline()
                .set("[class*='selectPlayer-']", { filter: 'drop-shadow(0 0 0px rgb(242 245 91)) drop-shadow(0px 0px 0px rgba(242,245,91,1))'}, "<")
                .set(selectPlayer, { filter: 'drop-shadow(0 0 6px rgb(242 245 91)) drop-shadow(8px 12px 10px rgba(242,245,91,1))'}, "<")
                .to("[class*='selectPlayer-']", {pointerEvents:'auto'}, "<")
                .to(selectPlayer, {pointerEvents:'none'}, "<")
                .from(car, 0.5, {scale: 0.3, rotation: 0.05, x: 400, y: -80, transformOrigin: "50% 50%", ease: "power3.out" }, "<")      
                .from(man, 0.65, {y: -100, rotation: 0.05,  transformOrigin: "50% 50%", ease: "power3.out" }, "<+0.25")      
                .from(man, 0.25, {autoAlpha: 0, ease: "power3.out" }, "<")    
                .from(productName, 0.65, {y: 160, ease: "power3.out" }, "<")    
                .from(productName, 0.25, {autoAlpha: 0, ease: "power3.out" }, "<")          
                .from(boxToy, 0.65, {x: -700, ease: "power3.out" }, "<")    
                                                
        } else {
            elem.css({'visibility':'hidden', 'opacity': '0'});
        }

    } 
});




/* speed Lines */ 

gsap.registerPlugin(MotionPathPlugin);

// === Helpers de random (número directo, no función) ===
const R  = (min, max) => gsap.utils.random(min, max);        // float
const Ri = (min, max) => Math.round(gsap.utils.random(min, max)); // int

// Config rápida
const FOLLOWERS_PER_PATH = 3;
const DOT_PROBABILITY    = 0.35;
const DUR_RANGE          = [3, 1.6];
const LINE_LEN_RANGE     = [30, 50];
const LINE_THICK_RANGE   = [1, 3];
const DOT_R_RANGE        = [1.5, 3.5];
const USE_GLOW_FILTER    = false; // poné true si querés drop-shadows CSS

const svg  = document.getElementById('scene');
const fx   = document.getElementById('fx');
const SVGNS= 'http://www.w3.org/2000/svg';

// Convierte cualquier <line> a <path> (MotionPath trabaja mejor con path)
[...svg.querySelectorAll('line.st0')].forEach(line=>{
  const p = document.createElementNS(SVGNS,'path');
  p.setAttribute('class', line.getAttribute('class'));
  p.setAttribute('d', `M ${line.getAttribute('x1')},${line.getAttribute('y1')} L ${line.getAttribute('x2')},${line.getAttribute('y2')}`);
  line.replaceWith(p);
});

const paths = [...svg.querySelectorAll('path.st0')];

function makeLine(){
  const w = R(LINE_LEN_RANGE[0], LINE_LEN_RANGE[1]);
  const h = R(LINE_THICK_RANGE[0], LINE_THICK_RANGE[1]);
  const r = document.createElementNS(SVGNS,'rect');
  r.setAttribute('width', w);
  r.setAttribute('height', h);
  r.setAttribute('rx', h/2);
  r.setAttribute('fill', '#ffd87e');
  r.setAttribute('x', -w/2);
  r.setAttribute('y', -h/2);
  if (USE_GLOW_FILTER) {
    r.style.filter = 'drop-shadow(0 0 6px rgb(242 245 91)) drop-shadow(8px 12px 10px rgba(242,245,91,.35))';
  }
  return r;
}

function makeDot(){
  const rr = R(DOT_R_RANGE[0], DOT_R_RANGE[1]);
  const c = document.createElementNS(SVGNS,'circle');
  c.setAttribute('r', rr);
  c.setAttribute('fill', '#ffd87e');
  if (USE_GLOW_FILTER) {
    c.style.filter = 'drop-shadow(0 0 6px rgb(242 245 91)) drop-shadow(8px 12px 10px rgba(242,245,91,.35))';
  }
  return c;
}

// Crea y anima seguidores
paths.forEach(path=>{
  for(let i=0;i<FOLLOWERS_PER_PATH;i++){
    const useDot = Math.random() < DOT_PROBABILITY;
    const el  = useDot ? makeDot() : makeLine();
    fx.appendChild(el);

    const dur = R(DUR_RANGE[0], DUR_RANGE[1]);
    const negDelay = -Math.random()*dur; // desfasado

    gsap.to(el, {
      duration: dur,
      repeat: -1,
      ease: 'none',
      delay: negDelay,
      opacity: R(0.6, 1),
      motionPath: {
        path,
        align: path,
        autoRotate: !useDot,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 1
      },
      repeatRefresh: true,
      onRepeat(){
        this.duration(R(DUR_RANGE[0], DUR_RANGE[1]));
      }
    });
  }
});



function initAnimations(){
    multitimeline.timeScale(1); 

    tl_game.restart();
      wireInteractions();
      fit();
      window.addEventListener('resize', fit);
      window.addEventListener('orientationchange', fit);
      // Para entornos embebidos que cambian el contenedor asincrónicamente
      const ro = new ResizeObserver(fit); ro.observe(ad);

    
}

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAnimations);
    else initAnimations();

//HANDLERS
function initHandlers() {

  var clicktag = document.getElementById('clickTag');
  clicktag.addEventListener('mouseup', function(event) {  
    window.open(window.clickTag,'_blank');                  
      Enabler.exit('Exit');          
  })


}


window.onload = function () {
  if (Enabler.isInitialized()) {
    startAd();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, startAd);
  }
};

function startAd() {
  preloadImages(); // Esto va a arrancar tu flujo normal
}



