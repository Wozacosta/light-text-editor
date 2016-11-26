document.getElementById("heading").innerHTML = localStorage["title"] || "Just write :)";
document.getElementById("content").innerHTML = localStorage["text"] || "Autosaves every second";

setInterval(function(){
   localStorage["title"] = document.getElementById("heading").innerHTML;
    localStorage["text"] = document.getElementById("content").innerHTML;

    // Sets title of page = heading of document
    document.title = localStorage["title"];
}, 1000);

