function linearSearch(arr: number[], findValue: number): number {
    let length: number = arr.length;
    let foundIndex: number = -1;
    for (let i = 0; i < length; i++) {
        if (arr[i] === findValue) {
            foundIndex = i;
        }
    }
    return foundIndex;
}

function binarySearch(arr: number[], left: number, right: number, findValue: number): number {
    // console.log(arr, left, right, findValue);
    if (right >= left) {
        let mid: number = Math.round(left + (right - left) / 2);

        if (arr[mid] === findValue) {
            return mid;
        }

        if (arr[mid] > findValue) {
            return binarySearch(arr, left, mid - 1, findValue);

        }

        return binarySearch(arr, mid + 1, right, findValue);
    }
}

function searchingProgram(): void {
    // let foundIndex: number = linearSearch([7, 6, 5, 4, 3, 2, 1], 5);
    // let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    // let length: number = array.length;
    // let foundIndex: number = binarySearch(array, 0, length - 1, 2);
    // console.log(foundIndex);
}

export { searchingProgram };