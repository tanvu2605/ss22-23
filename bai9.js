const month = Number(prompt("Nhập vào tháng: "));


  const year = Number(prompt("Nhập vào năm: "));


  if (month < 1 || month > 12) {
    alert("Tháng không hợp lệ");
    return;
  }

  if (year < 0) {
    alert("Năm không hợp lệ");
    return;
  }


  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    daysInMonth[1] = 29;
  }


  alert("Tháng " + month + " năm " + year + " có " + daysInMonth[month - 1] + " ngày");
 12 changes: 12 additions & 0 deletions12  
session22/index.html