// 3. Modifiera klonen
// Du ska nu ändra på din klon, så att den får nytt innehåll. 
// Byt namn på produkten från “Soffa” till “Hatt”
// Byt pris på produkten till “150 kr”
// Byt bild på produkten till https://cdn.blocket.com/static/2/lithumbs/73/7308470456.jpg
// Ändra tiden till “Idag 13:37”

// Ledtrådar:
// Det enklaste sättet att hitta fram till de här elementen är att använda querySelector(),
//  med referens till din klon som utgångspunkt:
// myClone.querySelector('h1 a')
// Du kan ändra innehållet i en nod genom att använda textContent-propertyn:
// cloneProduct.querySelector('h1 a').textContent = 'Hatt'

let artM = document.querySelector('#item_87363892')
let body = document.querySelector('body')
let cln = artM.cloneNode(true)
body.appendChild(cln)

// artM.querySelector('#item_87363892').textContent =  " Hatt "
cln.querySelector("h1 a").textContent = " Hatt "
cln.querySelector(".list_price").textContent = "150"
cln.querySelector("img").src = "https://cdn.blocket.com/static/2/lithumbs/73/7308470456.jpg"
cln.querySelector("time").textContent = "14:00"