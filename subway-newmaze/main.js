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
//    .add(fr1(), 0)
    
    ;


var endframe = 0;


      setTimeout(() => {        
        tl_fr2.play();       
        
    setTimeout(() => {        
        tl_fr3.play();        
      }, 3000);

      }, 3000);

  

  const tl_ = gsap.timeline({});
      tl_.timeScale(1);  
      tl_

      .from('#bg', 2, {scale: 1.35, transformOrigin: "50% 80%", ease: "power3.out" }, "<")    
      .from('#product', 1, {y: -300, ease: "power3.out" }, "<")    
      .to('#product img', 1, {y: 10, repeat: -1, yoyo: true, ease: "power1.inOut" }, "<")    
      .from('#title', 1.2, {scale: 2, ease: "power3.out" }, "<+0.35")    
      .from('#title', 0.35, {autoAlpha: 0, ease: "power3.out" }, "<")    
      .from('#logo', 0.35, {autoAlpha: 0, y: 20, ease: "power3.out" }, "<+0.35")    
      .from('#buttonPlay', 1, { scale: 0.5, ease: "bounce.out" }, "<+0.35")    
      .from('#buttonPlay', 0.5, {autoAlpha: 0, ease: "bounce.out" }, "<")   
      
      

  const tl_fr2 = gsap.timeline({paused: true});
      tl_fr2.timeScale(1);  
      tl_fr2

      .from('.fr2', 0.01, {autoAlpha: 0, ease: "power3.out" }, "<")   
       .from('.fr3', 0.5, {autoAlpha: 0, ease: "power3.out" }, "<")    
       .from('.bgGame', 0.5, {autoAlpha: 0, ease: "power3.out" }, "<")    

      .from('.overlay1', 1, {autoAlpha: 0, ease: "power3.out" }, "<")    
      .from('#instruction1Inner', 1, {y: -2300, ease: "power3.out" }, "<")    
      .from('#startGame', 1, { scale: 0.5, ease: "bounce.out" }, "<+0.35")    
      .from('#startGame', 0.5, {autoAlpha: 0, ease: "bounce.out" }, "<")   
       .from('#game', 1, {autoAlpha: 0, ease: "power3.out" }, "<")    
             .set("#game", { display: 'block' }, "<")
        .to('.fr2', 1, {zIndex: "999", ease: "power3.out" }, "<")    
        .to('.fr1', 1, {autoAlpha: 0, ease: "power3.out" }, "<")    



  const tl_fr3 = gsap.timeline({paused: true});
      tl_fr3.timeScale(1);  
      tl_fr3

      .to('#instruction1Inner', 1, {y: -2300, ease: "power3.inOut" }, "<")    
      .to('#startGame', 1, { scale: 0.5, ease: "power3.inOut" }, "<+0.35")    
      .to('#startGame', 0.5, {autoAlpha: 0, ease: "power3.inOut" }, "<")   
      .to('.fr2', 0.01, {autoAlpha: 0, ease: "power3.out" }, ">")   
      .from('#instruction2', 1, {y: -2300, ease: "power3.out" }, "<")  
      .add( function (){ 
            let timeLeft = 30;
    const display = document.getElementById("countdown");

    const timer = setInterval(() => {
      timeLeft--;
      display.textContent = timeLeft;

      if (timeLeft <= 0) {
        gsap.set("#game", { display: 'none' });
        tl_fr4.play();
      }
    }, 1000);
       }, "<" )
      



  const tl_fr4 = gsap.timeline({paused: true});
      tl_fr4.timeScale(1);  
      tl_fr4

      .from('.fr4', 0.35, {autoAlpha: 0, ease: "power3.out" }, "<")   
      .from('.fr4', 0.01, {zIndex: "999" }, "<")   

      .to('.overlayend', 5, {autoAlpha: 0, ease: "power3.out" }, "<")   

     // .from('.wrapEnd', 10, {scale: 1.3, transformOrigin: "50% 30%", rotation: 0.05, ease: "power3.out" }, "<")          
      .from('#productEnd', 2, {x: -50, y: -50, ease: "power3.out" }, "<")          
      .from('#titleEnd1', 0.5, {y: 190, ease: "power3.out" }, "<+0.2")          
      .from('#titleEnd2', 0.5, {y: 190, ease: "power3.out" }, "<+0.2")    
      
      .from('#textEnd1', 0.5, {scale: 2, ease: "power3.out" }, "<+1")          
      .from('#textEnd1', 0.15, {autoAlpha: 0, ease: "power3.out" }, "<")          
      .from('#textEnd2', 0.5, {scale: 2, ease: "power3.out" }, "<+0.3")          
      .from('#textEnd2', 0.15, {autoAlpha: 0, ease: "power3.out" }, "<")          

     


  const buttonPlay = document.querySelector('#buttonPlay');
  buttonPlay.addEventListener('click', () => {
        tl_fr2.play();
  });


 const startGame = document.querySelector('#startGame');
  startGame.addEventListener('click', () => {
        tl_fr3.play();


        /*
      setTimeout(() => {        
        gsap.set("#game", { display: 'none' });
        tl_fr4.play();        
      }, 20000);

      */





  });







