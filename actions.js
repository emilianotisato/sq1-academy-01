window.addEventListener("load", function () {
  let max = 100;
  let min = 0;
  let playButton = document.getElementById("playButton");
  let feedButton = document.getElementById("feedButton");
  let sleepButton = document.getElementById("sleepButton");
  let hungerStat = document.getElementById("hungerStat");
  let happinessStat = document.getElementById("happinesStat");
  let sleepStat = document.getElementById("sleepStat");
  let energyStat = document.getElementById("energyStat");

  window.updateFrontendStatus = function () {
    hungerStat.textContent = pet.hunger;
    happinessStat.textContent = pet.happiness;
    sleepStat.textContent = pet.sleep;
    energyStat.textContent = pet.energy;
  };

  let updateIsAliveStatus = function () {
    if (
      pet["hunger"] > max ||
      pet["sleep"] > max ||
      pet["energy"] < min ||
      pet["happiness"] < min
    ) {
      pet["isAlive"] = false;
      document.getElementById("hungerchangearrow").classList.replace("bg-green-100","bg-red-100");
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

  window.play = function () {
    pet["happiness"] += 20;
    pet["energy"] -= 10;
    pet["hunger"] += 12;
    pet["sleep"] += 7;

    updateIsAliveStatus();
    updateFrontendStatus();
  };

  window.feed = function () {
    pet["happiness"] -= 12;
    pet["hunger"] -= 20;
    pet["energy"] -= 7;
    pet["sleep"] += 10;

    updateIsAliveStatus();
    updateFrontendStatus();
  };

  window.sleep = function () {
    pet["happiness"] += 7;
    pet["sleep"] -= 20;
    pet["energy"] += 10;
    pet["hunger"] += 12;

    updateIsAliveStatus();
    updateFrontendStatus();
  };
});
