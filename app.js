function gradValue() {
var x = document.getElementById("myNumber").value;
  if (x >= 80) {
    alert("คุณได้เกรด A");
  } else if (x >= 75) {
    alert("คุณได้เกรด B+");
  } else if (x >= 70) {
    alert("คุณได้เกรด B");
  } else if (x >= 60) {
    alert("คุณได้เกรด F");
  }else if (x <= 50) {
    alert("มึงสอบตก");
  }
}
