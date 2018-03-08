'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});


 //Function that is called when the document is ready.
 
function initializePage() {
	// your code here
	$(".TopBtn").click(function() {
		//gtag("create","UA-115310420-1","auto");
		// ga("send", "event", "top", "click");
			gtag('create','UA-115310420-1','auto');
			gtag('send','event','top','click');
			console.log("Event loaded");
	});
}

// /*
//  * Function that is called when the document is ready.
//  */
// function initializePage() {
// 	// your code here
// 	$(".TopBtn").click(clickTopBtn);
// };

// function clickTopBtn(){
// 	e.preventDefault();
// 	gtag("create","UA-115310420-1","auto");
// 	gtag("send","event","top","click");
// };