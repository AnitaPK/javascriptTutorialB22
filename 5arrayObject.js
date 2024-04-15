arr1 = [];

arr1 = [1,2,3,4,5];
arr1[4];     //  5   
arr1[4] = 7;

// for(i=0; i<arr1.length;i++){
//        console.log( arr1[i]);
// }

obj1 = {};


//                                    var               let          const 
//                                               2015
//                                 redefine
//                                 reassign
// Scope                            function           block         block
//                                  global             local         local
// hoisting


// var x = 10;
// x = 15;
// var x = 'string'; 

// let y = 10;
// y = 20; 
// y ='string'  //not possible

// const 


// var x= 10;
// {
//     var x = 20;
//     console.log(x);
// }
// console.log(x);

// let y= 10;
// {
//     let y = 20;
//     console.log(y);
// }
// console.log(y);


// const z= 10;
// {
//     const z = 20;
//     console.log(z);
// }
// console.log(z);



var a = 1;
function demo(){
    var a = 2;
    console.log(a);
}

demo();
console.log(a);

let b = 1;
function demo(){
    let b = 2;
    if(b>40){
    console.log(b);
    }
}

demo();
console.log(b);




// array iteration 
arr1.forEach((x) => {
    console.log(x);
    console.log(arr1[x]);
});

for (i of arr1){} 
for (i in arr1){}

// index 0----
// value 

emp1 = [1001, 'John', 40000, 'pune'];

// key named - index
// value
obj2 = {id:1001, 'name':'John', sal:40000, 'addr':'pune', projName:['p1','p2','p3']};


{[{id:1001, 'name':'John', sal:40000, 'addr':'pune', projName:['p1','p2','p3']}  ]}
// index-value
// namedIndex-value
// key-value pair



const person = {fname:"John", lname:"Doe", age:25};
person[fname]           // 'John'

// access with key name forin
// let text = "";
for (let x in person) {
  text += person[x];
}

// access with element / value 
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}