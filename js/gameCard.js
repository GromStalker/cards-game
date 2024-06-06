export const createGameCard = (defaultIcon, flippedCardIcon) => { 
    const card = document.createElement('div'); // Создаём элемент карты и добавляем класс
    card.classList.add('game-card'); 

    //Создание элементов для обоих сторон карт
    const notFlippedCardI = document.createElement('i'); 
    const flippedCardI = document.createElement('i'); 

    // Добавление иконок для обоих сторон карт
    notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`); 
    flippedCardI.classList.add('fa', `fa-${flippedCardIcon}`); 

    card.append(flippedCardI, notFlippedCardI); // Добавляем обе стороны карты в элемент карты

    return card; // Возвращает созданную карту
}
