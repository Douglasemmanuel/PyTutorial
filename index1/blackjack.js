// let firstcard = 6
// let secondcard = 9
// let sum = firstcard + secondcard
// if (sum < 21){
//     console.log("do you want to draw a new card?")
// }else if(sum === 21){
//    console.log("Wohoo! You've got Blackjack!")
// }else {
//     console.log("You're out of the game!")   
// }
// let age = 21
// if (age<21){
//     console.log("You can not enter the club")
// }else{
//     console.log("Welcome")
// }
// let age = 100
// if(age < 100){
//     console.log("Not elegible")
// }else if (age ===100){
//     console.log("Here is your birthday card from the king")
// }else{
//     console.log("Not elegible ,you have already gotten yours from the king")  
// }

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl =document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el")

function getRandomCard(){

   let randomNumber = Math.floor(Math.random()* 13) + 1
   if (randomNumber > 10){
    return 10
   }else if (randomNumber === 1){
      return 11
   }else{
      return randomNumber
   }
}
function startGame(){
    let  isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    let cards = [firstcard,secondcard]
    let Sum = firstcard + secondcard 
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "cards: " 
    for(let i = 0;i < cards.length;i++){
      cardsEl.textContent += cards[i] + " "  
    }
    sumEl.textContent = "sum:" + sum 
    if (sum<=20){
        message = "Do you want to draw a new card"
        // console.log("Do you want to draw a new card?")
    }else if (sum === 21){
        message = "wohoo! you 've got blackjack"
        // console.log("wohoo! you 've got blackjack")
        hasBlackJack = true
    }else{
        message = "You are out of the game!" 
        // console.log("You are out of the game!")  
        isAlive = false
    }
    
     messageEl.textContent = message
}

// function newCard(){
// //  console.log("draw a  new card")
//     if(isAlive === true && hasBlackJack === false){
//        let card = getRandomCard()
//        sum += card
//        cards.push(card)
//        renderGame()
//     }
 
// }
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

// let likesDocumentaries = true
// let likesStartups = false
// if (likesDocumentaries === true || likesStartups === true){
//     recommendMovie()
// }
// function recommendMovie (){
//     console.log("Hey,check out this new film we think you will like!")
// }

// let hasCompletedCourse = true
// let givesCertificate = true
// if (hasCompletedCourse === true || givesCertificate === true){
//     // if (givesCertificate === true){
//     //     generateCertificate()
//     // }
//     generateCertificate()
// }
// function generateCertificate(){
//     console.log("Generating certificate....")
// }
// let hasSolvedchallenge = false
// let hasHintsLeft = false
// if (hasSolvedchallenge === false && hasHintsLeft){
//     showSolution()
// }
// function showSolution(){
//    console.log("showing the solution....") 
// }
// let randomNumber = Math.floor( Math.random() * 6 ) + 1
// console.log(randomNumber)
// function rollDice(){
//     let randomNumber = Math.floor(Math.random()* 6) + 1
//     return randomNumber
// }
// console.log(rollDice())
// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)
// let player1Time = 102
// let player2Time = 107
// function getFastestRaceTime(){
// if (player1Time < player2Time){
//     return player1Time
// }else if (player2Time< player1Time){
//     return player2Time
// }else{
//     return player1Time
// }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function getTotalRaceTime(){
//     return player1Time + player2Time
// }
// let totalTime  = getTotalRaceTime()
// console.log(totalTime)

// if (sum<=20){
//     message = "Do you want to draw a new card"
//     // console.log("Do you want to draw a new card?")
// }else if (sum === 21){
//     message = "wohoo! you 've got blackjack"
//     // console.log("wohoo! you 've got blackjack")
//     hasBlackJack = true
// }else{
//     message = "You are out of the game!" 
//     // console.log("You are out of the game!")  
//     isAlive = false
// }
// console.log(message)
// console.log(isAlive)
// console.log(hasBlackJack)
// let firstcard = 10
// let secondcard = 11
// let sum = firstcard + secondcard + 4
// let hasBlackJack = false
// let isAlive = true
// if (false){
//     console.log("Do you want to draw a new card?")
// }else if (true){
//     console.log("wohoo! you 've got blackjack")
//     hasBlackJack = true
// }else{
//     console.log("You are out of the game!")  
//     hasBlackJack = false
// }
// console.log(isAlive)
// console.log(hasBlackJack)
// let featuredPosts = ["Check out my Netflix clone",
//   "Here is the code for my project",
//    "relaunched my portfolio"]
//    console.log(featuredPosts[2])
//    console.log(featuredPosts.length)
// let experience = ["CEO at scrimba","Frontend developer at xeneta", "People counter for Nortstact"]
// let per = ["Douglas Emmanuel" ,35,true]
// let cards1 = [7,4]
// console.log("Hello")
// cards1.push(6)
// console.log(cards1)
// let message1 =[
//     "Hey,how's it going?",
//     "I'm great,thank you! How about you?",
//     "All good .Been working on my portfolio lately."
// ]
// let newMessage = "Same here!"
// message1.push(newMessage)
// console.log(message1)
// message1.pop()
// console.log(message1)
// for (let count = 1;count<11;count += 1){
//     console.log(count)
// }
// for (let i = 0; i < 6;i +=1){
//     console.log(i)
// }
// for (let i = 10; i < 101; i +=10){
//     console.log(i)
// }
// let message1 =[
//     "Hey,how's it going?",
//     "I'm great,thank you! How about you?",
//     "All good .Been working on my portfolio lately.",
//     "Same here",
//     "Great to hear",
//     "biggie"
// ]
// console.log(message1[0])
// for(let i = 0;i < message1.length;i+=1){
//   console.log(message1[i])  
// }
// let cards1 = [7,3,9]
// for(let i = 0 ; i < cards1.length ; i++){
//     console.log(cards1[i])
// }
// let sentence = ["Hello","My","name","is","Per"]
// let greetingEl = document.getElementById("greeting-el")
// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] +" "
//     // console.log(sentence)
// }
// console.log(sentence)
