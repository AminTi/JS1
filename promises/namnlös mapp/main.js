function greatherThan(num){
    return new Promise(function (resolve,reject){
        if (num >= 10){
           resolve()
        }
        else{
            reject()
        }

    })
   }

   greatherThan(19).then(function(){
       console.log("You did It")
   })

   greatherThan(100).catch(function(){
       console.log("Failed")
   })