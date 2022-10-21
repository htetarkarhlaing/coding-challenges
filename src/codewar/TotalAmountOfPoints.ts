// https://www.codewars.com/kata/5bb904724c47249b10000131

import * as chai from "chai";
const assert = chai.assert;
chai.config.truncateThreshold = 0;

type pointProps = string[];

function points(games: pointProps) {
	let points = 0;
	for (let match of games) {
		let status = match.split(":");
		if (parseInt(status[0], 10) > parseInt(status[1], 10)) {
			points += 3;
		} else if (parseInt(status[0], 10) === parseInt(status[1], 10)) {
			points += 1;
		}
	}
	return points;
}

describe("Total amount of points", function () {
	it("Sample Tests", function () {
		assert.strictEqual(
			points([
				"1:0",
				"2:0",
				"3:0",
				"4:0",
				"2:1",
				"3:1",
				"4:1",
				"3:2",
				"4:2",
				"4:3",
			]),
			30
		);
		assert.strictEqual(
			points([
				"1:1",
				"2:2",
				"3:3",
				"4:4",
				"2:2",
				"3:3",
				"4:4",
				"3:3",
				"4:4",
				"4:4",
			]),
			10
		);
		assert.strictEqual(
			points([
				"0:1",
				"0:2",
				"0:3",
				"0:4",
				"1:2",
				"1:3",
				"1:4",
				"2:3",
				"2:4",
				"3:4",
			]),
			0
		);
		assert.strictEqual(
			points([
				"1:0",
				"2:0",
				"3:0",
				"4:0",
				"2:1",
				"1:3",
				"1:4",
				"2:3",
				"2:4",
				"3:4",
			]),
			15
		);
		assert.strictEqual(
			points([
				"1:0",
				"2:0",
				"3:0",
				"4:4",
				"2:2",
				"3:3",
				"1:4",
				"2:3",
				"2:4",
				"3:4",
			]),
			12
		);
	});
});
