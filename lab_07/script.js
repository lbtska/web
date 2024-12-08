function startGame() {
    let balance = 100;
    alert(`Ваш початковий баланс: $${balance}`);

    while (balance >= 20) {
        const randomNumber = generateRandomNumber();
        let attempts = 3;

        attempts = playRound(randomNumber, attempts, balance);
        balance = updateBalance(attempts, balance, randomNumber);

        if (balance < 20) {
            alert("Ваш баланс недостатній для продовження гри. Дякуємо за гру!");
            break; 
        }

        alert(`Ваш поточний баланс: $${balance}. Починаємо нову гру`);
    }

    alert(`Дякуємо за гру! Ваш фінальний баланс: $${balance}`);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function playRound(randomNumber, attempts, balance) {
    while (attempts > 0) {
        let guess = parseInt(prompt(`Вгадайте число від 1 до 5. У вас ${attempts} спроби:`));

        if (isNaN(guess) || guess < 1 || guess > 5) {
            alert("Будь ласка, введіть число від 1 до 5.");
            continue;
        }

        if (guess === randomNumber) {
            alert(`Вітаємо! Ви вгадали число: ${randomNumber}`);
            balance += 10;
            return attempts;
        } else {
            attempts--;
            balance -= 5;
            alert(`Неправильно! Залишилося спроб: ${attempts}`);
        }
    }

    alert(`Ви вичерпали всі спроби. Загадане число було: ${randomNumber}`);
    return attempts;
}

function updateBalance(attempts, balance, randomNumber) {
    if (attempts === 0) {
        balance -= 5;
    }
    return balance;
}

startGame();