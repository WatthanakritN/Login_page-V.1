// ดึง element ที่มี id เป็น 'container' มาเก็บไว้ในตัวแปร contrainer (พิมพ์ผิด: ควรเป็น container)
const contrainer = document.getElementById('container');

// ดึงปุ่มที่มี id เป็น 'register' (ปุ่มสำหรับสลับไปยังหน้าสมัครสมาชิก)
const registerBtn = document.getElementById('register');

// ดึงปุ่มที่มี id เป็น 'login' (ปุ่มสำหรับสลับไปยังหน้าเข้าสู่ระบบ)
const loginBtn = document.getElementById('login');

// เมื่อคลิกปุ่ม "Sign Up" ให้เพิ่มคลาส 'active' เข้าไปใน <div id="container">
// ซึ่งทำให้เปลี่ยนจากฟอร์ม Sign In ไปยัง Sign Up
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
})

// เมื่อคลิกปุ่ม "Sign In" ให้ลบคลาส 'active' ออกจาก <div id="container">
// ซึ่งเปลี่ยนจากฟอร์ม Sign Up กลับมายัง Sign In
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})
