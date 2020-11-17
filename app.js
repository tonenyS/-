function gradValue() {
var x = document.getElementById("myNumber").value;
  if (x >= 80) {
    alert("คุณได้เกรด A");
    document.getElementById("grade").innerHTML="ได้เกรด A เก่ง ๆๆๆ"
  } else if (x >= 75){
    alert("คุณได้เกรด B+");
    document.getElementById("grade").innerHTML="ได้เกรด B+ เก่งพยายามอีกหน่อย"
  } else if (x >= 70) {
    alert("คุณได้เกรด B");
    document.getElementById("grade").innerHTML="ได้เกรด B ยังเก่งได้อัก"
  } else if (x >= 60) {
    alert("คุณได้เกรด F");
    document.getElementById("grade").innerHTML="ไปลงเรียนใหม่"
  }else if (x <= 50) {
    alert("มึงสอบตก");
    document.getElementById("grade").innerHTML="เปลืองตังพ่อแม่"
  }
}
