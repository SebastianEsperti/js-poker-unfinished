//----------------Base Deck ---------------\\
let baseDeck = [
{ suit: 'Hearts', rank: '2', value: 2 },
{ suit: 'Hearts', rank: '3', value: 3 },
{ suit: 'Hearts', rank: '4', value: 4 },
{ suit: 'Hearts', rank: '5', value: 5 },
{ suit: 'Hearts', rank: '6', value: 6 },
{ suit: 'Hearts', rank: '7', value: 7 },
{ suit: 'Hearts', rank: '8', value: 8 },
{ suit: 'Hearts', rank: '9', value: 9 },
{ suit: 'Hearts', rank: '10', value: 10 },
{ suit: 'Hearts', rank: 'Jack', value: 10 },
{ suit: 'Hearts', rank: 'Queen', value: 10 },
{ suit: 'Hearts', rank: 'King', value: 10 },
{ suit: 'Hearts', rank: 'Ace', value: 1 },
{ suit: 'Clubs', rank: '2', value: 2 },
{ suit: 'Clubs', rank: '3', value: 3 },
{ suit: 'Clubs', rank: '4', value: 4 },
{ suit: 'Clubs', rank: '5', value: 5 },
{ suit: 'Clubs', rank: '6', value: 6 },
{ suit: 'Clubs', rank: '7', value: 7 },
{ suit: 'Clubs', rank: '8', value: 8 },
{ suit: 'Clubs', rank: '9', value: 9 },
{ suit: 'Clubs', rank: '10', value: 10 },
{ suit: 'Clubs', rank: 'Jack', value: 10 },
{ suit: 'Clubs', rank: 'Queen', value: 10 },
{ suit: 'Clubs', rank: 'King', value: 10 },
{ suit: 'Clubs', rank: 'Ace', value: 1 },
{ suit: 'Spades', rank: '2', value: 2 },
{ suit: 'Spades', rank: '3', value: 3 },
{ suit: 'Spades', rank: '4', value: 4 },
{ suit: 'Spades', rank: '5', value: 5 },
{ suit: 'Spades', rank: '6', value: 6 },
{ suit: 'Spades', rank: '7', value: 7 },
{ suit: 'Spades', rank: '8', value: 8 },
{ suit: 'Spades', rank: '9', value: 9 },
{ suit: 'Spades', rank: '10', value: 10 },
{ suit: 'Spades', rank: 'Jack', value: 10 },
{ suit: 'Spades', rank: 'Queen', value: 10 },
{ suit: 'Spades', rank: 'King', value: 10 },
{ suit: 'Spades', rank: 'Ace', value: 1 },
{ suit: 'Diamonds', rank: '2', value: 2 },
{ suit: 'Diamonds', rank: '3', value: 3 },
{ suit: 'Diamonds', rank: '4', value: 4 },
{ suit: 'Diamonds', rank: '5', value: 5 },
{ suit: 'Diamonds', rank: '6', value: 6 },
{ suit: 'Diamonds', rank: '7', value: 7 },
{ suit: 'Diamonds', rank: '8', value: 8 },
{ suit: 'Diamonds', rank: '9', value: 9 },
{ suit: 'Diamonds', rank: '10', value: 10 },
{ suit: 'Diamonds', rank: 'Jack', value: 10 },
{ suit: 'Diamonds', rank: 'Queen', value: 10 },
{ suit: 'Diamonds', rank: 'King', value: 10 },
{ suit: 'Diamonds', rank: 'Ace', value: 1 }
];
//---------------Game Deck----------------------\\
let deck = sixStackDeck(baseDeck);

function sixStackDeck(deck) {
    let deckLength = baseDeck.length;

    for (let i = 0; i < deckLength * 5; i++) {
        deck.push(deck[i]);
    }
    console.log('Creating 6 Stack Deck.')
    return deck;
}
//--------------- Applicable Variables ---------------\\
let playerHandSum = 0;
let dealerHandSum = 0;
let playerHand = [];
let dealerHand = [];
let playerBalance = 1000;
let currentBet = 0;
let roundOver = false;
let currentSplitBet = 0;       
let playerHandSumSplit = 0;
let playerHandSplit = []

