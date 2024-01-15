const a = Number(prompt("Nhập vào hệ số a: "));


const b = Number(prompt("Nhập vào hệ số b: "));


const c = Number(prompt("Nhập vào hệ số c: "));


const delta = b * b - 4 * a * c;
if (delta > 0) {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  alert("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
} else if (delta == 0) {
  const x = -b / (2 * a);
  alert("Phương trình có nghiệm kép: x = " + x);
} else {
  alert("Phương trình vô nghiệm");
}