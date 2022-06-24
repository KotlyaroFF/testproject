
const getDisabledCard = (parentClass, className) => {
 return parentClass.classList.add(className + '--disabled');
};

export {getDisabledCard};
