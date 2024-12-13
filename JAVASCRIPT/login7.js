let username = document.querySelector("#uname");
let password = document.querySelector("#pwd");

function hideShow(){
    // by default type password
    if(password.type=="password"){
        password.type="Text";
    }else{
        password.type="password";
    }
}

// Login Validate 
function login(){
    if(username.value=="abcd"&&password.value==1234){
        // alert is BOM
        alert("Login Successful");
    }
    else{
        alert("Login Failed")
    }
}