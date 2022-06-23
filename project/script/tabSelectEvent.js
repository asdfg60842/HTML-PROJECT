var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();

var tabOnSelect = '.tabs.tab1';

$('.sidebar-list-menu').on("click", "a", function(e) {
    $('.sidebar-list-menu-active-bar').css('margin-top', ($(this).attr('dd-active-tab') - 1) * $(this).height());
    //$('.sidebar-content').css('background', $(this).attr('dd-sidebar-tab'));
    $('.sidebar-list-menu li a').removeClass('activeL');
    $(this).addClass('activeL');
    moveTab(1);
})

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
    var nowTabLevel = document.getElementsByClassName("activeL")[0].id;
    var length = $('.tabs').find('a').length - $('.tabs.non').find('a').length;

	e.preventDefault();
	if (e.keyCode === 37) {
		if (nowOnTab == 1) {
			if (length == 4) {
                moveTab(4);
            } else if (length == 5) {
                moveTab(5);
            }
		} else if (nowOnTab == 2) {
			moveTab(1);
		} else if (nowOnTab == 3) {
			moveTab(2);
		} else if (nowOnTab == 4) {
			moveTab(3);
		} else if (nowOnTab == 5) {
            moveTab(4);
        }
	} else if (e.keyCode === 39) {
		if (nowOnTab == 1) {
			moveTab(2);
		} else if (nowOnTab == 2) {
			moveTab(3);
		} else if (nowOnTab == 3) {
			moveTab(4);
		} else if (nowOnTab == 4) {
			if (length == 4) {
                moveTab(1);
            } else if (length == 5) {
                moveTab(5);
            }
		} else if (nowOnTab) {
            moveTab(1);
        }
	} else if (e.keyCode === 38) {
        if (nowTabLevel == 0) {
            moveNav(4);
        } else if (nowTabLevel == 1) {
            moveNav(0);
        } else if (nowTabLevel == 2) {
            moveNav(1);
        } else if (nowTabLevel == 3) {
            moveNav(2);
        } else if (nowTabLevel == 4) {
            moveNav(3);
        }
    } else if (e.keyCode === 40) {
        if (nowTabLevel == 0) {
            moveNav(1);
        } else if (nowTabLevel == 1) {
            moveNav(2);
        } else if (nowTabLevel == 2) {
            moveNav(3);
        } else if (nowTabLevel == 3) {
            moveNav(4);
        } else if (nowTabLevel == 4) {
            moveNav(0);
        }
    }
});

function moveTab(num) {
	var tag = tabOnSelect + ' .link' + num;
	
	$(tag).get(0).click();
}

function moveNav(num) {
    var tag = '.sidebar-list-menu .link' + num;

    $(tag).get(0).click();
}

function tabMove(num) {
    var tabLevel = document.getElementsByClassName("activeL")[0].id;

    if (tabLevel == 0) {
        location.href = "#tab" + num;
    } else if (tabLevel > 0) {
        location.href = "#tab" + num + "_v" + tabLevel;
    }
}

function navMove(num) {
    var nTab = num + 1;

    if (num == 0) {
        location.href="#tab1";
        $('.tabs').addClass('non');
        $('.tabs.tab1').removeClass('non');
        tabOnSelect = '.tabs.tab1';
    } else if (num > 0) {
        location.href="#tab1" + "_v" + num;
        $('.tabs').addClass('non');
        $('.tabs.tab' + nTab).removeClass('non');
        tabOnSelect = '.tabs.tab' + nTab;
    }
}

