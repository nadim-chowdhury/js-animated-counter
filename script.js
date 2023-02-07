var count = 0;
var project = setInterval(project, 10);
function project() {
  count++;
  var num1 = (document.getElementById("num1").innerHTML = count);

  if (count == 100) {
    clearInterval(project);
  }
}

var count2 = 0;
var client = setInterval(client, 10);
function client() {
  count2++;
  var num2 = (document.getElementById("num2").innerHTML = count2);

  if (count2 == 150) {
    clearInterval(client);
  }
}

var count3 = 0;
var sell = setInterval(sell, 10);
function sell() {
  count3++;
  var num3 = (document.getElementById("num3").innerHTML = count3);

  if (count3 == 200) {
    clearInterval(sell);
  }
}
