interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    address?: string;
}

interface Education {
    degree: string;
    institution: string;
    graduationYear: string;
}

interface Experience {
    jobTitle: string;
    company: string;
    duration: string;
}

interface Skill {
    skills: string[];
}

function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const graduationYear = (document.getElementById("graduationYear") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const duration = (document.getElementById("duration") as HTMLInputElement).value;
    const skillsInput = (document.getElementById("skills") as HTMLInputElement).value;
    const skills = skillsInput.split(',').map(skill => skill.trim());

    const personalInfo: PersonalInfo = { name, email, phone, address };
    const education: Education = { degree, institution, graduationYear };
    const experience: Experience = { jobTitle, company, duration };
    const skillSet: Skill = { skills };

    displayResume(personalInfo, education, experience, skillSet);
}

function displayResume(personalInfo: PersonalInfo, education: Education, experience: Experience, skillSet: Skill) {
    const output = `
        <div class="resume-card">
            <h2 contenteditable="true" onblur="updateText(this, 'name')">${personalInfo.name}</h2>
            <p><strong>Email:</strong> <span contenteditable="true" onblur="updateText(this, 'email')">${personalInfo.email}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true" onblur="updateText(this, 'phone')">${personalInfo.phone}</span></p>
            <p><strong>Address:</strong> <span contenteditable="true" onblur="updateText(this, 'address')">${personalInfo.address || "N/A"}</span></p>

            <div class="resume-section">
                <h3>Education</h3>
                <p><span contenteditable="true" onblur="updateText(this, 'degree')">${education.degree}</span> from <span contenteditable="true" onblur="updateText(this, 'institution')">${education.institution}</span> (<span contenteditable="true" onblur="updateText(this, 'graduationYear')">${education.graduationYear}</span>)</p>
            </div>

            <div class="resume-section">
                <h3>Work Experience</h3>
                <p><span contenteditable="true" onblur="updateText(this, 'jobTitle')">${experience.jobTitle}</span> at <span contenteditable="true" onblur="updateText(this, 'company')">${experience.company}</span> (<span contenteditable="true" onblur="updateText(this, 'duration')">${experience.duration}</span>)</p>
            </div>

            <div class="resume-section">
                <h3>Skills</h3>
                <p><span contenteditable="true" onblur="updateText(this, 'skills')">${skillSet.skills.join(", ")}</span></p>
            </div>
        </div>
    `;
    document.getElementById("resumeOutput")!.innerHTML = output;
}

function updateText(element: HTMLElement, fieldName: string) {
    const newValue = element.innerText.trim();
    if (fieldName === "skills") {
        const updatedSkills = newValue.split(",").map(skill => skill.trim());
        (element as HTMLSpanElement).innerText = updatedSkills.join(", ");
    }
}
