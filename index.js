(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,794,119,132],[162,0,35,159],[121,794,81,145],[0,0,160,600],[0,602,160,190]]}
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



(lib.skyscrapercinnamonrolls = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapercranberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapergreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapertable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.skyscraperturkey = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
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


(lib.turkeyatasteof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscraperturkey();
	this.instance.parent = this;
	this.instance.setTransform(-80,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.turkeyatasteof, new cjs.Rectangle(-80,-95,160,190), null);


(lib.trynew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKATIgVg2QgJgYgJgEIgEgCQgKgEAAgHQAAgHAJgCQAIgDAbAAQAXAAAJADQAIACAAAHIgBAGIgDADIgGACQgHADAAAEIAEALIANAkIAQAhQADAIADAAQACAAADgFIAIgPIASgrQAHgRAAgFIgCgHIgEgDIgEgCQgJgDABgGQgBgHAJgCQAHgDAWAAQASAAAHADQAIACAAAHQgBAHgIADIgGACQgJAEgQAkIgDAIIgHAQQgnBZgMAAQgMAAgehGgAhlAKIgFgLIgMgdQgKgdgIgEIgFgCQgKgEAAgHQAAgHAJgCQAIgDAcAAQAYAAAIADQAIACAAAHIgBAGIgDADIgGACQgGADgBAEIAFAOIAMAhIAPAgQAEAJADAAQAFAAAFgLIAFgMIAEgFQACgCAEAAQAEAAADACQACADAAAEQAAAFgEAJQgSAogIANQgJANgGAAQgMAAgihPg");
	this.shape.setTransform(54.1,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BBQgZgZAAglQAAgoAZgaQAagaAmAAQAhAAAUATQATATAAAgQAAALgDADQgDAEgNAAIhBAAQgGAAgDgDQgDgDAAgFQAAgEADgDQADgCAFAAIAkAAIAJgBQACgCAAgEQAAgQgLgMQgMgLgPAAQgVAAgKASQgJASAAAZQAAAaANAUQAOAUAVAAQANAAAJgDQAJgDAIgGIAGgFQAJgHAFAAQADAAADADQACACAAAEQAAAEgEAGQgEAGgIAGQgPAMgOAGQgOAFgQAAQgkAAgYgZg");
	this.shape_1.setTransform(30.5,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAwIgFgIIglguIgjgtIgPgQIAAALIAAAYIAAAQQAABLACAUQACATAFAAQAFAAAFAEQAFAEAAAEQAAAIgIADQgJADgUAAQgVAAgIgDQgIgDAAgIQAAgGAKgEQAJgDABgDQADgDABgZIABhEIgBhAQgCgagCgDQgBgDgJgEQgKgDAAgHQAAgHAIgCQAIgDAVAAIATABIAHACIAZAeIAiAtIAmAvIAbAgIASAUIABgHIAAgNIgBhVQgCgjgBgGIgCgEIgEgCQgKgEgCgCQgDgDAAgEQAAgHAHgCQAHgDAYAAQAVAAAHADQAIACAAAHQAAAEgCACIgHAFIgEABQgHADgBAEQgCAHgBAiIgBBoIAAAgIAAAWQAAANgBADQgCADgFAAQgSAAg+hNg");
	this.shape_2.setTransform(8,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPByQgIgHAAgLQAAgIAGgHQAGgGAIAAIAIABIAFAEIAFAHQAEAHAEAAQAJAAAJgNQAJgNAAgNQAAgPgMgcIgCgEIgcg8IgQghQgDgGgKgFIAAAAQgGgCgCgCQgCgDAAgEQAAgHAJgDQAJgDAZAAQAaAAAIADQAIACAAAHIgBAGIgDADIgGADQgHACAAADIAEANIAOAjIANAgQAFAJACAAQACAAAEgJIALgbIANgiQAEgMAAgFQAAgFgKgFQgKgGAAgEQAAgGAIgDQAIgCAUAAQAVAAAHADQAHACAAAHQAAAHgKACIgHACQgKAGgLAdIgFANIgWA3QgcBIgSAWQgSAVgZAAQgNAAgIgHg");
	this.shape_3.setTransform(-23.7,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgFQACgHAAgNIAAgMIAAgNIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgDQAIAAADAXIAAAEIABAAQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKADgXgBQgaABgJgDg");
	this.shape_4.setTransform(-38.6,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjB7QgKgDAAgIQAAgHAJgDQAJgEACgCQACgDABgdIABhRIgBgtIgBgcQAAgFgDgBQgDgCgHAAIgIAAQgMAAgGADQgHADgFAHIgFALIgGAMIgEAFQgDACgEAAQgFAAgCgEQgCgFgBgKQABgXAFgOQAFgOAIAAIACAAQAOACAVAAIBlAAQAVAAANgCIADAAQAIAAAFAOQAFAOABAXQAAAKgDAFQgCAEgFAAIgGgCIgGgFIgEgMIgGgLQgFgHgGgDQgIgDgLAAIgIAAQgHAAgCACQgDABgBAFIgCAcIAAAtIABBRQABAdACADQACACAJAEQAJADAAAHQABAIgKADQgKADgbAAQgaAAgJgDg");
	this.shape_5.setTransform(-56.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-22.5,149.8,45.1);


(lib.tastingevent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgEABg");
	this.shape.setTransform(53.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_1.setTransform(43.6,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_2.setTransform(33.9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAxIgDgGIgFgLIgHgPIgGgQIgHgPIgGgOIgEgKIgCgFIABgDIAEgCIAEgBIADAAIAEABIADADIAUAyIABABIABABQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAIAUgyIADgEQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAEAAIADABIAEADIABADIgCAEIgEAKIgGAOIgHAPIgHARIgGAPIgFALIgDAGIgBACIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_3.setTransform(24.2,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_4.setTransform(15.3,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAzIgLgDIgJgFIgIgFQgEgEgCgEIgFgJQgFgKAAgLIABgKIAEgKQAEgJAHgIIAIgGIAJgFIALgCIAJgBIAMABIALADQALAFAHAJIABABIgCAEIgDAEIgEACIgDACQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIgGgEIgIgFQgFgCgHAAQgGAAgGADQgGADgFAFQgFAEgDAGQgCAHAAAGQAAAHACAGQADAGAFAFQAFAFAGADQAGACAGAAIAHAAIAHgCQAEAAADgDIAEgGIABgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgDgBIgSAAIgDgBIgBgEIAAgDIAAgEIABgDIACgCIArAAIABABIACABQACAEAAAFIAAAEIgBAFQgDAHgFAGQgFAGgHAEQgGAEgHACQgIACgIAAIgJgBg");
	this.shape_5.setTransform(-0.4,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_6.setTransform(-11.4,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAA0IgDAAQgEAAgBgDIAAhgIACgDIAEgBIADAAIADAAQAEAAABAEIAABfIgCADIgDABg");
	this.shape_7.setTransform(-18.9,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgEABg");
	this.shape_8.setTransform(-25.3,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAxQgKgFgJgHIgBgCIAAgDIABgCIAEgEIADgDIADgBQABAAABABQAAAAABAAQAAAAABABQAAAAABAAIAHAFIAIAEQAFACAGAAIAIgBIAIgCIAFgFQACgDAAgEQAAgEgCgDIgIgDIgKgDIgKgBIgMgDQgHgBgEgDQgEgDgDgEQgDgGAAgHQAAgIAEgGQAEgGAGgDQAGgEAHgCQAIgBAGAAIAJABIAKABIAKAFIAIAFIAAACIABACIgCADIgCADIgFADIgDABIgDgBQgFgEgHgDQgGgCgGAAIgHAAIgGACQgDABgCADQgCADgBAEQAAAFAFADQAFADAHAAIAPADQAIABAIACQAGADAFAFQAFAFAAALQAAAIgEAHQgEAGgHAEQgGAEgIACQgIACgGAAQgLAAgLgDg");
	this.shape_9.setTransform(-34.3,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAnAzIgDAAIgEgBQgEAAgBgDIgFgOIgCgCIgDAAIghAAIgBAAIgBABIgCABIgBAAIgGAOIgBACIgDABIgDAAIgDABIgCgBIgEAAIgCgBIgBgBIAohfIADgCIADgBIAEAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAIAnBeIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDABgAgBgOIgBADIgDAFIgCAFIgCAFIgCAFIgBACIABACIACABIATAAIACgBIABgBIgCgFIgDgIIgDgIIgDgFIgCgBIAAAAg");
	this.shape_10.setTransform(-44,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgEABg");
	this.shape_11.setTransform(-53.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-9.3,118.7,18.7);


(lib.skyscrapertableatasteof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapertable();
	this.instance.parent = this;
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyscrapertableatasteof, new cjs.Rectangle(-80,-300,160,600), null);


(lib.skyscrapercranberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapercranberries();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyscrapercranberries_1, new cjs.Rectangle(-17.5,-79.5,35,159), null);


(lib.skyscrapercinnamonrolls_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapercinnamonrolls();
	this.instance.parent = this;
	this.instance.setTransform(-59.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyscrapercinnamonrolls_1, new cjs.Rectangle(-59.5,-66,119,132), null);


(lib.novfourthfifth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAxQgIgEgIgFIgBgEIABgDIADgEIAEgCIADgBIAEABIAFAEIAHADQAEABAFAAQADAAAEgBQAEgCADgDQADgCABgEQACgEAAgEQAAgFgCgDQgBgEgDgDQgCgBgEgBQgEgCgDAAIgIABIgGADIgEACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgGgBQgCAAgBgDIAEgsQABgDACgBQAAgBABAAQABgBAAAAQABAAAAAAQABgBAAAAIAYABIAYAAQAEAAABADQACADAAACQAAAEgCABQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIggAAQgGAAgBAEQgCADAAAEIABAEIADAAIAGAAIAGgBQAHAAAGADQAHADAEAEQAFAFACAFQADAHAAAHQAAAJgEAGQgDAHgFAGQgGAEgHADQgHACgHABQgLAAgIgDg");
	this.shape.setTransform(30.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAIIgCgBIgCgCIAAgDIgBgCIABgCIAAgCIACgCIABgBIAaAAIACABIABACIABACIABACIgBAEIgDADIgCABg");
	this.shape_1.setTransform(19.8,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIA0IgCgDIAAgQQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAIggAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIABgDIAehEIADgCIAEgBIACABIADABIACACIABADIgBAFIgEAIIgEALIgFALIgEAJIgCAFIgBABIAAABIABADIADACIAEAAIAFAAIAEgDQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgQIABgCIADgBIADAAIADAAIACAAIADABIABABIABACIAAAPIABADQAAABABAAQAAAAAAABQABAAAAAAQABAAABAAIAHAAQADACAAADIABAGQAAADgCABIgDACIgFAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABIgBACIgBACIABAKIgBAHQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgIABg");
	this.shape_2.setTransform(9.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(-1.5,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBAxIgDgGIgFgLIgHgPIgGgQIgHgPIgGgOIgEgKIgCgFIABgDIAEgCIAEgBIADAAIAEABIADADIAUAyIABABIABABQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAUgyIADgEQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAEAAIADABIAEADIABADIgCAEIgEAKIgGAOIgHAPIgHARIgGAPIgFALIgDAGIgBACIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_4.setTransform(-8,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAzIgKgDIgJgEIgIgHQgIgHgEgJIgDgKIgBgLIABgKIADgKQAEgJAIgHIAIgGIAJgFIAKgDIAKgBIALABIAKADQAKAEAHAHQAIAHAEAJQAEAKAAAKIgBALIgDAKQgEAJgIAHQgHAHgKAEIgKADIgLABIgKgBgAgMgfQgGADgFAEQgFAFgDAGQgCAHAAAGQAAAHACAHQADAGAFAFQAFAEAGADQAGADAGAAQAHAAAGgDQAGgDAFgEQAFgFADgGQACgHAAgHQAAgGgCgHQgDgGgFgFQgFgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(-18.4,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_6.setTransform(-29.6,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-9.3,74,18.7);


(lib.nearyou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAxQgJgDgGgGQgFgGgEgIIgDgIIgBgJIABgbIAAgcIABgDIADgBIAEgBIADAAIAFABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAzQAAAGACAFQABAFAEAFQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEABgGQACgFAAgGIAAgzQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIADAAIAEAAIADACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAA3IgBAJIgDAIQgDAIgHAGQgFAGgJADQgIADgJAAQgIAAgIgDg");
	this.shape.setTransform(32.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAzIgKgDIgJgEIgIgHQgIgHgEgJIgDgKIgBgLIABgKIADgKQAEgJAIgHIAIgGIAJgFIAKgDIAKgBIALABIAKADQAKAEAHAHQAIAHAEAJQAEAKAAAKIgBALIgDAKQgEAJgIAHQgHAHgKAEIgKADIgLABIgKgBgAgMgfQgGADgFAEQgFAFgDAGQgCAHAAAGQAAAHACAHQADAGAFAFQAFAEAGADQAGADAGAAQAHAAAGgDQAGgDAFgEQAFgFADgGQACgHAAgHQAAgGgCgHQgDgGgFgFQgFgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(21.3,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDA1IgCgBIgCgBIgBgCIAAgkIgBgGIgDgFIgdgsIAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIADgDIADgBIAEgBIADABIACACIAUAgIACACIACABIACgBIACgCIAUggIADgDIADgBIAEABIADACIAEACIABADIAAABIgBABIgdAsIgCAGIgBACIAAADIAAAjQgBAEgEAAIgFABg");
	this.shape_2.setTransform(10.8,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAzIgDgBIgCgBIgCgBIgRgaIgCgEIgFgBIgMAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAAAZQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDACIgEAAIgEAAIgEgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAgBIAAhbQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIADgBIAqAAQAIAAAGACQAGADAFAEQAGAEACAHQADAGAAAIQgBAJgDAFQgCAEgFADIgGAGQgEACAAACIAAACIAFAGIAFAIIAFAIIACAFIgBADIgCACIgFACIgDAAgAgUggQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAABIAAAWQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAQAAABABAAQABAAAAAAQABAAAAAAQABAAAAAAIAUAAIAHAAIAHgDQADgCABgEQACgDAAgEQAAgIgGgFIgHgDIgHgBIgUAAIgEABg");
	this.shape_3.setTransform(-2.7,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnAzIgCAAIgGgBQgDAAAAgDIgGgOIgCgCIgCAAIgiAAIgBAAIgBABIgDABIAAAAIgFAOIgCACIgDABIgDAAIgDABIgDgBIgDAAIgCgBIgBgBIAohfIADgCIADgBIAEAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAIAnBeIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDABgAgBgOIgCADIgCAFIgCAFIgCAFIgDAFIAAACIABACIACABIATAAIACgBIABgBIgCgFIgDgIIgEgIIgCgFIgCgBIAAAAg");
	this.shape_4.setTransform(-13.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_5.setTransform(-22.5,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_6.setTransform(-33.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-9.3,81.1,18.7);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.foryour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgFQACgHAAgNIAAgMIAAgNIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgDQAIAAADAXIAAAEIABAAQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKADgXgBQgaABgJgDg");
	this.shape.setTransform(57.5,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBYQgDgDAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgDADQgHAIgLAFQgKAEgMAAQgNAAgLgFQgMgFgHgJQgJgKgDgOQgDgOgBgkIAAgMIAAgMIAAgEQAAgOgCgEQgBgEgHgCIgHgCQgJgDAAgGQAAgEAEgDQADgDAMgEIAYgHIASgCQAFAAACADQABAEAAAHIAAAHIgBBBQAAAiAHAOQAHANASAAQASAAAKgRQAIgSAAgpIAAgNQAAgOgCgEQgCgEgGgCIgHgCQgKgDABgGQAAgEADgDQADgDANgEIAWgHIASgCQAGAAACADQACADAAAIIgBAKIgBBGIAAAeIABALQABAHAJAEIAAAAIAEABQAJADAAAGQAAAEgDADQgDACgIADIgYAIQgMADgGAAQgFAAgCgCg");
	this.shape_1.setTransform(40.1,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BBQgZgaAAgmQAAgmAagaQAagaAmAAQAlAAAYAYQAYAYAAAmQAAAngaAbQgZAbglAAQgmAAgYgZgAgggzQgLAOAAAXQAAAiAPAXQAOAXAUAAQARAAALgOQAKgPAAgXQAAghgOgXQgPgXgUAAQgRAAgKAOg");
	this.shape_2.setTransform(20.2,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkB6QgJgDAAgIQAAgHAKgEIAIgEQAGgEAAhGIABgQIgVghIghg0QgKgOgFgEIgJgEQgMgEAAgGQAAgHAJgDQAIgDAhAAQAiAAAIADQAIADAAAHQAAAGgNAFIgBABIgGADIgBAFQAAAEAHANIAiA1IAegtQAJgPAAgFQAAgFgCgDQgDgDgIgDQgGgCgCgDQgDgCAAgEQAAgHAIgDQAGgDAdAAQAcAAAHADQAIADAAAHQAAAGgKAFIgNAGQgIAGgQAZQgRAZgZArIAAAeQABA6AFADIAIAEQAKAEAAAHQAAAIgJADQgJADgcAAQgaAAgKgDg");
	this.shape_3.setTransform(-0.6,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgFQACgHAAgNIAAgMIAAgNIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgDQAIAAADAXIAAAEIABAAQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKADgXgBQgaABgJgDg");
	this.shape_4.setTransform(-27.5,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BBQgZgaAAgmQAAgmAagaQAagaAmAAQAlAAAYAYQAYAYAAAmQAAAngaAbQgZAbglAAQgmAAgYgZgAgggzQgLAOAAAXQAAAiAPAXQAOAXAUAAQARAAALgOQAKgPAAgXQAAghgOgXQgPgXgUAAQgRAAgKAOg");
	this.shape_5.setTransform(-44.2,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwB8QgJgDAAgHQABgFAHgDIAFgCQAEgCACgGQACgGAAgOIAAgRIAAhTIgUAAQgEAAgBgBQgCgCAAgFIAAgEQAAgFACgBQACgCAEAAIASAAIgCgOIgBgMQAAgbAQgOQAQgPAbAAQAUAAANAJQAMAJAAAOQAAAIgFAEQgEAEgJAAQgFAAgEgCQgFgDgDgEIgDgHQgGgMgKAAQgHAAgDAEQgEAEAAAHIAEAUQADAPAAAMIAZAAQAFAAACABQABACAAAFIAAAEQAAAEgBACQgCACgFAAIgZAAIAABYQABAXABAGQABAHAEACIAHACQAKAEAAAHQAAAGgIADQgJADgZAAQgYAAgJgDg");
	this.shape_6.setTransform(-57.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,-22.5,131.6,45.1);


(lib.flavors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBaIgSgEIgFAEIgFABIgEgBIgEgDQgFgEgFgOQgFgOAAgNQAAgGADgDQADgEAEAAQAIAAAIAOIAHAKQAFAHAJAFQAJADAJABQALgBAIgFQAGgGAAgJQAAgPgcgOIgKgFQgbgNgKgLQgJgLAAgRQAAgWAQgOQAPgPAZAAIAMABIAMADIAIgEIAGgBQAIAAAIAOQAIANAAAPQAAAGgDAEQgDADgFAAQgDAAgEgDQgEgDgGgIQgGgMgGgEQgIgDgJAAQgJgBgHAGQgFAFgBAKQAAAHAHAGQAGAHAUAKIACABQAxAXAAAcQAAAYgSARQgTAQgcAAg");
	this.shape.setTransform(49.6,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgFQACgHAAgNIAAgMIAAgNIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgDQAIAAADAXIAAAEIABAAQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKADgXgBQgaABgJgDg");
	this.shape_1.setTransform(36,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BBQgZgaAAgmQAAgmAagaQAagaAmAAQAlAAAYAYQAYAYAAAmQAAAngaAbQgZAbglAAQgmAAgYgZgAgggzQgLAOAAAXQAAAiAPAXQAOAXAUAAQARAAALgOQAKgPAAgXQAAghgOgXQgPgXgUAAQgRAAgKAOg");
	this.shape_2.setTransform(19.3,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBIQgKgQgYg5IgKgaQgMgggIgEIgGgCQgKgEABgHQgBgHAKgCQAIgDAcAAQAYAAAIADQAJACgBAHIgBAGIgDADIgGACQgGADAAAEIADAOIANAhIAOAhQAEAIADAAQACAAADgFIAHgPIATgrQAHgRAAgFIgCgHIgEgDIgEgCQgJgDAAgGQAAgHAJgCQAHgDAVAAQASAAAIADQAIACAAAHQgBAHgIADIgHACQgHAEgPAiIgFAKIgHAQQgnBZgKAAQgIAAgKgRg");
	this.shape_3.setTransform(0.8,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBRIgJgJIgIAEQgUAOgWAAQgZAAgQgOQgPgPAAgYQAAgbATgPQAVgPAkAAQAIAAAFACQAEADAAAGQAAAKgMAAQgRAAgKAIQgKAIAAAPQAAAOAJAIQAIAIAQAAQAQAAAHgHQAHgIAAgSIAAhBQAAgPgHgIQgGgIgMAAQgIAAgHADQgHAEgHAIIgEAEQgLAOgLAAQgHAAgEgFQgEgEAAgIQAAgQAUgLQAUgLAfAAQATAAAOAFQANAFAIAKQAFAGACALQACAKAAAZIAAA3QABAKABAFQACAEADABIAGACQAKADABAGQAAAIgMAHQgMAGgPAAQgIAAgIgJg");
	this.shape_4.setTransform(-17.3,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcB8QgJgDAAgHQAAgGAHgDIAJgEQADgDABgLIABgiIAAgbIAAggIAAgNQAAgsgBgMQgCgMgEgDIgKgEQgLgDAAgGQAAgEADgDQAEgDAMgEIAXgGIARgDQAFAAACAEQADACAAAJIgBANQgCA+AAA9IABA8QABAMADAEIAKAEQAIADAAAHQAAAGgJADQgIADgXAAQgZAAgIgDg");
	this.shape_5.setTransform(-31.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXB8QgKgDAAgIQABgHAIgEQAKgDACgCQABgEACgaIABhDIgBg/QgCgbgBgDQgCgCgKgEQgIgEgBgHQABgHAHgCQAIgDAeAAIBpAAIARgCIAJgCIAFABIACADQAEAHAEALQACANAAAIQAAAHgCAFQgDAEgFAAQgHAAgHgMIgEgIQgEgFgIgEQgIgCgMAAIgXAAQgQAAgJABQgIADgDAEQgDADgCAMIgBAgIAAAPQABAIABACQABACAFAAIAbAAQAOAAAGgEQAFgEACgLIAAgDQADgSAJAAQAHAAAEAKQADAJAAAhQAAAggDAJQgDAKgIAAQgJAAgDgTIAAgCQgCgLgFgEQgGgEgOAAIgbAAQgEAAgCADQgBADgBALIAAANIABAxQABAKAEACIAIAEQAKAEAAAHQAAAIgJADQgKACgbAAQgcAAgJgCg");
	this.shape_6.setTransform(-46.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-22.5,118.5,45.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AqNYMQktiAjpjoQjpjph/ktQiEk4AAlWQAAlVCEk4QB/ktDpjpQDpjpEth/QE4iEFVAAQFWAAE4CEQEtB/DpDpQDoDpCAEtQCEE4AAFVQAAFWiEE4QiAEtjoDpQjpDoktCAQk4CElWAAQlVAAk4iEg");
	this.shape.setTransform(168,168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,336,336), null);


(lib.findanevent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAzIAAhZIghAAIAAgMIBPAAIAAAMIghAAIAABZg");
	this.shape.setTransform(50.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaAzIg2hTIAABTIgOAAIAAhlIASAAIA1BRIAAhRIAPAAIAABlg");
	this.shape_1.setTransform(40.7,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAzIAAhlIBBAAIAAAMIgzAAIAAAfIAwAAIAAALIgwAAIAAAjIA1AAIAAAMg");
	this.shape_2.setTransform(31.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAzIgohlIAQAAIAeBTIAAAAIAghTIAPAAIgoBlg");
	this.shape_3.setTransform(21.8,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAzIAAhlIBBAAIAAAMIgzAAIAAAfIAwAAIAAALIgwAAIAAAjIA1AAIAAAMg");
	this.shape_4.setTransform(13.1,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAzIg1hTIAABTIgPAAIAAhlIATAAIA1BRIAAhRIAOAAIAABlg");
	this.shape_5.setTransform(-0.7,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjAzIgLgZIgwAAIgKAZIgQAAIAshlIANAAIAsBlgAATANIgTgvIgSAvIAlAAg");
	this.shape_6.setTransform(-11.5,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsAzIAAhlIAjAAQAJAAAKACQAKADAHAHQAIAGAFAKIAEAKIABAMIgBAMIgEALIgFAJQgDAEgFADQgHAGgKADQgMADgHAAgAgeAnIASAAQAJAAAHgDQAIgDAGgFQAGgEADgIIACgHIABgJIgBgIIgCgIQgDgHgGgFQgGgFgIgCQgHgDgJAAIgSAAg");
	this.shape_7.setTransform(-25.5,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAzIg1hTIAABTIgOAAIAAhlIASAAIA1BRIAAhRIAOAAIAABlg");
	this.shape_8.setTransform(-36.8,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAzIAAhlIANAAIAABlg");
	this.shape_9.setTransform(-44.3,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAzIAAhlIA/AAIAAAMIgxAAIAAAgIAuAAIAAALIguAAIAAAug");
	this.shape_10.setTransform(-50,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.findanevent, new cjs.Rectangle(-56.6,-10.9,113.2,21.9), null);


(lib.feast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBoQgJgDgGgGQgGgFgDgKQgCgJAAgaIAAhcIgQAAIgFgBIgCgFIAAgEQAAgGASgPIAHgGIAHgGQASgQAHAAIAEACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAgIAnAAQAEAAACACQABABAAAFIAAAEQAAAFgBACQgCACgEAAIgkAAIgDABIgBAEIAABVQAAAXAEAFQAEAGAKAAQAGAAAIgDIAMgDQAEAAACADQADACAAADQAAAKgPAJQgPAJgSAAQgKAAgIgDg");
	this.shape.setTransform(36.3,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBaIgTgEIgFAEIgGABIgDgBIgDgDQgGgEgFgOQgFgOAAgNQAAgGADgDQADgEAEAAQAIAAAIAOIAHAKQAFAHAJAFQAJADAJABQAMgBAGgFQAHgGAAgJQAAgPgcgOIgKgFQgbgNgJgLQgKgLAAgRQAAgWAPgOQAQgPAaAAIAKABIANADIAIgEIAGgBQAIAAAIAOQAIANAAAPQAAAGgDAEQgDADgEAAQgFAAgDgDQgEgDgFgIQgHgMgHgEQgGgDgKAAQgKgBgFAGQgHAFABAKQAAAHAGAGQAGAHAVAKIACABQAwAXAAAcQAAAYgTARQgSAQgcAAg");
	this.shape_1.setTransform(22.6,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBRIgKgJIgHAEQgVAOgVAAQgZAAgQgOQgQgPAAgYQAAgbAVgPQAUgPAkAAQAIAAAEACQAFADAAAGQAAAKgMAAQgQAAgLAIQgLAIAAAPQABAOAIAIQAKAIAPAAQAQAAAHgHQAHgIAAgSIAAhBQAAgPgGgIQgHgIgLAAQgJAAgHADQgHAEgHAIIgEAEQgKAOgMAAQgHAAgEgFQgEgEAAgIQAAgQAUgLQAUgLAgAAQASAAANAFQAPAFAHAKQAFAGADALQACAKAAAZIAAA3QgBAKACAFQACAEAEABIAEACQALADAAAGQAAAIgLAHQgLAGgQAAQgIAAgIgJg");
	this.shape_2.setTransform(6.2,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BBQgZgZAAglQAAgoAZgaQAagaAmAAQAhAAAUATQATATAAAgQAAALgDADQgDAEgNAAIhBAAQgGAAgDgDQgDgDAAgFQAAgEADgDQADgCAFAAIAkAAIAJgBQACgCAAgEQAAgQgLgMQgMgLgPAAQgVAAgKASQgJASAAAZQAAAaANAUQAOAUAVAAQANAAAJgDQAJgDAIgGIAGgFQAJgHAFAAQADAAADADQACACAAAEQAAAEgEAGQgEAGgIAGQgPAMgOAGQgOAFgQAAQgkAAgYgZg");
	this.shape_3.setTransform(-12.4,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXB8QgKgDAAgIQABgHAIgEQAKgDACgCQABgEACgaIABhDIgBg/QgCgbgBgDQgCgCgKgEQgIgEgBgHQABgHAHgCQAIgDAeAAIBpAAIARgCIAJgCIAFABIACADQAEAHAEALQACANAAAIQAAAHgCAFQgDAEgFAAQgHAAgHgMIgEgIQgEgFgIgEQgIgCgMAAIgXAAQgQAAgJABQgIADgDAEQgDADgCAMIgBAgIAAAPQABAIABACQABACAFAAIAbAAQAOAAAGgEQAFgEACgLIAAgDQADgSAJAAQAHAAAEAKQADAJAAAhQAAAggDAJQgDAKgIAAQgJAAgDgTIAAgCQgCgLgFgEQgGgEgOAAIgbAAQgEAAgCADQgBADgBALIAAANIABAxQABAKAEACIAIAEQAKAEAAAHQAAAIgJADQgKACgbAAQgcAAgJgCg");
	this.shape_4.setTransform(-31.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-22.5,88.9,45.1);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AqeCqIAAlTIU9AAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangle, new cjs.Rectangle(-67.1,-17,134.3,34), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.blackrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgLngtHIXPAAMAAABaPI3PAAg");
	this.shape.setTransform(0,0,1.069,1.037);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-300.5,161,601);


(lib.atasteofgreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapergreens();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-72.5,81,145);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0,0.189,0.189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(24.6,11.2,0.189,0.189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(-2.1,16,0.189,0.189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(24.6,10.9,0.189,0.189);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(-9.2,5.7,0.189,0.189);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-8.4,16.6,0.189,0.189);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(12.2,5.7,0.189,0.189);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(1.3,5.7,0.189,0.189);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.189,0.189,0,0,0,168.1,168.1);
	this.instance.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


// stage content:
(lib.wideskyscraperatasteoffive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		
		console.log("this frame works");
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.rollover_color.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.rollover_color.gotoAndPlay(13);
		}
	}
	this.frame_180 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(130).call(this.frame_180).wait(6));

	// white-logo
	this.instance = new lib.whitelogo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80,37);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:0.06,scaleY:0.06},0).to({scaleX:1.53,scaleY:1.53,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.42,scaleY:1.42,y:36.9},7,cjs.Ease.get(1)).wait(164));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(82.2,302,0.797,0.919,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(186));

	// black-rectangle
	this.instance_1 = new lib.blackrectangle("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(186));

	// fade-from-white
	this.instance_2 = new lib.blackwideskyscraper();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.1,300);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_2.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},9).wait(177));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqLNwIAAjQIXrAAIAADQg");
	mask.setTransform(86.4,88);

	// tasting-event
	this.instance_3 = new lib.tastingevent("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,163.5);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({x:-58.8},0).to({x:88,alpha:1},10,cjs.Ease.get(1)).to({x:80},6,cjs.Ease.get(1)).wait(161));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AnCPXIAAjQIUfAAIAADQg");
	mask_1.setTransform(86.1,98.3);

	// near-you
	this.instance_4 = new lib.nearyou("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,185.2);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({x:-58.8,alpha:1},0).to({x:88},10,cjs.Ease.get(1)).to({x:80},6,cjs.Ease.get(1)).wait(153));

	// try-new
	this.instance_5 = new lib.trynew("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,223.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({startPosition:0},0).to({alpha:1},10).wait(140));

	// flavors
	this.instance_6 = new lib.flavors("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(79.9,261.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(43).to({startPosition:0},0).to({alpha:1},10).wait(133));

	// for-your
	this.instance_7 = new lib.foryour("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,299.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55).to({startPosition:0},0).to({alpha:1},10).wait(121));

	// feast
	this.instance_8 = new lib.feast("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(79.5,337.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({startPosition:0},0).wait(9).to({startPosition:0},0).to({alpha:1},10).wait(112));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AmaePIAAjQIT3AAIAADQg");
	mask_2.setTransform(86.1,193.5);

	// date
	this.instance_9 = new lib.novfourthfifth("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,376.7);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(77).to({x:-58.8},0).to({x:96,alpha:1},10).to({x:80},6).wait(93));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgIPAhqIAAjQIUfAAIAADQg");
	mask_3.setTransform(78.4,215.4);

	// find-an-event
	this.instance_10 = new lib.findanevent();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80,417.9);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(97).to({x:-67.1},0).to({x:88,alpha:1},10,cjs.Ease.get(1)).to({x:80},6,cjs.Ease.get(1)).wait(73));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgKfAisIAAnYIWvAAIAAHYg");
	mask_4.setTransform(78.4,222);

	// cta-rectangle
	this.instance_11 = new lib.ctarectangle();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,418);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97).to({x:-67.1},0).to({x:88,alpha:1},10,cjs.Ease.get(1)).to({x:80},6,cjs.Ease.get(1)).wait(73));

	// greens
	this.instance_12 = new lib.atasteofgreen("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(40.5,72.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({startPosition:0},0).to({alpha:1},10).wait(167));

	// cinnamon-rolls
	this.instance_13 = new lib.skyscrapercinnamonrolls_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(100.5,66);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({alpha:1},10).wait(157));

	// turkey
	this.instance_14 = new lib.turkeyatasteof();
	this.instance_14.parent = this;
	this.instance_14.setTransform(80,505);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(39).to({alpha:1},10).wait(137));

	// cranberries
	this.instance_15 = new lib.skyscrapercranberries_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(17.5,419.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({alpha:1},10).wait(147));

	// table
	this.instance_16 = new lib.skyscrapertableatasteof();
	this.instance_16.parent = this;
	this.instance_16.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(186));

	// tasting-event-near-you
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAxQgJgDgGgGQgFgGgEgIIgDgIIgBgJIABgbIAAgcIABgDIADgBIAEgBIADAAIAFABQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABIAAAzQAAAGACAFQABAFAEAFQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEABgGQACgFAAgGIAAgzQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIADAAIAEAAIADACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAA3IgBAJIgDAIQgDAIgHAGQgFAGgJADQgIADgJAAQgIAAgIgDg");
	this.shape.setTransform(112.8,184.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAzIgKgDIgJgEIgIgHQgIgHgEgJIgDgKIgBgLIABgKIADgKQAEgJAIgHIAIgGIAJgFIAKgDIAKgBIALABIAKADQAKAEAHAHQAIAHAEAJQAEAKAAAKIgBALIgDAKQgEAJgIAHQgHAHgKAEIgKADIgLABIgKgBgAgMgfQgGADgFAEQgFAFgDAGQgCAHAAAGQAAAHACAHQADAGAFAFQAFAEAGADQAGADAGAAQAHAAAGgDQAGgDAFgEQAFgFADgGQACgHAAgHQAAgGgCgHQgDgGgFgFQgFgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(101.3,184.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDA1IgCgBIgCgBIgBgCIAAgkIgBgGIgDgFIgdgsIAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIADgDIADgBIAEgBIADABIACACIAUAgIACACIACABIACgBIACgCIAUggIADgDIADgBIAEABIADACIAEACIABADIAAABIgBABIgdAsIgCAGIgBACIAAADIAAAjQgBAEgEAAIgFABg");
	this.shape_2.setTransform(90.8,184.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAzIgDgBIgCgBIgCgBIgRgaIgCgEIgFgBIgMAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAAAZQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDACIgEAAIgDAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAgBIAAhbQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIADgBIAqAAQAIAAAGACQAGADAFAEQAFAEADAHQACAGAAAIQAAAJgDAFQgCAEgFADIgGAGQgEACAAACIAAACIAFAGIAFAIIAGAIIABAFIAAADIgDACIgFACIgDAAgAgUggQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABIAAAWQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAQAAABABAAQABAAAAAAQABAAAAAAQABAAAAAAIAUAAIAHAAIAHgDQADgCABgEQABgDAAgEQABgIgGgFIgHgDIgHgBIgUAAIgEABg");
	this.shape_3.setTransform(77.3,184.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnAzIgCAAIgGgBQgCgBgBgCIgGgOIgCgBIgCgBIgiAAIgBAAIgBABIgDABIAAAAIgFAOIgDACIgCABIgDAAIgDABIgDgBIgDAAIgCAAIgCgCIAqhfIACgCIADgBIAEABQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIAnBeIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDABgAgCgNIgBACIgCAFIgCAFIgCAFIgDAFIAAACIABACIACABIATAAIACAAIABgCIgCgFIgDgIIgEgIIgCgFIgCgBIAAAAg");
	this.shape_4.setTransform(66.8,184.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_5.setTransform(57.5,184.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_6.setTransform(46.8,184.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABIgEABg");
	this.shape_7.setTransform(133.1,163.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_8.setTransform(123.6,163.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_9.setTransform(113.9,163.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAxIgDgGIgFgLIgHgPIgGgQIgHgPIgGgOIgEgKIgCgFIABgDIAEgCIAEgBIADAAIAEABIADADIAUAyIABABIABABQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAIAUgyIADgEQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAEAAIADABIAEADIABADIgCAEIgEAKIgGAOIgHAPIgHARIgGAPIgFALIgDAGIgBACIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_10.setTransform(104.2,163.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_11.setTransform(95.3,163.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHA0IgLgEIgJgFIgIgGQgEgDgCgEIgFgJQgFgKAAgLIABgKIAEgKQAEgJAHgIIAIgGIAJgEIALgDIAJgCIAMACIALADQALAFAHAJIABACIgCADIgDADIgEAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgGgFIgIgFQgFgCgHAAQgGAAgGADQgGACgFAGQgFAEgDAHQgCAFAAAHQAAAHACAGQADAHAFAEQAFAFAGADQAGADAGgBIAHAAIAHgBQAEgCADgCIAEgFIABgCQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgDgBIgSAAIgDgBIgBgDIAAgFIAAgCIABgEIACgDIArAAIABABIACACQACAEAAAFIAAAEIgBAFQgDAHgFAGQgFAGgHAEQgGAEgHACQgIADgIgBIgJAAg");
	this.shape_12.setTransform(79.6,163.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_13.setTransform(68.6,163.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAA0IgDAAQgEAAgBgDIAAhhIACgCIAEgBIADAAIADAAQAEAAABAEIAABfIgCADIgDABg");
	this.shape_14.setTransform(61.1,163.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABIgEABg");
	this.shape_15.setTransform(54.7,163.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAxQgLgFgIgIIgBgBIAAgCIABgDIADgEIAEgCIADgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAGAEIAJAFQAFACAGAAIAIgBIAHgCIAGgFQACgDAAgEQAAgEgCgDIgIgEIgKgCIgKgBIgNgCQgGgCgEgDQgFgCgDgGQgCgEAAgIQAAgIAEgGQAEgGAGgDQAGgEAHgBQAIgCAGgBIAKACIAKACIAJADIAIAHIAAABIABACIgBAEIgDACIgFADIgDAAIgDAAQgGgFgGgCQgFgCgHgBIgGABIgHACQgEACgBACQgDADAAAEQAAAGAFACQAFACAHABIAPACQAIABAIAEQAHACAEAFQAFAGAAAKQAAAJgEAGQgEAGgGAEQgHAFgIACQgHABgHAAQgLAAgLgDg");
	this.shape_16.setTransform(45.7,163.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAnAzIgDAAIgFAAQgDgCAAgCIgGgOIgCgBIgCgBIgiAAIgBAAIgBABIgCABIgBAAIgFAOIgCACIgDABIgDABIgDAAIgDAAIgDAAIgCgBIgBgCIAohfIADgCIADgBIAEABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAnBeIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDABgAgBgNIgBACIgDAFIgCAFIgCAFIgCAFIgBACIABACIACABIATAAIACAAIABgCIgCgFIgDgIIgEgIIgCgFIgCgBIAAAAg");
	this.shape_17.setTransform(36,163.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABIgEABg");
	this.shape_18.setTransform(26.9,163.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(186));

	// a-taste-of
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghBYQgGgCgBgFQABgEAGgCIACgCQAEgCABgDQABgEAAgKIAAgMIAAg7IgOAAIgEAAIgBgGIAAgCQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANAAIgBgKIAAgIQAAgTALgKQALgKATAAQAOAAAJAGQAIAGAAAKQAAAFgDADQgDAEgGAAQgEAAgDgCQgDgCgCgDIgCgEQgFgJgHAAQgEAAgDADQgCACgBAGIADANQACALAAAIIASAAIAFABIABAFIAAACIgBAGIgFAAIgRAAIAAA/QAAAPABAFQABAFACABIAFACQAHADAAAEQAAAFgGACQgGACgQAAQgTAAgFgCg");
	this.shape_19.setTransform(134,217.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrAuQgSgSAAgcQAAgaATgSQARgTAbAAQAbAAARARQAQASAAAaQAAAcgSATQgSATgaAAQgaAAgRgSgAgXgkQgHAKAAARQAAAXAKAQQAKARAOAAQAMAAAIgLQAHgKAAgQQAAgXgKgQQgKgRgOAAQgMAAgIAKg");
	this.shape_20.setTransform(122.6,220.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnAuQgSgSAAgaQABgcARgSQASgTAbAAQAYAAANAOQAOANABAXQgBAIgCACQgCACgJAAIguAAQgEAAgDgCQgCgCAAgDQAAgDACgCQADgCADAAIAZAAIAHgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgMgIgIQgHgIgLAAQgPAAgHANQgHAMAAASQAAASAKAOQAKAOAOAAQAJAAAGgCQAHgCAGgEIAEgDQAGgFADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQABAAAAABQAAADgEAEQgDAEgEAEQgLAJgKAEQgKAEgLAAQgZAAgSgSg");
	this.shape_21.setTransform(102.6,220.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFBJQgHgCgEgDQgEgFgCgGQgCgHAAgSIAAhBIgLAAIgEgBIgBgDIAAgDQAAgEANgLIAFgEIAFgEQANgLAEAAIADABQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAYIAbAAIAEAAIABAGIAAACQAAAEgBABIgEABIgZAAIgCABIgBADIAAA8QAAAQADAEQACADAHAAQAEAAAGgCIAJgBQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgKAGQgLAHgNAAQgHAAgFgDg");
	this.shape_22.setTransform(91.9,219.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJA/IgMgCIgEACIgEABIgCAAIgDgCQgEgDgDgKQgEgKAAgJQAAgEACgDQADgCACAAQAGAAAGAKIAFAHQADAFAHADQAGACAGAAQAIAAAFgEQAFgEgBgHQAAgKgTgKIgHgDQgTgKgHgHQgHgIABgLQAAgQALgKQALgKARAAIAIAAIAIACIAHgCIADgBQAGAAAGAKQAFAJABALQgBAEgBADQgCACgEAAQgDAAgCgCQgDgDgDgGQgFgHgFgDQgFgDgGAAQgHAAgEAEQgFAEABAGQgBAGAFAEQAEAEAOAIIACABQAiAQAAATQAAARgNAMQgNALgUAAg");
	this.shape_23.setTransform(82.2,220.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWA6IgHgHIgFADQgOAKgPAAQgSAAgLgKQgLgLAAgRQAAgTAOgKQAOgLAZAAQAGAAADACQADACAAAEQAAAGgIAAQgMAAgHAGQgHAGAAALQAAAJAGAGQAGAGALAAQALAAAFgFQAFgGAAgMIAAguQAAgLgEgFQgFgGgIAAQgGAAgFACQgFADgFAGIgCADQgIAJgIAAQgFAAgDgDQgDgDAAgFQAAgMAPgIQAOgIAWAAQANAAAJAEQAKAEAFAGQAEAFACAIQABAHAAARIAAAnIABAKQABAEADAAIAEABQAHACAAAFQAAAFgIAFQgIAFgLAAQgFAAgGgGg");
	this.shape_24.setTransform(70.6,220.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZBXQgHgCAAgGQAAgFAHgCQAGgDABgBQACgDABgUIAAg5IAAggIgBgTQAAgEgDgBIgHgBIgFAAQgIAAgFACQgFACgDAFIgEAIIgDAJIgEADIgEACQgEAAgCgDQgBgEAAgHQAAgQADgKQAEgKAGAAIABAAQAKACAPAAIBHAAQAOAAAKgCIACAAQAGAAADAKQAEAKAAAQQAAAHgCAEQgBADgEAAIgEgCIgEgDIgDgJIgEgIQgEgFgEgCQgFgCgJAAIgFAAIgHABQgCABAAAEIgBATIgBAgIABA5QABAUABADQABABAHADQAHACAAAFQAAAGgHACQgHACgTAAQgSAAgHgCg");
	this.shape_25.setTransform(56,217.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAbBYQgIgCAAgGQAAgEAJgEIACAAQADgBACgCIABgFIgCgKIgEgNIgDgEIgBgBIgKAAIgSgBIgKAAQgLAAAAgIQAAgLALABIAGAAIAMAAIANABIgNgiIgLgcIgDAAIgNAeIgMAgIgMAeQgDAIAAAEQAAAEACACQABADAEACIAEACQAIACAAAFQAAAGgGACQgGACgTAAQgTAAgGgCQgGgCAAgGQAAgFAHgDIAFgCQAJgGAIgUIADgIIASgrIAEgKQASgtAEgSQABgFADgCQACgBAHAAQAEgBACACQADACACAFIATAoIAYA5IAGAOQAOAkAIAEIAEACQAIACAAAFQAAAGgIACQgHACgWAAQgVAAgHgCg");
	this.shape_26.setTransform(32.6,217.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(186));

	// delicious-desserts
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJA/IgMgCIgEACIgDABIgDAAIgDgCQgEgDgEgKQgDgKAAgJQAAgEACgDQACgCAEAAQAFAAAGAKIAFAHQADAFAHADQAGACAGAAQAIAAAFgEQAFgEgBgHQABgKgUgKIgHgDQgTgKgHgHQgHgIABgLQAAgQALgKQALgKARAAIAIAAIAJACIAGgCIADgBQAGAAAGAKQAFAJABALQAAAEgCADQgCACgEAAQgDAAgCgCQgDgDgDgGQgFgHgFgDQgFgDgHAAQgGAAgEAEQgFAEABAGQgBAGAFAEQAEAEAOAIIACABQAiAQAAATQAAARgNAMQgNALgUAAg");
	this.shape_27.setTransform(121.7,322.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFBJQgHgCgEgDQgEgFgCgGQgCgHAAgSIAAhBIgLAAIgEgBIgBgDIAAgDQAAgEANgLIAFgEIAFgEQANgLAEAAIADABQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAYIAbAAIAEABIABAEIAAADQAAADgBACIgEABIgZAAIgCABIgBADIAAA8QAAAPADAFQACADAHAAQAEAAAGgCIAJgBQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgKAGQgLAHgNAAQgHgBgFgCg");
	this.shape_28.setTransform(112.2,321.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkA9QgGgDAAgEQAAgFAGgCIADgBQAEgCABgEQABgFAAgIIAAgIIAAgKIAAgIQAAgVgBgHQgBgHgDgBIgFgCQgIgDAAgEQAAgDACgCQACgCAGgCIARgGIAKgBQAGAAACAQIAAACIABABQAGgKAHgFQAGgFAHAAQAJAAAFAFQAFAFAAAIQAAAJgEAFQgDAEgIAAIgGAAIgFgEIgCgFQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAQgJAAgDAMQgDALAAAkQAAALABAFQABAGAEABIAEACQAIACAAAFQAAAEgHADQgHACgPAAQgTAAgGgCg");
	this.shape_29.setTransform(103.5,322.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnAuQgRgSgBgaQAAgcASgSQASgTAcAAQAXAAAOAOQAOANgBAXQABAIgDACQgCACgJAAIguAAQgEAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIAZAAIAGgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgMgIgIQgIgIgLAAQgOAAgHANQgHAMAAASQAAASAKAOQAJAOAPAAQAJAAAHgCQAFgCAHgEIAEgDQAGgFADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAADgCAEQgDAEgFAEQgLAJgKAEQgKAEgMAAQgZAAgRgSg");
	this.shape_30.setTransform(92.1,322.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIA/IgNgCIgEACIgEABIgCAAIgDgCQgEgDgEgKQgDgKAAgJQAAgEADgDQABgCADAAQAGAAAGAKIAEAHQAEAFAGADQAHACAGAAQAIAAAFgEQAEgEABgHQAAgKgUgKIgHgDQgTgKgHgHQgGgIgBgLQABgQAKgKQALgKATAAIAHAAIAIACIAGgCIAEgBQAGAAAGAKQAGAJgBALQAAAEgCADQgBACgDAAQgEAAgCgCQgDgDgEgGQgEgHgFgDQgFgDgHAAQgGAAgEAEQgEAEgBAGQABAGAEAEQAEAEAPAIIABABQAiAQAAATQAAARgNAMQgNALgTAAg");
	this.shape_31.setTransform(80.3,322.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJA/IgMgCIgEACIgEABIgCAAIgDgCQgEgDgDgKQgEgKAAgJQAAgEADgDQACgCACAAQAGAAAGAKIAEAHQAEAFAGADQAHACAGAAQAIAAAFgEQAFgEAAgHQgBgKgTgKIgHgDQgTgKgHgHQgGgIAAgLQgBgQALgKQAMgKARAAIAIAAIAIACIAHgCIADgBQAGAAAGAKQAGAJgBALQAAAEgCADQgBACgEAAQgCAAgDgCQgDgDgEgGQgEgHgFgDQgFgDgGAAQgHAAgEAEQgEAEAAAGQAAAGAEAEQAEAEAPAIIABABQAiAQAAATQAAARgNAMQgNALgTAAg");
	this.shape_32.setTransform(69.8,322.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgnAuQgSgSAAgaQABgcARgSQATgTAaAAQAYAAANAOQAOANABAXQgBAIgCACQgCACgJAAIguAAQgFAAgBgCQgDgCAAgDQAAgDADgCQACgCADAAIAZAAIAHgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgMgIgIQgHgIgLAAQgPAAgHANQgHAMAAASQAAASAKAOQAKAOAOAAQAJAAAGgCQAGgCAHgEIAEgDQAGgFADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQABAAAAABQAAADgDAEQgEAEgEAEQgLAJgKAEQgKAEgLAAQgaAAgRgSg");
	this.shape_33.setTransform(58.2,322.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaBYIgPAAIgKAAIgKAAQgPAAgFgCQgFgCAAgFQAAgEAHgDIAIgEQABgDABgSIABgvIgBgtQgBgSgBgDQgCgCgGgCQgHgDAAgFQAAgFAGgCQAFgCAOAAIALABIAMAAIAQgBIAOAAQAtAAAZAXQAZAYAAAqQAAArgaAWQgZAVgwAAgAgahEQgGABgBAEQgCAFAAAOIgBAlIABAuQABATABAEQABAEAIACQAIADAMAAQAbAAAOgRQAOgRAAgiQAAgjgQgTQgQgTgeAAQgJAAgGACg");
	this.shape_34.setTransform(42.2,319.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIA/IgNgCIgEACIgDABIgDAAIgDgCQgEgDgEgKQgDgKAAgJQAAgEACgDQACgCAEAAQAFAAAGAKIAEAHQAEAFAHADQAGACAGAAQAIAAAFgEQAEgEAAgHQABgKgUgKIgHgDQgTgKgHgHQgHgIAAgLQAAgQAMgKQAKgKATAAIAHAAIAJACIAFgCIAEgBQAGAAAGAKQAGAJAAALQAAAEgDADQgBACgDAAQgDAAgDgCQgDgDgDgGQgFgHgFgDQgFgDgHAAQgGAAgEAEQgFAEAAAGQAAAGAFAEQAEAEAOAIIACABQAiAQAAATQAAARgNAMQgNALgUAAg");
	this.shape_35.setTransform(126.4,295.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAaA+QgBgCAAgEIAAgJIAAAAIgBAAIgEADIgBACQgHAGgHACQgGADgKAAQgIAAgJgDQgHgDgGgHQgFgHgDgKQgCgJAAgaIAAgIIAAgJIAAgCQAAgKgBgDQgCgDgEgCIgGgBQgGgCAAgEQAAgDACgCQADgCAIgDIARgFIAMgCQAEAAACADQABACAAAGIgBAFIAAAtQAAAYAEAKQAGAJAMAAQANAAAHgMQAFgNAAgcIAAgKQAAgJgBgDQgBgDgEgCIgGgBQgGgCAAgEQAAgDACgCQADgCAIgDIARgFIAMgCQAEAAACADQABACAAAGIAAAGIgCAyIABAVIAAAIQABAFAGACIADABQAGACAAAEQAAADgCACQgCACgFACIgSAGIgMACQgEAAgCgCg");
	this.shape_36.setTransform(113.9,295.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgrAuQgSgSAAgcQAAgaASgSQASgTAbAAQAbAAARARQAQASAAAaQAAAcgSATQgSATgaAAQgaAAgRgSgAgXgkQgHAKAAARQAAAXALAQQAJARAOAAQANAAAHgLQAIgKgBgQQABgXgLgQQgLgRgNAAQgMAAgIAKg");
	this.shape_37.setTransform(99.9,295.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVBXQgGgCAAgFQAAgFAGgBIADgCQADgBACgEIABgOIAAgIIAAgKIAAgMQAAgUgBgFQgBgGgDgBIgFgCQgIgDAAgEQAAgCACgCIAIgFIASgFIAMgDQAEAAABADQACACAAAGIAAAGIgBAGIgBAeIAAABIAAAeQAAALABAGQABAEADABIAEADQAHACAAAEQAAAGgGABQgGACgQAAQgSAAgGgCgAgOg8QgGgFAAgHQAAgGAGgFQAGgFAIAAQAHAAAFAEQAGAFAAAGQAAAHgGAFQgGAEgHABQgIAAgFgEg");
	this.shape_38.setTransform(89.5,292.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgmAuQgRgSAAgaQAAgbASgTQATgTAaAAQAUAAAOALQAOAKAAAOQAAAGgEAEQgEADgGAAQgGAAgEgDQgDgDgFgKQgDgIgFgEQgFgDgHAAQgOAAgHAKQgIALAAATQAAAUALAOQALAOARAAQAGAAAFgCIAKgFIAFgDQAHgFADAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAADgDAFIgGAHQgKAJgKAEQgLAEgMAAQgZAAgRgSg");
	this.shape_39.setTransform(79.9,295.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVBXQgGgCAAgFQAAgFAGgBIADgCQADgBACgEIABgOIAAgIIAAgKIAAgMQAAgUgBgFQgBgGgDgBIgFgCQgIgDAAgEQAAgCACgCIAIgFIASgFIAMgDQAEAAABADQACACAAAGIAAAGIgBAGIgBAeIAAABIAAAeQAAALABAGQABAEADABIAEADQAHACAAAEQAAAGgGABQgGACgQAAQgSAAgGgCgAgOg8QgGgFAAgHQAAgGAGgFQAGgFAIAAQAHAAAFAEQAGAFAAAGQAAAHgGAFQgGAEgHABQgIAAgFgEg");
	this.shape_40.setTransform(70.1,292.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUBYQgGgDAAgEQAAgFAFgCIAHgDQACgCABgHIAAgZIAAgSIAAgXIAAgKQAAgegBgJQgBgIgDgCIgHgDQgIgCAAgEQAAgEADgCQACgBAJgDIAQgFIAMgBQADAAACABQABADAAAGIAAAJQgBAsAAArIABApQAAAKACACIAHADQAGADAAAEQAAAFgGACQgGABgQABQgSAAgGgCg");
	this.shape_41.setTransform(63.1,292.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgnAuQgSgSABgaQAAgcARgSQASgTAbAAQAYAAANAOQAOANABAXQgBAIgCACQgCACgJAAIguAAQgFAAgCgCQgCgCAAgDQAAgDACgCQACgCAEAAIAaAAIAGgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgMgIgIQgHgIgLAAQgPAAgHANQgHAMAAASQAAASAKAOQAKAOAOAAQAJAAAGgCQAHgCAFgEIAFgDQAGgFADAAQABAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQABAAAAABQAAADgEAEQgCAEgGAEQgKAJgKAEQgKAEgLAAQgZAAgSgSg");
	this.shape_42.setTransform(53.5,295.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgaBYIgPAAIgKAAIgKAAQgPAAgFgCQgFgCAAgFQAAgEAHgDIAIgEQABgDABgSIABgvIgBgtQgBgSgBgDQgCgCgGgCQgHgDAAgFQAAgFAGgCQAFgCAOAAIALABIAMAAIAQgBIAOAAQAtAAAZAXQAZAYAAAqQAAArgaAWQgZAVgwAAgAgahEQgGABgBAEQgCAFAAAOIgBAlIABAuQABATABAEQABAEAIACQAIADAMAAQAbAAAOgRQAOgRAAgiQAAgjgQgTQgQgTgeAAQgJAAgGACg");
	this.shape_43.setTransform(37.5,292.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(186));

	// thanksgiving
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgrBMQgOgJAAgMQAAgHADgDQADgFAGAAQAFAAADAEQADADABAFQADAJAHAEQAIAFAOAAQAPAAAKgGQAKgGAAgJQAAgGgEgDQgDgCgIAAIgNABIgRAAQgVABgLgIQgMgGAAgKQAAgGAEgGQAEgEAJgGQgHgFgDgHQgEgIAAgJQAAgUAOgMQAPgMAWAAIALABIASADQAFAAAFgCIAMgIIAEAEIABAEQAAAFgEAEQgDAFgHAEIAEAJIABAKQAAATgOANQgPALgWAAIgMgBIgLgCIgEAEIgBAEQAAAGAFADQAGACAMAAIARgBIASgBQAQgBAJAHQAIAGAAANQAAASgSANQgSAMgcAAQgWABgPgKgAgSg6QgHAIAAALQAAANAGAHQAGAIAKgBQAJABAGgIQAHgIAAgLQAAgMgGgIQgHgHgJAAQgJAAgGAHg");
	this.shape_44.setTransform(145.5,249.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAPA6QgFgCAAgEQAAgFAFgCIAFgCQADgBABgFIABgSQAAglgEgJQgFgJgNAAQgFAAgFADQgHAEgCAGQgDAFgBAKIgBAfIABAPQABAEADABIADACQAHACAAAFQgBAEgFACQgGACgPAAQgSAAgGgCQgFgCAAgFQgBgEAGgCIADgBQADgCACgEIAAgNIAAgIIAAgJIAAgLQAAgTAAgFQgBgGgCgBIgGgCQgHgCAAgEQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQACgCAFgCIARgFIAMgDQADAAACACQACACgBAEIAAAIIAAABIABAAIABAAIAAAAIADgDIADgCQAMgMAOAAQAIAAAJAEQAHADAFAHQAGAGACAJQACAJAAATIAAAOIAAAIIAAAHQAAAIACAEQABADACACIADABQAGACAAAEQAAAFgFACQgGACgRAAQgRAAgGgCg");
	this.shape_45.setTransform(132,247.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUBTQgGgBAAgGQAAgEAGgCIADgBQADgCABgEIABgMIAAgIIAAgKIAAgMQAAgSgBgFQgBgFgCgCIgFgCQgHgCAAgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgDAFgCIASgFIALgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIABAHIAAAHIAAAGIgBAdIAAAAIgBAdIABAQQABAEADACIAEACQAGACAAAEQAAAFgFACQgGABgPAAQgRAAgGgCgAgOg6QgFgEAAgGQAAgHAGgFQAFgEAIAAQAHAAAFAEQAFAEAAAGQAAAHgGAEQgFAFgHAAQgIAAgFgEg");
	this.shape_46.setTransform(121.7,244.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgLAxQgHgMgRglIgGgRQgJgXgFgCIgDgCQgIgCAAgFQAAgFAHgCQAFgCATAAQARAAAFACQAGACgBAFIAAAEIgCACIgEACQgFACAAACIADAJIAIAXIAKAWQACAFACAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIAGgKIAMgdQAFgLAAgEIgBgFIgDgCIgDgBQgGgDABgDQgBgFAGgCQAFgCAOAAQANAAAEACQAGADAAAEQAAAFgHACIgDABQgGADgKAXIgDAHIgFAKQgaA8gHAAQgFABgGgMg");
	this.shape_47.setTransform(112.4,247.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUBTQgGgBAAgGQAAgEAGgCIADgBQADgCABgEIABgMIAAgIIAAgKIAAgMQAAgSgBgFQgBgFgCgCIgFgCQgHgCAAgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgDAFgCIASgFIALgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIABAHIAAAHIAAAGIgBAdIAAAAIgBAdIABAQQABAEADACIAEACQAGACAAAEQAAAFgFACQgGABgPAAQgRAAgGgCgAgOg6QgFgEAAgGQAAgHAGgFQAFgEAIAAQAHAAAFAEQAFAEAAAGQAAAHgGAEQgFAFgHAAQgIAAgFgEg");
	this.shape_48.setTransform(103,244.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgrBMQgOgJAAgMQAAgHADgDQADgFAGAAQAFAAADAEQADADABAFQADAJAHAEQAIAFAOAAQAPAAAKgGQAKgGAAgJQAAgGgEgDQgDgCgIAAIgNABIgRAAQgVABgLgIQgMgGAAgKQAAgGAEgGQAEgEAJgGQgHgFgDgHQgEgIAAgJQAAgUAOgMQAPgMAWAAIALABIASADQAFAAAFgCIAMgIIAEAEIABAEQAAAFgEAEQgDAFgHAEIAEAJIABAKQAAATgOANQgPALgWAAIgMgBIgLgCIgEAEIgBAEQAAAGAFADQAGACAMAAIARgBIASgBQAQgBAJAHQAIAGAAANQAAASgSANQgSAMgcAAQgWABgPgKgAgSg6QgHAIAAALQAAANAGAHQAGAIAKgBQAJABAGgIQAHgIAAgLQAAgMgGgIQgHgHgJAAQgJAAgGAHg");
	this.shape_49.setTransform(94,249.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgIA8IgNgBIgDABIgEABIgCgBIgCgBQgFgDgCgJQgEgKAAgIQAAgEACgDQACgCADAAQAGAAAFAJIAEAHQAEAEAGADQAGADAGAAQAIAAAEgEQAFgEgBgGQAAgKgSgJIgHgDQgSgKgGgGQgHgIAAgLQAAgPAKgKQALgJARAAIAHAAIAJABIAGgCIADAAQAFAAAGAJQAFAJABAKQgBAEgBADQgCACgEAAQgCAAgCgCIgHgIQgEgIgFgCQgEgEgHAAQgGAAgEAFQgEADAAAHQAAAFAEAEQAEAEAOAHIACABQAgAPAAATQAAAQgMALQgNALgTAAg");
	this.shape_50.setTransform(82.3,247.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAmBWIgEgBQgGgCgLgPIgFgGIgCgCQgcglgCAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAAFIAAAFIABAZQAAAHACACIAHADQAFACAAAFQAAAEgGACQgFACgQAAQgSAAgFgCQgGgCAAgFQAAgEAGgCIADgBQADgCABgGQACgGAAgNIgBgPIAAgSIAAgNIgBgsQgBgLgBgCQgCgBgFgCIgEgBIgEgCIgBgDQAAgDADgCQACgCAIgDIAQgEIAMgCQADAAABACQACACAAAGIAAAWIgBAfIAAAcIABAGIABABIAFgCIAIgHIALgLQADgDAAgCQAAgBgFgCQgCgDAAgDQgBgFAGgCQAGgDAQAAQALAAAGADQAFACAAAEQAAAGgJACQgJACgDACQgEADgKAJIgCACIgEAEIgBACQAAACAKAOIABABIAUAZQAJAKAEADQADACAIACQAHADAAAEQAAAFgFADQgGACgNAAg");
	this.shape_51.setTransform(71.2,244.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAPA6QgFgCAAgEQAAgFAFgCIAFgCQADgBABgFIABgSQAAglgEgJQgFgJgNAAQgFAAgFADQgHAEgCAGQgDAFgBAKIgBAfIABAPQABAEADABIADACQAHACAAAFQgBAEgFACQgGACgPAAQgSAAgGgCQgFgCAAgFQgBgEAGgCIADgBQADgCACgEIAAgNIAAgIIAAgJIAAgLQAAgTAAgFQgBgGgCgBIgGgCQgHgCAAgEQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQACgCAFgCIARgFIAMgDQADAAACACQACACgBAEIAAAIIAAABIABAAIABAAIAAAAIADgDIACgCQANgMAOAAQAIAAAJAEQAHADAFAHQAGAGACAJQACAJAAATIAAAOIAAAIIAAAHQAAAIACAEQABADADACIACABQAGACAAAEQAAAFgFACQgGACgRAAQgRAAgGgCg");
	this.shape_52.setTransform(57.3,247.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAVA3IgHgHIgEAEQgPAJgOAAQgRAAgLgKQgKgKAAgQQAAgSAOgKQANgLAZAAQAFAAADACQADACAAAEQAAAGgIAAQgLAAgHAGQgHAGAAAJQAAAKAGAFQAGAGAKAAQALAAAFgFQAFgFgBgNIAAgrQABgLgFgFQgEgFgIAAQgFgBgGADQgEACgFAGIgCADQgIAJgIAAQgEAAgDgDQgDgDAAgFQAAgLAOgIQANgHAWAAQAMAAAJAEQAKADAFAGQADAFACAHIABAYIAAAlQAAAGABAEQACACACABIADACQAIACAAADQAAAGgIAEQgIAFgLAAQgEAAgGgGg");
	this.shape_53.setTransform(44.2,247.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAQBUQgGgCAAgEQAAgFAGgCIAFgCQACgBACgFIABgSQAAglgFgJQgFgJgMAAQgGAAgFADQgGAEgDAFQgCAFgBAJIgBAgQAAAMABAEQAAAEADABIAEACQAGACAAAFQAAAEgFACQgGACgPAAQgTAAgFgCQgGgCAAgFQAAgEAGgCIADgBQADgCABgFQACgFAAgNIAAgTIAAgSIgBg0QgBgNgCgCQgBgCgHgCQgHgCAAgEQAAgDADgCQADgCAKgEIAMgDIALgCQAEAAABADQACACAAAFIAAAFIgBAuIAAAGIAAADIACABIADgDIAEgEQAGgGAGgDQAGgDAHAAQAUAAAKANQAKANAAAZIAAALIAAAVIAAAHIABAIQABADADACIADABQAGACAAAEQAAAFgGACQgFACgTAAQgPAAgGgCg");
	this.shape_54.setTransform(30.7,244.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgYBTQgGgCAAgFQAAgFAGgCQAGgCABgCQACgCABgUIAAg2IAAgfIgBgSQgBgEgCgBIgGgBIgFAAQgIAAgFACQgEACgEAEIgDAIIgEAJIgDADIgEABQgEAAgBgDQgCgDAAgHQAAgQAEgJQADgJAGAAIABAAQAJABAOAAIBEAAQAPAAAJgBIABAAQAGAAAEAJQADAJAAAQQAAAHgBADQgCADgEAAIgEgBIgDgDIgEgJIgDgIQgDgEgFgCQgFgCgIAAIgFAAIgGABQgCABgBAEIgBASIAAAfIABA2QAAAUACACQABACAGACQAGACAAAFQAAAFgGACQgHACgSAAQgRAAgHgCg");
	this.shape_55.setTransform(16.3,244.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).wait(186));

	// savory-sides
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMBaIgTgDIgFADIgFABIgEgBIgDgDQgGgEgFgOQgFgOAAgNQAAgFADgEQADgEAEAAQAIAAAIAOIAHAKQAFAIAJADQAJAFAJAAQALgBAIgFQAGgGAAgJQAAgQgcgNIgKgFQgbgOgJgKQgKgLAAgRQAAgWAQgOQAPgPAZAAIALABIANADIAIgEIAFgBQAJAAAIAOQAIAOAAAPQAAAFgCAEQgDAEgFgBQgEABgEgEQgEgDgGgIQgFgMgHgDQgIgEgJAAQgKgBgFAGQgHAFAAAKQABAHAGAGQAGAHAVAKIABABQAxAYAAAbQAAAYgSARQgTAQgcAAg");
	this.shape_56.setTransform(114.2,341.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag3BBQgZgZAAglQAAgoAZgaQAagaAmAAQAhAAAUATQATATAAAgQAAALgDADQgDAEgNAAIhBAAQgGAAgDgDQgDgDAAgFQAAgEADgDQADgCAFAAIAkAAIAJgBQACgCAAgEQAAgQgLgMQgMgLgPAAQgVAAgKASQgJASAAAZQAAAaANAUQAOAUAVAAQANAAAJgDQAJgDAIgGIAGgFQAJgHAFAAQADAAADADQACACAAAEQAAAEgEAGQgEAGgIAGQgPAMgOAGQgOAFgQAAQgkAAgYgZg");
	this.shape_57.setTransform(97.7,341.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhLBpQgUgYAAglQAAgqAXgaQAXgbAlAAIAMACQAFACADADQADAEAAAFQAAAJgLAAIgFgBIgEAAQgTAAgMAQQgLAOAAAcQAAAdAMASQANATATAAQASgBAKgJQAKgLAAgTIAAgvIAAhPQAAgMgDgFQgCgEgGgDIgFgCQgLgCAAgHQAAgEAEgDQAFgEANgEIATgGIAQgCQAGAAADADQACADAAAIIAAAJIgCBqIABBIQABARADACIAMAEQAJACAAAGQAAAIgZAJIgRAEIgNABQgFAAgCgCQgCgDAAgGIAAgIIgBgDIgBgCIgFAEIgIAGQgKAHgJAEQgKAEgKAAQghAAgUgXg");
	this.shape_58.setTransform(78.9,338);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgeB8QgJgDAAgIQAAgGAJgDIAEgCQAEgCACgGQACgGABgNIgBgMIAAgNIAAgSQAAgcgCgHQAAgIgEgCIgIgDQgKgDAAgGQAAgEACgDQAEgDAHgDIAagIIASgEQAEAAACAEQACADAAAIIAAAKIAAAIIgBArIAAABIgBArQAAAQABAHQACAHAEACIAGACQAJAEAAAGQABAHgJADQgJACgWAAQgaAAgIgCgAgVhWQgHgGAAgJQAAgKAIgHQAIgHAMAAQAKAAAIAGQAHAHAAAJQAAAJgIAHQgIAHgMAAQgLAAgHgGg");
	this.shape_59.setTransform(63.1,337.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgqB8QgTgDgNgIQgGgEgFgOQgEgPAAgUQAAgIADgEQADgEAFAAQAIAAAJAQIAEAHQALATANAJQANAIASAAQASAAANgLQANgLAAgRQAAgXgygXIgGgCQgqgSgNgQQgOgOAAgZQAAgfAXgUQAXgUAkAAIAUACIAYAFIAHgFIAGgBQAEAAADADQAEACADAHQAGALAEALQADALAAAJQAAAGgDADQgDADgEAAQgKAAgIgMIgDgDQgKgNgLgHQgMgGgOAAQgTAAgLAJQgLAJAAAQQAAAOAJAJQAKAKAkAQIAHACQAfAOAOALQAJAJAFALQAFANAAANQAAAjgYAUQgZAUgrAAQgVAAgTgFg");
	this.shape_60.setTransform(48.2,338.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhPByQgIgHAAgLQAAgIAGgHQAGgGAIAAIAIABIAFAEIAFAHQAEAHAEAAQAJAAAJgNQAJgNAAgNQAAgPgMgcIgCgEIgcg8IgQghQgDgGgKgFIAAAAQgGgCgCgCQgCgDAAgEQAAgHAJgDQAJgDAZAAQAaAAAIADQAIACAAAHIgBAGIgDADIgGADQgHACAAADIAEANIAOAjIANAgQAFAJACAAQACAAAEgJIALgbIANgiQAEgMAAgFQAAgFgKgFQgKgGAAgEQAAgGAIgDQAIgCAUAAQAVAAAHADQAHACAAAHQAAAHgKACIgHACQgKAGgLAdIgFANIgWA3QgcBIgSAWQgSAVgZAAQgNAAgIgHg");
	this.shape_61.setTransform(124.6,306.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgFQACgHAAgNIAAgMIAAgNIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgDQAIAAADAXIAAAEIABAAQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKACgXAAQgaAAgJgCg");
	this.shape_62.setTransform(109.7,302.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag+BBQgZgaAAgmQAAgmAagaQAagaAmAAQAlAAAYAYQAYAYAAAmQAAAngaAbQgZAbglAAQgmAAgYgZgAgggzQgLAOAAAXQAAAiAPAXQAOAXAUAAQARAAALgOQAKgPAAgXQAAghgOgXQgPgXgUAAQgRAAgKAOg");
	this.shape_63.setTransform(93,302.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgSBIQgKgQgYg5IgKgaQgMgggIgEIgGgCQgJgEgBgHQABgHAIgCQAJgDAcAAQAYAAAIADQAJACAAAHIgBAGIgEADIgFACQgIADABAEIADAOIAOAhIANAhQAFAIABAAQADAAADgFIAIgPIATgrQAFgRAAgFIgBgHIgEgDIgFgCQgHgDgBgGQABgHAHgCQAIgDAVAAQATAAAHADQAHACAAAHQABAHgKADIgGACQgHAEgPAiIgFAKIgHAQQgnBZgLAAQgHAAgKgRg");
	this.shape_64.setTransform(74.4,303.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAfBRIgKgJIgHAEQgVAOgVAAQgZAAgQgOQgQgPAAgYQABgbATgPQAVgPAkAAQAIAAAEACQAFADAAAGQAAAKgMAAQgRAAgKAIQgLAIABAPQgBAOAJAIQAKAIAPAAQAQAAAHgHQAHgIAAgSIAAhBQAAgPgHgIQgGgIgMAAQgIAAgHADQgHAEgHAIIgEAEQgKAOgMAAQgHAAgEgFQgEgEAAgIQAAgQAUgLQAUgLAfAAQATAAANAFQAOAFAIAKQAFAGACALQACAKABAZIAAA3QAAAKABAFQACAEADABIAGACQALADgBAGQAAAIgLAHQgMAGgPAAQgHAAgJgJg");
	this.shape_65.setTransform(56.4,302.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgqB8QgTgDgNgIQgGgEgFgOQgEgPAAgUQAAgIADgEQADgEAFAAQAIAAAJAQIAEAHQALATANAJQANAIASAAQASAAANgLQANgLAAgRQAAgYgygWIgGgCQgqgSgNgQQgOgPAAgYQAAgfAXgUQAXgUAkAAIAUACIAYAFIAHgFIAGgBQAEAAADADQAEACADAHQAGAKAEAMQADALAAAJQAAAFgDAEQgDADgEAAQgKAAgIgMIgDgDQgKgNgLgGQgMgHgOAAQgTAAgLAJQgLAJAAAQQAAAOAJAJQAKAKAkAQIAHACQAfANAOAMQAJAJAFALQAFAMAAAOQAAAjgYAUQgZAUgrAAQgVAAgTgFg");
	this.shape_66.setTransform(36.8,299.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.5,299.5,164.8,603.7);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
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