"use strict";
{
  let loadInventory = function() {
    let url = "https://5b79be6cfb11c800145362ab.mockapi.io/products";

    fetch(url, {
      method: "GET"
    })
      // a promise will automatically return if the right side of the equals does not have curly braces
      .then(res => res.json())
      .then(json => {
        console.log(json);
        console.log(json[1].productName);

        let table = document.createElement("table");
        table.classList.add("table");

        let tRow = document.createElement("tr");
        let tHeadingId = document.createElement("th");
        let tHeadingProductName = document.createElement("th");
        let tHeadingProductSize = document.createElement("th");
        let tHeadingProductColor = document.createElement("th");
        let tHeadingProductPrice = document.createElement("th");
        let tHeadingAmountAvailable = document.createElement("th");

        tHeadingId.innerText = "ID";
        tHeadingProductName.innerText = "Product Name";
        tHeadingProductSize.innerText = "Size";
        tHeadingProductColor.innerText = "Color";
        tHeadingProductPrice.innerText = "Price";
        tHeadingAmountAvailable.innerText = "Amount Available";

        tRow.appendChild(tHeadingId);
        tRow.appendChild(tHeadingProductName);
        tRow.appendChild(tHeadingProductSize);
        tRow.appendChild(tHeadingProductColor);
        tRow.appendChild(tHeadingProductPrice);
        tRow.appendChild(tHeadingAmountAvailable);

        table.appendChild(tRow);

        for (const j of json) {
          let tRow = document.createElement("tr");
          let tDataId = document.createElement("td");
          let tDataProductName = document.createElement("td");
          let tDataProductSize = document.createElement("td");
          let tDataProductColor = document.createElement("td");
          let tDataProductPrice = document.createElement("td");
          let tDataAmountAvailable = document.createElement("td");

          // console.log(j.productName)
          tDataId.innerText = j.id;
          tDataProductName.innerText = j.productName;
          tDataProductSize.innerText = j.productSize;
          tDataProductColor.innerText = j.productColor;
          tDataProductPrice.innerText = j.productPrice;
          tDataAmountAvailable.innerText = j.productCountAvailable;

          tRow.appendChild(tDataId);
          tRow.appendChild(tDataProductName);
          tRow.appendChild(tDataProductSize);
          tRow.appendChild(tDataProductColor);
          tRow.appendChild(tDataProductPrice);
          tRow.appendChild(tDataAmountAvailable);

          table.appendChild(tRow);
        }
        document.getElementById("inventory").appendChild(table);
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadInventory();

  let deleteInventoryItem = function() {
    let userDeleteInput = document.getElementById("userDeleteInput").value;
    const url = `https://5b79be6cfb11c800145362ab.mockapi.io/products/${userDeleteInput}`;

    fetch(url, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });

    setTimeout(function() {
      document.getElementById("inventory").innerHTML = "";
      loadInventory();
    }, 1000);
  };

  let addInventoryItem = function() {
    let url = "https://5b79be6cfb11c800145362ab.mockapi.io/products";
    let productName = document.getElementById('userAddName').value;
    let productSize = document.getElementById('userAddSize').value;
    let productColor = document.getElementById('userAddColor').value;
    let productPrice = document.getElementById('userAddPrice').value;
    let productCountAvail = document.getElementById('userAddAmountAvail').value;
    
    // Error Checking
    
    
    // Build Data Object
    let data = {
      productName: productName,
      productSize: productSize,
      productColor: productColor,
      productPrice: productPrice,
      productCountAvailable: productCountAvail
    };

    // fetch POST
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    // taking the response and pulling the json data out of it
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });

      setTimeout(function() {
        document.getElementById("inventory").innerHTML = "";
        loadInventory();
      }, 1000);
  };


  let updateInventoryItem = function() {
    let updateItem = document.getElementById('productId').value;  
    let url = `https://5b79be6cfb11c800145362ab.mockapi.io/products/${updateItem}`;
    let productName = document.getElementById('updateName').value;
    let productSize = document.getElementById('updateSize').value;
    let productColor = document.getElementById('updateColor').value;
    let productPrice = document.getElementById('updatePrice').value;
    let productCountAvail = document.getElementById('updateAmountAvail').value;
    
    // Error Checking
    
    
    // Build Data Object
    let data = {
    //   id: updateItem,
      productName: productName,
      productSize: productSize,
      productColor: productColor,
      productPrice: productPrice,
      productCountAvailable: productCountAvail
    };

    // fetch PUT
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    // taking the response and pulling the json data out of it
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });

      setTimeout(function() {
        document.getElementById("inventory").innerHTML = "";
        loadInventory();
      }, 1000);
  };

  document
    .getElementById("addButton")
    .addEventListener("click", addInventoryItem);
  document
    .getElementById("deleteButton")
    .addEventListener("click", deleteInventoryItem);
    document
    .getElementById("updateButton")
    .addEventListener("click", updateInventoryItem);
}
