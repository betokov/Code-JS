window.onload = function(){


    var btn = document.querySelector('#button'),
        task = document.querySelector('#task'),
        list = document.querySelector('#list');

    btn.onclick = addLi;

    task.onkeydown = function(e) {
        if(e.keyCode == 13 && task.value != '') {
            addLi();
        }
    }

    function addLi(){

        if(task.value) {

            var newLi = document.createElement('li'),
                span = document.createElement('span');
            span.classList.add('remove');
            newLi.innerHTML = task.value;
            newLi.setAttribute('data-list', task.value);
            newLi.appendChild(span);
            span.onclick = remove;
            list.appendChild(newLi);

            localStorage.setItem(task.value, task.value);
            task.value = '';

        }

    }

    function remove() {
        this.parentElement.remove();
        localStorage.removeItem(this.parentElement.getAttribute('data-list'));
    }


    if(localStorage != ''){
        for(var key in localStorage){

            if(key === 'length') return false;

            var localLi = document.createElement('li'),
                localSpan = document.createElement('span');

            localSpan.classList.add('remove');
            localLi.setAttribute('data-list', localStorage[key]);
            localLi.innerHTML = localStorage[key];
            localLi.appendChild(localSpan);
            list.appendChild(localLi);
            localSpan.onclick = remove;
        }

    }

}