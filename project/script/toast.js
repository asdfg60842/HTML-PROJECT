
// when dom content is loaded 
document.addEventListener('DOMContentLoaded', (event) => {

    // get all elements with .toast-container class
    var toastContainer = document.querySelectorAll(".toast-container");
    // check if container already exist and add it if it doesen't
    if(toastContainer.length == 0){
        // prepare toast-container element
        var toastContainerContent = '<div class="toast-container"></div>'
         // add it to the end of the body
        document.querySelector("body").innerHTML += toastContainerContent;
    }
});

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
    if(type == "system"){ iconType = '<span class="material-icons">build</span>'; }
    else if(type == "success"){ iconType = '<span class="material-icons">done</span>'; }
    else if(type == "warning"){ iconType = '<span class="material-icons">report_problem</span>'; }
    else if(type == "bug"){ iconType = '<span class="material-icons">bug_report</span>'; }

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