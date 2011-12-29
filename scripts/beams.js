// Copyright (c) 2007 Fiona Hughes

function scat()
{
var avogadro = 6.022e+23;
	var pi = 3.14159;
	var e = 4.8e-10;
	var m = 9.11e-28;
	var c = 3e+10;
	var hbar = 1.054e-27;
	var h = 2*pi*hbar;
	var a0 = (hbar/e)*(hbar/e)/m; 

	var density;
	var gmole;
	var z;

var element = document.getElementById("element").value;
var gamma = document.getElementById("gamma").value;
var units = document.getElementById("units").value;
var thickness = document.getElementById("thickness").value;
gamma = gamma/0.511 + 1;

switch(element)
{
case "1":
   density = 2.7;
   gmole = 27.0;
   z = 13;
   element = "Aluminum";
   break;

case "2":
   density = 1.85;
   gmole = 9.01;
   z = 4;
   element = "Beryllium";
   break;

case "3":
   density = 2.0;
   gmole = 12.0;
   z = 6;
   element = "Calcium";
   break;

case "4":
   density = 7.87;
   gmole = 55.85;
   z = 26;
   element = "Iron";
   break;

case "5":
   density = 1.42;
   gmole = 13.44;
   z = 7;
   element = "Kapton";
   break;

case "6":
   density = 8.9;
   gmole = 58.69;
   z = 28;
   element = "Nickel";
   break;

case "7":
   density = 16.6;
   gmole = 180.95;
   z = 73;
   element = "Tantalum";
   break;

case "8":
   density = 4.5;
   gmole = 47.88;
   z = 23;
   element = "Titanium";
   break;

default:
   density = 19.3;
   gmole = 183.85;
   z = 74;
   element = "Tungsten";
   break;
}

   var atomscc = avogadro*density/gmole;
   var beta = Math.sqrt(1.0-1.0/(gamma*gamma));
   var alphasq = 4.0*pi*z*(z+1)*(e*e/(m*beta*beta*gamma*c*c))*(e*e/(m*beta*beta*gamma*c*c));

if (units == "mil")
{ 
var t = 2.54 * thickness/1000.0;
//alert(t);
}
else
{
var t = 0.1 * thickness;
} 

var thmin = hbar/(gamma*beta*m*c*a0*Math.pow(z,-(1/3)));
var thetac = Math.sqrt(alphasq*t*atomscc);
var ncollision = thetac*thetac/(1.13*thmin*thmin);
var B = bcalc(ncollision);
var log = Math.log(thetac/thmin);
if (log < 1)
   {
   alert("The foil is too thin for this model to work.")
   }



//thin target calculation
  //var thetatts = 2.0*alphasq*atomscc*t*log;
  //var thetatt = Math.sqrt(thetatts);
//alert(thetatt);

//Moliere calculation
var thetasqmol = alphasq * atomscc *t * B;
var thetamol = Math.sqrt(thetasqmol);
var gbeta = gamma*beta*thetamol;
var pth = 0.7071*gbeta;

pth = pth.toPrecision(5);
ncollision = ncollision.toPrecision(5);
thetamol = thetamol.toPrecision(5);

document.getElementById("cap1").value = thickness;
document.getElementById("cap2").value = units;
document.getElementById("cap3").value = element;
//document.getElementById("gb").value = gbeta;
document.getElementById("thermal").value = pth;
document.getElementById("number").value = ncollision;
document.getElementById("moliere").value = thetamol;
//document.getElementById("thin").value = thetatt;

//document.getElementById("gb").value =B ;


   }

function bcalc(ncollision)
{

var eulere = 2.71828;
var eulergamma = 1.7811;
var tmplog = Math.log(ncollision*eulere/(eulergamma*eulergamma));
var B = tmplog;
var i = 0;
while (i<10)
   {
   B = tmplog + Math.log(B);
   i = i + 1;
   //alert(i);
   }  
return B;
}

function resetscat()
{
document.getElementById("thickness").value = "";
document.getElementById("element").value = "1";
document.getElementById("gamma").value = "";
document.getElementById("units").value = "mil";
document.getElementById("cap1").value = "";
document.getElementById("cap2").value = "";
document.getElementById("cap3").value = "";
document.getElementById("thermal").value = "";
document.getElementById("number").value = "";
document.getElementById("moliere").value = "";
}







 function emitt()
	   {
	   var radius = document.getElementById("radius").value;
	   var tvalue = document.getElementById("tvalue").value;
	   var units = document.getElementById("units2").value;

	   if (units == "ev")
	     {
             var rads = Math.sqrt(tvalue/511000.0);
	     var temp = tvalue;
	     var rads = rads;
             rads1 = rads.toPrecision(5);
	     document.getElementById("u2").value = "Angle:";
             document.getElementById("v2").value = rads1 + " rads";
	     }
	   else
	     {
	     var rads = tvalue;
	     var temp = tvalue*tvalue*511000.0;
	     var temp = temp;
             temp1 = temp.toPrecision(5);
	     document.getElementById("u2").value = "Temperature:";
             document.getElementById("v2").value = temp1 + " eV";
	     }

	  
	   var emitt = 2.0*radius*rads;
	   emitt = emitt.toPrecision(5);

	   // document.getElementById("radius2").value = radius;
	   //document.getElementById("temp").value = temp;
	   //document.getElementById("rads").value = rads;
	   document.getElementById("emitt").value = emitt;

        }

function resetemitt()
{
document.getElementById("radius").value = "";
document.getElementById("tvalue").value = "";
document.getElementById("u2").value= "";
document.getElementById("v2").value = "";
document.getElementById("emitt").value = "";
}









function bbu()
{
var T = document.getElementById("T").value;
T = T/(1e+9);
var F = document.getElementById("F").value;
F = F*(1e+6);
var omega = 2*Math.PI*F;
var B = document.getElementById("B").value;
var I = document.getElementById("I").value;
var N = document.getElementById("N").value;
var Z = document.getElementById("Z").value;
var Q = document.getElementById("Q").value;
var alpha = omega/(2*Q);
var r = N*I*Z/(300*B);
var t = 2*r*Q/omega;
var P = 2*omega*T*N*I*Z/(300*B*Q);
P = Math.sqrt(P);
if (T >= t)
  {
  var damped = Greaterdamped(r);
  var delta = Greaterdelta(damped,Q);
  if ((T/t) >= 10)
  {
    var res = Greaterres(r);
    res = res.toPrecision(5);
    document.getElementById("res").value = res;
  }
  //alert("still working");
  }
else
  {
  var damped = Lessdamped(T,P,alpha);
  var delta = Lessdelta(damped,T,t,Q);
  document.getElementById("res").value = "";
  }
delta = delta.toPrecision(5);
document.getElementById("delta").value = delta;
damped = damped.toPrecision(5);
document.getElementById("dam").value = damped;
t = t*1e+9;
t = t.toPrecision(5);
document.getElementById("t").value = t + " sec";

}

function Greaterdamped(r)
{
var denom = 4*Math.PI*r;
denom = Math.sqrt(denom);
var damped = (1/2)*(Math.exp(r)/denom);
return damped;
}

function Greaterdelta(damped,Q)
{
var delta = damped/Q;
return delta;
}

function Greaterres(r)
{
var res = (1/2)*Math.exp(r);
return res;
}



function Lessdamped(T,P,alpha)
{
var denom = 2*Math.PI*P;
denom = Math.sqrt(denom);
var damped = (1/2)*(Math.exp(P-alpha*T)/denom);
return damped;
}

function Lessdelta(damped,T,t,Q)
{
var delta = (damped/Q)*Math.sqrt(t/T);
return delta;
}




