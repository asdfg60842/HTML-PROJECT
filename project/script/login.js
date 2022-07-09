const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const container = document.getElementById('container');
const dropdown = document.getElementsByClassName('dropdown');

var defaultUser = $('.u3');
var nowSelectUser = defaultUser;
var userGreeting = document.getElementById("greet");

$(document).ready(function() {
    getUserInfo();
    getWorker();
});

$(document).ready(function() {
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

nextButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
  checkWorker();
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
      createToast("error", "LOGIN ERROR", "WRONG PASSWORD!", 3000);
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

  
// GET USER INFO FUNCTION //
function getUserInfo() {
  let userData = JSON.parse(JSON.stringify(UserInfo));

  // localStorage에 데이터 저장 여부 확인
  if (localStorage.getItem("setData") === "true") {
      // localStorage에 저장된 데이터의 유효성 확인 후 undefined 라면 데이터 다시 저장
      for (var i = 0; i < userData.members.length; i++) {
          if (localStorage.getItem("user" + parseInt(i + 1)) === undefined) {
              localStorage.setItem("user" + parseInt(i + 1), JSON.stringify(userData.members[i]));
          }
      }

      
  } else {
      for (var i = 0; i < userData.members.length; i++) {
          localStorage.setItem("user" + parseInt(i + 1), JSON.stringify(userData.members[i]));
      }
      localStorage.setItem("setData", "true");
  }
  
  
  /* localStorage 에 JSON 값을 setItem 후, getItem 할때 다음과 같이 불러와 접근 
  user = JSON.parse(localStorage.getItem("user0") || "[]"); 
  user.name;
  */
}

// GET WORKER INFO FUNCTION
function getWorker() {
  let workTable = JSON.parse(JSON.stringify(WorkTable));
  let wMonth = workTable.month;

  let today = new Date();   
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 일
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes();  // 분
 
  var validData = false;

  for (var i = 0; i < wMonth.length; i++) {
    if (month === parseInt(wMonth[i].monthValue)) {
      let wDate = wMonth[i].date;
      for (var j = 0; j < wDate.length; j++) {
        if (date === parseInt(wDate[j].dateValue)) {
          localStorage.setItem("workType1", JSON.stringify(wDate[j].workType[0]));
          localStorage.setItem("workType2", JSON.stringify(wDate[j].workType[1]));
          localStorage.setItem("workType3", JSON.stringify(wDate[j].workType[2]));

          if (hours >= 16 && hours <= 23) {
            userSelect($("." + wDate[j].workType[1].workerTag));
          } else if (hours >= 0 && hours <= 7) {
            userSelect($("." + wDate[j].workType[2].workerTag));
          } else if (hours >= 8 && hours <= 15) {
            userSelect($("." + wDate[j].workType[0].workerTag));
          }
          validData = true;
        } 
      }
    } 
  }

  if (validData == false) {
    createToast("error", "WORKTABLE", "DOESN'T EXIST!!", 3000);
  }
}

// USER SELECT FUNCTION;
function userSelect(user) {
  nowSelectUser = user;
  $('.selLabel').text(user.text());
  $('.dropdown > span').css('background', user.attr('dl-color'));
  userGreeting.innerHTML = "Hello! " + user.text();
  $('.overlay-container .overlay').css('background', "linear-gradient(to right, " + user.attr('dl-color') + ", #FF416C)");
} 


// CHECK WORKER FUNCTION
function checkWorker() {
  let worker;

  let today = new Date();   
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 일
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes();  // 분

  if (hours >= 16 && hours <= 23) {
    worker = JSON.parse(localStorage.getItem("workType2") || "[]"); 
  } else if (hours >= 0 && hours <= 7) {
    worker = JSON.parse(localStorage.getItem("workType3") || "[]"); 
  } else if (hours >= 8 && hours <= 15) {
    worker = JSON.parse(localStorage.getItem("workType1") || "[]"); 
  }

  var tag = parseInt($('.' + worker.workerTag).attr('data-value'));
  
  if (parseInt(nowSelectUser.attr('data-value')) != tag) {
    createToast("system", "NOTICE", "You did not choose a worker", 3000);
  }
}
// TOAST FUNCTION //
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
    if(type == "system"){ iconType = '<span class="material-icons">SYSTEM</span>'; }
    else if(type == "success"){ iconType = '<span class="material-icons">DONE</span>'; }
    else if(type == "warning"){ iconType = '<span class="material-icons">WARNING</span>'; }
    else if(type == "error"){ iconType = '<span class="material-icons">ERROR</span>'; }

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
