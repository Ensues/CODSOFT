function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
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
