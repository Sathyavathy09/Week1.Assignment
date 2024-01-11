/*
2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/
const nums = [2,4,7,8,11,14];
const target = 18;
for(let i=0; i<=nums.length-1; i++)
{
for(let j=i+1; j<=nums.length-1; j++)
{
    if (nums[i]+nums[j]==target)
    {
        console.log(nums[i],'+',nums[j],'(',i,',',j,')');
    
    }

}
}
