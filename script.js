// Get all the input elements from the form
var form = document.getElementById('resumeform');
var resumeoutputelement = document.getElementById('resume-output');
//   handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var phoneInput = document.getElementById('phone').value;
    var educationInput = document.getElementById('education').value;
    var skillsInput = document.getElementById('skills').value;
    var experienceInput = document.getElementById('experience').value;
    //crate resume output
    var resumeHTML = "\n<h2>Editable Personal Information</h2>\n<p><b>Name:</b><span contenteditable = \"true\">".concat(nameInput, "</span></p>\n<p><b>Email:</b><span contenteditable = \"true\">").concat(emailInput, "</span></p>\n<p><b>Phone:</b><span contenteditable = \"true\">").concat(phoneInput, "</span></p>\n<h3>Education</h3>\n<p contenteditable = \"true\">").concat(educationInput, "</p>\n<h3>Experience</h3>\n<p contenteditable = \"true\">").concat(experienceInput, "</p>\n<h3>Skills</h3>\n<p contenteditable = \"true\">").concat(skillsInput, "</p>\n");
    var resumeoutputelement = document.getElementById('resume-output');
    if (resumeoutputelement) {
        resumeoutputelement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume output elements are missing");
    }
});
