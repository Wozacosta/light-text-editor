var heading = document.getElementById("heading");
var content = document.getElementById("content");

heading.innerText = localStorage["title"] || "Just write :)";
content.innerText = localStorage["text"] || "Autosaves every second";

setInterval(function(){
   localStorage["title"] = heading.innerText;
    localStorage["text"] = content.innerText;

    // Sets title of page = heading of document
    document.title = localStorage["title"];
}, 1000);

heading.onfocus = function(){
    $("#policeBtn1").addClass("display");
    $("#policeBtn1").removeClass("hidden");
}

heading.addEventListener("focusout", function() { //onfocusout gives problems on chrome, using addeventlistener instead
        $("#policeBtn1").addClass("hidden");
        $("#policeBtn1").removeClass("display");
    }
);

content.onfocus = function(){
    $("#policeBtn2").addClass("display");
    $("#policeBtn2").removeClass("hidden");
}

content.addEventListener("focusout", function() { //onfocusout gives problems on chrome, using addeventlistener instead
        $("#policeBtn2").addClass("hidden");
        $("#policeBtn2").removeClass("display");
    }
);

$("#policeBtn1").click(function(event) {
    heading.classList.toggle("police2");
    heading.classList.toggle("police1");
    $("#policeBtn1").toggleClass("police2 police1");
});


$("#policeBtn2").click(function(event) {
    content.classList.toggle("police3");
    content.classList.toggle("police4");
    $("#policeBtn2").toggleClass("police3 police4");
});