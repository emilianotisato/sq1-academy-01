window.addEventListener("load", function () {
  let max = 100;
  let min = 0;
  let playButton = document.getElementById("playButton");
  let feedButton = document.getElementById("feedButton");
  let sleepButton = document.getElementById("sleepButton");
  let hungerStat = document.getElementById("hungerStat");
  let happinessStat = document.getElementById("happinessStat");
  let sleepStat = document.getElementById("sleepStat");
  let energyStat = document.getElementById("energyStat");

  window.updateFrontendStatus = function () {
    hungerStat.textContent = pet.hunger;
    happinessStat.textContent = pet.happiness;
    sleepStat.textContent = pet.sleep;
    energyStat.textContent = pet.energy;

    //HUNGER
  if (hungerStat.textContent>=0 && hungerStat.textContent<40){
    document.getElementById("HungerChangeArrow").classList.replace("bg-green-100","bg-red-100");
    document.getElementById("GreenArrow").classList.replace("text-green-500","text-red-500");
  }
  else if (hungerStat.textContent>40 || hungerStat.textContent==100){
    document.getElementById("HungerChangeArrow").classList.replace("bg-red-100","bg-green-100");
    document.getElementById("GreenArrow").classList.replace("text-red-500","text-green-500");
  }
  //HAPPINESS
  if (happinessStat.textContent>=0 && happinessStat.textContent<30){
    document.getElementById("HappinessChangeArrow").classList.replace("bg-green-100","bg-red-100");
    document.getElementById("GreenArrow2").classList.replace("text-green-500","text-red-500");
  }
  else if (happinessStat.textContent>40 || happinessStat.textContent==100){
    document.getElementById("HappinessChangeArrow").classList.replace("bg-red-100","bg-green-100");
    document.getElementById("GreenArrow2").classList.replace("text-red-500","text-green-500");
  }

  //SLEEP
    if (sleepStat.textContent>=0 && sleepStat.textContent<20){
      document.getElementById("SleepChangeArrow").classList.replace("bg-red-100","bg-green-100");
      document.getElementById("GreenArrow3").classList.replace("text-red-500","text-green-500");
    }
    else if (sleepStat.textContent>20 || sleepStat.textContent==100){
      document.getElementById("SleepChangeArrow").classList.replace("bg-green-100","bg-red-100");
      document.getElementById("GreenArrow3").classList.replace("text-green-500","text-red-500");
    }
  //ENERGY
    if (energyStat.textContent>=0 && energyStat.textContent<50){
      document.getElementById("EnergyChangeArrow").classList.replace("bg-green-100","bg-red-100");
      document.getElementById("GreenArrow4").classList.replace("text-green-500","text-red-500");
    }
    else if (energyStat.textContent>50 || energyStat.textContent==100){
      document.getElementById("EnergyChangeArrow").classList.replace("bg-red-100","bg-green-100");
      document.getElementById("GreenArrow4").classList.replace("text-red-500","text-green-500");
    }

  };

  let updateIsAliveStatus = function () {
    if (
      pet["hunger"] >= max ||
      pet["sleep"] >= max ||
      pet["energy"] <= min ||
      pet["happiness"] <= min
    ) {
      pet["isAlive"] = false;
    } 
    else {
      pet["isAlive"] = true;
    }

    if (!pet["isAlive"]) {
      document.getElementById("petImage").classList.add("deadPet");
      playButton.disabled = true;
      feedButton.disabled = true;
      sleepButton.disabled = true;
    }

    return pet["isAlive"];
  };

  let limitPetStats = function () {
    pet["happiness"] = Math.min(Math.max(pet["happiness"],min),max);
    pet["energy"] = Math.min(Math.max(pet["energy"],min),max);
    pet["hunger"] = Math.min(Math.max(pet["hunger"],min),max);
    pet["sleep"] = Math.min(Math.max(pet["sleep"],min),max);
  }

  window.play = function () {
    pet["happiness"] += 10;
    pet["energy"] -= 10;
    pet["hunger"] += 10;
    pet["sleep"] += 10;
    limitPetStats();
    updateIsAliveStatus();
    updateFrontendStatus();
  };

  window.feed = function () {
    pet["happiness"] += 10;
    pet["hunger"] -= 20;
    pet["energy"] -= 10;
    pet["sleep"] += 10;
    limitPetStats();
    updateIsAliveStatus();
    updateFrontendStatus();
  };

  window.sleep = function () {
    pet["happiness"] += 10;
    pet["sleep"] -= 20;
    pet["energy"] += 10;
    pet["hunger"] += 10;
    limitPetStats();
    updateIsAliveStatus();
    updateFrontendStatus();
  };
});
