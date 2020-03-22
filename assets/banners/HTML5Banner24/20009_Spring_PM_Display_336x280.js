(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"20009_Spring_PM_Display_336x280_atlas_P_", frames: [[0,0,349,260]]},
		{name:"20009_Spring_PM_Display_336x280_atlas_NP_", frames: [[0,0,672,560],[0,562,672,560],[0,1124,672,560]]}
];


// symbols:



(lib._20009_Spring_PM_Display_336x280_Frame01 = function() {
	this.initialize(ss["20009_Spring_PM_Display_336x280_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._20009_Spring_PM_Display_336x280_Frame02 = function() {
	this.initialize(ss["20009_Spring_PM_Display_336x280_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._20009_Spring_PM_Display_336x280_Frame03 = function() {
	this.initialize(ss["20009_Spring_PM_Display_336x280_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Text01 = function() {
	this.initialize(ss["20009_Spring_PM_Display_336x280_atlas_P_"]);
	this.gotoAndStop(0);
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


(lib.copy_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Text01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy_mc, new cjs.Rectangle(0,0,349,260), null);


(lib.bkgr3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20009_Spring_PM_Display_336x280_Frame03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bkgr3_mc, new cjs.Rectangle(0,0,672,560), null);


(lib.bkgr2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20009_Spring_PM_Display_336x280_Frame02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bkgr2_mc, new cjs.Rectangle(0,0,672,560), null);


(lib.bkgr1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20009_Spring_PM_Display_336x280_Frame01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bkgr1_mc, new cjs.Rectangle(0,0,672,560), null);


// stage content:
(lib._20009_Spring_PM_Display_336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_360 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(360).call(this.frame_360).wait(1));

	// copy1
	this.instance = new lib.copy_mc();
	this.instance.parent = this;
	this.instance.setTransform(78,106,0.5,0.5,0,0,0,174.5,130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(361));

	// bkgr
	this.instance_1 = new lib.bkgr1_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,140,0.5,0.5,0,0,0,336,280);

	this.instance_2 = new lib.bkgr2_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,140,0.5,0.5,0,0,0,336,280);

	this.instance_3 = new lib.bkgr3_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(168,140,0.5,0.5,0,0,0,336,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},25).to({state:[{t:this.instance_3}]},25).to({state:[{t:this.instance_1}]},61).to({state:[{t:this.instance_2}]},25).to({state:[{t:this.instance_3}]},25).to({state:[{t:this.instance_1}]},61).to({state:[{t:this.instance_2}]},25).to({state:[{t:this.instance_3}]},25).to({state:[{t:this.instance_3}]},88).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.8,140,177.2,140);
// library properties:
lib.properties = {
	id: '140CF2996A2E43489DE5DE0EB0E09475',
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/20009_Spring_PM_Display_336x280_atlas_P_.png?1584743667821", id:"20009_Spring_PM_Display_336x280_atlas_P_"},
		{src:"images/20009_Spring_PM_Display_336x280_atlas_NP_.jpg?1584743667821", id:"20009_Spring_PM_Display_336x280_atlas_NP_"}
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