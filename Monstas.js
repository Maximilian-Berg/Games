var playerName;
var playerHealth = 100;
var enemyHealth = 100;
var playerAttack;
var enemyChoice;
var enemyAttack;

function rename() {
    playerName = prompt("What is your name?");
    document.getElementById("heroName").innerHTML = playerName;
    document.getElementById("changeButton").style.display="none";
    document.getElementById("heroName").style.marginLeft="17px";
}

function update() {
    document.getElementById("heroHealth").innerHTML = playerHealth;
    document.getElementById("enemyHealth").innerHTML = enemyHealth;
    document.getElementById("heroBar").value = playerHealth;
    document.getElementById("enemyBar").value = enemyHealth;
}

function announce() {
    alert("You attacked and dealt " + playerAttack + " damage!");
    if (enemyChoice == 1 || enemyChoice == 2) {
        alert("The enemy used Normal Attack and dealt " + enemyAttack + " damage!");
    } else {
        alert("The enemy used Special Attack and dealt " + enemyAttack + " damage!");
    }
}

function oppMove() {
    enemyChoice = Math.floor(Math.random() * 3) + 1;
    if (enemyChoice == 1 || enemyChoice == 2) {
        enemyAttack = Math.floor(Math.random() * 11) + 20;
    } else {
        enemyAttack = Math.floor(Math.random() * 50) + 1;
    }
}

function reset() {
    playerHealth = 100;
    enemyHealth = 100;
    document.getElementById("heroName").innerHTML = "Hero";
    document.getElementById("changeButton").style.display="inline";
    document.getElementById("heroName").style.marginLeft="170px";
    update();
}
 
function normalAttack() {
    playerAttack = Math.floor(Math.random() * 11) + 20;
    oppMove();
    battle();
    update();
    announce();
    evaluate();
}

function specialAttack() {
    playerAttack = Math.floor(Math.random() * 50) + 1;
    oppMove();
    battle();
    update();
    announce();
    evaluate();
}

function battle() {
    enemyHealth -= playerAttack;
    playerHealth -= enemyAttack;
}

function evaluate() {
    if (playerHealth <= 0 || enemyHealth <= 0) {
        if (enemyHealth >= playerHealth) {
            alert("You lost! Booooo!");
        } else {
            alert("You Win! Hoora!");
        }
        reset();
    }
}
