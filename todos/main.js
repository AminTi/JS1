let btn = document.querySelector(".btn")
let mydiv = document.querySelector(".div")

let arr = []
let a = "amin"


btn.addEventListener("click", function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi");
    let a = arr.push(fruits)


})

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi"));


console.log(mydiv.textContent = fruits)