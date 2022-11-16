
// document.getElementById('pCard');

// let ace = document.createElement('img');
// ace.setAttribute("height", "350");
// ace.setAttribute("width", "250");
// ace.src = "https://image.shutterstock.com/image-vector/vector-spade-icon-260nw-646581166.jpg";
// document.getElementById('pCard').appendChild(ace);
// console.log(ace)


function ace() {
    var ace = document.createElement("img");
    ace.setAttribute("src", "https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png");
    ace.setAttribute("height", "350");
    ace.setAttribute("width", "250");
    ace.setAttribute("alt", "Flower");
    document.getElementById("pCard").appendChild(ace);
  }
// const deal = document.getElementById('deal');
// deal.addEventListener('click',console.log('hello'));
window.onload = function (){
const deal = document.getElementById("deal");
deal.addEventListener("click", getImg);
}
function getImg() { 

const randomImg = new Array('250','350');

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

return document.getElementById("pCard").innerHTML = '<img src="'+randomImg[imgNum]+'" />';  


// return document.getElementById("pCard").appendChild(randomImg[imgNum]);


}
console.log(getImg)