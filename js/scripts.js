// Important to have this wrapped in a function call otherwise it gets called to early
function animateMouseover() {
	anime({
		targets: this.selector,
		d: [
			{
				value:
					"M48.8,-13.3C55.7,5.6,48.8,31.6,30.9,45.4C12.9,59.1,-16,60.5,-36.5,46.5C-57,32.5,-68.9,3.1,-61.4,-16.6C-53.9,-36.3,-27,-46.2,-3,-45.2C20.9,-44.2,41.8,-32.3,48.8,-13.3Z"
			}
		],
		easing: "easeOutElastic(2, 1.5)",
		duration: 400
	});
}

function animateMouseout() {
	anime({
		targets: this.selector,
		d: [{ value: this.dValue }],
		easing: "easeOutElastic(2, 1.5)",
		duration: 400
	});
}


function buttonAnimation(hov, selector, dValue) {
	const btn = document.querySelector(hov);
	const btn2 = document.querySelector(selector);

	if(btn){
		console.log("button1");
		btn.addEventListener("mouseover", animateMouseover.bind({ selector, dValue }));
		btn.addEventListener("mouseout", animateMouseout.bind({ selector, dValue }));
	}
	
	if(btn2){
		btn2.addEventListener("mouseover", animateMouseover.bind({ selector, dValue }));
		btn2.addEventListener("mouseout", animateMouseout.bind({ selector, dValue }));
	}
}

const blobA =
	"M44.1,-7.4C53.2,13.8,54,44.6,39.3,55.5C24.7,66.5,-5.4,57.6,-24,42C-42.7,26.3,-49.9,3.9,-44,-12.9C-38.1,-29.6,-19.1,-40.6,-0.8,-40.4C17.5,-40.1,35,-28.6,44.1,-7.4Z";

buttonAnimation( "#full", "#first-blob", blobA);

