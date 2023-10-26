// erased repetive, go back to rebecca's dry out code youtube, template literal instead of multiple lines of code
// create function for a person, and apply to all. reach image(border), let statements

let customerContainer = document.querySelector('.container');
// let customer = customers[0]   //replace
custom(customers);


let customerEmail = document.createElement('div')
customerContainer.appendChild(customerCard);

let customerAddress = document.createElement('div')
customerContainer.appendChild(customerCard);

let customerDob = document.createElement('div')
    customerContainer.appendChild(customerCard);




// let cus
function custom(customers){  //when rid of line 5 chanage customer to (s) after adding for loop to apply to all
  //put for loop here, for customers
   for (customer in customers) {
console.log(customer);    customerContainer.appendChild(customerCard);

   
    let customerCard = document.createElement("div")
   customerContainer.appendChild(customerCard);

//    let customerEmail = document.createElement('div')
//    customerContainer.appendChild(customerCard);

    // let customerAddress = document.createElement('div')
    // customerContainer.appendChild(customerCard);

    // let customerLocation = document.createElement('div')
    // customerContainer.appendChild(customerCard);

    // let customerDob = document.createElement('div')
    // customerContainer.appendChild(customerCard);

    // let customerEst = document.createElement('div')
    // customerContainer.appendChild(customerCard);


   let customerName = document.createElement("h3")
   customerName.innerText = `${customer.name.first} ${customer.name.last}`
   customerCard.appendChild(customerName)

   
    // return `<div class= "customPro">
    //         <img src="${person.picture.large}">
        

    // </div>`
   }
}