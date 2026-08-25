let allproducts = document.querySelector(".products");
let cartproduct = JSON.parse(localStorage.getItem("productsInCart")) || [];
let userinfo = document.querySelector("#user-info");
let user = document.querySelector("#user");
let links = document.querySelector("#links");
let badgeCount = document.querySelector("#count-prod"); 

if (localStorage.getItem("isloggin")) {
    links.remove()
    userinfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}
if (cartproduct.length > 0) {
    drawItems();
} else {
    showEmpty();
}
function drawItems() {
    let x = cartproduct.map((item) => {
        return `
        <div class="product relative flex flex-col md:flex-row h-fit md:h-[150px]">
            <div class="product-img-container w-full md:w-1/3">
                <img class="img-normal" src="${item.imgurl}">
                <img class="img-blured" src="${item.imgurl}">
            </div>
            <div class="product-des">
                <h2 class="item-title" >${item.title}</h2>
                <p  class="item-disc">${item.color}</p>
            </div>
            <div class="product-act">
                <button class="remove-cart bg-blue-200" onclick="removeFromCart(${item.id},${item.qty})">remove</button>
                <span class="itemcount font-bold text-lg">${item.qty}</span> 
            </div>
        </div>`;
    });
    allproducts.innerHTML = x.join("");
}

function removeFromCart(id,qty) {
    if (qty > 0) {
        let cartproductqty = cartproduct.find((item) => item.id === id);
        cartproductqty.qty -= 1;
    } else {
        cartproduct = cartproduct.filter((item) => item.id !== id);
    }
        localStorage.setItem("productsInCart", JSON.stringify(cartproduct));
        if (cartproduct.length > 0) {
            drawItems();
        } else {
            allproducts.innerHTML=""
            showEmpty();
        }
}

function showEmpty() {
    let isempty = document.querySelector(".sec-cart");
    if(isempty) {
        isempty.innerHTML = `<h1 style="font-size: 25px; font-family:fantasy;">The cart is empty</h1>`;
        isempty.style.display = "block";
    }
}