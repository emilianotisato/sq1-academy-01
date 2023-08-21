let printStatus = function () {
  console.warn("Pet Status");
  for (let status in pet) {
    console.log(`${status}: ${pet[status]}`);
  }
};

let int = function () {
  pet["name"] = prompt("What is your pet's name?");
  printStatus();
  console.log("Choices: play, feed, sleep, quit");
};


let promptUser = function() {
  let name = pet["name"]
  let choice = prompt(`What do you want to do with ${name}`);
  while (choice !== "quit") {
    if(!pet['isAlive']) {
      
      console.log(`Your pet ${name} is dead`);
      break;
    }
    if (choice === "play") {
      play();
    } else if (choice === "feed") {
      feed();
    } else if (choice === "sleep") {
      sleep();
    } else {
      console.log("Invalid choice");
    }
    printStatus();
    choice = prompt("What do you want to do?");
  }
}