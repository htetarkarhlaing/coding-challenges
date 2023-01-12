import * as chai from "chai";
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const totalPeopleLeft = (busStops: [number, number][]): number => {
	let totalRoutes = busStops;
	let totalIn = 0;
	let totalOut = 0;

	for (let eachStop of totalRoutes) {
		totalIn += eachStop[0];
		totalOut += eachStop[1];
	}

	return totalIn - totalOut;
};

describe("Number of People in the Bus", () => {
	it("tests", () => {
		assert.equal(
			totalPeopleLeft([
				[10, 0],
				[3, 5],
				[5, 8],
			]),
			5
		);
		assert.equal(
			totalPeopleLeft([
				[3, 0],
				[9, 1],
				[4, 10],
				[12, 2],
				[6, 1],
				[7, 10],
			]),
			17
		);
		assert.equal(
			totalPeopleLeft([
				[3, 0],
				[9, 1],
				[4, 8],
				[12, 2],
				[6, 1],
				[7, 8],
			]),
			21
		);
		assert.equal(totalPeopleLeft([[0, 0]]), 0);
	});
});
