document.getElementById('feni-button').addEventListener('click',function(event){
    event.preventDefault();

    const donatedForFeni=getInputFieldValueById('feni-don');

    if(isNaN(donatedForFeni)||donatedForFeni<=0){
        alert('Wrong Attempt');
    }
    else{
        const balanceFeni=getTextFieldValueById('feni-bal');
        const newBalanceFeni=balanceFeni+donatedForFeni;
         document.getElementById('feni-bal').innerText=newBalanceFeni;

        const mainBalance=getTextFieldValueById('main-balance');
        if(donatedForFeni>mainBalance){
            alert("Wrong attempt");
            return;
        }
        const mainNewBal=mainBalance-donatedForFeni;
        document.getElementById('main-balance').innerText=mainNewBal;
        document.getElementById('my_modal_1').showModal();
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString();

        const p=document.createElement('p');
        p.innerText=`${donatedForFeni} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh on ${formattedTime} (Bangladesh Local Time)`;
        
        document.getElementById('donation-container-feni').appendChild(p);
    }
    
    
});