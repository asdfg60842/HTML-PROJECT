$(document).ready(function checkLogin() {
    if (localStorage.getItem("login") == 1) {
        //alert("로그인 되었습니다.");
        location.href = "./index.html";
    }
    else {
        location.href = "./login.html";
    }
});

