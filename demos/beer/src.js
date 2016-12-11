dojo.provide("demos.beer.src");
//Each javascript source file must have at least one dojo.provide() call at the TOP of the file,
//corresponding to the file name,  before any calls to dojo.require() are made.

//dojo.provide() tells the loader that the module has been provided for the given name.
//It also creates a JavaScript object for the name.

dojo.require("dojox.rpc.Service");
//La root del path passato alle funzioni del loader (provide, require), è la cartella in cui è
//contenuta la cartella di dojo, in questo caso dojoDemos. Infatti si sta chiamando la funzione
//require dell'oggetto dojo

dojo.require("demos.beer.src.Bottle");
dojo.require("demos.beer.src.Lady")
dojo.require("demos.beer.src.dnd");

dojo.addOnLoad(function(){
// dojo.addOnLoad() has been deprecated in favor of the (equivalent) dojo.ready function,
//and more recently, in favor of the The AMD API, and the domReady! plugin

//	beer.api = new dojox.rpc.Service(dojo.moduleUrl("demos.beer.resources","api.smd"));

	var shelf = dojo.byId("shelf-offer").firstChild;
 	//dojo.byId("shelf-offer") restituisce un domNode (equivalente a getElementById)

	for(var i = 0; i < 10; i++){
		var bottle = new beer.Bottle({
			beerIndex: i,
			size:"large"
		});
		shelf.appendChild(bottle.domNode);
	}

	dojo.query("div", shelf)
		.forEach(function(n){
			new beer.MadeDnd(n);
		});
	//dojo.query returns a list of DOM nodes based on a CSS selector.
	//The first argument is the selector which is a CSS selector string that identifies
	//the nodes that need to be retrieved. The second argument is an optional context
	//which limits the scope of the selector and only children of the will be considered.
});
