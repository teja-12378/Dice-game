var x=Math.floor(Math.random()*6)+1;
var imgg="images/dice"+x+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgg);

var y=Math.floor(Math.random()*6)+1;
var imgg="images/dice"+y+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgg);

if(x>y){
  document.querySelector("h1").innerHTML="Player 1 won !!!"
}
else if(x==y){
    document.querySelector("h1").innerHTML="Draw !!!"
}

else{
  document.querySelector("h1").innerHTML="Player 2 won !!!"
}
