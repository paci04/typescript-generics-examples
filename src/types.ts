type Animal<T, U> = {
  size: T;
  name: U;
  makeNoise: () => void;
};

type Bird<T, U> = {
  size: T;
  name: U;
  makeNoise(): () => void;
};

type Size<T, U> = {
  key: T;
  additonalProperty: U;
};

type Fish<T extends Size<U, V>, W, U, V> = {
  size: T;
  name: W;
  makeNoise: () => void;
};

type Movement<T, U, V, W> = {
  medium: T; //legs, wings, belly, combination
  pattern: U; //zigzag, straight, circle, combinations
  speed: V; //fast, 100
  unit: W | 'unit'; //km/s, sound
};

type Insect<
  T extends Movement<A, B, C, D>,
  E extends Size<F, G>,
  H,
  A,
  B,
  C,
  D,
  F,
  G,
> = {
  movement: T;
  size: E;
  name: H;
  makeNoise: () => void;
};

type Raptile<
  MediumType,
  PatternType,
  SpeedType,
  UnitType,
  SizeKeyType,
  SizeAdditionalPropertyType,
  NameType,
> = {
  movement: Movement<MediumType, PatternType, SpeedType, UnitType>;
  size: Size<SizeKeyType, SizeAdditionalPropertyType>;
  name: NameType;
  makeNoise: () => void;
};

type UpwardMovement<
  DirectionType,
  MediumType,
  PatternType,
  SpeedType,
  UnitType,
> = Movement<MediumType, PatternType, SpeedType, UnitType> & {
  direction: DirectionType;
};

type Plant<
  T extends Movement<MediumType, PatternType, SpeedType, UnitType>,
  KeyType,
  AdditionalPropertyType,
  NameType,
  MediumType,
  PatternType,
  SpeedType,
  UnitType,
> = {
  movement: T;
  size: Size<KeyType, AdditionalPropertyType>;
  name: NameType;
  makeNoise: () => void;
};
