function submitForm() {
  let formElement = document.querySelector('form');
  console.log(formElement);

  var x = document.getElementById('form');
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
  txt = txt + x.elements[i].value;
}
document.getElementById('form').innerHTML = txt;
