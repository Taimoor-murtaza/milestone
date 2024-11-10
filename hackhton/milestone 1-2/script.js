// Select all toggle buttons
var toggleButtons = document.querySelectorAll(".toggle-btn");
// Add event listener to each button
toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var section = button.getAttribute("data-section");
        var sectionElement = document.querySelector(".".concat(section));
        if (sectionElement.style.display === "none") {
            sectionElement.style.display = "block";
            button.textContent = "Hide Section";
        }
        else {
            sectionElement.style.display = "none";
            button.textContent = "Show Section";
        }
    });
});
