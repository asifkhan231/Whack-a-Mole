let currentMole ;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = ()=>{
    setGame();
}

function setGame(){
    // 3x3
    for(let i=0;i<9;i++){
        let tiles = document.createElement('div');
        tiles.id = i.toString();
        document.querySelector('.board').appendChild(tiles);
        tiles.addEventListener('click',selectTile);


    }


   let MoleId =  setInterval(setMole, 1000);
   let plantId =  setInterval(setTreeTile,2000)
}

function getRandomNum(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }
    if(currentMole){
        currentMole.innerHTML = "";
    }
    let mole = document.createElement('img');
    mole.src = 'images/MontyMole.webp' ;

    let num =getRandomNum();
    if(currentPlantTile && currentPlantTile.id == num){
        return;
    }
    currentMole = document.getElementById(num);
    currentMole.appendChild(mole);

}

function setTreeTile(){
    if(gameOver){
        return;
    }
    if(currentPlantTile){
        currentPlantTile.innerHTML = '';
    }
    let mole = document.createElement('img');
    mole.src = 'images/plant.webp' ;

    let num =getRandomNum();
    if(currentMole && currentMole.id == num){
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(mole);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currentMole){
        score += 10;
        document.getElementById('score').innerHTML = score;
    }
    if(this == currentPlantTile){
        document.getElementById('score').innerHTML = 'GAME OVER :' + score.toString();
        gameOver = true;
    }
}