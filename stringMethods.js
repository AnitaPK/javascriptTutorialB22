str1 = "            String               ";
str2 = 'Wisdom';
str3 = `Sprouts

      `;
console.log(str2.length);


str4 = str2  + ' ' + str3;
str5 = `${str2} ${str3}`;
console.log(str4);
console.log(str5);
console.log(str2.concat(' ',str3));

console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

console.log(str1.length);
console.log(str1.trim().length);
console.log(str1.trimStart().length);
console.log(str1.trimEnd().length);

arr1 = [];
arr1 = [1,2,3,4,5];
console.log(arr1);

str5 = '12345';

str6 = '1 2 3 4 5';


console.log(str5.split());
console.log(str5.split(""));
console.log(str6.split(" ").join('*'));



str7 = 'ABCDEFGHI'
console.log(str7.charAt(2));
console.log(str7.charCodeAt(2));

let text = "Please Microsoft visit microsoft! Microsoft Microsoft";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
let newText1 = text.replace(/Microsoft/ig, "W3Schools");
console.log(newText1);
let newText2 = text.replaceAll(/Microsoft/ig, "W3Schools");
console.log(newText2);


let text2 = "Please locate where 'locate' occurs!";
let index = text2.indexOf("locate");
console.log(index);
let index1 = text2.lastIndexOf("locate");
console.log(index1);

let text3 = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match(/ain/ig);

text.includes("world");