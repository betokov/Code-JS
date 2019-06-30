 /*
    ****Autocomplete***
 */

 var list = document.getElementById("list"),
 listDefault =  ['Африка', 'Бразилия', 'Великобритания', 'Велинктон', 'Греция', 'Дания'],
 div = document.createElement("div"),
 span = document.createElement("span");


//Search elements in array
 var search = function() {

 	container.style.display = "none";
 	container.innerHTML = "";

 	var newArr = [];

 	for (var i = 0; i < listDefault.length; i++) {

 		newArr.push(listDefault[i].toLowerCase());

 		if(newArr[i].indexOf(list.value.toLowerCase()) !== -1){
 			container.style.display = "block";
 			var span = document.createElement("span");
 			span.addEventListener('mousedown', addSpan);
 			container.appendChild(span).innerText = listDefault[i];

 		}

 	}
 }


//Focus input
 var infocus = function (){

 	document.body.appendChild(div).setAttribute("id", "container");

 	if(list.value == ''){

 		for (var i = 0; i < listDefault.length; i++) {

 			var span = document.createElement("span");
 				span.addEventListener('mousedown', addSpan);
 			container.appendChild(span).innerText = listDefault[i];

 		}

 		container.style.display = "block";

 	} else {

 		search();

 	}

 }



//Unfocus input
 var onfocus = function(){
 	container.innerHTML = "";
 	container.style.display = "none";
 }

 function addSpan() {
	list.value = this.innerHTML;
	onfocus();
}

//KeyUp
 var inkeyup = function (){
 	search();
 }




 list.addEventListener("focus", infocus);
 list.addEventListener("blur", onfocus);
 list.addEventListener("keyup", inkeyup);





