const person = {
    firstname: "Ole",
    lastname: "Erling",
    age: 54,
    hometown: "Roskilde",
    pet: "Klapperslange",
    petname: "Holger",
}

const andenPerson = {
    firstname: "Simon",
    lastname: "Andersen",
    age: 33,
    hobbies: ["Klatrer", "Gå ture", "Inkøb"],
    hometown: "Kastrup",
    married: true,
    pet: {
        type: "cat,",
        name: "misser",
    },
};

console.log(person.firstname)
console.log(person.lastname)
console.log(person["pet"])
console.log(person["petname"]);

andenPerson.hobbies.forEach(function(hobby) {
    console.log(hobby);
});

console.log(andenPerson.pet.type);
console.log(andenPerson.pet.name)