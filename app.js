function firstNonRepeatingLetter(s) {
	const results = new Map;
	for (i = 0; i < s.length; i++) {
		results.set(s[i], results.get(s[i]) + 1 || 1)
	}
	for (const [key, value] of results) {
		if (value === 1) return key;
	}
	return '';
  }

  console.log(firstNonRepeatingLetter('hellllllo'));