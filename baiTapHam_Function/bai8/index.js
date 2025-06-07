// CRUD: tạo, đọc, sửa, xóa
// Đọc

let productNames = JSON.parse(localStorage.getItem("productNames")) || [];
let searchProductNames = [];
let indexUpdate = -1;

function add() {
  let newData = document.getElementById("newProduct").value;
  productNames.push(newData);
  getAll();
  document.getElementById("newProduct").value = "";
}

function remove(index) {
  let isConfirm = confirm("Are you sure?");
  if (isConfirm) {
    productNames.splice(index, 1);
    getAll();
  }
}

function chooseEdit(index) {
  document.getElementById("editProduct").value =
    searchProductNames.length > 0
      ? searchProductNames[index]
      : productNames[index];
  indexUpdate = index;
}

function edit() {
  let data = document.getElementById("editProduct").value;
  if (searchProductNames.length > 0) {
    let newProducts = productNames.map((item) => {
      if (searchProductNames[indexUpdate] === item) {
        return data;
      }
      return item;
    });
    productNames = newProducts;
    search();
  } else {
    productNames[indexUpdate] = data;
  }
  document.getElementById("editProduct").value = "";
  indexUpdate = -1;
  getAll();
}

function search() {
  searchProductNames = [];
  let data = document.getElementById("searchData").value;
  for (let i = 0; i < productNames.length; i++) {
    let countMatch = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[j].toLowerCase() === productNames[i][j].toLowerCase()) {
        countMatch++;
      }
    }
    if (countMatch == data.length) searchProductNames.push(productNames[i]);
  }
  getAll();
}

function getAll() {
  let products = productNames;
  let searchE = document.getElementById("searchData").value;
  if (searchProductNames.length > 0 || searchE) products = searchProductNames;
  let html = "";

  for (let i = 0; i < products.length; i++) {
    html += `
           <tr>
                <td>${products[i]}</td>
                <td><button onClick=chooseEdit(${i})>Edit</button></td>
                <td><button onClick=remove(${i})>Delete</button></td>
            </tr>   
        `;
  }
  document.getElementById("data").innerHTML = html;
  localStorage.setItem("productNames", JSON.stringify(productNames));
}

getAll();

// Tạo 1 ô input cho phép người dùng tìm kiếm theo tên (Nên tạo 1 mảng mới chứa dữ liệu tìm kiếm)
// Tìm gần đúng
// Nhập đến đâu lọc dữ liệu đến đó

// Edit không đùng prompt mà dùng html
// Lưu dữ liệu (local storage)
