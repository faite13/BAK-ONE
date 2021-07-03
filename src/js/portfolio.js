import $ from 'jquery';

var state = 'all';

var $filterContainer = $('#filter');
var $filterButtons = $filterContainer.find('.btn');
var $works = $('#portfolioWorks').find('.js-work');

var sort = function(category) {
    $works.each(function(i, work) {
        var $work = $(work);
        var catList = $work.data().category.split(' ');
        var shouldShow = catList.indexOf(category) > -1 || category === 'all';

        $work.fadeOut();

        if(shouldShow) {
            $work.fadeIn();
        }
    });
};

export var portfolio = function() {
    $filterButtons.on('click', function(e) {
        var $btn = $(e.target);
        var category = $btn.data().category;

        if(state === category) {
            return null;
        }

        var $prev = $filterContainer.find(`[data-category=${state}]`);

        $prev.removeClass('filter__btn--active');
        $btn.addClass('filter__btn--active');

        state = category;
        sort(state);
    });
};