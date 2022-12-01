class Animal {
	constructor(species, legs, name) {
		this.species = species;
		this.legs = legs;
		this.name = name;
	}

	identify() {
		console.log(`This animal is a ${this.species}, and has ${this.legs} legs.`);
	}

	fetch() {
		console.log("I don't want to fetch.");
	}
}

class Dog extends Animal {
	constructor(name) {
		super('dog', 4); // a dog has 4 legs
		this.name = name;
	}

	bark() {
		console.log('Woof!');
	}

	fetch(item) {
		console.log(`${this.species} is fetching a ${item}`);
	}

	call(name) {
		name === this.name
			? console.log(`Yes, this is ${name}`)
			: console.log(`No, this is not ${name}`);
	}
}

class Cat extends Animal {
	constructor(name) {
		super('cat', 4);
		this.name = name;
	}

	meow() {
		console.log('Meow!');
	}

	scratch(item) {
		console.log(`${this.species} ${this.name} is scratching a ${item}`);
	}

	call(name) {
		console.log(`${this.name} is ignoring you.`);
	}
}

const human = new Animal('human', 2, 'Siva');
human.identify();
// human.bark();    // gives error
human.fetch();
console.log(human.name);

const dog = new Dog('Baba');
dog.bark();
console.log(dog.legs);
dog.identify();
dog.fetch('ball');
console.log(dog.name);
dog.call('Baba');
dog.call('Henk');

const cat = new Cat('Dino');
cat.meow();
cat.call('Garfield');
cat.scratch('pole');
