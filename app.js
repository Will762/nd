function cakes(recipe, available) {
	let results = [];
	for (const ingriedient in recipe) {
		results.push(parseInt(available[ingriedient] / recipe[ingriedient]));
	}
	console.log(results)
	return results.includes(NaN) ? 0 : Math.min(...results);
  }


// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, milk: 200}));
// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
