$(document).ready(function checkAutoLogin() {
    if (localStorage.getItem("autoLogin") == 1 && localStorage.getItem("login") == 1) {
        alert("자동로그인 되었습니다.");
    }
    else if(localStorage.getItem("login") != 1) {
        alert("로그인되어 있지 않아 로그인 화면으로 이동합니다.");
        location.href = "./login.html";
    }
});
  