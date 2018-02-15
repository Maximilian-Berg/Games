var playerChoice;
var oppChoice;
var result1;
var result2;
var playerScore = 0;
var oppScore = 0;

function update() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("oppScore").innerHTML = oppScore;
}

function rockButt() {
    playerChoice = 1;
    oppChoice = Math.floor(Math.random() * 3) + 1;
    alert("You chose: Rock");
    switch (oppChoice) {
        case 1:
            alert("The computer chose: Rock");
            break;
        case 2:
            alert("The computer chose: Paper");
            break;
        case 3:
            alert("The computer chose: Scissors");
    }
    result1 = playerChoice - oppChoice;
    switch (result1) {
        case 0:
            result2 = 3;
            break;
        case -1:
            result2 = 2;
            break;
        case -2:
            result2 = 1;
    }
    switch (result2) {
        case 1:
            alert("Hoora! You won!");
            playerScore += 1;
            break;
        case 2:
            alert("Oh no! You lost!");
            oppScore += 1;
            break;
        case 3:
            alert("Oh well, you tied.");
    }
    update();
}

function paperButt() {
    playerChoice = 2;
    oppChoice = Math.floor(Math.random() * 3) + 1;
    alert("You chose: Paper");
    switch (oppChoice) {
        case 1:
            alert("The computer chose: Rock");
            break;
        case 2:
            alert("The computer chose: Paper");
            break;
        case 3:
            alert("The computer chose: Scissors");
    }
    result1 = playerChoice - oppChoice;
    switch (result1) {
        case 1:
            result2 = 1;
            break;
        case 0:
            result2 = 3;
            break;
        case -1:
            result2 = 2;
    }
    switch (result2) {
        case 1:
            alert("Hoora! You won!");
            playerScore += 1;
            break;
        case 2:
            alert("Oh no! You lost!");
            oppScore += 1;
            break;
        case 3:
            alert("Oh well, you tied.");
    }
    update();
}

function scissorButt() {
    playerChoice = 3;
    oppChoice = Math.floor(Math.random() * 3) + 1;
    alert("You chose: Scissors");
    switch (oppChoice) {
        case 1:
            alert("The computer chose: Rock");
            break;
        case 2:
            alert("The computer chose: Paper");
            break;
        case 3:
            alert("The computer chose: Scissors");
    }
    result1 = playerChoice - oppChoice;
    switch (result1) {
        case 2:
            result2 = 2;
            break;
        case 1:
            result2 = 1;
            break;
        case 0:
            result2 = 3;
    }
    switch (result2) {
        case 1:
            alert("Hoora! You won!");
            playerScore += 1;
            break;
        case 2:
            alert("Oh no! You lost!");
            playerScore += 1;
            break;
        case 3:
            alert("Oh well, you tied.");
    }
    update();
}