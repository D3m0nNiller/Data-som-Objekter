const students = [
    { name: "Sofie", age: 25, course: "Webduvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknish Designer" }
];

const rootIdDOM = document.querySelector("#root")

students.forEach(function (student) {
    const divElement = document.createElement("div")
    divElement.classList.add("student")
    divElement.textContent =
        // student.name + ', Alder: ' + student.age + ', uddannelse ' + student.course
        `${student.name}, Alder: ${student.age}, uddannelse: ${student.course}`
    rootIdDOM.append(divElement)
})

students.forEach(function(student) {
    const divElement = document.createElement("div");
    divElement.classList.add("student");

    const studentHeadLine = document.createElement("h2");
    studentHeadLine.textContent= student.firstname

    const studentInfo = document.createElement("p");
    studentInfo.textContent = `${student.name}, Alder: ${student.age}, uddannelse: ${student.course}`

    divElement.append(studentHeadLine, studentInfo)
    rootIdDOM.append(divElement)
})