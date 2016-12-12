dojo.provide("demos.beer.src");

require([
  "dojox/rpc/Service",
  "demos/beer/src/Bottle",
  "demos/beer/src/Lady",
  "demos/beer/src/dnd",
  "dojo/domReady!"
], (Service, Bottle, Lady, dnd) => {
  var ladyRef = dojo.byId('lady');
  var lady = new beer.Lady();
  ladyRef.appendChild(lady.domNode);

  var shelf = dojo.byId("shelf-offer").firstChild;
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
});
