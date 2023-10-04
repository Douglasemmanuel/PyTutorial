// let person = {
//     name:"Emmanuel" ,
//     age : 35 ,
//     country:"Norway"
// }
// function logData(){
//     console.log(person.name + " " + "is" + " " + person.age + " " + "year old and lives in" + " "+ person.country )
// }
// logData()
// let age = 15
// if (age < 6 ){
//     console.log("Free")
// }else if (age < 18 ){
//     console.log("child discount")
// }else if (age < 27) {
//     console.log("student discount")
// }else if (age< 67){
//     console.log("Full price")
// }else {
//     console.log("senior citizen discount")
// }
// let largecountries = ["china", "India", "USA", "Indonesia","Paskistan"]
// console.log("The 5 largest countries in the world:")
// console.log(largecountries.push("Monaco"))
// console.log(largecountries.pop())
// console.log(largecountries.shift())
// console.log(largecountries.unshift("Tuvalu"))
// console.log(largecountries)
// console.log(largecountries[4])
// for  (let i=0; i <largecountries.length;i++){
//     console.log("-" + largecountries[i])
// }
// let dayofMonth = 31
// let weekday = "Tuesday"
// if (dayofMonth === 13 && weekday === "Friday"){
//     console.log("hey!!")
// }
// let hands = ["rock","paper","scissor"]
// function getHand(){
//     let randomIdex =Math.floor (Math.random()* 3)
//     return hands [randomIdex]
// }
// console.log(getHand())
// const fighters = ["A","B", "C", "D", "E", "F", "G"]
// const stageEl = document.getElementById("stage")
// const fightButton = document.getElementById("fighterButton")
// fightButton.addEventListener("click", function(){
//     const randomIdexOne = Math.floor( Math.random() * fighters.length)
//     const randomIdexTwo = Math.floor( Math.random() * fighters.length)
//     stageEl.textContent = `${fighters[randomIdexOne]} vs ${fighters[randomIdexTwo]}`
// // console.log("click")
// // console.log(fighters[randomIdex])
// console.log(fighters[randomIdex])
// })
let fruit = ["Apple", "Orange","Apple", "Apple","Orange"]
let appleshelf = document.getElementById("apple-shelf")
let orangeshelf = document.getElementById("orange-shelf")
function sortFruit(){
for (let i = 0 ;i< fruit.length; i ++){
if (fruit[i]=== "Apple"){
    appleshelf.textContent +="Apple"
}else if (fruit [i]=== "Orange"){
    orangeshelf.textContent += "Orange"
}
}
}
sortFruit()

// passwordGenerator
  const characters = [""]
