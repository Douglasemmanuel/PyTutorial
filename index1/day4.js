var numbers =[3,56,2,48,5]
// MAP-create a new array by doing something with each items in an array
function double(x){
    return x * 2
}
const newNumbers = numbers.map(double)
console.log(newNumbers);
//using for Each
var newdigit = [];
    function newdigit1(X){
        newdigit.push(X * 2);

    }
 numbers.forEach(newdigit1)
 console.log(newdigit);
// FILTER- create a new array by keeping the items that returns true
const newfliter = numbers.filter((num)=>{
    return num > 10
});
console.log(newfliter);
// using for Each
var newfliter2 = [];
numbers.forEach((num)=>{
    if(num<10){
        newfliter2.push(num)
    }
})
console.log(newfliter2);
// FINDINDEX using findIndex
const FindIndex = numbers.findIndex((num)=>{
    return num > 10
})
console.log(FindIndex)
//REDUCE Accumulate a value by doing anything to each item in an array
 var  reducer = numbers.reduce((accumulator,currentNumber)=>{
    return accumulator + currentNumber
})
console.log(reducer)
//using for Each
var newreduce = 0;
numbers.forEach(( currentnum)=>{
    newreduce += currentnum
})
console.log(newreduce)
// Find the first item that matches the array
const Find = numbers.findIndex((num)=>{
    return num > 10
})
console.log(Find)










function fruitcolor (fruit){
    switch(fruit){
        case "apple":{
            let color = "red"
            return color}
            case "banana":{
                let color = "yellow"
            return color}
            default:
                return "other colors"
    }
}
console.log(fruitcolor("apple"))
console.log(fruitcolor("banana"))
let btn = document.getElementById ('btn')
let page = document.getElementById ('page')
let type = document.getElementById ('type')
 let form = document.getElementById('form')

console.log(btn)
console.log(page)
console.log(type)
console.log(form)
btn.style.color = "red"
// let x = game.innerHTML
console.log()
// let first =document.getElementById('first-name').value;
// console.log(first);
// let phone = document.querySelector('#phone-number').value;
// console.log(phone);
// let number =document.getElementById('phone-number');
// let email = document.getElementById('email');
// number.onfocus=()=>{
//     number.style.backgroundColor='yellow';
// }
// number.onblur = ()=>{
//     number.style.backgroundColor='red';  
// }
let h2 = document.querySelector('#registration');
h2.onmouseenter = ()=>{
    h2.style.color = 'red';
}
h2.onmouseleave = ()=>{
    h2.style.color = 'black';
}
// function displayAlert(){
//     alert('you clicked on submit button');
//     // alert('you clicked on submit button');
// }
document.getElementById('btn')
// .addEventListener('click',displayAlert)
document.getElementById('btn')
.addEventListener('click',function(){
    alert('you clicked on submit button');
})
document.getElementById('email').addEventListener('focus',function(){
    console.log(this);
    this.style.background='blue';  
})
document.getElementById('email').addEventListener('blur',function(){
    console.log(this);
    this.style.background='white';  
})
let button = document.querySelector('#btn');
let alertEl = document.querySelector('.alert');
let over = document.querySelector('.overlay');
let copy = document.getElementById('alertok');
let prompt = document.querySelector('.prompt')
let show = document.getElementById('dame');
let close = document.getElementById('pomptok');
function showAlert(){
    alertEl.classList.remove('hidden');
 over.classList.remove('hidden');
}
function hideAlert(){
    alertEl.classList.add('hidden');
    over.classList.add('hidden');
}
function showprompt(){
    prompt.classList.remove('hidden');
    over.classList.remove('hidden');
}
function hideprompt(){
    prompt.classList.add('hidden');
    over.classList.add('hidden');
}
button.addEventListener('click',showAlert);
copy.addEventListener('click',hideAlert);
show.addEventListener('click',showprompt);
close.addEventListener('click',hideprompt);
let div = document.createElement('div');
// create text content
// let textnode = document.createTextNode('This is a dynamically generated text content.')
// div.appendChild(textnode);
{/* <div>
    <p>1</p>
    <p>2</p>
    <p>3</p>
</div> */}
let h1 = document.createElement('h2');
h2.textContent = "HEADING";
div.appendChild(h2);
let p = ` <p>Lorem ipsum dolor sit amet.</p>`;
div.insertAdjacentHTML ('beforeend',p);
let container = document.querySelector("#volume");
container.appendChild(div);
let listdiv = document.querySelector('.meal');
container.insertBefore(div,listdiv);
div.classList.add('imort');
div.style.marginTop ="30px";
let div1 = document.createElement('div')
div1.classList.add('student');
let containerdiv = document.querySelector('#volume');
containerdiv.appendChild(div1);

let submit = document.querySelector('#hover');
// submitbtn.addEventListener('click',displaystudentDetails);
submit.addEventListener('click',displaystudentDetails);
function displaystudentDetails(){
    let first =document.getElementById('first-name').value;
    // let phone = document.querySelector('#phone-number').value;
    let number =document.getElementById('phone-number').value;
    let email = document.getElementById('email').value;
    let html = ` <div class="student">
             <div class="name">${first} ${first}</div>
             <div class="email">${email}</div>
             <div class="phonenumber">${number}</div>
             <button class="end">X</button>
             </div> `;
             
div1.insertAdjacentHTML('beforeend',html);
}

// localStorage.setItem('name','john');
// sessionStorage.setItem('name','john');
localStorage.setItem('name','john');
localStorage.setItem('friend','peter');
localStorage.setItem('job','developer');
localStorage.setItem('address','street123');
const name1 = localStorage.getItem('name');
console.log(name1);
localStorage.removeItem('name');
const Name = localStorage.getItem('name');
console.log(Name);
localStorage.clear();


const friends = ["john","peter","bob"];
localStorage.setItem("friends",JSON.stringify(friends));
const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);
let fruits;
if(localStorage.getItem["fruits"]){
 fruits = JSON.parse(localStorage.getItem("fruits"));
}else{
    fruits = [];
}
console.log(fruits);
// fruits.push("apple");
fruits.push("orange");
localStorage.setItem("fruits",JSON.stringify(fruits));
let str  = 'Good Morning.';
console.log(str);
setTimeout(function(){
    alert('this is an alert window!');
},5000);
console.log('have a good day.');
document.querySelector('.click');
let div5 = document.querySelector('.inner')
.addEventListener('click',getproducts);
function getproducts(){
    let xhr = XMLHttpRequest();
    xhr.open('GET','products.json',true);
    xhr.send();
    xhr.onprogress = function(){
        div5.textContent = "Loading..."
    }
    xhr.onload = function(){
        let products2 = JSON.parse(xhr.responsetext)
        let{arrayofproducts} = products2
        console.log(arrayofproducts);
    }
}


let promise = new Promise(function(resolved,rejected){
    console.log('executer function executed');
    resolved([20,10,30,47]);
    rejected("Something went Wrong");
});
console.log(promise);


let promise1 = new Promise( function(resolved,rejected){
    let food = new XMLHttpRequest();
    food.open('GET','data.txt',true);
    food.send();
    food.onload = function(){
        if(food.statusText === 'OK'){
            resolved(food.responseText);
        }else{
            rejected("Some thing went wrong pls  try again later");
        }
    }
});
promise1.then(function(data){
    console.log(data);
},function(error){
    console.log(error);
});
    

