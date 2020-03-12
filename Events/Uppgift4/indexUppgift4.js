const mousse = document.querySelector(".off")
const trg = document.querySelector("#target")

mousse.addEventListener("mouseenter",function(){
    mousse.textContent = "Amin"
    mousse.classList.replace("off", "on") 
    

})
mousse.addEventListener("mouseleave",function(){
    trg.classList.replace("on", "off")
    
})



