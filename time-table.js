
function addSubject() {
  var subject = document.getElementById("subject").value;
  var day = document.getElementById("day").value;
  var period = document.getElementById("period").value;
  document.getElementById(day + "-" + period).innerHTML = subject;
}
