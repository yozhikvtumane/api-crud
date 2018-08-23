"use strict";
{
  // console.log("working")

  document
    .getElementById("validateInput")
    .addEventListener("click", validateInput);

  // document.getElementById('globalSearch').addEventListener('keypress', validateInput);

  function validateInput() {
    let phoneNumber = RegExp(
      "^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$",
      "g"
    );

    let email;
    let name;
    let upc;
    let sku;
    let productStyle;
    let pfid;
    let twoWordswSpace;
    let userInput;
    let results = document.getElementById("results");

    userInput = document.getElementById("globalSearch").value;

    if (userInput.length >= 10 && phoneNumber.test(userInput)) {
      console.log("in if statement");
      results.innerText = "phone number";
    } else if (true) {

    }

  }
}
