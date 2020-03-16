(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.CTA1 = function() {
	this.initialize(img.CTA1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.CTA2 = function() {
	this.initialize(img.CTA2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.products2 = function() {
	this.initialize(img.products2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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


(lib.txt3_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3_Layer_2, null, null);


(lib.txt2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2_1, new cjs.Rectangle(0,175,300,250), null);


(lib.txt1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1_1, new cjs.Rectangle(0,175,300,250), null);


(lib.Scene_1_logo_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_png
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(273));

}).prototype = p = new cjs.MovieClip();


(lib.products2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.products2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.products2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.img2_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_Layer_2, null, null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(0,175,300,250), null);


(lib.grill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(1,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.grill, new cjs.Rectangle(1,175,300,250), null);


(lib.cta_over_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CTA2();
	this.instance.parent = this;
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_over_Layer_2, null, null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CTA1();
	this.instance.parent = this;
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,175,300,250), null);


(lib.TransparentButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BG();
	this.instance.parent = this;
	this.instance.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,175,300,250), null);


(lib.txt3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2_obj_
	this.Layer_2 = new lib.txt3_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(150,300,1,1,0,0,0,150,300);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3_1, new cjs.Rectangle(0,175,300,250), null);


(lib.Scene_1_txt3_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt3_png
	this.instance = new lib.txt3_1();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).wait(152));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_txt2_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2_png
	this.instance = new lib.txt2_1();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).wait(40).to({x:451,alpha:0},8,cjs.Ease.cubicOut).to({_off:true},1).wait(157));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_txt1_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt1_png
	this.instance = new lib.txt1_1();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(38).to({x:450,alpha:0},8,cjs.Ease.cubicOut).to({_off:true},1).wait(212));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_TButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TButton
	this.instance = new lib.TransparentButton();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.TransparentButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(273));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_products2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// products2
	this.instance = new lib.products2_1();
	this.instance.parent = this;
	this.instance.setTransform(146.15,204.7,2.4999,2.4999,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(163).to({_off:false},0).wait(1).to({scaleX:2.4992,scaleY:2.4992,x:146.2,alpha:0.0005},0).wait(1).to({scaleX:2.497,scaleY:2.497,y:204.55,alpha:0.002},0).wait(1).to({scaleX:2.493,scaleY:2.493,y:204.3,alpha:0.0046},0).wait(1).to({scaleX:2.487,scaleY:2.487,y:204.05,alpha:0.0086},0).wait(1).to({scaleX:2.4788,scaleY:2.4788,y:203.6,alpha:0.0141},0).wait(1).to({scaleX:2.468,scaleY:2.468,x:146.25,y:203,alpha:0.0213},0).wait(1).to({scaleX:2.4541,scaleY:2.4541,y:202.25,alpha:0.0305},0).wait(1).to({scaleX:2.4366,scaleY:2.4366,x:146.35,y:201.4,alpha:0.0422},0).wait(1).to({scaleX:2.4146,scaleY:2.4146,x:146.4,y:200.2,alpha:0.0569},0).wait(1).to({scaleX:2.3872,scaleY:2.3872,x:146.45,y:198.75,alpha:0.0752},0).wait(1).to({scaleX:2.3526,scaleY:2.3526,x:146.55,y:196.85,alpha:0.0982},0).wait(1).to({scaleX:2.3086,scaleY:2.3086,x:146.7,y:194.55,alpha:0.1276},0).wait(1).to({scaleX:2.2515,scaleY:2.2515,x:146.8,y:191.55,alpha:0.1657},0).wait(1).to({scaleX:2.1748,scaleY:2.1748,x:147.05,y:187.45,alpha:0.2167},0).wait(1).to({scaleX:2.0671,scaleY:2.0671,x:147.3,y:181.75,alpha:0.2886},0).wait(1).to({scaleX:1.9092,scaleY:1.9092,x:147.75,y:173.35,alpha:0.3938},0).wait(1).to({scaleX:1.7035,scaleY:1.7035,x:148.2,y:162.4,alpha:0.531},0).wait(1).to({scaleX:1.5231,scaleY:1.5231,x:148.7,y:152.85,alpha:0.6513},0).wait(1).to({scaleX:1.3973,scaleY:1.3973,x:149.05,y:146.1,alpha:0.7352},0).wait(1).to({scaleX:1.3083,scaleY:1.3083,x:149.25,y:141.4,alpha:0.7944},0).wait(1).to({scaleX:1.2423,scaleY:1.2423,x:149.45,y:137.9,alpha:0.8385},0).wait(1).to({scaleX:1.1912,scaleY:1.1912,x:149.6,y:135.2,alpha:0.8725},0).wait(1).to({scaleX:1.1508,scaleY:1.1508,x:149.65,y:133.05,alpha:0.8994},0).wait(1).to({scaleX:1.1183,scaleY:1.1183,x:149.75,y:131.3,alpha:0.9211},0).wait(1).to({scaleX:1.0919,scaleY:1.0919,x:149.85,y:129.9,alpha:0.9387},0).wait(1).to({scaleX:1.0703,scaleY:1.0703,x:149.9,y:128.75,alpha:0.9531},0).wait(1).to({scaleX:1.0527,scaleY:1.0527,x:149.95,y:127.85,alpha:0.9648},0).wait(1).to({scaleX:1.0385,scaleY:1.0385,y:127.05,alpha:0.9744},0).wait(1).to({scaleX:1.027,scaleY:1.027,x:150,y:126.45,alpha:0.982},0).wait(1).to({scaleX:1.018,scaleY:1.018,x:150.05,y:126,alpha:0.988},0).wait(1).to({scaleX:1.011,scaleY:1.011,y:125.65,alpha:0.9926},0).wait(1).to({scaleX:1.006,scaleY:1.006,y:125.35,alpha:0.996},0).wait(1).to({scaleX:1.0026,scaleY:1.0026,x:150.1,y:125.15,alpha:0.9983},0).wait(1).to({scaleX:1.0006,scaleY:1.0006,y:125.1,alpha:0.9996},0).wait(1).to({scaleX:1,scaleY:1,x:150,y:125,alpha:1},0).wait(76));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_img1_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img1_png
	this.instance = new lib.img1_1();
	this.instance.parent = this;
	this.instance.setTransform(-40.55,125,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:157.5},8,cjs.Ease.cubicOut).to({x:150},7,cjs.Ease.cubicInOut).wait(9).to({regY:299.9,scaleX:1.2,scaleY:1.2,x:144,y:124.9},12,cjs.Ease.quartInOut).to({regY:300,scaleX:1,scaleY:1,x:150,y:125},14,cjs.Ease.quartInOut).wait(3).to({x:256.8},0).wait(1).to({x:339.05},0).wait(1).to({x:392.55},0).wait(1).to({x:425.65},0).wait(1).to({x:445.75},0).wait(1).to({x:457.4},0).wait(1).to({x:463.3},0).wait(1).to({x:465},0).to({_off:true},1).wait(212));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BG_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG_png
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(273));

}).prototype = p = new cjs.MovieClip();


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(22).call(this.frame_23).wait(1));

	// Layer_1
	this.instance = new lib.grill();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({alpha:0},17).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301,425);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2_obj_
	this.Layer_2 = new lib.img2_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(150,300,1,1,0,0,0,150,300);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(0,175,300,250), null);


