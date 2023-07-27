function score(diceRolls) {
	const map = new Map;
	let score = 0;
	for (const roll of diceRolls) {
		map.set(roll, map.get(roll) + 1 || 1);
	}
	for (const result of map) {
		const diceFace = result[0];
		const diceQty = result[1];
		const multipleOfThree = parseInt(diceQty / 3);
		if (multipleOfThree) {
			score += diceFace === 1 ? diceFace * multipleOfThree * 1000 : diceFace * multipleOfThree * 100;
		}
		if (diceFace === 1) {
			score += diceQty % 3 * 100;
		}
		if (diceFace === 5) {
			score += diceQty % 3 * 50;
		}
	}
	return score;
  }
  console.log(score([1, 1, 1, 4, 4]));