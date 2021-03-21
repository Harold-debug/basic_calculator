function calculate(){
	//alert("Hello");
	var op = document.getElementById("operation").value;
	var aString = document.getElementById("a").value;
	var bString = document.getElementById("b").value;
	//alert("Operaion: "+op);
	var res;
	if(aString=="" || bString==""){
		//we can run the program when any of the input is empty
		return;
	}

	a = Number(aString);
	b = Number(bString);
	if(op == "+"){
		res = a + b;
	}else if(op == "-"){
		res = a - b;
	}else{
		res = a*b;
	}
	document.getElementById("result").value = res;
}
