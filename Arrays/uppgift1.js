// 1. Läs en array
// Skriv en funktion som tar emot en array som ett argument. Returnera det första värdet i arrayen:
 
// getFirst([1, 2, 3]) // 1


// Skriv sedan en annan funktion som tar emot en array som ett argument. Returnera istället det sista värdet i arrayen. 

// getLast([1, 2, 3]) // 3

// Skriv nu en tredje funktion som tar emot en array, samt ett nummer, som ett argument.
//  Returnera det värde i arrayen som har samma
//  index som numret som skickades in. Om värdet inte finns så skall du returnera -1. 

// getN([1, 2, 3], 1) // 2


function getFirst(arr, index){
    
    return arr[index]

}
console.log(getFirst([1,2,3], 1))

function getFirst(arr){
    
    return arr[arr.length -1]

}
console.log(getFirst([1,2,3], ))