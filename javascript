

              
  function moveZeroes(nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      // Swap non-zero element with the left pointer
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
}

// Example usage:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);



          
          
          
   
