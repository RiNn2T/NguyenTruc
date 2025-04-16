function timMinMax() {
    // Nhập dãy số từ người dùng
    let input = prompt("Nhập dãy số, cách nhau bằng dấu phẩy (ví dụ: 1,2,3,4):");
    
    // Chuyển chuỗi thành mảng số
    let numbers = input.split(',').map(Number);
    
    // Tìm min và max
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    
    // Hiển thị kết quả
    alert(`Dãy số: ${numbers}\nSố nhỏ nhất: ${min}\nSố lớn nhất: ${max}`);
}

// Gọi hàm khi trang được tải
window.onload = timMinMax;