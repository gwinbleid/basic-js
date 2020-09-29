module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)) return false;

  return members
      .filter(item => typeof item === 'string')
      .map(item => {
        return item.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '').slice(0, 1);
      })
      .map(item => item.toUpperCase())
      .sort(function (a, b) {
        return a.charCodeAt(0) - b.charCodeAt(0);
      })
      .join('');
};
