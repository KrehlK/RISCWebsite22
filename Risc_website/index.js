var password = "Risc90388547";
var login_attempts = 3;

// function passcheck() {
//   if(document.getElementById('pass1').value != password){
//     alert('Wrong Password, Try again.');
//     return false;
//   }

//   if(document.getElementById('pass1').value == password) {
//     alert('Correct Password. Click OK to enter webpage')
//   }
// }

function check_form() {
  var pass = document.getElementById("pass").value;
  if(!/[A-Za-z0-9]{8,}/.test(pass)){
      login_attempts = login_attempts - 1;
      alert("Login Failed Now Only " + login_attempts + " Login Attempts Available");
  }

  if (pass === password) {
    alert("SuccessFully Logged In");
    document.getElementById("pass").value = "";
  }
  else {
    if (login_attempts == 0) {
      alert("No Login Attempts Available");
      return false
    }
    else {
      login_attempts = login_attempts - 1;
      alert("Login Failed Now Only " + login_attempts + " Login Attempts Available");
      if (login_attempts == 0) {
        document.getElementById("pass").disabled = true;
        document.getElementById("form1").disabled = true;
      }

      return false;
    }
  }

  return false;
}	
