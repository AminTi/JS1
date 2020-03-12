const age = document.querySelector("#age")
const bttn = document.querySelector("#btn")
const ouput = document.querySelector("#output")


function checkAge(age){
    if(isNaN(age) === true){
        return "Skriv en siffra"
 
    }
     if (age >= 18){
        return "du får rösta"

    }
    else {
         return "du får inte rösta"
    }
    
}



bttn.addEventListener("click",function(){

    ouput.innerHTML = checkAge(age.value)
})