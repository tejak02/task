// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);


// Assignment Operators
let score = 10;

score += 5;
console.log(score);

score -= 2;
console.log(score);

score *= 3;
console.log(score);

score /= 2;
console.log(score);


// Comparison Operators
let age1 = 23;

console.log(age1 > 18);
console.log(age1 < 18);
console.log(age1 >= 23);
console.log(age1 <= 20);
console.log(age1 == "23");
console.log(age1 === "23");
console.log(age1 != 30);
console.log(age1 !== "23");


// Logical AND
let age2 = 23;
let hasLicense = true;

console.log(age2 >= 18 && hasLicense);


// Logical OR
let age3 = 16;
let hasPermission = true;

console.log(age3 >= 18 || hasPermission);


// Increment Operator
let count1 = 1;

count1++;
console.log(count1);

count1++;
console.log(count1);


// Decrement Operator
let count2 = 5;

count2--;
console.log(count2);

count2--;
console.log(count2);


// If-Else Condition
let age4 = 20;

if (age4 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Ternary Operator
let age5 = 20;

let result = age5 >= 18 ? "Adult" : "Minor";

console.log(result);


// Arrays - Access Elements
let fruits1 = ["Apple", "Banana", "Mango"];

console.log(fruits1[0]);
console.log(fruits1[1]);
console.log(fruits1[2]);


// Arrays - Update Element
let fruits2 = ["Apple", "Banana", "Mango"];

fruits2[1] = "Orange";

console.log(fruits2);


// Arrays - Length
let fruits3 = ["Apple", "Banana", "Mango"];

console.log(fruits3.length);


// Arrays - Push
let fruits4 = ["Apple", "Banana"];

fruits4.push("Mango");

console.log(fruits4);



//

let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);

//

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Orange"));


//
let numbers = [10, 20, 30, 40];

let sum = 0;

for (let num of numbers) {
    sum += num;
}

console.log(sum);