(lib.cta_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2_obj_
	this.Layer_2 = new lib.cta_over_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(150,300,1,1,0,0,0,150,300);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_over, new cjs.Rectangle(0,175,300,250), null);


(lib.cta_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:13});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12).call(this.frame_24).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAHHAg4QhMhMAAhsQAAhrBMhMQBMhMBsAAQBrAABMBMQBMBMAABrQAABshMBMQhMBMhrAAQhsAAhMhMg");
	var mask_graphics_1 = new cjs.Graphics().p("EAHHAg4QhMhMAAhsQAAhrBMhMQBMhNBsAAQBrAABMBNQBMBMAABrQAABshMBMQhMBMhrAAQhsAAhMhMg");
	var mask_graphics_2 = new cjs.Graphics().p("EAHDAg5QhNhNAAhtQAAhtBNhNQBNhNBtAAQBtAABNBNQBNBNAABtQAABthNBNQhNBNhtAAQhtAAhNhNg");
	var mask_graphics_3 = new cjs.Graphics().p("EAGzAg8QhRhQAAhzQAAhyBRhRQBRhQByAAQByAABRBQQBRBRAAByQAABzhRBQQhRBRhyAAQhyAAhRhRg");
	var mask_graphics_4 = new cjs.Graphics().p("EAGIAhGQhbhbAAiAQAAiBBbhbQBbhbCAAAQCBAABbBbQBbBbAACBQAACAhbBbQhbBciBAAQiAAAhbhcg");
	var mask_graphics_5 = new cjs.Graphics().p("EAEsAhcQhxhxAAifQAAigBxhwQBwhxCgAAQCfAABxBxQBwBwAACgQAACfhwBxQhxBwifAAQigAAhwhwg");
	var mask_graphics_6 = new cjs.Graphics().p("EACFAiCQiXiYAAjXQAAjXCXiYQCYiYDXAAQDXAACYCYQCYCYAADXQAADXiYCYQiYCYjXAAQjXAAiYiYg");
	var mask_graphics_7 = new cjs.Graphics().p("EgAhAipQjAi/AAkPQAAkPDAi/QC+i/EPAAQEOAADAC/QC/C/AAEPQAAEPi/C/QjAC/kOAAQkPAAi+i/g");
	var mask_graphics_8 = new cjs.Graphics().p("EgB9Ai+QjVjVAAktQAAktDVjVQDUjVEtAAQEtAADVDVQDVDVAAEtQAAEtjVDVQjVDVktAAQktAAjUjVg");
	var mask_graphics_9 = new cjs.Graphics().p("EgCpAjIQjfjfAAk8QAAk7DfjgQDejfE8AAQE8AADfDfQDfDgAAE7QAAE8jfDfQjfDgk8AAQk8AAjejgg");
	var mask_graphics_10 = new cjs.Graphics().p("EgC5AjMQjjjjAAlBQAAlBDjjjQDijjFBAAQFBAADjDjQDkDjAAFBQAAFBjkDjQjjDjlBAAQlBAAjijjg");
	var mask_graphics_11 = new cjs.Graphics().p("EgC9AjNQjkjkAAlCQAAlDDkjkQDjjkFDAAQFCAADkDkQDkDkAAFDQAAFCjkDkQjkDklCAAQlDAAjjjkg");
	var mask_graphics_12 = new cjs.Graphics().p("EgC9AjNQjkjkAAlDQAAlCDkjkQDjjkFCAAQFDAADkDkQDkDkAAFCQAAFDjkDkQjkDklDAAQlCAAjjjkg");
	var mask_graphics_13 = new cjs.Graphics().p("EgC9AjNQjkjkAAlCQAAlDDkjkQDjjkFDAAQFCAADkDkQDkDkAAFDQAAFCjkDkQjkDklCAAQlDAAjjjkg");
	var mask_graphics_14 = new cjs.Graphics().p("EgC5AjMQjjjjAAlBQAAlBDjjjQDijkFBABQFBgBDjDkQDkDjAAFBQAAFBjkDjQjjDjlBAAQlBAAjijjg");
	var mask_graphics_15 = new cjs.Graphics().p("EgCpAjIQjfjfAAk8QAAk8DfjfQDejfE8AAQE8AADfDfQDfDfAAE8QAAE8jfDfQjfDfk8AAQk8AAjejfg");
	var mask_graphics_16 = new cjs.Graphics().p("EgB9Ai+QjVjVAAkuQAAktDVjVQDUjVEtAAQEtAADVDVQDVDVAAEtQAAEujVDVQjVDVktAAQktAAjUjVg");
	var mask_graphics_17 = new cjs.Graphics().p("EgAhAinQjAi/AAkPQAAkODAjAQC+i/EPAAQEOAADAC/QC/DAAAEOQAAEPi/C/QjADAkOAAQkPAAi+jAg");
	var mask_graphics_18 = new cjs.Graphics().p("EACFAh/QiXiYAAjXQAAjXCXiYQCYiYDXAAQDXAACYCYQCYCYAADXQAADXiYCYQiYCYjXAAQjXAAiYiYg");
	var mask_graphics_19 = new cjs.Graphics().p("EAEsAhWQhxhxAAifQAAifBxhxQBwhxCgAAQCfAABxBxQBwBxAACfQAACfhwBxQhxBxifAAQigAAhwhxg");
	var mask_graphics_20 = new cjs.Graphics().p("EAGIAhAQhbhbAAiBQAAiBBbhbQBbhbCAAAQCBAABbBbQBbBbAACBQAACBhbBbQhbBbiBAAQiAAAhbhbg");
	var mask_graphics_21 = new cjs.Graphics().p("EAGzAg1QhRhRAAhyQAAhyBRhRQBRhRByAAQByAABRBRQBRBRAAByQAAByhRBRQhRBRhyAAQhyAAhRhRg");
	var mask_graphics_22 = new cjs.Graphics().p("EAHDAgxQhNhNAAhtQAAhsBNhNQBNhNBtAAQBtAABNBNQBNBNAABsQAABthNBNQhNBNhtAAQhtAAhNhNg");
	var mask_graphics_23 = new cjs.Graphics().p("EAHHAgwQhMhMAAhrQAAhsBMhMQBMhMBsAAQBrAABMBMQBMBMAABsQAABrhMBMQhMBMhrAAQhsAAhMhMg");
	var mask_graphics_24 = new cjs.Graphics().p("EAHHAgwQhMhMAAhrQAAhsBMhMQBMhMBsAAQBrAABMBMQBMBMAABsQAABrhMBMQhMBMhrAAQhsAAhMhMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:89.825,y:217.975}).wait(1).to({graphics:mask_graphics_1,x:89.8343,y:217.9866}).wait(1).to({graphics:mask_graphics_2,x:89.9736,y:218.161}).wait(1).to({graphics:mask_graphics_3,x:90.5773,y:218.9164}).wait(1).to({graphics:mask_graphics_4,x:92.2028,y:220.9503}).wait(1).to({graphics:mask_graphics_5,x:95.6301,y:225.2389}).wait(1).to({graphics:mask_graphics_6,x:101.8625,y:233.0375}).wait(1).to({graphics:mask_graphics_7,x:108.0949,y:240.8361}).wait(1).to({graphics:mask_graphics_8,x:111.5222,y:245.1247}).wait(1).to({graphics:mask_graphics_9,x:113.1477,y:247.1586}).wait(1).to({graphics:mask_graphics_10,x:113.7514,y:247.914}).wait(1).to({graphics:mask_graphics_11,x:113.8907,y:248.0884}).wait(1).to({graphics:mask_graphics_12,x:113.9,y:248.1}).wait(1).to({graphics:mask_graphics_13,x:113.8907,y:248.0881}).wait(1).to({graphics:mask_graphics_14,x:113.7514,y:247.9094}).wait(1).to({graphics:mask_graphics_15,x:113.1477,y:247.1352}).wait(1).to({graphics:mask_graphics_16,x:111.5222,y:245.0506}).wait(1).to({graphics:mask_graphics_17,x:108.0949,y:240.6552}).wait(1).to({graphics:mask_graphics_18,x:101.8625,y:232.6625}).wait(1).to({graphics:mask_graphics_19,x:95.6301,y:224.6698}).wait(1).to({graphics:mask_graphics_20,x:92.2028,y:220.2744}).wait(1).to({graphics:mask_graphics_21,x:90.5773,y:218.1898}).wait(1).to({graphics:mask_graphics_22,x:89.9736,y:217.4156}).wait(1).to({graphics:mask_graphics_23,x:89.8343,y:217.2369}).wait(1).to({graphics:mask_graphics_24,x:89.825,y:217.225}).wait(1));

	// cta_over
	this.instance = new lib.cta_over();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},12).wait(1).to({_off:false},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,175,300,250);


