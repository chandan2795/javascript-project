const inputfield = document.getElementById('password');
const outfield = document.getElementById('output');

console.log(inputfield)

inputfield.addEventListener('input', () => {
   console.log(inputfield.value)


   const password = inputfield.value;
   if (password.length < 8) {
      outfield.innerHTML = "password is to short";
      outfield.style.color = "red"

   }
   else {
      outfield.innerHTML = "password is long enough";
      outfield.style.color = "green"

      if (password.search(/[a-z]/) == -1) {
         outfield.innerHTML = "lowercase is missing long enough";
         outfield.style.color = "red"

      } else if (password.search(/[A-Z]/) == -1) {
         outfield.innerHTML = "uppercase is missing long enough";
         outfield.style.color = "red"
      } else if (password.search(/[0-9]/) == -1) {
         outfield.innerHTML = "NUMBER is missing long enough";
         outfield.style.color = "red"
      }
      else {
         outfield.innerHTML = "your password is strong";
         outfield.style.color = "green"

      }

   }
})
