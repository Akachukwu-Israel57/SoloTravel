const inputValue = document.getElementById("inputPassword");
const toggle = document.getElementById("toggleIcon");
toggle.addEventListener("click", () => {
    if (inputValue.type === "password") {
        inputValue.type = "text";
        toggle.classList.remove("bi-eye-slash");
        toggle.classList.add("bi-eye");
    } else {
        inputValue.type = "password";
        toggle.classList.remove("bi-eye");
        toggle.classList.add("bi-eye-slash");
    }
});


const inputValueConfirm = document.getElementById("confirmPassword");
const toggleConfirm = document.getElementById("toggleIconConfirm");
toggleConfirm.addEventListener("click", () => {
    if (inputValueConfirm.type === "password") {
        inputValueConfirm.type = "text";
        toggleConfirm.classList.remove("bi-eye-slash");
        toggleConfirm.classList.add("bi-eye");
    } else {
        inputValueConfirm.type = "password";
        toggleConfirm.classList.remove("bi-eye");
        toggleConfirm.classList.add("bi-eye-slash");
    }
});

const input0ne = document.getElementById("inputPassword");
const inputTwo = document.getElementById("confirmPassword");
const confirmPar = document.getElementById("confirmPar");
const createAccountBtn = document.getElementById("createAccount");
createAccountBtn.addEventListener("click", (e) => {
    if (input0ne.value !== inputTwo.value) {
        e.preventDefault();
        // alert("Passwords do not match. Please try again.");
        confirmPar.style.display = "block";
        confirmPar.style.color = "red";
        confirmPar.innerText = "Passwords do not match. Please try again.";
        confirmPar.focus();
        confirmPar.scrollIntoView({ behavior: 'smooth', block: 'center' });
        confirmPar.style.border = "2px solid red";
        confirmPar.style.padding = "10px";
        confirmPar.style.borderRadius = "5px";
        confirmPar.style.marginTop = "10px";
        confirmPar.style.marginBottom = "10px";
        confirmPar.style.textAlign = "center";
        confirmPar.style.fontWeight = "bold";
        confirmPar.style.backgroundColor = "#ffe6e6";
        return false;
    }
    return true;
});
