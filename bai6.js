const number = Number(prompt("Nhập vào một số có 4 chữ số: "));


const thousandsDigit = number / 1000;
const hundredsDigit = (number % 1000) / 100;
const tensDigit = (number % 100) / 10;
const unitsDigit = number % 10;

alert("Chữ số hàng nghìn: " + thousandsDigit);
alert("Chữ số hàng chục: " + hundredsDigit);
alert("Chữ số hàng trăm: " + tensDigit);
alert("Chữ số hàng đơn vị: " + unitsDigit);