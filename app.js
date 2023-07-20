function orderWeight(str) {
	if (!str) return str;
	const obj = str.split(/\s+/).map(e => {
		return {
			e: e,
			sum: e.split('').reduce((acc, cur) => acc + parseInt(cur), 0)
		}
	});
	// obj.sort((a, b) => a['sum'] - b['sum']);
	obj.sort((a, b) => a['sum'] === b['sum'] ? a['e'] < b['e'] ? -1 : 1 : a['sum'] - b['sum']);



	// let subArrStart;
	// let subArrEnd;
	// for (i = 1; i < obj.length; i++) {
	// 	if (obj[i]['sum'] === obj[i - 1]['sum']) {
	// 		subArrStart = subArrStart !== undefined ? subArrStart : i - 1;
	// 	} else {
	// 		subArrEnd = subArrStart !== undefined ? i : subArrEnd;
	// 	}
	// 	if (subArrStart !== undefined && subArrEnd) {
	// 		const sorted = obj.slice(subArrStart, subArrEnd).sort((a, b) => a['e'] < b['e'] ? -1 : 1);
	// 		obj.splice(subArrStart, sorted.length, ...sorted);
	// 		subArrStart = subArrEnd = undefined;
	// 	}
	// }
	// if (subArrStart !== undefined) {
	// 	const sorted = obj.slice(subArrStart).sort((a, b) => a['e'] < b['e'] ? -1 : 1);
	// 	obj.splice(subArrStart, sorted.length, ...sorted);
	// }
	return obj.map(e => e['e']).join(' ');
}
console.log(orderWeight("10003 2000 1234000 44444444 9999 11 11 22 123"));