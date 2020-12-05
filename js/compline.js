








function battle (player, enemy){
   
    if (player === enemy){
        console.log('even'); 
    }if (player === 'spock' && enemy === 'lizard'){
        console.log("enmey wins");
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'spock' && enemy === 'paper'){
        console.log("enmey wins");
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'spock' && enemy === 'rock'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'spock' && enemy === 'scissors'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;  
    }if (player === 'lizard' && enemy === 'spock'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'lizard' && enemy === 'paper'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'lizard' && enemy === 'rock'){
        console.log("enmey wins");
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'lizard' && enemy === 'scissors'){
        console.log("enmey wins"); 
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'paper' && enemy === 'spock'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'paper' && enemy === 'lizard'){
        console.log("enmey wins");
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'paper' && enemy === 'rock'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'paper' && enemy === 'scissors'){
        console.log("enmey wins") ;
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'rock' && enemy === 'spock'){
        console.log("enmey wins");
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'rock' && enemy === 'lizard'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'rock' && enemy === 'paper'){
        console.log("enmey wins");
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'rock' && enemy === 'scissors'){
        console.log("player wins") ;
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'scissors' && enemy === 'spock'){
        console.log("enmey wins");
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }if (player === 'scissors' && enemy === 'lizard'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'scissors' && enemy === 'paper'){
        console.log("player wins");
        setTimeout(function(){ $('.player').addClass('winAnimtion'); }, 1000);
        playerScore++;
    }if (player === 'scissors' && enemy === 'rock'){
        console.log("enmey wins") ;
        setTimeout(function(){ $('.enmey').addClass('winAnimtion'); }, 1000);
        playerScore--;
    }
    $('.points').text(playerScore);
    
}