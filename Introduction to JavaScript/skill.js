let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray; // [ "Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle" ]

let myNewString = myArray.join(',');
myNewString; // "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"

let dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
dogNames.toString(); // Rocket,Flash,Bella,Slugger