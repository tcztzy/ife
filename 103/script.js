(function() {
    let queue = document.getElementById('queue');
    let left_in = document.getElementById('left-in');
    let right_in = document.getElementById('right-in');
    let left_out = document.getElementById('left-out');
    let right_out = document.getElementById('right-out');
    let number_input = document.getElementById('number-input');
    function render(number, position) {
        if (validate(number)) {
            let li = document.createElement('li');
            li.textContent = number;
            switch (position) {
            case 'l': queue.insertBefore(li, queue.firstElementChild); break;
            case 'r': queue.appendChild(li); break;
            default: break;
            }
            number_input.value = '';
        } else {
            alert("Your input is not a number!");
        }
    };
    function pop(direction) {
        let element = direction == 'l' ? queue.firstElementChild : queue.lastElementChild;
        alert(element.textContent);
        queue.removeChild(element);
    }
    function validate(value) {
        return !isNaN(value) && value;
    }
    left_in.addEventListener('click', function() {
        let number = number_input.value;
        render(number, 'l');
    });
    right_in.addEventListener('click', function() {
        let number = number_input.value;
        render(number, 'r');
    });
    left_out.addEventListener('click', function() {
        pop('l');
    });
    right_out.addEventListener('click', function() {
        pop('r');
    });
    queue.addEventListener('click', function(event) {
        if(event.target.nodeName.toLowerCase()=="li"){
            queue.removeChild(event.target);
        }
    });
})();
