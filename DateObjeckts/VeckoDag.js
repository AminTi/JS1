// let date =  new Date(2014, 0, 3)

// function getWeekDay(date){
//   const days = ["Sönda","Måndag","tisdag","Onsdag","torsdag","fredag","lördag"]

//  return days[date.getDay()]
// }
// console.log(getWeekDay(date)) 


let data =  new Date(1987, 07, 31)
function aminElfakiri(date){
    const jours = ["Sönda","Måndag","tisdag","Onsdag","torsdag","fredag","lördag"]
return jours[data.getDay()]
}
console.log(aminElfakiri(data))