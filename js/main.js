window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

let buttonFormSign = $("#newsletter button");
let bar = $('#bar');
let nav = $('#navbar');
let close = $('#close');

// let navBar = $$("#navbar li a");
// navBar.forEach(element => {
//     element.addEventListener("mouseover", element => {
//         element.target.classList.add("active");
//     });

//     element.addEventListener("mouseout", element => {
//         element.target.classList.remove("active");
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var emailInput = document.querySelector('.form input[type="email"]');
//     emailInput.setCustomValidity(''); // Xóa thông báo lỗi tùy chỉnh khi tải lại trang
// });

// buttonFormSign.addEventListener('click', function() {
//     var email = document.querySelector('.form input[type="email"]');
//     // alert("Email: " + email);
//     if (email.checkValidity()) {
//         // Xóa giá trị của input email
//         email.value = "";

//         // Hiển thị thông báo cảm ơn
//         alert('Cảm ơn bạn đã quan tâm sản phẩm của chúng tôi');
        
//         // Nếu cần, có thể reset form hoặc xóa thông báo lỗi
//         email.setCustomValidity(''); // Xóa trạng thái hợp lệ của input
//     } else {
//         // Nếu email không hợp lệ, có thể hiển thị thông báo lỗi
//         email.reportValidity();
//     }
// });

if(bar){
    bar.addEventListener('click', function(e){
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', function(e){
        nav.classList.remove('active');
    });
}

