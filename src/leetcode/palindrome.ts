// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
	let xStrings = x.toString();
	let xStringArray = xStrings.split("");
	let reversed = parseInt(xStringArray.reverse().join(""));

	if (x === reversed) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalindrome(121));
