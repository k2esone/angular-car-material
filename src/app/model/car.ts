export enum CarManufacturer {
  BMW = 'BMW',
  MERCEDES = 'Mercedes',
  LEXUS = 'Lexus',
  VW = 'Volkswagen',
  MAZDA = 'Mazda',
  OPEL = 'Opel',
  FORD = 'Ford',
}

export type Car = {
  id: number,
  name: string,
  manufacturer: CarManufacturer|undefined,
  model: string,
  engineCapacity: number, // pojemność silnika, np. 1.6
}

export const CAR_FORM_DEFAULT_VALUES = {
  id: 1,
  name: '',
  manufacturer: undefined,
  model: '',
  engineCapacity: 0.594, // pojemność silnika, np. 1.6
}
