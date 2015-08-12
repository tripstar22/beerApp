
jQuery(document).ready(function($) {

	init();

	// call all custom functions and plugins
	function init() {

		// get day of the week
		newDay();

		// angular magic
		// beerApp();

		// control font-size of header elements
		$("h1").fitText(0.8, {minFontSize: '50px', maxFontSize: '120px'});
		$("h2").fitText(1.5, {minFontSize: '24px', maxFontSize: '48px'});

		console.log("init works!");
	}

	console.log("APP.JS WORKS!!!");

});
