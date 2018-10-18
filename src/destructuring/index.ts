interface Customer {
  firstname: string;
  lastname: string;
}

const elon: Customer = {
  firstname: 'Elon',
  lastname: 'Musk'
};

const robert: Customer = {
  firstname: 'Robert',
  lastname: 'Downey Jr.'
};

const { firstname: specialName, lastname } = elon;

console.log(specialName);

const ironMan = { ...elon, ...robert };

//: ReadonlyArray<Customer>
let importantPeople = [elon];
// importantPeople.push(robert);
let otherList = [...importantPeople, robert];
let sorted = [...otherList].sort();