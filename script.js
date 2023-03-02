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


const form = document.querySelector('form');
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
});