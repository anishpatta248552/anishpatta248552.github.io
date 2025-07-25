// Function to fetch grade data from the server
function fetchGradeData() {
    console.log("Fetching grade data...");

    // Create a new HTTP request
    let xhr = new XMLHttpRequest();

    // API endpoint for grade data
    let apiRoute = "/api/grades";

    // Handle the response when ready
    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                // Parse the JSON data and populate the gradebook
                populateGradebook(JSON.parse(xhr.responseText));
            } else {
                console.error(`Could not get grades. Status: ${xhr.status}`);
            }
        }
    }.bind(this);

    // Open and send the request
    xhr.open("GET", apiRoute, true);
    xhr.send();
}

// Function to populate the gradebook table with data
function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);

    // Get the gradebook table element
    let tableElem = document.getElementById("gradebook");

    // Clear any existing rows
    tableElem.innerHTML = "";

    // Loop through each assignment and create rows
    data.forEach(function (assignment) {
        let row = document.createElement("tr");

        // First column: full name
        let nameCol = document.createElement("td");
        nameCol.textContent = assignment.last_name + ", " + assignment.first_name;
        row.appendChild(nameCol);

        // Second column: total grade
        let gradeCol = document.createElement("td");
        gradeCol.textContent = assignment.total_grade;
        row.appendChild(gradeCol);

        // Append the row to the table
        tableElem.appendChild(row);
    });
}
