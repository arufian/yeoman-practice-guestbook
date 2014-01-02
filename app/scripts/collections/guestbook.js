/*global guestbook, Backbone*/

guestbook.Collections = guestbook.Collections || {};

(function () {
    guestbook.Collections.GuestbookCollection = Backbone.Collection.extend({
    	
    	localStorage: new Store('guestbook_app'),
        initialize: function(){
        	this.model = guestbook.Models.KomentarModel;
        }
    });

})();
