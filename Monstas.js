var playerName;

function rename() {
    playerName = prompt("What is your name?");
    document.getElementById("heroName").innerHTML = playerName;
    document.getElementById("changeButton").style.display="none";
    document.getElementById("heroName").style.marginLeft="0px";
}