//--------------DISPLAYS---------------\\
const playerHandContainer = document.querySelector('#player-hand');
const dealerHandContainer = document.querySelector('#dealer-hand');
const playerSumContainer = document.querySelector('#player-sum');
const dealerSumContainer = document.querySelector('#dealer-sum');
const nextRoundButton = document.querySelector('#next-round-button');
const alertContainer = document.querySelector('#alert');
const alertContainerSplit = document.querySelector('#alert-split');

const balanceContainer = document.querySelector('#balance');
const currentBetContainer = document.querySelector('#current-bet');
const betButtons = document.querySelectorAll('.bet-button');
const newGameContainer = document.querySelector('#new-game-button');
    //for splitting
const playerHandContainerSplit = document.querySelector('#player-hand-split')
const currentBetContainerSplit = document.querySelector('#current-bet-split')


playerHandContainer.innerHTML = 'Players Hand: ';
dealerHandContainer.innerHTML = 'Dealers Hand: ';
playerSumContainer.innerHTML = 'Players Sum: ';
dealerSumContainer.innerHTML = 'Dealers Sum: ';
balanceContainer.innerHTML = 'Balance: ' + playerBalance;
currentBetContainer.innerHTML = 'Current Bet: ' + currentBet;
currentBetContainerSplit.innerHTML = 'Split Hand Bet: ' + currentSplitBet;
playerHandContainerSplit.innerHTML = 'Split Hand: ';



function displays(){
dealerSumContainer.innerHTML = 'Dealers Sum:' + cardSum(dealerHand);
playerSumContainer.innerHTML = 'Players Sum: ' + cardSum(playerHand);
balanceContainer.innerHTML = 'Balance: ' + playerBalance;
currentBetContainer.innerHTML = 'Current Bet: ' + currentBet;
currentBetContainerSplit.innerHTML = 'Split Hand Bet: ' + currentSplitBet;



let dealerHandString = '';
let playerHandString = '';
let playerHandSplitString = '';
console.log(dealerHand)
for (let i = 0; i < playerHand.length; i++) {
    playerHandString += playerHand[i].rank + ' of ' + playerHand[i].suit + ', ';
}
for (let x = 0; x < dealerHand.length; x++) {
    dealerHandString += dealerHand[x].rank + ' of ' + dealerHand[x].suit + ', ';
}
for (let s = 0; s < playerHandSplit.length; s++) {
    playerHandSplitString += playerHandSplit[s].rank + ' of ' + playerHandSplit[s].suit + ', ';
}

playerHandSplitString = playerHandSplitString.slice(0, -2);
dealerHandString = dealerHandString.slice(0, -2);
playerHandString = playerHandString.slice(0, -2);
playerHandContainer.innerHTML = 'Players Hand: ' + playerHandString;
dealerHandContainer.innerHTML = 'Dealers Hand: ' + dealerHandString;
playerHandContainerSplit.innerHTML = 'Split Hand: ' + playerHandSplitString;

}
//-------------- SHUFFLE FUNCTION ---------------\\
function shuffle(deck) {
    let deckLength = deck.length;

    for ( let i = deck.length -1; i > 0; i--)  {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp;
    }

    let shuffledLength = deck.length;
    console.log('Deck shuffled! Original Length: ' + deckLength + ' | Shuffled Length: ' + deckLength)
}

//---------------Betting-----------------\\
betButtons.forEach((button) => {
    button.addEventListener('click', function(){
        if(playerBalance < button.dataset.betAmount) {  
            alertContainer.innerHTML = 'Balance to low.'
            disableBets()
        } else {
            let betAmount = parseInt(button.dataset.betAmount);
            currentBet += betAmount;

            playerBalance -= betAmount;

            balanceContainer.innerHTML = 'Balance: ' + playerBalance;
            currentBetContainer.innerHTML = 'Current Bet: ' + currentBet;

        }

        
    });
});   

