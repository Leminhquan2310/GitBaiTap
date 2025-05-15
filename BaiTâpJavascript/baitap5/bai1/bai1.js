let physicsScore = parseInt(prompt("Enter physics score"));
let biologicalScore = parseInt(prompt("Enter biological score"));
let chemistryScore = parseInt(prompt("Enter chemistry score"));

let average = (physicsScore + biologicalScore + chemistryScore) / 3;

document.write("average: " + average);
