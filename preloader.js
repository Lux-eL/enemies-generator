var svgCache = {};
var urls = [
		"eyes/eyes_0.svg",
		"eyes/eyes_0_color.svg",
		"eyes/eyes_1.svg",
		"eyes/eyes_1_color.svg",
		"eyes/eyes_2.svg",
		"eyes/eyes_2_color.svg",
		"eyes/eyes_3.svg",
		"eyes/eyes_3_color.svg",
		"eyes/eyes_4.svg",
		"eyes/eyes_4_color.svg",
		"eyes/eyes_5.svg",
		"eyes/eyes_5_color.svg",
		"eyes/eyes_6.svg",
		"eyes/eyes_6_color.svg",
		"eyes/eyes_7.svg",
		"eyes/eyes_7_color.svg",
		"eyes/eyes_8.svg",
		"eyes/eyes_8_color.svg",
		"eyes/eyes_9.svg",
		"eyes/eyes_9_color.svg",
		"eyes/eyes_10.svg",
		"eyes/eyes_10_color.svg",
		"heads/head_0.svg",
		"heads/head_0_color.svg",
		"heads/head_1.svg",
		"heads/head_1_color.svg",
		"heads/head_2.svg",
		"heads/head_2_color.svg",
		"mouths/mouth_0.svg",
		"mouths/mouth_0_color.svg",
		"mouths/mouth_1.svg",
		"mouths/mouth_1_color.svg",
		"mouths/mouth_2.svg",
		"mouths/mouth_2_color.svg",
		"mouths/mouth_3.svg",
		"mouths/mouth_3_color.svg",
		"mouths/mouth_4.svg",
		"mouths/mouth_4_color.svg",
		"mouths/mouth_5.svg",
		"mouths/mouth_5_color.svg",
		"mouths/mouth_6.svg",
		"mouths/mouth_6_color.svg"
	];

function initialize() {	

	function loaded(){
		if(counter >= total) {
			imagePicker();
		}
	}

	var counter = 0;
	var total = urls.length;

	for( var i=0; i < total; i++){
		var img = new Image();
		counter++;
		svgCache[urls[i]] = img;
		img.src = urls[i];
		img.onload = loaded();
	}
}