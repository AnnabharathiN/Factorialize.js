/* 
Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

 Algorithm:
    Step1: Define a function factorialize that has a parameter n.
    Step2: Initialize a variable result to 1.  
    Step3: Use a for loop that initializes a variable i to 1, checks if i is less than or equal to n, and increments i by 1 in each iteration.
    Step4: Inside the loop, multiply result by i and update result.
    Step5: After the loop, return the value of result. */

function factorialize(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}   
console.log(factorialize(8)); 
console.log(factorialize(12));
