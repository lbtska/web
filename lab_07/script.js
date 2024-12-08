let balance = 100;
const randomNumbers = 5;
const maxTries = 3;

function guessNumber() {
    while (balance > 0) {
        const randomNumber = Math.floor(Math.random() * randomNumbers) + 1;
        console.log(`Випадкове число (для тестування): ${randomNumber}`);

        let guessedCorrectly = false;

        for (let i = 0; i < maxTries; i++) {
            const userGuess = parseInt(prompt('Виберіть число від 1 до 5'));

            if (userGuess === randomNumber) {
                let reward = 0;

                if (i === 0) {
                    reward = 40;
                } else if (i === 1) {
                    reward = 20;
                } else if (i === 2) {
                    reward = 10;
                }

                balance += reward;
                alert(`Ви вгадали число ${randomNumber}! Ваш баланс ${balance}`);
                guessedCorrectly = true;
                break;
            } else {
                balance -= 20;
                alert(`Ви не вгадали! Ваш баланс ${balance}`);
            }

            if (balance <= 0) {
                alert('Ваш баланс вичерпано. Гра закінчилася.');
                return;
            }
        }

        if (!guessedCorrectly) {
            alert(`На жаль, ви не вгадали число ${randomNumber}. Гра закінчується.`);
            break;
        }
    }
}

guessNumber();