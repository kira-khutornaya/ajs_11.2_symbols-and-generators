class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

const team = new Team();
team.addAll({
  name: 'Ivan',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
},
{
  name: 'Anna',
  type: 'Magician',
  health: 100,
  level: 2,
  attack: 45,
  defence: 12,
},
{
  name: 'Maxim',
  type: 'Bowman',
  health: 89,
  level: 1,
  attack: 40,
  defence: 10,
});

const generator = team[Symbol.iterator]();
for (const value of generator) {
  console.log(value);
}
