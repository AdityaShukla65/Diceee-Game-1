let srcArray=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
let randomGenerator=Math.ceil(Math.random()*5);
let srcCreator=srcArray[randomGenerator];
document.getElementById('dice1').setAttribute('src',srcCreator);
let randomGenerator2=Math.ceil(Math.random()*5);
let srcCreator2=srcArray[randomGenerator2];
document.getElementById('dice2').setAttribute('src',srcCreator2);
for(i=0;i<srcArray.length;i++){
    let k=1;
    srcArray[i]=k;
    k++;
}
if(randomGenerator>randomGenerator2){
    document.getElementById('refresh').innerHTML="Player 1 Wins 🚩";
}
else if(randomGenerator2>randomGenerator){
    document.getElementById('refresh').innerHTML="Player 2 Wins 🚩";
}
else if(randomGenerator===randomGenerator2){
    document.getElementById('refresh').innerHTML="Draw!";
}
else{
    document.getElementById('refresh').innerHTML="Something is wrong with the code 👨‍💻."
}
let clicked=()=>{
    document.location.reload();
}