/**
 * @file ConstantTimeHashTable.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2025 - ResearchIt All Rights Reserved.
 */

class ConstantTimeHashTable<K, V> {
    private buckets: Map<number, [K, V][]>; // Array of buckets
    private bucketCount: number;
  
    constructor(bucketCount: number = 10) {
      this.bucketCount = bucketCount;
      this.buckets = new Map();
      for (let i = 0; i < bucketCount; i++) {
        this.buckets.set(i, []);
      }
    }
  
    private hash(key: K): number {
      // Simple hash function (use better ones in production)
      return Math.abs((key as unknown as number) % this.bucketCount);
    }
  
    public set(key: K, value: V): void {
      const index = this.hash(key);
      const bucket = this.buckets.get(index)!;
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value; // Update existing key
          return;
        }
      }
      bucket.push([key, value]); // Add new key-value pair
    }
  
    public get(key: K): V | undefined {
      const index = this.hash(key);
      const bucket = this.buckets.get(index)!;
      for (const [k, v] of bucket) {
        if (k === key) return v;
      }
      return undefined; // Key not found
    }
  
    public delete(key: K): boolean {
      const index = this.hash(key);
      const bucket = this.buckets.get(index)!;
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1); // Remove key-value pair
          return true;
        }
      }
      return false;
    }
  }
  
  // Example usage:
  const hashTable = new ConstantTimeHashTable<string, number>();
  hashTable.set("a", 1);
  hashTable.set("b", 2);
  console.log(hashTable.get("a")); // Output: 1
  console.log(hashTable.get("c")); // Output: undefined
  hashTable.delete("a");
  console.log(hashTable.get("a")); // Output: undefined
  