function disableBets(){
    betButtons.forEach(button => {
        button.disabled = true;
    });
}
function enableBets(){
    betButtons.forEach(button => {
        button.disabled = false;
    });
}

//--------------DEAL FUNCTION --------------\\
function initialDeal(deck) {
    playerHand.push(deck.pop(), deck.pop());
    dealerHand.push(deck.pop(), deck.pop());
    disableBets()
 
}
//----------------- SUM HAND FUNCTION + ACE LOGIC -------------\\
function cardSum(handToSum) {
    let sum = 0;
    let hasAce = false;
    let aceCount = 0;
  
    for (let i = 0; i < handToSum.length; i++) {
      sum += handToSum[i].value;
      if (handToSum[i].rank === 'Ace') {
        hasAce = true;
        aceCount++;
      }
    }
  
    if (hasAce) {
      for (let i = 0; i < aceCount; i++) {
        if (sum <= 11) {
          sum += 10;
        }
      }
    }
  
    return sum;
  }


//-------------------Shuffling Deck---------------\\
shuffle(deck);

//------------------Disable/ENABLE Buttons Function---------------\\
function disableButtons(){
    hitButton.disabled = true;
    standButton.disabled = true;
    doubleDownButton.disabled = true;
    splitButton.disabled = true;
}
function enableButtons(){
    hitButton.disabled = false;
    standButton.disabled = false;
    doubleDownButton.disabled = false;
    splitButton.disabled = false;
}    
function enableButtonsSplit(){
    hitButtonSplit.disabled = false;
    standButtonSplit.disabled = false;
    doubleDownButtonSplit.disabled = false;
}
function disableButtonsSplit(){
    hitButtonSplit.disabled = true;
    standButtonSplit.disabled = true;
    doubleDownButtonSplit.disabled = true;
}


//--------------------ENABLING/DISABLING NEXT ROUND BUTTON----------------\\

function enableNextRound() {
    if(roundOver) {
        nextRoundButton.disabled = false;
    } else {
        nextRoundButton.disabled = true;
    }
}
enableNextRound();
//-------------------DEAL BUTTON--------------------\\
    const dealButton = document.querySelector('#deal-button');
    dealButton.addEventListener('click', function(){
    enableButtons();
    disableButtonsSplit();


        playerHand = [];
        dealerHand = [];
        playerHandSum = 0;
        dealerHandSum = 0;

        alertContainer.innerHTML = '';
        playerHandContainerSplit.innerHTML = '';
        currentBetContainerSplit.innerHTML = '';

        initialDeal(deck);
        playerHandSum = cardSum(playerHand);
        dealerHandSum = cardSum(dealerHand);
        
        if(playerHandSum === 21 && dealerHandSum !== 21) {
            document.querySelector('#result').textContent = 'You Win!'
            roundOver = true;
            playerBalance = playerBalance + currentBet * 2.5;
        } else if(dealerHandSum === 21 && playerHandSum !== 21) {
            document.querySelector('#result').textContent = 'You Lose.'
            roundOver = true;
        } else if(dealerHandSum === 21 && playerHandSum === 21) {
            document.querySelector('#result').textContent = 'Draw. Bets Returned'
            roundOver = true;
            playerBalance += currentBet;
        } else {
            document.querySelector('#result').textContent = ''
        }
        console.log(deck.length)
        dealButton.disabled = true;
        enableNextRound()
    displays()
  }
  );

//---------------DEAL 1 CARD FUNCTION---------------\\
function dealCard(deck, hand) {
    hand.push(deck.pop());
    playerHandSum = cardSum(playerHand);
    dealerHandSum = cardSum(dealerHand);
    playerHandSumSplit = cardSum(playerHandSplit);
}

//---------------- HIT BUTTONS ------------------\\
const hitButton = document.querySelector('#hit-button');
hitButton.addEventListener('click', function(){
    doubleDownButton.disabled = true;
    splitButton.disabled = true;

    dealCard(deck, playerHand);
    if (playerHandSum > 21) {
        document.querySelector('#result').textContent = 'You Lose!'
        disableButtons()
        nextRoundButton.disabled = false;
    }
    displays()
});
    //split
