import $ from 'jquery';

import { $body } from './app.js';

var $contactInfoBtn = $('#contactInfoBtn');
var $contactForm = $('#contactForm');
var $contactInfoModal = $('#contactInfoModal');

var submitForm = function() {
    $contactForm.on('submit', function(e) {
        var $form = $(e.target);

        alert($form.serialize());
        return null;
    });
};

var modal = function() {
    $contactInfoBtn.on('click', function() {
        $contactInfoModal.fadeIn();
        $body.addClass('body--noscroll');
    });

    $contactInfoModal.on('click', function(e) {
        var $target = $(e.target);
        var canClose = !$target.hasClass('js-modal-close') && !$target.hasClass('js-modal');

        if(canClose) {
            return null;
        }

        $contactInfoModal.fadeOut();
        $body.removeClass('body--noscroll');
    });
};

export var contactUs = function() {
    $contactForm.on('submit', function(e) {
        e.preventDefault();
    });
    submitForm();
    modal();
};