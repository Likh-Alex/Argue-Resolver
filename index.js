randomNumber1= Math.floor(Math.random()*6)+1;
randomNumber2= Math.floor(Math.random()*6)+1;
document.querySelector('div .img1').setAttribute("src", "images/dice"+randomNumber1+".png")
document.querySelector('div .img2').setAttribute("src", "images/dice"+randomNumber2+".png")
if (randomNumber1>randomNumber2){
  document.querySelector('.refresher').textContent="🚩Player 1 wins!";
}else if(randomNumber2>randomNumber1){
  document.querySelector('.refresher').textContent="Player 2 wins!🚩";
}else{
  document.querySelector('.refresher').textContent="Draw!";
}
