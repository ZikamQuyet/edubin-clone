const btnSubmit = document.querySelector("button[type='submit']");

const txtFirstName = document.querySelector("#first-name");
const txtLastName = document.querySelector("#last-name");
const txtUserName = document.querySelector("#user-name");
const txtEmail = document.querySelector("#email");
const txtPassword = document.querySelector("#password");
const txtPasswordConfirmation = document.querySelector("#password-confirmation");

const showPassword1 = document.querySelector(".show-password-1");
const showPassword2 = document.querySelector(".show-password-2");

const checkType = (element, btnShow) => {
    if (element.type === "password") {
        element.type = "text";
        btnShow.classList.toggle("fa-eye");
        btnShow.classList.toggle("fa-eye-slash");
    }
    else {
        element.type = "password";
        btnShow.classList.toggle("fa-eye");
        btnShow.classList.toggle("fa-eye-slash");
    }
}
const handleShowPassword = () => {
    showPassword1.addEventListener("click", () => {
        checkType(txtPassword, showPassword1);
    })
    showPassword2.addEventListener("click", () => {
        checkType(txtPasswordConfirmation, showPassword2);
    })
}
const isEmpty = (value) => {
    if (value) return true;
    return false;
}
const isEmail = (value) => {
    return value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
const isPassword = (value) => {
    return value.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    );
}
const isPasswordConfirmation = (value1, value2) => {
    return value1 === value2;
}

const checkValidate = () => {
    let checkInput = 0;

    const txtFirstNameValue = txtFirstName.value.trim();
    const txtLastNameValue = txtLastName.value.trim();
    const txtUserNameValue = txtUserName.value.trim();
    const txtEmailValue = txtEmail.value.trim();
    const txtPasswordValue = txtPassword.value.trim();
    const txtPasswordConfirmationValue = txtPasswordConfirmation.value.trim();
    if (!isEmpty(txtFirstNameValue)) {
        txtFirstName.parentNode.querySelector("small").innerText = "Do not leave blank";
        txtFirstName.parentNode.querySelector("small").classList.remove("hidden");
    }
    else {
        txtFirstName.parentNode.querySelector("small").classList.add("hidden");
        checkInput += 1;
    }

    if (!isEmpty(txtLastNameValue)) {
        txtLastName.parentNode.querySelector("small").innerText = "Do not leave blank";
        txtLastName.parentNode.querySelector("small").classList.remove("hidden");
    }
    else {
        txtLastName.parentNode.querySelector("small").classList.add("hidden");
        checkInput += 1;
    }

    if (!isEmpty(txtUserNameValue)) {
        txtUserName.parentNode.querySelector("small").innerText = "Do not leave blank";
        txtUserName.parentNode.querySelector("small").classList.remove("hidden");
    }
    else {
        txtUserName.parentNode.querySelector("small").classList.add("hidden");
        checkInput += 1;
    }

    if (!isEmpty(txtEmailValue)) {
        txtEmail.parentNode.querySelector("small").innerText = "Do not leave blank";
        txtEmail.parentNode.querySelector("small").classList.remove("hidden");
    }
    else if (!isEmail(txtEmailValue)) {
        txtEmail.parentNode.querySelector("small").innerText = "wrong email format";
        txtEmail.parentNode.querySelector("small").classList.remove("hidden");
    }
    else {
        txtEmail.parentNode.querySelector("small").classList.add("hidden");
        checkInput += 1;
    }

    if (!isEmpty(txtPasswordValue)) {
        txtPassword.parentNode.querySelector("small").innerText = "Do not leave blank";
        txtPassword.parentNode.querySelector("small").classList.remove("hidden");
    }
    else if (!isPassword(txtPasswordValue)) {
        txtPassword.parentNode.querySelector("small").innerText = "wrong password format";
        txtPassword.parentNode.querySelector("small").classList.remove("hidden");
    }
    else {
        txtPassword.parentNode.querySelector("small").classList.add("hidden");
        checkInput += 1;
    }

    if (!isEmpty(txtPasswordConfirmationValue)) {
        txtPasswordConfirmation.parentNode.querySelector("small").innerText = "Do not leave blank";
        txtPasswordConfirmation.parentNode.querySelector("small").classList.remove("hidden");
    }
    else if (!isPasswordConfirmation(txtPasswordValue, txtPasswordConfirmationValue)) {
        txtPasswordConfirmation.parentNode.querySelector("small").innerText = "password does not match";
        txtPasswordConfirmation.parentNode.querySelector("small").classList.remove("hidden");
    }
    else {
        txtPasswordConfirmation.parentNode.querySelector("small").classList.add("hidden");
        checkInput += 1;
    }
    return checkInput;
}

const handleSubmit = () => {
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (checkValidate() >= 6) {
            alert("Đăng ký thành công");
            txtFirstName.value = "";
            txtLastName.value = "";
            txtUserName.value = "";
            txtEmail.value = "";
            txtPassword.value = "";
            txtPasswordConfirmation.value = "";
        };
    })

}

const start = () => {
    txtFirstName.focus();
    handleShowPassword();
    handleSubmit();
}

window.onload = () => {
    start();
}
