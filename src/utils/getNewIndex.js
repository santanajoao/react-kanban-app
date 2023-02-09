const  getNewIndex = (array, currentIndex, indexDifference) => {
  const lastIndex = array.length - 1;
  const result = currentIndex + indexDifference;
  if (result < 0) {
    return lastIndex + 1;
  }
  if (result > lastIndex) {
    return 0;
  }
  if (indexDifference > 0) {
    return result + 1;
  }
  return result;
};

export default getNewIndex;
