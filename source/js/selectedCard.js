import { doMouseenter, doMouseleave } from "./mouseListener.js";

const getSelectedCard = (parentClass, className, clickClass, contentText) => {
  const downtextSpan = document.createElement('span');


  if (parentClass.classList.contains(className + '--selected')) {
      parentClass.classList.remove(className + '--selected');
      parentClass.querySelector('.downtext__default').classList.remove('hidden');
      parentClass.querySelector('.downtext__selected').remove(downtextSpan);

      clickClass.removeEventListener('mouseenter', () => {
        doMouseOver(parentClass, className);
      });

      clickClass.removeEventListener('mouseleave', () => {
        doMouseOut(parentClass, className);
      });

  } else {
      parentClass.classList.add(className + '--selected');
      downtextSpan.classList.add('downtext__selected');
      parentClass.querySelector('.downtext').appendChild(downtextSpan);
      parentClass.querySelector('.downtext__default').classList.add('hidden');
      downtextSpan.textContent = contentText;

      clickClass.addEventListener('mouseleave', () => {
        doMouseleave(parentClass, className);
      });

      clickClass.addEventListener('mouseenter', () => {
        doMouseenter(parentClass, className);
      });

  };

};

export {getSelectedCard};
