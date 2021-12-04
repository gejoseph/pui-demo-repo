
/* ----------------------- MAKING THE DETAILS PAGE DYNAMIC ----------------------- */

// cinnamon roll types
var cinnamonRollTypes = ["Original", "Original (GF)", "Pumpkin Spice", "Caramel Pecan", "Blackberry", "Walnut"]

// full images for each cinnamon roll type
var cinnamonRollFullImages = ["assets/original-full.jpg", "assets/original-gf-full.jpg", "assets/pumpkin-spice-full.jpg", "assets/caramel-pecan-full.png", "assets/blackberry-full.jpg", "assets/walnut-full.jpg"]

// small images for each cinnamon roll type
var cinnamonRollImages = ["assets/original-roll.png", "assets/original-gf-roll.png", "assets/pumpkin-spice-roll.png", "assets/caramel-pecan-roll.png", "assets/blackberry-roll.png", "assets/walnut-roll.png"]

// get all the elements on the details page that have the class "roll-type"
// because these are the elements that need to have the cinnamon roll type inserted
var cinnamonRollLabels = Array.from(document.getElementsByClassName("roll-type"));

// also get the element where the image should go for the details page
var cinnamonRollImage = document.getElementById("full-image")

// for each element that needs the cinnamon roll type inserted as text
for (const rollLabel of cinnamonRollLabels) {
    // get the type as saved in the session storage
    rollLabel.textContent = sessionStorage.getItem("productClicked");
}

// for each cinnamon roll type, change the image on the details page
for (var i = 0; i < cinnamonRollTypes.length; i++){
    if (cinnamonRollImage != null && cinnamonRollTypes[i] == sessionStorage.getItem("productClicked")){
        cinnamonRollImage.src = cinnamonRollFullImages[i];
        cinnamonRollImage.alt = sessionStorage.getItem("productClicked") + " Cinnamon Roll";
    }
}


/* ----------------------- UPDATING THE CART ----------------------- */

// cart array
if (sessionStorage.getItem("cart") == null){
    var cart = [];
}
else {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
}
console.log(cart)


// cinnamon roll class
class CinnamonRoll {
    constructor(type, glaze, amount, price) {
        this.type = type;
        this.glaze = glaze;
        this.amount = amount;
        this.price = price;
    }
}

// when we reload a new details page we need to reset 
// the glaze and amount to the default values
function resetCustomizations() {
    sessionStorage.setItem("glaze", "No Glaze");
    sessionStorage.setItem("amount", "1");
    sessionStorage.setItem("price", "2.99");
}

// event handler for when the value of the glaze select is changed
function changeGlaze(e) {
    var glaze = document.getElementById("glazes").value;
    // store glaze value
    sessionStorage.setItem("glaze", glaze);
}

// event handler for when the value of the amount select is changed
function changeAmount(e) {
    var amount = document.getElementById("amount").value;
    // store amount value
    sessionStorage.setItem("amount", amount);
    sessionStorage.setItem("price", ((2.99)*amount).toFixed(2))
    // update the price total on the product
    let priceValue = document.getElementById("product-price")
    if (amount > 1){
        priceValue.innerText = "Price (total): $" + sessionStorage.getItem("price") + " ($2.99 each)"
    }
    else {
        priceValue.innerText = "Price (total): $" + sessionStorage.getItem("price")
    }
    
}

// get all the navbar cart counts
var navbars = document.getElementsByClassName("cart-count");

// if the cartCount hasn't been set yet, make it 0
if (sessionStorage.getItem("cartCount") == null){
    sessionStorage.setItem("cartCount", 0)
}

// set all the navbars to the current cart count
for (const navbar of navbars){
    console.log(navbar)
    navbar.textContent = "(" + sessionStorage.getItem("cartCount") + ")";
}

// button for adding to cart on the details page
var addToCartButton = document.getElementById("addToCart");

// set event listener for adding to cart
if (addToCartButton != null){
    addToCartButton.addEventListener("click", updateCart);
}

// toast for when you add an item to the cart
var toast = document.getElementById("toast")

