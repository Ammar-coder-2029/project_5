let userFname = localStorage.getItem("userFname");
let isloggin = localStorage.getItem("isloggin");
let links = document.querySelector(".links");
let userInfo = document.querySelector(".user-info");
let userDom = document.querySelector(".user");
let logoutBtn = document.getElementById("logout");


if (isloggin === "true") {
    links.style.display = "none";
    userInfo.style.display = "flex";
    userDom.innerHTML = "Hello, " + userFname;
}

logoutBtn.addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 500);
});


