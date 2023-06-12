// ==UserScript==
// @name     Kleinanzeigen Filter
// @version  1
// @grant    none
// @include  https://www.kleinanzeigen.de/*
// ==/UserScript==

window.addEventListener('load', function() {
    var selectValue = document.querySelector('#sortingField-selector-value');
    var option = document.querySelector('.selectbox-option[data-value="DISTANCE"]');

    if (selectValue && option && selectValue.value !== 'DISTANCE') {
        option.click();
    }
});
