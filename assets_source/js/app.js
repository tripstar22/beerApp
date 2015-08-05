
jQuery(document).ready(function($) {

	init();

	// call all custom functions and plugins
	function init() {

		// control font-size of <h1>
		$("h1").fitText(0.8, {minFontSize: '50px', maxFontSize: '120px'});

		// get day of the week
		newDay();

		console.log("init works!");
	}

	console.log("APP.JS WORKS!!!");

});
