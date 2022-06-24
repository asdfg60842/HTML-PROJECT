window.onload = function() {
        let userData = JSON.parse(JSON.stringify(UserInfo));
    
        localStorage.setItem("user1", userData.members[0].name);
        for (var i = 0; i < userData.members.length; i++) {
            localStorage.setItem("user" + i, JSON.stringify(userData.members[i]));
        }
        
        /* localStorage 에 JSON 값을 setItem 후, getItem 할때 다음과 같이 불러와 접근 
        user = JSON.parse(localStorage.getItem("user0") || "[]"); 
        user.name;
        */
}; 