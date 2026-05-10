// Create a simple panel on the page
const panel = document.createElement('div');
panel.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #2c3e50;
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-family: Arial;
    z-index: 9999;
    min-width: 280px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;
panel.innerHTML = `
    <h3 style="margin:0 0 10px 0"> JS Demo</h3>
    
    <div id="demoText" style="background:#34495e; padding:10px; border-radius:5px; margin-bottom:10px">
        Hello World!
    </div>
    
    <button id="changeTextBtn"> Change Text</button>
    <button id="changeStyleBtn"> Change Style</button>
    <button id="addBtn"> Add Item</button>
    <button id="removeBtn"> Remove Last</button>
    
    <div id="itemList" style="margin-top:10px; font-size:12px"></div>
`;
document.body.appendChild(panel);

// 1. CHANGE TEXT CONTENT
const demoText = document.getElementById('demoText');
document.getElementById('changeTextBtn').onclick = () => {
    demoText.textContent = 'Text changed! ';
};

// 2. CHANGE STYLES
document.getElementById('changeStyleBtn').onclick = () => {
    demoText.style.background = '#e74c3c';
    demoText.style.color = '#ffffff';
    demoText.style.fontWeight = 'bold';
    demoText.style.transform = 'scale(1.05)';
    setTimeout(() => demoText.style.transform = 'scale(1)', 300);
};

// 3. ADD AND REMOVE ELEMENTS
const itemList = document.getElementById('itemList');
let itemCount = 0;
document.getElementById('addBtn').onclick = () => {
    itemCount++;
    const newItem = document.createElement('div');
    newItem.textContent = `Item ${itemCount}`;
    newItem.style.cssText = `
        background: #34495e;
        padding: 5px;
        margin-top: 5px;
        border-radius: 3px;
    `;
    itemList.appendChild(newItem);
};
document.getElementById('removeBtn').onclick = () => {
    if (itemList.lastChild) {
        itemList.removeChild(itemList.lastChild);
        itemCount--;
    }
};
console.log('Demo ready! Try clicking the buttons!');