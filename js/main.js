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
        setValue ('total-price', totalMoney);
        setValue ('total', totalMoney);
        const totalPay = parseFloat(totalMoney);
        const couponBtn = document.getElementById('coupon-btn');
        const makePayBtn = document.getElementById('make-pay');
        if(totalPay >= 0){
            makePayBtn.removeAttribute('disabled') 
        }
        if (totalPay >= 200)(
            couponBtn.removeAttribute('disabled')
        )
    })
}
const images = document.querySelectorAll('.products-img');
for (const img of images) {
    img.addEventListener('click',function(e){
        const getName= e.target.parentNode.childNodes[3].childNodes[3].innerText;
        const getPrice = e.target.parentNode.childNodes[3].childNodes[5].innerText.split(' ')[0];
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
        setValue ('total-price', totalMoney);
        setValue ('total', totalMoney);
        const totalPay = parseFloat(totalMoney);
        const couponBtn = document.getElementById('coupon-btn');
        const makePayBtn = document.getElementById('make-pay');
        if(totalPay >= 0){
            makePayBtn.removeAttribute('disabled') 
        }
        if (totalPay >= 200)(
            couponBtn.removeAttribute('disabled')
        )
    })
}




document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponInput = document.getElementById('coupon');
    const coupon = couponInput.value;
    console.log(coupon)
    if (coupon === "SELL200") {
        const totalPrice = getNumber('total-price');
    const discountPrice = (20/100)*totalPrice;
    const disPrice = discountPrice.toFixed(2);
    setValue ('discount-price', disPrice);
    const totalMoney = totalPrice - parseFloat(disPrice);
    const money = totalMoney.toFixed(2);
    setValue ('total', money)
    couponInput.value = ""
    }
    else {
        alert ('Please input a valid Coupon')
    }
})
document.getElementById('go-home').addEventListener('click',function(){
    const defultValue = '0.00';
    setValue ('total-price', defultValue);
    setValue ('total', defultValue);
    setValue ('discount-price', defultValue)
    const productContainer = document.getElementById('product-container');
    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }
    const makePayBtn = document.getElementById('make-pay');
    const totalPrice = getNumber('total-price');
    console.log(totalPrice)
    const couponBtn = document.getElementById('coupon-btn');
    if(totalPrice == 0){
        makePayBtn.setAttribute('disabled','')  
    }
    if (totalPrice < 200)(
        couponBtn.setAttribute('disabled','')
    )
    count = 0; 
})
