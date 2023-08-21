let max = 100;
let min = 0;


let isPetAlive = function () {
  if(pet['hunger'] > max 
  || pet['sleep'] > max 
  || pet['energy'] < min 
  || pet['happiness'] < min) {
    pet['isAlive'] = false;
  } else {
    pet['isAlive'] = true;
  }
};
let play = function () {
  pet["happiness"] += 20;
  pet["energy"] -= 10;
  pet["hunger"] += 12;
  pet["sleep"] += 7;
  isPetAlive();
};

let feed = function () {
  pet["happiness"] += 12;
  pet["hunger"] -= 20;
  pet["energy"] -= 7;
  pet["sleep"] += 10;

  isPetAlive();
};

let sleep = function () {
  pet["happiness"] += 7;
  pet["sleep"] -= 20;
  pet["energy"] += 10;
  pet["hunger"] += 12;

  isPetAlive();
};
