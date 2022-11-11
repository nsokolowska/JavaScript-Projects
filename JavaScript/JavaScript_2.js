function validateForm() {
    let a= document.forms["myForm"]["First_name"].value;
    if (a == "") {
      alert("First name must be filled out");
      return false;
    }
    let a = document.forms["myForm"]["Surname"].value;
    if (b == "") {
      alert("Surname must be filled out");
      return false;
    }
    let c = document.forms["myForm"]["E-mail_address"].value;
    if (xc== "") {
      alert("E-mail address must be filled out");
      return false;
    }
    let d = document.forms["myForm"]["message"].value;
    if (d == "") {
      alert("Message must be filled out");
      return false;
    }
  }