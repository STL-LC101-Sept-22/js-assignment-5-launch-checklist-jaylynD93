// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    console.log(imageUrl)
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <img src=${imageUrl}>
            <ol class="Mission_Destination_List">
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
`}

function validateInput(testInput) {
   let inputNumber = Number(testInput)
   if (testInput === "")
   {
    return "Empty";
   }
   else if (isNaN(inputNumber)){
    return "Not a Number";
   }else if (!isNaN(inputNumber))
   return "Is a Number"
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let copilotStatus = document.getElementById("copilotStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");


console.log(fuelLevel);
console.log(cargoLevel);
//    let fuelLevel = fuelLevel;
//    let cargoLevel = cargoLevel;

   if (validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" || validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"){
    alert("Please fill out ALL fields");
   }else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
    alert("Please enter a valid NUMBER for fuel and cargo mass");
   }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
    alert("Please enter a valid NAME for Pilot and Co Pilot");
   }  else {
    list.style.visibility = "visible";

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let launchStatus = document.getElementById("launchStatus");
    if (fuelLevel < 10000 && cargoLevel <= 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'rgb(199, 37, 78)';
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'rgb(65, 159, 106)';
    }
}



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;s
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];

}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
