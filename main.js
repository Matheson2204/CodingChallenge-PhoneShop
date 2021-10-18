if (document.readtState == 'loading') {
    document.addEventLister('DOMContentLoaded', ready)
} else {
    ready()
}

// document.querySelector("#itemId")

// document.querySelectorAll("card")

// const gridTable = document.querySelector("grid-container")

// const deleteBtn = document.getElementById("#delete-btn")
function ready() {
const submitBtn = document.getElementsByClassName('btn-primary')
for (let i = 0; i < submitBtn.length; i++) {
    let submit = submitBtn[i]
    submit.addEventListener("click", addCartItem)
    }
}
const quantityInput = document.getElementsByClassName('form-control')
for (let i = 0; i < quantityInput.length; i++) {
    let input =  quantityInput[i]
    input.addEventListener('change', quantityChanged)
}

const removeOrderItemButton = document.getElementsByClassName('delete-btn')
console.log(removeOrderItemButton)
for (let i = 0; i < removeOrderItemButton.length; i++) {
    const deleteButton = removeOrderItemButton[i]
    deleteButton.addEventListener('click', function(event) { 
        const buttonClicked = event.target
     buttonClicked.parentElement.parentElement.remove()
    updateOrderTotal()
    })
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value)|| input.value <= 0) {
        input.value = 1
    }
    updateOrderTotal()
}

function addCartItem(event) {
    const addButtonClicked = event.target
    const card = addButtonClicked.parentElement.parentElement
    const title = card.getElementsByClassName('card-title')[0].innerText
    const price = card.getElementsByClassName('card-text')[0].innerText
    console.log(title, price)
    addCartItem(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
const cartRow = document.createElement('div')
cartRow = classlist.add('col') 
cartRow.innerText = title
const cartItems = document.getElementsByClassName('card')[0]
const cartItemNames = cartItems.getElementsByClassName('card-title')
for (let i = 0; i < cartItemNames.length; i++) {
if (cartItemNames[i].innerText == title) {
    alert('This item is already added to the cart')
    return
 }
}
const cartRowContents = 
`<div class="grid-container">
<div class="row row-cols-5">
<div class="col">Item Name</div>
<div class="col">Quantity </div>
<div class="col" >Price</div>
<div class="col">Total</div>
<div class="col">Action</div>
</div>
<div class="row row-cols-5">
<div class="col">Samsung J2 Pro</div>
<div class="col">${quantity}</div>
<div class="col">${price}</div>
<div class="col">${total}</div>
<div class="col">
  <button class="btn delete-btn" type="button">Remove</button>
</div>
</div>
  <div class="row row-cols-5">
<div class="col">Hp Notebook</div>
<div class="col col">12</div>
<div class="col">13</div>
<div class="col">14</div>
<div class="col">
  <button class="btn delete-btn" type="button">Remove</button></div>
</div>
<div class="row row-cols-5">
<div class="col">Panasonic T44 Lite</div>
<div class="col">17</div>
<div class="col">18</div>
<div class="col">19</div>
<div class="col">
  <button class="btn delete-btn" type="button">Remove</button></div>
</div>
<div class="row row-cols-3">
<div class="col col-md-7" id="labelPriceTotal">Overall Total</div>
<div class="col col-md-2.5" id="overallPrice">22</div>
<div class="col">
  <button class="btn delete-btn" type="button">Remove</button></div>
</div>
</div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('delete-btn')
}

    function updateOrderTotal() {
       let cardContainer = document.getElementByClassName('card-group')[0]
        let card = cardContainer.getElementsByClassName('card')
        for (let i = 0; i < card.length; i++) {
            let card = card[i]
            let priceElement = card.getElementsByClassName('card-text')[0]
            let quantityElement = card.getElementsByClassName('form-control')
            const price = parseFloat(priceElement.innerText.replace('$', ''))
            const quantity = quantityElement.value
            console.log(price)
            total = total + ([price * quantity])
        }
        total = Math.round(total * 100) / 100
        document.getElementById('#overallPrice')[0].innerText = '$' + total
    }
