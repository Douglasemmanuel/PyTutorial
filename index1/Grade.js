"use strict"
let score = prompt('Enter your score as a student?.');
let result;
if  (score >= '70'){
    alert(' You had an A! congrats');
}
else if( score >='60' && score <='69' ){
    alert('B');
}
else if(score >='50' && score <='59'){
    alert('C');
}
else if(score >='45' && score <='49'){
    alert('D');
}
else if(score >='40' && score <='44'){
    alert("E");
}
else {
    alert("You failed!!");
}
