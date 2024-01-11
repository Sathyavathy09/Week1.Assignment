/*
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

let nums = [34, 7, 21, 89, 54, 10, 91, 67];
let max = nums[0];

for( let i=0; i<=nums.length-1; i++)
{
    if(nums[i]>nums[i+1])
    {
       max = nums[i];
    }
    else
        max = max;
}

console.log("Maximum Element: "+max+", Index: "+nums.indexOf(max));

let min = nums[0];

for( let i=0; i<=nums.length-1; i++)
{
    if(nums[i]<min)
    {
       min = nums[i];
    }
    else
        min = min;
}

console.log("Minimum Element: "+min+", Index: "+nums.indexOf(min));