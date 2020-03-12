const allCandy = [
  'Pop Rocks',
  'Jawbreakers',
  'Jolly Ranchers',
  'Smarties',
  'Milk Duds',
  'Starburst',
  'Junior Mints',
  'Swedish Fish',
  'Milky Way',
  'Skittles',
]

const candylist = document.querySelector('#candylist') //Listan
const filterby = document.querySelector('#filterby') // input



function drawList(filteredCandy) {
  candylist.innerHTML = ''
  filteredCandy.forEach(function (candy) {
    const li = document.createElement('textarea')
    li.textContent = candy
    candylist.appendChild(li)
  })
}

filterby.addEventListener('input', function (event) {
  const searchFor = event.currentTarget.value.toLowerCase()
  const filteredCandy = allCandy.filter(function (candy) {
    return candy.toLowerCase().includes(searchFor)

  })
  fun(myfilter)



})
drawList(allCandy)