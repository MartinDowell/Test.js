((c)=>{
	let $ = c.getContext('2d'),
			w = c.width = window.innerWidth,
			h = c.height = window.innerHeight,
			opts = {
				amount: 20,
				distance: 10,
				radius: 10,
				height: 60,
				span: Math.PI*2
			},
			width = opts.amount*(opts.radius*2+opts.distance),
			arr = new Array(opts.amount).fill().map((el,ind)=>{
				return {
					a: opts.span/opts.amount*ind,
					x: (opts.radius*2+opts.distance)*ind,
					c: "hsl(th, 75%, 55%)"
				}
			})
	function loop(){
		$.fillStyle = "#222";
		$.fillRect(0,0,w,h);
		arr.forEach(el=>{
			el.a+= Math.PI/180*4;
			$.beginPath();
			$.arc(el.x - width/2 + w/2, Math.sin(el.a)*opts.height + h/2, opts.radius, 0, Math.PI*2);
			$.closePath();
			$.fillStyle=el.c.replace("th", el.a*20);
			$.fill();
		})
		requestAnimationFrame(loop);
	}
	loop();
})(c)
