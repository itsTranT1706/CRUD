//table adidas

let url1 = `http://localhost:3000/adidas`;
fetch(url1)
    .then(response => response.json())
    .then((json) => {
        let htmls = json.map((data) => {
            return `<tr>`+
                      `<th scope="row">${data.id}</th>`+
                      `<td>${data.name}</td>`+
                      `<td>${data.price}</td>`+
                      `<td><button class="btn btn-danger">delete</button></td>`+
                      `</tr>`;
        })
        let html = htmls.join(``);
        
        let table1 = document.querySelector("#table-1");
        table1.innerHTML = html;

    })
    .catch(() => {
        alert("can't get data from  api (adidas)")
    })

let adiElement = document.querySelector("#adi");
adiElement.onclick = function (e) {
    const element = document.getElementById("adidas");
    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({ block: "end" });
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

let nikElement = document.querySelector("#nik");
nikElement.onclick = function (e) {
    const element = document.getElementById("nike");
    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({ block: "end" });
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

let submitAdi = document.querySelector("#submitAdi");
submitAdi.onclick = function () {
    let nameAdi = document.querySelector("#staticEmail2").value;
    let priceAdi = document.querySelector("#inputPassword2").value;
    // let idAdi = lengthAdi++;
    // console.log(idAdi);
    createProduct({ name: nameAdi, id: 7, price: priceAdi });
}
function createProduct(product) {
    fetch("http://localhost:3000/adidas", {
        method: "POST",
        body: JSON.stringify({
            id: product.id,
            name: product.name,
            price: product.price
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }); 
}
function deleteProduct(index) {

}






//table NIKE
// let url2 = `http://localhost:3000/nike`;
// fetch(url2)
//     .then(response => response.json())
//     .then((json) => {
//         let htmls = json.map((data) => {
//             return `<tr> <th scope="row">${data.id}</th><td>${data.name}</td><td>${data.price}</td></tr>`
//         })
//         let html = htmls.join(``);
//         let table2 = document.querySelector("#table-2");
//         table2.innerHTML = html;

//     })
//     .catch(() => {
//         alert("can't get data from api (nike)")
//     })