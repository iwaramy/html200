const form = document.createElement('form');
const fields = ['First Name: ', 'Last Name: '];

for (let i = 0; i < fields.length; i++) {
  const label = document.createElement('label');
  label.textContent = fields[i];
  label.setAttribute('for', fields[i]);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');

  const lineBreak = document.createElement('br');

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(lineBreak);
}
const emailLabel = document.createElement('label');
emailLabel.textContent = 'E-mail: ';
emailLabel.setAttribute('for', 'email');
form.appendChild(emailLabel);

const input = document.createElement('input');
input.setAttribute('type', 'email');
form.appendChild(input);

const emailBreak = document.createElement('br');
form.appendChild(emailBreak);

const label = document.createElement('label');
label.textContent = 'Message: ';
label.setAttribute('for', 'message');
form.appendChild(label);

const textArea = document.createElement('textArea');
textArea.setAttribute('type', 'textArea');
textArea.setAttribute('rows', '9');
textArea.setAttribute('column', '5');
form.appendChild(textArea);

const lineBreak = document.createElement('br');
form.appendChild(lineBreak);

let formContainer = document.querySelector('.form-container');

console.log(form);

form.elements[0].setAttribute("required", "true");
form.elements[1].setAttribute("required", "true");
form.elements[2].setAttribute("required", "true");
form.elements[3].setAttribute("required", "true");


const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Your submission has been received!"

 + form.elements[3].value);
  location.reload();
});

formContainer.appendChild(form);
