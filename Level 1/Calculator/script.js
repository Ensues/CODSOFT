function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '.') {
        // Prevent adding another period if one already exists in the display
        if (display.value.includes('.')) {
            return; // Exit the function if a period is already present
        }
    }
    display.value += value; // Append the value to the display
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculate() {
    let input = document.getElementById('display').value;
    
    try {
        let result = eval(input);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
