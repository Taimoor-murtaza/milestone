// Function to generate and display the resume content
function generateResume() {
    var username = document.getElementById("username").value.trim();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    if (!username) {
        displayMessage("Please enter a username to create a unique URL.", "error");
        return;
    }
    // Populate the resume content area
    var resumeContent = "\n        <div class=\"resume-card\">\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address || "N/A", "</p>\n        </div>\n    ");
    document.getElementById("resumeContent").innerHTML = resumeContent;
    // Generate the shareable link
    generateShareableLink(username);
}
// Function to generate a shareable link
function generateShareableLink(username) {
    var baseURL = "https://username.vercel.app/resume";
    var shareableURL = "".concat(baseURL, "/").concat(encodeURIComponent(username));
    var linkElement = document.getElementById("shareableLink");
    linkElement.innerHTML = "Shareable Link: <a href=\"".concat(shareableURL, "\" target=\"_blank\">").concat(shareableURL, "</a>");
    linkElement.dataset.url = shareableURL;
}
// Function to copy the shareable link
function copyLink() {
    var shareableURL = document.getElementById("shareableLink").dataset.url;
    if (shareableURL) {
        navigator.clipboard.writeText(shareableURL).then(function () {
            displayMessage("Link copied to clipboard!", "success");
        }).catch(function () {
            displayMessage("Failed to copy link.", "error");
        });
    }
}
// Function to download the resume as a PDF
function downloadPDF() {
    var element = document.getElementById("resumeContent");
    if (element) {
        html2pdf()
            .set({
            margin: 1,
            filename: 'Resume.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
            .from(element)
            .save()
            .then(function () { return displayMessage("PDF downloaded successfully!", "success"); })
            .catch(function () { return displayMessage("Failed to download PDF.", "error"); });
    }
}
// Function to display messages to the user
function displayMessage(message, type) {
    var confirmationElement = document.getElementById("confirmationMessage");
    confirmationElement.textContent = message;
    confirmationElement.className = type;
    setTimeout(function () {
        confirmationElement.textContent = "";
        confirmationElement.className = "";
    }, 3000);
}
