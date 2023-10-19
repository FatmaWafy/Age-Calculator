let UserInput = document.getElementById("date");
UserInput.max = new Date().toISOString.split("T")[0];

function CalculateAge() {
  let BirthDay = new Date(UserInput.value);
  let Result = document.getElementById("result");

  let d1 = BirthDay.getDate();
  let m1 = BirthDay.getMonth() + 1;
  let y1 = BirthDay.getFullYear();

  let Today = new Date();

  let d2 = Today.getDate();
  let m2 = Today.getMonth() + 1;
  let y2 = Today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    m3 = 12 + m2 - m1;
    y3--;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    d3 = GetDaysInMonth(y1, m1) + d2 - d1;
    m3--;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  Result.innerHTML = `You Are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days Old`;
}

function GetDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
