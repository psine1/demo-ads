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

    // Inicialización
    function init(){
      wireInteractions();
      fit();
      window.addEventListener('resize', fit);
      window.addEventListener('orientationchange', fit);
      // Para entornos embebidos que cambian el contenedor asincrónicamente
      const ro = new ResizeObserver(fit); ro.observe(ad);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();