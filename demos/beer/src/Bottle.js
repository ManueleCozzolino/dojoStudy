// Defining modules is accomplished using the define function.
// An important thing to note when defining modules is that the callback
// function is only ever invoked once—the returned value is cached by the loader.

// You will see the first parameter included in some places in Dojo for backwards-compatibility
// for pre-AMD syntax.

define(
	"demos.beer.src.Bottle",
	[
		"dojo/_base/declare",
		"dijit/_Widget"
	],
	(declare, _Widget) => {
		declare("beer.Bottle", _Widget, {
			// summary:
			//		A Beer visual.

			beerIndex: 0,

			size: "small",
			sizes: {
				small: 18, large: 36
			},

			postCreate: function(){

				dojo.addClass(this.domNode, "dijitInline beerBox-" + this.size);
				var offset = this.sizes[this.size];
				dojo.style(this.domNode,{
					backgroundPosition:"-" + (this.beerIndex * offset) + "px 1px"
				});
			}

		})

		declare("beer.UserProfile", _Widget, {
			// summary:
			//		A shelf of beers for a particular Person

			user:"",

			setUser: function(username){
				this.user = username || null;
				if(this.user){
					dojo.xhrGet({
						url: "getBeers.php",
						content: { user: this.user },
						load: dojo.hitch(this,function(data){

						})
					});
				}
			}
		})
	}
)
