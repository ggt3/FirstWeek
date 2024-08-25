const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: [
    {
      name: "Leo",
      type: "Cat",
    },
    {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"],
    },
  ],
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

// for (let item of adventurer.inventory) {
//   console.log(item);
// }
// adventurer.roll()

class Character {
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.currentHealth = Character.MAX_HEALTH;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result
  }

  updateHealth(damage) {
    this.currentHealth -= damage;
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard", "Gnome"];
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    if (Adventurer.ROLES.indexOf(role) > 0) {
      this.role = role;
    }

    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    this.companion = [];
  }

  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  rest() {
    //if they rest at night they can regen health back to 100%
    this.currentHealth = Character.MAX_HEALTH;
  }

  duel(adventurer) {
    // Subtract 1 from the adventurer with the lower roll.
    // Log the results of this “round” of the duel, including the rolls and current health values.
    // Repeat this process until one of the two adventurers reaches 50 health.
    // Log the winner of the duel: the adventurer still above 50 health.
    while (this.currentHealth > 50 && adventurer.currentHealth > 50) {
      const myRoll = this.roll();
      const theirRoll = adventurer.roll();
      if (myRoll > theirRoll) {
        adventurer.currentHealth--;
        console.log(
          `this winner of this round is ${this.name} with a roll of ${myRoll} and current health ${this.currentHealth}`
        );
        console.log(
          `${adventurer.name} loses with a roll of ${theirRoll} and has ${adventurer.currentHealth} now.`
        );
      } else {
        this.currentHealth--;
        console.log(
          `this winner of this round is ${adventurer.name} with a roll of ${theirRoll} and ${adventurer.currentHealth}HP`
        );
        console.log(
          `${this.name} loses with a roll of ${myRoll} and has ${this.currentHealth}HP now.`
        );
      }
    }
    if (this.currentHealth>50) {
        console.log("Final winner of the duel is "+ this.name);
    } else {
        console.log("Final winner of the duel is "+ adventurer.name);
    }

  }
  addCompanion(...companion) {
    this.companion.push(companion);
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  tellJoke() {
    console.log("Knock Knock");
  }
}

const newRobin = new Adventurer("Robin");
newRobin.inventory.push("sword", "potion", "artifact");
const newComp = new Companion("Leo", "Cat");
const newComp2 = new Companion("Frank", "Flea");
newComp2.inventory = ["small hat", "sunglasses"];
newRobin.addCompanion(newComp, newComp2);
console.log(newRobin);
const me = new Adventurer("me")

me.duel(newRobin)
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin3 = healers.generate("Robin");
