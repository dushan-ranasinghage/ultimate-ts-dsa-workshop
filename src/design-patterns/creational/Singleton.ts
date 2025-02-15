/**
 * @file Singleton.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

interface IDatabase {
  getDBName: () => string;
  setDBName: (name: string) => void;
}

class Database implements IDatabase {
  private static isExist: boolean = false;

  private static instance: Database;

  private name: string;

  constructor(name: string) {
    if (Database.isExist) {
      return Database.instance;
    } else {
      this.name = name;
      Database.isExist = true;
      Database.instance = this;
    }
  }

  getDBName(): string {
    return this.name;
  }

  setDBName(name: string): void {
    this.name = name;
  }
}

export { Database };

// USAGE

const db1 = new Database("db1");
const db2 = new Database("db2");
const db3 = new Database("db3");

console.log(db1.getDBName()); // db1
console.log(db2.getDBName()); // db1
console.log(db3.getDBName()); // db1
