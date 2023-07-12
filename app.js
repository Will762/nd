function getPINs(observed) {
	const keypad = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[null, 0, null]
	];

	const keypadCoords = {
		1: [0, 0],
		2: [0, 1],
		3: [0, 2],
		4: [1, 0],
		5: [1, 1],
		6: [1, 2],
		7: [2, 0],
		8: [2, 1],
		9: [2, 2],
		0: [3, 1],
	};

	const numbers = observed.split('');
	const adjacentsGroups = numbers.map(number => {
		const coords = keypadCoords[number];		
		const results = [];
		
		coords.forEach((coord, i) => {
			coords[i] = coord - 1;
			if (keypad[coords[0]]?.[coords[1]]) {
				results.push(keypad[coords[0]][coords[1]]);
			}
			coords[i] = coord + 1;
			if (keypad[coords[0]]?.[coords[1]]) {
				results.push(keypad[coords[0]][coords[1]]);
			}
			coords[i] = coord;
		});
		results.push(parseInt(number));
		return results;
	});

	console.log(adjacentsGroups);

	for (i = 0; i < adjacentsGroups.length; i++) {
		for (j = 0; j < adjacentsGroups[i].length; j++) {

			// console.log(adjacentsGroups[i][i] + '-' + adjacentsGroups[i][j]);
		}
	}
	
	// return results;
}
console.log(getPINs('103'));

// console.log(solution([-4, -2, -1, 0, 1, 2, 3, 8, 10, 11, 12, 15, 16, 20, 21, 25]))
