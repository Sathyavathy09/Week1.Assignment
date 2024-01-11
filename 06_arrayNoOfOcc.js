/*
1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count
*/

const nums = [2,4,5,2,1,2];
const k = 2
let count = 0;
for (let i=0; i<= nums.length-1; i++)
{
   if(nums[i]==k)
   count = count +1; 
}

console.log(count);