r = 200;
g = 255;
b = 13;

r = RGBtoHEX(r);
g = RGBtoHEX(g); 
b = RGBtoHEX(b);

console.log('#' + r + g + b);
function RGBtoHEX(value) {
  var step1 = value/16;
  var step2 = Math.floor(step1)
  var step3 = step2*16;
  var step4 = value - step3;
  if(step2 > 9) {
     step2 = String.fromCharCode(step2 + 55);
  }
  if(step4 > 9) {
    step4 = String.fromCharCode(step4 + 55);
  }
  var step5 = step2 + '' + step4;
  
  return step5;
}