/*  init Game */

  gsap.registerPlugin(MotionPathPlugin);

  // ===== Maze =====
  const MAZE=[
    "########.########",
    "#...............#",
    "#.###.#...#######",
    "#.#...#...#...#.#",
    "#.#.#####.#.###.#",
    "#.#.....#.#.....#",
    "#.#####.#.#####.#",
    "#.....#.#.....#.#",
    "###.#.#.###.#.#.#",
    "#...#...#...#.#.#",
    "#.#####.#.###.#.#",
    "#.....#.#.....#.#",
    "#.###.#.#####.#.#",
    "#.#...#.....#...#",
    "#.#.#######.###.#",
    "#.#.........#...#",
    "#.#########.#.###",
    "#...........#...#",
    "#############.#.#",
    "#.............#.#",
    "#################"
  ];
  const rows=MAZE.length, cols=MAZE[0].length;

  // ===== Config =====
  const HOTDOG = {
    lengthCells: 5,    // largo visible de la imagen (en celdas)
    thickness:   2,    // alto relativo a la celda
    frontGapCells: 1,  // margen frontal “vacío” (en celdas)
    rearGapCells:  0,  // gap atrás
    speed: 0.15,
    rotOffsetDeg: 0
  };
  const CURVE = { k: 0.4 };
  const DRAG_THRESHOLD = 0.65;

  // === Collectibles (podés cambiar img y posiciones libremente)
  const INGREDIENTS = [
    { x: 1,  y: 3,  img: "https://raw.githubusercontent.com/psine1/demo-ads/refs/heads/main/ingredient1a.png"   },
    { x: 13, y: 17,  img: "https://raw.githubusercontent.com/psine1/demo-ads/refs/heads/main/ingredient2.png"   },
    { x: 4,  y: 13, img: "https://raw.githubusercontent.com/psine1/demo-ads/refs/heads/main/ingredient3.png"    },
    { x: 11, y: 5, img: "https://raw.githubusercontent.com/psine1/demo-ads/refs/heads/main/ingredient4.png"     }
  ];
  // Si no tenés esos assets, podés probar con el mismo PNG en todos:
  // INGREDIENTS.forEach(i => i.img = "https://raw.githubusercontent.com/psine1/demo-ads/refs/heads/main/hotdog2.png");

  // ===== DOM =====
  const game   = document.getElementById('game');
//  const status = document.getElementById('status');
  const leftCountEl = document.getElementById('leftCount');
  const svg    = document.getElementById('stage');
  const mazeG  = document.getElementById('maze');
  const goal   = document.getElementById('goal');
  const dogEl  = document.getElementById('dog');
  const dogInner = document.getElementById('dogInner');
  const ingredientsLayer = document.getElementById('ingredientsLayer');
  
  const winOverlay = document.getElementById('win');

  // ===== Grid/Layout =====
  let cell=5, offX=0, offY=0, pad=12;

  const isWall=(cx,cy)=>(cx<0||cy<0||cx>=cols||cy>=rows) ? true : MAZE[cy][cx]==='#';
  const gridToPx=(cx,cy)=>({ x:offX+cx*cell+cell/2, y:offY+cy*cell+cell/2 });
  const findGoal=()=>({x:Math.floor(cols/2), y:rows-2});


