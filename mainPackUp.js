// let tableAdi = document.querySelector("#adi");
// let tableNik = document.querySelector("#nik");
let urlAdi = `http://localhost:3000/adidas`;
let urlNik = `http://localhost:3000/nike`;
    getProduct(urlAdi, renderProduct, (data) => {
        let table1 = document.querySelector("#table-1");
        table1.innerHTML = data.join("");
        handleCreateForm(urlAdi);
    })


    getProduct(urlNik, renderProduct, (data) => {
        let table2 = document.querySelector("#table-2");
        table2.innerHTML = data;
    })
function getProduct(url, callback, callback1) {
    fetch(url)
        .then(response => response.json())
        .then(callback)
        .then(callback1)
        .catch(() => {
            alert("u dont query web apis");
        })
}
function renderProduct(products) {
    let htmls = products.map((product) => {
        return `<tr>
         <th scope="row">${product.id}</th>
         <td>${product.name}</td>
         <td>${product.price}</td>
         <td><button  class="btn btn-danger"  id="${product.id}">delete</button>
         <button class="btn btn-warning" id="${product.id}">edit</button></td>
         </tr>`;
    })
    return htmls;

}
function createProduct(url,data,callback) {
    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json())
        .then(callback);
}
function handleCreateForm(url) {
    let createAdi = document.querySelector("#submitAdi");
    let length = document.getElementById("table-1").getElementsByTagName("tr").length;
    console.log(length);
    createAdi.onclick = function() {
        let name = document.querySelector("#staticEmail2").value;
        let price  = document.querySelector("#inputPassword2").value;
        let data = {
            id : length+1,
            name: name,
            price: price
        }
        createProduct(url,data,renderProduct);
    }

}
