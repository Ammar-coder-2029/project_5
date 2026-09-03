let allproducts = document.querySelector(".products")
let products = [
    {id: 1, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 2, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 3, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 4, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 5, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 6, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 7, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 8, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 9, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 10, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 11, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
    {id: 12, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", price: 100, qty: 1, type: "normal" },
];

function drawitem() {
    let x = products.map((item) =>
        `<div class="product h-fit md:h-[350px]" >
            <div class="img-container">
                <img src="${item.imgurl}" alt="img of product">
            </div>
            <div class="disc-prod">
                <h1>${item.title}</h1>
                <h4>price:${item.price}</h4>
                <h4 class="catigory" id="catigory">catigory:${item.catigory}</h4>
                <div class="action">
                    <i class="fa-solid fa-heart"></i>
                    <button type="submit" class="" id="add-to-cart">add to cart</button>
                </div>
            </div>
        </div>`
    )
    allproducts.innerHTML = x.join("");
}
drawitem()