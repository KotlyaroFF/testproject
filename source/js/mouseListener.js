const doMouseleave = ({parentClass, className}) => {
  if (parentClass.classList.contains(className + '--selected')) {
    parentClass.classList.add(className + '--mouseleave');
    console.log("Mouseleave");
    parentClass.querySelector('.tagline__default').classList.add('hidden');
    parentClass.querySelector('.tagline__selected').classList.remove('hidden');
  };
};

const doMouseenter = ({parentClass, className}) => {
  console.log("Mouseenter");

  if (parentClass.classList.contains(className + '--selected')) {
    parentClass.classList.remove(className + '--mouseleave');
    parentClass.querySelector('.tagline__default').classList.remove('hidden');
    parentClass.querySelector('.tagline__selected').classList.add('hidden');
  };
};

export {doMouseenter, doMouseleave};
