//JavaScript Execution Context and Call Stack


//!Notes:
// JavaScript executes code in two main phases:-

// 1. Memory Creation Phase / Creation Phase : In this phase, JavaScript allocates memory for all variables and functions. 
// Variables are initially set to 'undefined', and functions store their full definitions.

// 2. Execution Phase : This is where the actual code execution happens, including assigning values to variables, 
// performing calculations, and executing function calls.

// Global Execution Context : This is the base execution context that is always created when JavaScript code runs. The
//'this' keyword refers to this global context.

// Function Execution Context : A new execution context is created every time a function is called. 
// This new context also goes through its own memory creation and execution phases.

//Call Stack:
//  The Call Stack manages the execution of functions. It operates on a Last-In, First-Out (LIFO) principle.
//  When a function is called, it's pushed onto the stack. When it finishes execution, it's popped off the stack.

//Example:
let val1=10;
let val2=5;

function addNum(num1,num2){
    let total=num1+num2;
    return total;

}
let result1=addNum(val1,val2);
console.log(result1);

let result2=addNum(10,2)
console.log(result2);

//!Notes:
// step1: Global Execution Context is created.

// step2: Memory Creation Phase(MCP), val1->undefined, val2-->undefined, addNum-->function definition result1-->undefined, result2-->undefined.

// Step3: Execution Phase, val1=10, val2=5, addNum is creates a new execution context (new variable environment + execution thread) after that it calls again two phases.

// step4: Memory Creation Phase(MCP) of addNum, num1->undefined, num2->undefined, total->undefined.

// step5: Execution Phase of addNum, num1=10, num2=5, total=15, return 15.

// step6: total 15 will return to the global execution context and assign to result1.

// step7: execution context will be deleted from the call stack after execution is complete. console.log(15) prints 15 in the console.

// step8: Again addNum is called with different arguments 10 and 2, so a new execution context of addNum is created.

// step9: Memory Creation Phase(MCP) of addNum, num1->undefined, num2->undefined, total->undefined.

// step10: Execution Phase of addNum, num1=10, num2=2, total=12, return 12.

// step11: total 12 will return to the global execution context and assign to result2.

// step12: console.log(12) prints 12 in the console.


function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()