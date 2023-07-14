function rgb(r, g, b){
	function doTheThing(dec) {
		const map = {
			10: 'a',
			11: 'b',
			12: 'c',
			13: 'd',
			14: 'e',
			15: 'f'
		}
		dec = dec > 255 ? 255 : dec;
		dec = dec < 0 ? 0 : dec;
		const octs = parseInt(dec / 16);
		const units = dec % 16;
		return `${map[octs] || octs}${map[units] || units}`
	}
	return `${doTheThing(r)}${doTheThing(g)}${doTheThing(b)}`;
  }

  console.log(rgb(-1,256,255))