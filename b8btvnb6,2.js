function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');
    
    let result;
    let color;
    
    if (isNaN(num1) || isNaN(num2)) {
        result = "Vui lòng nhập số hợp lệ";
        color = "#ffcccc"; // light red
    } else {
        switch (operator) {
            case "add":
                result = num1 + num2;
                color = "#ccffcc"; // light green
                break;
            case "subtract":
                result = num1 - num2;
                color = "#ccccff"; // light blue
                break;
            case "multiply":
                result = num1 * num2;
                color = "#ffffcc"; // light yellow
                break;
            case "divide":
                if (num2 === 0) {
                    result = "Không thể chia cho 0";
                    color = "#ffcccc"; // light red
                } else {
                    result = num1 / num2;
                    color = "#ffccff"; // light purple
                }
                break;
            default:
                result = "Phép tính không hợp lệ";
                color = "#ffcccc"; // light red
        }
    }
    
    resultElement.textContent = result;
    resultElement.style.backgroundColor = color;
    
    // Change text color based on background brightness
    const brightness = getBrightness(color);
    resultElement.style.color = brightness > 128 ? "#000000" : "#ffffff";
}

// Helper function to calculate brightness of a color
function getBrightness(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    
    // Calculate brightness (perceived luminance)
    return (r * 299 + g * 587 + b * 114) / 1000;
}