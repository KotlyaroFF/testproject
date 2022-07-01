import { data } from './mockData.js'
import { getDisabledCard } from './disabledCard.js';
import { getSelectedCard } from './selectedCard.js';
import { doMouseenter, doMouseleave } from "./mouseListener.js";

const getCatalogCard = () => {

  const catalogCardList = document.querySelector('.catalog__list');
  const catalogCardContainer = document.querySelector('#catalog__card').content;
  const catalogItem = catalogCardContainer.querySelector('.catalog__item');


  data.forEach ((element) => {

    const catalogCardItem = catalogItem.cloneNode(true);
    catalogCardItem.querySelector('.discription__flavor').textContent = element.title;
    catalogCardItem.querySelector('.discription__servings__amount').textContent = element.servingsAmount;
    catalogCardItem.querySelector('.value__number').textContent = element.value;
    const catalogCard = catalogCardItem.querySelector('.catalog__card');
    const downtextLink = catalogCardItem.querySelector('.downtext__link');


    if (element.presentAmount > 1) {
      if (element.presentAmount > 4) {
        catalogCardItem.querySelector('.discription_present__text').textContent = ' мышей в подарок';
        catalogCardItem.querySelector('.discription__present__amount').textContent = element.presentAmount;
        catalogCardItem.querySelector('.discription__text').textContent = 'заказчик доволен';
      } else {
        catalogCardItem.querySelector('.discription__present__amount').textContent = element.presentAmount;
      }
    } else {
      catalogCardItem.querySelector('.discription__present').textContent = 'мышь в подарок';
    };

    if (!element.available) {
      getDisabledCard(catalogCardItem, 'catalog__item');
      catalogCardItem.querySelector('.downtext').textContent = 'Печалька, ' + element.title + ' закончился.'
    } else {
      const mouseEnter = doMouseenter.bind(null, {parentClass:catalogCardItem, className:  'catalog__item'});
      const mouseLeave = doMouseleave.bind(null, {parentClass:catalogCardItem, className:  'catalog__item'});
      catalogCard.addEventListener('click', () => {
       getSelectedCard(catalogCardItem, 'catalog__item', catalogCard, element.description, mouseEnter, mouseLeave);
           console.log('click');
      });
      downtextLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        getSelectedCard(catalogCardItem, 'catalog__item', catalogCard, element.description, mouseEnter, mouseLeave);
      });
    }

    catalogCardList.appendChild(catalogCardItem);
  });

}

export {getCatalogCard}
