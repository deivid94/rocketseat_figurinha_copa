function changeCard()
{
  let trocarCard = document.getElementById('card').className = 'colorCard1'
   if(trocarCard){
    trocarCard.className = 'colorCard2'
   }else{
    trocarCard.className = 'colorCard1'
   }
   alert(trocarCard)
}
