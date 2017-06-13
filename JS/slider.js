(function () {
	document.getElementById("main_div").style.backgroundImage = 'url("Images/BI/0.jpg")';
})();
var counter = 0;
var totalImgs = 7;
var intSeconds = 3;
var autoPlay = true;

function load() {
	addCircles();
	if (autoPlay) {
		intSeconds = setInterval(function () {
			next();
		}, intSeconds * 1000);
	}
}
load();

function addCircles() {
	for (i = 0; i <= totalImgs; i++) {
		var li = "<li id='slider-li-" + i + "'></li>";
		document.getElementById('slider-ul').innerHTML += li;
		document.getElementById("slider-li-" + counter + "").innerHTML = "<a id='current_li'></a>";
		document.getElementById("current_li").parentNode.style = "border:2px solid red";
	}
}

function next() {
	if (counter >= totalImgs) {
		counter = 0;
		document.getElementById("main_div").style.backgroundImage = 'url("Images/BI/' + counter + '.jpg")';
	} else {
		counter++;
		document.getElementById("main_div").style.backgroundImage = 'url("Images/BI/' + counter + '.jpg")';
		//clearInterval(3000);
	}
	intSeconds = setInterval(function () {
		next();
	}, intSeconds * 1000);
	document.getElementById("current_li").parentNode.style = "";
	document.getElementById("current_li").remove();
	document.getElementById("slider-li-" + counter + "").innerHTML = "<a id='current_li'></a>";
	document.getElementById("current_li").parentNode.style = "border:2px solid red";
	clearInterval(intSeconds);
}

function previous() {
	if (counter <= 0) {
		counter = totalImgs;
		document.getElementById("main_div").style.backgroundImage = 'url("Images/BI/' + counter + '.jpg")';
	} else {
		counter--;
		document.getElementById("main_div").style.backgroundImage = 'url("Images/BI/' + counter + '.jpg")';
		//intSeconds=
	}
	intSeconds = setInterval(function () {
		next();
	}, intSeconds * 1000);
	clearInterval(intSeconds);
	document.getElementById("current_li").parentNode.style = "";
	document.getElementById("current_li").remove();
	document.getElementById("slider-li-" + counter + "").innerHTML = "<a id='current_li'></a>";
	document.getElementById("current_li").parentNode.style = "border:2px solid red";
}