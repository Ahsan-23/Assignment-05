document.getElementById('donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donatedForQuota=getInputFieldValueById('quota-don');

    if(isNaN(donatedForQuota)||donatedForQuota<=0){
        alert("wrong attempt");
    }
    else{
        const balanceQuota=getTextFieldValueById('balance-quota');
        const newBalanceQuota=balanceQuota+donatedForQuota;
        document.getElementById('balance-quota').innerText=newBalanceQuota;

        const mainBalance=getTextFieldValueById('main-balance');
        if(donatedForQuota>mainBalance){
            alert("Wrong attempt");
            return;
        }

        const mainNewBalQuota=mainBalance-donatedForQuota;
        document.getElementById('main-balance').innerText=mainNewBalQuota;
       
        document.getElementById('my_modal_1').showModal();
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString();

        const p=document.createElement('p');
        p.innerText=`${donatedForQuota} Taka is Donated for Aid for Injured in the Quota Movement on ${formattedTime} (Bangladesh Local Time)`;
        
        document.getElementById('donation-container-quota').appendChild(p);
        

    }
});