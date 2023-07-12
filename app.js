function pigIt(str) {
	if (!str.length) return str;
	
	const words = str.split(' ');
	result = words.map(word => {
		if (!word.match(/[A-Za-z0-9]+/)) return word;
		const punctArr = [...word.matchAll(/[^\w\s]+/g)];
		const alphaChars = [...word.match(/[A-Za-z0-9]+/)[0]];

		alphaChars.push(alphaChars[0] + 'ay');
		alphaChars.shift();

		if (punctArr.length) {
			for (const punct of punctArr) {
				if (punct['index']) {
					alphaChars.push(punct[0]);
				} else {
					alphaChars.unshift(punct[0]);
				}
			}
		}
		return alphaChars.join('');
	});
	return result.join(' ');
}

console.log(pigIt('Hello world ! yo'));