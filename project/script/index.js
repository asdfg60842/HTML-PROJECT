/*
var $mainButton = $(".main-button"),
    $closeButton = $(".close-button"),
    $buttonWrapper = $(".button-wrapper"),
    $ripple = $(".ripple"),
    $layer = $(".layered-content");

$mainButton.on("click", function(){
    $ripple.addClass("rippling");
    $buttonWrapper.addClass("clicked").delay(1500).queue(function(){
        $layer.addClass("active");
		$buttonWrapper.dequeue();
    });
});

$closeButton.on("click", function(){
    $buttonWrapper.removeClass("clicked");
    $ripple.removeClass("rippling");
    $layer.removeClass("active");
});
*/


var percentBar = document.getElementsByClassName("skill-per");
var percentNum = document.getElementsByClassName("skill-per").length;
var percentNameTag = document.getElementsByClassName("title");
//var percentNTagNum = document.getElementsByClassName("title").length;

window.onload((e) => {

});

function checkPercent() {
    for (var i = 0; i < percentNum; i++) {
        if (getComputedStyle(percentBar[i]).getPropertyValue("width") <  getComputedStyle(percentNameTag[i]).getPropertyValue("width")) {

        }
    }
}


