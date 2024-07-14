// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Example code to handle adding mock interviews
    const addButton = document.querySelector(".add-button");
    const previousInterviews = document.querySelector(".previous-interviews");

    addButton.addEventListener("click", function() {
        const interviewItem = document.createElement("div");
        interviewItem.classList.add("interview-item");
        interviewItem.textContent = "New Mock Interview";
        previousInterviews.appendChild(interviewItem);
    });
});
