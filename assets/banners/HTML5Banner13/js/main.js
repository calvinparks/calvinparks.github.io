var init = function()  {
	
function getClickPosition(e) {
//alert("test "+this.offsetTop);
clearInterval(intervalID);  // stop text box from automatically scrolling
	var xOffset = this.offsetLeft;
	var yOffset = this.offsetTop;

    var xPosition = e.clientX;
    var yPosition = e.clientY;
	
	if ((xPosition-xOffset > 480)&&(yPosition-yOffset >77)) {
	//alert("button clicked!");
	window.open(window.clickTag2,'_blank')
	//window.open('http://www.aktipak.com/wp-content/themes/Aktipak/img/pdf/CUTA_11042_AKT-WEBSITE_DV1_021717_Desktop_FULL_PI.pdf','_blank');
	}

	if ((xPosition-xOffset > 390)&&(xPosition-xOffset < 480)&&(yPosition-yOffset > 37)) {
	//alert("NEW button clicked! ");
	window.open(window.clickTag1,'_blank')
//window.open('http://www.aktipak.com','_blank'); 	
	scrollInfo();
	}
	
	var clickPositon = yPosition-yOffset; // track cursor position inside of scolling text area
	if ((xPosition-xOffset > 480)&&(xPosition-xOffset < 710)&&(yPosition-yOffset<77) && (elmnt.scrollTop > 145) && (clickPositon > 34) && (clickPositon < 50)) {
		window.open(window.clickTag3,'_blank')
		//alert(clickPositon+" linkig now "+elmnt.scrollTop);
	}
}

/************/
var intervalID = 0;
var scrollCounter = 0;
var elmnt = document.getElementById("info");
var scrollInfo = function() {

   elmnt.scrollTop += 1;
   scrollCounter++;
  if(scrollCounter == 500 ) {
	  clearInterval(intervalID);  // stop text box from automatically scrolling
  }
}
if(animationLoopCounter == 0) intervalID = setInterval(scrollInfo,100);
/************/
TweenMax.lagSmoothing(0)


var bannerContainer = document.getElementById('ad_banner');
bannerContainer.addEventListener("click", getClickPosition, false);



var targetTag = document.getElementById('ad_banner');
TweenMax.to(targetTag, .1, {delay:1, opacity:1});


var targetTag = document.getElementById('hero-image');
TweenMax.from(targetTag, 1, {delay:1, x:-300, ease:Back.easeout});

/************/


var targetTag = document.getElementById('headline');
TweenMax.from(targetTag, 1, {delay:3, y:+300, ease:Back.easeout})

var targetTag = document.getElementById('headline2');
TweenMax.from(targetTag, 1, {delay:4.5, y:+300, ease:Back.easeout})

/************/

var targetTag = document.getElementById('headline');
TweenMax.to(targetTag, 1, {delay:6, y:-300, ease:Back.easeout})

var targetTag = document.getElementById('headline2');
TweenMax.to(targetTag, 1, {delay:6, y:-300, ease:Back.easeout})


var targetTag = document.getElementById('headline3');
TweenMax.from(targetTag, 1, {delay:7, y:+300, ease:Back.easeout})


var targetTag = document.getElementById('headline4');
TweenMax.from(targetTag, 1, {delay:8, y:300, ease:Back.easeout})

var targetTag = document.getElementById('headline3');
TweenMax.to(targetTag, 1, {delay:10, y:-300, ease:Back.easeout})


var targetTag = document.getElementById('headline5');
TweenMax.from(targetTag, 1, {delay:10, y:300, ease:Back.easeout})


/************/


if(animationLoopCounter == 0) setTimeout(resetElements,13000);
}
window.onload = init;

var resetElements = function()  { ////////////////////////////////////////////// BEGIN: resetElements
//alert("hello");

animationLoopCounter++;

var targetTag = document.getElementById('hero-image');
TweenLite.set(targetTag, {clearProps:"transform"});
var targetTag = document.getElementById('headline');
TweenLite.set(targetTag, {clearProps:"transform"});
var targetTag = document.getElementById('headline2');
TweenLite.set(targetTag, {clearProps:"transform"});
var targetTag = document.getElementById('headline3');
TweenLite.set(targetTag, {clearProps:"transform"});
var targetTag = document.getElementById('headline4');
TweenLite.set(targetTag, {clearProps:"transform"});
var targetTag = document.getElementById('headline5');
TweenLite.set(targetTag, {clearProps:"transform"});


if(animationLoopCounter < 2) setTimeout(resetElements,13000);

init();
}


var animationLoopCounter = 0;


