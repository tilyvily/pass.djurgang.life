var slider = document.getElementById("myRange");
var output = document.getElementById("karakInput");
output.value = slider.value;

var antal = slider.value;

slider.oninput = function() {
  output.value = this.value;
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ!_&€$£-.()[]{}+?abcdefghijklmnopqrstuvwxyz1234567890';

function generateString() {
    let result = ' ';
    let antal = slider.value;
    const charactersLength = characters.length;
    for ( let i = 0; i < antal; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.getElementById("resultValue").value = result;
}


  function copyPasswd() {
    var copyText = document.getElementById("resultValue");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value);
}