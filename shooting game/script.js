// declaring Initial Player's Health
var numRounds, scoreP1, scoreP2;

function startGame() {
  // resetting and initializing the  data for the new game
  document.getElementById("shoot").style.visibility = "visible";
  document.getElementById("player1-shot").classList.remove("shoot-p1");
  document.getElementById("player2-shot").classList.remove("shoot-p2");

  document.getElementById("p1-health").value = 1;
  document.getElementById("p2-health").value = 1;
  scoreP1 = 0;
  scoreP2 = 0;
  numRounds = 0;
  document.getElementById("winner").innerHTML = "";
  document.getElementById("shoot").disabled = false;
  document.getElementById("shoot").innerHTML = "Shoot";
  document.getElementById("p1-firescore").innerHTML = "";
  document.getElementById("p2-firescore").innerHTML = "";
  document.getElementById("winner").innerHTML = "";
  document.getElementById("score1").innerHTML = "0";
  document.getElementById("score2").innerHTML = "0";
}

function gameOver(playercomment) {
  // disabling the shoot button and printing the winner message when game is over
  document.getElementById("winner").innerHTML =
    document.getElementById("winner").innerHTML + "<br>" + playercomment;
  document.getElementById("shoot").disabled = true;
  document.getElementById("shoot").innerHTML = "Game Over";
  document.getElementById("p1-firescore").innerHTML = "";
  document.getElementById("p2-firescore").innerHTML = "";
}

// handling the functioning when shoot function is called on click on shoot button
function shoot() {
  document.getElementById("winner").innerHTML = "";
  // generating Random Power for each player
  var p1FireVal = Math.floor(Math.random() * 5);
  var p2FireVal = Math.floor(Math.random() * 5);

  // assigning the animation of the bullets
  document.getElementById("player1-shot").classList.add("shoot-p1");
  document.getElementById("player1-shot").style.animationPlayState = "running";
  document.getElementById("player1-shot").style.visibility = "visible";

  document.getElementById("player2-shot").classList.add("shoot-p2");
  document.getElementById("player2-shot").style.visibility = "visible";
  document.getElementById("player2-shot").style.animationPlayState = "running";
  // writing the bullet power on web page
  document.getElementById("p1-firescore").innerHTML =
    "Bullet Power: " + p1FireVal;
  document.getElementById("p2-firescore").innerHTML =
    "Bullet Power: " + p2FireVal;

  // performing animation for a fixed time and then pausing it
  setTimeout(() => {
    document.getElementById("player1-shot").style.animationPlayState = "paused";
    document.getElementById("player2-shot").style.animationPlayState = "paused";
    document.getElementById("player1-shot").style.visibility = "hidden";
    document.getElementById("player2-shot").style.visibility = "hidden";
  }, 600);

  //updating Player's Health after hitting by opposite player's bullet for both players
  var player1Health = document.getElementById("p1-health");
  var player2Health = document.getElementById("p2-health");
  player1Health.value -= p2FireVal * 0.2;
  player2Health.value -= p1FireVal * 0.2;

  // finding the Winner of a round and incrementing their score by 1 and counting Number of Rounds played
  // The Player whose health reaches 0, dies and the game ends and print the required winning message for that round
  if (player1Health.value <= 0 && player2Health.value <= 0) {
    numRounds++;
    document.getElementById("winner").innerHTML =
      "Round " + numRounds + " Draw!";
    player1Health.value = 1;
    player2Health.value = 1;
  } else if (player1Health.value <= 0) {
    scoreP2 = scoreP2 + 1;
    document.getElementById("score2").innerHTML = scoreP2;
    numRounds++;
    document.getElementById("winner").innerHTML =
      "Player 2 Won round: " + numRounds + "!";
    player1Health.value = 1;
    player2Health.value = 1;
  } else if (player2Health.value <= 0) {
    scoreP1 = scoreP1 + 1;
    document.getElementById("score1").innerHTML = scoreP1;
    numRounds++;
    document.getElementById("winner").innerHTML =
      "Player 1 Won round: " + numRounds + "!";
    player1Health.value = 1;
    player2Health.value = 1;
  }

  //Checking if anyone of the player has scored 3, if yes then overing the game.
  if (scoreP1 == 3) {
    gameOver("Player 1 Won The Game!");
  } else if (scoreP2 == 3) {
    gameOver("Player 2 Won The Game!");
  }
  //Checking which player has scored more after completing 5 rounds, calling gameOver function for the reuired scenario
  else if (numRounds == 5) {
    if (scoreP1 > scoreP2) {
      gameOver("Player 1 Won The Game!");
    }

    if (scoreP2 > scoreP1) {
      gameOver("Player 2 Won The Game!");
    }
    // draw case
    if (scoreP2 == scoreP1) {
      gameOver("Game Draw");
    }
  }
}
