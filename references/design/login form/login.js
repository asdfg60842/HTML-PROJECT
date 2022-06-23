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
    $(".selLabel").click(function () {
      $('.dropdown').toggleClass('active');
    });
    
    $(".dropdown-list li").click(function() {
      $('.selLabel').text($(this).text());
      $('.dropdown').removeClass('active');
      $('.selected-item p span').text($('.selLabel').text());
      $('.dropdown > span').css('background', $(this).attr('dl-color'));
    });
    
  });