// Phiên bản cơ bản (đoán 0 hoặc 1)
function doanSoCoBan() {
    let soNgauNhien = Math.round(Math.random()); // 0 hoặc 1
    let doan;
    
    do {
        doan = prompt("Hãy đoán số (0 hoặc 1):");
        doan = parseInt(doan);
    } while (doan !== soNgauNhien);
    
    alert("Chúc mừng! Bạn đã đoán đúng số " + soNgauNhien);
}

// Phiên bản nâng cao (đoán từ 1 đến 10)
function doanSoNangCao() {
    let soNgauNhien = Math.floor(Math.random() * 10) + 1; // Từ 1 đến 10
    let doan;
    let soLanDoan = 0;
    
    do {
        doan = prompt("Hãy đoán số (từ 1 đến 10):");
        doan = parseInt(doan);
        soLanDoan++;
        
        if (doan < soNgauNhien) {
            alert("Số bạn đoán NHỎ hơn số bí mật!");
        } else if (doan > soNgauNhien) {
            alert("Số bạn đoán LỚN hơn số bí mật!");
        }
    } while (doan !== soNgauNhien);
    
    alert(`Chúc mừng! Bạn đã đoán đúng số ${soNgauNhien} sau ${soLanDoan} lần đoán.`);
}

// Gọi phiên bản nâng cao khi trang được tải
window.onload = doanSoNangCao;