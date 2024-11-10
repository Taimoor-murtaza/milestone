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
    // Collect Personal Information
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;

    // Collect Education Information
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const graduationYear = (document.getElementById("graduationYear") as HTMLInputElement).value;

    // Collect Work Experience Information
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const duration = (document.getElementById("duration") as HTMLInputElement).value;

    // Collect Skills
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
        <h2>${personalInfo.name}</h2>
        <p><strong>Email:</strong> ${personalInfo.email}</p>
        <p><strong>Phone:</strong> ${personalInfo.phone}</p>
        <p><strong>Address:</strong> ${personalInfo.address}</p>
        
        <h3>Education</h3>
        <p>${education.degree} from ${education.institution} (${education.graduationYear})</p>
        
        <h3>Work Experience</h3>
        <p>${experience.jobTitle} at ${experience.company} (${experience.duration})</p>
        
        <h3>Skills</h3>
        <p>${skillSet.skills.join(", ")}</p>
    `;
    document.getElementById("resumeOutput")!.innerHTML = output;
}
