/*
   ****Autocomplete***
*/
let autocomplete = document.querySelector('.autocomplete'),
    listDefault = ['Африка', 'Бразилия', 'Великобритания', 'Велинктон', 'Греция', 'Дания'],
    div = document.createElement("div"),
    span = document.createElement("span");

//Search elements in array
var search = function () {
    document.body.appendChild(div).classList.add('autocomplete-down');
	let autocompleteDown = document.querySelector('.autocomplete-down');

	autocompleteDown.style.display = "none";
    autocompleteDown.innerHTML = "";

    var newArr = [];

    for (var i = 0; i < listDefault.length; i++) {

        newArr.push(listDefault[i].toLowerCase());

        if (newArr[i].indexOf(autocomplete.value.toLowerCase()) !== -1) {
			autocompleteDown.style.display = "block";
            var span = document.createElement("span");
            span.addEventListener('mousedown', addSpan);
            autocompleteDown.appendChild(span).innerText = listDefault[i];
        }

    }
}

//Focus input
var infocus = function () {

   document.body.appendChild(div).classList.add('autocomplete-down');
	let autocompleteDown = document.querySelector('.autocomplete-down');

	if (autocomplete.value == '') {

        for (var i = 0; i < listDefault.length; i++) {

            var span = document.createElement("span");
            span.addEventListener('mousedown', addSpan);
            autocompleteDown.appendChild(span).innerText = listDefault[i];

        }

        autocompleteDown.style.display = "block";

    } else {
        search();
    }

}

//Unfocus input
var onfocus = function () {
	let autocompleteDown = document.querySelector('.autocomplete-down');
		autocompleteDown.innerHTML = "";
    	autocompleteDown.style.display = "none";
}

function addSpan() {
    autocomplete.value = this.innerHTML;
    onfocus();
}

//KeyUp
var inkeyup = function () {
    search();
}

autocomplete.addEventListener("focus", infocus);
autocomplete.addEventListener("blur", onfocus);
autocomplete.addEventListener("keyup", inkeyup);