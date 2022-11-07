export function drawRandomElement<Type>(arr: Type[]): Type {
  return arr.at(Math.floor(Math.random() * arr.length))!;
}

export function drawRandomNum(min: number = 0, max: number = 1): number {
  return Math.floor(Math.random() * max + min);
}
