function imagePicker() {
	
	document.getElementById("imageContainer").innerHTML = "<div id=\"head_color\"></div>"+
														"<div id=\"head_type\"></div>"+
														"<div id=\"eyes_color\"></div>"+
														"<div id=\"eyes_type\"></div>"+
														"<div id=\"mouth_color\"></div>"+
														"<div id=\"mouth_type\"></div>";
	
	var head = randomGenerator(0,2);
	document.getElementById("head_color").appendChild(svgCache["heads/head_"+head+"_color.svg"]);
	document.getElementById("head_type").appendChild(svgCache["heads/head_"+head+".svg"]);
	
	var eye = randomGenerator(0,10);
	document.getElementById("eyes_color").appendChild(svgCache["eyes/eyes_"+eye+"_color.svg"]);
	document.getElementById("eyes_type").appendChild(svgCache["eyes/eyes_"+eye+".svg"]);
	
	var mouth = randomGenerator(0,6);
	document.getElementById("mouth_color").appendChild(svgCache["mouths/mouth_"+mouth+"_color.svg"]);
	document.getElementById("mouth_type").appendChild(svgCache["mouths/mouth_"+mouth+".svg"]);

	// skin color
	var hue = randomGenerator(0,360);
	var saturation = randomGenerator(30,60);
	var brightness = randomGenerator(60,80);
	
	document.getElementById("head_color").style.filter = "hue-rotate("+hue+"deg) saturate("+saturation+"%) brightness("+brightness+"%)";
	document.getElementById("eyes_type").style.filter = "hue-rotate("+hue+"deg) saturate("+saturation+"%) brightness("+brightness+"%)";
	document.getElementById("mouth_color").style.filter = "hue-rotate("+hue+"deg) saturate("+saturation+"%) brightness("+brightness+"%)";

	var hue_eyes;
	do{hue_eyes=randomGenerator(0,360);}while(Math.abs(hue_eyes - hue)<60);
	saturation = randomGenerator(30,60);
	brightness = 100;
	
	document.getElementById("eyes_color").style.filter = "hue-rotate("+hue_eyes+"deg) saturate("+saturation+"%) brightness("+brightness+"%)";
	
}

function randomGenerator(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
