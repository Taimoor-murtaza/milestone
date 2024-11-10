// Function to generate and display the resume content
function generateResume(): void {
    const username = (document.getElementById("username") as HTMLInputElement).value.trim();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;

    if (!username) {
        displayMessage("Please enter a username to create a unique URL.", "error");
        return;
    }

    // Populate the resume content area
    const resumeContent = `
        <div class="resume-card">
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address || "N/A"}</p>
        </div>
    `;
    (document.getElementById("resumeContent") as HTMLElement).innerHTML = resumeContent;

    // Generate the shareable link
    generateShareableLink(username);
}

// Function to generate a shareable link
function generateShareableLink(username: string): void {
    const baseURL = "https://username.vercel.app/resume";
    const shareableURL = `${baseURL}/${encodeURIComponent(username)}`;
    const linkElement = document.getElementById("shareableLink") as HTMLElement;
    linkElement.innerHTML = `Shareable Link: <a href="${shareableURL}" target="_blank">${shareableURL}</a>`;
    linkElement.dataset.url = shareableURL;
}

// Function to copy the shareable link
function copyLink(): void {
    const shareableURL = (document.getElementById("shareableLink") as HTMLElement).dataset.url;
    if (shareableURL) {
        navigator.clipboard.writeText(shareableURL).then(() => {
            displayMessage("Link copied to clipboard!", "success");
        }).catch(() => {
            displayMessage("Failed to copy link.", "error");
        });
    }
}

// Function to download the resume as a PDF

function downloadPDF(): void {
    const element = document.getElementById("resumeContent");
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
            .then(() => displayMessage("PDF downloaded successfully!", "success"))
            .catch(() => displayMessage("Failed to download PDF.", "error"));
    }
}

// Function to display messages to the user
function displayMessage(message: string, type: "success" | "error"): void {
    const confirmationElement = document.getElementById("confirmationMessage") as HTMLElement;
    confirmationElement.textContent = message;
    confirmationElement.className = type;
    setTimeout(() => {
        confirmationElement.textContent = "";
        confirmationElement.className = "";
    }, 3000);
}
