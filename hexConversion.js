var number = 55;
var step1 = number/16;
var step2 = Math.floor(step1)
var step3 = step2*16;
var step4 = number - step3;
if(step2 > 9) {
   step2 = String.fromCharCode(step2 + 55);
}
if(step4 > 9) {
  step4 = String.fromCharCode(step4 + 55);
}
var step5 = step2 + '' + step4;
console.log('#'+step5);

