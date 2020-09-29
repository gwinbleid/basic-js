module.exports = class DepthCalculator {
    calculateDepth(arr) {
      if (Array.isArray(arr)) {
        if(arr.length) {
          return 1 + Math.max(...arr.map(item => {
            return this.calculateDepth(item);
          }))
        } else return 1;
      } else return 0;
    }
};
