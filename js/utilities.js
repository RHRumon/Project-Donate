function getInputById(id){
    let balanceText = document.getElementById(id).value;
    let balance = parseFloat(balanceText);
    return balance;
}

function getTextById(id){
    let balanceText = document.getElementById(id).innerText;
    let balance = parseFloat(balanceText);
    return balance;
}