const hitButtonSplit = document.querySelector('#hit-button-split');
hitButtonSplit.addEventListener('click', function(){
    //doubleDownButtonSplit.disabled = true;

    dealCard(deck, playerHandSplit);
    if (playerHandSumSplit > 21) {
        document.querySelector('#result-split').textContent = 'You Lose!'
        disableButtonsSplit()
        nextRoundButton.disabled = false;
    }
    displays()
});

//-------------------DEALER DRAW FUNCTION-----------------\\
function dealerDraw(deck, dealerHand) {
    playerHandSum = cardSum(playerHand);
    dealerHandSum = cardSum(dealerHand);
    hasAce = false;

    for(let i = 0; i< dealerHand.length; i++){
    if(dealerHand[i].rank === 'Ace') {
        hasAce = true;
    };
    };      

    while (dealerHandSum < 17){
        dealCard(deck, dealerHand);
    }
    while (dealerHandSum <= 17 && hasAce) {
        dealCard(deck, dealerHand);
    }

    if (dealerHandSum > 21) {
        document.querySelector('#result').textContent = 'You Win!'
        roundOver = true;
        playerBalance = playerBalance + currentBet * 2
        } else if (dealerHandSum > 16 && dealerHandSum < 22) {
         if (playerHandSum > dealerHandSum ){
            document.querySelector('#result').textContent = 'You Win!';
            roundOver = true;
            playerBalance = playerBalance + currentBet * 2

        } else if (dealerHandSum > playerHandSum) {
            document.querySelector('#result').textContent = 'You Lose.';
            roundOver = true;
        } else if (dealerHandSum === playerHandSum) {
            document.querySelector('#result').textContent = 'Draw. Bets returned.';
            roundOver = true;
            playerBalance += currentBet;
        }    
    }
    enableNextRound()
}
    //split 
    function dealerDrawSplit(deck, dealerHand) {
        playerHandSumSplit = cardSum(playerHandSplit);
        dealerHandSum = cardSum(dealerHand);
        hasAce = false;
    
        for(let i = 0; i< dealerHand.length; i++){
        if(dealerHand[i].rank === 'Ace') {
            hasAce = true;
        };
        };      
    
        while (dealerHandSum < 17){
            dealCard(deck, dealerHand);
        }
        while (dealerHandSum <= 17 && hasAce) {
            dealCard(deck, dealerHand);
        }
    
        if (dealerHandSum > 21) {
            document.querySelector('#result-split').textContent = 'You Win!'
            roundOver = true;
            playerBalance = playerBalance + currentSplitBet * 2
            } else if (dealerHandSum > 16 && dealerHandSum < 22) {
             if (playerHandSumSplit > dealerHandSum ){
                document.querySelector('#result-split').textContent = 'You Win!';
                roundOver = true;
                playerBalance = playerBalance + currentSplitBet * 2
    
            } else if (dealerHandSum > playerHandSumSplit) {
                document.querySelector('#result-split').textContent = 'You Lose.';
                roundOver = true;
            } else if (dealerHandSum === playerHandSumSplit) {
                document.querySelector('#result-split').textContent = 'Draw. Bets returned.';
                roundOver = true;
                playerBalance += currentSplitBet;
            }    
        }
        enableNextRound()
    }


//----------------- STAND BUTTON----------------\\
const standButton = document.querySelector('#stand-button');
standButton.addEventListener('click', function(){

    disableButtons()
    dealerDraw(deck, dealerHand);
    displays()
});

const standButtonSplit = document.querySelector('#stand-button-split');
standButton.addEventListener('click', function(){

    disableButtonsSplit()
    dealerDrawSplit(deck, dealerHand);
    displays()
});



//-------------------DOUBLE DOWN FUNCTION--------------\\
    // double bet --code here
    // player gets ONLY 1 more card
