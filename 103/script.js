(function () {
  let queue = document.getElementById('queue')
  let leftIn = document.getElementById('left-in')
  let rightIn = document.getElementById('right-in')
  let leftOut = document.getElementById('left-out')
  let rightOut = document.getElementById('right-out')
  let numberInput = document.getElementById('number-input')
  function render (number, position) {
    if (validate(number)) {
      let li = document.createElement('li')
      li.textContent = number
      switch (position) {
        case 'l': queue.insertBefore(li, queue.firstElementChild); break
        case 'r': queue.appendChild(li); break
        default: break
      }
      numberInput.value = ''
    } else {
      alert('Your input is not a number!')
    }
  };
  function pop (direction) {
    let element = direction === 'l' ? queue.firstElementChild : queue.lastElementChild
    alert(element.textContent)
    queue.removeChild(element)
  }
  function validate (value) {
    return !isNaN(value) && value
  }
  leftIn.addEventListener('click', function () {
    let number = numberInput.value
    render(number, 'l')
  })
  rightIn.addEventListener('click', function () {
    let number = numberInput.value
    render(number, 'r')
  })
  leftOut.addEventListener('click', function () {
    pop('l')
  })
  rightOut.addEventListener('click', function () {
    pop('r')
  })
  queue.addEventListener('click', function (event) {
    if (event.target.nodeName.toLowerCase() === 'li') {
      queue.removeChild(event.target)
    }
  })
})()
