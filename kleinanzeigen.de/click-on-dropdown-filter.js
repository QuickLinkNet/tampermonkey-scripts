// ==UserScript==
// @name     Kleinanzeigen.de - distance filter
// @version  1.1
// @grant    none
// @include  https://www.kleinanzeigen.de/*
// @run-at   document-idle
// ==/UserScript==

console.log('Starting script "Distance Filter 1.1"');

function runScript() {
    console.log('Running script "Distance Filter 1.1');
    try {
        var selectValue = document.querySelector('#sortingField-selector-value');
        var option = document.querySelector('.selectbox-option[data-value="DISTANCE"]');

        if (!selectValue) {
            console.error('Could not find element with id "sortingField-selector-value"');
            return;
        }
        if (!option) {
            console.error('Could not find element with data-value "DISTANCE"');
            return;
        }

        if (selectValue.value !== 'DISTANCE') {
            option.click();
            console.log('Drop-Down with option "Distance" clicked');
        } else {
            console.log('Drop-Down is already set to "Distance"');
        }
    } catch(error) {
        console.error('An error occurred:', error);
    }
}

if (document.readyState === 'loading') {
    // Loading hasn't finished yet
    console.log('Adding DOMContentLoaded listener...');
    window.addEventListener('DOMContentLoaded', runScript);
} else {
    // `DOMContentLoaded` has already fired
    console.log('DOMContentLoaded already fired');
    runScript();
}
