// Copyright (c) 2005-2007 Fiona Hughes

function calculate1(num1,num2,num3)
{
//var lambda = document.getElementById("lambda").value;
//var num1 = document.getElementById("ei");
//var c2 = document.getElementById("ee");
//var c3 = document.getElementById("ii");
var n = document.getElementById("ncoulomb").value;
var T = document.getElementById("Tcoulomb").value;
var Z = document.getElementById("Zcoulomb").value;
var A = document.getElementById("atomic").value;
//var mult = document.getElementById("mult").value;
//denom = T*T*T;
//denom = Math.sqrt(denom);

 var ei2 = n*Z*.23*num1*Math.pow(T,-3/2)*(Math.pow(A,-3/2));
 alert(ei2);
 var ee2 = n*num2*5.8e-5*Math.pow(T,-3/2);
 var ii2 = n*Z*Z*Z*num3*6.8e-8*2*Math.pow(A,-1/2)*Math.pow(T,-3/2);
 
ei2 = ei2.toPrecision(5);
ee2 = ee2.toPrecision(5);
ii2 = ii2.toPrecision(5);
document.getElementById("ei2").value = ei2;
document.getElementById("ee2").value = ee2;
document.getElementById("ii2").value = ii2;
}




 function calculate()
{

  var num1 = ei();
  //alert(num1);
  var num2 = ee();
  var num3 = ii();
  calculate1(num1,num2,num3);
   
  num1 = num1.toPrecision(5);
  num2 = num2.toPrecision(5);
  num3 = num3.toPrecision(5);
  document.getElementById("ei").value = num1;
  document.getElementById("ee").value = num2;
  document.getElementById("ii").value = num3;
  //document.getElementById("answer").value = num;


}


 function ee()
{
 var n = document.getElementById("ncoulomb").value;
  var T = document.getElementById("Tcoulomb").value;
  if (T <= 10)
    {
    var num = (Math.sqrt(n))*Math.pow(T,-3/2);
    num = Math.log(num);
    num = 23-num;
    //alert("1");
    }
  else
    {
    //alert("2");
    num = (Math.sqrt(n))*Math.pow(T,-1);
    num = Math.log(num);
    num = 24-num;
    }
  return num;
  //num = num.toPrecision(5);
  //document.getElementById("answer").value = num;
  //alert("holy moly");
}

function ei(n,T,Z,A,Ti)
{
  if (10*Z*Z > T && T > Ti/(A*1840))
    {
    var num = Math.sqrt(n)*Z*Math.pow(T,-3/2);
    num = Math.log(num);
    num = 23 - num;
    //alert(num);
//    alert("1");
    return num;
    //num = num.toPrecision(5);
    //document.getElementById("answer").value = num;
    }
   else if (T > 10*Z*Z && 10*Z*Z > Ti/(A*1840))
    {
    var num = Math.sqrt(n)*Math.pow(T,-1);
    num = Math.log(num);
    num = 24 - num;
//    alert("2");
    return num;
    //num = num.toPrecision(5);
    //document.getElementById("answer").value = num;
    }
   else if (Ti > T*(1840*A/Z))
    {
    var num = Math.sqrt(n)*Math.pow(T,-3/2)*Z*Z*Math.pow(A,-1);
    num = Math.log(num);
    num = 30 - num;
//    alert("3");
    return num;
    //num = num.toPrecision(5);
    //document.getElementById("answer").value = num;
    }
  else
    {
    alert("These numbers result in a negative Coulomb logarithm!");
    return;
    }
  //return num;
}


function ii(n,Z,Ti)
{
return 23.0 - Math.log((Z*Z/Ti)*Math.sqrt(2*n*Z/Ti));
}


/* function use()
{
document.getElementById("lambda").value = document.getElementById("answer").value;
document.getElementById("n").value = document.getElementById("ncoulomb").value;
document.getElementById("T").value = document.getElementById("Tcoulomb").value;
document.getElementById("Z").value = document.getElementById("Zcoulomb").value;
}
*/

function plasma()
{
//alert("it works");
var ed = document.getElementById("ed").value;
var plasma = Math.sqrt(ed)*8978;
var piplasma = plasma*2*Math.PI;
var collision = 2.998e10/piplasma;
piplasma = piplasma.toPrecision(3)
plasma = plasma.toPrecision(3);
document.getElementById("plasmaf").value = piplasma + " rad/sec    (f = " + plasma + " Hz)";
collision = collision.toPrecision(3);
document.getElementById("collision").value = collision + " cm";
}

