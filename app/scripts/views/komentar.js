/*global guestbook, Backbone, JST*/

guestbook.Views = guestbook.Views || {};

(function () {
    'use strict';

    guestbook.Views.KomentarView = Backbone.View.extend({

    	tagName: 'tr',
        template: JST['app/scripts/templates/komentar.ejs'],
        events: {
	        'dblclick span': 'toggleEdit',
	        'blur textarea': 'toggleEdit',
	        'click #hapuskomen': 'hapusKomentar'
	    },
	 
	    initialize: function () { this.listenTo(this.model, 'change', this.render); },
	 
	    render: function () {
	    	var modelToView = this.model.toJSON();
            // agar terlihat sebagai baris baru di view
            modelToView.komentar = modelToView.komentar.replace(/\n/g, '<br />');
	    	this.$el.html(this.template(modelToView));

		    return this;
	    },

	    toggleEdit: function () {
	    	var input = this.$('form textarea');
	        var komentar = input.val().trim();
	        // kembalikan <br /> ke ¥n
	        komentar = komentar.replace(/<br\s*[\/]?>/gi,'\n');

	        if (!komentar) {
	            this.model.destroy();
	            this.remove();
	            return;
	        }

	        this.$el.toggleClass('editing');

	        if (komentar === this.model.get('komentar')) {
	            // mode edit
	            input.val(this.model.get('komentar'));
	            input.focus();
	        } else {
	            // selesai edit
	            this.model.set('komentar', komentar);
	            this.model.save();
	            this.render();
	        }
	    },

	    hapusKomentar: function(events){
	    	this.model.destroy();
	    	this.remove();
	    }
    });

})();
