window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 100) { // Thay đổi số 100 thành khoảng cách mong muốn
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var logoImg = document.querySelector("#logoImg .logo_img");
    var sidebarImg = document.querySelector(".sidebar img"); // Sidebar image

    if (window.scrollY > 100) { // Khi cuộn xuống
        navbar.classList.add("scrolled"); 
        logoImg.src = "img/logo2.png"; // Đổi logo
        sidebarImg.src = "img/icon_menu2.png"; // Đổi sidebar
    } else {
        navbar.classList.remove("scrolled");
        logoImg.src = "img/logo1.png"; // Quay về logo ban đầu
        sidebarImg.src = "img/icon_menu1.png"; // Quay về sidebar ban đầu
    }
});

