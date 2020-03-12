const bttn = document.querySelector("#btn")
const input = document.querySelector("#name")
const  output = document.querySelector("#output")



bttn.addEventListener("click", function(){
    
    output.textContent = "hello " + input.value
})