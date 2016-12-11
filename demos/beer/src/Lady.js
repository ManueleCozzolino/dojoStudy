dojo.provide("demos.beer.src.Lady");

dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.require("dojox.timing.Sequence");

dojo.declare("beer._LadyBehavior", null, {

	constructor: function(){
		this._batEyes = [
			{ func: [dojo.hitch(this,"smile",true), this], pauseAfter:200 },
			{ func: [dojo.hitch(this,"blink",45), this], repeat: 3, pauseAfter: 100 },
			{ func: [dojo.hitch(this,"smile",false), this], pauseBefore:200 }
		];
	},

	bat: function(){
		this.actions.go(this._batEyes);
	}

});

// Dojo provides a dojo.declare() method that you should use to declare a new class.
// It accepts the following arguments:
// A string representing the name of the class that you want to declare.
// The name of the superclass or array of names of the superclasses that you want this class to inherit from.
// A hashmap of properties for the class. The properties represent both instance variables and member function of this class.

dojo.declare("beer.Lady", [dijit._Widget, dijit._Templated, beer._LadyBehavior], {

	templatePath: dojo.moduleUrl("demos.beer.src","templates/Lady.html"),

	// arr: [ 1, 2, 3, 4 ], // object. shared by all instances!
  // num: 5,              // non-object. not shared.
  // str: "string",       // non-object. not shared.
  // obj: new Foo(),      // object. shared by all instances!

	constructor: function(args, node){
		dojo.mixin(this, args);
		//mixin() is a simple utility function for mixing objects together

		this.actions = new dojox.timing.Sequence({});
	},

	smile: function(/* Boolean */on){
		// summary:
		//		make her happy
		var n = this.innerNode;
		dojo.removeClass(n,"beerLadyAngry");
		dojo[(on ? "addClass" : "removeClass")](n, "beerLadySmiling");
	},

	frown: function(/* Boolean */on){
		var n = this.innerNode;
		dojo.removeClass(n,"beerLadySmiling");
		dojo[(on ? "addClass" : "removeClass")](n,"beerLadyAngry");
	},

	blink: function(closeDuration, forced){
		if(this._blinking && !forced){ clearTimeout(this._blinking); }
		dojo.addClass(this.innerNode, "beerLadyBlinking");
		this._blinking = setTimeout(dojo.hitch(this,function(){
			dojo.removeClass(this.innerNode,"beerLadyBlinking");
		}), closeDuration || 275);
	},

	say: function(dialog){


	}

});