// Control de grosor independiente del tamaño de celda
const WALL = {
  thickFrac: 0.55, // 0..1  (0.55 = 55% del tamaño de celda)
  roundPx: 0       // esquinas redondeadas opcional (px)
};

function drawMaze(){
  mazeG.innerHTML = "";
  const svgns = "http://www.w3.org/2000/svg";

  // margen a contraer en lados expuestos al pasillo
  const m = Math.max(0, Math.round((1 - WALL.thickFrac) * cell / 2));

  for (let r = 0; r < rows; r++){
    for (let c = 0; c < cols; c++){
      if (MAZE[r][c] !== '#') continue;

      const left  = (c-1>=0   && MAZE[r][c-1]==='#');
      const right = (c+1<cols && MAZE[r][c+1]==='#');
      const up    = (r-1>=0   && MAZE[r-1][c]==='#');
      const down  = (r+1<rows && MAZE[r+1][c]==='#');

      // encoge solamente donde NO hay vecino (para que las piezas se unan)
      let x = offX + c*cell + (left  ? 0 : m);
      let y = offY + r*cell + (up    ? 0 : m);
      let w = cell - (left  ? 0 : m) - (right ? 0 : m);
      let h = cell - (up    ? 0 : m) - (down  ? 0 : m);

      // evitar gaps subpixel
      x = Math.round(x); y = Math.round(y);
      w = Math.max(1, Math.round(w));
      h = Math.max(1, Math.round(h));

      const el = document.createElementNS(svgns, "rect");
      el.setAttribute("x", x);
      el.setAttribute("y", y);
      el.setAttribute("width", w);
      el.setAttribute("height", h);
      el.setAttribute("fill", "var(--wall)");
      el.setAttribute("shape-rendering", "crispEdges");
      if (WALL.roundPx){ el.setAttribute("rx", WALL.roundPx); el.setAttribute("ry", WALL.roundPx); }
      mazeG.appendChild(el);
    }
  }
}

  function placeGoal(){
    const g=findGoal(), p=gridToPx(g.x,g.y);
    goal.style.left=p.x+'px'; goal.style.top=p.y+'px';
  }

  // ====== Collectibles render ======
  let ingredientsMap = new Map(); // key "x,y" -> element
  function drawIngredients(){
    ingredientsLayer.innerHTML = "";
    ingredientsMap.clear();
    for (const it of INGREDIENTS){
      if (isWall(it.x, it.y)) continue; // seguridad
      const p=gridToPx(it.x,it.y);
      const el = document.createElement('div');
      el.className = 'ingredient';
      el.style.left = p.x+'px';
      el.style.top  = p.y+'px';
      el.style.width = Math.round(cell*0.9)+'px';
      el.style.height= Math.round(cell*0.9)+'px';
      el.style.backgroundImage = `url('${it.img}')`;
      el.dataset.cx = it.x;
      el.dataset.cy = it.y;
      ingredientsLayer.appendChild(el);
      ingredientsMap.set(`${it.x},${it.y}`, el);
    }
    updateLeftCount();
  }

  function updateLeftCount(){
    leftCountEl.textContent = ingredientsMap.size;
  }

  function collectAt(x,y){
    const key = `${x},${y}`;
    const el = ingredientsMap.get(key);
    if (!el) return false;
    ingredientsMap.delete(key);
    gsap.to(el, { duration: .22, scale: 1.3, ease: "back.out(3)" });
    gsap.to(el, { duration: .22, delay:.18, opacity: 0, scale:.6, onComplete:()=>el.remove() });
    updateLeftCount();
    if (ingredientsMap.size === 0){
      onAllCollected(); // 👈 dispara la animación/mensaje
    }
    return true;
  }

  // ===== Tamaños + offset del gap (imagen corrida hacia atrás)
  function sizeDog(){
    const imgW   = Math.max(2, Math.round(HOTDOG.lengthCells * cell));
    const frontW = Math.max(0, Math.round((HOTDOG.frontGapCells || 0) * cell));
    const rearW  = Math.max(0, Math.round((HOTDOG.rearGapCells  || 0) * cell));
    const h      = Math.max(2, Math.round(HOTDOG.thickness * cell));

    // El contenedor (#dog) mide imagen + gaps (frente + atrás)
    dogEl.style.width  = `${imgW + frontW + rearW}px`;
    dogEl.style.height = `${h}px`;

    // La imagen (#dogInner) mide sólo el largo visible y se corre dentro
    const offset = (rearW - frontW) / 2;
    dogInner.style.width  = `${imgW}px`;
    dogInner.style.height = `${h}px`;
    dogInner.style.transform = `translate(-50%,-50%) translateX(${offset}px)`;
  }

  function layout(){
    const rect=game.getBoundingClientRect();
    const maxW=rect.width - pad*2, maxH=rect.height - pad*2;
    cell = Math.floor(Math.min(maxW/cols, maxH/rows));
    const w=cell*cols, h=cell*rows;
    offX = Math.round((rect.width - w)/2);
    offY = Math.round((rect.height - h)/2);
    svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    drawMaze(); placeGoal(); sizeDog(); drawIngredients();

    if (state.head){ const p=gridToPx(state.head.x,state.head.y); gsap.set(dogEl,{x:p.x,y:p.y}); }
  }

  // ===== Estado =====
  const state={ head:{ x:Math.floor(cols/2), y: 2 }, dir:{x:0,y:1}, next:{x:0,y:1}, moving:false };

  // ===== Movimiento con curva =====
  const isTurn=(a,b)=> (a.x!==b.x || a.y!==b.y) && !(a.x===-b.x && a.y===-b.y);
  const linearPath=(a,b)=>`M${a.x},${a.y} L ${b.x},${b.y}`;
  function cubicTurnPath(fromPx, toPx, prevDir, newDir){
    const k = CURVE.k * cell;
    const cp1 = { x: fromPx.x + prevDir.x * k, y: fromPx.y + prevDir.y * k };
    const cp2 = { x: toPx.x   - newDir.x * k,  y: toPx.y   - newDir.y * k };
    return `M${fromPx.x},${fromPx.y} C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${toPx.x},${toPx.y}`;
  }

  function step(){
    const prevDir = {...state.dir};
    state.dir = {...state.next};

    const nx=state.head.x + state.dir.x;
    const ny=state.head.y + state.dir.y;

    if (isWall(nx,ny)){
//      status.textContent='¡Pared!';
   //   gsap.fromTo(game,{x:0},{x:6,duration:0.05,repeat:3,yoyo:true,onComplete(){ gsap.set(game,{x:0}); }});
      state.moving=false; return;
    }

    state.moving=true;
//    status.textContent='Jugando';

    const fromPx=gridToPx(state.head.x, state.head.y);
    const toPx  =gridToPx(nx, ny);
    const path  = isTurn(prevDir,state.dir) ? cubicTurnPath(fromPx,toPx,prevDir,state.dir) : linearPath(fromPx,toPx);

    gsap.to(dogEl, {
      duration: HOTDOG.speed,
      ease: "none",
      motionPath: {
        path,
        autoRotate: true,
        align: false,
        useRadians: false
      },
      onComplete(){
        state.moving=false;
        state.head = {x:nx, y:ny};

        // recolección (si hay ingrediente en esta celda, lo toma)
        collectAt(nx, ny);

        // llegar a meta (opcional: si querés que sólo funcione cuando ya juntaste todo)
        const g=findGoal();
        if (nx===g.x && ny===g.y){
          if (ingredientsMap.size === 0){
//            status.textContent='¡Ganaste!';
                tl_fr4.play();

                gsap.set("#game", { display: 'none' });
                

            pulseGoal();
            // También podrías llamar aquí onAllCollected() si preferís que salga el mensaje al llegar a la meta.
          } else {
//            status.textContent=`Faltan ${ingredientsMap.size} condimentos`;
            gsap.fromTo(goal,{scale:1},{scale:1.2,duration:0.15,yoyo:true,repeat:1});
          }
        }
      },
      onUpdate(){
        if (HOTDOG.rotOffsetDeg!==0){
          const cur = gsap.getProperty(dogEl,"rotation");
          gsap.set(dogEl,{ rotation: cur + HOTDOG.rotOffsetDeg });
        }
      }
    });
  }

  function pulseGoal(){
    gsap.fromTo(goal,{scale:1},{scale:1.6,duration:0.5,yoyo:true,repeat:3});
  }


      gsap.set("#instruction3", { autoAlpha: 0, scale: 0 });
      gsap.set("#goal", { autoAlpha: 0, scale: 0 });


  function onAllCollected(){
//    status.textContent='¡Todos los condimentos!';
    // Animación de overlay de victoria
    gsap.to("#instruction2", { duration:.35, autoAlpha: 0, scale: 0, ease:"back.out(1.8)" });
    gsap.to("#instruction3", { duration:.35, autoAlpha: 1, scale: 1, ease:"back.out(1.8)" });
    gsap.to("#goal", { duration:.35, autoAlpha: 1, scale: 1, ease:"back.out(1.8)" });



    // Si preferís ejecutar otra lógica, reemplazá esto por la función que quieras:
    // showWinTextCustom();
  }

  // ===== Controles =====
  function setDirection(dx,dy){ state.next={x:dx,y:dy}; if(!state.moving) step(); }

  window.addEventListener('keydown',(e)=>{
    const k=e.key; let handled=true;
    if(k==='ArrowLeft'||k==='a') setDirection(-1,0);
    else if(k==='ArrowRight'||k==='d') setDirection(1,0);
    else if(k==='ArrowUp'||k==='w') setDirection(0,-1);
    else if(k==='ArrowDown'||k==='s') setDirection(0,1);
    else handled=false;
    if(handled) e.preventDefault();
  });

  let dragStart=null, dragAccum={x:0,y:0};
  game.addEventListener('pointerdown', e=>{ dragStart={x:e.clientX,y:e.clientY}; dragAccum={x:0,y:0}; });
  game.addEventListener('pointermove', e=>{
    if(!dragStart) return;
    dragAccum.x += e.clientX - dragStart.x;
    dragAccum.y += e.clientY - dragStart.y;
    dragStart={x:e.clientX,y:e.clientY};
    const th=cell*DRAG_THRESHOLD;
    if(Math.abs(dragAccum.x)>Math.abs(dragAccum.y)){
      if(dragAccum.x> th){ setDirection(1,0); dragAccum.x=0; }
      else if(dragAccum.x<-th){ setDirection(-1,0); dragAccum.x=0; }
    } else {
      if(dragAccum.y> th){ setDirection(0,1); dragAccum.y=0; }
      else if(dragAccum.y<-th){ setDirection(0,-1); dragAccum.y=0; }
    }
  });
  ['pointerup','pointerleave','pointercancel'].forEach(evt=>{
    game.addEventListener(evt, ()=>{ dragStart=null; dragAccum={x:0,y:0}; });
  });

  // ===== Init =====
  function init(){
    layout();
    const p=gridToPx(state.head.x, state.head.y);
    gsap.set(dogEl,{x:p.x,y:p.y, rotation:90});
  }
  window.addEventListener('resize', layout);
  init();


/*End Game */



const BASE_W = 700, BASE_H = 1280;
const pec = document.querySelector('.pec');
const wrap = document.getElementById('scale-wrap');

function fit(){
  const cw = pec.clientWidth, ch = pec.clientHeight;
  const scale = Math.min(cw/BASE_W, ch/BASE_H);
  const ox = (cw - BASE_W*scale)/2;
  const oy = (ch - BASE_H*scale)/2;

  // fijá el tamaño lógico base
  wrap.style.width  = BASE_W+'px';
  wrap.style.height = BASE_H+'px';

  // usá GSAP si querés
  gsap.set(wrap, { x:ox, y:oy, scale, transformOrigin:"0% 0%" });
}
fit();
addEventListener('resize', fit, {passive:true});
addEventListener('orientationchange', fit, {passive:true});
if (window.ResizeObserver) new ResizeObserver(fit).observe(pec);






function initAnimations(){
    multitimeline.timeScale(1); 
    
}


//HANDLERS
function initHandlers() {





  let clicktag = document.getElementById('clickTag');

  
  clicktag.addEventListener('mouseup', function(event) {             
      
      window.dispatchEvent(new Event("clickTag"));

      Enabler.exit('clicktag : Exit');


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




