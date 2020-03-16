(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_", frames: [[0,0,600,500],[1675,1394,333,331],[335,1454,333,331],[0,1501,333,331],[670,1720,333,331],[1131,388,333,331],[1005,1727,333,331],[1340,1727,333,331],[602,455,333,331],[0,502,333,331],[1675,1727,333,331],[937,721,333,331],[1272,728,333,331],[1607,728,333,331],[335,788,333,331],[0,835,333,331],[670,1054,333,331],[1005,1061,333,331],[1340,1061,333,331],[1675,1061,333,331],[335,1121,333,331],[0,1168,333,331],[670,1387,333,331],[1005,1394,333,331],[1340,1394,333,331],[369,3377,527,68],[1005,2722,333,329],[1340,2722,333,329],[1675,2722,333,329],[335,2780,333,329],[0,2827,333,329],[0,2165,333,329],[670,3046,333,329],[670,2384,333,329],[1005,2391,333,329],[1340,2391,333,329],[1675,2391,333,329],[335,2449,333,329],[0,2496,333,329],[670,2715,333,329],[1005,3053,333,329],[1340,3053,333,329],[1675,3053,333,329],[335,1787,333,329],[0,1834,333,329],[670,2053,333,329],[1005,2060,333,329],[1340,2060,333,329],[1675,2060,333,329],[335,2118,333,329],[0,3310,367,151],[1479,372,336,354],[1131,0,346,386],[1479,0,359,370],[602,0,527,453],[0,3158,419,150]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Background = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer1 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer10 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer11 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer12 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer13 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer14 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer15 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer16 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer17 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer18 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer19 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer2 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer20 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer21 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer22 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer23 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer24 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer3 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer4 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer5 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer6 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer7 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer8 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Confetii1_lLayer9 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CTA = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Layer10 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Layer11 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Layer12 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Layer13 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Layer14 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Layer15 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Layer16 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Layer17 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Layer18 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Layer19 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Layer20 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Layer21 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Layer22 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Layer23 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Layer24 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Layer5 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Layer6 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Layer7 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Layer8 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Layer9 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Lovepartyoutfitsbutnotimetoshopforthem_ = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Outfit1 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Outfit2 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Outfit3 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.trunk1 = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Yourpersonalstylistcanshipoutfitstoyouasoftenasyoud = function() {
	this.spriteSheet = ss["TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"];
	this.gotoAndStop(55);
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


(lib.CTA_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(-101,-678);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_MC, new cjs.Rectangle(-101,-678,527,68), null);


(lib.ConfettiNew2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{one:0,two:4,three:45,four:72});

	// timeline functions:
	this.frame_0 = function() {
		this.startTime = new Date();
		this.currTime = new Date();
		this.timeDiff = endTime - startTime;
		
		this.stop();
	}
	this.frame_1 = function() {
		if(Math.random() > .80) this.gotoAndPlay(80);
	}
	this.frame_2 = function() {
		if(Math.random() > .50) this.gotoAndPlay(50);
	}
	this.frame_3 = function() {
		if(Math.random() > .30) this.gotoAndPlay(30);
	}
	this.frame_47 = function() {
		this.currTime = new Date();
		this.timeDiff = this.currTime - this.startTime;
		
		if(this.timeDiff > 15000) {
			this.gotoAndStop(1);
		} else {
		
		
		if(Math.random() > .7) this.gotoAndPlay("two");
		}
	}
	this.frame_89 = function() {
		this.currTime = new Date();
		this.timeDiff = this.currTime - this.startTime;
		
		if(this.timeDiff > 15000) {
			this.gotoAndStop(1);
		} else {
		
		
		if(Math.random() > .7) this.gotoAndPlay("four");
		}
	}
	this.frame_112 = function() {
		this.gotoAndPlay("three");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(44).call(this.frame_47).wait(42).call(this.frame_89).wait(23).call(this.frame_112).wait(72));

	// Layer 3
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(3,2);

	this.instance_1 = new lib.Layer2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,2);

	this.instance_2 = new lib.Layer3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,2);

	this.instance_3 = new lib.Layer4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3,2);

	this.instance_4 = new lib.Layer5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3,2);

	this.instance_5 = new lib.Layer6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3,2);

	this.instance_6 = new lib.Layer7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3,2);

	this.instance_7 = new lib.Layer8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(3,2);

	this.instance_8 = new lib.Layer9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(3,2);

	this.instance_9 = new lib.Layer10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(3,2);

	this.instance_10 = new lib.Layer11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(3,2);

	this.instance_11 = new lib.Layer12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(3,2);

	this.instance_12 = new lib.Layer13();
	this.instance_12.parent = this;
	this.instance_12.setTransform(3,2);

	this.instance_13 = new lib.Layer14();
	this.instance_13.parent = this;
	this.instance_13.setTransform(3,2);

	this.instance_14 = new lib.Layer15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(3,2);

	this.instance_15 = new lib.Layer16();
	this.instance_15.parent = this;
	this.instance_15.setTransform(3,2);

	this.instance_16 = new lib.Layer17();
	this.instance_16.parent = this;
	this.instance_16.setTransform(3,2);

	this.instance_17 = new lib.Layer18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(3,2);

	this.instance_18 = new lib.Layer19();
	this.instance_18.parent = this;
	this.instance_18.setTransform(3,2);

	this.instance_19 = new lib.Layer20();
	this.instance_19.parent = this;
	this.instance_19.setTransform(3,2);

	this.instance_20 = new lib.Layer21();
	this.instance_20.parent = this;
	this.instance_20.setTransform(3,2);

	this.instance_21 = new lib.Layer22();
	this.instance_21.parent = this;
	this.instance_21.setTransform(3,2);

	this.instance_22 = new lib.Layer23();
	this.instance_22.parent = this;
	this.instance_22.setTransform(3,2);

	this.instance_23 = new lib.Layer24();
	this.instance_23.parent = this;
	this.instance_23.setTransform(3,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},19).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,2,333,329);


