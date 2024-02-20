let currentPrice = 0; // the current cart price

const boogieButton = document.querySelector("#button0");
const eggButton = document.querySelector("#button1");
const regularButton = document.querySelector("#button2");
const steakButton = document.querySelector("#button3");
const sweetButton = document.querySelector("#button4");
const garlicButton = document.querySelector("#button5");
const lemonButton = document.querySelector("#button6");
const teaButton = document.querySelector("#button7");
const cookieButton = document.querySelector("#button8");
/* getting all the buttons*/

let cartText = document.querySelector("#cartText"); // the cart text

currentCart = []; 
// the curent items in the cart

const menuItems = [

    {
        name: "The Boogie Burger",
        price: 10.99},
    {
        name: "The Eggcelent Burger",
        price: 8.99
    },
    {
        name: "The Regular Degular Burger",
        price: 7.99
    },
    {
        name: "Steak Fries",
        price: 4.99
    },
    {
        name: "Sweet Potato Fries",
        price: 5.99
    }, 
    {
        name: "Garlic Fries",
        price: 6.99
    },
    {
        name: "Raspberry Lemonade",
        price: 3.99

    },
    {
        name: "Tea",
        price: 2.99
    },
    {
        name: "Cookies & Cream Shake",
        price: 5.99
    }
];

boogieButton.onclick = () =>  changeCart(menuItems[0], boogieButton);
eggButton.onclick = () => changeCart(menuItems[1], eggButton);
regularButton.onclick = () => changeCart(menuItems[2], regularButton);
steakButton.onclick = () => changeCart(menuItems[3], steakButton);
sweetButton.onclick = () => changeCart(menuItems[4], sweetButton);
garlicButton.onclick = () => changeCart(menuItems[5], garlicButton);
lemonButton.onclick = () => changeCart(menuItems[6], lemonButton);
teaButton.onclick = () => changeCart(menuItems[7], teaButton);
cookieButton.onclick = () => changeCart(menuItems[8], cookieButton);
// making buttons go to the cart funtion to change value 

function changeCart(item, button) {
    if (currentCart.includes(item.name)) {
        currentPrice -= item.price; // takes the item price out
        cartText.textContent = "The total is now: $" + currentPrice.toFixed(2); // updating the cart text
        button.textContent = "Add to cart";
        button.style.backgroundColor = "rgb(92, 184, 230)";
        removeFromCart(item); // calls remove from cart function
        // changes the button and removes item name from array
    } else {
        currentPrice += item.price; // adds to current price
        cartText.textContent = "The total is now: $" + currentPrice.toFixed(2); // Update the cart text
        button.textContent = "Remove from cart"; 
        button.style.backgroundColor = "red"; // makes button red and changes text
        currentCart.push(item.name);
    }
        
}
    
function removeFromCart(item) {
    const index = currentCart.indexOf(item.name);
    if (index != -1) {
        currentCart.splice(index, 1); 
    }
}
// removes the item from the cart