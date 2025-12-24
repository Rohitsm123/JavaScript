// Immediately Invoked Function Expression (IIFE) means a function that is executed right after its definition.

(function chai(){  //this is the normal function IIFE and it is
    //named IIFE because it has a name chai
    console.log("DB Connected");
    
})();    //this will execute the function right after its definition



//(Function_Defination)(Execution_call)


(()=>{//this is the arrow function IIFE
    console.log(`IIFE using in arrow function`);
    //this is a simple arrow function IIFE without any parameters
})();//this will execute the function right after its definition


((name)=>{//this is the arrow function IIFE
    console.log(`IIFE using in arrow function by ${name}`);
    //this is unnamed IIFE because it does not have any name
})('Rohit')