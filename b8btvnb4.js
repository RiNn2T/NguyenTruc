document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset error messages
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    
    // Get form values
    const lastName = document.getElementById('lastName').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    let isValid = true;
    
    // Validate last name
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Vui lòng nhập họ';
        isValid = false;
    }
    
    // Validate first name
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'Vui lòng nhập tên';
        isValid = false;
    }
    
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Vui lòng nhập số điện thoại';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Số điện thoại phải là 10 chữ số';
        isValid = false;
    }
    
    // If form is valid, submit it
    if (isValid) {
        alert('Form đã được gửi thành công!');
        // You can submit the form to server here
        // this.submit();
    }
});