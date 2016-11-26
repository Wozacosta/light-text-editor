var heading = document.getElementById("heading");
var content = document.getElementById("content");
var policeBtn1 = $("#policeBtn1");
var policeBtn2 = $("#policeBtn2");
var nightBtn = $("#nightMode");

// SETUP FROM EITHER THE LOCALSTORAGE OR DEFAULT
var nightMode = (localStorage["night"] == "true") || false;
heading.innerText = localStorage["title"] || "Just write :)";
content.innerText = localStorage["text"] || "Autosaves every second";
if (nightMode){
    $("body").css("background-color", "black");
    $("body").css("color", "white");
}else{
    $("body").css("background-color", "white");
    $("body").css("color", "black");
}


if (localStorage["titlePolice"] === "police1"){
    heading.classList.add("police1");
    policeBtn1.addClass("police2");
}else{
    heading.classList.add("police2");
    policeBtn1.addClass("police1");
}
if (localStorage["textPolice"] === "police3"){
    content.classList.add("police3");
    policeBtn2.addClass("police4");
}else{
    content.classList.add("police4");
    policeBtn2.addClass("police3");
}




// RUNS EVERY SECOND TO SAVE SETTINGS AND TEXT
setInterval(function(){
   localStorage["title"] = heading.innerText;
    localStorage["titlePolice"] = (heading.classList.contains("police1")) ? "police1" : "police2";
    localStorage["text"] = content.innerText;
    localStorage["textPolice"] = (content.classList.contains("police3")) ? "police3" : "police4";
    localStorage["night"] = nightMode;
    document.title = localStorage["title"];  // Sets title of page = heading of document
}, 1000);




// TEXT 'AREAS' EVENT HANDLING

heading.onfocus = function(){
    policeBtn1.addClass("display");
    policeBtn1.removeClass("hidden");
}

heading.addEventListener("focusout", function() { //onfocusout gives problems on chrome, using addeventlistener instead
    policeBtn1.addClass("hidden");
    policeBtn1.removeClass("display");
    }
);

content.onfocus = function(){
    policeBtn2.addClass("display");
    policeBtn2.removeClass("hidden");
}

content.addEventListener("focusout", function() { //onfocusout gives problems on chrome, using addeventlistener instead
    policeBtn2.addClass("hidden");
    policeBtn2.removeClass("display");
    }
);


// BUTTONS EVENT HANDLING

policeBtn1.click(function(event) {
    heading.classList.toggle("police2");
    heading.classList.toggle("police1");
    policeBtn1.toggleClass("police2 police1");
});


policeBtn2.click(function(event) {
    content.classList.toggle("police3");
    content.classList.toggle("police4");
    policeBtn2.toggleClass("police3 police4");
});

nightBtn.click(function(event){
    if (!nightMode){
        $("body").css("background-color", "black");
        $("body").css("color", "white");
        nightMode = true;
    }else{
        $("body").css("background-color", "white");
        $("body").css("color", "black");
        nightMode = false;
    }
});