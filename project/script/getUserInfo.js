/*
$(document).ready(function() {
        let userData = JSON.parse(JSON.stringify(UserInfo));
    
        // localStorage에 데이터 저장 여부 확인
        if (localStorage.getItem("setData") === "true") {
            // localStorage에 저장된 데이터의 유효성 확인 후 undefined 라면 데이터 다시 저장
            for (var i = 0; i < userData.members.length; i++) {
                if (localStorage.getItem("user" + i + 1) === undefined) {
                    localStorage.setItem("user" + i + 1, JSON.stringify(userData.members[i]));
                }
            }


        } else {
            for (var i = 0; i < userData.members.length; i++) {
                localStorage.setItem("user" + i + 1, JSON.stringify(userData.members[i]));
            }
            localStorage.setItem("setData", "true");
        }
        
        
        /* localStorage 에 JSON 값을 setItem 후, getItem 할때 다음과 같이 불러와 접근 
        user = JSON.parse(localStorage.getItem("user0") || "[]"); 
        user.name;
        */
//}); 


