function scramble(str1, str2) {
	if (str1.length < str2.length) return false;
	for (i = 0; i < str2.length; i++) {
		const char = str2[i];
		if (str1.indexOf(char) === -1) {
			return false;
		}
		str1 = str1.replace(char, '_');
	}
	return true;
  }
  console.log(scramble('avaaaaaj', 'java'));