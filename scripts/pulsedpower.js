// Copyright (c) 2005-2007 Fiona Hughes

var type;
function coaxial()
{
document.getElementById("info1").value= "Inner radius:";
document.getElementById("info2").value= "Outer radius:";
type = "coaxial";
}

function radial()
{
document.getElementById("info1").value= "Radius:";
document.getElementById("info2").value= "Width:";
type = "radial";
}

function tli()
{
var permit = document.getElementById("permit").value;
var permea = document.getElementById("permea").value;
var imped = permit/permea;
imped = Math.sqrt(imped);
//alert(imped);

if (type == "coaxial")
  { 
  var inner = document.getElementById("num1").value;
  var outer = document.getElementById("num2").value;
  if (inner >= outer)
    {
    alert("The inner radius must be smaller than the outer radius.");
    return;
    }
  //alert(inner, outer);
  answer = outer/inner;
  answer = Math.log(answer);
  imped = 60*answer*imped;
  //alert(imped);
  }

else
  {
  var radius = document.getElementById("num1").value;
  var width = document.getElementById("num2").value;
  imped = (60*width/radius)*imped;
  //alert(imped);
  }
imped = imped.toPrecision(5);
document.getElementById("imped").value = imped + " ohms";

}

function resettli()
{
document.getElementById("info1").value = "";
document.getElementById("info2").value = "";
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";
document.getElementById("permit").value = "";
document.getElementById("permea").value = "";
document.getElementById("imped").value = "";
}













function pflux()
{

var c = 2.9979e+8;
var eps = 8.8542e-12;
var mu = 4e-7*Math.PI;
var choice = document.getElementById("choice").value;
if (choice == "E")
  {
  var E = document.getElementById("num").value;
  var P = eps*c*E*E;
  P = P.toPrecision(5);
  document.getElementById("result1").value = "Poynting Flux:";
  document.getElementById("result2").value = P + " watts/m^2";
  document.getElementById("extra1").value = "";
  document.getElementById("extra2").value = "";
  }
else
  {
  var P = document.getElementById("num").value;
  var E = P/(eps*c);
  E = Math.sqrt(E);
  E = E.toPrecision(5);
  document.getElementById("result1").value = "Electric Field Amplitude:";
  document.getElementById("result2").value = E + " V/m";
  var H = E/377;
  var B = mu*H;
  B = B.toPrecision(5);
  //alert(mu);
  document.getElementById("extra1").value = "Magnetic Field Strength:";
  document.getElementById("extra2").value = B + " T";
  }

}

function resetpflux()
{
//alert("i got here");
document.getElementById("num").value = "";
document.getElementById("result1").value = "";
document.getElementById("result2").value = "";
document.getElementById("extra1").value = "";
document.getElementById("extra2").value = "";
}

