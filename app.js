function solution(list){
	const result = [];
	let startRangeIndex = 0;
	let stopRangeIndex = 1;

	function push() {
		if ((stopRangeIndex - 1) - startRangeIndex > 2) {
			result.push(`${list[startRangeIndex]}-${list[stopRangeIndex - 1]}`)
		} else if (stopRangeIndex - 1 === startRangeIndex) {
			result.push(`${list[startRangeIndex]}`);
		} else {
			result.push(`${list[startRangeIndex]},${list[stopRangeIndex - 1]}`);
		}
	};

	for (stopRangeIndex; stopRangeIndex < list.length; stopRangeIndex++) {
		if (Math.abs(list[stopRangeIndex] - list[stopRangeIndex - 1]) > 1) {
			push();
			startRangeIndex = stopRangeIndex;
		}
	}

	push();
	return result;
}

// const x = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
const x = solution([0, 1, 2, 3, 4, 9, 10]);
console.log(x);
