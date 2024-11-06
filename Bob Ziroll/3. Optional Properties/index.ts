let person3: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
}; // here, as you can see, the address property is optional

let person4: Person = {
  name: "Joe",
  age: 42,
  isStudent: false,
  address: {
    street: "DEF",
    city: "Bengaluru",
    pincode: 5678,
    country: "India",
  },
};

function displayinfo(person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayinfo(person3);
