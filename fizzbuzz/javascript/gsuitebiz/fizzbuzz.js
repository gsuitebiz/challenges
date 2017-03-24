function writeNumber(arrayLength){
	for(i=0;i<=arrayLength;i++){
		var x = 3;
		var y = 5;
		var remainder3 = i%x;
		var remainder5 = i%y;

		if(remainder3 == 0 && remainder5 == 0){
			console.log("fizzbuzz");
		}else if(remainder3 == 0){
			console.log("fizz");
		}else if(remainder5 == 0){
			console.log("buzz")
		}else{
			console.log(i);
		}
		
	}

}