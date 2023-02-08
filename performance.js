
function validateMark(input) {
  if (input.value > 100) {
input.value = 100;
  }
}
function add(){
    var sub1, sub2, sub3, sub4, sub5, sub6, exam, sum, avg;
         sub1= document.getElementById("mark1").value;
        document.getElementById("s-1").innerHTML = document.getElementById("sub-1").firstChild.value;
        sub2= document.getElementById("mark2").value;
        document.getElementById("s-2").innerHTML = document.getElementById("sub-2").firstChild.value;
        sub3= document.getElementById("mark3").value;
        document.getElementById("s-3").innerHTML = document.getElementById("sub-3").firstChild.value;
        sub4= document.getElementById("mark4").value;
        document.getElementById("s-4").innerHTML = document.getElementById("sub-4").firstChild.value;
        sub5= document.getElementById("mark5").value;
        document.getElementById("s-5").innerHTML = document.getElementById("sub-5").firstChild.value;
        sub6= document.getElementById("mark6").value;
        document.getElementById("s-6").innerHTML = document.getElementById("sub-6").firstChild.value;
        exam= document.getElementById("exam").value;
        sum = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5) + parseInt(sub6);
        avg = Math.floor(sum/6);
        var row = document.getElementById("score").insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        cell1.innerHTML = exam;
        cell2.innerHTML = sub1;
        cell3.innerHTML = sub2;
        cell4.innerHTML = sub3;
        cell5.innerHTML = sub4;
        cell6.innerHTML = sub5;
        cell7.innerHTML = sub6;
        cell8.innerHTML = sum;
        cell9.innerHTML = avg;
        if (avg >= 50 && avg < 60) {
          cell10.innerHTML = "<font color=green>C</font>";
        } else if (avg >= 60 && avg < 75) {
        cell10.innerHTML="<font color=green>B</font>";
        } else if (avg >= 75 && avg < 90) {
        cell10.innerHTML="<font color=green>A</font>";
        } else if (avg >= 90 && avg <= 100) {
        cell10.innerHTML="<font color=green>O</font>";
        } else {
        cell10.innerHTML="<font color=red>Fail</font>";
        }
        if (avg < 50 || sub1 < 50 || sub2 < 50 || sub3 < 50 || sub4 < 50 || sub5 < 50 || sub6 < 50) {
        cell10.innerHTML="<font color=red>Fail</font>";
        }

    }

