// Create a floating panel
const panel = document.createElement('div');
panel.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2c3e50;
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-family: Arial;
    min-width: 300px;
    z-index: 9999;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;
panel.innerHTML = `
    <h3 style="margin:0 0 15px 0"> Simple Demo</h3>    
    <div style="margin-bottom: 15px">
        <button id="myBtn" style="background:#3498db; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer">Click Me</button>
        <p id="textDisplay" style="background:#34495e; padding:8px; border-radius:5px; margin-top:10px">Text will change here</p>
    </div>   
    <div style="margin-bottom: 15px">
        <input type="text" id="myInput" placeholder="Type something..." style="width:100%; padding:8px; border-radius:5px; border:none; box-sizing:border-box">
        <p id="livePreview" style="background:#34495e; padding:8px; border-radius:5px; margin-top:10px">Live preview here</p>
    </div>
    <div>
        <form id="myForm">
            <input type="text" id="emailInput" placeholder="Enter email" style="width:100%; padding:8px; border-radius:5px; border:none; margin-bottom:10px; box-sizing:border-box">
            <button type="submit" style="background:#27ae60; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer; width:100%">Submit</button>
        </form>
        <p id="formMsg" style="font-size:12px; margin-top:10px"></p>
    </div>
    
    <button id="closeBtn" style="background:#e74c3c; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer; margin-top:15px; width:100%">Close</button>
`;
document.body.appendChild(panel);

// 1. BUTTON CLICK - CHANGE TEXT
const btn = document.getElementById('myBtn');
const textDisplay = document.getElementById('textDisplay');
btn.onclick = () => {
    textDisplay.textContent = ' You clicked! Text changed!';
};

// 2. INPUT TYPING - LIVE PREVIEW
const input = document.getElementById('myInput');
const preview = document.getElementById('livePreview');
input.oninput = (e) => {
    const value = e.target.value;
    preview.textContent = value || 'Live preview here';
};

// 3. FORM SUBMIT - PREVENT DEFAULT & VALIDATE
const form = document.getElementById('myForm');
const emailInput = document.getElementById('emailInput');
const formMsg = document.getElementById('formMsg');
form.onsubmit = (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (email === '') {
        formMsg.textContent = ' Please enter email';
        formMsg.style.color = '#e74c3c';
    } else if (!email.includes('@')) {
        formMsg.textContent = ' Email must contain @';
        formMsg.style.color = '#e74c3c';
    } else {
        formMsg.textContent = ` Success! Submitted: ${email}`;
        formMsg.style.color = '#27ae60';
        emailInput.value = '';
    }
};

// Close button
document.getElementById('closeBtn').onclick = () => panel.remove();

console.log(' Demo ready! Try clicking, typing, and submitting!');