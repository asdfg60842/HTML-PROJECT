//Javascript
var lastScrollTop = 0;
var delta = 5;
var fixBox = document.querySelector('.tabs');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);    

//5.0초마다 스크롤중이지 않으면 hide 해제
setInterval(function(){
    if(didScroll == false) {
        fixBox.classList.remove('hide');
    }
}, 5000);

function hasScrolled(){
    var nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        //Scroll down
        fixBox.classList.add('hide');
    }else{
        if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
            //Scroll up
            fixBox.classList.remove('hide');
        }
    }
    lastScrollTop = nowScrollTop;
}