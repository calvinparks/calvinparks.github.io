(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"62034_VDH_bannerAd R1_300x250_atlas_P_", frames: [[0,1000,600,95],[0,824,588,174],[779,0,91,170],[302,0,475,320],[561,593,420,215],[0,0,300,562],[0,564,300,228],[302,322,257,500],[561,322,340,269],[0,1097,522,70]]}
];


// symbols:



(lib.availableAtwalmart = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Face615WidthCompressed = function() {
	this.initialize(img.Face615WidthCompressed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,615,520);


(lib.MADEWITHNATURALINGREDIENTS = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NEVERCUTTINGCORNERS = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.orangerectangle = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.orangRectangleFinal = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Shavebutterfront39K = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.THESHAVEOFYOURLIFE = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject = function() {
	this.spriteSheet = ss["62034_VDH_bannerAd R1_300x250_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.shaveButter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Shavebutterfront39K();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shaveButter_mc, new cjs.Rectangle(0,0,257,500), null);


(lib.orangrect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.orangerectangle();
	this.instance.parent = this;
	this.instance.setTransform(108,118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.orangerectangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-69,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.orangrect, new cjs.Rectangle(-69,-84,477,764), null);


(lib.face_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Face615WidthCompressed();
	this.instance.parent = this;
	this.instance.setTransform(0,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.face_mc, new cjs.Rectangle(0,-22,615,520), null);


(lib.caption5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(236,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.caption5_mc, new cjs.Rectangle(0,-133,595,283), null);


(lib.caption4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.VectorSmartObject();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.caption4_mc, new cjs.Rectangle(0,0,522,70), null);


(lib.caption3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.THESHAVEOFYOURLIFE();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.caption3_mc, new cjs.Rectangle(0,0,340,269), null);


(lib.caption2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.MADEWITHNATURALINGREDIENTS();
	this.instance.parent = this;
	this.instance.setTransform(-5,-43,0.907,0.907);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.MADEWITHNATURALINGREDIENTS();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,-43,0.907,0.907);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.caption2_mc, new cjs.Rectangle(-5,-43,431,290.4), null);


(lib.caption1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NEVERCUTTINGCORNERS();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.caption1_mc, new cjs.Rectangle(0,0,420,215), null);


(lib.availableAt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.availableAtwalmart();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.availableAt_mc, new cjs.Rectangle(1,0,600,95), null);


// stage content:
(lib._62034_VDH_bannerAdR1_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_347 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(347).call(this.frame_347).wait(1));

	// available at.png
	this.instance = new lib.availableAt_mc();
	this.instance.parent = this;
	this.instance.setTransform(74,263,0.5,0.5,0,0,0,150,24);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).to({y:215},15,cjs.Ease.get(1)).wait(31));

	// LOGO
	this.instance_1 = new lib.caption5_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151,142,0.5,0.5,0,0,0,296,62);
	this.instance_1.alpha = 0.488;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(254).to({_off:false},0).to({alpha:1},10).wait(28).to({y:106},10,cjs.Ease.get(0.95)).wait(46));

	// EVERYDAY
	this.instance_2 = new lib.caption4_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154.1,125,0.285,0.285,0,0,0,261.2,35.1);
	this.instance_2.alpha = 0.801;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(194).to({_off:false},0).to({regX:261.4,regY:35.5,scaleX:0.39,scaleY:0.39,y:125.1,alpha:1},4).wait(2).to({regX:261.1,regY:35.1,scaleX:0.54,scaleY:0.54,y:125},0).to({regX:261,regY:35,scaleX:0.5,scaleY:0.5,x:154},3).to({_off:true},51).wait(94));

	// CAPTION3
	this.instance_3 = new lib.caption3_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(207,125.3,0.5,0.5,0,0,0,170,134.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(146).to({_off:false},0).to({alpha:1},4).wait(34).to({alpha:0},9).to({_off:true},1).wait(154));

	// shaveButter
	this.instance_4 = new lib.shaveButter_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(68,124,0.5,0.5,0,0,0,128.5,250);
	this.instance_4.shadow = new cjs.Shadow("rgba(102,102,102,0.2)",1,0,10);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(146).to({_off:false},0).wait(38).to({regX:128.7,regY:250.5,scaleX:0.34,scaleY:0.34,x:71,y:160.1},10,cjs.Ease.get(1)).to({_off:true},108).wait(46));

	// CAPTION2
	this.instance_5 = new lib.caption2_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(141,171.5,0.5,0.5,0,0,0,248,95);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(96).to({_off:false},0).to({alpha:1},5).wait(35).to({alpha:0},9).to({_off:true},1).wait(202));

	// CAPTION1
	this.instance_6 = new lib.caption1_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-161,167.7,0.5,0.5,0,0,0,210,107.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({x:122},20,cjs.Ease.get(1)).wait(56).to({alpha:0},7).to({_off:true},1).wait(252));

	// orangRectFINAL
	this.instance_7 = new lib.orangRectangleFinal();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-25);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(302).to({_off:false},0).wait(46));

	// orangeRect
	this.instance_8 = new lib.orangrect();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-138,123,1,1,0,0,0,150,281);
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-1, 0, 0, 0))];
	this.instance_8.cache(-71,-86,481,768);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({x:142},20,cjs.Ease.get(1)).wait(11).to({alpha:0.77},9).wait(36).to({rotation:-21.7,x:139.1,y:137.1},8,cjs.Ease.get(1)).wait(40).to({regX:149.9,regY:280.9,rotation:-73.6,x:82.1,y:87.1},9,cjs.Ease.get(1)).wait(1).to({alpha:1},0).wait(38).to({regY:280.8,rotation:-205.3,x:133.2,y:186},10,cjs.Ease.get(1)).wait(50).to({regX:149.8,rotation:-252,x:275.2,y:156},10,cjs.Ease.get(1)).wait(38).to({regY:280.4,scaleX:1.31,scaleY:1.23,rotation:-227.1,x:275.4,y:182.3},10,cjs.Ease.get(1)).to({_off:true},1).wait(45));

	// face
	this.instance_9 = new lib.face_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,100.5,0.5,0.5,0,0,0,300,199);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(88).to({regX:299.9,regY:198.9,scaleX:0.56,scaleY:0.56},8,cjs.Ease.get(1)).wait(45).to({alpha:0},5).wait(202));

	// white Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(348));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,115,307.5,260);
// library properties:
lib.properties = {
	id: '140CF2996A2E43489DE5DE0EB0E09475',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Face615WidthCompressed.jpg?1527262933677", id:"Face615WidthCompressed"},
		{src:"images/62034_VDH_bannerAd R1_300x250_atlas_P_.png?1527262933633", id:"62034_VDH_bannerAd R1_300x250_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['140CF2996A2E43489DE5DE0EB0E09475'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;