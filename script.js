function changeCard()
{
  let trocarCard = document.getElementById('card')
  if (trocarCard.classList.contains("colorCard2")){
    trocarCard.classList.remove('colorCard2')
    trocarCard.classList.add('colorCard1')
  }else {
    trocarCard.classList.remove('colorCard1')
    trocarCard.classList.add('colorCard2')
  }
}
