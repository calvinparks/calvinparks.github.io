(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 6,
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



(lib.Image = function() {
	this.spriteSheet = ss["AllState_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["AllState_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["AllState_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["AllState_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.crew = function() {
	this.spriteSheet = ss["AllState_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AAfA5IgPgYIgLgQIgGgIIgHgDIgIAAIgSAAIAAAzIgPAAIAAhxIAxAAQAPAAAIADQAIADAFAIQAFAIAAAJQAAANgIAIQgIAGgRADIAJAFQAHAGAGAKIAUAfgAgigFIAhAAQAIAAAGgCQAGgDADgEQADgFAAgGQAAgIgGgFQgGgFgNAAIgiAAg");
	this.shape.setTransform(126.6,110.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgcAzQgMgIgHgNQgGgOgBgPQAAgbAQgQQAQgQAWAAQAQAAAMAIQANAHAHAOQAGANABAQQAAARgIAOQgHAOgMAHQgNAHgPAAQgPAAgNgIgAgagiQgMALAAAYQABAVAKAMQALAMAQAAQARAAALgMQAKgMABgWQgBgMgEgLQgFgKgJgGQgJgGgLAAQgOAAgMALg");
	this.shape_1.setTransform(113.8,110.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AgWAxQgIgJAAgRIAOgCQABAOAEAEQAEAFAHAAQAEAAAEgCQAFgDACgEQABgFAAgKIAAhNIAPAAIAABMQAAAPgEAIQgDAHgIAFQgHAEgJAAQgOAAgIgJg");
	this.shape_2.setTransform(102.9,110.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgpA5IAAhxIBRAAIAAAOIhCAAIAAAjIA9AAIAAALIg9AAIAAAnIBEAAIAAAOg");
	this.shape_3.setTransform(93.9,110.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AAnA5IAAheIggBeIgNAAIgghgIAABgIgPAAIAAhxIAWAAIAcBPIADARIAHgSIAbhOIAUAAIAABxg");
	this.shape_4.setTransform(81.5,110.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("AgcAzQgMgIgGgNQgIgOAAgPQAAgbAQgQQAPgQAXAAQAPAAANAIQANAHAHAOQAGANAAAQQABARgIAOQgHAOgNAHQgNAHgOAAQgOAAgOgIgAgagiQgLALAAAYQgBAVALAMQAMAMAPAAQARAAAKgMQAMgMAAgWQAAgMgFgLQgFgKgJgGQgJgGgLAAQgOAAgMALg");
	this.shape_5.setTransform(63.7,110.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AAfA5IgPgYIgLgQIgGgIIgGgDIgJAAIgSAAIAAAzIgPAAIAAhxIAxAAQAPAAAIADQAIADAFAIQAFAIgBAJQAAANgHAIQgIAGgQADIAJAFQAGAGAGAKIAUAfgAgigFIAhAAQAIAAAGgCQAGgDADgEQADgFAAgGQAAgIgGgFQgGgFgMAAIgjAAg");
	this.shape_6.setTransform(51.9,110.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AgYA0QgKgFgFgLQgFgKAAgTIAAhAIAPAAIAABAQAAAPADAHQAEAHAGAEQAHAEAJAAQAQAAAGgIQAIgHAAgWIAAhAIAOAAIAABAQAAASgDAKQgEAKgLAGQgJAHgRAAQgOAAgKgGg");
	this.shape_7.setTransform(39.6,110.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("AgGA5IAAhjIgmAAIAAgOIBZAAIAAAOIgmAAIAABjg");
	this.shape_8.setTransform(28.7,110.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AgZA0QgJgFgFgLQgEgKgBgTIAAhAIAQAAIAABAQAAAPACAHQADAHAHAEQAHAEAJAAQAPAAAIgIQAGgHABgWIAAhAIAOAAIAABAQABASgEAKQgEAKgLAGQgKAHgQAAQgOAAgLgGg");
	this.shape_9.setTransform(17.8,110.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424242").s().p("AglA5IAAhxIBLAAIAAAOIg8AAIAAAjIA0AAIAAAMIg0AAIAAA0g");
	this.shape_10.setTransform(7.2,110.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("AAsBVIhYiFIAACFIgWAAIAAiqIAXAAIBYCFIAAiFIAWAAIAACqg");
	this.shape_11.setTransform(109.7,78.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424242").s().p("AglBOQgQgHgHgRQgGgPAAgbIAAhiIAXAAIAABiQAAAWAEAKQAEALAKAFQAKAHAPAAQAXAAALgMQAKgMABgfIAAhiIAWAAIAABiQAAAagGAOQgFAQgQAKQgPAJgZAAQgWAAgPgJg");
	this.shape_12.setTransform(92.2,78.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("AA2BVIgUg0IhGAAIgTA0IgYAAIBCiqIAXAAIBGCqgAgLghIgSAwIA4AAIgSguIgKgjQgEARgGAQg");
	this.shape_13.setTransform(68.4,78.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AgKBVIAAiqIAVAAIAACqg");
	this.shape_14.setTransform(56.8,78.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424242").s().p("AgnBNQgSgLgIgWQgJgVAAgXQAAgbAKgUQAKgUATgKQATgKAVAAQAaAAARANQASANAGAYIgWAFQgGgTgLgIQgMgJgRAAQgRAAgOAJQgOAKgEAQQgGAQAAARQAAAUAGAQQAGARAOAIQAOAIANAAQAUAAAMgLQAOgLAFgWIAXAGQgIAcgSAPQgTAOgbAAQgaAAgRgLg");
	this.shape_15.setTransform(44.7,78.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424242").s().p("AA2BVIgUg0IhGAAIgTA0IgYAAIBCiqIAXAAIBGCqgAgLghIgTAwIA5AAIgSguIgKgjQgDARgHAQg");
	this.shape_16.setTransform(27.6,78.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424242").s().p("AAsBVIAAhRIhXAAIAABRIgXAAIAAiqIAXAAIAABHIBXAAIAAhHIAXAAIAACqg");
	this.shape_17.setTransform(10.7,78.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424242").s().p("AgzBdQgXgOgMgZQgMgYAAgcQAAgyAcgdQAcgdAqAAQAcAAAXAOQAYANAMAaQAMAYAAAdQAAAggNAYQgNAZgXANQgXANgbAAQgcAAgXgOgAgwg+QgVAUAAAtQAAAmAUAVQAUAWAdgBQAeAAAVgVQATgWAAgoQAAgXgIgTQgJgTgQgKQgRgLgUAAQgbAAgVAUg");
	this.shape_18.setTransform(108,47.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424242").s().p("AA1BnIhrihIAAChIgaAAIAAjNIAcAAIBrChIAAihIAaAAIAADNg");
	this.shape_19.setTransform(85.9,47.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#424242").s().p("AgMBnIAAjNIAZAAIAADNg");
	this.shape_20.setTransform(71.3,47.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#424242").s().p("ABIBnIAAirIg8CrIgXAAIg8iuIAACuIgbAAIAAjNIAqAAIAxCRIAIAeIALghIAxiOIAlAAIAADNg");
	this.shape_21.setTransform(54.9,47.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#424242").s().p("ABBBnIgYg/IhVAAIgXA/IgdAAIBQjNIAcAAIBVDNgAgNgpIgXA7IBFAAIgWg3IgNgsQgEAUgHAUg");
	this.shape_22.setTransform(32.9,47.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#424242").s().p("AgvBdQgVgOgLgZQgLgaAAgcQAAghAMgYQAMgYAXgMQAXgNAaAAQAfAAAVAQQAVAQAJAdIgbAGQgIgXgNgKQgOgKgVAAQgWAAgQALQgQAMgGATQgHATAAAVQAAAYAIAUQAHAUARAKQAQAJARAAQAXAAAQgNQAQgNAGgbIAbAHQgIAigXASQgWASghAAQgfAAgVgOg");
	this.shape_23.setTransform(12.6,47.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#424242").s().p("Ag2BZIAAixIAXAAIAACcIBWAAIAAAVg");
	this.shape_24.setTransform(108,18.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424242").s().p("AhBBZIAAixIB/AAIAAAVIhoAAIAAA3IBhAAIAAATIhhAAIAAA9IBsAAIAAAVg");
	this.shape_25.setTransform(92.4,18.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#424242").s().p("AA4BZIgUg2IhJAAIgUA2IgZAAIBFixIAXAAIBJCxgAgLgjIgTAyIA6AAIgSgvQgJgWgCgPQgEARgGARg");
	this.shape_26.setTransform(67.9,18.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#424242").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_27.setTransform(55.9,18.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#424242").s().p("AgoBQQgSgLgKgXQgJgWAAgYQAAgcAKgUQALgWATgKQAUgLAWAAQAbAAASAOQASAOAHAYIgXAGQgGgUgMgJQgMgJgSAAQgSAAgOAKQgOAKgGARQgFAQAAASQAAAVAGARQAHARAOAJQAOAIAPAAQATAAAPgMQANgLAFgXIAXAGQgHAdgTAQQgUAPgcAAQgbAAgRgMg");
	this.shape_28.setTransform(43.3,18.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#424242").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_29.setTransform(30.4,18.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#424242").s().p("AAtBZIhbiKIAACKIgXAAIAAixIAZAAIBbCKIAAiKIAXAAIAACxg");
	this.shape_30.setTransform(17.6,18.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#424242").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_31.setTransform(5.2,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.3,124.3);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AAAAJQgGANgGAIIgLgIIAQgTIgYgDIAEgPQAQAGAHAEIgCgYIAMAAIgCAYQAKgFANgFIAFAPQgNABgMACIARATIgMAIIgMgVg");
	this.shape.setTransform(122.7,95.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgbBEQgNgGgHgLQgIgLAAgPIASgCQAAALAGAHQAEAHAJAEQALAFAKAAQAKgBAJgDQAIgDAEgGQAEgFAAgHQAAgHgEgEQgEgFgIgEQgHgDgRgEQgUgFgHgCQgLgGgFgHQgFgIAAgKQAAgLAGgKQAGgJAMgEQAMgGAOAAQAOAAAMAGQAMAFAHAJQAGALABAMIgSABQgCgNgIgHQgIgHgQAAQgQAAgIAHQgIAGAAAIQAAAJAGAFQAGAFAUAEQAYAFAIAEQAMAEAHAKQAFAIABAMQAAALgHAKQgGAKgNAGQgMAGgPAAQgSAAgNgGg");
	this.shape_1.setTransform(111.8,99.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AAtBHIgQgrIg7AAIgPArIgVAAIA3iNIATAAIA6CNgAgIgcIgQAoIAuAAIgOgmIgJgdQgDAOgEANg");
	this.shape_2.setTransform(98.3,99.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_3.setTransform(88.6,99.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AAnBHIgTgeIgOgTQgFgHgCgDQgFgDgEgBIgLgBIgWAAIAABAIgTAAIAAiNIA+AAQATAAAKAEQAKAEAGAJQAGAKAAAMQAAAPgKALQgKAIgUADQAHADAEAEQAIAIAIALIAZAngAgrgHIApAAQALAAAHgDQAIgDAEgFQADgGAAgHQAAgKgHgHQgHgGgQgBIgsAAg");
	this.shape_4.setTransform(79,99.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("Ag0BHIAAiNIBmAAIAAAQIhTAAIAAAsIBNAAIAAAPIhNAAIAAAxIBWAAIAAARg");
	this.shape_5.setTransform(64.4,99.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AgvBHIAAiNIBfAAIAAAQIhMAAIAAAtIBBAAIAAAPIhBAAIAABBg");
	this.shape_6.setTransform(51.5,99.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AgbBEQgNgGgHgLQgIgLgBgPIATgCQAAALAGAHQAEAHAJAEQALAFAKAAQAKgBAJgDQAIgDAEgGQAEgFAAgHQAAgHgEgEQgEgFgIgEQgHgDgRgEQgUgFgHgCQgLgGgFgHQgFgIAAgKQAAgLAGgKQAGgJAMgEQAMgGAOAAQAOAAAMAGQAMAFAHAJQAGALABAMIgSABQgCgNgIgHQgJgHgPAAQgQAAgIAHQgIAGAAAIQAAAJAGAFQAGAFAUAEQAYAFAIAEQANAEAFAKQAGAIABAMQAAALgHAKQgGAKgNAGQgMAGgPAAQgSAAgNgGg");
	this.shape_7.setTransform(32.3,99.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("AAtBHIgQgrIg7AAIgPArIgVAAIA3iNIATAAIA6CNgAgIgcIgQAoIAuAAIgOgmIgIgdQgEAOgEANg");
	this.shape_8.setTransform(18.7,99.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AgrBHIAAiNIATAAIAAB8IBEAAIAAARg");
	this.shape_9.setTransform(6.6,99.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424242").s().p("AAvBdIhfiRIAACRIgYAAIAAi5IAZAAIBgCQIAAiQIAYAAIAAC5g");
	this.shape_10.setTransform(124.5,73.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("AhEBdIAAi5ICFAAIAAAWIhtAAIAAA6IBmAAIAAATIhmAAIAAA/IBxAAIAAAXg");
	this.shape_11.setTransform(106.6,73.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424242").s().p("AgjBZQgSgIgJgPQgKgOgBgTIAYgCQABAOAGAJQAGAJANAFQANAGAOAAQAOAAALgEQAKgFAGgHQAFgHAAgJQAAgJgFgGQgFgHgMgEIgfgJQgagGgKgEQgNgHgHgKQgGgKAAgNQAAgOAIgNQAIgMAPgGQAPgHATAAQATAAAQAHQAPAHAJANQAIANABAQIgYACQgCgSgKgJQgLgJgVAAQgVAAgKAIQgLAJAAALQAAAKAIAHQAHAGAcAHQAeAHALAFQAQAFAIAMQAIALAAAPQAAAPgJANQgIANgQAIQgQAHgUAAQgXAAgRgHg");
	this.shape_12.setTransform(81.1,73.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("AA6BdIgVg5IhMAAIgUA5IgbAAIBIi5IAYAAIBNC5gAgLglIgVA1IA9AAIgTgyQgJgXgCgPQgEASgGARg");
	this.shape_13.setTransform(63.6,73.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AgqBUQgTgNgKgXQgKgXAAgZQAAgdALgVQALgWAVgLQAUgMAXAAQAcAAATAPQATAOAIAaIgZAFQgGgUgMgJQgNgJgSAAQgUAAgOAKQgPAKgGARQgFASAAASQAAAWAHASQAGARAPAJQAPAJAPAAQAUAAAPgMQAOgMAFgYIAZAHQgIAegUAQQgUAQgdAAQgcAAgTgMg");
	this.shape_14.setTransform(45.4,73.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424242").s().p("AhEBdIAAi5ICFAAIAAAWIhtAAIAAA6IBmAAIAAATIhmAAIAAA/IBxAAIAAAXg");
	this.shape_15.setTransform(27.3,73.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424242").s().p("AhFBdIAAi5IBFAAQAUABANAFQANAGAIAMQAHALAAANQAAAMgHALQgGAKgNAHQARAEAJALQAJALAAARQAAANgGALQgFALgIAGQgIAGgNADQgMAEgSAAgAgsBGIAsAAIARgBQAJgBAFgDQAGgEAEgHQADgHAAgIQAAgLgFgHQgFgIgKgEQgJgDgQAAIgrAAgAgsgNIAoAAQAPAAAHgDQAJgDAFgGQAFgHAAgJQAAgKgFgGQgEgIgJgCQgIgDgSAAIglAAg");
	this.shape_16.setTransform(9.6,73.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424242").s().p("AAqBSIhUiAIAACAIgVAAIAAijIAWAAIBVB/IAAh/IAUAAIAACjg");
	this.shape_17.setTransform(115.7,43.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424242").s().p("Ag8BSIAAijIB1AAIAAAUIhfAAIAAAyIBZAAIAAARIhZAAIAAA4IBjAAIAAAUg");
	this.shape_18.setTransform(99.9,43.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424242").s().p("AgkBCQgQgUAAguQAAgcAGgRQAGgSAMgKQAMgKAQAAQANAAAKAGQAKAFAGAKQAHAKADAPQAEAOAAAXQAAAdgGARQgGASgMAKQgLAKgSAAQgWAAgOgSgAgVg2QgKAPAAAnQAAAoAJAOQAKANAMAAQANAAAKgOQAJgNAAgoQAAgngJgNQgKgOgNAAQgNAAgIAMg");
	this.shape_19.setTransform(78.6,43.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#424242").s().p("AgkBCQgQgUAAguQAAgcAGgRQAGgSAMgKQAMgKAQAAQANAAAKAGQAKAFAGAKQAHAKADAPQAEAOAAAXQAAAdgGARQgGASgMAKQgLAKgSAAQgWAAgOgSgAgVg2QgKAPAAAnQAAAoAJAOQAKANAMAAQANAAAKgOQAJgNAAgoQAAgngJgNQgKgOgNAAQgNAAgIAMg");
	this.shape_20.setTransform(65.6,43.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#424242").s().p("AgkBCQgQgUAAguQAAgcAGgRQAGgSAMgKQAMgKAQAAQANAAAKAGQAKAFAGAKQAHAKADAPQAEAOAAAXQAAAdgGARQgGASgMAKQgLAKgSAAQgWAAgOgSgAgVg2QgKAPAAAnQAAAoAJAOQAKANAMAAQANAAAKgOQAJgNAAgoQAAgngJgNQgKgOgNAAQgNAAgIAMg");
	this.shape_21.setTransform(52.6,43.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#424242").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_22.setTransform(43,50.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#424242").s().p("AgkBFQgPgMgCgVIAVgCQADAQAIAIQAJAHAMAAQANAAAJgLQALgLAAgSQAAgRgKgIQgKgKgNAAQgKAAgIAEQgIAFgFAFIgTgDIARhSIBPAAIAAATIg/AAIgJAsQAOgKAPAAQAVAAAPAPQAPANAAAXQAAAXgNAQQgPAUgaAAQgXAAgNgNg");
	this.shape_23.setTransform(33.1,43.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#424242").s().p("AglBBQgQgTAAgqQAAguASgWQAPgTAYAAQAUAAAMALQANALACATIgUACQgDgMgFgFQgIgJgMAAQgIAAgHAFQgJAHgGAOQgGANAAAZQAIgLAKgGQAKgFAKAAQAVAAAOAPQAOANAAAXQAAAQgHANQgGANgMAHQgMAIgOAAQgYAAgQgTgAgUACQgJAJAAAQQgBALAFAJQAFAKAHAFQAIAFAHAAQANAAAJgKQAJgLAAgRQAAgSgJgJQgJgIgOAAQgLAAgKAIg");
	this.shape_24.setTransform(20,43.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424242").s().p("AgDBlIAAgUQgQgCgJgFQgKgEgHgLQgGgLgCgQIAUgEQADARAGAHQAJALAMABIAAhAQgNgBgNgHQgKgFgFgKQgGgJABgMQAAgWAPgNQAKgJAVgCIAAgKIAJAAIAAAKQASABAKAJQAOALACATIgVADQgBgMgGgGQgGgGgKgCIAAA6IAUAGQAKAEAGAFQAGAFADAIQADAIAAAKQAAAVgNAOQgOAOgVABIAAAUgAAGBAQAMgBAHgJQAJgJgBgNQAAgLgFgGQgGgHgQgFgAgWhAQgHAIAAAKQAAAKAFAHQAHAHAOAEIAAg4QgNACgGAIg");
	this.shape_25.setTransform(7,43.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#424242").s().p("AhXB1IAAjqICpAAIAAAcIiJAAIAABIICAAAIAAAaIiAAAIAABQICPAAIAAAcg");
	this.shape_26.setTransform(117.9,7.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#424242").s().p("AhgB1IAAjqIBRAAQAaAAAOAEQAUAFAPALQASARAKAYQAJAYAAAgQAAAZgGAVQgHAVgJANQgKAOgMAIQgMAHgQAEQgRAEgTAAgAhBBZIAyAAQAWAAANgDQANgFAIgIQALgLAHgTQAGgTAAgZQAAglgMgTQgNgUgRgHQgNgFgZAAIgyAAg");
	this.shape_27.setTransform(94.7,7.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#424242").s().p("AguBwQgVgJgNgTQgMgSAAgZIAdgCQACASAHALQAIALAQAHQARAIARAAQASgBAOgFQAOgFAHgJQAGgKAAgLQAAgKgGgJQgGgIgQgGQgJgDgegJQghgHgNgFQgRgJgIgNQgJgOAAgQQAAgRAKgQQAKgQAUgHQATgJAYABQAZAAAUAIQAUAIALAQQALARAAAVIgdACQgDgXgOgLQgOgLgaAAQgbAAgNAKQgOALAAAPQABAMAIAIQAJAIAlAJQAmAJAOAGQAUAIALAOQAKAPAAATQgBATgKAQQgLARgVAKQgTAJgaAAQgeAAgWgKg");
	this.shape_28.setTransform(61.6,7.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#424242").s().p("ABLCTIgchHIhhAAIgaBHIghAAIBajqIAhAAIBgDqgAgPgRIgaBEIBPAAIgZhAQgLgdgEgUQgEAXgJAWgAgVhlIAVgtIAkAAIgkAtg");
	this.shape_29.setTransform(39.5,4.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#424242").s().p("ABSB1IAAjDIhFDDIgaAAIhEjHIAADHIgeAAIAAjqIAvAAIA4CmIAJAjIANgnIA4iiIAqAAIAADqg");
	this.shape_30.setTransform(14.4,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-12.5,137.8,125.8);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AgpBmQgUgIgLgRQgMgRAAgWIAbgDQABARAIAKQAGAKAPAHQAPAGAQAAQARAAAMgFQAMgEAGgJQAHgIAAgKQAAgLgHgHQgFgHgOgFQgJgEgbgHQgdgHgNgEQgOgJgIgLQgIgNAAgOQAAgRAKgOQAIgOATgHQARgHAWgBQAVAAATAJQASAHAKAPQAKAPAAATIgbACQgCgVgNgKQgNgKgXAAQgZAAgMAJQgMAJABAOQAAAMAIAHQAIAIAhAHQAjAIANAGQASAHAJANQAJANAAASQAAAQgKAPQgJAQgTAJQgSAHgYABQgaAAgUgJg");
	this.shape.setTransform(116.4,78.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("Ag1BgQgYgOgMgaQgMgaAAgbQAAg0AcgeQAdgeAsgBQAdABAYAOQAYAOANAZQAMAaAAAeQAAAggNAaQgNAagYANQgZANgbABQgdAAgYgPgAgyhBQgWAWAAAuQAAAmAVAXQAVAXAegBQAfABAVgXQAVgXAAgpQAAgZgJgTQgJgUgRgLQgRgKgVAAQgcAAgWAUg");
	this.shape_1.setTransform(95.6,78.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AA3BrIhvinIAACnIgbAAIAAjVIAdAAIBvCnIAAinIAbAAIAADVg");
	this.shape_2.setTransform(73.6,78.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgNBrIAAjVIAbAAIAADVg");
	this.shape_3.setTransform(59.4,78.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AgMBrIAAi8IhHAAIAAgZICoAAIAAAZIhHAAIAAC8g");
	this.shape_4.setTransform(46.7,78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("ABEBrIgahBIhXAAIgYBBIgeAAIBSjVIAdAAIBYDVgAgNgqIgYA9IBHAAIgWg6QgLgbgDgRQgEAUgHAVg");
	this.shape_5.setTransform(28.1,78.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AhCBrIAAjVIAdAAIAAC7IBnAAIAAAag");
	this.shape_6.setTransform(11,78.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AAcAsIgLgbIgjAAIgKAbIgMAAIAihXIALAAIAkBXgAgFgRIgKAZIAdAAIgKgXIgEgTIgFARg");
	this.shape_7.setTransform(128.3,59.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("AAYAsIgMgSIgIgNIgEgGIgGgCIgGAAIgOAAIAAAnIgMAAIAAhXIAmAAQAMAAAGACQAGADAEAGQAEAGAAAHQAAAKgHAGQgGAFgNACIAIAEQAFAFAEAHIAQAYgAgagEIAZAAQAGAAAFgBQAFgCACgEQACgDAAgFQAAgGgEgEQgFgEgKAAIgaAAg");
	this.shape_8.setTransform(119.9,59.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AAcAsIgLgbIgjAAIgKAbIgMAAIAihXIALAAIAkBXgAgFgRIgKAZIAdAAIgKgXIgEgTIgFARg");
	this.shape_9.setTransform(110.7,59.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424242").s().p("AghAsIAAhXIAhAAIANABQAGABAFADQAEADADAFQADAGAAAHQAAALgIAGQgHAIgTAAIgVAAIAAAkgAgVgBIAVAAQAMAAAFgEQAEgEAAgIQAAgGgCgEQgDgEgFgBIgLgBIgVAAg");
	this.shape_10.setTransform(103.4,59.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("AAcAsIgLgbIgjAAIgKAbIgMAAIAihXIALAAIAkBXgAgFgRIgKAZIAdAAIgKgXIgEgTIgFARg");
	this.shape_11.setTransform(91.2,59.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424242").s().p("AgFAsIAAhNIgdAAIAAgKIBFAAIAAAKIgeAAIAABNg");
	this.shape_12.setTransform(84,59.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_13.setTransform(78.3,59.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AgTApQgIgFgEgIQgCgIAAgOIAAgyIALAAIAAAyQAAAMADAFQABAGAGADQAFADAHAAQAMAAAGgHQAFgFAAgRIAAgyIAMAAIAAAyQAAANgEAIQgCAIgJAFQgHAFgNAAQgLAAgIgEg");
	this.shape_14.setTransform(71.9,59.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424242").s().p("AgEAsIAAhNIgeAAIAAgKIBFAAIAAAKIgeAAIAABNg");
	this.shape_15.setTransform(63.5,59.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424242").s().p("AAcAsIgLgbIgjAAIgKAbIgMAAIAihXIALAAIAkBXgAgFgRIgKAZIAdAAIgKgXIgEgTIgFARg");
	this.shape_16.setTransform(56.1,59.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424242").s().p("AAYAsIgMgSIgIgNIgEgGIgGgCIgGAAIgOAAIAAAnIgMAAIAAhXIAmAAQAMAAAGACQAGADAEAGQAEAGAAAHQAAAKgHAGQgGAFgNACIAIAEQAFAFAEAHIAQAYgAgagEIAZAAQAGAAAFgBQAFgCACgEQACgDAAgFQAAgGgEgEQgFgEgKAAIgaAAg");
	this.shape_17.setTransform(47.7,59.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424242").s().p("AgSAoQgLgGgGgKQgFgLAAgNQAAgLAFgLQAGgMAKgFQAKgGAMAAQAJAAAJADQAHAEAFAFQAFAGACAJIgLADQgCgHgDgEQgDgEgGgCQgFgDgHAAQgGAAgGADQgGACgEAEQgDAEgCAFQgDAJgBAIQAAALAFAIQADAIAJAEQAIAEAGAAQAIAAAHgDQAHgDAFgDIAAgRIgbAAIAAgJIAmAAIAAAgQgJAHgJADQgKAEgJAAQgLAAgLgGg");
	this.shape_18.setTransform(37.8,59.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424242").s().p("AgQAqQgJgDgEgHQgFgIAAgIIALgBQABAGADAFQADAEAGADQAGACAFAAQAHAAAFgCQAGgCACgDQADgEAAgEQAAgEgDgDQgCgEgGgCIgOgEQgMgDgFgBQgGgDgEgFQgDgFAAgGQAAgHAEgGQAEgGAHgDQAIgDAIAAQAJAAAHADQAIAEAEAGQAEAGAAAIIgLABQgBgJgFgEQgFgEgKAAQgJAAgFAEQgFAEAAAFQAAAFADADQAEADAMADQAOAEAGACQAIACADAFQAEAGAAAHQAAAHgEAGQgEAHgIADQgHAEgKAAQgKAAgIgEg");
	this.shape_19.setTransform(25.1,59.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#424242").s().p("AAcA4IgLgbIgjAAIgKAbIgMAAIAihYIALAAIAkBYgAgFgFIgKAYIAdAAIgKgXIgEgTIgFASgAgHgmIAHgRIANAAIgNARg");
	this.shape_20.setTransform(16.7,58.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#424242").s().p("AAfAsIAAhJIgaBJIgJAAIgahKIAABKIgLAAIAAhXIARAAIAWA9IACANIAFgOIAVg8IAQAAIAABXg");
	this.shape_21.setTransform(7.2,59.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#424242").s().p("AA0BSIgUgyIhCAAIgSAyIgXAAIA/ijIAVAAIBECjgAgKggIgSAuIA2AAIgRgrIgKgjQgDAQgGAQg");
	this.shape_22.setTransform(125,40);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#424242").s().p("AgKBSIhAijIAYAAIArB2IAHAbIAIgbIAth2IAWAAIhBCjg");
	this.shape_23.setTransform(110.2,40);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#424242").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_24.setTransform(99.3,40);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424242").s().p("AgKBSIAAiPIg2AAIAAgUICBAAIAAAUIg3AAIAACPg");
	this.shape_25.setTransform(88.9,40);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#424242").s().p("AA0BSIgUgyIhCAAIgSAyIgYAAIBAijIAWAAIBCCjgAgKggIgSAuIA2AAIgRgrIgKgjQgDAQgGAQg");
	this.shape_26.setTransform(75.2,40);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#424242").s().p("AglBKQgRgLgJgVQgIgUAAgWQAAgaAKgTQAJgTATgKQASgKATAAQAZAAARANQARAMAGAXIgVAFQgGgSgLgIQgLgIgQAAQgRAAgNAJQgNAJgFAQQgFAPAAAQQAAATAGAQQAGAPANAIQANAIANAAQATAAAMgLQANgKAEgVIAWAGQgHAagRAPQgSAOgaAAQgZAAgQgLg");
	this.shape_27.setTransform(59.6,40);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#424242").s().p("AgkBLQgPgIgGgPQgGgPAAgaIAAhdIAWAAIAABdQAAAVAEAKQAEAKAJAGQAKAFAOAAQAWAAAKgKQALgLAAgfIAAhdIAVAAIAABdQAAAZgFAOQgGAPgPAJQgOAJgYAAQgVAAgPgIg");
	this.shape_28.setTransform(42.6,40.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#424242").s().p("AhDBSIAAijIA5AAQARAAALACQAOAEAKAIQANALAGARQAHASAAAVQAAARgFAPQgEAOgHAKQgHAJgIAGQgIAFgMADQgLADgNAAgAgtA+IAjAAQAPAAAJgDQAJgDAGgFQAHgIAFgNQAEgNAAgRQAAgagIgNQgJgOgMgFQgJgDgRAAIgjAAg");
	this.shape_29.setTransform(26.1,40);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#424242").s().p("Ag8BSIAAijIB1AAIAAAUIhfAAIAAAyIBZAAIAAARIhZAAIAAA4IBjAAIAAAUg");
	this.shape_30.setTransform(10,40);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#424242").s().p("AA/BkIgXg9IhSAAIgWA9IgcAAIBNjHIAaAAIBSDHgAgMgnIgWA4IBCAAIgVg1IgNgqQgDAUgHATg");
	this.shape_31.setTransform(119.3,17.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#424242").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_32.setTransform(105.8,17.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#424242").s().p("AA3BkIgbgqIgTgcQgIgJgEgEQgGgEgGgBIgOgBIgfAAIAABZIgbAAIAAjHIBXAAQAbAAAOAGQAOAFAIAOQAIANAAARQAAAVgNAPQgOANgdAEQALAFAFAFQAMAKAKAQIAjA3gAg8gKIA5AAQAQAAAKgEQAKgEAGgIQAFgIAAgKQAAgOgKgJQgKgKgXAAIg9AAg");
	this.shape_33.setTransform(92.1,17.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#424242").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_34.setTransform(71.8,17.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#424242").s().p("AhCBkIAAjHICFAAIAAAYIhqAAIAAA+IBbAAIAAAWIhbAAIAABbg");
	this.shape_35.setTransform(53.9,17.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#424242").s().p("AA/BkIgXg9IhSAAIgWA9IgcAAIBNjHIAaAAIBSDHgAgMgnIgWA4IBCAAIgVg1IgNgqQgDAUgHATg");
	this.shape_36.setTransform(27.1,17.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#424242").s().p("Ag9BkIAAjHIAaAAIAACvIBhAAIAAAYg");
	this.shape_37.setTransform(10.3,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,97.8);


(lib.ClipGroup0_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjBBQIAAifIGDAAIAACfg");
	mask.setTransform(19.4,8.1);

	// Layer 3
	this.instance = new lib.Image_3();
	this.instance.setTransform(0,0,0.24,0.24);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,16.1);


(lib.ClipGroup0_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj4D5IAAnxIHxAAIAAHxg");
	mask.setTransform(25,25);

	// Layer 3
	this.instance = new lib.Image_2();
	this.instance.setTransform(0,0,0.24,0.24);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.9,49.9);


(lib.ClipGroup0_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(80,300);

	// Layer 3
	this.text = new cjs.Text("  ", "30px 'Arial'", "#424242");
	this.text.lineHeight = 40;
	this.text.setTransform(148.1,360.5);

	this.text.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,360.5,11.9,37.5);


(lib.ClipGroup0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(80,300);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84C44E").s().p("AnbBzQgIAAgFgFQgFgFAAgHIAAjDQAAgHAFgFQAFgFAIAAIO3AAQAIAAAFAFQAFAFAAAHIAADDQAAAHgFAFQgFAFgIAAg");
	this.shape.setTransform(79.9,552.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E5F3C").s().p("AnhB4QgHAAgFgFQgGgFAAgIIAAjLQAAgHAGgGQAFgFAHAAIPCAAQAHAAAGAFQAGAGgBAHIAADLQABAIgGAFQgGAFgHAAg");
	this.shape_1.setTransform(80,552.3);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,540.3,100,24);


(lib.ClipGroup0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVBrQgHAAgEgFQgFgEAAgGIAAi2QAAgHAFgEQAFgFAGAAIOrAAQAHAAAEAFQAFAEAAAHIAAC2QAAAGgFAEQgEAFgHAAg");
	mask.setTransform(48.7,10.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2E814B","#58AF52"],[0,1],0,10.8,0,-10.7).s().p("AnlBrIAAjVIPLAAIAADVg");
	this.shape.setTransform(48.7,10.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.4,21.5);


(lib.ClipGroup0_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMeAu4MAAAhdvIY9AAMAAABdvg");
	mask.setTransform(80.1,300);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBBIAAh9IAhAAIAAASIADgFQAPgRAMAAIACAAQAEAAADAEIAAAiIgSAAQgIAAgGAFQgFAEAAAHIAABLg");
	this.shape.setTransform(123.5,203.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA1QgMgMAAgdIAAhMIAlAAIAABRQAAARAUAAQAHAAAGgEQAHgFAAgIIAAhRIAmAAIAAB9IgjAAIAAgQIgIAJQgLALgQAAQgWAAgLgMg");
	this.shape_1.setTransform(112,204);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBRQgRAAgLgLQgJgJAAgQIAAg9IABgEIgFABIgOAAIAAgcIAOAAIAFAAIgBgEIAAgdIAkAAIAAAdIgCAEIAFAAIATAAIAAAcIgTAAIgFgBIACAEIAAA3QAAAKAKAAIAMAAIAAAbQgDAFgQAAg");
	this.shape_2.setTransform(100.6,202.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA1QgNgMAAgdIAAhMIAmAAIAABRQAAARATAAQAHAAAHgEQAGgFAAgIIAAhRIAmAAIAAB9IgiAAIAAgQIgJAJQgMALgPAAQgWAAgKgMg");
	this.shape_3.setTransform(89.6,204);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9BUIAAioIB7AAIAAAiIhPAAIgFgBIAAAEIAAAcIAAAEIAFAAIBEAAIAAAeIhEAAIgFAAIAAAEIAABBg");
	this.shape_4.setTransform(76.9,201.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYA/IgVhBIgDgMIAAAAIgCAMIgVBBIghAAIglh9IAmAAIAQA8IABALIABAAIAYhHIAdAAIAYBHIABAAIAQhHIAmAAIgmB9g");
	this.shape_5.setTransform(55.2,203.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsAzQgQgQAAgiQAAggAQgRQARgSAbAAQAbAAASARQAQARAAAeIAAALIhPAAIgFAAIABADIAAACQAAALAHAHQAHAHAMAAQAOAAANgNIADgEIAaANQAAAEgCACIgIAIQgSASgeAAQgdAAgRgQgAAUgMIAEAAIgBgEIAAgDQAAgHgFgGQgHgHgLAAQgLAAgGAHQgFAGAAAHIAAADIgBAEIAFAAg");
	this.shape_6.setTransform(39.7,203.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBUIg3haIgHgQIgDAAIABBqIgnAAIAAioIAsAAIA1BbIAIAQIABAAIAAhrIAnAAIAACog");
	this.shape_7.setTransform(25,201.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5B246").s().p("AgxAHIBUgNIAPANg");
	this.shape_8.setTransform(129.2,203);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD144").s().p("AgxgGIBjAAIgPANg");
	this.shape_9.setTransform(129.2,204.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5B246").s().p("AgGghIANgPIAABig");
	this.shape_10.setTransform(133.4,208.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD144").s().p("AgGgwIANAPIgNBTg");
	this.shape_11.setTransform(134.9,208.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5B246").s().p("AgygGIBlAAIhVANg");
	this.shape_12.setTransform(139.3,204.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFD144").s().p("AgyAHIAQgNIBVANg");
	this.shape_13.setTransform(139.3,203);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E5B246").s().p("AgGgwIANBSIgNAQg");
	this.shape_14.setTransform(134.9,198.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFD144").s().p("AgGAiIANhSIAABig");
	this.shape_15.setTransform(133.4,198.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFD144").s().p("AAOgNIAAANIgbAOg");
	this.shape_16.setTransform(132.7,205.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5B246").s().p("AgBgNIAPAAIgbAbg");
	this.shape_17.setTransform(132.7,205.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E5B246").s().p("AgNAAIAAgNIAbAbg");
	this.shape_18.setTransform(135.7,205.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFD144").s().p("AgNgNIAPAAIAMAbg");
	this.shape_19.setTransform(135.7,205.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFD144").s().p("AgNAAIAbgNIgbAbg");
	this.shape_20.setTransform(135.6,202.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5B246").s().p("AgNAOIAbgbIgMAbg");
	this.shape_21.setTransform(135.7,202.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E5B246").s().p("AgNgNIAbANIAAAOg");
	this.shape_22.setTransform(132.7,202.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFD144").s().p("AgBAOIgMgbIAbAbg");
	this.shape_23.setTransform(132.7,202.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AguAvQgUgTAAgcQAAgaAUgUQAUgUAaAAQAbAAAUAUQAUAUAAAaQAAAcgUATQgUAUgbAAQgbAAgTgUgAgagaQgMAMAAAOQAAAQAMALQALALAPAAQAPAAAMgLQALgLAAgQQAAgOgLgMQgMgMgPABQgPgBgLAMg");
	this.shape_24.setTransform(134.2,203.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#393A3B").s().p("AseCBIAAkBIY9AAIAAEBg");
	this.shape_25.setTransform(80,183.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWAQQgDgDgGgBIgIAAIgFgDIgKgFIgBgBIgBgCIgNgPIABgBIAFgEIACgDIAAACIgBAEIAEAGIABAAIAGAJIABABIAJAEIABABIAEACQASAAAAAIQABAFgFADQACgDgCgEg");
	this.shape_26.setTransform(46.4,239.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASAPQgCgCgFgBIgHAAIgNgJIgCgDIAAAAIgLgOIABAAQAEgDABgCIABgCIABAGIAJAPIAEAAIABABIAHAFIAGABQAFABAEADQADAGgFAFQACgEgEgDg");
	this.shape_27.setTransform(47.3,238.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAXAQQgDgBgIAAIgHAAIgFgDIgCgCIAAAAIgJgFIgCgCIgPgRIABAAQAHgCACgCIACgCQAAADgCADIAHAKIABACIADADIAEABIAEADIACACIAEACIAIAAQANABAAAFQABADgDADQABgDgEgCg");
	this.shape_28.setTransform(45,239.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhZBEQglgdAAgnQAAgoAlgdQAlgdA0AAQA0AAAmAdQAlAdAAAoQAAAnglAdQgmAeg0AAQgzAAgmgegAhtAAQgBAkAhAcQAhAcAsAAQAtAAAhgcQAhgcgBgkQABgcgVgYQgJAGgBAEIAAACIAFAIQADAKAAAQIAAAFIgLAfIgBABQgOAQgEAMQgBABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQgEAAgEgEIgDgEIAAABQgHAJgJAFQgLAFgOACQgGAAgHgBQgIgBAAgGQgHADgEgDQgGgDACgFQgEACgFgEQgFgEAFgHIgCgEQgDAHgGADQgDADgCgDIgDgEIgBAAQgJgUgIgIIgBgDIgDgSIgBgBIgDgNIAAgBQAAgGAHgPIADgJIgJgIIgBgBQgWAZABAdgAgMBBIAAABIAAACIADACQAQACAQgIQAIgEAHgLIABAAIACgDIAAgEQAAgHAGgGIAAgEQAAgIADgEIAAAAQgIgJgBgGQgBgFAAgHIAAgGIABgBIABgBIABACQAAAIADAJQAFAIAHAGIABAAIgBABQgDACgBAFQgBAFAAAFIAAACQgFAEgBAIQABAHADADIABABIABgBQAFgNAMgLIAAgBIALgeIAAgBQAAgLgDgNIgEgKIAAgBIgBgDIAAAAIgCgFIgGgJIADAAIABAAIADACQAEACAGgFIADgBQgQgQgYgKIgIAIIgBACIgDADIgBACIAAAAIAFACIAAAAIAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgKACgGADIgDADQgFAEgCAEQgDAHgBAJIgBACIAEAYIAFAJIACABIAGAIIAEABQAKACAAAFQAAADgBACQAAgGgKgBIgGgBIgCgCIgBgCIgHgGIgCgDIgEgGIgDgdQgCgSgMgKQgJgJgJAAIgBAAIAAgCIACgBIgDgEIgCgCIgGgGQgXAIgRARIAFACQADABAFgCIABAAIAHgCIACABIgCABQgFAFgCADIgBAAIgDAJQgGANgBALIAAABIABAFIAGAaIAAABQAHAIAHAQIAEAGIABgBQAEgFAAgGQABgGgEgFIgCgBIAAAAIAAgBQACgOgGgEIgCAAIACgBQAOgIAAgJIAAgCIACACIABAGQAAAIgJAEQACAFABAEIgCAIIAEADIACAJIACADIAKAMQAFADAGAEQAHACAKACQAJACAFgCIABgBIgBADQgIAEgNgBgAgbBAQADACAGgEQgIgBgDgDQgCAEAEACgAgnA3QACACAEgBIgHgHQgBADACADgAgkhVIARAQQAIADAGAHQAEAFABAJIACgEQAFgLALgFQADgCALgKIAGgIQgSgFgUgBQgUABgQAFg");
	this.shape_29.setTransform(46,236.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgYANgNQALgLAPAAQAoAAAAAwIAAAFIg3AAQADAZASAAQAOAAAQgLIABgBIADATIgBABQgPALgVAAQgSAAgMgNgAAQgJQgBgVgPAAQgMAAgDAVIAfAAIAAAAg");
	this.shape_30.setTransform(114.5,239.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPAiIAAgtIgNAAIAAgVIANAAIAAgeIAWAAIAAAeIASAAIAAAVIgSAAIAAAqQAAAKALAAIAGgBIABAAIAEAVIgBAAIgPACQgcAAAAgdg");
	this.shape_31.setTransform(107.2,237.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeAqQgHgHAAgMQAAgfAzgFIAAgCQAAgNgOAAQgKAAgRAHIgCABIgDgUIABAAQAUgIAOAAQAjAAAAAgIAAA/IgVAAIgBgKQgNAMgOAAQgMAAgHgHgAgNAUQAAAKAJAAQAJAAAJgJIAAgVQgbAFAAAPg");
	this.shape_32.setTransform(99.6,239.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAiIAAgtIgNAAIAAgVIANAAIAAgeIAVAAIAAAeIATAAIgBAVIgSAAIAAAqQABAKAKAAIAHgBIABAAIAEAVIgBAAIgPACQgcAAAAgdg");
	this.shape_33.setTransform(92.2,237.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgiAnIgBAAIAEgVIABABQAPALAPgBQANAAAAgIQAAgFgDgCQgDgCgJgDQgRgFgHgEQgHgGAAgNQAAgLAHgIQAJgKARAAQAQABAOAFIABABIgEAVIgBgBQgOgIgMAAQgKAAgBAIQAAAEADACQADACAIADQASAEAHAGQAIAEAAAPQAAANgHAHQgJAJgUAAQgSAAgQgJg");
	this.shape_34.setTransform(85.2,239.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_35.setTransform(79,237.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_36.setTransform(74.8,237.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAgA+IAAggIgqAAIgUAgIgaAAIBLh7IAmAAIAAB7gAACAHIAeAAIAAgvg");
	this.shape_37.setTransform(66,237.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDgAgHAAQAAAJAHgBQAIABAAgJQAAgIgIAAQgHAAAAAIgAAAAAIAAAAIAAAFIgCAAIAAgKIACAAQADAAAAAEQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIADAFIgCAAgAAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAg");
	this.shape_38.setTransform(121.3,243);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFD144").s().p("AqeAEIAAgKIU9ADIAAAKg");
	this.shape_39.setTransform(80.3,220.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#393A3B").s().p("AseFeIAAq6IY9AAIAAK6g");
	this.shape_40.setTransform(80,222.1);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,170.2,159.9,87);


(lib.ClipGroup0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmABeIAAi7IMBAAIAAC7g");
	mask.setTransform(38.5,9.5);

	// Layer 3
	this.instance = new lib.Image_0();
	this.instance.setTransform(0,0,0.24,0.24);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.1,19);


(lib.ClipGroup0_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtUHZIAAuxIapAAIAAOxg");
	mask.setTransform(85.3,47.4);

	// Layer 3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.24,0.24);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.6,94.8);


(lib.ClipGroup0_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjBBQIAAifIGDAAIAACfg");
	mask.setTransform(19.4,8.1);

	// Layer 3
	this.instance = new lib.ClipGroup0_13();
	this.instance.setTransform(19.4,8.1,1,1,0,0,0,19.4,8.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,16.1);


(lib.ClipGroup0_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj4D5IAAnxIHxAAIAAHxg");
	mask.setTransform(25,25);

	// Layer 3
	this.instance = new lib.ClipGroup0_11();
	this.instance.setTransform(24.9,24.9,1,1,0,0,0,24.9,24.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.9,50);


(lib.ClipGroup0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AseHTIAAulIY9AAIAAOlg");
	mask.setTransform(85.1,46.7);

	// Layer 3
	this.instance = new lib.ClipGroup0_0();
	this.instance.setTransform(85.3,47.4,1,1,0,0,0,85.3,47.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,0,160,93.5);


(lib.ClipGroup0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmABeIAAi7IMBAAIAAC7g");
	mask.setTransform(38.5,9.5);

	// Layer 3
	this.instance = new lib.ClipGroup0_2();
	this.instance.setTransform(38.5,9.5,1,1,0,0,0,38.5,9.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.1,19);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup0_10();
	this.instance.setTransform(24.9,24.9,1,1,0,0,0,24.9,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.9,50);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup0_12();
	this.instance.setTransform(19.4,8.1,1,1,0,0,0,19.4,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,16.1);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup0_1();
	this.instance.setTransform(38.5,9.5,1,1,0,0,0,38.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.1,19);


(lib.ClipGroup0_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(80,300);

	// Layer 3
	this.instance = new lib.Group_0();
	this.instance.setTransform(125.5,160.8,1,1,0,0,0,19.4,8.1);
	this.instance.alpha = 0.199;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F58735").s().p("AiPCQQg7g8AAhUQAAhTA7g7QA8g9BTAAQBUAAA8A9QA7A7AABTQAABUg7A8Qg8A7hUABQhTgBg8g7g");
	this.shape.setTransform(125.1,158.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDCA9F").s().p("AiaCaQhAhAAAhaQAAhaBAg/QBBhBBZAAQBaAABBBBQBAA/AABaQAABahABAQhBBBhaAAQhZAAhBhBg");
	this.shape_1.setTransform(125.1,158.3);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(126.1,159.3,1,1,0,0,0,24.9,24.9);
	this.instance_1.alpha = 0.602;

	this.instance.mask = this.shape.mask = this.shape_1.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.2,134.4,49.9,50);


(lib.ClipGroup0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(80,300);

	// Layer 3
	this.instance = new lib.Group();
	this.instance.setTransform(80.4,553.7,1,1,0,0,0,38.5,9.5);
	this.instance.alpha = 0.602;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.9,544.2,77.1,19);


(lib.ClipGroup0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxBEQgKgOAAgcIAAhtIAaAAIAABrQAAAVAGAIQAIAMAYAAQAaAAAHgMQAFgIABgVIAAhrIAaAAIAABtQAAAcgLAOQgPATgnAAQgmAAgQgTgAj+BFQgLgLgFgQQgFgQAAgaQAAgZAFgPQAFgPAKgLQAUgUAiAAQAiAAAZAaIAGAFQACACAAADIgVALIgGgGQgTgTgSAAQgXAAgNAOQgIAHgDALQgDALAAAVQAAAVAEAMQADALAHAIQAOANAVAAQANAAAKgGQAGgEAKgJIAFgFIAVALQAAACgCADIgEADQgNAOgMAGQgQAHgUAAQghAAgUgSgAm3BCQgMgLgEgOQgFgPAAgaQAAgZAEgPQAFgNALgMQAVgVAkAAQAmAAAUAVQALALAEAOQAFAPAAAZQAAAagFAPQgFAOgKALQgVAVglAAQglAAgTgVgAmjgyQgIAHgDALQgDALAAAVQAAAVADAMQADALAIAIQAOANAWAAQAXAAAOgNQAHgIADgLQAEgMAAgVQAAgVgEgLQgCgLgIgHQgNgOgYAAQgYAAgMAOgAqLBIQgQgRAAghQAAg7AbgaQAUgWAnAAIAMAAQAEAAADADIAAAVIgSgBQgaAAgNALQgQAMgFAeIAAAGIAFgGQANgOAYAAQAXAAAOAOQAOANAAAXQAAA8g9AAQgcAAgPgPgAqBAdQAAAQAIAKQAKALAQAAQAiAAAAgkQAAgfgiAAQgiAAAAAegAIkBUIAAinIB2AAIAAAWIhYAAIgEAAIABAEIAAArIgBAEIAEAAIBNAAIAAAUIhNAAIgEgBIABAEIAAAuIgBAEIAEgBIBaAAIAAAWgAHlBUIgohGIgkAAIgEAAIABAEIAABCIgbAAIAAinIBIAAQAdAAAPAPQAMANAAAVQAAAlghAIIAnBEIACAFgAGWg5IAAAwIgBAEIAEgBIAqAAQAdAAAAgcQAAgMgGgHQgIgIgPAAIgqAAIgEAAgADVBUIAAinIBBAAQAfAAAPAPQAKAMAAAPQAAAcgYAIIAAACQANABAJAIQAKAMAAARQABAXgOANQgOANgjAAgADwAMIAAAvIgBAEIAEgBIAqAAQAeAAAAgcQAAgZgeAAIgqAAIgEgBgADwg5IAAAqIgBAEIAEAAIAiAAQAdAAAAgaQAAgYgdAAIgiAAIgEAAgAhCBUIAAiNIABgEIgFAAIgvAAIAAgWICAAAIAAAWIguAAIgFAAIABAEIAACNg");
	this.shape.setTransform(82.3,494.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvBcIhfiPIAACPIgXAAIAAi3IAZAAIBfCPIAAiPIAXAAIAAC3g");
	this.shape_1.setTransform(135.9,468.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtBSQgVgMgKgWQgKgWAAgYQAAgsAYgaQAZgaAlAAQAZAAAVAMQAUANALAVQAKAWAAAaQABAcgLAWQgMAWgVAMQgUALgYAAQgYAAgVgNgAgqg3QgUASAAAnQAAAiASATQATATAZAAQAbAAASgTQARgUAAgjQABgVgIgRQgHgQgPgKQgPgJgSAAQgYAAgSASg");
	this.shape_2.setTransform(116.1,468.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBcIAAihIg9AAIAAgWICRAAIAAAWIg9AAIAAChg");
	this.shape_3.setTransform(98.2,468.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBYQgRgIgKgOQgKgPAAgSIAXgCQABANAGAJQAHAJAMAGQANAFAOAAQAOAAAKgEQALgEAFgHQAFgIABgIQAAgJgGgGQgFgHgMgEQgHgDgXgGQgZgGgKgEQgOgHgGgKQgHgKAAgNQAAgOAIgMQAIgMAPgGQAPgHATAAQASAAAQAHQAQAGAIANQAJANABAQIgYACQgCgRgLgJQgLgJgUAAQgVAAgKAIQgLAIAAALQAAAKAIAHQAHAGAbAHQAfAHALAFQAPAFAIAMQAIALAAAPQAAAOgJANQgIANgQAIQgQAHgTAAQgYAAgQgHg");
	this.shape_4.setTransform(81.7,468.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoBUQgQgIgHgRQgIgRAAgeIAAhoIAZAAIAABoQAAAYAEAMQAEALALAGQALAGAQAAQAZAAALgMQAMgMAAgjIAAhoIAYAAIAABoQAAAcgGARQgGAQgRAKQgQAKgbAAQgYAAgQgJg");
	this.shape_5.setTransform(63.2,469);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBSQgVgMgKgWQgKgWAAgYQgBgsAZgaQAZgaAlAAQAZAAAVAMQAUANALAVQALAWgBAaQAAAcgLAWQgLAWgUAMQgWALgXAAQgYAAgVgNgAgqg3QgUASABAnQgBAiATATQASATAZAAQAbAAASgTQASgUAAgjQAAgVgIgRQgHgQgPgKQgPgJgSAAQgYAAgSASg");
	this.shape_6.setTransform(43.4,468.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwBcIAAhXIheAAIAABXIgZAAIAAi3IAZAAIAABMIBeAAIAAhMIAYAAIAAC3g");
	this.shape_7.setTransform(23.4,468.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAlQgHgDgEgGQgFgHAAgIIAKAAQABAGACADQADAEAFACQAGADAEAAQAGAAAFgCQAEgCADgDQACgDAAgEQAAgDgCgDQgCgDgFgCIgMgEIgQgCQgFgDgDgFQgDgEAAgGQAAgGAEgFQADgFAGgDQAHgCAHAAQAIAAAGADQAHACAEAGQADAFABAHIgKABQgBgIgFgDQgFgEgIAAQgIAAgEADQgFAEAAAFQAAAEADADQADACALADIARAFQAHABAEAFQADAFAAAHQAAAGgEAFQgDAGgHADQgHADgIAAQgJAAgHgDg");
	this.shape_8.setTransform(143.1,159.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAIAAIAABNg");
	this.shape_9.setTransform(137.9,159.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAnIAAhEIgaAAIAAgJIA9AAIAAAJIgaAAIAABEg");
	this.shape_10.setTransform(132.9,159.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYAnIgJgYIgfAAIgIAYIgLAAIAehNIAJAAIAgBNgAgEgPIgJAVIAZAAIgIgTIgEgRIgEAPg");
	this.shape_11.setTransform(126.4,159.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAnIgKgRIgIgKIgDgGIgFgCIgGAAIgMAAIAAAjIgKAAIAAhNIAhAAQAKAAAGACQAFACAEAGQADAFAAAGQAAAJgGAGQgFADgLACIAGAEQAFAEAEAGIANAWgAgXgDIAXAAQAFAAAEgCQAEgBACgDQACgEAAgEQAAgFgEgEQgEgDgJAAIgXAAg");
	this.shape_12.setTransform(119.1,159.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAjQgJgFgFgJQgFgKAAgLQAAgKAFgKQAFgKAJgEQAJgFAKAAQAIAAAHACQAHADAEAFQAEAFACAIIgKADQgBgGgDgEQgDgDgFgCQgEgCgGAAQgGAAgFACQgFACgDADIgFAIQgDAIAAAHQAAAKADAHQAEAHAHADQAHAEAGAAQAHAAAGgDIAKgFIAAgPIgXAAIAAgIIAhAAIAAAcQgIAGgIADQgIADgJAAQgJAAgKgFg");
	this.shape_13.setTransform(110.3,159.2);

	this.instance = new lib.ClipGroup0_9();
	this.instance.setTransform(82,302,1,1,0,0,0,80,300);

	this.instance_1 = new lib.ClipGroup0_2_0();
	this.instance_1.setTransform(82,302,1,1,0,0,0,80,300);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAfQgIgGgCgLIAMgCQABAHAFAEQAEAEAGAAQAJAAAEgEQAEgDAAgFQAAgEgEgCQgCgCgKgCQgLgDgFgCQgFgBgDgEQgDgFAAgFQAAgFADgEQACgEADgCIAIgEQAFgBAFAAQAHAAAGACQAGADADAEQADAEABAHIgMABQAAgFgEgDQgEgDgGAAQgHAAgEACQgDADAAAEQAAAAAAABQAAAAAAABQAAABABAAQAAAAAAABIAFADIAIADIASAGQAFAAADAEQADAEAAAGQAAAGgEAFQgDAGgHACQgGADgJAAQgLAAgHgFg");
	this.shape_14.setTransform(111.7,552.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAsQgGgGAAgJQAAgFADgFQACgDAEgEQADgCAFgBIALgCQAMgCAHgCIAAgDQAAgFgDgDQgFgFgIAAQgHAAgEAEQgEADgCAGIgMAAQACgIADgFQAEgFAHgCQAHgCAHgBQAJABAGACQAFACADADQACAEABAEIABAJIAAAQIABAVIADAIIgNAAIgCgIQgHAFgGADQgEACgHAAQgLAAgHgFgAgBARIgLACQgDACgBACQgCACAAADQAAAFADADQAEAEAHAAQAFAAAFgDQAGgEACgFQACgEAAgHIAAgFQgGADgLACgAgFgeIAHgSIAPAAIgOASg");
	this.shape_15.setTransform(105.2,551.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhAwIAAhPIgcBPIgJAAIgchQIAABQIgNAAIAAhfIAUAAIAXBDIACAOIAFgQIAYhBIARAAIAABfg");
	this.shape_16.setTransform(96.5,551.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAbQgJgKAAgRQAAgQAJgJQAJgKANAAQAOAAAJAJQAJAKAAAQIAAADIgyAAQAAALAGAGQAGAHAHAAQAGAAAFgEQAFgDACgIIANACQgDAKgIAGQgIAGgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQAAgJgEgEQgGgHgJAAQgGAAgGAFg");
	this.shape_17.setTransform(84.6,552.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAbQgJgKAAgRQAAgJADgJQAEgJAIgEQAIgEAHAAQAMAAAGAGQAIAFACALIgMACQgBgHgFgEQgEgDgGAAQgGAAgGAGQgGAHAAAMQAAAOAGAGQAFAHAGAAQAIAAAEgFQAFgEABgJIAMACQgCAMgIAHQgIAGgMAAQgMAAgIgJg");
	this.shape_18.setTransform(78.3,552.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAbQgIgKgBgRQAAgSAMgJQAIgIAMAAQAOAAAJAJQAKAKAAAQQAAAMgFAIQgEAIgHAEQgIAEgJAAQgNAAgKgJgAgOgTQgFAHAAAMQAAANAFAHQAGAHAIAAQAJAAAFgHQAGgHAAgNQAAgMgGgGQgGgHgIAAQgIAAgGAGg");
	this.shape_19.setTransform(71.6,552.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAjIAAgoQAAgIgBgDQgCgEgDgCQgDgCgFAAQgGAAgGAFQgFAFAAANIAAAkIgMAAIAAhEIAKAAIAAAKQAJgMAMAAQAHABAEACQAGACACAEQADAEABAEIABAMIAAApg");
	this.shape_20.setTransform(64.7,552.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAbQgJgKABgRQgBgSALgJQAKgIALAAQAOAAAJAJQAJAKAAAQQAAAMgDAIQgFAIgHAEQgJAEgIAAQgNAAgKgJgAgOgTQgFAHgBAMQABANAFAHQAGAHAIAAQAIAAAGgHQAGgHAAgNQAAgMgGgGQgGgHgIAAQgIAAgGAGg");
	this.shape_21.setTransform(57.8,552.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVArQgKgGgFgMQgFgMgBgNQAAgOAHgMQAFgLALgGQAKgGALABQAPAAAKAHQAKAHAEAOIgNACQgDgKgGgFQgHgEgKgBQgJAAgIAGQgHAFgDAJQgDAJAAAJQAAALAEAKQADAIAIAFQAHAFAHAAQALgBAHgGQAIgGACgMIAOADQgFAQgKAJQgLAIgPAAQgNAAgKgHg");
	this.shape_22.setTransform(49.9,551.6);

	this.instance_2 = new lib.ClipGroup0_3();
	this.instance_2.setTransform(82,302,1,1,0,0,0,80,300);

	this.instance_3 = new lib.ClipGroup0_4();
	this.instance_3.setTransform(81.9,554.3,1,1,0,0,0,48.6,10.7);

	this.instance_4 = new lib.ClipGroup0_5();
	this.instance_4.setTransform(82,302,1,1,0,0,0,80,300);

	this.instance_5 = new lib.ClipGroup0_6();
	this.instance_5.setTransform(82.2,556,1,1,0,0,0,85.3,47.4);

	this.instance_6 = new lib.ClipGroup0_7();
	this.instance_6.setTransform(85.3,302,1,1,0,0,0,83.3,300);

	this.text = new cjs.Text(" ", "17px 'Arial'", "#424242");
	this.text.lineHeight = 22;
	this.text.setTransform(150.1,349.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_1},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,2,174.7,601.4);


// stage content:
(lib.AllState = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(7));

	// text
	this.instance = new lib.text1();
	this.instance.setTransform(81.5,359.5,1,1,0,0,0,72.9,36.4);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(81.5,359.5,1,1,0,0,0,72.9,36.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.text3();
	this.instance_2.setTransform(81.5,359.5,1,1,0,0,0,72.9,36.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({alpha:0},5).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(24).to({alpha:0},6).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).wait(24).to({alpha:0},5).wait(1));

	// bk
	this.instance_3 = new lib.ClipGroup0();
	this.instance_3.setTransform(148,306,1,1,0,0,0,150,309);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("EAMlAu9I5JAAMAAAhd5IZJAAg");
	this.shape.setTransform(79.5,299.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).wait(91));

	// bkcolor
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAC343").s().p("AseayMAAAg1jIY9AAMAAAA1jg");
	this.shape_1.setTransform(80.5,429);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0FA6DF").s().p("AseayMAAAg1jIY9AAMAAAA1jg");
	this.shape_2.setTransform(80.5,428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},30).to({state:[{t:this.shape_1}]},31).wait(30));

	// Layer 5
	this.instance_4 = new lib.crew();
	this.instance_4.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.9,298,174.7,603);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;