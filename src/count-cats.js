module.exports = function countCats(backyard) {
  let union = [];
  backyard.forEach(item => union = union.concat(item));
  return union.filter(item => item === '^^').length;
};
