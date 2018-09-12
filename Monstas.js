var playerName = "Hero";
var playerHealth = 100;
var enemyHealth = 100;
var playerAttack;
var enemyChoice;
var enemyAttack;
var enemySuicide;

function rename() {
    playerName = prompt("What is your name?");
    document.getElementById("heroName").innerHTML = playerName;
    document.getElementById("changeButton").style.display="none";
    document.getElementById("heroName").style.marginLeft="17px";
    if (playerName == "John Cena") {
        document.getElementById("heroImage").src="John Cena.png";
        alert("The Monster starts to tremble in fear.")
    }
}

function update() {
    document.getElementById("heroHealth").innerHTML = playerHealth;
    document.getElementById("enemyHealth").innerHTML = enemyHealth;
    document.getElementById("heroBar").value = playerHealth;
    document.getElementById("enemyBar").value = enemyHealth;
}

function announce() {
    if (playerName == "John Cena") {
        alert("John Cena unleashes a devestating blow and deal "+playerAttack+" damage!")
    } else {
    alert(playerName + " attacked and dealt " + playerAttack + " damage!");
    }
    if (playerName == "John Cena" && enemySuicide == 0) {
        alert("The Monster cowers in fear and does not attack.")
    } else if (playerName == "John Cena" && enemySuicide == 1) {
        alert("The Monster is too scared to properly attack and only deals 5 damage.")
    } else if (enemyChoice == 1 || enemyChoice == 2) {
        alert("The enemy used Normal Attack and dealt " + enemyAttack + " damage!");
    } else {
        alert("The enemy used Special Attack and dealt " + enemyAttack + " damage!");
    }
}

function oppMove() {
    enemyChoice = Math.floor(Math.random() * 3) + 1;
    if (playerName == "John Cena") {
        enemySuicide = Math.floor(Math.random() *2);
        if (enemySuicide == 0) {
            enemyAttack = 0;
        } else {
            enemyAttack = 5;
        }
    } else if (enemyChoice == 1 || enemyChoice == 2) {
        enemyAttack = Math.floor(Math.random() * 11) + 20;
    } else {
        enemyAttack = Math.floor(Math.random() * 50) + 1;
    }
}

function reset() {
    playerHealth = 100;
    enemyHealth = 100;
    playerName = "Hero";
    document.getElementById("heroName").innerHTML = playerName;
    document.getElementById("heroImage").src="hero.png";
    document.getElementById("changeButton").style.display="inline";
    document.getElementById("heroName").style.marginLeft="170px";
    update();
}
 
function normalAttack() {
    if (playerName == "John Cena") {
        playerAttack = 30;
    } else {
    playerAttack = Math.floor(Math.random() * 11) + 20;
    }
    oppMove();
    battle();
    update();
    announce();
    evaluate();
}

function specialAttack() {
    if (playerName == "John Cena") {
        playerAttack = 50;
    } else {
    playerAttack = Math.floor(Math.random() * 50) + 1;
    }
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
