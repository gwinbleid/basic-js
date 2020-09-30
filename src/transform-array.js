module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw new Error();

  let i = 0, modifiedArray = [];

  while (i < arr.length) {
    console.log(i);
    if (arr[i] === '--discard-next') {
     i = i + 2;
     continue;
    } else if (arr[i] === '--discard-prev') {
      if (i - 1 >= 0 && modifiedArray.length > 0 && arr[i - 2] !== '--discard-next') {
        modifiedArray.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (i + 1 < arr.length) {
        modifiedArray.push(arr[i + 1]);
      }

    } else if (arr[i] === '--double-prev') {
      if (i - 1 >= 0 && modifiedArray.length > 0 && arr[i - 2] !== '--discard-next') {
        modifiedArray.push(arr[i - 1]);
      }
    } else {
      modifiedArray.push(arr[i]);
    }

    i++;
  }

  return modifiedArray;

};
