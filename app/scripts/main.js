/*global guestbook, $*/


window.guestbook = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        new this.Views.DaftarKomentarView({
            collection: new this.Collections.GuestbookCollection()
        });
    }
};

$(document).ready(function () {
    'use strict';
    guestbook.init();
});
