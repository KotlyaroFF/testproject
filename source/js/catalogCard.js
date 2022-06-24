import { data } from './mockData.js'
import { getDisabledCard } from './disabledCard.js';
import { getSelectedCard } from './selectedCard.js';

const getCatalogCard = () => {

  const catalogCardList = document.querySelector('.catalog__list');
  const catalogCardContainer = document.querySelector('#catalog__card').content;
  const catalogItem = catalogCardContainer.querySelector('.catalog__item');


  data.forEach ((id) => {

    const catalogCardItem = catalogItem.cloneNode(true);
    catalogCardItem.querySelector('.discription__flavor').textContent = id.title;
    catalogCardItem.querySelector('.discription__servings__amount').textContent = id.servingsAmount;
    catalogCardItem.querySelector('.value__number').textContent = id.value;
    const catalogCard = catalogCardItem.querySelector('.catalog__card');
    const downtextLink = catalogCardItem.querySelector('.downtext__link');


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
      getDisabledCard(catalogCardItem, 'catalog__item');
      catalogCardItem.querySelector('.downtext').textContent = 'Печалька, ' + id.title + ' закончился.'
    } else {
      catalogCard.addEventListener('click', () => {
       getSelectedCard(catalogCardItem, 'catalog__item', catalogCard, id.description);
           console.log('click');
      });
      downtextLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        getSelectedCard(catalogCardItem, 'catalog__item', catalogCard, id.description);
      });
    }

    catalogCardList.appendChild(catalogCardItem);
  });

}

export {getCatalogCard}
