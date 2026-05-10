// Create the form panel
const formPanel = document.createElement('div');
formPanel.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    font-family: Arial, sans-serif;
    width: 350px;
    z-index: 9999;
`;
formPanel.innerHTML = `
    <h2 style="text-align:center; margin:0 0 20px 0; color:#333"> Login Form</h2>    
    <div style="margin-bottom: 15px">
        <label style="display:block; margin-bottom:5px; color:#555">Username:</label>
        <input type="text" id="username" placeholder="Enter username" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:5px; box-sizing:border-box">
        <span id="usernameError" style="color:#e74c3c; font-size:12px; display:block; margin-top:5px"></span>
    </div>    
    <div style="margin-bottom: 20px">
        <label style="display:block; margin-bottom:5px; color:#555">Password:</label>
        <input type="password" id="password" placeholder="Enter password" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:5px; box-sizing:border-box">
        <span id="passwordError" style="color:#e74c3c; font-size:12px; display:block; margin-top:5px"></span>
    </div>   
    <button id="loginBtn" style="width:100%; padding:10px; background:#3498db; color:white; border:none; border-radius:5px; cursor:pointer; font-size:16px">Login</button>
    
    <div id="formMessage" style="margin-top:15px; text-align:center; font-size:14px"></div>
`;
document.body.appendChild(formPanel);

// Get elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const loginBtn = document.getElementById('loginBtn');
const formMessage = document.getElementById('formMessage');

// Validation function
function validateForm() {
    let isValid = true;
    
    // Clear previous errors
    usernameError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';
    
    // Reset border colors
    usernameInput.style.borderColor = '#ddd';
    passwordInput.style.borderColor = '#ddd';
    
    // Get values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Validate Username
    if (username === '') {
        usernameError.textContent = 'Username is required';
        usernameInput.style.borderColor = '#e74c3c';
        isValid = false;
    } else if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
        usernameInput.style.borderColor = '#e74c3c';
        isValid = false;
    }
    
    // Validate Password
    if (password === '') {
        passwordError.textContent = ' Password is required';
        passwordInput.style.borderColor = '#e74c3c';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordInput.style.borderColor = '#e74c3c';
        isValid = false;
    }    
    return isValid;
}

// Login button click
loginBtn.onclick = () => {
    if (validateForm()) {
        formMessage.innerHTML = 'Login successful! Welcome!';
        formMessage.style.color = '#27ae60';
        formMessage.style.fontWeight = 'bold';
        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    }
};

// Real-time validation as user types
usernameInput.oninput = () => {
    if (usernameInput.value.trim() !== '') {
        usernameError.textContent = '';
        usernameInput.style.borderColor = '#ddd';
    }
};
passwordInput.oninput = () => {
    if (passwordInput.value.trim() !== '') {
        passwordError.textContent = '';
        passwordInput.style.borderColor = '#ddd';
    }
};
console.log('Login form ready! Try submitting with empty fields or short passwords!');