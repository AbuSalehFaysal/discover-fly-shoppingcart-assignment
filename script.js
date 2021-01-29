const ticketVat = 0.1;

function increaseValuePrice(numberOfTickets, firstClassTicketPrice, economyClassTicketPrice, subTotalParam, vatParam, totalParam, netTicketPrice){
    let firstClassValue = document.getElementById(numberOfTickets).value;
    let firstClassValueNumber = parseFloat(firstClassValue);
    let newFirstClassValue = firstClassValueNumber + 1;
    document.getElementById(numberOfTickets).value = newFirstClassValue;
    let newFirstClassPrice = netTicketPrice * newFirstClassValue;
    document.getElementById(firstClassTicketPrice).innerText = newFirstClassPrice;
    let economyClassPrice = document.getElementById(economyClassTicketPrice).innerText;
    let economyClassPriceNumber = parseFloat(economyClassPrice);
    let subTotal = newFirstClassPrice + economyClassPriceNumber;
    document.getElementById(subTotalParam).innerText = subTotal;
    let vat = subTotal * ticketVat;
    document.getElementById(vatParam).innerText = vat;
    let total = subTotal + vat;
    document.getElementById(totalParam).innerText = total;
}

function decreaseValuePrice(numberOfTickets, firstClassTicketPrice, economyClassTicketPrice, subTotalParam, vatParam, totalParam, netTicketPrice){
    let firstClassValue = document.getElementById(numberOfTickets).value;
    let firstClassValueNumber = parseFloat(firstClassValue);
    if (firstClassValueNumber > 0) {
        let newFirstClassValue = firstClassValueNumber - 1;
        document.getElementById(numberOfTickets).value = newFirstClassValue;
        let newFirstClassPrice = netTicketPrice * newFirstClassValue;
        document.getElementById(firstClassTicketPrice).innerText = newFirstClassPrice;
        let economyClassPrice = document.getElementById(economyClassTicketPrice).innerText;
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
});

let firstMinusButton = document.getElementById("first-minus-button");
firstMinusButton.addEventListener("click", function () {
    decreaseValuePrice("first-class-value", "first-class-price", "economy-class-price", "sub-total", "vat", "total", 150);
});

let secondPlusButton = document.getElementById("second-plus-button");
secondPlusButton.addEventListener("click", function () {
    increaseValuePrice("economy-class-value", "economy-class-price", "first-class-price", "sub-total", "vat", "total", 100);
});

let secondMinusButton = document.getElementById("second-minus-button");
secondMinusButton.addEventListener("click", function () {
    decreaseValuePrice("economy-class-value", "economy-class-price", "first-class-price", "sub-total", "vat", "total", 100);
});