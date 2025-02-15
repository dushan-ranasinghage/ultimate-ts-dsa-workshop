/**
 * @file HashMap.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

interface IHashMap {
  readonly size: number;
  get: (key: string) => any;
  set: (key: string, value: any) => void;
}

type Item = {
  key: string;
  value: any;
};

class HashMap implements IHashMap {
  private bucket: Item[] = [];

  _size: number;

  private hashCode(key: string): number {
    let hash: number = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.bucket.length;
  }

  get size(): number {
    return this._size;
  }

  get(key: string) {}

  set(key: string, value: any): void {}
}

const mainHashMap = new HashMap();
mainHashMap.set("name", "Dushan");
mainHashMap.set("age", 25);
mainHashMap.set("city", "Colombo");
console.log("mainHashMap: ", mainHashMap);
console.log("mainHashMap.get('name'): ", mainHashMap.get("name"));
console.log("mainHashMap.get('age'): ", mainHashMap.get("age"));
console.log("mainHashMap.get('city'): ", mainHashMap.get("city"));