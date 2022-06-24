
const taglineSpan = document.createElement('span');

const doMouseleave = (parentClass, className) => {
  if (parentClass.classList.contains(className + '--selected')) {
    parentClass.classList.add(className + '--mouseleave');
    console.log("Mouseleave");
    taglineSpan.classList.add('tagline__selected');
    taglineSpan.textContent = 'Котэ не одобряет?';
    parentClass.querySelector('.tagline').appendChild(taglineSpan);
    parentClass.querySelector('.tagline__default').classList.add('hidden');
  };
};

const doMouseenter = (parentClass, className) => {
  if (parentClass.classList.contains(className + '--selected')) {
    parentClass.classList.remove(className + '--mouseleave');
    console.log("Mouseenter");
    parentClass.querySelector('.tagline__default').classList.remove('hidden');
    parentClass.querySelector('.tagline__selected').remove('tagline__selected');
  };
};

export {doMouseenter, doMouseleave};
