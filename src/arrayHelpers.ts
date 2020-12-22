function arrayHelpers(): void {
    let arr: number[] = [5, 3, 1, 9, 4, 7, 6];

    let arr1: number[] = arr.map(i => i * 2);
    let sum: number = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let num1: number[] = arr.filter(i => i > 3);
    let num2: number[] = arr.filter(i => {
        if (i > 3) {
            return i;
        }
    });
    let num3: number = arr.find(i => i === 3);
    let isFind: boolean = arr.includes(3);
    let isActive1: boolean = arr.some(i => i === 3);
    let isActive2: boolean = arr.every(i => i === 3);

    console.log("Array * 2", arr1);
    console.log("SUM of all numbers in array", sum);
    console.log("Numbers greater than 3", num1);
    console.log("Numbers greater than 3", num2);
    console.log("Find 3 from the array", num3);
    console.log("Is 3 in the array?", isFind);
    console.log("At least have 3 in array", isActive1);
    console.log("Everyitem matches to 3 in array", isActive2);
}

export { arrayHelpers };