////////////////////////////////
// Standard Banner Vanilla Template
//
// Mcgarry Bowen Chicago
//
////////////////////////////////


////////////////////////////////
// Banners vars
////////////////////////////////
'use strict';

// local click tag var in index.html head

// stores local vars
var localVar = {};


/// local vars pushed into localVar object EXAMPLES
localVar.saveDiv;
localVar.once = false;
localVar.goLegal = false;


//global Tween easing
localVar.theEase = Elastic.easeOut.config(5, 1);


///timers to call each frame animation
localVar.go1;
localVar.go2;
localVar.go3;


//store dom elements
localVar.frame1 = document.getElementById("frame1");
localVar.copy1 = document.getElementById("copy1");

localVar.frame2 = document.getElementById("frame2");
localVar.copy2 = document.getElementById("copy2");

localVar.frame3 = document.getElementById("frame3");
localVar.frameEnd = document.getElementById("end_frame");

localVar.bannerBtn = document.getElementById("banner_btn");

localVar.ctaBtn = document.getElementById("cta_btn");
localVar.legalBtn = document.getElementById("legal_in");



////////////////////////////////
// onload init function called on html body tag
////////////////////////////////

function initBanner(id) {

    //sets whole banner to be visible _ prevents fouc
    localVar.bannerBtn.style.visibility = "visible";

    ///adds the banner button     
    addEvent("click", localVar.bannerBtn, ctaClick);

    addEvent("click", localVar.legalBtn, legalClick);
    
    //calls frame one animation with delay
    TweenLite.delayedCall(.3, initFrame);
    
    
}

var offDist = "-5";

function initFrame(){
        ///sets init values
    TweenLite.set("#copy1", {
        y: offDist
    });  
    TweenLite.set("#copy1_2", {
        y: offDist
    });
    TweenLite.set("#copy1_3", {
        y: offDist
    });
    TweenLite.set("#copy1_4", {
        y: offDist
    });
    
    
    
    TweenLite.to("#img1", 8, {
        scaleX: 1.1,
        scaleY: 1.1,
        transformOrigin: '80% 10%',
        z: 0.01,
        rotationZ: 0.01,
        force3D: true,
        delay: 0
    });
    
    ///animation in
    TweenLite.to("#copy1", .2, {
        opacity:1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: .2
    });

  
     TweenLite.to("#copy1_2", .2, {
        opacity:1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: .2
    });
      
    TweenLite.to("#copy1_3", .2, {
        opacity:1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: .2
    });
    
    
    TweenLite.to("#copy1_4", .2, {
        opacity:1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: 1.7
    });
    
    

    //calls frame one animation with delay
    TweenLite.delayedCall(3.5, frame1);
}

//////////////////////////////////////////
/// animations functions for each frame
//////////////////////////////////////////

function frame1() {
    console.log("frame 1");

    // set intial dom element value
 

    // animate frame dom elements
    TweenLite.to("#copy1", .1, {
        opacity:0,
        ease: Linear.easeOut,
        delay: .1
    });
    TweenLite.to("#copy1_2", .1, {
        opacity:0,
        ease: Linear.easeOut,
        delay: .1
    });
    TweenLite.to("#copy1_3", .1, {
        opacity:0,
        ease: Linear.easeOut,
        delay: .1
    });
    
    TweenLite.to("#copy1_4", .1, {
        opacity:0,
        ease: Linear.easeOut,
        delay: .1
    });
    
    ///animation in
    TweenLite.set("#copy2", {
        y: offDist
    });
    TweenLite.set("#copy2_2", {
        y: offDist
    });
    
     TweenLite.set("#copy2_3", {
        y: offDist
    });
    TweenLite.set("#copy2_4", {
        y: offDist
    });

    TweenLite.to("#copy2", .2, {
        opacity:1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: .25
    });
    
    TweenLite.to("#copy2_2", .2, {
        opacity:1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: .25
    });
    
    
    TweenLite.to("#copy2_3", .2, {
        opacity:1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: 2
    });
    
    TweenLite.to("#copy2_4", .2, {
        opacity:1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: 2
    });
    
    
    TweenLite.delayedCall(1.8, frame2);
}


/* switch backgrond image (sprite) */
function frame2() {
    console.log("frame 2");

    TweenLite.to("#img1", .2, {
        opacity: 0,
        delay: 0
    });
    
/* pan second background image */    
    TweenLite.to("#img3", 5, {
        scaleX: 1.09,
        scaleY: 1.09,
        z: 0.01,
        rotationZ: 0.01,
        force3D: true,
        transformOrigin: '200% 60%',
        delay: .6
    });

    TweenLite.delayedCall(2.6, frame3);
}



