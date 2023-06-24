// ==UserScript==
// @name     kleinanzeigen.de - arrow navigation
// @version  1
// @grant    none
// @include  https://www.kleinanzeigen.de/*
// @run-at   document-idle
// ==/UserScript==

window.addEventListener('keydown', function(event) {
    // Check if the pressed key is the right arrow key
    if (event.key === "ArrowRight") {
        var nextPageButton = document.querySelector('a[class="pagination-next"]');
        if (nextPageButton) {
            nextPageButton.click();
        } else {
            console.log('Next page button not found');
        }
    } else if (event.key === "ArrowLeft") {
        var previousPageButton = document.querySelector('a[class="pagination-prev"]');
        if (previousPageButton) {
            previousPageButton.click();
        } else {
            console.log('Previous page button not found');
        }
    }
});
