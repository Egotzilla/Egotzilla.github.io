const pets = [
  { "name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg" },
  { "name": "Kitty", "type": "Dog", "age": 4, "img": "img/dogs/dog02.jpg" },
  { "name": "Tommy", "type": "Dog", "age": 5, "img": "img/dogs/dog03.jpg" },
  { "name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg" },
  { "name": "Mittens", "type": "Cat", "age": 3, "img": "img/cats/cat02.jpg" },
  { "name": "Michelin", "type": "Cat", "age": 4, "img": "img/cats/cat03.jpg" },
  
  { "name": "Kiwi", "type": "Bird", "age": 7, "img": "img/birds/bird01.jpg" },
  { "name": "Nimbus", "type": "Bird", "age": 5, "img": "img/birds/bird02.jpg" },
  { "name": "Churro", "type": "Capybara", "age": 4, "img": "img/capybaras/capybara01.jpg" },
  { "name": "Tofu", "type": "Capybara", "age": 5, "img": "img/capybaras/capybara02.jpg" }
];

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
    <button onclick="adoptPet()">Adopt Now</button>`;
}