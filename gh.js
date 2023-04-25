//Square Star Pattern in Javascript

//for user input

//let userinput=parseInt(prompt("How much star print : "))

let userint = 10;

let pstring = "";

for (let x = 0; x < userint; x++) {
  for (let y = 0; y < userint; y++) {
    pstring += "*";
  }
  pstring += "\n";
}

console.log(pstring);
