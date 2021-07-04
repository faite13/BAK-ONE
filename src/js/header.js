import $ from 'jquery';

import { $document, $window } from "./app";

var $header = $('#header');
var $menuToggler = $('#mobileToggler');
var $mobileMenu = $('#mobileMenu');
var $togglerIcon = $('#mobileTogglerIcon');

var resizeHeader = function() {
    var scrollPosition = $document.scrollTop();

    if (scrollPosition < 5) {
        $header.removeClass('header--moving');
    }else {
        $header.addClass('header--moving');
    }
};

var toggleMenu = function() {
    $menuToggler.on('click', function() {
        $togglerIcon.toggleClass('mobile-toggler__icon--active');
        $mobileMenu.fadeToggle();
    });

    $window.on('resize', function() {
        $togglerIcon.removeClass('mobile-toggler__icon--active');
        $mobileMenu.fadeOut();
    });
};


export var header = function() { 
    $document.on('scroll', function() {
        resizeHeader();
    });
    toggleMenu();
};