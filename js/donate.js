// donating for Noakhali

document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();

    let inputAmount = getInputById('input-noakhali');

    if(inputAmount > 0){
        let totalBalance = getTextById('total-balance');
        if(totalBalance >= inputAmount){
            let updatedTotalBalance = totalBalance - inputAmount;
            document.getElementById('total-balance').innerText = updatedTotalBalance;
        }
        else{
            alert('You do not have sufficient Balance');
            return;
        }

        let currentBalance = getTextById('original-taka-syria');
        let total = inputAmount + currentBalance;
        document.getElementById('original-taka-syria').innerText = total;

        //adding transaction history
        let div = document.createElement('div');
        let time = new Date();
        
        div.innerHTML = `
        <div class = "p-3 border-2 rounded-lg bg-fuchsia-200  mb-2">
            <h4 class = "text-xl font-bold">${inputAmount} Taka is Donated for Medical Aid for Refugees in Syria </h4>
            <p>Date: ${time}</p>
        </div>
        `;
        document.getElementById('transaction-form').appendChild(div);
    }
    else{
        alert('Donation Not valid');
    }
    
})


// donating for Amazon

document.getElementById('btn-donate-amazon').addEventListener('click', function(event){
    event.preventDefault();

    let inputAmount = getInputById('input-amazon');
    
    if(inputAmount > 0){
        let totalBalance = getTextById('total-balance');
        if(totalBalance >= inputAmount){
            let updatedTotalBalance = totalBalance - inputAmount;
            document.getElementById('total-balance').innerText = updatedTotalBalance;
        }
        else{
            alert('You do not have sufficient Balance');
            return;
        }

        let currentBalance = getTextById('original-taka-amazon');
        let total = inputAmount + currentBalance;
        document.getElementById('original-taka-amazon').innerText = total;

        //adding transaction history
        let div = document.createElement('div');
        let time = new Date();
        
        div.innerHTML = `
        <div class = "p-3 border-2 rounded-lg bg-fuchsia-200  mb-2">
            <h4 class = "text-xl font-bold">${inputAmount} Taka is Donated for Saving Endangered Wildlife in the Amazon Rain forest.</h4>
            <p>Date: ${time}</p>
        </div>
        `;
        document.getElementById('transaction-form').appendChild(div);
    }
    else{
        alert('Donation Not valid');
    }
    
})



// donating for cyclone affected people

document.getElementById('btn-donate-cyclone').addEventListener('click', function(event){
    event.preventDefault();

    let inputAmount = getInputById('input-cyclone');
    
    if(inputAmount > 0){
        let totalBalance = getTextById('total-balance');
        if(totalBalance >= inputAmount){
            let updatedTotalBalance = totalBalance - inputAmount;
            document.getElementById('total-balance').innerText = updatedTotalBalance;
        }
        else{
            alert('You do not have sufficient Balance');
            return;
        }

        let currentBalance = getTextById('original-taka-cyclone');
        let total = inputAmount + currentBalance;
        document.getElementById('original-taka-cyclone').innerText = total;

        //adding transaction history
        let div = document.createElement('div');
        let time = new Date();
        
        div.innerHTML = `
        <div class = "p-3 border-2 rounded-lg bg-fuchsia-200  mb-2">
            <h4 class = "text-xl font-bold">${inputAmount} Taka is Donated for Rebuilding Homes for Cyclone Victims in Bangladesh</h4>
            <p>Date: ${time}</p>
        </div>
        `;
        document.getElementById('transaction-form').appendChild(div);
    }
    else{
        alert('Donation Not valid');
    }
    
})