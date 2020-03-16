var container;
var bigExit;
var bg_one_a;
var bg_two_a;
var bg_three_a;
var bg_one_b;
var bg_two_b;
var bg_three_b;
var bg_one_c;
var bg_two_c;
var bg_three_c;
var slide1;
var slide2;
var slide3;
var slide4;
var logo; 	  		
var imageContainer;
var isiScroller
var tlMain;
var amgenLogo;

var scrollISITime = 340

//Function to run with any animations starting on load, or bringing in images etc
init = function()
{
	//Assign All the elements to the element on the page
	container = document.getElementById('container');
	bigExit = document.getElementById('bigExit');
	pi = document.getElementById('pi');
	piCopyLink = document.getElementById('piCopyLink');
	medGuide = document.getElementById('medGuide');
	isiMedGuide = document.getElementById('isiMedGuide');
	enbrelLink = document.getElementById('enbrelLink');
	tag1 = document.getElementById('tag1');
	
	logo = document.getElementById('logo');
	imageContainer = document.getElementById('imageContainer');
	
    bg_one_a = document.getElementById('bg-one-a');
	bg_two_a = document.getElementById('bg-two-a');
    bg_two_b = document.getElementById('bg-two-b');
    bg_two_c = document.getElementById('bg-two-c');
    
	bg_three_a = document.getElementById('bg-three-a');
    bg_three_b = document.getElementById('bg-three-b');
    bg_three_c = document.getElementById('bg-three-c');
    slide1 = document.getElementById('slide1');
	slide2 = document.getElementById('slide2');
    slide3 = document.getElementById('slide3');
	slide4 = document.getElementById('slide4');
	isiScroller = document.getElementById('isiContainer');
	amgenLogo = document.getElementById('amgenLogo');

	//Event Listeners
	tag1.addEventListener('click', tag1Clicked, false);
	
	pi.addEventListener('click', piExitClicked, false);
	medGuide.addEventListener('click', medGuideExitClicked, false);
	enbrelLink.addEventListener('click', enbrelExitClicked, false);
	amgenLogo.addEventListener('click', amgenExitClicked, false);
 

	TweenMax.ticker.fps(24);	


	//Animating timeline
	tlMain = new TimelineMax();
	tlMain.paused(true)
	tlMain.addLabel("start")
 
    tlMain.to([container], .0, {opacity:1})
 	tlMain.set([bg_one_a], {opacity:1}, "start")
   
    tlMain.to([slide1], 1, {opacity:0}, "start+=3")
    
    tlMain.to([bg_two_a], 1, {x:-188}, "start+=4")
    tlMain.to([bg_two_b], 1, {x:172}, "start+=5")
    tlMain.to([bg_two_c], 1, {opacity:1}, "start+=6")
    tlMain.to([slide2], 1, {opacity:0}, "start+=8")

    tlMain.to([bg_three_a], 1, {x:+215}, "start+=9")
    tlMain.to([bg_three_b], 1, {x:-130}, "start+=10")
    tlMain.to([bg_three_c], 1, {opacity:1}, "start+=11")
    
    tlMain.to([slide3], 1, {opacity:0}, "start+=13")
    
    tlMain.to([slide4], 1, {opacity:1}, "start+=14")
    
   
	tlMain.to(isiScroller, scrollISITime, {scrollTo:{y:6220, autoKill:true}, ease:Power0.easeNone});
	
	tlMain.paused(false)
	
	tlMain.to(isiScroller, scrollISITime, {scrollTo:{y:6220, autoKill:true}, ease:Power0.easeNone});
	
	tlMain.paused(false)

}


tag1Clicked = function(e){
	Enabler.exit('Banner Exit 1','https://www.enbrel.com/hcp/why-enbrel/efficacy-plaque-psoriasis/#chart-2?utm_medium=display&utm_source=160x600&utm_campaign=Enbrel_PsA_NonOBA_Banner_072017_049128&utm_content');
}

piExitClicked = function(e){
	e.stopPropagation();
	Enabler.exit('PI Link Clicked Exit','http://pi.amgen.com/united_states/enbrel/derm/enbrel_pi.pdf?utm_medium=display&utm_source=160x600&utm_campaign=Enbrel_PsA_NonOBA_Banner_072017_049128&utm_content=PI');
}
piCopyLinkClicked = function(e){
	e.stopPropagation();
	Enabler.exit('PI Copy Link Clicked Exit','http://pi.amgen.com/united_states/enbrel/derm/enbrel_pi.pdf?utm_medium=display&utm_source=160x600&utm_campaign=Enbrel_PsA_NonOBA_Banner_072017_049128&utm_content=PI');
}
medGuideExitClicked = function(e){
	e.stopPropagation();
	Enabler.exit('Med Guide Link Clicked Exit','http://pi.amgen.com/~/media/amgen/repositorysites/pi-amgen-com/enbrel/enbrel_mg.ashx?utm_medium=display&utm_source=160x600&utm_campaign=Enbrel_PsA_NonOBA_Banner_072017_049128&utm_content=MedGuide');
}
isiMedGuideExitClicked = function(e){
	e.stopPropagation();
	Enabler.exit('ISI Med Guide Link Clicked Exit','http://pi.amgen.com/~/media/amgen/repositorysites/pi-amgen-com/enbrel/enbrel_mg.ashx?utm_medium=display&utm_source=160x600&utm_campaign=Enbrel_PsA_NonOBA_Banner_072017_049128&utm_content=MedGuide');
}
enbrelExitClicked = function(e){
	e.stopPropagation();
	Enabler.exit('ISI Enbrel Website Link Clicked Exit','https://www.enbrel.com/?utm_medium=display&utm_source=160x600&utm_campaign=Enbrel_PsA_NonOBA_Banner_072017_049128&utm_content=ISI_EnbrelCom');
}
amgenExitClicked = function (e){
	e.stopPropagation();
	Enabler.exit('Amgen Logo Exit','https://www.amgen.com/?utm_medium=display&utm_source=160x600&utm_campaign=Enbrel_PsA_NonOBA_Banner_072017_049128&utm_content=ISI_AmgenLogo');
} 


function preInit() {
  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

window.addEventListener('load', preInit);
