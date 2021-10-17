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
const quantityInput = docuemnt.getelementById('#quantForm')
for (let i = 0; i < quantityInput.length; i++) {
    let input =  quantityInput[i]
    input.addEventListener('change', quantityChanged)

function addCartItem(event) {
    const buttonClicked = event.target
    const shopItem = buttonClicked.parentElement.parentElement
    const title = shopItem.getElementsByClassName('card-title')[0]
    const price = shopItem.getElementsByClassName('card-text')[0]
    console.log(title, price)
    
    updateOrderTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value)|| input.value <= 0) {
        input.value = 1
    }
    updateOrderTotal()
}
    function updateOrderTotal() {
        const cardItem = document.getElementById('#itemId')[0]
        const itemData = cardItem.getElementsByClassName('row')
        const total = 0;
        for (let i = 0; i < itemData.length; i++) {
            let itemData = itemData[i]
            const priceElement = document.querySelectorAll('p')[0]
            const quantityElement = itemData.getElementById('#quantForm')
            const price = parseFloat(priceElement.innerText.replace('$', ''))
            const quantity = quantityElement.value
            console.log(price)
            total = total + ([price * quantity])
        }
        total = Math.round(total * 100) / 100
        document.getElementById('#totalPrice')[0].innerText = '$' + total
    }
    
    





