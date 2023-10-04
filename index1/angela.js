function getmilk(){
    console.log("hey");
    console.log("big");
    console.log("man");
    alert("biggi")
}
getmilk();
function messs(messsage,firstname){  
    console.log(messsage);
    console.log(firstname);

}
messs("hello","john");
let key = 42;
function getsecretcode(value){
    let keyGenerator = function(){
        let key = 12;
        console.log('in keygenerator:',key);
        return key;
    }
    let code = value * keyGenerator();
    console.log('in getsecretcode:',key);
    return code;
    // let code = value * key;
    // return code;
}
let secretcode = getsecretcode(2);
console.log(secretcode);
// showmessage(getsecretcode(2));
// console.log(getsecretcode(2));
const button = document.getElementById('service');
const header = document.getElementById('percent');
header.style.fontWeight='800';
button.style.padding = '30px 80px';
button.style.background = 'blue';
button.style.fontSize='5rem';
header.style.fontSize='5rem';
button.addEventListener('click',function(){
    console.log('CLICK');
    const review = document.getElementById('review');
    if(review.classList.contains('container')){
        review.classList.remove('container');
        button.textContent='CLOSE REVIEW';
    }else{
        review.classList.add('container');
        button.textContent='SEE REVIEW';
    }
    // review.classList.remove('container');
});
function showmessage(message){
    document.getElementById('game').textContent = message
}
function changepercentageoff(percentage){
    document.getElementById('percent').textContent = percentage + "% OFF";
}
changepercentageoff(30);

function lifeinweeks(age){
    var yearsremaining = 90 - age;
    var days = yearsremaining * 365;
    var weeks =  yearsremaining * 52;
    var months = yearsremaining * 12;
    console.log("you have"+ days  +"days," + weeks + "weeks, and " + months + "months left.");
}
lifeinweeks(21);
function vote(money){
    var numberofbottles = Math.floor (money /1.5);
    console.log("buy"+ numberofbottles + "bottles of milk");
    return money % 1.5;
}
var change = vote(4);
console.log(change);
function calcbottles(startingmoney,costperbottles){
    var numberofbottles = Math.floor (startingmoney /costperbottles);
return numberofbottles;
}
function calchange(startingAmount,costperbottle){
    var change = startingAmount% costperbottle
return change
}
console.log("hello" + change + "change")

function bmicalculator (weight,height){
    let bmi = weight/(height* height);
    return Math.round(bmi);
}
let ran = bmicalculator(65,1.8); 
console.log(ran);
function makecofee(sugar,milk){
    var instructions = "Boil water";
instructions += "pour into cup";
instructions += "add cofee grandules,";
instructions +=  "add" +sugar +"Spons of sugar,";
instructions +=  "add" +milk +"% milk";
return instructions;
}
console.log(makecofee(2,20));
var car = {
color : "Red",
speed : 200,
Drive :function(){
    return "drive";
}
};
console.log(car);
var shoppinglist = [
    "Apple","Orange","Pear"
];
console.log(shoppinglist);
var cars = {
    make : "Volvo",
    speed:160,
    engine :{
        size:2.0,
        make:"bmw",
        fuel :"petrol",
        pistons :[ {maker:"bmw"},{maker:"bmw"}]
    },
    drive1 :function(){
        return "drive";
    }

};
var array = [
    "string",
    100,
    ["embed",200],
    {cars:"ford"},
    function(){return "dive"   }
]
console.log(cars.make);
console.log(cars.engine.pistons[0].maker);
console.log(array[4]);
console.log(cars["make"]);
console.log(cars["engine"]);
console.log(cars["drive1"]());

// console.log(delete cars.make);


var n = Math.random();
console.log(2)
let values = ['a','b','c']
values[0] = 'aaaa';
console.log(values[2]);
const values2 = ['a','b','c','d','e'];
// const newvalues = values2.slice(1,4);
 values2.splice(2,1 ,"HELLO");
