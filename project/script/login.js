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

document.querySelector("#login_btn").addEventListener("click", (e) => {
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
  else if (container.classList.contains('right-panel-active')){
      e.preventDefault();
      createToast("bug", "LOGIN ERROR", "WRONG PASSWORD!", 3000);
      localStorage.setItem("login", 0);
  }
});

$("#pw").on("keypress", function(event){
  if(event.keyCode == '13' && container.classList.contains('right-panel-active')){
    event.preventDefault();
    $("#login_btn").click();
  }
});

$("#pw").on("keyup", function(event) {
  if (this.value) {
    $("#keyShow").css("display", "inline-block");
  } else {
    $("#keyShow").hide();
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
    }
    
  });

  function userSelect(user) {
    nowSelectUser = user;

    $('.selLabel').text(user.text());
    $('.dropdown > span').css('background', user.attr('dl-color'));
    userGreeting.innerHTML = "Hello! " + user.text();
    $('.overlay-container .overlay').css('background', "linear-gradient(to right, " + user.attr('dl-color') + ", #FF416C)");
  }

 

// function for creating toast elements available with parameters
function createToast(type, title, text, duration){

    // Creating toast message container as dom element
    var toastElem = document.createElement("div"); 
    // Adding toast class to it
    toastElem.classList.add('toast');
    // If there is a type, add that type name as class to toast message container
    if(type){ toastElem.classList.add(type); }

    // create title dom element
    var titleElem = document.createElement("p"); 
    // add t-title class to doom element
    titleElem.classList.add('t-title');

    // depent on the type add icon, you can add more icons if you want
    var iconType = "";
    if(type == "system"){ iconType = '<span class="material-icons">build</span>'; }
    else if(type == "success"){ iconType = '<span class="material-icons">done</span>'; }
    else if(type == "warning"){ iconType = '<span class="material-icons">report_problem</span>'; }
    else if(type == "bug"){ iconType = '<span class="material-icons">bug_report</span>'; }

    // appent icon to title element with title text
    titleElem.innerHTML += iconType + title;
    toastElem.appendChild(titleElem);

    // create close element with t-close class for closing the toast message
    var closeElem = document.createElement("p"); 
    closeElem.classList.add('t-close');
    toastElem.appendChild(closeElem);

    // create text element with t-text class and appent text to it
    var textElement = document.createElement("p"); 
    textElement.classList.add('t-text');
    textElement.innerHTML = text;
    toastElem.appendChild(textElement);

    // get toast-container element
    var  toastContainer = document.querySelector(".toast-container");

    //appent toast message to it
    toastContainer.appendChild(toastElem);

    // wait just a bit to add active class to the message to trigger animation
    setTimeout(function(){                 
        toastElem.classList.add('active');
    }, 1);


    // check duration
    if(duration>0){
        // it it's bigger then 0 add it
        setTimeout(function(){                 
            toastElem.classList.remove('active');
            setTimeout(function(){                 
                toastElem.remove();
            }, 350);       
        }, duration);
    }else if(duration == null){
        //  it ther isn't any add default one (3000ms)
        setTimeout(function(){                 
            toastElem.classList.remove('active');
            setTimeout(function(){                 
                toastElem.remove();
            }, 350);       
        }, 3000);
    }
    //if duration is 0, toast message will not be closed
}


//addEventListener on mouse click for standard closing of toast message on right top "x"
document.addEventListener('click', function (e) {
    //check is the right element clicked
    if (!e.target.matches('.t-close')) return;
    else{
        //get toast element
        var toastElement = e.target.parentElement;
        // remove active class from it to trigger css animation with duration of 300ms
        toastElement.classList.remove('active');
        //wait for 350ms and then remove element
        setTimeout(function(){                 
            toastElement.remove();
        }, 350);
    }
});
