import $ from 'jquery';

import { $document, $window } from "./app.js";

var $sections = $('.js-sec');

var $pcNavLinks = $('.js-nav-link');
var $mobileLinks = $('.js-mobile-nav-link');

var checkResoluton = function() {
    if(window.matchMedia("(min-width: 992px)").matches){
        $document.on('scroll', {$navLinks: $pcNavLinks}, scrollHandler);
    }else {
        $document.on('scroll', {$navLinks: $mobileLinks}, scrollHandler);
    }
};

var scrollHandler = function(e) {
    var $navLinks = e.data.$navLinks;

    $sections.each(function(i, section) {
        var top = window.scrollY;
        var offset = section.offsetTop - 100;
        var height = section.offsetHeight;

        if(top >= offset && top < offset + height) {
            $navLinks.each(function(i, link){
                $(link).removeClass('header__nav-link--active');
            });

            $($navLinks[i]).addClass('header__nav-link--active');
        }
    });
};

export var scrollspy = function() {
    checkResoluton();

    $window.on('resize', function() {
        checkResoluton();
    });
};