(lib.ConfettiNew1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"one":0,"two":4,"three":45,"four":72});

	// timeline functions:
	this.frame_0 = function() {
		this.startTime = new Date();
		this.currTime = new Date();
		this.timeDiff = endTime - startTime;
		
		this.stop();
	}
	this.frame_1 = function() {
		if(Math.random() > .80) this.gotoAndPlay(80);
	}
	this.frame_2 = function() {
		if(Math.random() > .50) this.gotoAndPlay(50);
	}
	this.frame_3 = function() {
		if(Math.random() > .30) this.gotoAndPlay(30);
	}
	this.frame_47 = function() {
		this.currTime = new Date();
		this.timeDiff = this.currTime - this.startTime;
		
		if(this.timeDiff > 15000) {
			this.gotoAndStop(1);
		} else {
		
		
		if(Math.random() > .7) this.gotoAndPlay("two");
		}
	}
	this.frame_89 = function() {
		this.currTime = new Date();
		this.timeDiff = this.currTime - this.startTime;
		
		if(this.timeDiff > 15000) {
			this.gotoAndStop(1);
		} else {
		
		
		if(Math.random() > .7) this.gotoAndPlay("four");
		}
	}
	this.frame_112 = function() {
		this.gotoAndPlay("three");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(44).call(this.frame_47).wait(42).call(this.frame_89).wait(23).call(this.frame_112).wait(1));

	// Layer 1
	this.instance = new lib.Confetii1_lLayer1();
	this.instance.parent = this;

	this.instance_1 = new lib.Confetii1_lLayer2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Confetii1_lLayer3();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Confetii1_lLayer4();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Confetii1_lLayer5();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Confetii1_lLayer6();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Confetii1_lLayer7();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Confetii1_lLayer8();
	this.instance_7.parent = this;

	this.instance_8 = new lib.Confetii1_lLayer9();
	this.instance_8.parent = this;

	this.instance_9 = new lib.Confetii1_lLayer10();
	this.instance_9.parent = this;

	this.instance_10 = new lib.Confetii1_lLayer11();
	this.instance_10.parent = this;

	this.instance_11 = new lib.Confetii1_lLayer12();
	this.instance_11.parent = this;

	this.instance_12 = new lib.Confetii1_lLayer13();
	this.instance_12.parent = this;

	this.instance_13 = new lib.Confetii1_lLayer14();
	this.instance_13.parent = this;

	this.instance_14 = new lib.Confetii1_lLayer15();
	this.instance_14.parent = this;

	this.instance_15 = new lib.Confetii1_lLayer16();
	this.instance_15.parent = this;

	this.instance_16 = new lib.Confetii1_lLayer17();
	this.instance_16.parent = this;

	this.instance_17 = new lib.Confetii1_lLayer18();
	this.instance_17.parent = this;

	this.instance_18 = new lib.Confetii1_lLayer19();
	this.instance_18.parent = this;

	this.instance_19 = new lib.Confetii1_lLayer20();
	this.instance_19.parent = this;

	this.instance_20 = new lib.Confetii1_lLayer21();
	this.instance_20.parent = this;

	this.instance_21 = new lib.Confetii1_lLayer22();
	this.instance_21.parent = this;

	this.instance_22 = new lib.Confetii1_lLayer23();
	this.instance_22.parent = this;

	this.instance_23 = new lib.Confetii1_lLayer24();
	this.instance_23.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},19).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333,331);


