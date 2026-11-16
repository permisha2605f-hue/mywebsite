
function login() {
    let email = document.querySelector(
        'input[type="email"]'
    ).value;

    let password = document.querySelector(
        'input[type="password"]'
    ).value;

    if (email === "" || password === "") {
        alert("Please fill all fields!");
    } else {
        alert("Welcome! Login demo successful.");
    }
}
