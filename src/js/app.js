import $ from 'jquery';

import { header } from './header.js';
import { portfolio } from './portfolio.js';
import { contactUs } from './contact-us.js';
import { scrollspy } from './scrollspy.js';

const $document = $(document);
const $body = $(document.body);
const $window = $(window);

export const app = function() {
    $document.on('DOMContentLoaded', function() {
        header();
        portfolio();
        contactUs();
        scrollspy();
    });
};

export { $document, $body, $window };