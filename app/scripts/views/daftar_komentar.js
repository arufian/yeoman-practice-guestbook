/*global guestbook, Backbone, JST*/

guestbook.Views = guestbook.Views || {};

(function () {
    'use strict';

    guestbook.Views.DaftarKomentarView = Backbone.View.extend({

        template: JST['app/scripts/templates/daftar_komentar.ejs'],
        el: '#guesbookapp',
        events: {
            'submit': 'daftarKomentar'
        },
        initialize: function(){
            this.render();

            this.listenTo(this.collection, 'add', this.tambahKomentar);
            this.collection.fetch();
        },
        render: function(){
            this.$el.html(this.template());

            return this;
        },
        daftarKomentar: function (event) {
            event.preventDefault();

            var nama = this.$('#input_nama').val().trim();
            var komentar = this.$('#input_komentar').val().trim();

            if (nama && komentar) {
                this.collection.create(new guestbook.Models.KomentarModel({
                    nama: nama,
                    komentar: komentar
                }));

                $('#input_nama').val('');
                $('#input_komentar').val('');
            }
        },

        tambahKomentar: function (komentar) {
            var view = new guestbook.Views.KomentarView({ model: komentar });
            this.$('tbody').append(view.render().el);
        },

    });

})();
