/*
2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

let nums1 = [1,2,2,1,3];
let nums2 = [2,3];

let intersection = [];

for(let i=0; i<=nums1.length-1; i++)
{
    for(let j=0; j<=nums2.length-1; j++)
    {
        if (nums1[i]==nums2[j])
            {
                intersection.push(nums1[i]);
            }
    }
}
console.log([...new Set(intersection)]);