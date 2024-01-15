const number1 = Number(prompt("Nhập vào số thứ nhất: "));


const number2 = Number(prompt("Nhập vào số thứ hai: "));


const operator = prompt("Nhập vào phép tính (+, -, *, /): ");


const validOperators = ["+", "-", "*", "/"];
if (!validOperators.includes(operator)) {
  alert("Phép tính không hợp lệ");
  return;
}


let result;
switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (number2 == 0) {
      alert("Không thể chia cho 0");
      return;
    }
    result = number1 / number2;
    break;
}

alert("Kết quả là: " + result);