// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
	let temp = [...digits];
	let reversed = [...temp.reverse()];
	let result: number[] = [];
	let isNine = false;
	let isChanged = false;
	if (reversed.length > 1) {
		for (let index = 0; index < reversed.length; index++) {
			const item = reversed[index];
			if (!isChanged && !isNine) {
				if (item < 9 && index === 0) {
					result.push(item + 1);
					isChanged = true;
				} else {
					result.push(0);
					isNine = true;
				}
			} else if (!isChanged && isNine) {
				if (item + 1 < 10) {
					result.push(item + 1);
					isChanged = true;
				} else {
					if (index === reversed.length - 1) {
						result.push(0, 1);
						isNine = true;
					} else {
						result.push(0);
						isNine = true;
					}
				}
			} else {
				result.push(item);
			}
		}
	} else {
		if (reversed[0] === 9) {
			result.push(0, 1);
		} else {
			result.push(reversed[0] + 1);
		}
	}

	return result.reverse();
}

console.log(plusOne([9]));
