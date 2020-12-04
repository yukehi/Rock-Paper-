let playerScore = 0;
let hide = $("#icons");
const enemyList = ['spock','lizard','paper','rock','scissors'];
const toolsImgs = {
    spock: "images/icon-spock.svg",
    lizard: 'images/icon-lizard.svg',
    paper: 'images/icon-paper.svg',
    rock: 'images/icon-rock.svg',
    scissors: 'images/icon-scissors.svg',

}

$('#btn').hide();

$("#btn").click(function (){
    $('.capsolle-area').hide();
    hide.show();
    $('#btn').hide();
    console.log('parssd')
})

$('.circle').click(function (){
    let slected = $(this).attr('id');
    let randomNumber = Math.floor(Math.random() * 5);
    let randomEnemy = enemyList[randomNumber];
    

    if (slected === 'spock'){
        console.log(' player slected ' + slected);
        console.log('enmey slected ' + randomEnemy);
        hide.hide();
        createBattle(slected,randomEnemy);
        setTimeout(function(){ battle(slected,randomEnemy,playerScore); }, 2000);
        
    }if (slected === 'lizard'){
        console.log('player slected ' + slected);
        console.log('enmey slected ' + randomEnemy);
        hide.hide();
        createBattle(slected,randomEnemy);
        setTimeout(function(){ battle(slected,randomEnemy,playerScore); }, 2000);
        
    }if (slected === 'paper'){
        console.log('player slected ' + slected);
        console.log('enmey slected ' + randomEnemy);
        hide.hide();
        createBattle(slected,randomEnemy);
        setTimeout(function(){ battle(slected,randomEnemy,playerScore); }, 2000);
    }if (slected === 'rock'){
        console.log('player slected ' + slected);
        console.log('enmey slected ' + randomEnemy);
        hide.hide();
        createBattle(slected,randomEnemy);
        setTimeout(function(){ battle(slected,randomEnemy,playerScore); }, 2000);
    }if (slected === 'scissors'){
        console.log('player slected ' + slected);
        console.log('enmey slected ' + randomEnemy);
        hide.hide();
        createBattle(slected,randomEnemy);
        setTimeout(function(){ battle(slected,randomEnemy,playerScore); }, 2000);
    }
})


function createBattle(playerSlction,enemySlction){
    const player = document.createElement('div');
    const capsolle = document.createElement('div');
    const selctions = document.createElement('div');
    const hader = document.createElement('div');
    const enemy = document.createElement('div');
    const imgsP = document.createElement('img');
    const imgsE = document.createElement('img');
    const title1 = document.createElement('h2');
    const title2 = document.createElement('h2');
    // const btn = document.createElement('button');

    enemy.setAttribute('class','icon-battle inner-shadow battle-enemy enmey');
    title2.innerHTML = "HOUSE PICKED"
    title2.setAttribute('class','title-area')
    imgsE.src = toolsImgs[enemySlction];
    player.setAttribute('class','icon-battle inner-shadow battle-player player');
    imgsP.src = toolsImgs[playerSlction];
    title1.innerHTML = "YOU PICKED"
    title1.setAttribute('class','title-area')
    player.appendChild(imgsP);
    enemy.appendChild(imgsE);
    capsolle.setAttribute('class','capsolle-area');
    capsolle.appendChild(hader);
    hader.setAttribute('class','title-hader')
    hader.appendChild(title1);
    hader.appendChild(title2);
    capsolle.appendChild(selctions);
    selctions.setAttribute('class','capsolle-battle');
    selctions.appendChild(player);
    // btn.innerText ='play Agein';
    // btn.setAttribute('class','btn');
    // btn.setAttribute('id','btn');
    // setTimeout(function(){ selctions.appendChild(btn); }, 4000);
    setTimeout(function(){ selctions.appendChild(enemy); }, 2000);
    setTimeout(function(){ $('#btn').show(); }, 4000);
    document.querySelector(".continor").appendChild(capsolle);
    
    
}


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


