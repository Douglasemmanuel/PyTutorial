// let firstName = "per"
// let LastName = " Borgen"
// let fullName = firstName +" " + LastName
// console.log(fullName)
// let mypoints =3
// function add3points(){
//     mypoints +=3
// }
// function remove1points(){
//     mypoints -=1
// }

// add3points()
// add3points()
// add3points()
// remove1points()
// remove1points()
// console.log(mypoints)
// console.log("my points:" + 5 + 9)
let errorparagraph = document.getElementById("error")
console.log(errorparagraph)
function purchase(){
   console.log("button clicked")
   errorparagraph.textContent = "something went wrong,please try again"
}