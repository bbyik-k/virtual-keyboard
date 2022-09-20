document.getElementById('test1').onsubmit = () => {
  event.preventDefault();

  const str = document.getElementById('str').value;
  const result1 = Hangul.disassemble(str);
  const result2 = Hangul.assemble(result1);
  console.debug(`gggg`);
  document.getElementById('test1-result1').innerHTML = result1;
  document.getElementById('test1-result2').innerHTML = result2;
}

// function testFunc() {

//   console.debug('gg');
//   document.getElementById('test1-result1').innerHTML = "ggg";
// }


function keyboard(strPara) {
  if (strPara == "bs") {
    addressee = addressee.slice(0, -1);
  } else {
    addressee += strPara;
  }
  document.getElementsByClassName("address")[0].childNodes[0].innerHTML = addressee;
  // document.getElementsByClassName("phone_number")[0].childNodes[0].innerHTML = addressee;
}