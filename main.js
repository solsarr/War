
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
deal.addEventListener("click", ace);
}
