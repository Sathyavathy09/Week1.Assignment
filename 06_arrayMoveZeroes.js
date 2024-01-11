/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
 
Input: nums = [0]
Output: [0]
*/

let nums = [0,1,0,3,12,0,8];

let newNums = [];

for (let i=nums.length-1; i>=0; i--)
{
    if (nums[i]!=0)
    newNums.unshift(nums[i]);
    
    else
    newNums.push(nums[i]);
   
}

console.log(newNums);




