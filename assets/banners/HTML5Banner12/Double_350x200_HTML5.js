(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._300x250blackborder = function() {
	this.spriteSheet = ss["Double_350x200_HTML5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250_CA_spurce = function() {
	this.spriteSheet = ss["Double_350x200_HTML5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.frame1 = function() {
	this.spriteSheet = ss["Double_350x200_HTML5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.TXTAllYourCashBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#287881").s().p("AATBAIgdgvIgLAKIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape.setTransform(155.4,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#287881").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_1.setTransform(146.1,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#287881").s().p("AghApQgJgIABgLQAAgHADgGQACgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_2.setTransform(136.3,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#287881").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_3.setTransform(126.6,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#287881").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_4.setTransform(111.4,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#287881").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_5.setTransform(101.8,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#287881").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_6.setTransform(92.3,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#287881").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_7.setTransform(83.1,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#287881").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_8.setTransform(71.1,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#287881").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_9.setTransform(62.3,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#287881").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(52.3,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#287881").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_11.setTransform(42.9,15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#287881").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_12.setTransform(29.3,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#287881").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_13.setTransform(19.3,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#287881").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgYIgPAjIAqAAIgNgiIgHgbQgDANgEANg");
	this.shape_14.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.6,24.1);


(lib.TXTSeeTerms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23434E").s().p("AgNAWQgFgDgCgJIAJgBQAAAFAEADQADACAEAAQAGAAADgCQADgCAAgEQAAgDgDgBIgJgEIgLgDQgEgBgCgDQgBgDAAgEQgBgDACgDQABgDAEgCIAFgCIAHgBQAEgBAFACQAFACACADQADADAAAFIgJABQAAgEgDgCQgDgCgEAAQgFAAgDACQgCABAAADIABAEIADACIAGACIAOAEQADAAACACQACAEAAAEQAAAFgDAEQgCADgFADQgEACgHAAQgIAAgFgFg");
	this.shape.setTransform(51,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23434E").s().p("AAaAaIAAgeIgBgIQgBgCgCgCQgCgBgDgBQgGAAgDAFQgEADAAAIIAAAcIgHAAIAAggQAAgFgCgEQgCgDgFAAQgEAAgDACQgDACgBAEQgCAEAAAGIAAAaIgJAAIAAgyIAIAAIAAAHQADgDAEgCQAEgDAFAAQAGAAADADQACACACAEQAGgJAKAAQAHAAAEAFQAFAEAAAIIAAAig");
	this.shape_1.setTransform(44.3,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23434E").s().p("AgNAaIAAgyIAIAAIAAAIQADgFACgDQABgBADAAQAFAAAEADIgCAIQgDgCgEAAQgDAAgBACQgCACgBACIgBAKIAAAag");
	this.shape_2.setTransform(38.9,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23434E").s().p("AgPATQgIgHAAgMQAAgLAIgHQAGgIAJABQALgBAGAIQAHAGgBAMIAAACIglAAQABAJAFAEQAEAEAFAAQAFAAADgCQADgCACgGIAJABQgCAIgGAEQgFAFgJAAQgKAAgGgIgAgIgOQgEAEgBAGIAbAAQAAgGgDgDQgFgGgGABQgEgBgEAFg");
	this.shape_3.setTransform(34,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#23434E").s().p("AgDAjIAAg9IgYAAIAAgIIA3AAIAAAIIgYAAIAAA9g");
	this.shape_4.setTransform(29.3,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23434E").s().p("AgPATQgIgHAAgMQAAgLAIgHQAGgIAJABQALgBAGAIQAHAGgBAMIAAACIgkAAQAAAJAFAEQAEAEAFAAQAEAAAEgCQADgCACgGIAJABQgCAIgGAEQgGAFgIAAQgKAAgGgIgAgIgOQgEAEgBAGIAbAAQAAgGgDgDQgEgGgHABQgEgBgEAFg");
	this.shape_5.setTransform(20.9,8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#23434E").s().p("AgQATQgGgHgBgMQABgLAGgHQAHgIAJABQAKgBAHAIQAHAGAAAMIAAACIgmAAQABAJAFAEQAEAEAEAAQAFAAADgCQAEgCACgGIAJABQgCAIgGAEQgFAFgKAAQgJAAgHgIgAgIgOQgEAEgBAGIAbAAQgBgGgCgDQgFgGgGABQgEgBgEAFg");
	this.shape_6.setTransform(15.3,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#23434E").s().p("AgMAiQgIgDgDgFQgEgGAAgIIAJAAQABAFACADQACAEAFACQAFACAEAAQAFAAAEgBQAFgCACgDQACgDAAgDQAAgDgCgDQgCgDgFgBIgKgDIgOgDQgFgCgCgEQgEgFAAgEQAAgGAEgEQADgFAGgDQAGgCAGAAQAHAAAGADQAGACAEAFQADAFAAAGIgKABQAAgHgEgDQgEgEgIAAQgHAAgEADQgEAEAAAEQAAADADADQACADAKACIAQAFQAGAAADAFQADAEAAAGQAAAGgEAFQgDAFgFADQgHACgIABQgHgBgGgCg");
	this.shape_7.setTransform(9.2,7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#23434E").s().p("AAAAEIgFALIgGgEIAIgJIgMgCIADgGIALAFIgBgNIAFAAIgBANIALgFIADAGIgNACIAJAJIgGAEIgGgLg");
	this.shape_8.setTransform(3.9,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.7,15.2);


(lib.TXTEarn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E9FA4").s().p("AA9CEIAAicQAAgbgFgNQgFgNgNgIQgNgIgSAAQgaAAgUASQgVARAAAzIAACLIgsAAIAAkBIAoAAIAAAlQAcgrA0AAQAYAAATAJQAUAIAKANQAKAOADATQADAMAAAfIAACdg");
	this.shape.setTransform(93.6,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E9FA4").s().p("AhFCEIAAkBIAoAAIAAAnQAPgbANgJQALgJAPAAQAWAAAXAOIgQApQgPgKgQAAQgPAAgJAJQgMAIgFAQQgHAXAAAcIAACGg");
	this.shape_1.setTransform(73.5,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E9FA4").s().p("AhfByQgXgVAAggQAAgUAJgPQAIgQAPgKQANgHASgFQANgDAagDQAzgHAZgJIAAgLQAAgbgLgLQgSgPgfAAQgfAAgPALQgPALgGAcIgsgGQAHgcANgRQAOgRAZgJQAZgJAfAAQAiAAAUAIQAWAHAJAMQAKAMADASQADAMAAAdIAAA4QAAA9ADARQADAQAIAPIguAAQgHgNgCgTQgZAVgVAIQgWAJgaAAQgqAAgXgVgAgKAQQgbAEgLAFQgLAEgGAJQgGAKAAAMQAAARAOAMQANALAZAAQAYAAATgLQAUgLAKgTQAGgPAAgdIAAgPQgXAIgvAIg");
	this.shape_2.setTransform(49.1,34.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E9FA4").s().p("AiECzIAAllIEBAAIAAArIjRAAIAABtIDEAAIAAApIjEAAIAAB5IDZAAIAAArg");
	this.shape_3.setTransform(19.3,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.8,59.9);


(lib.TXTDouble2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E6267").s().p("AhVBkQghgjAAg/QAAhAAhgkQAigkA0AAQA0AAAhAjQAhAjAABAIgBALIi/AAQADAqAVAXQAWAWAeABQAZAAARgNQARgMAKgcIAuAFQgLAogeAWQgcAWguAAQg2AAgigjgAgwhNQgUATgCAjICPAAQgDghgOgRQgVgZgiAAQgcAAgVAVg");
	this.shape.setTransform(68.7,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E6267").s().p("AgUCyIAAljIAqAAIAAFjg");
	this.shape_1.setTransform(49.2,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E6267").s().p("AhGCPIAAAgIgpAAIAAljIAsAAIAACAQAcgkApAAQAYAAAWAKQAVAJAOASQANARAJAZQAHAXAAAcQAABDghAkQghAkguAAQgsAAgagmgAgxgaQgWAZAAAtQAAAvANAUQAVAiAjAAQAbAAAVgZQAVgZAAgxQAAgxgUgYQgUgZgbAAQgdAAgUAag");
	this.shape_2.setTransform(30.5,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E6267").s().p("Ag6B7QgTgIgKgOQgKgNgEgTQgDgNABgcIAAifIAsAAIAACOQgBAiADAMQAEARANALQAOAJAUAAQASAAARgKQASgKAHgRQAGgSAAghIAAiJIAsAAIAAEBIgmAAIAAgmQgfAsgyAAQgXAAgUgJg");
	this.shape_3.setTransform(1.9,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E6267").s().p("AhWBkQgigjAAhBQAAhHAogiQAigdAuAAQA1AAAiAjQAiAjAAA9QAAAxgPAdQgPAcgcAQQgeAQghAAQg1AAghgjgAg1hJQgVAZgBAwQABAxAVAZQAVAZAgAAQAhAAAVgZQAWgZAAgxQAAgwgWgZQgWgZggAAQggAAgVAZg");
	this.shape_4.setTransform(-25.8,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E6267").s().p("AiTCyIAAljIB8AAQAnAAAXAEQAfAIAVASQAcAYAOAmQAOAlAAAvQAAAogJAfQgJAfgQAVQgPAUgRANQgSALgYAHQgaAFgfAAgAhjCJIBNAAQAhAAAUgIQAUgGAMgMQARgQAKgdQAIgdABgmQAAg4gSgeQgTgfgagKQgUgHgoAAIhLAAg");
	this.shape_5.setTransform(-57.1,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-32,162.6,59.9);


(lib.TXTDouble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVBkQghgjAAhAQAAg/AhgkQAigkA0AAQA0AAAhAjQAhAkAAA/IAAAKIjAAAQACAsAWAWQAWAXAegBQAZAAARgMQARgNAKgcIAuAGQgMAogdAWQgdAWgtAAQg2AAgigjgAgwhOQgUAVgCAhICPAAQgDgggOgQQgVgaghAAQgdAAgVAUg");
	this.shape.setTransform(146.4,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUCzIAAllIApAAIAAFlg");
	this.shape_1.setTransform(126.9,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGCPIAAAhIgpAAIAAllIAsAAIAACAQAcgiApAAQAYgBAWAKQAVAKAOARQANARAJAZQAHAXAAAcQAABCghAlQghAlguAAQgsAAgagngAgxgbQgWAZAAAuQAAAuANAWQAVAhAkAAQAaAAAVgYQAVgaAAgxQAAgxgUgZQgUgYgbABQgdgBgUAZg");
	this.shape_2.setTransform(108.2,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5B7QgVgIgJgOQgKgNgEgTQgDgNABgcIAAifIAsAAIAACOQAAAiACAMQAFARANALQANAJAUAAQASAAARgKQASgKAGgRQAIgSgBghIAAiJIAsAAIAAEBIgmAAIAAgmQgfAsgyAAQgXAAgTgJg");
	this.shape_3.setTransform(79.6,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhWBkQgigjAAhBQAAhGAogkQAigcAuAAQA1AAAiAjQAiAjAAA+QAAAvgPAdQgPAdgcAQQgdAQgiAAQg1AAghgjgAg1hJQgVAYgBAxQABAxAVAZQAVAZAggBQAhABAVgZQAWgZAAgxQAAgwgWgZQgWgZggAAQggAAgVAZg");
	this.shape_4.setTransform(51.9,34.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiTCzIAAllIB8AAQAnAAAXAGQAfAHAVATQAcAXAOAlQAOAlABAxQAAAngKAfQgJAggQAUQgPAUgRAMQgSANgYAFQgaAHgfAAgAhjCIIBNAAQAhAAAUgGQAUgHAMgMQARgQAJgdQAJgdAAgmQABg5gTgeQgSgdgbgLQgTgHgoAAIhLAAg");
	this.shape_5.setTransform(20.7,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.6,59.9);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#287881").s().p("AAAAFIgGAMIgHgFIAJgKIgNgCIACgIIANAGIgBgOIAGAAIgBAOIAOgGIADAIIgPACIAKAKIgHAFIgHgMg");
	this.shape.setTransform(113.7,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#287881").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_1.setTransform(109.1,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#287881").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_2.setTransform(100.4,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#287881").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_3.setTransform(90.4,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#287881").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_4.setTransform(81,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#287881").s().p("AgBA8QgFgCgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_5.setTransform(69,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#287881").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(61.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#287881").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_7.setTransform(55.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#287881").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_8.setTransform(49.4,-0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#287881").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgJACgEQACgGAGgEQADgEALAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_9.setTransform(45.3,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#287881").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_10.setTransform(35.1,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#287881").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_11.setTransform(26.3,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#287881").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_12.setTransform(16.4,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#287881").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_13.setTransform(7,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#287881").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgJACgEQACgGAGgEQADgEALAAIAPABIgCAPIgKgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_14.setTransform(-4.7,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#287881").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_15.setTransform(-12.6,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#287881").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgOAFgJQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAGIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAATAHAIQAIAJAIAAQAKAAAIgJQAGgIAAgRQAAgSgGgJQgIgIgLgBQgJABgGAIg");
	this.shape_16.setTransform(-27.9,-0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#287881").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_17.setTransform(-37.6,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#287881").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_18.setTransform(-47.6,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#287881").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_19.setTransform(-62.6,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#287881").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPAAQALAAAHAEQAIAFADAHQAEAHAAAMIAAA7g");
	this.shape_20.setTransform(-72.6,-0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#287881").s().p("AgBA8QgFgCgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_21.setTransform(-80,-0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#287881").s().p("AgBA8QgFgCgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_22.setTransform(-90,-0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#287881").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_23.setTransform(-97.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-12.8,222.8,24.1);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300x250_CA_spurce();
	this.instance.setTransform(-102.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-41.5,205,83);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300x250_CA_spurce();
	this.instance.setTransform(-102.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-41.5,205,83);


(lib.PICCore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgTTnMAAAgnNIAmAAMAAAAnNg");
	this.shape.setTransform(2,125.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,251);


(lib.PICBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E6E7E9","#000000","#000000"],[0.729,1,1,1],0,-125.5,0,125.5).s().p("A3bTnMAAAgnNMAu2AAAMAAAAnNg");
	this.shape.setTransform(150,125.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,251);


(lib.BTNArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BTNCTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAnIgMgtIgDgNIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgRIAMgrIAMAAIALArIAEAPIAFgPIANgrIANAAIgYBMg");
	this.shape.setTransform(79.5,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_1.setTransform(70,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_2.setTransform(60.3,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbA1IgCgNIAIACQAFAAACgCQACgBACgDIAFgKIABgDIgehMIAOAAIARAtIADAQQACgIAEgIIAQgtIANAAIgdBNQgFANgBAFQgEAGgEADQgFADgGAAIgIgBg");
	this.shape_3.setTransform(47.1,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_4.setTransform(41.6,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_5.setTransform(36,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_6.setTransform(27.6,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_7.setTransform(18.3,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("ArtCGQggAAgLgWQgFgMABgMIgBi3QAAgKAFgJQAJgTAXAAIXvAAQAZAAAKAUQAEAJAAAKIAADMQgIAYgiAAg");
	this.shape_8.setTransform(47.3,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CD4E18").s().p("ArtCGQggAAgLgWQgFgMABgMIgBi3QAAgKAFgJQAJgTAXAAIXvAAQAZAAAKAUQAEAJAAAKIAADMQgIAYgiAAg");
	this.shape_9.setTransform(47.3,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CD4E18").s().p("ArtCGQggAAgLgXQgFgLABgMIgBi3QAAgKAFgJQAJgTAXAAIXvAAQAZAAAKAUQAEAJAAAKIgBDMQgIAYghAAg");
	this.shape_10.setTransform(47.4,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,0,159.9,29.7);


(lib.BGGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E9FA4").s().p("A3bTnMAAAgnNMAu2AAAMAAAAnNg");
	this.shape.setTransform(150,125.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,251);


// stage content:
(lib.Double_350x200_HTML5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_160 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(160).call(this.frame_160).wait(1));

	// Outline
	this.instance = new lib._300x250blackborder();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161));

	// BTN - See This & More
	this.instance_1 = new lib._300x250blackborder();

	this.instance_2 = new lib.BTNCTA();
	this.instance_2.setTransform(154.1,129.6,1,1,0,0,0,51.4,13.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},138).to({state:[{t:this.instance_2}]},7).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(138).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(16));

	// BTN Area
	this.instance_3 = new lib.BTNArea();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.BTNArea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161));

	// TXT - See Terms
	this.instance_4 = new lib.TXTSeeTerms();
	this.instance_4.setTransform(148.9,154.7,1,1,0,0,0,25.9,8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(138).to({_off:false},0).to({alpha:1},7).wait(16));

	// TXT At the end of your First Year
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(-110,105.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(132).to({_off:false},0).to({x:150},13,cjs.Ease.get(1)).wait(16));

	// PIC CA Spurce
	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.setTransform(150,296.4);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween3("synched",0);
	this.instance_7.setTransform(150,212.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},110).to({state:[{t:this.instance_7}]},7).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110).to({_off:false},0).to({_off:true,y:212.4},7,cjs.Ease.get(1)).wait(44));

	// TXT All Your Cash Back
	this.instance_8 = new lib.TXTAllYourCashBack();
	this.instance_8.setTransform(-88.6,85.8,1,1,0,0,0,71.4,12.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(94).to({_off:false},0).to({x:120.7},16,cjs.Ease.get(1)).wait(22).to({x:150.7},13).wait(16));

	// TXT Double 2
	this.instance_9 = new lib.TXTDouble2("synched",0);
	this.instance_9.setTransform(204,59,0.026,1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({_off:false},0).to({scaleX:1,x:122},13,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).to({x:150},13,cjs.Ease.get(1)).wait(16));

	// TXT - Earn
	this.instance_10 = new lib.TXTEarn();
	this.instance_10.setTransform(64.2,58.4,1,1,0,0,0,49.2,32);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({x:244.2,alpha:1},13,cjs.Ease.get(1)).to({x:144.2},12,cjs.Ease.get(1)).wait(19).to({regX:98.4,regY:33,scaleX:0.02,x:206,y:59.4},13,cjs.Ease.get(1)).to({_off:true},1).wait(99));

	// PIC Orange
	this.instance_11 = new lib.PICCore();
	this.instance_11.setTransform(-100,124.5,1,1,0,0,0,2,125.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(48).to({_off:false},0).to({x:200},13,cjs.Ease.get(1)).to({_off:true},1).wait(27).to({_off:false},0).to({x:-100},13,cjs.Ease.get(1)).to({_off:true},1).wait(58));

	// PIC White Box
	this.instance_12 = new lib.PICBG();
	this.instance_12.setTransform(150,125.5,1.007,1,0,0,0,150,125.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},4,cjs.Ease.get(1)).wait(13).to({x:53},12,cjs.Ease.get(1)).wait(19).to({regX:300,x:204},0).to({regX:300.1,regY:124.5,scaleX:0.02,x:207,y:124.5},13,cjs.Ease.get(1)).to({_off:true},1).wait(27).to({_off:false},0).to({scaleX:1.01,x:202},13,cjs.Ease.get(1)).wait(30).to({x:300},13,cjs.Ease.get(1)).wait(16));

	// TXT Double
	this.instance_13 = new lib.TXTDouble();
	this.instance_13.setTransform(121.8,59,1,1,0,0,0,77.8,32);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(48).to({_off:false},0).wait(113));

	// TXT - it
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKEAQgTgLgJgSQgIgUAAg8IAAjgIgwAAIAAg0IAwAAIAAhiIBBgoIAACKIBDAAIAAA0IhDAAIAADlQAAAcAEAIQADAIAIAFQAIAFAPAAQALAAASgDIAJA8QgbAFgXAAQgkAAgTgMg");
	this.shape.setTransform(238.8,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggEPIAAmHIBBAAIAAGHgAggjBIAAhOIBBAAIAABOg");
	this.shape_1.setTransform(219.4,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(161));

	// BG Green
	this.instance_14 = new lib.BGGreen();
	this.instance_14.setTransform(149,124.5,1,1,0,0,0,150,125.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(17).to({_off:false},0).wait(144));

	// Layer 16
	this.instance_15 = new lib.frame1();
	this.instance_15.setTransform(0,0.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(18).to({_off:false},0).wait(143));

	// BG White
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A3aTnMAAAgnMMAu1AAAMAAAAnMg");
	this.shape_2.setTransform(149,124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,252);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;