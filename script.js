const ticketVat = 0.1;

function increaseValuePrice(firstClassValueParam, firstClassPriceParam, economyClassPriceParam, subTotalParam, vatParam, totalParam, netTicketPrice){
    let firstClassValue = document.getElementById(firstClassValueParam).value;
    let firstClassValueNumber = parseFloat(firstClassValue);
    let newFirstClassValue = firstClassValueNumber + 1;
    // console.log(newFirstClassValue);
    document.getElementById(firstClassValueParam).value = newFirstClassValue;
    let newFirstClassPrice = netTicketPrice * newFirstClassValue;
    // console.log(newFirstClassPrice);
    document.getElementById(firstClassPriceParam).innerText = newFirstClassPrice;
    let economyClassPrice = document.getElementById(economyClassPriceParam).innerText;
    let economyClassPriceNumber = parseFloat(economyClassPrice);
    let subTotal = newFirstClassPrice + economyClassPriceNumber;
    document.getElementById(subTotalParam).innerText = subTotal;
    let vat = subTotal * ticketVat;
    document.getElementById(vatParam).innerText = vat;
    let total = subTotal + vat;
    document.getElementById(totalParam).innerText = total;
}

function decreaseValuePrice(firstClassValueParam, firstClassPriceParam, economyClassPriceParam, subTotalParam, vatParam, totalParam, netTicketPrice){
    let firstClassValue = document.getElementById(firstClassValueParam).value;
    let firstClassValueNumber = parseFloat(firstClassValue);
    if (firstClassValueNumber > 0) {
        let newFirstClassValue = firstClassValueNumber - 1;
        // console.log(newFirstClassValue);
        document.getElementById(firstClassValueParam).value = newFirstClassValue;
        let newFirstClassPrice = netTicketPrice * newFirstClassValue;
        // console.log(newFirstClassPrice);
        document.getElementById(firstClassPriceParam).innerText = newFirstClassPrice;
        let economyClassPrice = document.getElementById(economyClassPriceParam).innerText;
        let economyClassPriceNumber = parseFloat(economyClassPrice);
        let subTotal = newFirstClassPrice + economyClassPriceNumber;
        document.getElementById(subTotalParam).innerText = subTotal;
        let vat = subTotal * ticketVat;
        document.getElementById(vatParam).innerText = vat;
        let total = subTotal + vat;
        document.getElementById(totalParam).innerText = total;
    }
}

let firstPlusButton = document.getElementById("first-plus-button");
firstPlusButton.addEventListener("click", function () {
    increaseValuePrice("first-class-value", "first-class-price", "economy-class-price", "sub-total", "vat", "total", 150);
    // let firstClassValue = document.getElementById("first-class-value").value;
    // let firstClassValueNumber = parseFloat(firstClassValue);
    // let newFirstClassValue = firstClassValueNumber + 1;
    // // console.log(newFirstClassValue);
    // document.getElementById("first-class-value").value = newFirstClassValue;
    // let newFirstClassPrice = firstClassTicketPrice * newFirstClassValue;
    // // console.log(newFirstClassPrice);
    // document.getElementById("first-class-price").innerText = newFirstClassPrice;
    // let economyClassPrice = document.getElementById("economy-class-price").innerText;
    // let economyClassPriceNumber = parseFloat(economyClassPrice);
    // let subTotal = newFirstClassPrice + economyClassPriceNumber;
    // document.getElementById("sub-total").innerText = subTotal;
    // let vat = subTotal * ticketVat;
    // document.getElementById("vat").innerText = vat;
    // let total = subTotal + vat;
    // document.getElementById("total").innerText = total;
});

let firstMinusButton = document.getElementById("first-minus-button");
firstMinusButton.addEventListener("click", function () {
    decreaseValuePrice("first-class-value", "first-class-price", "economy-class-price", "sub-total", "vat", "total", 150);
    // let firstClassValue = document.getElementById("first-class-value").value;
    // let firstClassValueNumber = parseFloat(firstClassValue);
    // if (firstClassValueNumber > 0) {
    //     let newFirstClassValue = firstClassValueNumber - 1;
    //     // console.log(newFirstClassValue);
    //     document.getElementById("first-class-value").value = newFirstClassValue;
    //     let newFirstClassPrice = firstClassTicketPrice * newFirstClassValue;
    //     // console.log(newFirstClassPrice);
    //     document.getElementById("first-class-price").innerText = newFirstClassPrice;
    //     let economyClassPrice = document.getElementById("economy-class-price").innerText;
    //     let economyClassPriceNumber = parseFloat(economyClassPrice);
    //     let subTotal = newFirstClassPrice + economyClassPriceNumber;
    //     document.getElementById("sub-total").innerText = subTotal;
    //     let vat = subTotal * ticketVat;
    //     document.getElementById("vat").innerText = vat;
    //     let total = subTotal + vat;
    //     document.getElementById("total").innerText = total;
    // }
});

let secondPlusButton = document.getElementById("second-plus-button");
secondPlusButton.addEventListener("click", function () {
    increaseValuePrice("economy-class-value", "economy-class-price", "first-class-price", "sub-total", "vat", "total", 100);
    // let economyClassValue = document.getElementById("economy-class-value").value;
    // let economyClassValueNumber = parseFloat(economyClassValue);
    // let newEconomyClassValue = economyClassValueNumber + 1;
    // // console.log(newEconomyClassValue);
    // document.getElementById("economy-class-value").value = newEconomyClassValue;
    // let newEconomyClassPrice = economyClassTicketPrice * newEconomyClassValue;
    // // console.log(newEconomyClassPrice);
    // document.getElementById("economy-class-price").innerText = newEconomyClassPrice;
    // let firstClassPrice = document.getElementById("first-class-price").innerText;
    // let firstClassPriceNumber = parseFloat(firstClassPrice);
    // let subTotal = newEconomyClassPrice + firstClassPriceNumber;
    // document.getElementById("sub-total").innerText = subTotal;
    // let vat = subTotal * ticketVat;
    // document.getElementById("vat").innerText = vat;
    // let total = subTotal + vat;
    // document.getElementById("total").innerText = total;
});

let secondMinusButton = document.getElementById("second-minus-button");
secondMinusButton.addEventListener("click", function () {
    decreaseValuePrice("economy-class-value", "economy-class-price", "first-class-price", "sub-total", "vat", "total", 100);
    // let economyClassValue = document.getElementById("economy-class-value").value;
    // let economyClassValueNumber = parseFloat(economyClassValue);
    // if (economyClassValueNumber > 0) {
    //     let newEconomyClassValue = economyClassValueNumber - 1;
    //     // console.log(newEconomyClassValue);
    //     document.getElementById("economy-class-value").value = newEconomyClassValue;
    //     let newEconomyClassPrice = economyClassTicketPrice * newEconomyClassValue;
    //     // console.log(newEconomyClassPrice);
    //     document.getElementById("economy-class-price").innerText = newEconomyClassPrice;
    //     let firstClassPrice = document.getElementById("first-class-price").innerText;
    //     let firstClassPriceNumber = parseFloat(firstClassPrice);
    //     let subTotal = newEconomyClassPrice + firstClassPriceNumber;
    //     document.getElementById("sub-total").innerText = subTotal;
    //     let vat = subTotal * ticketVat;
    //     document.getElementById("vat").innerText = vat;
    //     let total = subTotal + vat;
    //     document.getElementById("total").innerText = total;
    // }
});