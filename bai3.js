const n = Number(prompt("Nhập vào một số: "));

const sqrt_n = Math.sqrt(n);
if (Math.floor(sqrt_n) === sqrt_n) {
  alert(n + " là số chính phương");
} else {
  alert(n + " không phải số chính phương");
}
