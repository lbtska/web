let balance = 100;
const randomNumbers = 5;
const maxTries = 3;

function guessNumber() {
    for (let i = 0; i < maxTries; i++){
    const userGuess = parseInt(prompt('Виберіть число від 1 до 5'));
    const randomNumber = Math.floor(Math.random() * randomNumbers) + 1;

    if (userGuess === randomNumber){
        let reward = 0;

        if(i === 0){
            reward = 40;
        } else if (i === 1){
            reward = 20;
        }
        else if (i === 2){
            reward = 10;
        }


        balance =+ reward;
        alert(`Ви вгадали число ${randomNumber}! Ваш баланс ${balance}`);
    }
    else{
        balance -= 20;
        alert(`Ви не вгадали! Ваш баланс ${balance}`);
    }
}
    if(balance > 0){
        alert('Гра закінчилася');
    }
}

guessNumber();