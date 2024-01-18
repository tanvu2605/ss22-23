let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));

function taoMangTuKhoang(a, b) {
  let mangKhoang = [];
  for (let i = a + 1; i < b; i++) {
    mangKhoang.push(i);
  }
  return mangKhoang;
}

let mangKhoangAB = taoMangTuKhoang(a, b);
console.log("Mảng chứa các số từ " + a + " đến " + b + ":");
console.log(mangKhoangAB);