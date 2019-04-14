function setup() { 
  createCanvas(800,800);
  inputR = createInput('Red value');
  inputG = createInput('Green value');
  inputB = createInput('Blue value');
  button = createButton('submit');
  button.mousePressed(submit);
}

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

function submit() {
  const r = inputR.value();
  const g = inputG.value();
  const b = inputB.value();
  if(r > 255 || g > 255 || b > 255) {
    console.log('RGB values must be between 0 and 255, please try again with adjusted values.');
    text('RGB values must be between 0 and 255, please try again with adjusted values',200,400);
  } else if(r % 1 !== 0 || g % 1 !== 0 || g % 1 !== 0) {
      console.log('the RGB values must be numbers, please try again with valid RGB values.');
      text('the RGB values must be numbers, please try again with valid RGB values.', 200, 400);
    } else {
      background(r,g,b);
      nr = RGBtoHEX(r);
      ng = RGBtoHEX(g); 
      nb = RGBtoHEX(b);
      console.log("the RGB color: " + "'" + r + "," + g + "," + b + "'" + ' in HexaDecimal is: ' + "'" + nr       + ng + b + "'.");
      fill(255-this.r, 255-this.g, 255-this.b);
      text("the RGB color: " + "'" + r + "," + g + "," + b + "'" + ' in HexaDecimal is: #' + "'" + nr +           ng + b + "'.",250,400);
  }
}
