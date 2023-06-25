// ==UserScript==
// @name     kleinanzeigen.de - remove top ads
// @version  1.0
// @grant    none
// @include  https://www.kleinanzeigen.de/*
// @run-at   document-idle
// ==/UserScript==

// Configure your script here
var ENABLE_LOGGING = true; // Set to false to disable logging

function logMessage(message) {
    if (ENABLE_LOGGING) {
        console.log(message);
    }
}

function removeTopAds() {
    var topAds = document.querySelectorAll('.badge-topad.is-topad');
    if (!topAds) {
        return false;
    }

    topAds.forEach(function(topAd) {
        topAd.style.display = 'none';
    });

    return true;
}

function runScript() {
    logMessage('Running script "Remove Top Ads 1.0"');
    try {
        if (!removeTopAds()) {
            return;
        }
    } catch(error) {
        console.error('An error occurred:', error);
    }
}

logMessage('Starting script "Remove Top Ads 1.0"');

if (document.readyState === 'loading') {
    // Loading hasn't finished yet
    window.addEventListener('DOMContentLoaded', runScript);
} else {
    // `DOMContentLoaded` has already fired
    runScript();
}
