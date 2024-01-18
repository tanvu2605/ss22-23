function xoaPhanTuLe(arr) {
    return arr.filter(function (element) {
      return element % 2 === 0;
    });
  }
  
  let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  let mangMoi = xoaPhanTuLe(mangSoNguyen);
  console.log("Mảng số nguyên ban đầu:", mangSoNguyen);
  console.log("Mảng mới sau khi xóa phần tử lẻ:", mangMoi);