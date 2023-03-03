const submit_button= document.querySelector(".button");
submit_button.onClick = (e)=>{
        e.preventDefault();
    //input data rcv
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    const cpass=document.getElementById("cpass").value;

//store data in web browser

localStorage.setItem('FirstName',fname);
localStorage.setItem('FirstName',lname);
localStorage.setItem('Email',email);
localStorage.setItem('Password',pass);
localStorage.setItem('Cpassword',cpass);

//condition

if(fname == "" && lname =="" && email =="" && pass == "" && cpass == ""){

    swal("Opps...!", "Input field must be fill.", "error");
}
else{
    if(pass != cpass){
        swal("Opps...!", "Password not matching.", "error");

    }
    else{
        swal("Good job!", "registration successful!", "success");
    }
}
}


/*const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (username.value === '' || password.value === '') {
    alert('Please enter a username and password.');
  } else {
    // Send form data to server for verification
    console.log('Submitting form...');
  }
});*/


var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
