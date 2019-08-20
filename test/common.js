window.onload = function() {


/*DATA JSON*/
var xhr = new XMLHttpRequest();
xhr.open('GET', 'bd.json', false);
xhr.send();
if (xhr.status != 200) {
    // обработать ошибку
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
} else {
	const data = JSON.parse(xhr.responseText);
	var objs = [];

	for(bd in data){
		for(val in data[bd]){
			objs.push(data[bd][val]);
		}
	}
}
/*END DATA JSON*/

var myTable = document.querySelector('#myTable');
var inp = document.querySelector('#autocomplete');
var btn = document.querySelector('#btn');

/*TABLE*/
for (var i = 0; i < objs.length; i++) {

	var tr = document.createElement('tr');

	for(val in objs[i]){

		var th = document.createElement('th');
		var td = document.createElement('td');

		if(i == 0){
			th.innerHTML = val;
			tr.appendChild(th);
		} else {
			td.innerHTML = objs[i][val];
			tr.appendChild(td);
		}

	}

	myTable.appendChild(tr);
}
/*END TABLE*/

/*FUNCTION INIT*/
function init(){


	var inpVal = inp.value.toLowerCase();

	if(inpVal != ''){

		myTable.innerHTML = '';

		for (var i = 0; i < objs.length; i++) {

			var tr = document.createElement('tr');

			for(val in objs[i]){

				var th = document.createElement('th');
				var td = document.createElement('td');

				if(i == 0){
					th.innerHTML = val;
					tr.appendChild(th);
				}

			}

			myTable.appendChild(tr);
		}

		search(inpVal);
	}


}
/*end init*/

/*SEARCH*/
function search(inpVal) {

	for (var i = 0; i < objs.length; i++) {
		var tr = document.createElement('tr');


		var flag = false;

		for(val in objs[i]){

			if(objs[i][val].toLowerCase().indexOf(inpVal) !== -1){
				flag = true;
				break;
			}

		}

		if(flag){
			for(val in objs[i]){

				var th = document.createElement('th');
				var td = document.createElement('td');

				td.innerHTML = objs[i][val];
				tr.appendChild(td);
			}
		}

		myTable.appendChild(tr);
	}


}

/*END SEARCH*/









btn.addEventListener('click', init);





}