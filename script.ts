// Get all the input elements from the form
 const form=document.getElementById('resumeform') as HTMLFormElement;
 const resumeoutputelement= document.getElementById('resume-output') as HTMLDivElement;
//   handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); //prevent page reload
const nameInput = (document.getElementById('name') as HTMLInputElement).value
const emailInput = (document.getElementById('email') as HTMLInputElement).value;
const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
const educationInput = (document.getElementById('education') as HTMLTextAreaElement).value;
const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement).value;
const experienceInput = (document.getElementById('experience') as HTMLTextAreaElement).value;


//crate resume output
const resumeHTML = `
<h2>Editable Personal Information</h2>
<p><b>Name:</b><span contenteditable = "true">${nameInput}</span></p>
<p><b>Email:</b><span contenteditable = "true">${emailInput}</span></p>
<p><b>Phone:</b><span contenteditable = "true">${phoneInput}</span></p>
<h3>Education</h3>
<p contenteditable = "true">${educationInput}</p>
<h3>Experience</h3>
<p contenteditable = "true">${experienceInput}</p>
<h3>Skills</h3>
<p contenteditable = "true">${skillsInput}</p>
`;
const resumeoutputelement = document.getElementById('resume-output')
if(resumeoutputelement){
    resumeoutputelement.innerHTML = resumeHTML
    }else{
        console.error("The resume output elements are missing");
    }

})
