//Функция  для перемешивания массива
export const shuffle = (array) => {  
    let currentIndex = array.length, randomIndex; //Текущий индекс и случайный индекс
  
    while (currentIndex != 0) { 
      randomIndex = Math.floor(Math.random() * currentIndex); 
      currentIndex--; 
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]; // Меняем местами элементы массива
    }
  
    return array; 
}
// Функция для дублирования элементов массива
export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []); 

//  Функция для создания массива иконок
export const createIconsArray = (initialCount) => { 
    const cardsIcons = [ 
        'compass',
        'cloud',
        'play',
        'bolt',
        'stop',
        'cogs',
        'atom',
        'basketball-ball'
    ];

    // Возвращение нужного кол-ва карт в зависимости от сложности
    switch (initialCount) { 
        case 10:
            return cardsIcons.slice(0, 5);
        case 12:
            return cardsIcons.slice(0, 6);
        case 14:
            return cardsIcons.slice(0, 7);
        case 16:
            return cardsIcons;
        default:
            break;
    }
}
