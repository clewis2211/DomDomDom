
document.addEventListener('DOMContentLoaded', function(){



let myDiv = document.createElement('div')
myDiv.className = 'header-container';

let myH1 = document.createElement('h1');
myH1.innerText = 'This is an h1';
myH1.className = 'h1-container';
myH1.addEventListener('click', function(){
    myH1.getRandomColor();
})




let myH2 = document.createElement('h2')
myH2.innerText = 'This is an h2'
myH2.className = 'h2-container';

let myH3 = document.createElement('h3');
myH3.innerText = 'This is an h3';
myH3.className = 'h3-container';

let myH4 = document.createElement('h4')
myH4.innerText = 'This is an h4';
myH4.className = 'h4-container';

let myH5 = document.createElement('h5');
myH5.innerText = 'This is an h5';
myH5.className = 'h5-container';

let myH6 = document.createElement('h6');
myH6.innerText = 'This is an h6';
myH6.className = 'h6-container';

myDiv.appendChild(myH1);
myDiv.appendChild(myH2);
myDiv.appendChild(myH3);
myDiv.appendChild(myH4);
myDiv.appendChild(myH5);
myDiv.appendChild(myH6);






document.body.appendChild(myDiv);

})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  