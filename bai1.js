function timPhanTuLonNhat(arr) {
    let lonNhat = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > lonNhat) {
        lonNhat = arr[i];
      }
    }
    return lonNhat;
  }
  
  function timPhanTuNhoNhat(arr) {
    let nhoNhat = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < nhoNhat) {
        nhoNhat = arr[i];
      }
    }
    return nhoNhat;
  }
  
  let mangSoNguyen = [3, 8, 1, 6, 2, 10, 7];
  
  console.log("Mảng số nguyên:", mangSoNguyen);
  console.log("Phần tử lớn nhất: " + timPhanTuLonNhat(mangSoNguyen));
  console.log("Phần tử nhỏ nhất: " + timPhanTuNhoNhat(mangSoNguyen));