let myArray = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];

// Add your code here
let myString = myArray.pop(); // [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat" ]

myArray.push("Akash", "Jane"); // [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Akash", "Jane" ]

let arrayLength = myArray.length; // 9

for (let i = 0; i < arrayLength; i++) {
    let breaker = myArray[i].split(",");
    breaker
    let name = breaker[0];
    name
    let index = breaker[2];
    index
    let finalArray = name + "-" + index;
    finalArray
    let list = finalArray.toString;
    list
}