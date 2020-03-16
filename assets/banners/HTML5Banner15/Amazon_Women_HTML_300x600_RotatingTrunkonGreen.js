(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_", frames: [[0,0,600,1200],[1641,350,327,292],[827,899,162,279],[1839,644,200,252],[1422,983,308,80],[1583,644,254,337],[1093,469,488,416],[602,455,489,442],[1131,0,508,467],[602,899,223,237],[1839,898,200,237],[1093,887,327,237],[1991,0,50,57],[1641,0,348,348],[602,0,527,453],[1422,1065,320,66]]}
];


// symbols:



(lib.background = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Blackshoe1 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Blackshoe2 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CTAnewBig = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Havegreatstyle = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Outfit1 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Outfit2 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Outfit3 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Pinkshoe1 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Pinkshoe2 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Purse = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.snowflake = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Spendlesstime = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.trunk1 = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.trunkClubLogo = function() {
	this.spriteSheet = ss["Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"];
	this.gotoAndStop(15);
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


(lib.trunkKClosedLarge_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trunk1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trunkKClosedLarge_mc, new cjs.Rectangle(0,0,527,453), null);


(lib.trunkClubLogo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trunkClubLogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trunkClubLogo_mc, new cjs.Rectangle(0,0,320,66), null);


(lib.trunk_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(139,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trunk_mc, new cjs.Rectangle(139,166,327,292), null);


(lib.snowFlake_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snowflake();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowFlake_mc, new cjs.Rectangle(0,0,50,57), null);


(lib.rightShoe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Pinkshoe1();
	this.instance.parent = this;
	this.instance.setTransform(-82,124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightShoe3_mc, new cjs.Rectangle(-82,124,223,237), null);


(lib.rightShoe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Purse();
	this.instance.parent = this;
	this.instance.setTransform(-113,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightShoe2_mc, new cjs.Rectangle(-113,64,327,237), null);


(lib.rightShoe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Blackshoe1();
	this.instance.parent = this;
	this.instance.setTransform(41,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightShoe_mc, new cjs.Rectangle(41,-12,162,279), null);


(lib.leftShoe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Pinkshoe2();
	this.instance.parent = this;
	this.instance.setTransform(183,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftShoe3_mc, new cjs.Rectangle(183,-143,200,237), null);


(lib.leftShoe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Blackshoe2();
	this.instance.parent = this;
	this.instance.setTransform(82,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftShoe_mc, new cjs.Rectangle(82,-65,200,252), null);


(lib.CTA_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.CTAnewBig();
	this.instance.parent = this;
	this.instance.setTransform(4,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_MC, new cjs.Rectangle(4,1,308,80), null);


(lib.cloths3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Outfit3();
	this.instance.parent = this;
	this.instance.setTransform(-9,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloths3_mc, new cjs.Rectangle(-9,-17,508,467), null);


(lib.cloths2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Outfit2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloths2_mc, new cjs.Rectangle(0,0,489,442), null);


(lib.cloths1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Outfit1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloths1, new cjs.Rectangle(0,0,488,416), null);


(lib.closedTrunc_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.trunk1();
	this.instance.parent = this;
	this.instance.setTransform(8,-127,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.closedTrunc_mc, new cjs.Rectangle(8,-127,347.8,299), null);


(lib.captionFrame2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Spendlesstime();
	this.instance.parent = this;
	this.instance.setTransform(1,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.captionFrame2_mc, new cjs.Rectangle(1,34,348,348), null);


(lib.captionFrame1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Havegreatstyle();
	this.instance.parent = this;
	this.instance.setTransform(29,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.captionFrame1_mc, new cjs.Rectangle(29,-108,254,337), null);


(lib.background_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(0,0,600,1200), null);


(lib.snow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_360 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(360).call(this.frame_360).wait(1));

	// flake 1
	this.instance = new lib.snowFlake_mc();
	this.instance.parent = this;
	this.instance.setTransform(-84,-582.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-79,y:49.1},360).wait(1));

	// flake 2
	this.instance_1 = new lib.snowFlake_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,-749.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:24.8,regY:28.4,rotation:45,x:-51.8,y:-216.8},348).to({regX:24.9,regY:28.5,x:-58.2,y:-210.4,alpha:0},12).wait(1));

	// flake 3
	this.instance_2 = new lib.snowFlake_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-647.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:24.9,regY:28.4,rotation:75,x:4,y:-190},354).to({y:-182,alpha:0},6).wait(1));

	// flake 4
	this.instance_3 = new lib.snowFlake_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51,-862.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:25.1,regY:28.4,x:50,y:-237.7},351).to({regX:25,regY:28.6,y:-226.9,alpha:0},9).wait(1));

	// flake 5
	this.instance_4 = new lib.snowFlake_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(97,-895.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:25.1,regY:28.4,rotation:45,x:101.2,y:-362.7},346).to({regX:24.9,regY:28.6,x:94.8,y:-356.3,alpha:0},14).wait(1));

	// flake 6
	this.instance_5 = new lib.snowFlake_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153,-793.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:25.1,regY:28.4,y:-213.9},333).to({regX:25,regY:28.6,y:-203.9,alpha:0},27).wait(1));

	// flake 1
	this.instance_6 = new lib.snowFlake_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-102,-326.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:24.9,x:-103,y:298.4},342).to({regX:25,y:309.1,alpha:0},18).wait(1));

	// flake 2
	this.instance_7 = new lib.snowFlake_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-56,-359.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:24.8,rotation:-60,x:-96.9,y:174.3},346).to({regX:24.9,x:-59,y:176.8,alpha:0},14).wait(1));

	// flake 3
	this.instance_8 = new lib.snowFlake_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-257.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:24.9,y:322.2},349).to({regX:25,y:332.1,alpha:0},11).wait(1));

	// flake 4
	this.instance_9 = new lib.snowFlake_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(51,-472.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:25.1,regY:28.7,rotation:-60,x:134,y:143},343).to({x:137,y:160,alpha:0},17).wait(1));

	// flake 5
	this.instance_10 = new lib.snowFlake_mc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(97,-505.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:25.2,regY:28.8,scaleX:0.74,scaleY:0.74,rotation:-24.2,x:139.2,y:85.1},360).wait(1));

	// flake 6
	this.instance_11 = new lib.snowFlake_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(153,-403.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:25.2,regY:28.7,scaleX:0.34,scaleY:0.34,rotation:-15,x:139.1,y:247},360).wait(1));

	// flake 1
	this.instance_12 = new lib.snowFlake_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(5,24.1,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:24.9,regY:28.7,x:4,y:649.4},354).to({regX:25,regY:28.6,y:660.1,alpha:0},6).wait(1));

	// flake 2
	this.instance_13 = new lib.snowFlake_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(51,-175.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:25.1,rotation:-30,x:49.8,y:356.6},334).to({x:54.3,y:364.4,alpha:0},26).wait(1));

	// flake 3
	this.instance_14 = new lib.snowFlake_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-103,-63.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:25.1,x:28,y:518.1},345).to({regX:25,y:528.1,alpha:0},15).wait(1));

	// flake 4
	this.instance_15 = new lib.snowFlake_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-81,-126.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({rotation:60,x:-82,y:498.5},352).to({rotation:0,y:509.1,alpha:0},8).wait(1));

	// flake 5
	this.instance_16 = new lib.snowFlake_mc();
	this.instance_16.parent = this;
	this.instance_16.setTransform(89,-214.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:25.2,rotation:45,x:93.1,y:318.4},347).to({regX:25.1,x:86.7,y:324.7,alpha:0},13).wait(1));

	// flake 6
	this.instance_17 = new lib.snowFlake_mc();
	this.instance_17.parent = this;
	this.instance_17.setTransform(158,-69.9,0.5,0.499,0,0,0,25,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:25.1,y:510.2},339).to({regX:25,y:520.1,alpha:0},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-910.2,286,948.5);


