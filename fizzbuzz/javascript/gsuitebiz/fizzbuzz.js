function writeNumber(arrayLength){
	for(i=0;i<=arrayLength;i++){
		var x = 3;
		var y = 5;
		var remainder3 = i%x;
		var remainder5 = i%y;
		var arrayOfNumbers = new Array();

		if(remainder3 == 0 && remainder5 == 0){
			console.log("fizzbuzz");
			arrayOfNumbers.push("fizzbuzz");
		}else if(remainder3 == 0){
			console.log("fizz");
			arrayOfNumbers.push("fizz");
		}else if(remainder5 == 0){
			console.log("buzz")
			arrayOfNumbers.push("buzz");
		}else{
			console.log(i);
			arrayOfNumbers.push(i);
		}
		
	}
console.log(arrayOfNumbers);
}