function frame3() {
    console.log("frame 3");

    TweenLite.to("#copy2", .1, {
        opacity: 0,
        ease: Linear.easeOut,
        delay: 0
    });
    TweenLite.to("#copy2_2", .1, {
        opacity: 0,
        ease: Linear.easeOut,
        delay: 0
    });
    TweenLite.to("#copy2_3", .1, {
        opacity: 0,
        ease: Linear.easeOut,
        delay: 0
    });
    TweenLite.to("#copy2_4", .1, {
        opacity: 0,
        ease: Linear.easeOut,
        delay: 0
    });
    
    TweenLite.delayedCall(.2, endFrame);
}



function endFrame() {
    console.log("End Frame");
    
    TweenLite.set("#copy3", {
        y: "-10"
    });
    TweenLite.set("#copy3_2", {
        y: "-10"
    });
    TweenLite.set("#copy3_3", {
        y: "-10"
    });
    TweenLite.set("#cta", {
        y: "-10"
    });

    // animate frame dom elements
    
    TweenLite.to("#copy3", .2, {
        y:"0",
        opacity: 1,
        ease: Elastic.easeOut.config(25, 5),
        delay: 0
    });
    
    TweenLite.to("#copy3_2", .2, {
        opacity: 1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: .05
    });
    
    
     TweenLite.to("#copy3_3", .2, {
        opacity: 1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: .15
    });
    
    TweenLite.to("#cta", .2, {
        opacity: 1,
        y:"0",
        ease: Elastic.easeOut.config(25, 5),
        delay: .85,
        onComplete: ctaRoll
    });
    
    TweenLite.delayedCall(1.65, ctaRollout);

    ///adds cta rollover with delay and function
    var img = document.createElement('img');
    if (img.addEventListener) {
        addEvent("mouseover", localVar.bannerBtn, ctaRoll);
        addEvent("mouseout", localVar.bannerBtn, ctaRollout);
    } else {
        addEvent("onmouseover", localVar.bannerBtn, ctaRoll);
        addEvent("onmouseout", localVar.bannerBtn, ctaRollout);
    }

}

//////////////////////////////////////////
/// for banner btn clickTag
//////////////////////////////////////////
function ctaClick() {
    console.log(clickTag);
    window.open(clickTag);
}


////////////////////////////////////
/// for cta rollover
////////////////////////////////////
function ctaRoll() {
    TweenLite.to("#cta_btn2", .2, {
            width: 280,
            ease: localVar.easeing,
            delay: 0
        });
    
    TweenLite.to("#cta_arrow", .2, {
            x: 5,
            ease: localVar.easeing,
            delay: .1
        });
    
    TweenLite.to("#cta_arrow_img", .01, {
            left: -8,
            ease: localVar.easeing,
            delay: .1
        });
}

function ctaRollout() {
     TweenLite.to("#cta_btn2", .2, {
            width: 0,
            ease: localVar.easeing,
            delay: .1
        });
    
    TweenLite.to("#cta_arrow", .2, {
            x: 0,
            ease: localVar.easeing,
            delay: 0
        });
    TweenLite.to("#cta_arrow_img", .01, {
            left: 0,
            ease: localVar.easeing,
            delay: 0
        });
}

///////////////////////////////////////////////////
///
///add additional functions here helpers/methods and such
///
///////////////////////////////////////////////////

/// cta roll over
function addRoll() {
    if (!localVar.once) {
        ctaRoll();
    }
};

/// adds events to dom Elements
function addEvent(evnt, elem, func) {
    console.log("EVENT ADDED");
    if (elem.addEventListener) // W3C DOM
        elem.addEventListener(evnt, func, false);
    else if (elem.attachEvent) { // IE DOM
        elem.attachEvent("on" + evnt, func);
    } else { // No much to do
        elem[evnt] = func;
    }
}

///legal 

function legalClick() {
    if (!localVar.goLegal) {
        TweenLite.set("#legal", {
            zIndex: 1000
        });
        TweenLite.to("#legal_in", .35, {
            x: -670,
            ease: localVar.easeing,
            delay: 0
        });
        TweenLite.set("#legal_bg", {
            x: -728
        });
        TweenLite.to("#legal_bg", .35, {
            opacity: .8,
            ease: localVar.easeing,
            delay: 0
        });
        localVar.goLegal = true;
    } else {
        TweenLite.set("#legal", {
            zIndex: 100
        });
        TweenLite.to("#legal_in", .2, {
            x: 0,
            ease: localVar.easeing,
            delay: 0
        });
        TweenLite.set("#legal_bg", {
            x: 0
        });
        TweenLite.to("#legal_bg", .2, {
            opacity: 0,
            ease: localVar.easeing,
            delay: 0
        });
        localVar.goLegal = false;
        
    }
}