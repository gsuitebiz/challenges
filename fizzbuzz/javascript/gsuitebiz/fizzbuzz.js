function writeNumber(arrayLength){
	
	var arrayOfNumbers = new Array();

	for(var i = 1;i<=arrayLength;i++){
		var x = 3;
		var y = 5;
		var remainder3 = i%x;
		var remainder5 = i%y;
		

		if(remainder3 == 0 && remainder5 == 0){
			
			arrayOfNumbers.push("fizzbuzz");
		}else if(remainder3 == 0){
			
			arrayOfNumbers.push("fizz");
		}else if(remainder5 == 0){
			
			arrayOfNumbers.push("buzz");
		}else{
			
			arrayOfNumbers.push(i);
		}
		
	}

return arrayOfNumbers;
}
