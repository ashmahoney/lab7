'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(clickLikeBtn);
}

function clickLikeBtn(e) {
	e.preventDefault();
	ga('create', 'UA-158815084-1', 'auto');
	ga('send', 'event', 'like', 'click');
}