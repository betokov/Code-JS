window.onload = function() {

	var inp = document.querySelector('#desk');
	var first = '', second = '', operations = '';
	var sum = document.querySelector('button#sum');
	var del = document.querySelector('button#del');


	var btns = document.querySelectorAll('button');

	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', operation)
	}

	function operation() {



		var span = document.createElement('span'),
		elem = this.getAttribute('data-click');



		if(elem == '-' || elem == '+') {
			sum.setAttribute('disabled', 'disabled');
			del.setAttribute('disabled', 'disabled');
		}


		first += elem;

		span.innerHTML = elem;
		inp.appendChild(span);

		if(first.length === 1){
			sum.removeAttribute('disabled');
			del.removeAttribute('disabled');
		}


	}





}