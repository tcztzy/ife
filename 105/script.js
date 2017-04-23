(function () {
  let queue = document.getElementById('queue')
  let leftIn = document.getElementById('left-in')
  let rightIn = document.getElementById('right-in')
  let leftOut = document.getElementById('left-out')
  let rightOut = document.getElementById('right-out')
  let numberInput = document.getElementById('number-input')
  let random = document.getElementById('random')
  let insertionSort = document.getElementById('sort')

  function render (number, position) {
    if (validate(number)) {
      let li = document.createElement('li')
      li.style.height = number + 'px'
      li.setAttribute('data-number', number)
      switch (position) {
        case 'l': queue.insertBefore(li, queue.firstElementChild); break
        case 'r': queue.appendChild(li); break
      }
      numberInput.value = ''
    } else {
      window.alert('Your input is not a valid number!')
    }
  };

  function pop (direction) {
    let element = direction === 'l' ? queue.firstElementChild : queue.lastElementChild
    window.alert(element.textContent)
    queue.removeChild(element)
  }

  function validate (value) {
    return !isNaN(value) && !!value && value >= 10 && value <= 100
  }

  function getRandomIntInclusive (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
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
  random.addEventListener('click', function (event) {
    for (let i = 0; i < 10; i++) {
      render(getRandomIntInclusive(10, 100), 'l')
    }
  })
  insertionSort.addEventListener('click', function () {
    let arrayToSort = Array.from(queue.children)
    for (let i = 0; i < arrayToSort.length; i++) {
      let currentElement = arrayToSort[i]
      let currentNumber = parseInt(currentElement.getAttribute('data-number'))
      let nextSibling = currentElement.nextElementSibling
      while (nextSibling) {
        if (currentNumber > parseInt(nextSibling.getAttribute('data-number'))) {
          queue.removeChild(currentElement)
          nextSibling.insertAdjacentElement('afterend', currentElement)
          nextSibling = nextSibling.nextElementSibling
        }
        nextSibling = nextSibling.nextElementSibling
      }
    }
  })
})()
