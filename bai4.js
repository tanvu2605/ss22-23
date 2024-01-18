function chiaMangChanLe(arr) {
    let mangChan = arr.filter(function (element) {
      return element % 2 === 0;
    });
  
    let mangLe = arr.filter(function (element) {
      return element % 2 !== 0;
    });
  
    return { mangChan, mangLe };
  }
  
  let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  let ketQuaChiaMang = chiaMangChanLe(mangSoNguyen);
  console.log("Mảng số nguyên ban đầu:", mangSoNguyen);
  console.log("Mảng chẵn:", ketQuaChiaMang.mangChan);
  console.log("Mảng lẻ:", ketQuaChiaMang.mangLe);