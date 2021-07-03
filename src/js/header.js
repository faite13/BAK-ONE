import $ from 'jquery';

import { $document, $window } from "./app";

var $header = $('#header');
var $menuToggler = $('#mobileToggler');
var $mobileMenu = $('#mobileMenu');

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
        $menuToggler.toggleClass('mobile-toggler--active');
        $mobileMenu.fadeToggle();
    });

    $window.on('resize', function() {
        $menuToggler.removeClass('mobile-toggler--active');
        $mobileMenu.fadeOut();
    });
};


export var header = function() { 
    $document.on('scroll', function() {
        resizeHeader();
    });
    toggleMenu();
};