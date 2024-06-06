import { startGame } from "./startGame.js"; 

export const createGameMenu = () => { 
    const title = document.createElement('h2'); // Создает элемент заголовка <h2>
    const gameSection = document.querySelector('.game-section__container'); // Находит контейнер для игры в HTML

    gameSection.innerHTML = ''; // Очищает содержимое контейнера
    title.textContent = 'Выбор сложности'; 
    title.classList.add('game-menu__title'); 
    document.querySelector('.confetti').innerHTML = ''; // Очиcтка конфетти (если есть)

    // Функция для создания кнопок выбора сложности
    const createDifficultButton = (difficult) => {
        const button = document.createElement('button'); 

        button.classList.add('game-menu__difficult-btn'); 
        button.textContent = `${difficult} карт`; 

        button.addEventListener('click', () => startGame(difficult)); //Обработчик события для кнопки, который запускает игру с выбранной сложностью

        return button; 
    }

    gameSection.append( // Добавляет элементы в контейнер игры
        title,
        createDifficultButton(10), 
        createDifficultButton(12), 
        createDifficultButton(14), 
        createDifficultButton(16), 
    )
}
