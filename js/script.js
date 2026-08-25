let userinfo = document.querySelector("#user-info")
let user = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("isloggin")) {
    links.remove()
    userinfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}
let logout = document.querySelector("#logout")
logout.addEventListener("click", logoutbtn)
function logoutbtn(){
    localStorage.removeItem("isloggin")
    setTimeout(()=>{
        window.location = "login.html"
    },500)
}
let allproducts = document.querySelector(".products")
let products = [
    { 
        id: 1, title: "JETOUR", imgurl: "imges/grayJETOUR.jpg", color: "gray", qty: 1, type: "normal" 
    },
    { 
        id: 2, title: "Ferrai", imgurl: "imges/blackFERARI.jpg", color: "black", qty: 1, type: "sport" 
    },
    { 
        id: 3, title: "Lampo", imgurl: "imges/blueLAMPORGINE.jpg", color: "blue", qty: 1, type: "sport" 
    },
    { 
        id: 4, title: "Porsche", imgurl: "imges/greenPorsche.jpg", color: "green", qty: 1, type: "sport" 
    },
    { 
        id: 5, title: "Mercides", imgurl: "imges/blackMERCIDES.jpg", color: "Black", qty: 1, type: "normal" 
    },
    { 
        id: 6, title: "Ferrai", imgurl: "imges/redFERARI.jpg", color: "Red", qty: 1, type: "sport" 
    },
    { 
        id: 7, title: "BMW", imgurl: "imges/redMBW.jpg", color: "pergandi", qty: 1, type: "sport" 
    },
    { 
        id: 8, title: "Tesla", imgurl: "imges/redTESALA.jpg", color: "red", qty: 1, type: "sport" 
    },
    { 
        id: 9, title: "AUDI", imgurl: "imges/whiteAUDI.jpg", color: "white", qty: 1, type: "normal" 
    },
    { 
        id: 10, title: "TOYOTA", imgurl: "imges/whitehighTOYOTA.jpg", color: "white", qty: 1, type: "normal" 
    },
    { 
        id: 11, title: "Nissan", imgurl: "imges/whiteNISSAN.jpg", color: "white", qty: 1, type: "normal" 
    },
    { 
        id: 12, title: "Nissan 180SX", imgurl: "imges/Nissan-180SX.jpg", color: "white", qty: 1, type: "sport" 
    }
];
function drawItems(){
    let x = products.map((item)=>{
    return `<div class="product relative flex flex-col md:flex-row h-fit md:h-[250px]" data-type="${item.type}">
            <div class="product-img-container w-full md:w-2/5">
                <img class="img-normal" src="${item.imgurl}">
                <img class="img-blured" src="${item.imgurl}">
            </div>
            <div class="product-des">
                <h2 class="item-title" >${item.title}</h2>
                <p  class="item-disc">${item.color}</p>
            </div>
            <div class="product-act w-1/4">
                <button class="add-cart bg-blue-200" onclick="check(${item.id}, this)">add</button>
                <i class="fa-regular fa-heart fav"></i>
                <input type="number" name="number" class="qty-input" min="1" value="1">
            </div>
        </div>`})
    allproducts.innerHTML = x.join("");
}
drawItems()

let addprod = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
let countProd = document.querySelector("#count-prod")
let cartsProductDiv = document.querySelector(".cart-prods")

function renderCartList(){
    countProd.innerHTML = addprod.reduce((sum, item) => sum + item.qty, 0)
    cartsProductDiv.innerHTML = addprod.map(item => `<p>${item.title} x${item.qty}</p>`).join("")
}

function check(id, btn){
    if (localStorage.getItem("username")) {
        let checkProduct = products.find((item) => item.id === id)
        let qtyInput = btn.closest(".product").querySelector(".qty-input")
        let qty = parseInt(qtyInput.value) || 1

        let existing = addprod.find(item => item.id === id)
        if (existing) {
            existing.qty += qty
        } else {
            addprod = [...addprod, {...checkProduct, qty: qty}]
        }
        localStorage.setItem("productsInCart", JSON.stringify(addprod))
        renderCartList()
    }else{
        setTimeout(()=>{
            window.location = "register.html"
        },500)
    }
}
renderCartList()

let sport = document.querySelector("#car-s")
let normal = document.querySelector("#car-n")

sport.addEventListener("click",() => filltertype("sport"))
normal.addEventListener("click",() => filltertype("normal"))
function filltertype(type){
    let allcars = document.querySelectorAll(".product")
    allcars.forEach(car => {
        if (car.dataset.type === type) {
            car.style.display="";
        }else{
            car.style.display="none"
        }
    });
}

let CarIcon = document.querySelector(".li-cart");
let CartProducts = document.querySelector(".carts-prod");
CarIcon.addEventListener("click", showen_list);
function showen_list() {
    if (CartProducts.style.display === "block") {
        CartProducts.style.display = "none";
    } else {
        CartProducts.style.display = "block";
    }
}
