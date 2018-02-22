/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  var base = [];

  for (i = 0; i <= preferences.length; i++) {

    if (preferences[i] != 0 && preferences[preferences[i] - 1] != 0 && preferences[preferences[preferences[i] - 1] - 1] != 0
    ) {

      var love = i + 1;
      if (base.includes(love)) {
        continue;
      }
      if (love == (preferences[preferences[preferences[i] - 1] - 1]) &&

        (preferences[i] != preferences[preferences[i] - 1] &&
          preferences[preferences[i] - 1] != preferences[preferences[preferences[i] - 1] - 1] &&
          preferences[preferences[preferences[i] - 1] - 1] != preferences[i])
      ) {
        base.push(preferences[i]);
        base.push(preferences[preferences[i] - 1]);
        base.push(preferences[preferences[preferences[i] - 1] - 1]);
        counter++;
      }
    }
  }

  return counter;
};
