function sum(num: number): number {
    if (num > 0) {
        return num + sum(num - 1);
    } else {
        return num;
    }
}

function factorial(num: number): number {
    if (num > 2) {
        return num * factorial(num - 1);
    } else {
        return num * 1;
    }
}

function evenNumberSum(num: number): number {
    let evenSum = 0;
    for (let i = 1; i < num + 1; i++) {
        if (i % 2 === 0) {
            evenSum = evenSum + i;
        }
    }
    return evenSum;
}

function oddNumberSum(num: number): number {
    let oddSum = 0;
    for (let i = 1; i < num + 1; i++) {
        if (i % 2 === 0) {
            oddSum = oddSum + 0;
        } else {
            oddSum = oddSum + i;
        }
    }
    return oddSum;
}

function fibonaciiSeries(num: number): number[] {
    let series: number[] = [];
    let firstNum: number = 0;
    let secondNum: number = 1;
    series.push(firstNum);
    series.push(secondNum);

    for (let i = 0; i < num - 2; i++) {
        series.push(series[i] + series[i + 1]);
    }

    return series;
}

function squareSeries(num: number): number[] {
    let series: number[] = [];

    for (let i = 1; i < num + 1; i++) {
        series.push(i * i);
    }

    return series;
}

function triangleSeries(num: number): number[] {
    let series: number[] = [];

    for (let i = 1; i < num + 1; i++) {
        let sum: number = 0;
        for (let j = i; j > 0; j--) {
            sum = sum + (j - 1);
        }
        series.push(sum);
    }

    return series;
}

function cubeSeries(num: number): number[] {
    let series: number[] = [];

    for (let i = 1; i < num + 1; i++) {
        console.log(i * i * i);
    }

    return series;
}

function primeSeries(num: number): number[] {
    let series: number[] = [];
    for (let i = 2; i < num + 1; i++) {
        let isPrime: boolean = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                continue;
            }
        }

        if (isPrime) {
            series.push(i);
        }
    }
    return series;
}

function numberSeriesProgram(): void {
    console.log("Total Sum", sum(6));
    console.log("Factorial", factorial(3));
    console.log("Even Numbers", evenNumberSum(10));
    console.log("Odd Numbers", oddNumberSum(10));
    console.log("Fibonacii Series", fibonaciiSeries(10));
    console.log("Square Series", squareSeries(10));
    console.log("Triangle Series", triangleSeries(10));
    console.log("Cube Series", cubeSeries(10));
    console.log("Prime Series", primeSeries(100));
}

export { numberSeriesProgram };