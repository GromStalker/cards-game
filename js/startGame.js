import { confetti } from "./confetti.js";
import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createIconsArray, duplicateArray, shuffle } from "./utils.js";

export const startGame = (difficult) => {
    let firstCard = null; 
    let secondCard = null; 
    let clickable = true; // Переменная, позволяющая или запрещающая кликать на карты

    const gameSection = document.querySelector('.game-section__container'); // Получаем контейнер для игры
    const gameTable = document.createElement('div'); // Создаем элемент для игрового стола
    const cardsIcons = createIconsArray(difficult); 
    const duplicatedCardsIcons = duplicateArray(cardsIcons); 
    const restartBtn = document.createElement('button');

    gameSection.innerHTML = ''; // Очищаем контейнер для игры
    restartBtn.textContent = 'Рестарт'; 
    gameTable.classList.add('game-table'); 
    restartBtn.classList.add('restart-btn');

    shuffle(duplicatedCardsIcons); // Перемешиваем иконки карт

    duplicatedCardsIcons.forEach(icon => gameTable.append(createGameCard('question-circle', icon))); // Создаем карты и добавляем их в игровой стол

    gameSection.append(gameTable, restartBtn); // Добавляем игровой стол и кнопку рестарта в контейнер игры

    const cards = document.querySelectorAll('.game-card'); // Получаем все карты

    restartBtn.addEventListener('click', createGameMenu); // Добавляем обработчик события для кнопки рестарта

    cards.forEach((card, index) => card.addEventListener('click', () => { //Обработчики событий для всех карт
        if (clickable == true && !card.classList.contains('successfully')) { // Проверяем, можно ли кликнуть на карту
            card.classList.add('flip'); // Переворачиваем карту

            //Проверка на какую по счёту карту мы кликаем
            if (firstCard == null) { 
                firstCard = index; 
            } else { 
                if (index != firstCard) { 
                    secondCard = index; 
                    clickable = false; 
                }
            }

            if (firstCard != null && secondCard != null && firstCard != secondCard) { // Если выбраны две разные карты
                if (
                    cards[firstCard].firstElementChild.className ===
                    cards[secondCard].firstElementChild.className
                ) { // Если иконки на двух картах совпадают, помечаем карты как угаданные
                    setTimeout(() => {
                        cards[firstCard].classList.add('successfully'); 
                        cards[secondCard].classList.add('successfully'); 

                        firstCard = null; 
                        secondCard = null; 
                        clickable = true; 
                    }, 500);
                } else { // Если иконки на двух картах не совпадают , то переворачиваем обе карты
                    setTimeout(() => {
                        cards[firstCard].classList.remove('flip'); 
                        cards[secondCard].classList.remove('flip'); 

                        firstCard = null; 
                        secondCard = null; 
                        clickable = true; 
                    }, 500);
                }
            }
            //Отображение конфетти если все карты перевёрнуты
            if (Array.from(cards).every(card => card.className.includes('flip'))) { 
                document.querySelector('.confetti').innerHTML = confetti; 
            }
        }
    }));
}
