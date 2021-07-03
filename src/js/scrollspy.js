import $ from 'jquery';

import { $document, $window } from "./app.js";

var $intro = $('#intro');
var $portfolio = $('#portfolio');
var $about = $('#about');
var $contact = $('#contact');

var $navLinks = $('.js-nav-link');

var POSITION_FIX = 100;

var blocksCoords = [
    [
        0,
        $intro.height()
    ],
    [
        $portfolio.offset().top - POSITION_FIX,
        $portfolio.offset().top + $portfolio.height() - POSITION_FIX
    ],
    [
        $about.offset().top - POSITION_FIX,
        $about.offset().top + $about.height() - POSITION_FIX * 2
    ],
    [
        $contact.offset().top - POSITION_FIX * 2,
        $contact.offset().top + $contact.height()
    ]
];

var BLOCKS_AMOUNT = blocksCoords.length;

var scrollHandler = function() {
    for(var i = 0; i < BLOCKS_AMOUNT; i++) {
        var scrollPosition = $document.scrollTop();

        var top = blocksCoords[i][0], bottom = blocksCoords[i][1];
        var isInRange = scrollPosition >= top && scrollPosition <= bottom;

        if(isInRange) {
            $navLinks.each(function(i, link) {
                $(link).removeClass('header__nav-link--active');
            });
            $($navLinks[i]).addClass('header__nav-link--active');

            return null;
        }
    }
};

export var scrollspy = function() {
    $document.on('scroll', scrollHandler);

    $window.on('resize', function() {
        if(window.matchMedia("(min-width: 992px)").matches){
            $document.on('scroll', scrollHandler);
        }else {
            $document.off('scroll', scrollHandler);
        }
    });
};