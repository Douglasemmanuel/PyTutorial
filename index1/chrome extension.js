
let myLeads = ["www.w3schools.com","www.epiclead.com","www.awesomelead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)
//  inputEl = "Hello!"
// inputBtn.addEventListener("click",function(){
//     console.log("Button clicked!")
// })
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderleads()
    // console.log(myLeads)
})
function renderleads(){
    let listItems = ""
  for (let i = 0;i< myLeads.length;i++){
    // console.log(myLeads[i])
    // listItems += "<li><a target='_blank' href='"+ myLeads[i] + "'>"+ myLeads[i] + "</a></li> "
    listItems += `
     <li>
     <a target='_blank' href="${myLeads[i]}">
     $ {myLeads[i]}
      </a>
     </li>
       `
    console.log(listItems)
  }
  ulEl.innerHTML = listItems
}

// ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
"www.w3schools.com"
//   const li =  document.createElement("li")
//   li.textContent = myLeads[i]
//   ulEl.append(li)
// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy!</button>"
// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }
// function saveLead(){
//     console.log("Button clicked!")
// }
// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click",function(){
//     console.log("Button clicked from addEventListener")
// })
// let box = document.getElementById("box")
// box.addEventListener("click",function(){
//     console.log("I want to open the box!")
// })
// const basePrice = 520
// const  discount = 120
// let shippingCost = 12
// let shippingTime = "5 - 12 days"
// shippingCost = 15
// shippingTime = "7-14 days"
// const fullPrice = basePrice - discount + shippingCost
//  let result="Total cost:" + fullPrice + ". It will arrive in" + shippingTime
//  console.log(result)