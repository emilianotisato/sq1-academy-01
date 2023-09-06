let max = 100;
let min = 0;


let updateFrontendStatus = function() {
  let hunger = document.getElementById('hungerStat');
	hunger.textContent = pet.hunger;

	let happiness = document.getElementById('happinesStat');
	happiness.textContent = pet.happiness;

	let sleep = document.getElementById('sleepStat');
	sleep.textContent = pet.sleep;

	let energy = document.getElementById('energyStat');
	energy.textContent = pet.energy;
}

let isPetAlive = function () {
  if(pet['hunger'] > max 
  || pet['sleep'] > max 
  || pet['energy'] < min 
  || pet['happiness'] < min) {
    pet['isAlive'] = false;
  } else {
    pet['isAlive'] = true;
  }

  if(!pet['isAlive']) { 
    document.getElementById('petImage').classList.add('deadPet');
  }
};
let play = function () {
  pet["happiness"] += 20;
  pet["energy"] -= 10;
  pet["hunger"] += 12;
  pet["sleep"] += 7;
  isPetAlive();
  updateFrontendStatus();
};

let feed = function () {
  pet["happiness"] += 12;
  pet["hunger"] -= 20;
  pet["energy"] -= 7;
  pet["sleep"] += 10;

  isPetAlive();
  updateFrontendStatus();
};

let sleep = function () {
  pet["happiness"] += 7;
  pet["sleep"] -= 20;
  pet["energy"] += 10;
  pet["hunger"] += 12;

  isPetAlive();
  updateFrontendStatus();
};
