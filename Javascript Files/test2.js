var genRN = function (siz, abi) {
  var RN1 = (Math.random() * siz);
  var RN2 = (Math.random() * abi);
  return  {
          RN1: Math.round(RN1),
          RN2: Math.round(RN2)
        };
  };

function makeDragon() {
  const dragonSizes = ['tiny', 'small', 'medium', 'large', 'enormous'];
  const dragonAbilities = ['fire', 'ice', 'stone', 'metal', 'earth', 'glass'];
  var newNums = genRN((dragonSizes.length - 1), (dragonAbilities.length - 1));
  console.log('I have created the ' + dragonSizes[newNums.RN1] + ' ' + dragonAbilities[newNums.RN2]
   + ' dragon...');

}

makeDragon();
