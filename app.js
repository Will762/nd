snail = (function(array) {
	if (!array[0][0]) return [];
	const result = [];
	
	(function doTheSnail(startIndex, lengthToExtract, arrayLength) {
		let i = j = startIndex;

		if (arrayLength === 0) {
			return;
		}

		if (arrayLength === 1) {
			result.push(array[i][j]);
			return;
		}

		while (j <= lengthToExtract) {
			result.push(array[i][j]);
			if (j === lengthToExtract) {
				i++;
				break;
			}
			j++;
		}

		while (i <= lengthToExtract) {
			result.push(array[i][j]);
			if (i === lengthToExtract) {
				j--;
				break;
			}
			i++;
		}

		while (j >= startIndex) {
			result.push(array[i][j]);
			if (j === startIndex) {
				i--;
				break;
			}
			j--;
		}

		while (i > startIndex) {
			result.push(array[i][j]);
			i--;
		}	

		doTheSnail(startIndex + 1, lengthToExtract - 1, arrayLength - 2);
	}(0, array.length - 1, array.length));
	
	return result;
});

// const x = snail([[]]);
// const x = snail([[1]]);

// 2x
// const x = snail([	[1,2],
// 					[4,3]
// 				]);

// 3x
// const x = snail([	[1,2,3],
//          			[8,9,4],
//         			[7,6,5]
// 				]);

// 4x
const x = snail([	[01,02,03,04],
					[12,13,14,05],
					[11,16,15,06],
					[10,09,08,07]
				]);
// 5x
// const x = snail([[01,02,03,04,05],
// 					[16,17,18,19,06],
// 					[15,24,25,20,07],
// 					[14,23,22,21,08],
// 					[13,12,11,10,09],
// ]);

// 6x
// const x = snail([[01,02,03,04,05,06],
// 					[20,21,22,23,24,07],
// 					[19,32,33,34,25,08],
// 					[18,31,36,35,26,09],
// 					[17,30,29,28,27,10],
// 					[16,15,14,13,12,11]
// ]);

console.log(x);