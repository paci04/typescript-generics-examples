console.log('********');

const cow: Animal<number, string> = {
  size: 123,
  name: 'Mr Milk',
  makeNoise() {
    console.log(`I'm ${this.name}, I'm ${this.size} kg`);
  },
};

const lion: Animal<string, string> = {
  size: 'extremly',
  name: 'Mr Roar',
  makeNoise() {
    console.log(`I'm ${this.name}, I'm ${this.size} strong`);
  },
};

const tweety: Bird<string, string> = {
  size: 'small',
  name: 'Mrs Tweet',
  makeNoise(): () => void {
    return () => console.log(`I'm ${this.name}, I'm ${this.size} bird`);
  },
};

const whaleSize: Size<number, string> = {
  key: 1,
  additonalProperty: 'mammal on earth',
};

const whale: Fish<Size<number, string>, string, number, string> = {
  size: whaleSize,
  name: 'Speciman 123',
  makeNoise(): void {
    console.log(
      `I'm ${this.name}, I'm No. ${this.size.key} ${this.size.additonalProperty}`,
    );
  },
};

const shark: Fish<Size<string, string[]>, string, string, string[]> = {
  size: {
    key: 'extremely',
    additonalProperty: ['dolphins', 'human', 'killer whales'],
  },
  name: 'Mr Teeth',
  makeNoise(): void {
    console.log(
      `I'm ${this.name}, I'm ${
        this.size.key
      } scared of ${this.size.additonalProperty.join(', ')}`,
    );
  },
};

const ladyBug: Insect<
  Movement<string[], string[], number, 'unit'>,
  Size<string, string>,
  string,
  string[],
  string[],
  number,
  'unit',
  string,
  string
> = {
  movement: {
    medium: ['wings', 'legs'],
    pattern: ['straight', 'circle'],
    speed: 100,
    unit: 'unit',
  },
  size: {
    key: 'very small',
    additonalProperty: 'not uni gender',
  },
  name: 'Miss Dotty',
  makeNoise(): void {
    console.log(
      `I'm ${this.name}, I'm ${this.size.key} and ${
        this.size.additonalProperty
      }, I move via ${this.movement.medium.join(
        ',',
      )}, in patterns i.e ${this.movement.pattern.join(',')} with speed: ${
        this.movement.speed
      } ${this.movement.unit}`,
    );
  },
};

const croc: Raptile<string, string, number, string, string, string, string> = {
  movement: {
    medium: 'legs',
    pattern: 'zig zag',
    speed: 2,
    unit: 'ft/sec',
  },
  size: {
    key: 'big',
    additonalProperty: 'killer',
  },
  name: 'Crazzy Croc',
  makeNoise(): void {
    console.log(
      `I'm ${this.name}, I'm ${this.size.key} ${this.size.additonalProperty}, I move via ${this.movement.medium}, in patterns ${this.movement.pattern} with speed: ${this.movement.speed} ${this.movement.unit}`,
    );
  },
};

const myPlant: Plant<
  UpwardMovement<string, string, string, number, string>,
  number,
  string,
  string,
  string,
  string,
  number,
  string
> = {
  movement: {
    medium: 'stem',
    pattern: 'spiral',
    speed: 30,
    unit: 'cm/life',
    direction: 'up',
  },
  size: {
    key: 20,
    additonalProperty: 'cm',
  },
  name: 'Rose',
  makeNoise(): void {
    console.log(
      `I'm ${this.name}, I'm ${this.size.key} ${this.size.additonalProperty}, I move via ${this.movement.medium}, in patterns ${this.movement.pattern} with speed: ${this.movement.speed} ${this.movement.unit} in ${this.movement.direction} direction`,
    );
  },
};

cow.makeNoise();
lion.makeNoise();
tweety.makeNoise()();
whale.makeNoise();
shark.makeNoise();
ladyBug.makeNoise();
croc.makeNoise();
myPlant.makeNoise();
console.log('********');
