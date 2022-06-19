document.querySelector("#login_btn").addEventListener("click", () => {
    const pw_eng = "1234"
    const pw_kor = "1234"

    if(pw_kor == document.querySelector("#pw").value || pw_eng == document.querySelector("#pw").value) {
      
        if(document.getElementById('auto_login').checked == true) {
            localStorage.setItem("autoLogin", 1);
        }
        else {
            localStorage.setItem("autoLogin", 0);
        }

        localStorage.setItem("login", 1);
        location.href = "./main.html";
    }
    else {
        alert("비밀번호가 맞지 않습니다.");
        localStorage.setItem("login", 0);
    }
});

 $("#pw").on("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $("#login_btn").triggerHandler("click");
    } else {
      if (this.value) {
        $("#keyShow").css("display", "inline-block");
      } else {
        $("#keyShow").hide();
      }
    }
  }).focus();

 $("#keyShow").on("click", function() {
    if ($("#pw").attr("type") == "password") {
      $("#pw").attr("type", "text");
      $($(this)).text("H I D E");
    } else {
      $("#pw").attr("type", "password");
      $($(this)).text("SHOW");
    }
  });

  $("#pw").on("keypress", function(event){
    if(event.keyCode == '13'){
      $("#login_btn").click();
    }
  });