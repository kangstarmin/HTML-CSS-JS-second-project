const numbers_box = document.querySelector('.numbers_box')
const draw = document.querySelector('#draw')
const reset = document.querySelector('#reset')
const lottoNumbers = []
const colors = ['rgb(255, 190, 68)', 'rgb(121, 198, 228)', 'rgb(148, 145, 145)', 'rgb(224, 110, 110)', 'rgb(147, 218, 81)']

new WOW().init();

function paintNumber(number){
  const create_numbersDiv = document.createElement('div')
  create_numbersDiv.classList.add('create_numbers')
  create_numbersDiv.classList.add('wow')
  create_numbersDiv.classList.add('fadeIn')
  create_numbersDiv.setAttribute("data-wow-duration", "3s")
  create_numbersDiv.setAttribute("data-wow-iteration", "1")
  let colorIndex = Math.floor(number / 10)
  create_numbersDiv.style.backgroundColor = colors[colorIndex]
  create_numbersDiv.textContent = number
  numbers_box.appendChild(create_numbersDiv)
}

draw.addEventListener('click', function(){
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  }
})

reset.addEventListener('click', function(){
  lottoNumbers.splice(0, 6)
  numbers_box.innerHTML = ""
})