console.log(values2);
const vet = ['a','b','c','d','z'];
console.log(vet.indexOf('a'));
const fin = vet.filter(function(items){
    console.log('items:',items);
    return items > 'b'
})
console.log(fin);
const boy = ['a','bbb','cccccc'];
const found = boy.find(function(item){
    return item.length > 1;
});
console.log(found);
 const dog = ['a','b','c'];
 dog.forEach(function(item){
  console.log(item);
});
const containers =
document.getElementsByClassName('container')
containers[0].classList.add('d-none');
console.log(containers);
function name (){
    var fullname = "Lawrence Turton";
    function concat(name){
        return "MR."+ name
    }
    return concat(fullname);

}
function name2 (fullname){
return fullname.firstname + fullname.Lastname;
}
console.log(name2({firstname:"Lawrence",Lastname:"Turton"}));
// var obj = {{}};

let age = name();
console.log(age);
console.log(myName,printName());
var myName = "Lawrence";
function printName(){
    console.log(a,embed());
    var a = 100;
    function embed(){return "hello";}
    return "John Doe";
}
var engine1 = {
    maker : "ford",
    headGasket :{
        maker:"Golf",
        pots:[ 
              "piston1" ,
              "piston2"
         ]        
    }
}
function runExpression(){
var a = 10;
function add(){
     test = "string engine";
    return  a + 90;
    
};
console.log(engine1);
return add();
}
console.log(engine1.headGasket.pots[0]);
console.log(runExpression());
var object3 = {
    prop:this,
    method:function(){return this;}
};
var array2 = [
    this,
    function(){return this;}
];
function global(){
    return this ;
}
console.log(global.call(object3));
new global();
function Apple1 (x,y,color,score){
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}
new Apple1(10,20,"red",200);
function Apple2 (color,weight){
    this.color = color;
    this.weight = weight;
    // this.eat = function(){return "eat the apple";};
    // this.throw = function(){return "throw the apple";};
}
Apple2.prototype ={
    eat : function(){return "eat the apple";},
    throw : function(){return "throw the apple";}
};
var apple1 =new Apple2 ("red",99);
var apple2 =new Apple2 ("green",109);
var apple3 =new Apple2 ("yellow",299);
apple2.eat();
// Apple2.prototype.eat=function(){return "new apple eaten!!!!"}
// function(){return "new apple eaten!!"}
function showproductid(){
    let productid = 12345;
    function fix(){
        let productid = 45678;
        console.log('in fix',productid)
    }
    fix();
    console.log('in showproductid:',productid)
}
showproductid();
// hoisting
showproductid();
function showproductid(){
    let productid = 12345;
    console.log(productid);
}
'use strict';
const productid = 1234;
console.log(productid);
var classRegister = ["lawrence","john","jeff" ];
// for (var i = 0 ;i<classRegister.length;i++)
for(var i = classRegister.length-1;i >=0; i--){
    console.log(classRegister[i]);
}
// for in loop
for(var index  in classRegister){
       console.log(classRegister[index]);
}
let price = 20;
let message = (price < 10)? 'yes':'no';
showmessage(message);
 const able = showmessage(message);
console.log(able);
// if (true){
//     const value4 ='yes'
//     showmessage(value4);
// }
// console.log(value4);
// while loop
// let r = 4;
// while (r > 0){
//     console.log(i);
//     i--;
// }
let d = 4;
do{
console.log(i);
 i--
}while(i>0);
let person = {
    name : 'john',
    age:32,
    partTime:false,
    showInfo:function(realAge){
        return(this.name + 'is'+ realAge) 
    }
};
function incrementAge(p){
    p.age++
}
incrementAge(person);
console.log(person.age)
console.log(typeof person.showInfo);
// console.log(person.age
document.querySelector('img').src = "images/feature-icon-04.svg";
document.querySelector('img').height= "200";
document.querySelector('img').width= "200";
document.getElementById('percentage').style.color = 'red';
// document.querySelector('.box2').style.background= 'yelow';
document.getElementById('close').style.backgroundColor = 'black';
document.getElementById('pot').style.Color = 'white';
document.querySelector('.box2').classList.remove('.box2');
document.querySelector('.box2').classList.add('.box1');
document.getElementById('first-name').value;
console.log(first-name);