function solution(input, markers) {
	console.log(new RegExp("\\s*[\\" + markers.join('') + "].*", "g"));
	return input.replace(new RegExp("\\s*[\\" + markers.join('') + "].*", "g"), "");
};

// console.log(regex);
console.log(JSON.stringify(solution("apples, plums % and bananas\npears\noranges !applesauce\noranges $applesauce", ["%", "!", "$"])));
// console.log("apples, plums\npears\noranges");


// Returned
// 'apples, pears 
// grapes
// bananas'

//but expected
//'apples, pears
// grapes
// bananas'


//"apples, plums\npears\noranges"