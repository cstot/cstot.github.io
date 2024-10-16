let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let input = document.getElementById("inputField");

  regex = /^[a-zA-Z0-9]+$/;

  if (!(regex.test(input.value))) {
    input.setCustomValidity("Input is not alphanumeric");
  }
  else {
    input.setCustomValidity("");
    myForm.submit();
  }

  myForm

})