function doubleDown(){
    if (playerBalance < currentBet) {
        doubleDownButton.disabled = true;
        alertContainer.innerHTML = 'Balance to low.'
    } else {
        playerBalance -= currentBet;
        currentBet = currentBet * 2 
        dealCard(deck, playerHand);
        playerHandSum = cardSum(playerHand);
    if (playerHandSum > 21) {
        document.querySelector('#result').textContent = 'You Lose!'
        nextRoundButton.disabled = false;
        disableButtons();

    } else if (playerHandSum <= 21) {
        dealerDraw(deck, dealerHand);
        dealerHandSum = cardSum(dealerHand);
        disableButtons();
        
        };
    };
    displays();
};

function doubleDownSplit(){
    if (playerBalance < currentSplitBet) {
        doubleDownButtonSplit.disabled = true;
        alertContainerSplit.innerHTML = 'Balance to low.'
    } else {
        playerBalance -= currentSplitBet;
        currentSplitBet = currentSplitBet * 2 
        dealCard(deck, playerHandSplit);
        playerHandSumSplit = cardSum(playerHand);
    if (playerHandSumSplit > 21) {
        document.querySelector('#result-split').textContent = 'You Lose!'
        nextRoundButton.disabled = false;
        disableButtonsSplit();

    } else if (playerHandSumSplit <= 21) {
        dealerDraw(deck, dealerHand);
        dealerHandSum = cardSum(dealerHand);
        disableButtonsSplit();
        
        };
    };
    displays();
};

//-------------------DOUBLE DOWN BUTTON----------------\\
const doubleDownButton = document.querySelector('#double-down-button');
    doubleDownButton.addEventListener('click', function(){
    doubleDown()
});

    //split
const doubleDownButtonSplit = document.querySelector('#double-down-button-split');
    doubleDownButton.addEventListener('click', function(){
    doubleDownSplit ()
});


//-------------------SPLIT FUNCTION-------------------\\
    // requires two cards of the same value
    // players balance must be  >= the bet on the current hand ---- new hand gets same bet

function split(playerHand){
    if ( playerBalance < currentBet) {
        alertContainer.innerHTML = 'Balance to low.'
    } else if (playerBalance >= currentBet) {
        playerHandSplit.push(playerHand.pop());
        playerBalance -= currentBet;
        currentSplitBet += currentBet;



        displays()
    };
};




//-------------------SPLIT BUTTON-------------------\\
const splitButton = document.querySelector('#split-button');
    splitButton.addEventListener('click', function(){
    enableButtonsSplit()
    split(playerHand)
    displays()
});

//------------------NEW GAME BUTTON----------------------\\
newGameContainer.addEventListener('click', function(){
    dealerHand = [];
    playerHand = [];
    playerHandSplit = [];
    currentSplitBet = 0;
    playerHandSum = 0;
    dealerHandSum = 0;
    currentBet = 0;
    playerBalance = 1000;

    disableButtonsSplit();
    dealButton.disabled = false;
    nextRoundButton.disabled = true;
    document.querySelector('#result').textContent = ''
    document.querySelector('#player-hand-split').textContent = ''
    playerHandContainerSplit.innerHTML = ''
    currentBetContainerSplit.innerHTML = ''

    
    let deck = sixStackDeck(baseDeck);
    shuffle(deck);
    
    enableBets();
    displays();
});


//if player card sum is exactly 21 then return 1.5x instead of 1x the bet 

//Doubling down(if original cards total 9,10, or 11) players bet doubles and they get 1 additional card. then dealer flips

//Insurance- if dealers face up card is an ace, player can bet up to half original bet. if its a 10 player wins 2x insurance bet




// create a starting balance of 1000 the player can use to bet with --- wins are 2x input losses are 0


//--------------------NEXT ROUND BUTTON--------------\\
nextRoundButton.addEventListener('click', function(){
    dealerHand = [];
    playerHand = [];
    playerHandSum = 0;
    dealerHandSum = 0;
    currentBet = 0;
    dealButton.disabled = false;
    nextRoundButton.disabled = true;
    document.querySelector('#result').textContent = ''
    displays()
    enableBets()

});
