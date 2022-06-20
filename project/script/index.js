var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();

$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  //e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  }); 
});

function moveTab(num) {
  var tag = '.tabs .link' + num;
  $('.tabs a').removeClass("active");
  $(tag).addClass('active');
  var activeWidth = $(tag).innerWidth();
  var itemPos = $(tag).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  }); 
}
window.addEventListener("keydown", (e)=>{
	var nowOnTab = document.getElementsByClassName("active")[0].value;
	if (e.keyCode == '38') {
		switch (nowOnTab) {
			case 1:
				moveTab(4);
				break;
			case 2:
				moveTab(1);
				break;
			case 3:
				moveTab(2);
				break;
			case 4:
				moveTab(3);
				break;
		}
	} else if (e.keyCode == '39') {
		switch (nowOnTab) {
			case 1:
				moveTab(2);
				break;
			case 2:
				moveTab(3);
				break;
			case 3:
				moveTab(4);
				break;
			case 4:
				moveTab(1);
				break;
		}
	}
});