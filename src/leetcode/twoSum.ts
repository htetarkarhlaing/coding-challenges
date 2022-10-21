// https://leetcode.com/problems/two-sum/

var twoSum = function (nums: number[], target: number) {
	let result: number[] = [];
	for (let index = 0; index < nums.length; index++) {
		if (result.length > 0 && nums[result[0]] !== nums[result[1]]) {
			break;
		} else {
			const firstNumber = nums[index];
			for (let innerIndex = 0; innerIndex < nums.length; innerIndex++) {
				const secondNumber = nums[innerIndex];
				if (firstNumber + secondNumber === target) {
					result = [index, innerIndex];
					break;
				}
			}
		}
	}

	return result;
};

let nums = [3, 2, 4],
	target = 6;

console.log(twoSum(nums, target));