function cyclotron()
{
var B = document.getElementById("B").value;
var om = 1.759e7*B;
om = om.toPrecision(3);
var f = 2.799e6*B;
f = f.toPrecision(3);
document.getElementById("ecf").value = om + " rad/sec  (f = " + f + " Hz)";
}

function debye()
{
var n = document.getElementById("ded").value;
var T = document.getElementById("temp").value;
var debye = 743.5*Math.sqrt(T/n);
debye = debye.toPrecision(3);
document.getElementById("debyea").value = debye + " cm";
}

function thermal()
{
var temp = document.getElementById("etemp").value;
var speed = 4.194e7*Math.sqrt(temp);
speed = speed.toPrecision(3);
document.getElementById("speed").value = speed + " cm/sec";
}

function alfven()
{
var B = document.getElementById("mag").value;
var n = document.getElementById("aed").value;
var atomic = document.getElementById("aw").value
var alfven = 2.2e11*B/(Math.sqrt(n)*Math.sqrt(atomic));
alfven = alfven.toPrecision(3);
document.getElementById("alfvens").value = alfven + " cm/sec";
}

function beta()
{
var B = document.getElementById("gauss").value;
var n = document.getElementById("bed").value;
var T = document.getElementById("ptemp").value;
B = B*B/(8*Math.PI);
n = n*1.602e-12*T;

var beta = n/B;
beta = beta.toPrecision(3);
document.getElementById("pb").value = beta;
}

function rates()
{
    var n = document.getElementById("nn").value;
    var T_e = document.getElementById("T_e").value;
    var T_i = document.getElementById("T_i").value;
    var mu = document.getElementById("mu").value;
    var z = document.getElementById("z").value;

    var c_sigma = 8.74e13;
    var c_eta = 9.0e9;

    var lambda_ei = ei(n,T_e,z,mu,T_i);

    T_e32 = Math.sqrt(T_e*T_e*T_e);
//lambda_ei = 24.0 - Math.log(Math.sqrt(n)*z/T_e);
//    alert("ei:" + lambda_ei);
    nu_e = 2.9e-6*n*z*lambda_ei/T_e32;
//    alert("nu_e: " + nu_e);

    T_i32 = Math.sqrt(T_i*T_i*T_i);
//    lambda_ii = 23.0 - Math.log(Math.sqrt(2.0*n)*Math.pow(z,2.5)/T_i32);
    lambda_ii = ii(n,z,T_i);
//    alert("lambda_ii: " + lambda_ii);

    nu_i = 4.8e-8*n*lambda_ii/T_i32;

    nu_i = nu_i*Math.pow(z,3.0)/Math.sqrt(mu);

//    alert(T_e32);
//    eta1 = eta(lambda_ei,T_e32);

    sigma = c_sigma*T_e32/lambda_ei;

    eta1 = 100.0*c_eta/sigma; // 

//alert(eta1);
    document.getElementById("lambda_ei").value = lambda_ei.toPrecision(3);
//alert("b");
    document.getElementById("lambda_ii").value = lambda_ii.toPrecision(3);
//alert("c");
    document.getElementById("nu_e").value = nu_e.toPrecision(3);
//alert("d");
    document.getElementById("nu_i").value = nu_i.toPrecision(3);
//alert("e");
    document.getElementById("sigma").value = sigma.toPrecision(3);

    document.getElementById("eta").value = eta1.toPrecision(3);
//alert("returning");
/* document.getElementById("eta").value = eta1 + " ohm-cm"; */
}



function resetrates()
{
document.getElementById("nn").value = "";
document.getElementById("T_e").value = "";
document.getElementById("T_i").value = "";
document.getElementById("mu").value = "";
document.getElementById("z").value = "";
document.getElementById("lambda_ei").value = "";
document.getElementById("lambda_ii").value = "";
document.getElementById("nu_e").value = "";
document.getElementById("nu_i").value = "";
document.getElementById("eta").value = "";
}



function eta(lambda,T)
{
var c = 6.53e3;
//var delta = document.getElementById("delta").value;
//var T = document.getElementById("T").value;
//T = Math.sqrt(T*T*T);

var eta = c*Math.log(lambda)/T;
return eta
//document.getElementById("eta").value = eta + " ohm-cm";
}

function gas()
{
	//	alert("gas");
	var choice = document.getElementById("choice").value;
	var p = document.getElementById("gaspress").value;
	if (choice == "PPa")
		{
			p = p/133.32236;
		}
	//	else if (choice == "WLcm")
	//		{
	//		}
	//	alert("p = " + p);
	var T = document.getElementById("gastemp").value;
	var n = 2.687e19*(p/760.0)*(273.0/T);
	n = n.toPrecision(3);
	//	alert("n = " + n);
	document.getElementById("nneutral").value = n + " /cc";
}


