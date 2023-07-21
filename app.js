function incrementString (str) {
	const regex = str.match(/(?<leadingZeros>[0]*)(?<numbers>[0-9]+$)/);
	if (!regex) return str + 1;
	let leadingZeros = regex?.['groups']['leadingZeros'];
	const numbers = regex?.['groups']['numbers'];
	const increment = (parseInt(numbers) + 1).toString();
	if (leadingZeros && numbers.length !== increment.length) {
		leadingZeros = leadingZeros.substring(1);
	}
	return str.substring(0, regex['index']) + leadingZeros + increment;
}

console.log(incrementString('ff1'))