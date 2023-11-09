//table adidas
let url1 = `http://localhost:3000/adidas/`;
fetch(url1)
    .then(response => response.json())
    .then((json) => {
        let htmls = json.map((data) => {
            return `<tr>` +
                `<th scope="row">${data.id}</th>` +
                `<td>${data.name}</td>` +
                `<td>${data.price}</td>` +
                `<td class="adidas"><button  class="btn btn-danger" id="${data.id}">delete</button><button class="btn btn-warning" id="${data.id}">edit</button></td>` +
                // `<td class="nike"><button class="btn btn-warning" id="${data.id}">edit</button></td>` +
                `</tr>`;
        })
        let html = htmls.join(``);
        let table1 = document.querySelector("#table-1");
        table1.innerHTML = html;
        return json;

    })
    .then((json) => {
        //DELETE REQUEST
        let deleteBtns1 = document.getElementsByClassName("adidas");
        // console.log(deleteBtns1)
        for (let i = 0; i < deleteBtns1.length; ++i) {
            deleteBtns1[i].onclick = function (e) {
                deleteProduct(url1, e.target.id);
                console.log(e.target.id);

            }
        }
        //POST REQUEST 
        let submitAdi = document.querySelector("#submitAdi");
        submitAdi.onclick = function () {
            let nameAdi = document.querySelector("#staticEmail2").value;
            let priceAdi = document.querySelector("#inputPassword2").value;
            // let idAdi = lengthAdi++;
            let idAdi = deleteBtns1.length + 1;
            // console.log(idAdi);
            createProduct(url1,
                {
                    name: nameAdi,
                    id: idAdi,
                    price: priceAdi
                });
            alert("added!");
        }

    })
    .catch(() => {
        alert("can't get data from  api (adidas)")
    })


//table NIKE
let url2 = `http://localhost:3000/nike/`;
fetch(url2)
    .then(response => response.json())
    .then((json) => {
        let htmls = json.map((data) => {
            return `<tr>` +
                ` <th scope="row">${data.id}</th>` +
                `<td>${data.name}</td>` +
                `<td>${data.price}</td>` +
                `<td class="nike"><button class="btn btn-danger" id="${data.id}">delete</button><button class="btn btn-warning" id="${data.id}">edit</button></td>` +
                // `<td class="nike"><button class="btn btn-warning" id="${data.id}">edit</button></td>` +
                `</tr>`
        })
        let html = htmls.join(``);
        let table2 = document.querySelector("#table-2");
        table2.innerHTML = html;

    })
    .then((json) => {
        //DELETE REQUEST
        let deleteBtns2 = document.getElementsByClassName("nike");
        // console.log(deleteBtns2)
        for (let i = 0; i < deleteBtns2.length; ++i) {
            deleteBtns2[i].onclick = function (e) {
                deleteProduct(url2, e.target.id);
                console.log(e.target.id);

            }
        }
        //POST REQUEST 
        let submitAdi = document.querySelector("#submitNik");
        submitAdi.onclick = function () {
            let nameNik = document.querySelector("#staticEmail1").value;
            let priceNik = document.querySelector("#inputPassword1").value;
            let idNik = deleteBtns2.length + 1;
            // console.log(idNik);
            createProduct(url2,
                {
                    name: nameNik,
                    id: idNik,
                    price: priceNik
                })
            alert("added!");
        }

    })
    .catch(() => {
        alert("can't get data from api (nike)")
    })
//CREATE
function createProduct(url, product) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            id: product.id,
            name: product.name,
            price: product.price
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}
//DELETE
function deleteProduct(url, index) {
    fetch(url + index, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    
}
//EDIT
function editProduct(url, index, product) {
    fetch(url + index, {
        method: "PATCH",
        body: JSON.stringify({
            name: product.name,
            price: product.price
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("#save").style.top = "50px";
  } else {
    document.querySelector("#save").style.top = "-50px";
  }
}