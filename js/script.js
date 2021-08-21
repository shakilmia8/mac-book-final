// product cost function
function getProductCost(product, isIncresing) {
    const productCost = document.getElementById(product + '-cost');
    let productCostPrice = parseFloat(productCost.innerText);
    if (isIncresing == false) {
        productCostPrice = 0;
    }
    else if (isIncresing == '512gb') {
        productCostPrice = 100;
    }
    else {
        productCostPrice = 180;
    }
    productCost.innerText = productCostPrice;
    getTotalPrice();
};

// delivery cost function
function getDeliveryCost(delivery, date) {
    const deliveryCharge = document.getElementById(delivery);
    let deliveryChargeCost = parseFloat(deliveryCharge.innerText);
    if (date == '25th') {
        deliveryChargeCost = 0;
    }
    else {
        deliveryChargeCost = 20;
    }
    deliveryCharge.innerText = deliveryChargeCost;
    getTotalPrice();
};

// total price function
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
    // return totalAmount;
}

// discount price function
function getDiscountPrice() {
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const netAmount = parseFloat(document.getElementById('net-amount').innerText);
    const discount = totalPrice / 20;
    netAmount = totalPrice - discount;
    document.getElementById('net-amount').innerText = netAmount;
    console.log('00000000000000000')
}

document.getElementById("8gb-button").addEventListener('click', function () {
    getProductCost('memory', false);
});

document.getElementById("16gb-button").addEventListener('click', function () {
    getProductCost('memory', true);
});

document.getElementById("256gb-button").addEventListener('click', function () {
    getProductCost('storage', false);
});

document.getElementById("512gb-button").addEventListener('click', function () {
    getProductCost('storage', '512gb');
});

document.getElementById("1tb-button").addEventListener('click', function () {
    getProductCost('storage', true);
});

document.getElementById("25th-button").addEventListener('click', function () {
    getDeliveryCost('delivery-charge', '25th');
});

document.getElementById("21th-button").addEventListener('click', function () {
    getDeliveryCost('delivery-charge', '21th');
});

document.getElementById("apply").addEventListener('click', function () {
    getDiscountPrice();
});