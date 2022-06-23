const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const dropdown = document.getElementsByClassName('dropdown');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$(document).ready(function() {
  var defaultUser = $('.u3');
  var userGreeting = document.getElementById("greet");

  $('.selLabel').text(defaultUser.text());
  $('.dropdown > span').css('background', defaultUser.attr('dl-color'));
  userGreeting.innerHTML = "Hello! " + defaultUser.text();
  $('.overlay-container .overlay').css('background', "linear-gradient(to right, " + defaultUser.attr('dl-color') + ", #FF416C)");

    $(".selLabel").click(function (e) {
        $('.dropdown').toggleClass('active');
    });

    $(".dropdown-list li").click(function() {
      $('.selLabel').text($(this).text());
      $('.dropdown').removeClass('active');
      $('.selected-item p span').text($('.selLabel').text());
      $('.dropdown > span').css('background', $(this).attr('dl-color'));
      userGreeting.innerHTML = "Hello! " + $(this).text();
      $('.overlay-container .overlay').css('background', "linear-gradient(to right, " + defaultUser.attr('dl-color') + ", #FF416C)");
    });
    
  });