(lib.Scene_1_img3_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img3_png
	this.grill = new lib.img3_1();
	this.grill.name = "grill";
	this.grill.parent = this;
	this.grill.setTransform(-150,125,1,1,0,0,0,150,300);
	this.grill._off = true;

	this.timeline.addTween(cjs.Tween.get(this.grill).wait(108).to({_off:false},0).to({x:157.5},8,cjs.Ease.cubicOut).to({x:150},7,cjs.Ease.cubicInOut).wait(12).to({regY:299.9,scaleX:1.2,scaleY:1.2,y:124.9},12,cjs.Ease.quartInOut).to({regY:300,scaleX:1,scaleY:1,y:125},15,cjs.Ease.quartInOut).wait(1).to({regX:150.2,scaleX:0.4,scaleY:0.4,x:152.1,y:92.55},35,cjs.Ease.quartInOut).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_img2_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img2_png
	this.instance = new lib.img2_1();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,125,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({x:157.5},8,cjs.Ease.cubicOut).wait(1).to({x:157.25},0).wait(1).to({x:156.6},0).wait(1).to({x:154.95},0).wait(1).to({x:152.25},0).wait(1).to({x:150.7},0).wait(1).to({x:150.1},0).wait(1).to({x:150},0).wait(12).to({regY:299.9,scaleX:1.2,scaleY:1.2,y:124.9},11,cjs.Ease.quartInOut).to({regY:300,scaleX:1,scaleY:1,y:125},14,cjs.Ease.quartInOut).wait(3).to({x:453.75},8,cjs.Ease.cubicOut).to({_off:true},1).wait(157));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.cta_btn = new lib.cta_container();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.parent = this;
	this.cta_btn.setTransform(150,235,1,1,0,0,0,150,300);
	this.cta_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(1).to({_off:false},0).wait(164).to({y:234.95},0).wait(1).to({y:234.8},0).wait(1).to({y:234.5},0).wait(1).to({y:234},0).wait(1).to({y:233.35},0).wait(1).to({y:232.5},0).wait(1).to({y:231.45},0).wait(1).to({y:230.05},0).wait(1).to({y:228.3},0).wait(1).to({y:226.05},0).wait(1).to({y:223.25},0).wait(1).to({y:219.65},0).wait(1).to({y:214.85},0).wait(1).to({y:208.25},0).wait(1).to({y:198.7},0).wait(1).to({y:184.8},0).wait(1).to({y:169.45},0).wait(1).to({y:158.1},0).wait(1).to({y:150.25},0).wait(1).to({y:144.65},0).wait(1).to({y:140.35},0).wait(1).to({y:137.05},0).wait(1).to({y:134.4},0).wait(1).to({y:132.3},0).wait(1).to({y:130.55},0).wait(1).to({y:129.15},0).wait(1).to({y:128.05},0).wait(1).to({y:127.15},0).wait(1).to({y:126.45},0).wait(1).to({y:125.9},0).wait(1).to({y:125.5},0).wait(1).to({y:125.2},0).wait(1).to({y:125.05},0).wait(1).to({y:125},0).wait(43).to({scaleX:1.05,scaleY:1.05,y:123},6,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,y:125},6,cjs.Ease.cubicInOut).wait(21));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Fleet_farm_banners = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_1 = function() {
		this.cta_btn = this.CTA.cta_btn;
	}
	this.frame_4 = function() {
		canvas.addEventListener('mouseover', over.bind(this));
		canvas.addEventListener('mouseout', out.bind(this));
		
		function over() {
			this.cta_btn.gotoAndPlay('over');
		
		}
		
		function out() {
			this.cta_btn.gotoAndPlay('out');
		
		}
	}
	this.frame_108 = function() {
		this.grill = this.img3_png.grill;
	}
	this.frame_116 = function() {
		this.grill = undefined;this.grill = this.img3_png.grill;
	}
	this.frame_123 = function() {
		this.grill = undefined;this.grill = this.img3_png.grill;
	}
	this.frame_135 = function() {
		this.grill = undefined;this.grill = this.img3_png.grill;
	}
	this.frame_147 = function() {
		this.grill = undefined;this.grill = this.img3_png.grill;
	}
	this.frame_162 = function() {
		this.grill = undefined;this.grill = this.img3_png.grill;
	}
	this.frame_163 = function() {
		this.grill = undefined;this.grill = this.img3_png.grill;
	}
	this.frame_164 = function() {
		this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
	}
	this.frame_183 = function() {
		this.grill.play();
	}
	this.frame_198 = function() {
		this.grill = undefined;this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
		this.grill = this.img3_png.grill;
	}
	this.frame_199 = function() {
		this.grill = undefined;
	}
	this.frame_241 = function() {
		this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
	}
	this.frame_247 = function() {
		this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
	}
	this.frame_253 = function() {
		this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
		this.stop();
	}
	this.frame_273 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(104).call(this.frame_108).wait(8).call(this.frame_116).wait(7).call(this.frame_123).wait(12).call(this.frame_135).wait(12).call(this.frame_147).wait(15).call(this.frame_162).wait(1).call(this.frame_163).wait(1).call(this.frame_164).wait(19).call(this.frame_183).wait(15).call(this.frame_198).wait(1).call(this.frame_199).wait(42).call(this.frame_241).wait(6).call(this.frame_247).wait(6).call(this.frame_253).wait(20).call(this.frame_273).wait(1));

	// logo_png_obj_
	this.logo_png = new lib.Scene_1_logo_png();
	this.logo_png.name = "logo_png";
	this.logo_png.parent = this;
	this.logo_png.depth = 0;
	this.logo_png.isAttachedToCamera = 0
	this.logo_png.isAttachedToMask = 0
	this.logo_png.layerDepth = 0
	this.logo_png.layerIndex = 0
	this.logo_png.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo_png).wait(274));

	// CTA_obj_
	this.CTA = new lib.Scene_1_CTA();
	this.CTA.name = "CTA";
	this.CTA.parent = this;
	this.CTA.depth = 0;
	this.CTA.isAttachedToCamera = 0
	this.CTA.isAttachedToMask = 0
	this.CTA.layerDepth = 0
	this.CTA.layerIndex = 1
	this.CTA.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(165).to({regX:150,regY:175.9,x:150,y:175.9},0).wait(33).to({regX:0,regY:0,x:0,y:0},0).wait(76));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_122 = new cjs.Graphics().p("AmQCLIAAkVIMhAAIAAEVg");
	var mask_graphics_126 = new cjs.Graphics().p("A0ECJIAAkRMAoJAAAIAAERg");
	var mask_graphics_130 = new cjs.Graphics().p("A0ED3IAAllIJdAAIAACJIAADcgAqnAbIAAiJIpdAAIAAiIMAoJAAAIAAERg");
	var mask_graphics_134 = new cjs.Graphics().p("A0ED1IAAmHITuAAIAACvIAADYgAgWAdIAAivIzuAAIAAhiMAoJAAAIAAERg");
	var mask_graphics_192 = new cjs.Graphics().p("A05D5IAAnxIbEAAIAAEkIDCAAIAADNgAJNAsIjCAAIAAkkIOvAAIAAEkgAJNAsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(122).to({graphics:mask_graphics_122,x:54.95,y:20.375}).wait(4).to({graphics:mask_graphics_126,x:147.875,y:20.575}).wait(4).to({graphics:mask_graphics_130,x:147.875,y:31.6}).wait(4).to({graphics:mask_graphics_134,x:147.875,y:31.4}).wait(58).to({graphics:mask_graphics_192,x:144.075,y:30.65}).wait(5).to({graphics:null,x:0,y:0}).wait(77));

	// txt3_png_obj_
	this.txt3_png = new lib.Scene_1_txt3_png();
	this.txt3_png.name = "txt3_png";
	this.txt3_png.parent = this;
	this.txt3_png.depth = 0;
	this.txt3_png.isAttachedToCamera = 0
	this.txt3_png.isAttachedToMask = 0
	this.txt3_png.layerDepth = 0
	this.txt3_png.layerIndex = 2
	this.txt3_png.maskLayerName = 0

	var maskedShapeInstanceList = [this.txt3_png];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.txt3_png).wait(274));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_68 = new cjs.Graphics().p("AuTDzIAAnlIcnAAIAAHlg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A0oE9IAAp5IesAAIAABbIAADgIAAE+gAKEgBIAAjgIKlAAIAADggAKEgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(68).to({graphics:mask_1_graphics_68,x:115.95,y:34.225}).wait(4).to({graphics:mask_1_graphics_72,x:145.025,y:32.525}).wait(4).to({graphics:null,x:0,y:0}).wait(198));

	// txt2_png_obj_
	this.txt2_png = new lib.Scene_1_txt2_png();
	this.txt2_png.name = "txt2_png";
	this.txt2_png.parent = this;
	this.txt2_png.depth = 0;
	this.txt2_png.isAttachedToCamera = 0
	this.txt2_png.isAttachedToMask = 0
	this.txt2_png.layerDepth = 0
	this.txt2_png.layerIndex = 3
	this.txt2_png.maskLayerName = 0

	var maskedShapeInstanceList = [this.txt2_png];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.txt2_png).wait(274));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_15 = new cjs.Graphics().p("A1ZFxIAArgMAqzAAAIAALgg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A0KkLMAoVAAHIgjEGIrKgLIgMDzI8UAig");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_2_graphics_15,x:71.325,y:31.25}).wait(3).to({graphics:mask_2_graphics_18,x:154.925,y:35.9}).wait(3).to({graphics:null,x:0,y:0}).wait(253));

	// txt1_png_obj_
	this.txt1_png = new lib.Scene_1_txt1_png();
	this.txt1_png.name = "txt1_png";
	this.txt1_png.parent = this;
	this.txt1_png.depth = 0;
	this.txt1_png.isAttachedToCamera = 0
	this.txt1_png.isAttachedToMask = 0
	this.txt1_png.layerDepth = 0
	this.txt1_png.layerIndex = 4
	this.txt1_png.maskLayerName = 0

	var maskedShapeInstanceList = [this.txt1_png];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.txt1_png).wait(274));

	// img3_png_obj_
	this.img3_png = new lib.Scene_1_img3_png();
	this.img3_png.name = "img3_png";
	this.img3_png.parent = this;
	this.img3_png.depth = 0;
	this.img3_png.isAttachedToCamera = 0
	this.img3_png.isAttachedToMask = 0
	this.img3_png.layerDepth = 0
	this.img3_png.layerIndex = 5
	this.img3_png.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.img3_png).wait(199).to({_off:true},40).wait(35));

	// products2_obj_
	this.products2 = new lib.Scene_1_products2();
	this.products2.name = "products2";
	this.products2.parent = this;
	this.products2.depth = 0;
	this.products2.isAttachedToCamera = 0
	this.products2.isAttachedToMask = 0
	this.products2.layerDepth = 0
	this.products2.layerIndex = 6
	this.products2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.products2).wait(164).to({regX:146.1,regY:204.7,x:146.1,y:204.7},0).wait(34).to({regX:0,regY:0,x:0,y:0},0).wait(76));

	// img2_png_obj_
	this.img2_png = new lib.Scene_1_img2_png();
	this.img2_png.name = "img2_png";
	this.img2_png.parent = this;
	this.img2_png.depth = 0;
	this.img2_png.isAttachedToCamera = 0
	this.img2_png.isAttachedToMask = 0
	this.img2_png.layerDepth = 0
	this.img2_png.layerIndex = 7
	this.img2_png.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.img2_png).wait(62).to({regX:185.6,regY:125,x:185.6,y:125},0).wait(6).to({regX:0,regY:0,x:0,y:0},0).wait(206));

	// img1_png_obj_
	this.img1_png = new lib.Scene_1_img1_png();
	this.img1_png.name = "img1_png";
	this.img1_png.parent = this;
	this.img1_png.depth = 0;
	this.img1_png.isAttachedToCamera = 0
	this.img1_png.isAttachedToMask = 0
	this.img1_png.layerDepth = 0
	this.img1_png.layerIndex = 8
	this.img1_png.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.img1_png).wait(54).to({regX:212.2,regY:125,x:212.2,y:125},0).wait(7).to({regX:0,regY:0,x:0,y:0},0).wait(213));

	// BG_png_obj_
	this.BG_png = new lib.Scene_1_BG_png();
	this.BG_png.name = "BG_png";
	this.BG_png.parent = this;
	this.BG_png.depth = 0;
	this.BG_png.isAttachedToCamera = 0
	this.BG_png.isAttachedToMask = 0
	this.BG_png.layerDepth = 0
	this.BG_png.layerIndex = 9
	this.BG_png.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BG_png).wait(274));

	// TButton_obj_
	this.TButton = new lib.Scene_1_TButton();
	this.TButton.name = "TButton";
	this.TButton.parent = this;
	this.TButton.depth = 0;
	this.TButton.isAttachedToCamera = 0
	this.TButton.isAttachedToMask = 0
	this.TButton.layerDepth = 0
	this.TButton.layerIndex = 10
	this.TButton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.TButton).wait(274));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,0,764,517.2);
// library properties:
lib.properties = {
	id: 'FA11C4459EDC5548A12965C360D126A2',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG.png?1571855385014", id:"BG"},
		{src:"images/CTA1.png?1571855385014", id:"CTA1"},
		{src:"images/CTA2.png?1571855385014", id:"CTA2"},
		{src:"images/img1.png?1571855385014", id:"img1"},
		{src:"images/img2.png?1571855385014", id:"img2"},
		{src:"images/img3.png?1571855385014", id:"img3"},
		{src:"images/logo.png?1571855385014", id:"logo"},
		{src:"images/products2.png?1571855385014", id:"products2"},
		{src:"images/txt1.png?1571855385014", id:"txt1"},
		{src:"images/txt2.png?1571855385014", id:"txt2"},
		{src:"images/txt3.png?1571855385014", id:"txt3"}
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
an.compositions['FA11C4459EDC5548A12965C360D126A2'] = {
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;