// var 

// hoisting 

// let const


var x =5;
 x ='asdf';
// var x = [];

let y = 10;
// x = 23;
y = 'asdfgh';
// let y = 45;

function demoOne(){
    var x =15;
    console.log(x);
    let y = 12;
    console.log(y);
}
demoOne();

console.log(x);
console.log(y);

arr1 = [1,1,2,3];
obj1 = {keyName:'value'};


set1 =  ([1,2,3]);
// map1 =(['keyName'='value'],[1,23,],[]);

emp1 = {
fname:'John',
lname:'Doe',
age:12, 
fullName:()=>{
    console.log(this.fname + ' ' + this.lname)
}
}
emp1.fullName();
// emp1[fname]
// emp1.lname 
// emp1.prototype.address 

function person11(fname, lname,age){
    fname='John',
    lname='Doe',
    age=12;
}

emp2 = new person11('asdf','erty',20);
console.log(emp2.lname);