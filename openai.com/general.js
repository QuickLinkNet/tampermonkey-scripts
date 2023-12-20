// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2023-12-20
// @description  General openAI formatting
// @author       QuickLink
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a new style element
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.xl\\:max-w-\\[48rem\\] { max-width: 80% !important; }';

    // Append the style to the head
    document.head.appendChild(style);
})();
