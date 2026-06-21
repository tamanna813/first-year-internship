function generatePassword(){

    const length =
        document.getElementById("length").value;

    const includeNumbers =
        document.getElementById("numbers").checked;

    const includeSymbols =
        document.getElementById("symbols").checked;

    let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(includeNumbers){
        chars += "0123456789";
    }

    if(includeSymbols){
        chars += "!@#$%^&*()_+[]{}?";
    }

    let password = "";

    for(let i = 0; i < length; i++){
        const randomIndex =
            Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    document.getElementById("password").value =
        password;
}

function copyPassword(){

    const password =
        document.getElementById("password");

    password.select();

    navigator.clipboard.writeText(password.value);

    alert("Password copied!");
}