// document.getElementById("count-el").innerText = 5

// let firstbatch = 5
// let secondbatch = 7
// let count = firstbatch + secondbatch
// console.log(count)
// let myAge = 35
// let humanDogRatio =7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
// let count = 5
// count = count + 1
// count = count +10
// console.log(count)
// let bonuspoint = 50
// console.log(bonuspoint)
// bonuspoint = bonuspoint + 50
// console.log(bonuspoint)
// bonuspoint = bonuspoint -75
// console.log(bonuspoint)
// bonuspoint = bonuspoint + 5
// console.log(bonuspoint)
// function increment (){
//     console.log("The button was clicked")
// }
// function countdown(){
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// }
// countdown()

// countdown()
// function Number(){
//     console.log(42)
// }
// Number()
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function loglaptime(){
//     let totaltime = lap1 + lap2 + lap3
//     console.log(totaltime)
// }
// loglaptime()
// let lapscompleted = 0
//  function incrementlap(){
//     lapscompleted = lapscompleted + 1
// }
// incrementlap()
// incrementlap()
// incrementlap()
// console.log(lapscompleted)
// let count = 0
// function increment(){
//     console.log("clicked")
//     count = count + 1
//     console.log(count)
// }
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console.log(countEl)
let count = 0
console.log(saveEl)
function increment(){
    count += 1
    countEl.textContent = count
    console.log(count)
}
function save(){
 let countStr = count + " - "
 saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0
}



// save()
// let username ="per"
// console.log(username)
// let message = "you have three new notification"
// let messagetouser = message + "," + username + "!"
// console.log(messagetouser)
// console.log(message + "," + username + "!")
// let name = "Douglas Emmanuel"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)
// let name = "42"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)
//  let points = 4
//  let bonuspoint = "10"
//  let totalpoints = points + bonuspoint
//  console.log(totalpoints)
// let welcomeEL = document.getElementById("welcome-el")
// let name = "Douglas Emmanuel"
// let  greeting = "Welcome back "
// welcomeEL.innerText = greeting + name
// // welcomeEL.innerText  = welcomeEL.innerText + "game"
// welcomeEL.innerText   += "game"

