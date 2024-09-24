const donationBtn =document.getElementById('donationBtn');
const historyBtn=document.getElementById('historyBtn');

function toggleBtn(clickedBtn,nonClickedBtn){
    clickedBtn.style.backgroundColor='#B4F461';
    nonClickedBtn.style.backgroundColor='#D1D5DB';
}
donationBtn.addEventListener('click',function(){
    toggleBtn(donationBtn,historyBtn);
});
historyBtn.addEventListener('click',function(){
    toggleBtn(historyBtn,donationBtn);
});



