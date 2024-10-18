// 1. Introduction
console.log('Hello, world')

// 2. Variables
let color = "blue";
console.log(color);

// 3. Data Types
let name = "Miftah";
let age = 22;
let learningChatgpt = true;
console.log(name, age, learningChatgpt);

// 4. Operators
let num1 = 3;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(num1 == num2);
console.log(num1 === num2);

console.log(num1 && num2);
console.log(num1 || num2);
console.log(! num2);

// 5. Conditional Statement
let num = 0;
if (num > 0)
{
    console.log("It's a Positive number.");
}
else if (num < 0)
{
    console. log("It's a Negetive number."); 
}
else 
{
    console.log("It's Zero.");
};

// 6. Loops
let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

// 7. Function
function multiply (m, n) {
    return m * n;
}
let result = multiply (5, 3);
console.log(result);

// 8. Arrow Functions (ES6+)
const multiply2 = (m, n) => m * n;
console.log(multiply2 (5, 3));

// 9. Arrays
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.pop();
numbers.forEach((number) => {
    console.log(number);
});

// 10. Objects    
let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    drive : function () {
        console.log("Driving a " + this.make + " " + this.model + ".")
    }
};
car.drive();
console.log(car.make);

// 11. DOM Manipulation
let button = document.getElementById("btn");
console.log(button);
let paragraph = document.getElementById("para");
console.log(paragraph);

button.addEventListener("click", function() {
    paragraph.innerHTML = "Congratulations! You have unlocked a new level.";
});












// task:
// make (e.g., "Toyota")
// model (e.g., "Camry")
// year (e.g., 2020)
// A method drive that logs a message like "Driving a Toyota Camry."

// Call the drive method and print the make of the car.

// ans:
// let car = {
//     make : "Toyota",
//     model : "Camry",
//     year : 2020,
//     drive : function () {
//         console.log("Driving a " + this.make + " " + this.model + ".")
//     }
// };
// car.drive();
// console.log(car.make);