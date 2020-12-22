function bubbleSort(arr: number[]): number[] {
    let length: number = arr.length;
    let count: number = 0;
    for (let i = 0; i < length; i++) { // number of iteration along the array
        for (let j = 0; j < length - 1; j++) { // real item comparion along the array
            count += 1;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

function insertionSort(arr: number[]): number[] {
    let length: number = arr.length;
    for (let i = 1; i < length; i++) {
        let key: number = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};

function selectionSort(arr: number[]): number[] {
    let length: number = arr.length;
    for (let i = 0; i < length; i++) {
        let minValue: number = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[minValue] > arr[j]) {
                minValue = j;
            }
        }

        if (minValue !== i) {
            let temp = arr[i];
            arr[i] = arr[minValue];
            arr[minValue] = temp;
        }
    }
    return arr;
};

function sortingProgram(): void {
    let unSortedArray: number[] = [3, 5, 2, 4, 7, 1, 8, 6];
    let sortedArray1: number[] = bubbleSort(unSortedArray);
    let sortedArray2: number[] = insertionSort(unSortedArray);
    let sortedArray3: number[] = selectionSort(unSortedArray);
    console.log("Bubble Sort", sortedArray1);
    console.log("Insertion Sort", sortedArray2);
    console.log("Selection Sort", sortedArray3);
}

export { sortingProgram };