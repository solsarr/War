
// document.getElementById('pCard');

// let ace = document.createElement('img');
// ace.setAttribute("height", "350");
// ace.setAttribute("width", "250");
// ace.src = "https://image.shutterstock.com/image-vector/vector-spade-icon-260nw-646581166.jpg";
// document.getElementById('pCard').appendChild(ace);
// console.log(ace)


// function ace() {
//     var ace = document.createElement("img");
//     ace.setAttribute("src", "https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png");
//     ace.setAttribute("height", "350");
//     ace.setAttribute("width", "250");
//     ace.setAttribute("alt", "Flower");
//     document.getElementById("cCard").appendChild(ace);
//   }
// const deal = document.getElementById('deal');
// deal.addEventListener('click',console.log('hello'));

// window.onload = function (){
// const deal = document.getElementById("deal");
// deal.addEventListener("click", getImg);
// deal.addEventListener("click", getComImg);
// deal.addEventListener("click", console.log(first));
// }
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

function getComImg() { 

    const randomComImg = new Array();
    
    // randomImg.setAttribute('height','350');
    // randomImg.setAttribute('width','250');
    
    
    randomComImg[0] = "https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png";
    
    randomComImg[1] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png';
    
    randomComImg[2] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png';
    
    randomComImg[3] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png';
    
    randomComImg[4] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png';
    
    randomComImg[5] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png';
    
    randomComImg[6] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png';
    
    randomComImg[7] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png';
    
    randomComImg[8] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png';
    
    randomComImg[9] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png';
    
    randomComImg[10] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png';
    
    randomComImg[11] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png';
    
    randomComImg[12] = 'https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png';
    
    const imgNum2 = Math.floor(Math.random()*randomComImg.length);
    console.log(imgNum2)
    return document.getElementById("cCard").innerHTML = '<img src="'+randomComImg[imgNum2]+'" />';  
    
    }


    window.onload = function (){
        const deal = document.getElementById("deal");
        deal.addEventListener("click", getImg);
        deal.addEventListener("click", handler);
        }


        function comScore() {
            const computerScore = document.getElementById('cScore');
            let number = computerScore.innerHTML;
            number++;
            computerScore.innerHTML = number;
        }

function handler(){

let test = getImg()
let first = test[0]
let second = test[1]
console.log(first,second)
if (first > second){
    document.getElementById('msg').innerHTML = 'Player Wins!'
}
if (first < second){
    document.getElementById('msg').innerHTML = 'Computer Wins!'; comScore()

}
}


// if (getComImg.randomComImg != getImg.randomImg){
//     console.log('working!!');




// // console.log(imgNum2)
// if (console.log(imgNum) > console.log(imgNum2)) {
//     console.log('working')
