function generateResume() {
    // Collect Personal Information
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    // Collect Education Information
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationYear = document.getElementById("graduationYear").value;
    // Collect Work Experience Information
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var duration = document.getElementById("duration").value;
    // Collect Skills
    var skillsInput = document.getElementById("skills").value;
    var skills = skillsInput.split(',').map(function (skill) { return skill.trim(); });
    var personalInfo = { name: name, email: email, phone: phone, address: address };
    var education = { degree: degree, institution: institution, graduationYear: graduationYear };
    var experience = { jobTitle: jobTitle, company: company, duration: duration };
    var skillSet = { skills: skills };
    displayResume(personalInfo, education, experience, skillSet);
}
function displayResume(personalInfo, education, experience, skillSet) {
    var output = "\n        <h2>".concat(personalInfo.name, "</h2>\n        <p><strong>Email:</strong> ").concat(personalInfo.email, "</p>\n        <p><strong>Phone:</strong> ").concat(personalInfo.phone, "</p>\n        <p><strong>Address:</strong> ").concat(personalInfo.address, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(education.degree, " from ").concat(education.institution, " (").concat(education.graduationYear, ")</p>\n        \n        <h3>Work Experience</h3>\n        <p>").concat(experience.jobTitle, " at ").concat(experience.company, " (").concat(experience.duration, ")</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skillSet.skills.join(", "), "</p>\n    ");
    document.getElementById("resumeOutput").innerHTML = output;
}
