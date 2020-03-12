let artM = document.querySelector('#item_87363892')
let body = document.querySelector('body')
let cln = artM.cloneNode(true)
body.appendChild(cln)

cln.querySelector("h1 a").textContent = " Hatt "
cln.querySelector(".list_price").textContent = "150"
cln.querySelector("img").src = "https://cdn.blocket.com/static/2/lithumbs/73/7308470456.jpg"
cln.querySelector("time").textContent = "14:00"

//Uppgif4
let newArticle = document.createElement("article")
body.appendChild(newArticle)

let newH1 = document.createElement("h1")
newArticle.appendChild(newH1)

const newA = document.createElement("a")
newA.textContent = "brödrost"
newA.href = "https://www.blocket.se"
newH1.appendChild(newA)

const new2A = document.createElement("a")
newArticle.appendChild(new2A)

const photo = document.createElement("img")
new2A.href = "https://www.blocket.se"
photo.src = "https://cdn.blocket.com/static/2/lithumbs/30/3084337223.jpg"
new2A.appendChild(photo)

const div = document.createElement("div")
newArticle.appendChild(div)

const header = document.createElement("header")
div.appendChild(header)

const container = document.createElement("div")
header.appendChild(container)

const subA = document.createElement("a")
container.appendChild(subA).textContent = "Köksjo"
subA.href = "https://www.blocket.se"

const suba2 = document.createElement("a")
container.appendChild(suba2).textContent = " Kista, Hässelby, Vällingb…"
suba2.href = "https://www.blocket.se"


const time = document.createElement("time")
header.appendChild(time).textContent = "Idag 14:47"

const p = document.createElement("p")
div.appendChild(p).textContent = "200kr"


