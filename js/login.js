let username = document.querySelector("#username")
let password = document.querySelector("#password")

let logBtn = document.querySelector("#sign_in")

let getusername = localStorage.getItem("username") 
let getpassword = localStorage.getItem("password") 
logBtn.addEventListener("click",function(e){
    e.preventDefault()
        if(username.value ==="" || password.value ===""){
            alert("enter your data")
        }else{
            if ( getusername === username.value && getusername.trim() === username.value && getpassword === password.value ) {
                setTimeout(()=>{
                    window.location = "index.html"
                    localStorage.setItem("isloggin", true)
                },500)
            }else{
                alert("not match")
            }
        }

    }
)