let balance = 100;

        document.getElementById('startButton').addEventListener('click', startGame);

        function startGame() {
            if (balance < 20) {
                alert("Недостатньо коштів для початку гри.");
                return;
            }

            balance -= 20;
            updateBalance();

            const targetNumber = getRandomNumber(1, 5);
            let guessed = false;

            for (let attempt = 1; attempt <= 3; attempt++) {
                let guess = prompt(`Спроба ${attempt}: Вгадайте число від 1 до 5`);
                
                if (guess === null) { 
                    alert("Гра перервана.");
                    return;
                }

                guess = parseInt(guess);

                if (isNaN(guess) || guess < 1 || guess > 5) {
                    alert("Будь ласка, введіть дійсне число від 1 до 5.");
                    attempt--;
                    continue;
                }

                if (guess === targetNumber) {
                    let reward;
                    if (attempt === 1) reward = 30;
                    else if (attempt === 2) reward = 20;
                    else reward = 5;

                    balance += reward;
                    updateBalance();
                    alert(`Вітаємо! Ви вгадали число ${targetNumber} з ${attempt}-ої спроби та отримали $${reward}.`);
                    guessed = true;
                    break;
                } else {
                    alert(`Невірно! Спробуйте ще раз.`);
                }
            }

            if (!guessed) {
                alert(`Не вгадали. Загадане число було ${targetNumber}. Гру завершено.`);
            }
        }

        function updateBalance() {
            document.getElementById('balance').innerText = `Баланс: $${balance}`;
        }

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }