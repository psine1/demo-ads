
function getPosition(btn,e){
	//alert(e)
	//alert(value_rep)
	//console.log(btn.x);
	//console.log(btn.y);
	mc_width=btn.nominalBounds.width/2;
	mc_height=btn.nominalBounds.height/2;
	
	mc_x1=btn.x-mc_width;
	mc_y1=btn.y-mc_height;
	
	mc_x2=btn.x+mc_width;
	mc_y2=btn.y+mc_height;
	
	
	//console.log(mc_x2);
	
	//console.log(mc_x1+"-"+mc_y1+"-"+mc_x2+"-"+mc_y2);

	var x = new Number();
	var y = new Number();
	if (e.offsetX != undefined && e.offsetY != undefined)
	{
	  x = e.offsetX;
	  y = e.offsetY;
	}
	else
	{
		x = e.layerX;
		y = e.layerY;
	}
	
/*	 var out = '';
   for (var p in e) {
     out += p + ': ' + e[p] + '\n';
   }
   alert(out);*/
   
	
	//alert(canvas.offsetTop);
	
	 if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        var evt = (typeof e.originale === 'undefined') ? e : e.originale;
		var touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        x = e.clientX;
        y = e.clientY;
    }
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
	//console.log(x);
	
	if (x>=mc_x1&&x<=mc_x2&&y>=mc_y1&&y<=mc_y2){
			//alert("vao")
		return true;
	}else{
		
		//alert("ko")
		return false
	}
	
}
function trackClickHtml5()
{
	 window.open("http://google.com");
}