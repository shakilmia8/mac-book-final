// apply product price related function
function getProductCost(product, isIncresing) {
    const productCost = document.getElementById(product + '-cost');
    let productCostPrice = parseFloat(productCost.innerText);
    if (isIncresing == true) {
        productCostPrice = 180;
    }
    else if (isIncresing == '512gb') {
        productCostPrice = 100;
    }
    else {
        productCostPrice = 0;
    }
    productCost.innerText = productCostPrice;
    getTotalPrice();
};

// apply delivery cost related function
function getDeliveryCost(delivery, date) {
    const deliveryCharge = document.getElementById(delivery);
    let deliveryChargeCost = parseFloat(deliveryCharge.innerText);
    if (date == 'noCharge') {
        deliveryChargeCost = 0;
    }
    else {
        deliveryChargeCost = 20;
    }
    deliveryCharge.innerText = deliveryChargeCost;
    getTotalPrice();
};

//apply total price related function
function getTotalPrice() {
    const bestCostPrice = document.getElementById('best-price').innerText;
    const memoryCostPrice = document.getElementById('memory-cost').innerText;
    const storageCostPrice = document.getElementById('storage-cost').innerText;
    const deliveryChargePrice = document.getElementById('delivery-charge').innerText;
    const bestPrice = parseFloat(bestCostPrice);
    const memoryCost = parseFloat(memoryCostPrice);
    const storageCost = parseFloat(storageCostPrice);
    const deliveryCharge = parseFloat(deliveryChargePrice);
    const totalAmount = bestPrice + memoryCost + storageCost + deliveryCharge;
    document.getElementById('total-price').innerText = totalAmount;
    document.getElementById('net-amount').innerText = totalAmount;
};

// apply discount price related function
function getDiscountPrice() {
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const inputField = document.getElementById('input-field').value;
    if (inputField == "stevekaku") {
        const discount = (totalPrice * 20) / 100;
        const total = totalPrice - discount;
        document.getElementById('net-amount').innerText = total;
    }
};


// memory clicked hendler
document.getElementById("8gb-button").addEventListener('click', function () {
    getProductCost('memory', false);
});

document.getElementById("16gb-button").addEventListener('click', function () {
    getProductCost('memory', true);
});


// storage clicked hendler
document.getElementById("256gb-button").addEventListener('click', function () {
    getProductCost('storage', false);
});

document.getElementById("512gb-button").addEventListener('click', function () {
    getProductCost('storage', '512gb');
});

document.getElementById("1tb-button").addEventListener('click', function () {
    getProductCost('storage', true);
});


// delivery clicked hendler
document.getElementById("prime-delivery-button").addEventListener('click', function () {
    getDeliveryCost('delivery-charge', 'noCharge');
});

document.getElementById("delivery-charge-button").addEventListener('click', function () {
    getDeliveryCost('delivery-charge', 'Charge');
});


// pomo apply clicked hendler
document.getElementById("apply-button").addEventListener('click', function () {
    getDiscountPrice();
});