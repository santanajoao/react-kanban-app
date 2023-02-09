const  getNewIndex = (array, currentIndex, indexDifference) => {
  const lastIndex = array.length - 1;
  const result = currentIndex + indexDifference;
  if (result < 0) {
    return lastIndex;
  }
  if (result > lastIndex) {
    return 0;
  }
  return result;
};

export default getNewIndex;
