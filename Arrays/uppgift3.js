// 3. Slå ihop array
// Skriv en funktion som räknar ihop alla värden i en array, och returnerar summan.

// Ledtråd: Du kan skapa en variabel som har värde 0. Sedan kan du loopa igenom arrayen, 
// och öka värdet på din variabel med värdet från arrayen. Returna sedan din variabel. 

// sum([1, 2, 3]) // 6



function count(arr){

   let  sum =0

   for (let i = 0; i < arr.length; i++){
     
    sum += arr[i]
   }
return sum

}
console.log(count([5,5,5]))