/**
 * @file Builder.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

type TEngine = "V6" | "V8" | "V12";

interface ICar {
  brand: string;
  maxSpeed: number;
  readonly engine: TEngine;
}

class Car implements ICar {
  private _engine: TEngine;

  brand: string;

  maxSpeed: number;

  constructor(brand?: string, maxSpeed?: number, engine?: TEngine) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this._engine = engine;
  }

  get engine(): TEngine {
    return this._engine;
  }

  set engine(engineType: TEngine) {
    this._engine = engineType;
  }
}

class CarBuilder {
  private _car: Car;

  constructor(car: Car) {
    this._car = car;
  }

  addEngine(engineType: TEngine): CarBuilder {
    this._car.engine = engineType;
    return this;
  }

  addMaxSpeed(maxSpeed: number): CarBuilder {
    this._car.maxSpeed = maxSpeed;
    return this;
  }

  addBrand(brand: string): CarBuilder {
    this._car.brand = brand;
    return this;
  }

  build() {
    return this._car;
  }
}

export { CarBuilder, Car };

// USAGE

const car = new Car();
const carBuilder = new CarBuilder(car);

carBuilder.addBrand("BMW").addMaxSpeed(220).addEngine("V6").build();

console.log("car", car);
