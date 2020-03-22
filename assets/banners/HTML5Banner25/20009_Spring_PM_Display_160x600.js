(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"20009_Spring_PM_Display_160x600_atlas_P_", frames: [[0,0,349,158]]},
		{name:"20009_Spring_PM_Display_160x600_atlas_NP_", frames: [[0,0,320,1200],[322,0,320,1200],[644,0,320,1200],[966,0,320,1200]]}
];


// symbols:



(lib._20009_Spring_PM_Display_160x600_Frame01 = function() {
	this.initialize(ss["20009_Spring_PM_Display_160x600_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._20009_Spring_PM_Display_160x600_Frame02 = function() {
	this.initialize(ss["20009_Spring_PM_Display_160x600_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._20009_Spring_PM_Display_160x600_Frame03 = function() {
	this.initialize(ss["20009_Spring_PM_Display_160x600_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._20009_Spring_PM_Display_160x600_Frame04 = function() {
	this.initialize(ss["20009_Spring_PM_Display_160x600_atlas_NP_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Text01 = function() {
	this.initialize(ss["20009_Spring_PM_Display_160x600_atlas_P_"]);
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


(lib.frame4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20009_Spring_PM_Display_160x600_Frame04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame4_mc, new cjs.Rectangle(0,0,320,1200), null);


(lib.frame3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20009_Spring_PM_Display_160x600_Frame03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame3_mc, new cjs.Rectangle(0,0,320,1200), null);


(lib.frame2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20009_Spring_PM_Display_160x600_Frame02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame2_mc, new cjs.Rectangle(0,0,320,1200), null);


(lib.frame1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20009_Spring_PM_Display_160x600_Frame01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame1_mc, new cjs.Rectangle(0,0,320,1200), null);


(lib.copy_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Text01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy_mc, new cjs.Rectangle(0,0,349,158), null);


// stage content:
(lib._20009_Spring_PM_Display_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_327 = function() {
		//this.loopCounter=1;
		if(this.loopCounter< 2) {
		this.loopCounter++;	
		this.gotoAndPlay(2);
		} else {
		
		this.stop();
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(327).call(this.frame_327).wait(1));

	// copy
	this.instance = new lib.copy_mc();
	this.instance.parent = this;
	this.instance.setTransform(80.75,56.55,0.4999,0.5,0,0,0,174.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:true},1).wait(251));

	// Layer_2
	this.instance_1 = new lib.frame1_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_2 = new lib.frame2_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_3 = new lib.frame3_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_4 = new lib.frame4_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},45).to({state:[]},1).to({state:[]},1).wait(250));

	// copy
	this.instance_5 = new lib.copy_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.75,56.55,0.4999,0.5,0,0,0,174.5,79);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(77).to({_off:false},0).wait(57).to({_off:true},1).wait(193));

	// Layer_4
	this.instance_6 = new lib.frame1_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_7 = new lib.frame2_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_8 = new lib.frame3_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_9 = new lib.frame4_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},77).to({state:[{t:this.instance_7}]},14).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},26).to({state:[]},1).to({state:[]},1).wait(192));

	// copy
	this.instance_10 = new lib.copy_mc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80.75,56.55,0.4999,0.5,0,0,0,174.5,79);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(135).to({_off:false},0).wait(76).to({_off:true},1).wait(116));

	// Layer_6
	this.instance_11 = new lib.frame1_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_12 = new lib.frame2_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_13 = new lib.frame3_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_14 = new lib.frame4_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},135).to({state:[{t:this.instance_12}]},14).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_11}]},45).to({state:[]},1).to({state:[]},58).wait(58));

	// copy
	this.instance_15 = new lib.copy_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(80.75,56.55,0.4999,0.5,0,0,0,174.5,79);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(212).to({_off:false},0).wait(57).to({_off:true},1).wait(58));

	// Layer_8
	this.instance_16 = new lib.frame1_mc();
	this.instance_16.parent = this;
	this.instance_16.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_17 = new lib.frame2_mc();
	this.instance_17.parent = this;
	this.instance_17.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_18 = new lib.frame3_mc();
	this.instance_18.parent = this;
	this.instance_18.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_19 = new lib.frame4_mc();
	this.instance_19.parent = this;
	this.instance_19.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},212).to({state:[{t:this.instance_17}]},14).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_18}]},5).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},26).to({state:[]},1).to({state:[]},1).wait(57));

	// copy
	this.instance_20 = new lib.copy_mc();
	this.instance_20.parent = this;
	this.instance_20.setTransform(80.75,56.55,0.4999,0.5,0,0,0,174.5,79);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(270).to({_off:false},0).wait(58));

	// Layer_10
	this.instance_21 = new lib.frame1_mc();
	this.instance_21.parent = this;
	this.instance_21.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_22 = new lib.frame2_mc();
	this.instance_22.parent = this;
	this.instance_22.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_23 = new lib.frame3_mc();
	this.instance_23.parent = this;
	this.instance_23.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.instance_24 = new lib.frame4_mc();
	this.instance_24.parent = this;
	this.instance_24.setTransform(80,300,0.5,0.5,0,0,0,160,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},270).to({state:[{t:this.instance_22}]},14).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_23}]},5).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.6,300,94.4,300);
// library properties:
lib.properties = {
	id: '140CF2996A2E43489DE5DE0EB0E09475',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/20009_Spring_PM_Display_160x600_atlas_P_.png?1584742565783", id:"20009_Spring_PM_Display_160x600_atlas_P_"},
		{src:"images/20009_Spring_PM_Display_160x600_atlas_NP_.jpg?1584742565783", id:"20009_Spring_PM_Display_160x600_atlas_NP_"}
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