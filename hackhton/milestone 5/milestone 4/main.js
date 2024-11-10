function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationYear = document.getElementById("graduationYear").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var duration = document.getElementById("duration").value;
    var skillsInput = document.getElementById("skills").value;
    var skills = skillsInput.split(',').map(function (skill) { return skill.trim(); });
    var personalInfo = { name: name, email: email, phone: phone, address: address };
    var education = { degree: degree, institution: institution, graduationYear: graduationYear };
    var experience = { jobTitle: jobTitle, company: company, duration: duration };
    var skillSet = { skills: skills };
    displayResume(personalInfo, education, experience, skillSet);
}
function displayResume(personalInfo, education, experience, skillSet) {
    var output = "\n        <div class=\"resume-card\">\n            <h2 contenteditable=\"true\" onblur=\"updateText(this, 'name')\">".concat(personalInfo.name, "</h2>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" onblur=\"updateText(this, 'email')\">").concat(personalInfo.email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\" onblur=\"updateText(this, 'phone')\">").concat(personalInfo.phone, "</span></p>\n            <p><strong>Address:</strong> <span contenteditable=\"true\" onblur=\"updateText(this, 'address')\">").concat(personalInfo.address || "N/A", "</span></p>\n\n            <div class=\"resume-section\">\n                <h3>Education</h3>\n                <p><span contenteditable=\"true\" onblur=\"updateText(this, 'degree')\">").concat(education.degree, "</span> from <span contenteditable=\"true\" onblur=\"updateText(this, 'institution')\">").concat(education.institution, "</span> (<span contenteditable=\"true\" onblur=\"updateText(this, 'graduationYear')\">").concat(education.graduationYear, "</span>)</p>\n            </div>\n\n            <div class=\"resume-section\">\n                <h3>Work Experience</h3>\n                <p><span contenteditable=\"true\" onblur=\"updateText(this, 'jobTitle')\">").concat(experience.jobTitle, "</span> at <span contenteditable=\"true\" onblur=\"updateText(this, 'company')\">").concat(experience.company, "</span> (<span contenteditable=\"true\" onblur=\"updateText(this, 'duration')\">").concat(experience.duration, "</span>)</p>\n            </div>\n\n            <div class=\"resume-section\">\n                <h3>Skills</h3>\n                <p><span contenteditable=\"true\" onblur=\"updateText(this, 'skills')\">").concat(skillSet.skills.join(", "), "</span></p>\n            </div>\n        </div>\n    ");
    document.getElementById("resumeOutput").innerHTML = output;
}
function updateText(element, fieldName) {
    var newValue = element.innerText.trim();
    if (fieldName === "skills") {
        var updatedSkills = newValue.split(",").map(function (skill) { return skill.trim(); });
        element.innerText = updatedSkills.join(", ");
    }
}
