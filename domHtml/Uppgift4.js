let myH1 = document.querySelector("h1")
console.log(myH1)
let avant = myH1.previousElementSibling
console.log(avant)

let enfant = avant.firstElementChild
console.log(enfant)

let  a = enfant.firstElementChild
console.log(a)

let prochaine = a.nextElementSibling
console.log(prochaine)
let firstnodechild = prochaine.firstChild
console.log(firstnodechild)


