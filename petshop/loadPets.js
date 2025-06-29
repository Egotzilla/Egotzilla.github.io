const pets = [
  { name: "Buddy", type: "Dog", age: 3, img: "./img/dogs/dog01.jpg" },
  { name: "Kitty", type: "Dog", age: 4, img: "./img/dogs/dog02.jpg" },
  { name: "Tommy", type: "Dog", age: 5, img: "./img/dogs/dog03.jpg" },

  { name: "Whiskers", type: "Cat", age: 2, img: "./img/cats/cat01.jpg" },
  { name: "Mittens", type: "Cat", age: 3, img: "./img/cats/cat02.jpg" },
  { name: "Michelin", type: "Cat", age: 4, img: "./img/cats/cat03.jpg" },

  { name: "Kiwi", type: "Bird", age: 7, img: "./img/birds/bird01.jpg" },
  { name: "Nimbus", type: "Bird", age: 5, img: "./img/birds/bird02.jpg" },

  { name: "Churro", type: "Capybara", age: 4, img: "./img/capybaras/capybara01.jpg" },
  { name: "Tofu", type: "Capybara", age: 5, img: "./img/capybaras/capybara02.jpg" }
];

// Old way to load pets into the page
/* 
var ap = document.getElementById("all-pets") // ap is announced variable that gonna have id = "all-pets"

for (let i = 0; i < pets.length; i++) { // for to loop all pet list
  var aPet = ap.appendChild(document.createElement("div")); // var aPet = create div to be child of ap
  aPet.className = "pet"; // give aPet div a class name 'pet'

  // inner to fill html commands in aPet div
  aPet.innerHTML = ` 
    <img src="${pets[i].img}" alt="${pets[i].name}">
    <h3>${pets[i].name}</h3> 
    <p>Type: ${pets[i].type}</p> 
    <p>Age: ${pets[i].age} years</p> 
    <button onclick="adoptPet()">Adopt Now</button>`
};
 */

// Function to load pets into the page but not show them yet
function loadPets() {
  console.log("Loading pets...");
  const petList = $("#pet-list");
  pets.forEach(pet => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name} ">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age}</p>
      <button onclick="adoptPet()">Adopt Now</button>
    `);
    petList.append(petItem);
  });
}

function filterPets() {

  console.log("Selected type:", $("input[name='pet-type']:checked"));
  const types = $("input[name='pet-type']:checked").map(function () {
    return $(this).val();
  }).get();

  console.log("Selected types:", types);

  const filteredPets = pets.filter((pet) => types.includes(pet.type));
  console.log("Filtered pets:", filteredPets);

  const petList = $("#pet-list");
  petList.empty(); // Clear the current pet list

  filteredPets.forEach(pet => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age}</p>
      <button onclick="adoptPet()">Adopt Now</button>
    `);
    petList.append(petItem);
  });
}


// Change every time the pet type is changed by calling filterPets()
$("input[name='pet-type']").change(function () {
  if ($(this).attr('id') === 'type-all' && $(this).is(':checked')) {
    // Uncheck all other checkboxes
    $("input[name='pet-type']").not(this).prop('checked', false);
    loadPets();
  }
  // If any other checkbox is checked
  else if ($(this).is(':checked')) {
    // Uncheck the "All" checkbox
    $("input[id='type-all']").prop('checked', false);
    filterPets();
  } else {
    filterPets();
  }

});

$(document).ready(function() {
  // This will run once when the document is ready
  loadPets();
});

$()