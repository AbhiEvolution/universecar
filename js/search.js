function validateForm() {
  let x = document.forms["form"]["search"].value;

  if (x == "") {
    alert("Please Write something");
    return false;
  } else {
    alert(x + "  is not found!");
    return false;
  }
}
