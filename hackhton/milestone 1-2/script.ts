// Select all toggle buttons
const toggleButtons = document.querySelectorAll(".toggle-btn");

// Add event listener to each button
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.getAttribute("data-section") as string;
    const sectionElement = document.querySelector(`.${section}`) as HTMLElement;

    if (sectionElement.style.display === "none") {
      sectionElement.style.display = "block";
      button.textContent = "Hide Section";
    } else {
      sectionElement.style.display = "none";
      button.textContent = "Show Section";
    }
  });
});
