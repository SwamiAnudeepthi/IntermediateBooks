const subjects = ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Business Studies"];

// Populate subjects dropdown
const subjectDropdown = document.getElementById("subjectInput");
subjects.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject.toLowerCase();
    option.textContent = subject;
    subjectDropdown.appendChild(option);
});

// Show sub-options for Chemistry
document.getElementById("subjectInput").addEventListener("change", function() {
    const subjectQuery = this.value.toLowerCase();
    const chemistryOptionsContainer = document.getElementById("chemistryOptionsContainer");

    // Show chemistry sub-options if "chemistry" is selected
    if (subjectQuery === "chemistry") {
        chemistryOptionsContainer.style.display = "block"; // Show sub-options for Chemistry
    } else {
        chemistryOptionsContainer.style.display = "none"; // Hide sub-options for non-Chemistry subjects
    }
});

// Handle the search button click
document.getElementById("searchButton").addEventListener("click", function() {
    const subjectQuery = document.getElementById("subjectInput").value.toLowerCase();
    const bookQuery = document.getElementById("bookInput").value.toLowerCase();
    const classQuery = document.getElementById("classInput").value;

    // Get selected chemistry types (Organic, Inorganic, General)
    const selectedChemistryTypes = [];
    document.querySelectorAll('input[name="chemistryType"]:checked').forEach(function(checkbox) {
        selectedChemistryTypes.push(checkbox.value.toLowerCase());
    });

    // Validate that subject is provided
    if (!subjectQuery) {
        alert("Please select a subject to search.");
        return;
    }

    // If chemistry is selected, validate that at least one chemistry type (Organic, Inorganic, or General) is selected
    if (subjectQuery === "chemistry" && selectedChemistryTypes.length === 0) {
        alert("Please select at least one chemistry type (Organic, Inorganic, or General).");
        return;
    }

    // Construct query parameters for the next page
    const queryParams = new URLSearchParams({
        subject: subjectQuery,
        book: bookQuery,
        class: classQuery,
        chemistryTypes: selectedChemistryTypes.join(",") // Join multiple selected types into a single query string
    });

    // Redirect to results page with the search parameters
    window.location.href = `results.html?${queryParams.toString()}`;
});