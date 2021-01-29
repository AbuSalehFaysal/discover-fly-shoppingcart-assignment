let firstPlusButton = document.getElementById("first-plus-button");
firstPlusButton.addEventListener("click", function () {
    let firstClassValue = document.getElementById("first-class-value").value;
    let firstClassValueNumber = parseFloat(firstClassValue);
    let newFirstClassValue = firstClassValueNumber + 1;
    // console.log(newFirstClassValue);
    document.getElementById("first-class-value").value = newFirstClassValue;
    let newFirstClassPrice = 150 * newFirstClassValue;
    // console.log(newFirstClassPrice);
    document.getElementById("first-class-price").innerText = newFirstClassPrice;
    let economyClassPrice = document.getElementById("economy-class-price").innerText;
    let economyClassPriceNumber = parseFloat(economyClassPrice);
    let subTotal = newFirstClassPrice + economyClassPriceNumber;
    document.getElementById("sub-total").innerText = subTotal;
    let vat = subTotal * 0.1;
    document.getElementById("vat").innerText = vat;
    let total = subTotal + vat;
    document.getElementById("total").innerText = total;
});

let firstMinusButton = document.getElementById("first-minus-button");
firstMinusButton.addEventListener("click", function () {
    let firstClassValue = document.getElementById("first-class-value").value;
    let firstClassValueNumber = parseFloat(firstClassValue);
    if (firstClassValueNumber > 0) {
        let newFirstClassValue = firstClassValueNumber - 1;
        // console.log(newFirstClassValue);
        document.getElementById("first-class-value").value = newFirstClassValue;
        let newFirstClassPrice = 150 * newFirstClassValue;
        // console.log(newFirstClassPrice);
        document.getElementById("first-class-price").innerText = newFirstClassPrice;
        let economyClassPrice = document.getElementById("economy-class-price").innerText;
        let economyClassPriceNumber = parseFloat(economyClassPrice);
        let subTotal = newFirstClassPrice + economyClassPriceNumber;
        document.getElementById("sub-total").innerText = subTotal;
        let vat = subTotal * 0.1;
        document.getElementById("vat").innerText = vat;
        let total = subTotal + vat;
        document.getElementById("total").innerText = total;
    }
});

let secondPlusButton = document.getElementById("second-plus-button");
secondPlusButton.addEventListener("click", function () {
    let economyClassValue = document.getElementById("economy-class-value").value;
    let economyClassValueNumber = parseFloat(economyClassValue);
    let newEconomyClassValue = economyClassValueNumber + 1;
    // console.log(newEconomyClassValue);
    document.getElementById("economy-class-value").value = newEconomyClassValue;
    let newEconomyClassPrice = 100 * newEconomyClassValue;
    // console.log(newEconomyClassPrice);
    document.getElementById("economy-class-price").innerText = newEconomyClassPrice;
    let firstClassPrice = document.getElementById("first-class-price").innerText;
    let firstClassPriceNumber = parseFloat(firstClassPrice);
    let subTotal = newEconomyClassPrice + firstClassPriceNumber;
    document.getElementById("sub-total").innerText = subTotal;
    let vat = subTotal * 0.1
    document.getElementById("vat").innerText = vat;
    let total = subTotal + vat;
    document.getElementById("total").innerText = total;
});

let secondMinusButton = document.getElementById("second-minus-button");
secondMinusButton.addEventListener("click", function () {
    let economyClassValue = document.getElementById("economy-class-value").value;
    let economyClassValueNumber = parseFloat(economyClassValue);
    if (economyClassValueNumber > 0) {
        let newEconomyClassValue = economyClassValueNumber - 1;
        // console.log(newEconomyClassValue);
        document.getElementById("economy-class-value").value = newEconomyClassValue;
        let newEconomyClassPrice = 100 * newEconomyClassValue;
        // console.log(newEconomyClassPrice);
        document.getElementById("economy-class-price").innerText = newEconomyClassPrice;
        let firstClassPrice = document.getElementById("first-class-price").innerText;
        let firstClassPriceNumber = parseFloat(firstClassPrice);
        let subTotal = newEconomyClassPrice + firstClassPriceNumber;
        document.getElementById("sub-total").innerText = subTotal;
        let vat = subTotal * 0.1;
        document.getElementById("vat").innerText = vat;
        let total = subTotal + vat;
        document.getElementById("total").innerText = total;
    }
});