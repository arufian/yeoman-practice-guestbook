/*global guestbook, Backbone*/

guestbook.Models = guestbook.Models || {};

(function () {
    'use strict';
	
    guestbook.Models.KomentarModel = Backbone.Model.extend({
    	defaults: {
    		nama: '',
    		komentar: ''
    	}
    });

})();
