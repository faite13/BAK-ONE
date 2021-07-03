import $ from 'jquery';

import { $body } from './app.js';

var $contactInfoBtn = $('#contactInfoBtn');
var $contactForm = $('#contactForm');
var $contactInfoPopup = $('#contactInfoPopup');

var submitForm = function() {
    $contactForm.on('submit', function(e) {
        var $form = $(e.target);

        alert($form.serialize());
        return null;
    });
};

var popup = function() {
    $contactInfoBtn.on('click', function() {
        $contactInfoPopup.fadeIn();
        $body.addClass('body--noscroll');
    });

    $contactInfoPopup.on('click', function(e) {
        var $target = $(e.target);
        var canClose = !$target.hasClass('js-popup-close') && !$target.hasClass('js-popup');

        if(canClose) {
            return null;
        }

        $contactInfoPopup.fadeOut();
        $body.removeClass('body--noscroll');
    });
};

export var contactUs = function() {
    $contactForm.on('submit', function(e) {
        e.preventDefault();
    });
    submitForm();
    popup();
};