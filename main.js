


deal = document.getElementById('deal');

reset = document.getElementById('reset');
function resetGame(){
    document.getElementById("pCard").innerHTML='';
     document.getElementById("cCard").innerHTML='';
     document.getElementById('cScore').innerHTML='';
     document.getElementById('pScore').innerHTML='';
     document.getElementById('msg').innerHTML='Click Deal To Start The Battle';
     deal.disabled = false


}


function getImg() { 

const randomImg = new Array();




randomImg[0] = "https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png";

randomImg[1] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png';


randomImg[2] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png';


randomImg[3] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png';


randomImg[4] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png';


randomImg[5] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png';


randomImg[6] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png';


randomImg[7] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png';


randomImg[8] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png';


randomImg[9] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png';

randomImg[10] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png';


randomImg[11] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png';


randomImg[12] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png';


const imgNum = Math.floor(Math.random()*randomImg.length);
console.log(imgNum)
const imgNum2 = Math.floor(Math.random()*randomImg.length);
    console.log(imgNum2)
     document.getElementById("cCard").innerHTML = '<img src="'+randomImg[imgNum2]+'" />';  
  document.getElementById("pCard").innerHTML = '<img src="'+randomImg[imgNum]+'" />'
  return [imgNum,imgNum2]
}


    window.onload = function (){
        const deal = document.getElementById("deal");
        reset = document.getElementById('reset');
        deal.addEventListener("click", getImg);
        deal.addEventListener("click", handler);
        reset.addEventListener('click',resetGame);
        }

        function pWin(){
            document.getElementById('msg').innerHTML = 'Player Won The War!';
            deal = document.getElementById('deal');

            deal.disabled = true

        }
        function cWin(){
            document.getElementById('msg').innerHTML = 'Computer Won The War!';
            deal = document.getElementById('deal');

            deal.disabled = true


        }

        function comScore() {
            const computerScore = document.getElementById('cScore');
            let cNumber = computerScore.innerHTML;
            cNumber++;
            computerScore.innerHTML = cNumber;
            if (cNumber >= 10){
                cWin();
            } 
        }

        function playerScore() {
            const playerScore = document.getElementById('pScore');
            let number = playerScore.innerHTML;
            number++;
            playerScore.innerHTML = number;
            if (number >= 10){
                pWin();
            } 
        }
function handler(){
//grabbing random image function
let compare = getImg()
let player = compare[0]
let comp = compare[1]
console.log(player,comp)
//comparison statements
if (player > comp){
    document.getElementById('msg').innerHTML = 'Player Wins This Battle!'; playerScore();

}
if (player < comp){
    document.getElementById('msg').innerHTML = 'Computer Wins This Battle!'; comScore();

}
if (player === comp){
    document.getElementById('msg').innerHTML = 'Its a Stalemate! Auto Rematch!'; getImg();
    handler()
}
}

