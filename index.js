(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 35,
	color: "#000000",
	manifest: [
		{src:"images/arr.png?1504105981989", id:"arr"},
		{src:"images/Bitmap14.jpg?1504105981989", id:"Bitmap14"},
		{src:"images/btn44.png?1504105981989", id:"btn44"},
		{src:"images/btn_spin.png?1504105981989", id:"btn_spin"},
		{src:"images/cm.png?1504105981989", id:"cm"},
		{src:"images/grass.png?1504105981989", id:"grass"},
		{src:"images/light.png?1504105981989", id:"light"},
		{src:"images/logo1.png?1504105981989", id:"logo1"},
		{src:"images/logo2.png?1504105981989", id:"logo2"},
		{src:"images/wh.png?1504105981989", id:"wh"},
		{src:"images/wh_shd.png?1504105981989", id:"wh_shd"}
	]
};



// symbols:



(lib.arr = function() {
	this.initialize(img.arr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,130);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.btn44 = function() {
	this.initialize(img.btn44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,66);


(lib.btn_spin = function() {
	this.initialize(img.btn_spin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,69);


(lib.cm = function() {
	this.initialize(img.cm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,187);


(lib.grass = function() {
	this.initialize(img.grass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,140);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,188);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,111);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,117);


(lib.wh = function() {
	this.initialize(img.wh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,202);


(lib.wh_shd = function() {
	this.initialize(img.wh_shd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,196);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wh();
	this.instance.setTransform(-101,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-101,202,202);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.setTransform(-67,-52.5,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-52.5,134,105);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grass();
	this.instance.setTransform(-120,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-70,240,140);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAnEMAAAhOHMAu2AAAMAAABOHg");
	this.shape.setTransform(150,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,500);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cm();
	this.instance.setTransform(-63.5,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-93.5,127,187);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.setTransform(-120,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-94,240,188);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo1();
	this.instance.setTransform(-68.5,-59.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(13));

	// Layer 2
	this.instance_1 = new lib.logo2();
	this.instance_1.setTransform(-69.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-58.5,139,117);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.btn44();
	this.instance.setTransform(-120,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-42,237,66);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj0DzQhkhkgBiPQABiOBkhmQBmhkCOAAQCPAABlBkQBmBmgBCOQABCPhmBkQhlBniPAAQiOAAhmhng");
	mask.setTransform(0.1,0.2);

	// Layer 3
	this.instance = new lib.Symbol11();
	this.instance.setTransform(-90.5,-5);
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:90.4},39).wait(36));

	// Layer 1
	this.instance_1 = new lib.btn_spin();
	this.instance_1.setTransform(-34.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-34.5,69.1,69.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(11.9,3.5,0.995,1.016,0,10.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.03,skewX:-13.3,skewY:-1.4,x:-15.8,y:3},72,cjs.Ease.get(1)).to({scaleX:1,scaleY:1.02,skewX:10.1,skewY:1.7,x:11.9,y:3.5},76,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-70,263.8,147);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(0,83.5,1,1,0,0,0,0,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,rotation:3},49,cjs.Ease.get(1)).to({regX:0,rotation:0},52,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-93.5,127,187);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol10();
	this.instance.setTransform(0.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.arr();
	this.instance_1.setTransform(-49,-111);

	this.instance_2 = new lib.wh_shd();
	this.instance_2.setTransform(-102,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-111,259.1,222);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},99,cjs.Ease.get(0.75)).to({rotation:2160},100,cjs.Ease.get(-0.75)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-101,202,202);


(lib.Symbol45copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol46();
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.25},7,cjs.Ease.get(0.5)).to({alpha:0},7,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol46();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-42,237,66);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol46();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3},7,cjs.Ease.get(1)).to({y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-42,237,66);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol45();

	this.instance_1 = new lib.Symbol45copy();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-42,237,66);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clicker.addEventListener("click", fl_ClickToGoToWebPage);
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btn = new lib.Symbol44();
	this.btn.setTransform(127,236,0.9,0.9);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// clicker
	this.clicker = new lib.Symbol8();
	this.clicker.setTransform(125,125,0.833,0.5,0,0,0,150,250);
	this.clicker.alpha = 0.012;
	new cjs.ButtonHelper(this.clicker, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clicker).wait(1));

	// logo
	this.instance = new lib.Symbol1();
	this.instance.setTransform(48,42.6,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// light
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(125,13.9);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// grass
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(101.9,228.4,1.898,1.053);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// cm
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(203.5,168.4,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// wh_front
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(125,120,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// wheel
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(124.6,127.9,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Bitmap14();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,44.9,500.8,389.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
