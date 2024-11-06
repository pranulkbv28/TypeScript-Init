type Food = string;

let favoriteFood: Food = "Pizza";

type Address = {
  street: string;
  city: string;
  pincode: number;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // optional
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "ABC",
    city: "Delhi",
    pincode: 1234,
    country: "India",
  },
};

let person2: Person = {
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
