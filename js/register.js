let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let regBtn = document.querySelector("#sign_in")
isloggin=localStorage.setItem("isloggin", false)
regBtn.addEventListener("click",function(e){
    e.preventDefault()
        if(username.value ==="" || email.value ==="" || password.value ===""){
            alert("enter your data first")
        }else{
            localStorage.setItem("username", username.value)
            localStorage.setItem("email", email.value)
            localStorage.setItem("password", password.value)
            localStorage.setItem("isloggin", true)
            setTimeout(()=>{
                window.location = "login.html"
            },500)
        }

    }
)