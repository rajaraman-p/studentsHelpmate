const addBtn = document.getElementById("addBtn");
const schedule = document.getElementById("schedule");

addBtn.addEventListener("click", function() {
  const subject = document.getElementById("subject").value;
  const dateInput = document.getElementById("date").value;
  let fromTime = document.getElementById("fromTime").value;
  let fromAmPm = document.getElementById("fromAmPm").value;
  let toTime = document.getElementById("toTime").value;
  let toAmPm = document.getElementById("toAmPm").value;

  fromTime = fromTime + ' ' + fromAmPm;
  toTime = toTime + ' ' + toAmPm;

  const date = new Date(dateInput);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const row = schedule.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  cell1.innerHTML = formattedDate;
  cell2.innerHTML = fromTime;
  cell3.innerHTML = toTime;
  cell4.innerHTML = subject;
});
