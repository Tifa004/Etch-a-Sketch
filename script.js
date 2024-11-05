function size(x){
  let cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.remove();
  });
  for(let i=0; i< x**2; i++){
    const div = document.createElement('div');
    div.classList.add(`cell`);
    div.style.width = `${300/x}px`;
    div.style.height = `${300/x}px`;
    div.style.backgroundColor = 'white';
    div.addEventListener("mouseenter", () => {
      if(div.style.backgroundColor === 'white'){
        div.style.backgroundColor = getRandomColor();
      }else{
       let color = div.style.backgroundColor;
       let opacity = color.split(",")[3].split(')')[0];
       opacity = parseFloat(opacity) +0.1;
        if(opacity>1){
          opacity = 1;
        }
        div.style.backgroundColor = `rgba(${color.split(",")[0].split('(')[1]},${color.split(',')[1]},${color.split(',')[2]},${opacity})`;
      }
    });
    
    document.querySelector('.container').appendChild(div);

  }
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Red: 0–255
  const g = Math.floor(Math.random() * 256); // Green: 0–255
  const b = Math.floor(Math.random() * 256); // Blue: 0–255
  return `rgb(${r}, ${g}, ${b} , 0.1)`; // Format as rgb(r, g, b)
}

function reset(){
  let cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
  }

const resize = document.querySelector('#resize');
let x=16;
size(x);
resize.addEventListener('click', () => {
                                          do{
                                          x=prompt("Enter grid size");
                                          if(x===null){
                                            x=16;
                                          } else if(x<1 || x>100){
                                            alert("Enter a number between 1 and 100");
                                          } else if(isNaN(x)){
                                            alert("Enter a number");
                                          }
                                          size(x);}while(x>100 || x<1 || isNaN(x));
                                        });

const clear = document.querySelector('#reset');
clear.addEventListener('click', () => {
  reset();
});
