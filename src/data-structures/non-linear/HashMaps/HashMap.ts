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

class CustomHashMap implements IHashMap {
  private bucket: any[] = new Array(100);

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

  set(key: string, value: any) {
    const index = this.hashCode(key);

    if (!this.bucket[index]) {
      this.bucket[index] = [];
    }
    this.bucket[index].push({ key, value });
  }

  get(key: string) {
      const index = this.hashCode(key);
      
      if (this.bucket[index]) {
          return this.bucket[index].find((item: any) => item.key === key)
      } else {
          throw new Error('Key not found');
      }
  }
  
}

const hashMap = new CustomHashMap();
hashMap.set("name", "Dushan");
hashMap.set("anme", "Malki");
hashMap.set("age", 25);
hashMap.set("city", "Colombo");
console.log("mainHashMap: ", hashMap);
console.log("mainHashMap.get('name'): ", hashMap.get("name"));
console.log("mainHashMap.get('age'): ", hashMap.get("age"));
console.log("mainHashMap.get('city'): ", hashMap.get("city"));