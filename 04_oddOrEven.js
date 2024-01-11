/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

function checkOddOrEven(num)
{
for (let i=1; i<=num; i++)
{
    if (i%2==1)
    {
        console.log(i +" is odd");
    }
    else{
        console.log(i +" is even");
    }
} 
}

let num = 5;
checkOddOrEven(num);