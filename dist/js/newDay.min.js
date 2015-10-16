
// get day of the week
function newDay() {

	var now = new Date(),
	    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	    day = days[now.getDay()];

	    if (day == 'Sunday') {

	    	$("h2").html("Sunday Funday");
	    }
	    else if (day == 'Monday') {

	    	$("h2").html("Finished with your Monday grind??");
	    }
	    else if (day == 'Tuesday') {

	    	$("h2").html("Tuesday Brewsday");
	    }
	    else if (day == 'Wednesday') {

	    	$("h2").html("Happy Humpday");
	    }
	    else if (day == 'Thursday') {

	    	$("h2").html("Thristy Thursday");
	    }
	    else if (day == 'Friday') {

	    	$("h2").html("Freedom Friday");
	    }
	    else {

	    	$("h2").html("Saturday Fun!!");
	    }
}
