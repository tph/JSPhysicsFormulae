function mass()
{
//alert("it works");
	var amu2kg = 1.66053886e-27; // kg
	var amu = document.getElementById("amu").value;
	var masskg = amu2kg * amu;
    masskg = masskg.toPrecision(6);
	document.getElementById("masskg").value = masskg + " kg";
}
