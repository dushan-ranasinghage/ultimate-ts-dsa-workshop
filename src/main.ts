import { testProgram } from "./testProgram";
import { arrayHelpers } from "./arrayHelpers";
import { sortingProgram } from "./sorting";
import { searchingProgram } from "./searching";
import { numberSeriesProgram } from "./numberSeries";

function mainFunc(): void {
  console.log("----START-Main Method----");
  // testProgram();
  arrayHelpers();
  // sortingProgram();
  // searchingProgram();
  // numberSeriesProgram();
  console.log("-----END-Main Method-----");
}

mainFunc();