// event handler for adding to cart
function updateCart(e) {

    // create a cinnamon roll and add to the cart array and save to local storage
    var roll = new CinnamonRoll(sessionStorage.getItem("productClicked"), 
                sessionStorage.getItem("glaze"), 
                sessionStorage.getItem("amount"), 
                sessionStorage.getItem("price"));
    cart.push(roll);
    console.log(cart);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log(sessionStorage.getItem("cart"));

    // set the cartCount for the navbar display
    var cartCount = 0;
    for (order of cart){
        cartCount += parseInt(order.amount);
    }

    sessionStorage.setItem("cartCount", cartCount);
    
    // set all the navbars to the current cart count
    for (const navbar of navbars){
        console.log(navbar)
        navbar.textContent = "(" + sessionStorage.getItem("cartCount") + ")";
    }

    // adds the toast notification when item(s) are added to cart
    toast.style.display = "block";

    // change text in the toast depending on how many cinnamon rolls were added
    if (sessionStorage.getItem("amount") > 1){
        toast.innerHTML = 
            `
                <p> Added <span class="red-text">${sessionStorage.getItem("amount")} 
                            ${sessionStorage.getItem("productClicked")}</span> Cinnamon Rolls
                            with <span class="red-text">${sessionStorage.getItem("glaze")}</span> to the Cart
                </p>
            `
    }
    else {
        toast.innerHTML = 
        `
            <p> Added <span class="red-text">${sessionStorage.getItem("amount")} 
            ${sessionStorage.getItem("productClicked")}</span> Cinnamon Roll
            with <span class="red-text">${sessionStorage.getItem("glaze")}</span> to the Cart
            </p>
        `
    }
    // make sure the toast disappears after 3 seconds
    window.setTimeout("makeToastDisappear();", 3000);
    
}

// function to make the toast disappear after 3 seconds
function makeToastDisappear() {
    toast.style.display = "none";
}

// function to remove items from the cart 
function removeItem(cartIndex) {
    
    // removes cart item at the given index
    console.log(cart)
    cart.splice(cartIndex, 1);
    console.log(cart)

    // reset cart in storage
    sessionStorage.setItem("cart", JSON.stringify(cart))

    // set the cartCount for the navbar display
    var cartCount = 0;
    for (order of cart){
        cartCount += parseInt(order.amount);
    }

    sessionStorage.setItem("cartCount", cartCount);
    
    // set all the navbars to the current cart count
    for (const navbar of navbars){
        console.log(navbar)
        navbar.textContent = "(" + sessionStorage.getItem("cartCount") + ")";
    }

    // refresh page to show removal
    location.reload()
}

// if on the cart page
if ((cartList = document.getElementById("cart-list")) != null){

    // show items in the cart
    if (cart != null && cart.length != 0){

        var index = 0
        var subtotal = 0;

        for (const item of cart){
            
            console.log(item)
            console.log(subtotal)

            var img;
            for (var i = 0; i < cinnamonRollTypes.length; i++){
                if (cinnamonRollTypes[i] == item.type){
                    img = cinnamonRollImages[i];
                }
            }

            cartList.innerHTML += 
                `
                    
                    <div class="cart-card-section">
                        <hr></hr>
                        <div class="cart-card">
                            <img src=${img} alt="${item.type} Cinnamon Roll">
                            <div class="cart-card-content">
                                <h2>${item.type} Cinnamon Roll</h2>
                                <h3>Glaze: ${item.glaze}</h3>
                                <h3>Amount: ${item.amount}</h3>
                                <h3>Price (total): $${item.price}</h3>
                                <button type="button" class="red-button" onClick="removeItem(${index})">Remove</button>
                            </div>
                        </div>
                    </div>
                    
                `
            subtotal += parseFloat(item.price)
            console.log(index)
            index++
        }


        // update the order summary

        document.getElementById("subtotal").innerText = "$" + parseFloat(subtotal).toFixed(2)
        document.getElementById("total").innerText = "$" + (parseFloat(subtotal) + 5.00).toFixed(2)


    }
    // or indicate that the cart is empty
    else {
        cartList.innerHTML += 
                `
                    <h1 class="empty">Your Cart is Empty</h1>
    
                `
    }

}






