import HashMap from "./data-structures/HashMap";

function mainFunc(): void {
  console.log("----START-Main Method----");
  const mainHashMap = new HashMap();
  mainHashMap.set("name", "Dushan");
  mainHashMap.set("age", 25);
  mainHashMap.set("city", "Colombo");
  console.log("mainHashMap: ", mainHashMap);
  console.log("mainHashMap.get('name'): ", mainHashMap.get("name"));
  console.log("mainHashMap.get('age'): ", mainHashMap.get("age"));
  console.log("mainHashMap.get('city'): ", mainHashMap.get("city"));
  console.log("-----END-Main Method-----");
}

mainFunc();
