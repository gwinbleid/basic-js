module.exports = function repeater(str, options) {

  function addition_construct(addition, additionRepeatTimes, additionSeparator) {
    if ('addition' in options !== true) return '';
    if (isNaN(+additionRepeatTimes)) return '' + addition;
    if ('additionSeparator' in options !== true) return new Array(+additionRepeatTimes).fill('' + addition).join('|');
    return new Array(+additionRepeatTimes).fill('' + addition).join('' + additionSeparator);
  }

  function string_construct(str, repeatTimes, separator) {
    let addition = addition_construct(options.addition, options.additionRepeatTimes, options.additionSeparator);

    if (isNaN(+repeatTimes)) return str.toString() + addition;
    if ('separator' in options !== true) {
      return new Array(+repeatTimes).fill('' + str + addition).join('+');
    } else {
      return new Array(+repeatTimes).fill('' + str + addition).join('' + separator);
    }
  }

  return string_construct(str, options.repeatTimes, options.separator);
};
