// Copyright (c) 2007 Thomas Hughes

function lwaves()
{

var c = 2.9979e+8;
var choice = document.getElementById("choice").value;
var permit = document.getElementById("permit").value;
var permea = document.getElementById("permea").value;

var vl = c/Math.sqrt(permit*permea);
vl = vl.toPrecision(4);
vlcm = 100.0*vl;
vlcm = vlcm.toPrecision(4);
document.getElementById("label11").value = "Light speed:";
document.getElementById("result11").value = vl + " m/s" + " (" + vlcm + " cm/s)";

if (choice == "WL")
  {
  var lambda = document.getElementById("num").value;
  var freq = vl/lambda;
  freq = freq.toPrecision(4);
  var omega = freq*2.0*Math.PI;
  omega = omega.toPrecision(4);
  document.getElementById("label12").value = "Frequency:";
  document.getElementById("result12").value = freq + " Hz " + "(" + omega + " rad/s)";
  }
else if (choice == "WLcm")
  {
  var lambda = document.getElementById("num").value;
  var freq = 100.0*vl/lambda;
  freq = freq.toPrecision(4);
  var omega = freq*2.0*Math.PI;
  omega = omega.toPrecision(4);
  document.getElementById("label12").value = "Frequency:";
  document.getElementById("result12").value = freq + " Hz " + "(" + omega + " rad/s)";
  }
else
  {
  var freq = document.getElementById("num").value;
  var lambda = vl/freq;
  lambda = lambda.toPrecision(4);
  var k = 2.0*Math.PI/lambda;
  k = k.toPrecision(4);
  document.getElementById("label12").value = "Wavelength:";
  document.getElementById("result12").value = lambda + " m " + "(" + k + " /m)";
  }
}

function resetlwaves()
{
alert("i got here");
document.getElementById("num").value = "";
document.getElementById("result11").value = "";
document.getElementById("label11").value = "";
document.getElementById("result12").value = "";
document.getElementById("label12").value = "";
}


// #2

function skind()
{

var mu0 = 4e-7*Math.PI;
var c = 2.9979e+8;
var choice = document.getElementById("choice2").value;
var mur = document.getElementById("permea2").value;
var mu = mur*mu0;
var cond = document.getElementById("cond2").value;

var num = document.getElementById("num2").value;

if (choice == "depth")
  {
    depth = num;
  }
else if (choice == "dcm")
  {
    depth = 0.01*num;
    choice = "depth";
  }
else
  {
    freq = num;
  }

if (choice == "depth")
  {
  var omega = 2.0/(mu*cond*depth*depth);
  omega = omega.toPrecision(4);
  var freq = omega/(2.0*Math.PI);
  freq = freq.toPrecision(4);
  document.getElementById("label21").value = "Frequency:";
  document.getElementById("result21").value = freq + " Hz " + "(" + omega + " rad/s)";
  }
else
  {
  var omega = freq*2.0*Math.PI;
  var depth = Math.sqrt(2.0/(mu*cond*omega));
  depth = depth.toPrecision(4);
  var dcm = depth*100.0;
  dcm = dcm.toPrecision(4);
  document.getElementById("label21").value = "Depth:";
  document.getElementById("result21").value = depth + " m" + " (" + dcm + " cm)";
  }
}

function resetskind()
{
alert("i got here");
document.getElementById("num").value = "";
document.getElementById("result21").value = "";
document.getElementById("label21").value = "";
document.getElementById("result22").value = "";
document.getElementById("label22").value = "";
}