(lib.clothes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloths1();
	this.instance.parent = this;
	this.instance.setTransform(120,76,0.5,0.5,0,0,0,240,213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clothes1_mc, new cjs.Rectangle(0,-30.5,244,208), null);


// stage content:
(lib.Amazon_Women_HTML_300x600_RotatingTrunkonGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_338 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(338).call(this.frame_338).wait(1));

	// clothes
	this.instance = new lib.clothes1_mc();
	this.instance.parent = this;
	this.instance.setTransform(150,-78,1,1,0,0,0,120,106.5);
	this.instance._off = true;

	this.instance_1 = new lib.cloths2_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.3,184.5,0.5,0.5,0,0,0,240.5,225);

	this.instance_2 = new lib.cloths3_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(152,183,0.499,0.499,0,0,0,240.6,230.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},45).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},60).to({state:[{t:this.instance_2}]},60).to({state:[{t:this.instance_2}]},18).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({y:224.5},15).to({_off:true},60).wait(219));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180).to({_off:false},0).wait(60).to({y:-122},18).wait(81));

	// right shoe
	this.instance_3 = new lib.rightShoe_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62,383,0.5,0.5,0,0,0,123.5,156.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.rightShoe2_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(185,352,0.5,0.5,0,0,0,123.5,156.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.rightShoe3_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160.8,355,0.5,0.5,0,0,0,123.5,156.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({x:103},6,cjs.Ease.get(1)).wait(33).to({regX:123.7,regY:156.8,rotation:-7.3,x:103.1,y:383.1},0).to({regY:156.6,rotation:15},3).wait(3).to({regX:123.5,rotation:-7.7,x:103},3).to({rotation:9,x:103.1},2).to({regY:156.7,rotation:-9.2,x:103},4).to({regY:156.5,rotation:0,y:383},3).to({_off:true},3).wait(219));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).wait(20).to({rotation:-4},0).to({regX:123.6,regY:156.6,rotation:9.7,y:352.1},3).to({rotation:-6.5,x:185.1},3).to({regX:123.5,regY:156.5,rotation:3.9,x:185,y:352},2).to({regY:156.6,rotation:-8.7,x:185.1,y:352.1},3).to({regX:123.6,rotation:4.4},3).to({regX:123.5,regY:156.5,rotation:0,x:185,y:352},2).to({_off:true},24).wait(159));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({_off:false},0).wait(31).to({regY:156.7,rotation:6.5,y:355.1},0).to({regY:156.6,rotation:-7.5},3).to({regY:156.7,rotation:8.7},2).to({regY:156.5,rotation:-7,y:355},3).to({regY:156.7,rotation:7.7,y:355.1},2).to({regY:156.5,rotation:-8,y:355},3).to({rotation:0},3).to({_off:true},13).wait(99));

	// left shoe
	this.instance_6 = new lib.leftShoe_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(375,411,0.5,0.5,0,0,0,150,100);
	this.instance_6._off = true;

	this.instance_7 = new lib.leftShoe3_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(130.8,423,0.5,0.5,0,0,0,150,100);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).to({x:168},6,cjs.Ease.get(1)).wait(8).to({regX:150.3,regY:100.3,rotation:6.5,y:411.1},0).to({regX:150.1,regY:100,rotation:-15,x:168.1,y:411},3).to({rotation:15},3).to({rotation:-15},4).to({regX:150,rotation:0,x:168},4).wait(5).to({_off:true},27).wait(219));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180).to({_off:false},0).wait(11).to({rotation:-5.7},0).to({rotation:6},3).to({regX:149.9,rotation:-6.5,x:130.7,y:423.1},3).to({regX:150.2,regY:100.1,rotation:8.2,x:130.9},4).to({regX:150.1,regY:100,rotation:-5.5,x:130.8,y:423},2).to({rotation:9,x:130.9},2).to({regX:150,rotation:0,x:130.8},2).to({_off:true},33).wait(99));

	// cta
	this.instance_8 = new lib.CTA_MC();
	this.instance_8.parent = this;
	this.instance_8.setTransform(149,564,0.5,0.5,0,0,0,154,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(339));

	// truck2
	this.instance_9 = new lib.trunk_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(145.8,-170.1,1,1,0,0,0,300,297.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.trunkKClosedLarge_mc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,713.1,0.499,0.499,0,0,0,263.4,226.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({x:147,y:131.5},15).wait(180).to({y:132.5},0).to({x:146,y:-174.5},18).to({_off:true},60).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(318).to({_off:false},0).to({y:236.1},20).wait(1));

	// truck1
	this.instance_11 = new lib.closedTrunc_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.1,46,0.499,0.498,0,0,0,182.6,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},59).wait(280));

	// snow
	this.instance_12 = new lib.snow_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(149,336.5,1,1,0,0,0,25,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(339));

	// caption
	this.instance_13 = new lib.captionFrame1_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,-95,0.5,0.5,0,0,0,156,72.5);

	this.instance_14 = new lib.captionFrame2_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(151,718.5,0.5,0.5,0,0,0,168.5,225);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:300},29,cjs.Ease.get(1)).wait(16).to({alpha:0},6).to({_off:true},9).wait(279));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(240).to({_off:false},0).to({x:150,y:300,alpha:1},18,cjs.Ease.get(1)).wait(60).to({_off:true},1).wait(20));

	// logo
	this.instance_15 = new lib.trunkClubLogo_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(147,500,0.5,0.5,0,0,0,160,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(339));

	// background
	this.instance_16 = new lib.background_mc();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,300,0.5,0.5,0,0,0,300,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(339));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-302.2,300,1202.3);
// library properties:
lib.properties = {
	id: '140CF2996A2E43489DE5DE0EB0E09475',
	width: 300,
	height: 600,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_.png?1510174686685", id:"Amazon_Women_HTML_300x600_RotatingTrunkonGreen_atlas_P_"}
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