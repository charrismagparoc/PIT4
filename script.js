document.addEventListener("DOMContentLoaded", function () {
    fetch("https://charrismagparoc.github.io/json.github.io/courses.json")
        .then(response => response.json())
        .then(data => displayCourses(data.courses))
        .catch(error => console.error("Error fetching JSON:", error));
});

function displayCourses(courses) {
    const container = document.getElementById("courses-container");
    container.innerHTML = ""; // Clear previous content

    courses.forEach(course => {
        let courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `
            <p><strong>Year_Level:</strong> ${course.year_level} Year</p>
            <p><strong>Sem:</strong> ${course.sem} Semester</p>
            <p><strong>Subject Code:</strong> ${course.code}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Credits:</strong> ${course.credit}</p>
        `;
        container.appendChild(courseCard);
    });
}