(lib.cloths3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Outfit3();
	this.instance.parent = this;
	this.instance.setTransform(70,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloths3_mc, new cjs.Rectangle(70,-146,359,370), null);


(lib.clothes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Outfit1();
	this.instance.parent = this;
	this.instance.setTransform(86,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clothes1_mc, new cjs.Rectangle(86,-135,336,354), null);


(lib.clothes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Outfit2();
	this.instance.parent = this;
	this.instance.setTransform(-159,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clothes_mc, new cjs.Rectangle(-159,-97,346,386), null);


(lib.closedTrunc_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.trunk1();
	this.instance.parent = this;
	this.instance.setTransform(87,-59,0.364,0.364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.closedTrunc_mc, new cjs.Rectangle(87,-59,191.9,165), null);


(lib.captionFrame2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Yourpersonalstylistcanshipoutfitstoyouasoftenasyoud();
	this.instance.parent = this;
	this.instance.setTransform(-31,-191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.captionFrame2_mc, new cjs.Rectangle(-31,-191,419,150), null);


(lib.captionFrame1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Lovepartyoutfitsbutnotimetoshopforthem_();
	this.instance.parent = this;
	this.instance.setTransform(-21,462);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.captionFrame1_mc, new cjs.Rectangle(-21,462,367,151), null);


(lib.background_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(0,1,600,500), null);


// stage content:
(lib.TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* Play a Movie Clip
		Plays the specified movie clip on stage.
		
		Instructions:
		1. Use this code for movie clips that are currently stopped.
		*/
		
		
		this.confetti1_mc.play();
		this.confetti2_mc.play();
		this.confetti3_mc.play();
		this.confetti4_mc.play();
		this.confetti5_mc.play();
		this.confetti6_mc.play();
		this.confetti7_mc.play();
		
		this.confettiwhite1_mc.play();
		this.confettiwhite2_mc.play();
		this.confettiwhite3_mc.play();
		this.confettiwhite4_mc.play();
		this.confettiwhite5_mc.play();
		this.confettiwhite6_mc.play();
		this.confettiwhite6a_mc.play();
		this.confettiwhite7_mc.play();
		this.confettiwhite7a_mc.play();
		this.confettiwhite7b_mc.play();
		this.confettiwhite8_mc.play();
		this.confettiwhite9_mc.play();
		this.confettiwhite10_mc.play();
		this.confettiwhite11_mc.play();
		this.confettiwhite12_mc.play();
		this.confettiwhite13_mc.play();
		this.confettiwhite14_mc.play();
		this.confettiwhite15_mc.play();
		this.confettiwhite16_mc.play();
		this.confettiwhite17_mc.play();
		this.confettiwhite18_mc.play();
		this.confettiwhite19_mc.play();
	}
	this.frame_351 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(350).call(this.frame_351).wait(1));

	// clothes_1
	this.instance = new lib.clothes1_mc();
	this.instance.parent = this;
	this.instance.setTransform(90.8,137.3,0.5,0.5,0,0,0,120,106.5);

	this.instance_1 = new lib.clothes_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(213,102.3,0.5,0.5,0,0,0,120,106.5);

	this.instance_2 = new lib.cloths3_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92,139.3,0.5,0.5,0,0,0,120,106.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},60).to({state:[{t:this.instance_1}]},33).to({state:[{t:this.instance_2}]},34).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_2}]},10).to({state:[]},1).wait(191));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(127).to({_off:false},0).wait(23).to({x:93.5,y:384.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(191));

	// truck
	this.instance_3 = new lib.closedTrunc_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.2,-4.5,0.626,0.626,0,0,0,182.6,92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:182.8,regY:92.6,scaleX:0.62,scaleY:0.62,x:152.2,y:70.7},9,cjs.Ease.get(1)).wait(41).to({alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(101).to({_off:false,regX:182.6,regY:92.5,y:-2.3,alpha:1},0).to({y:70.7},8,cjs.Ease.get(1)).wait(69).to({regX:182.7,scaleX:0.82,scaleY:0.82,x:154.2,y:169.7},20,cjs.Ease.get(1)).wait(94));

	// caption
	this.instance_4 = new lib.captionFrame1_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.3,-441.7,0.5,0.5,0,0,0,156,72.5);

	this.instance_5 = new lib.captionFrame2_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(154,-47,0.5,0.5,0,0,0,168.5,225);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-94.7},24,cjs.Ease.get(1)).wait(26).to({alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(292));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(161).to({_off:false},0).to({x:150,y:300},18,cjs.Ease.get(1)).wait(59).to({_off:true},1).wait(113));

	// cta
	this.instance_6 = new lib.CTA_MC();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149,564,0.5,0.5,0,0,0,154,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(352));

	// confetti_1
	this.confettiwhite14_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite14_mc.parent = this;
	this.confettiwhite14_mc.setTransform(278,82,0.015,0.015,0,0,0,173.2,171.4);

	this.confettiwhite13_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite13_mc.parent = this;
	this.confettiwhite13_mc.setTransform(268.1,52,0.015,0.015,-30,0,0,173.3,174.6);

	this.confettiwhite11_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite11_mc.parent = this;
	this.confettiwhite11_mc.setTransform(243,41.1,0.015,0.015,120,0,0,174.2,170.2);

	this.confettiwhite10_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite10_mc.parent = this;
	this.confettiwhite10_mc.setTransform(220.1,35,0.015,0.015,-45,0,0,172.1,173.6);

	this.confettiwhite12_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite12_mc.parent = this;
	this.confettiwhite12_mc.setTransform(279,21,0.015,0.015,-120,0,0,170.3,173.1);

	this.confettiwhite9_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite9_mc.parent = this;
	this.confettiwhite9_mc.setTransform(233.1,23,0.015,0.015,0,0,0,176.7,171.6);

	this.confettiwhite19_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite19_mc.parent = this;
	this.confettiwhite19_mc.setTransform(277.1,184.1,0.015,0.015,30,0,0,176,173.3);

	this.confettiwhite18_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite18_mc.parent = this;
	this.confettiwhite18_mc.setTransform(236,181,0.015,0.015,0,0,0,173.2,171.4);

	this.confettiwhite15_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite15_mc.parent = this;
	this.confettiwhite15_mc.setTransform(232,161.1,0.015,0.015,-30,0,0,173.3,174.6);

	this.confettiwhite16_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite16_mc.parent = this;
	this.confettiwhite16_mc.setTransform(256,158,0.015,0.015,0,0,0,173.2,171.4);

	this.confettiwhite17_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite17_mc.parent = this;
	this.confettiwhite17_mc.setTransform(275,153,0.015,0.015,0,0,0,173.2,171.4);

	this.confettiwhite8_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite8_mc.parent = this;
	this.confettiwhite8_mc.setTransform(46,182,0.015,0.015,0,0,0,173.2,171.4);

	this.confettiwhite7b_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite7b_mc.parent = this;
	this.confettiwhite7b_mc.setTransform(36.1,159,0.015,0.015,-60,0,0,175.9,173.2);

	this.confettiwhite7a_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite7a_mc.parent = this;
	this.confettiwhite7a_mc.setTransform(62.9,139.1,0.015,0.015,45,0,0,176.8,173.6);

	this.confettiwhite7_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite7_mc.parent = this;
	this.confettiwhite7_mc.setTransform(28,144,0.015,0.015,-45,0,0,174.5,171.2);

	this.confettiwhite6_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite6_mc.parent = this;
	this.confettiwhite6_mc.setTransform(33,122,0.015,0.015,60,0,0,174.8,171.8);

	this.confettiwhite6a_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite6a_mc.parent = this;
	this.confettiwhite6a_mc.setTransform(36.1,74,0.015,0.015,-120,0,0,173.2,174.8);

	this.confettiwhite5_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite5_mc.parent = this;
	this.confettiwhite5_mc.setTransform(97,50,0.015,0.015,0,0,0,173.2,171.4);

	this.confettiwhite3_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite3_mc.parent = this;
	this.confettiwhite3_mc.setTransform(24,45,0.015,0.015,90,0,0,173.2,171.4);

	this.confettiwhite4_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite4_mc.parent = this;
	this.confettiwhite4_mc.setTransform(57,51,0.015,0.015,-75,0,0,170.2,173.5);

	this.confettiwhite2_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite2_mc.parent = this;
	this.confettiwhite2_mc.setTransform(84,26,0.015,0.015,0,0,0,173.2,171.4);

	this.confetti7_mc = new lib.ConfettiNew1_mc();
	this.confetti7_mc.parent = this;
	this.confetti7_mc.setTransform(279,157,0.015,0.015,-58.2,0,0,165.3,159.3);

	this.confetti6_mc = new lib.ConfettiNew1_mc();
	this.confetti6_mc.parent = this;
	this.confetti6_mc.setTransform(239,26,0.015,0.015,83.6,0,0,162.8,158.7);

	this.confetti5_mc = new lib.ConfettiNew1_mc();
	this.confetti5_mc.parent = this;
	this.confetti5_mc.setTransform(274,17,0.015,0.015,143.6,0,0,164,158.2);

	this.confetti4_mc = new lib.ConfettiNew1_mc();
	this.confetti4_mc.parent = this;
	this.confetti4_mc.setTransform(48,175,0.015,0.015,143.6,0,0,164,158.2);

	this.confetti3_mc = new lib.ConfettiNew1_mc();
	this.confetti3_mc.parent = this;
	this.confetti3_mc.setTransform(37,128,0.015,0.015,143.6,0,0,164,158.2);

	this.confetti2_mc = new lib.ConfettiNew1_mc();
	this.confetti2_mc.parent = this;
	this.confetti2_mc.setTransform(53,57,0.015,0.015,143.6,0,0,164,158.2);

	this.confettiwhite1_mc = new lib.ConfettiNew2_mc();
	this.confettiwhite1_mc.parent = this;
	this.confettiwhite1_mc.setTransform(48,29,0.015,0.015,0,0,0,173.2,171.4);

	this.confetti1_mc = new lib.ConfettiNew1_mc();
	this.confetti1_mc.parent = this;
	this.confetti1_mc.setTransform(81,20,0.015,0.015,143.6,0,0,164,158.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.confetti1_mc},{t:this.confettiwhite1_mc},{t:this.confetti2_mc},{t:this.confetti3_mc},{t:this.confetti4_mc},{t:this.confetti5_mc},{t:this.confetti6_mc},{t:this.confetti7_mc},{t:this.confettiwhite2_mc},{t:this.confettiwhite4_mc},{t:this.confettiwhite3_mc},{t:this.confettiwhite5_mc},{t:this.confettiwhite6a_mc},{t:this.confettiwhite6_mc},{t:this.confettiwhite7_mc},{t:this.confettiwhite7a_mc},{t:this.confettiwhite7b_mc},{t:this.confettiwhite8_mc},{t:this.confettiwhite17_mc},{t:this.confettiwhite16_mc},{t:this.confettiwhite15_mc},{t:this.confettiwhite18_mc},{t:this.confettiwhite19_mc},{t:this.confettiwhite9_mc},{t:this.confettiwhite12_mc},{t:this.confettiwhite10_mc},{t:this.confettiwhite11_mc},{t:this.confettiwhite13_mc},{t:this.confettiwhite14_mc}]}).wait(352));

	// background
	this.instance_7 = new lib.background_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,300,0.5,0.5,0,0,0,300,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(352));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-122,300,498);
// library properties:
lib.properties = {
	id: '140CF2996A2E43489DE5DE0EB0E09475',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_.png", id:"TradeDesk_Women_HTML_300x250_PartyFlatlayEvergreen_atlas_P_"}
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