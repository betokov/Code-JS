var myTimer = document.getElementById('timer'),
	hour = myTimer.querySelector('.hour'),
	minutes = myTimer.querySelector('.minutes'),
	seconds = myTimer.querySelector('.seconds');

function timer(h, m, s) {
	tHour = +h;
	tMinutes = +m;
	tSeconds = +s;

	if(tHour < 10){
		hour.innerHTML = '0'+tHour;
	}  else{
		hour.innerHTML = tHour;
	}

	if(tMinutes < 10) {
		minutes.innerHTML = '0'+tMinutes;
	}  else{
		minutes.innerHTML = tMinutes;
	}

	if(tSeconds < 10) {
		seconds.innerHTML = '0'+tSeconds;
	}  else{
		seconds.innerHTML = tSeconds;
	}

	var myTimer = setInterval(function() {

		--tSeconds;

		if(tHour == 0 && tMinutes == 0 && tSeconds == 0) {
			clearInterval(myTimer);
		}


		if(tSeconds < 0) {
			--tMinutes;
			minutes.innerHTML = tMinutes;
			tSeconds = 59;
		}

		if(tMinutes < 0) {
			--tHour;
			hour.innerHTML = tHour;
			tMinutes = 59;
		}


		if(tHour < 10){
			hour.innerHTML = '0'+tHour;
		} else {
			hour.innerHTML = tHour;
		}
		if(tMinutes < 10){
			minutes.innerHTML = '0'+tMinutes;
		} else {
			minutes.innerHTML = tMinutes;
		}
		if(tSeconds < 10){
			seconds.innerHTML = '0'+tSeconds;
		} else {
			seconds.innerHTML = tSeconds;
		}
	}, 1000);
}

timer(1, 1, 1);