function solution(list){
	const result = [];
	let limit = 1;
	let rangeStart = rangeStop = 0;

	function push() {
		if (rangeStop - rangeStart >= 2) {
			result.push(`${list[rangeStart]}-${list[rangeStop]}`)
		} else if (rangeStart === rangeStop) {
			result.push(`${list[rangeStart]}`);
		} else {
			result.push(`${list[rangeStart]},${list[rangeStop]}`);
		}
	}

	for (limit; limit < list.length; limit++) {
		if (Math.abs(list[limit] - list[rangeStop]) > 1) {
			push();
			rangeStart = limit;
		}
		rangeStop = limit;
	}

	push();
	return result.join(',');
}