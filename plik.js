

function przelicz(){
	
	let opcja=document.getElementById("temperature").value;

	let liczba = parseFloat(document.getElementById("input-value").value);

	let wynik="";
	
	if (opcja=="K"){
		
		wynik=liczba-273.15;
		
		document.getElementById("result").innerHTML=wynik.toFixed(2) +" C";
	}
	
	
	else{
		wynik=liczba+273.15;
		
		document.getElementById("result").innerHTML=wynik.toFixed(2) +" K";
	}
}