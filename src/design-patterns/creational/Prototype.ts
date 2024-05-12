/**
 * @file Prototype.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

const User = {
  name: "Dushan",
  dateOfBirth: "1994-09-20",
  getAge: function () {
    const now = new Date();
    const dob = new Date(this.dateOfBirth);
    const ageMilliseconds = now.getTime() - dob.getTime();
    const ageDate = new Date(ageMilliseconds); // Milliseconds to date
    return Math.abs(ageDate.getUTCFullYear() - 1970); // Get the year part of the date
  },
};

const dushan = User;

// Copying only the prototype
const malki = Object.create(dushan);

// Copying the prototype with actual properties
const piyumi = Object.create(
  Object.getPrototypeOf(dushan),
  Object.getOwnPropertyDescriptors(dushan)
);

dushan.name = "Test";

console.log(malki.name); // Test
console.log(piyumi.name); // Dushan
