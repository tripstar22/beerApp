
// Add msg if there are no search results
function listLength() {

	if ($("ul.listBrews>li").length == 0) {

		$("ul.listBrews").append("<li>Sorry, we curently do not have that beer on tap.</li>");
	}
}
