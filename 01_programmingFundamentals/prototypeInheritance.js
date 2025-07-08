// everything in JavaScript is an object, and every object has a prototype
// the prototype is an object that is used as a template for creating new objects

const p1 = {
  name: 'John',
  age: 30,
  getFullDetails: function() {
    return `${this.name} and ${this.age}`
  }
}

console.log(p1.getFullDetails())

// basic example
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}

// Add method using prototype
Car.prototype.getDetails = function () {
  return `${this.brand} - ${this.year}`;
};

const car1 = new Car("Honda", 2020);
console.log(car1.getDetails());
