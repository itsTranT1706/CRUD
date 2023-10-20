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
                `<td class="adidas"><button  class="btn btn-danger" id="${data.id}">delete</button></td>` +
                `</tr>`;
        })
        let html = htmls.join(``);
        let table1 = document.querySelector("#table-1");
        table1.innerHTML = html;
        return json;

    })
    .then((json) => {
        //DELETE REQUEST
        let deleteBtns = document.getElementsByClassName("adidas");
        console.log(deleteBtns)
        for (let i = 0; i < deleteBtns.length; ++i) {
            deleteBtns[i].onclick = function (e) {
                console.log(e.target.id);
                deleteProduct(url1,e.target.id);
            }
        }
        //POST REQUEST 
        let submitAdi = document.querySelector("#submitAdi");
        submitAdi.onclick = function () {
            let nameAdi = document.querySelector("#staticEmail2").value;
            let priceAdi = document.querySelector("#inputPassword2").value;
            // let idAdi = lengthAdi++;
            let idAdi = deleteBtns.length + 1;
            console.log(idAdi);
            createProduct(url1,
                {
                    name: nameAdi,
                    id: idAdi,
                    price: priceAdi
                })
        }

    })
    .catch(() => {
        alert("can't get data from  api (adidas)")
    })

function createProduct(url,product) {
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

function deleteProduct(url,index) {
    fetch(url + index, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

}



//table NIKE
let url2 = `http://localhost:3000/nike/`;
fetch(url2)
    .then(response => response.json())
    .then((json) => {
        let htmls = json.map((data) => {
            return `<tr>`+
            ` <th scope="row">${data.id}</th>`+
            `<td>${data.name}</td>`+
            `<td>${data.price}</td>`+
            `<td class="nike"><button class="btn btn-danger" id="${data.id}">delete</button></td>` +
            `</tr>`
        })
        let html = htmls.join(``);
        let table2 = document.querySelector("#table-2");
        table2.innerHTML = html;

    })
    .catch(() => {
        alert("can't get data from api (nike)")
    })