var playerChoice;
var oppChoice;
var result1;
var result2;
var playerScore = 0;
var oppScore = 0;

function update() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("oppScore").innerHTML = oppScore;
    document.getElementById("playerBar").value = playerScore;
    document.getElementById("oppBar").value = oppScore;
}

function check() {
    if (playerScore == 10) {
        alert("Good job! You won a round!");
        reset();
    } else if (oppScore == 10) {
        alert("Bad job! You lost a round!");
        reset();
    }
}

function reset() {
    playerScore = 0
    oppScore = 0
    update();
}

function evaluate() {
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
}

function oppChoose() {
    oppChoice = Math.floor(Math.random() * 3) + 1;
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
}

function rockButt() {
    playerChoice = 1;
    alert("You chose: Rock");
    oppChoose();
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
    evaluate();
    update();
    check();
}

function paperButt() {
    playerChoice = 2;
    alert("You chose: Paper");
    oppChoose();
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
    evaluate();
    update();
    check();
}

function scissorButt() {
    playerChoice = 3;
    alert("You chose: Scissors");
    result1 = playerChoice - oppChoice;
    oppChoose();
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
    evaluate();
    update();
    check();
}
