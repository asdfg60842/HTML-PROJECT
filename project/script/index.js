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
  //e.preventDefault()
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  }); 
});

window.addEventListener("keydown", (e) => {
	var nowOnTab = document.getElementsByClassName("active")[0].id;
	e.preventDefault();
	if (e.keyCode === 37) {
		if (nowOnTab == 1) {
			moveTab(4);
		} else if (nowOnTab == 2) {
			moveTab(1);
		} else if (nowOnTab == 3) {
			moveTab(2);
		} else if (nowOnTab == 4) {
			moveTab(3);
		}
	} else if (e.keyCode === 39) {
		if (nowOnTab == 1) {
			moveTab(2);
		} else if (nowOnTab == 2) {
			moveTab(3);
		} else if (nowOnTab == 3) {
			moveTab(4);
		} else if (nowOnTab == 4) {
			moveTab(1);
		}
	}
});

function moveTab(num) {
	var tag = ".tabs .link" + num;
	var name = "#" + num;
	
	$(tag).get(0).click();
}

