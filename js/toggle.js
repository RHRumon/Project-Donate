
document.getElementById('btn-history').addEventListener('click', function(event){
    event.preventDefault();

    let donation_div = document.getElementById('donation-div');
    donation_div.classList.add('hidden');

    let history_div = document.getElementById('history-div');
    history_div.classList.remove('hidden');

    let btn_his = document.getElementById('btn-history').classList.add('active');
    let btn_don = document.getElementById('btn-donation').classList.remove('active');

})

document.getElementById('btn-donation').addEventListener('click', function(event){
    event.preventDefault();
    
    let history_div = document.getElementById('history-div');
    history_div.classList.add('hidden');
    
    let donation_div = document.getElementById('donation-div');
    donation_div.classList.remove('hidden');
    
    let btn_his = document.getElementById('btn-history').classList.remove('active');
    let btn_don = document.getElementById('btn-donation').classList.add('active');
})

