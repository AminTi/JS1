const btn = document.querySelector("#toggleMenu")
const a = document.querySelector("#menu")

btn.addEventListener("click", function(){
 
      if (a.classList.contains("hide")){
        btn.textContent = "Hide Button"
        a.classList.remove("hide")
    }
    else {
        btn.textContent = "Show Button"
        a.classList.add("hide")
    }
    })


    