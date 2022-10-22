function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const map = new Map();
	for (let index = 0; index < nums.length; index++) {
		if (index - map.get(nums[index]) <= k) {
			return true;
		} else {
			map.set(nums[index], index);
		}
	}
	return false;
}

let numbers = [1, 2, 3, 1, 2, 3],
	k = 2;

console.log(containsNearbyDuplicate(numbers, k));
