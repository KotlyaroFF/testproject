import {data} from './mockData.js'

const getCatalogCard = () => {

  const catalogCardList = document.querySelector('.catalog__list');
  const catalogCardContainer = document.querySelector('#catalog__card').content;
  const catalogItem = catalogCardContainer.querySelector('.catalog__item');


  data.forEach ((id) => {

    const catalogCardItem = catalogItem.cloneNode(true);
    catalogCardItem.querySelector('.discription__flavor').textContent = id.title;
    catalogCardItem.querySelector('.discription__servings__amount').textContent = id.servingsAmount;
    catalogCardItem.querySelector('.value__number').textContent = id.value;

    if (id.presentAmount > 1) {
      if (id.presentAmount > 4) {
        catalogCardItem.querySelector('.discription_present__text').textContent = ' мышей в подарок';
        catalogCardItem.querySelector('.discription__present__amount').textContent = id.presentAmount;
        catalogCardItem.querySelector('.disdiscription__text').textContent = 'заказчик доволен';
      } else {
        catalogCardItem.querySelector('.discription__present__amount').textContent = id.presentAmount;
      }
    } else {
      catalogCardItem.querySelector('.discription__present').textContent = 'мышь в подарок';
    };

    if (!id.available) {
      catalogCardItem.classList.add('catalog__item--disabled');
      catalogCardItem.querySelector('.downtext').textContent = 'Печалька, ' + id.title + ' закончился.'
    }

    catalogCardList.appendChild(catalogCardItem);
    console.log(catalogCardList);

  });


}

export {getCatalogCard}
