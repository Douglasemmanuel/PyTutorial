// alert ('Hello ')
// alert('World')
// alert("Hello")
// [1,2].forEach(alert);
   

// let message;
// message = 'Hello!';
// message = 'World'
// alert(message);

// let user = 'john',age =25,message ='Hello!';
// let hello = 'Hello World!';
// let message ;
// message = hello;
// alert(hello);
// alert(message);
// let message = "This";
// let Message = "That";
// console.log(message + Message)
// let $ = 1;
// let _ =2;
// alert($ + _)
// let admin,name;
// name = "john"
// admin = name;
// alert(admin);

// let name = "john";
// alert(`Hello,${name}!`);
// alert(`the result is ${1+2}`);

// let isGreater = 4 > 1;
// alert(isGreater);

// typeof  10n;
// typeof  true;
// typeof alert;

// let name = "Ilya";
// alert(`hello ${1}`);
// alert(`hello ${"name"}`);
// alert(`hello ${name}`);

// let age = prompt('How old are you?',100)
// alert(`you are ${age}years old!`);

// let isBoss = confirm("Are you the boss?");
// alert(isBoss);
 
// let value = true
// alert(typeof value);
// value = string(value);
// alert(typeof value);

// let str = "123";
// alert(typeof str);
// let num = Number(str);
// alert(typeof num);


// alert(Boolean(1) );
// alert(Boolean(0) );
// alert(Boolean("hello") );
// alert(Boolean("") );

// let x = 1;
// x = -x;
// alert(x);

// alert(6 -'2')

// let w = 1;
// alert(+w);
// let y = -2;
// alert(+y);
// alert(+true)
// alert(+"")

// let apples = "2";
// let oranges = "3";
// alert(apples + oranges);

// let a = 1;
// let b = 2;
// let c = 3 -(a = b + 1);
// alert(a);
// alert(c);


// let n = 2;
// n += 5;
// n*=2;
// n*=3+5;
// alert(n);

// let counter =2;
// counter ++;
// alert(counter);

// let counter =2;
// counter --;
// alert(counter);

// let counter = 1;
// let a = counter++;
// alert(a);
// let counter =1;
// alert(2*counter);
// counter++;

// let counter = 1;
// alert(2*++counter);
// ""+ 1+0
// ""-1 + 0
// true + false
// 6/"3"
// "2"*"3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4"-2
// "4px"- 2
// "-9" + 5
// "-9"- 5
// null + 1
// undefined + 1
// "\t\n"-2

// let a = prompt("First number?",1);
// let b = prompt("second number?",2);
// alert(a + b);
// alert('2'>1);
// alert('01'==1);
// "2">"12"
// let year = prompt('in which year was the ECMASCRIPT-2015 Specifification published?','');
// if (year < 2015){
//     alert('Too early...');
// }else if (year>2015){
//     alert('Too late');
// }else{
//     alert('exactly!');
// }
// let age = prompt('age?',18);
// let message = (age < 3)? 'Hi,baby!':
// (age<18)? 'Hello!':
// (age < 100)? 'Greetings!':
// 'What an unusual age!'; q
// alert(message);

// alert(1 || 0);
// alert(null || 1);
// alert(null || 0|| 1);
// alert(undefined || null || 0);

// let firstName ="";
// let lastName = "";
// let nickName = "supercoder";
// alert(firstName || lastName || nickName|| "Anonymous");

// let hour = 12;
// let minutes = 30;
// if (hour==12 && minutes==30){
//     alert('The time is 12:30');
// }
// alert(1 && 0);
// alert(1 && 5);
// alert(null && 5);
// alert(0 && "no matter what");

// let x =1;
// if (x > 0)alert('Greater than Zero!');
// alert(null || 2 && 3 || 4);
// if(-1 || 0)alert('first');
// if(-1 && 0)alert('second');
// if (null || -1 && 1)alert('third');
// let user   = "John";
// alert(user ?? "Anonymous");
// let firstName = null;
// let lastName = null;
// let nickName = "supercoder";
// alert(firstName?? lastName?? nickName?? "Anonymous");
// let height = 0;
// alert(height || 100);
// alert(height ?? 100);
// let x = (1 && 2) ?? 3;
// alert(x);
// let height = null;
// let width = null;
// let area = (height ?? 100) * (width ?? 50);
// alert(area)
// let i = 0;
// while (i < 3){
//     alert(i);
//     i++;
// }
// let i = 3;
// while(i){
//     alert(i);
//     i--;
// }
// let i = 0;
// do {
//     alert(i);
//     i++;
// }while(i<3);

// for(let i = 0;i < 3;i++){
//     alert(i);
// }
// let i = 0;
// if (i < 3){alert(i);i++}
// if (i < 3){alert(i);i++}
// if (i < 3){alert(i);i++}
// let sum = 0;
// while (true){
//     let value = +prompt("Enter a number", '');
//     if (!value)break;
//     sum += value;
// }
// alert('sum:'+ sum);

// for(let i = 0;i<10;i++){
//     if(i % 2 ==0)continue;
//     alert(i);
// }
// for (let i =0;i,10;i++){
//     if (i % 2){
//         alert(i);
//     }
// }
// if (i > 5){
//     alert(i);
// } else {
//   continue;
// }

// for(let i = 0; i < 3; i++){
//     for(let j = 0; j<3; j++){ 
// let input = prompt(`value at coords(${i},${j})`,'');
// }
// }
// alert('Done!');


// let a = 2+2;

// switch (a){
//     case 3:
//      alert('Too Small');
//      break;
//     case 4:
//       alert('Exactly!');
//      break;
//     case 5:
//         alert('Too big');
//         break;
//     default:
//         alert("I dont know such values");
// }



// let promise = new promise(function(resolve,reject){
//     setTimeout(()=>reject(new Error("Whoops!")),1000);
// })
// promise.then(
//     result => alert(result),
//     error => alert(error)
// )
async function loadJson(url){
    let response = await fetch(url);
    if (response.status == 2000){
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}
loadJson('no-such-user.json')
.catch(alert);
