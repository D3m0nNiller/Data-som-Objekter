const students = [
    { name: "Sofie", age: 25, course: "Webduvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknish Designer" }
];

const rootIdDOM = document.querySelector("#root")

students.forEach(function (student) {
    const divElement = document.createElement("div")
    divElement.textContent =
        student.name + ', Alder: ' + student.age + ', uddannelse ' + student.course
    rootIdDOM.append(divElement)
})