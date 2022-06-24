const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const container = document.getElementById('container');
const dropdown = document.getElementsByClassName('dropdown');

var defaultUser = $('.u3');
var nowSelectUser = defaultUser;
var userGreeting = document.getElementById("greet");

nextButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

backButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.querySelector("#login_btn").addEventListener("click", () => {
  const pw_eng = "1234"
  const pw_kor = "1234"

  if(pw_kor == document.querySelector("#pw").value || pw_eng == document.querySelector("#pw").value) {
    
      /*
      if(document.getElementById('auto_login').checked == true) {
          localStorage.setItem("autoLogin", 1);
      }
      else {
          localStorage.setItem("autoLogin", 0);
      }
      */
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

$(document).ready(function() {
  userSelect(defaultUser);

    $(".selLabel").click(function (e) {
        $('.dropdown').toggleClass('active');
    });

    $(".dropdown-list li").click(function() {
      //$('.selLabel').text($(this).text());
      $('.dropdown').removeClass('active');
      //$('.selected-item p span').text($('.selLabel').text());
      //$('.dropdown > span').css('background', $(this).attr('dl-color'));
      //userGreeting.innerHTML = "Hello! " + $(this).text();
      //$('.overlay-container .overlay').css('background', "linear-gradient(to right, " + defaultUser.attr('dl-color') + ", #FF416C)");
      userSelect($(this));
    });
    
  });

  window.addEventListener("keydown", (e) => {
    var dataValue = nowSelectUser.attr('data-value');
    var dataValue0 = parseInt(dataValue) - 1;
    var dataValue1 = parseInt(dataValue) + 1;

    if (!container.classList.contains('right-panel-active')) {
      if (e.keyCode === 38 && (dataValue0 > 0)) {
        userSelect($('.u' + dataValue0));
      } else if (e.keyCode === 40 && dataValue1 <= 4) {
        userSelect($('.u' + dataValue1));
      }

      if (e.keyCode === 13 || e.keyCode === 39)
      {
        $('#next').click();
      }
    } else {
      if (e.keyCode === 37) {
        $('#back').click();
      }
      $("#pw").on("keypress", function(event){
        if(event.keyCode == '13'){
          $("#login_btn").click();
        }
      });
    }
    
  });

  function userSelect(user) {
    nowSelectUser = user;

    $('.selLabel').text(user.text());
    $('.dropdown > span').css('background', user.attr('dl-color'));
    userGreeting.innerHTML = "Hello! " + user.text();
    $('.overlay-container .overlay').css('background', "linear-gradient(to right, " + user.attr('dl-color') + ", #FF416C)");
  }