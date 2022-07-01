

const getSelectedCard = (parentClass, className, clickClass, contentText, mouseEnter, mouseLeave) => {
const downtextSpan = document.createElement('span');

  if (!parentClass.classList.contains(className + '--selected')) {
    parentClass.classList.add(className + '--selected');
    downtextSpan.classList.add('downtext__selected');
    parentClass.querySelector('.downtext').appendChild(downtextSpan);
    parentClass.querySelector('.downtext__default').classList.add('hidden');
    downtextSpan.textContent = contentText;

    clickClass.addEventListener('mouseenter', mouseEnter);

    clickClass.addEventListener('mouseleave', mouseLeave);

  } else {
    parentClass.classList.remove(className + '--selected');
    parentClass.querySelector('.downtext__default').classList.remove('hidden');
    parentClass.querySelector('.downtext__selected').remove(downtextSpan);

    clickClass.removeEventListener('mouseenter', mouseEnter);

    clickClass.removeEventListener('mouseleave', mouseLeave);

  };

};

export {getSelectedCard};
