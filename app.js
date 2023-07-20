function orderWeight(str) {
	if (!str) return str;
	const obj = str.split(/\s+/).map(e => {
		return {
			e: e,
			sum: e.split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur))
		}
	});
	obj.sort((a, b) => a['sum'] === b['sum'] ? a['e'] < b['e'] ? -1 : 1 : a['sum'] - b['sum']);
    return obj.map(e => e['e']).join(' ');
}
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123 20"))

//expected '1 200 2 4 4 6 6 7 7 9 18 27 72 81 91 …' to equal '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 …'