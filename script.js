// Write your JavaScript code here!

window.addEventListener("load", function() {
    let destination;
    const form = document.getElementById('launchForm');
    let listedPlanets;

let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden"
    function FormSubmit(event) {
          event.preventDefault();
               let pilotNameInput = document.querySelector("input[name=pilotName]");
               let pilot = pilotNameInput.value;

               let copilotNameInput = document.querySelector("input[name=copilotName]");
               let copilot = copilotNameInput.value;

               let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
               let fuelLevel = fuelLevelInput.value;

               let cargoMassInput = document.querySelector("input[name=cargoMass]");
               let cargoLevel = cargoMassInput.value;
        formSubmission(document, list, pilot,copilot,fuelLevel,cargoLevel )
    }

    form.addEventListener('submit', FormSubmit);


    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        destination = pickPlanet(listedPlanets)
        addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.image)
    })

});