let count = 0;
function getNumber (inputId){
    const element = document.getElementById (inputId);
    const elementText = element.innerText;
    const floatPrice =parseFloat(elementText);
    return floatPrice;
}
function setValue (inputId, value){
    const total = document.getElementById(inputId);
    total.innerText = value
}
const allDiv = document.querySelectorAll('.card');
for (const div of allDiv) {
    div.addEventListener('click',function(e){
        const getName= e.target.childNodes[3].innerText;
        const getPrice = e.target.childNodes[5].innerText.split(' ')[0];
        const floatPrice =parseFloat(getPrice);
        const productPrice = floatPrice.toFixed(2);
        const productPriceFloat = parseFloat(productPrice);
    
        const productContainer = document.getElementById('product-container');
        const p = document.createElement('p')
        p.innerText = (count+=1)+ ". " + getName;
        productContainer.appendChild(p);
    
        const totalPrice = getNumber('total-price');
        const total = totalPrice + productPriceFloat;
        const totalMoney = total.toFixed(2);
        setValue ('total-price', totalMoney)
    })
}
