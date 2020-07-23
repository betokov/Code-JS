var a = 0,
    operation = 0,
    btn = document.querySelectorAll('span'),
    reload = document.querySelector('button'),
    game1 = document.querySelector('#game1'),

    win = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
    ],

    x = [],
    o = [];



for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', game);
    btn[i].setAttribute('data-c', [i+1]);
}



function game() {

    operation++;

    if(this.innerHTML == ''){
        if(a){

            this.innerHTML = "O";
            o.push(+this.getAttribute('data-c'));

            if(o.length > 2) {
                result(o, 'O');
            }

            a = 0;

        } else{

            this.innerHTML = 'X';
            this.style.background = "gray";
            x.push(+this.getAttribute('data-c'));

            if(x.length > 2) {
                result(x, 'X');
            }

            a = 1;

        }

    }



}/*END GAME*/



function result(num, name) {

    var sum = 0;

    for (var i = 0; i < win.length; i++) {

        for (var j = 0; j < win[i].length; j++) {
            for (var a = 0; a < num.length; a++) {
                if(num[a] == win[i][j]){
                    sum++;
                }
            }
        }

        if(sum == 3) {
            number(name);
            return;
        } else {
            sum = 0;
        }

    }

    if(operation == 9) {
        alert('Draw');
        game1.style.pointerEvents = 'none';
        reload.style.display = 'block';
    }


}/*END RESULT*/



function number(winner){
    alert(`Player ${winner} is win`);
    game1.style.pointerEvents = 'none';
}


reload.addEventListener('click', function(){
    for (var i = 0; i < btn.length; i++) {
        btn[i].innerHTML = "";
        btn[i].removeAttribute("style");
    }

    x = [];
    o = [];
    a = 0;
    operation = 0;
    game1.style.pointerEvents = 'auto';
});