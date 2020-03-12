// Skriv en funktion som hittar det högsta värdet i en array, och returnerar det.

// Ledtråd: Du kan först titta på det första värdet i arrayen och spara det i en variabel som du senare kan returna.
//  Sedan kan du skriva en loop som tittar på alla värden i arrayen, och i varje loop kan du jämföra
//   värdet i arrayen med värdet i din variabel du skall returna. Om värdet i arrayen är högre, så kan du ändra
//    värdet i variabeln du skall returna till det högre värdet. 

// max([6, 12, 5]) // 12




function ma(arr){
    
    let count = arr[0]
 for(let i = 0; i < arr.length; i++){
        
        if (arr[i] > count){
          
            count = arr[i]
          
        }
       
    }
    return count
}
console.log(ma([1,2,3,4,5,6,7]))