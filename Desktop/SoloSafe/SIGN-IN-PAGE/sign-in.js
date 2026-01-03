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
const confirmPar = document.getElementById("confirmParagraph");
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


// Get references to the form and the error message paragraph
const textInput = document.getElementById('TextInput');
const form = document.getElementById('signInForm');
const errorMessage = document.getElementById('confirmParagraph');
const messageError = document.getElementById('subConfirmPar');

// Add an event listener for the form's 'submit' event
form.addEventListener('submit', function (event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Perform validation
    if (textInput.value.length > 3 && input0ne.value === inputTwo.value && input0ne.value.length >= 3 && inputTwo.value.length >= 3) {
        // If validation passes, redirect the user
        // Replace 'destination.html' with the desired page URL
        window.location.href = '/CONFIRMATION-PAGE/index.html';
    } else {
        // If validation fails, display an error message
        errorMessage.textContent = 'Make sure all fields are filled out correctly.';
        messageError.textContent = 'hint: passwords must match and name/passwords must be longer than 2 characters.';
        errorMessage.style.display = "block";
        errorMessage.style.color = "red";
        errorMessage.innerText = "Passwords do not match. Please try again.";
        errorMessage.focus();
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorMessage.style.border = "2px solid red";
        errorMessage.style.padding = "10px";
        errorMessage.style.borderRadius = "5px";
        errorMessage.style.marginTop = "10px";
        errorMessage.style.marginBottom = "10px";
        errorMessage.style.textAlign = "center";
        errorMessage.style.fontWeight = "bold";
        errorMessage.style.backgroundColor = "#ffe6e6";
        // errorMessage.style.display = 'block';
    }
});


