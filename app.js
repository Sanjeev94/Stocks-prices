var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss / initial)*100;
        showOutput(`Hey the loss is ${loss} and the percentage is ${lossPercentage}%`);

    }
    else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Hey the profit is ${profit} and the percentage is ${profitPercentage}%`);

    }
    else {
        showOutput("No pain no gain no gain no pain");

    }

}

calculateProfitAndLoss(10, 10, 10);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

submitBtn.addEventListener('click', submitHandler);

function showOutput(message) {
    // switch (status) {
    //     case "PROFIT":
    //         outputBox.innerHTML = message;
            
    //         break;
    //     case "LOSS":
    //             outputBox.innerHTML = message;
                
    //         break;
    
    //     default:
    //         break;
    // }

    outputBox.innerHTML = message;
}