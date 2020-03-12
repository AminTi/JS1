const artist = document.querySelector("#artist")
const record = document.querySelector("#record")
const btn = document.querySelector("#btn")
const ulColection = document.querySelector("#collection")



btn.addEventListener("click",function(){

    const skappa = document.createElement("li")
    ulColection.appendChild(skappa)
    skappa.textContent = `${artist.value}  ${record.value}`
    artist.value = " "
    record.value = " "
}) 