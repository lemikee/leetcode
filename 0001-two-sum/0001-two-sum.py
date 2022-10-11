class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prev_nums = {}
        
        for index, num in enumerate(nums):
            complement = target - num
            
            if complement in prev_nums: return [index, prev_nums[complement]]
            prev_nums[num] = index
        
        
        