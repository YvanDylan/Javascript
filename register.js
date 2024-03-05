//console.log("Hello World!", 1, 2, 3, true, ['apple', 'banana', 'orange']);
//console.error("Hello World");
//console.warn("Hello World");
//console.table(['apple', 'banana', 'grape']);

//let name = true
//console.log(typeof(name))

let txtUsername = document.querySelector("#txtUsername")
let txtPassword = document.querySelector("#txtPassword")
let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
let btnRegister = document.querySelector("#btnRegister")

btnRegister.onclick = function () {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}


function register (username, password, confirmpassword){

    console.log(username, password, confirmpassword)

    if (password == confirmpassword && password != "" && confirmpassword != "" ) {
        return console.log("Password Match!")

    } else if (password == "" || confirmpassword == "") {
        return console.log("Password must not be empty")
        
    } else {
        return console.log("Password does not match.")
    }
    
}
