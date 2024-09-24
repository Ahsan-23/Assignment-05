document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();

    const donatedMoney=getInputFieldValueById('noakhali-don');
    

    if(isNaN(donatedMoney) || donatedMoney<=0){
        alert("Wrong attempt");
    }
    else{
        const balance=getTextFieldValueById('noakhali-bal');
        const newBalance=balance+donatedMoney;
        document.getElementById('noakhali-bal').innerText=newBalance;

        const mainBalance=getTextFieldValueById('main-balance');
        if(donatedMoney>mainBalance){
            alert("Wrong attempt");
            return;
        }
        const mainNewBal=mainBalance-donatedMoney;
        document.getElementById('main-balance').innerText=mainNewBal;
        document.getElementById('my_modal_1').showModal();
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString();

        const p=document.createElement('p');
        p.innerText=`${donatedMoney} Taka is Donated for Donate for Flood at Noakhali, Bangladesh on ${formattedTime} (Bangladesh Local Time)`;
        
        document.getElementById('donation-container').appendChild(p);

    }
    
});
