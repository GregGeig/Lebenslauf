let counter1 = 1;
let counter2 = 1;
let counter1_2;
let counter1_3;
let counter2_2;
let counter2_3;
let nameofcharacter1 = 'Nathan Drake';
let nameofcharacter2 = 'Atoq Navarro';
let name1;
let name2;
let winsofcharacter1 = 0;
let winsofcharacter2 = 0;
let squarecounter;
let audio = new Audio("./Audio/04 Cut to the Chase.mp3")
let audio1 = new Audio("./Audio/05 Reunited.mp3")
let gameMatrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
]
let originalmatrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
]
let squares = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
]
let playerone = true;

function godown1(){
    if (counter1 == 1){
        counter1 = counter1 + 4;
    }else{
        counter1--;
    }
    counter1_2 = counter1 + 1;
    counter1_3 = counter1 - 1;
    if(counter1_3 < 1){
        counter1_3 = counter1_3 + 5
    }
    if(counter1_2 > 5){
        counter1_2 = counter1_2 - 5;
    }
    drawnewcharacter1();
}

function goup1(){
    if(counter1 == 5){
        counter1 = counter1 - 4;
    }else{
        counter1++;
    }
    counter1_2 = counter1 + 1;
    counter1_3 = counter1 - 1;
    if(counter1_3 < 1){
        counter1_3 = counter1_3 + 5
    }
    if(counter1_2 > 5){
        counter1_2 = counter1_2 - 5;
    }
    drawnewcharacter1();
}

function drawnewcharacter1(){
    audio1.play()
    if(counter1 == 1){
        nameofcharacter1 = 'Nathan Drake';
    }else if(counter1 == 2){
        nameofcharacter1 = 'Victor Sullivan';
    }else if(counter1 == 3){
        nameofcharacter1 = 'Elena Fisher';
    }else if(counter1 == 4){
        nameofcharacter1 = 'Chloe Frazer'
    }else{
        nameofcharacter1 = 'Samuel Drake'
    }
    document.getElementById('singlekarakter1').innerHTML =
    `
      <div class="charaktername">
      <h1>${nameofcharacter1}</h1>
    </div>
    <div class="upperpic" onclick="goup1()">
    <img src="./images/img${counter1_2}_g.webp">
  </div>
    <div class="pic">
    <img src="./images/img${counter1}_g.webp">
  </div>
  <div  class="lowerpic" onclick="godown1()">
    <img src="./images/img${counter1_3}_g.webp">
  </div>`
}


function godown2(){
    
    if (counter2 == 1){
        counter2 = counter2 + 4;
    }else{
        counter2--;
    }
    counter2_2 = counter2 + 1;
    counter2_3 = counter2 - 1;
    if(counter2_3 < 1){
        counter2_3 = counter2_3 + 5
    }
    if(counter2_2 > 5){
        counter2_2 = counter2_2 - 5;
    }
    drawnewcharacter2();
}

function goup2(){
    if(counter2 == 5){
        counter2 = counter2 - 4;
    }else{
        counter2++;
    }
    counter2_2 = counter2 + 1;
    counter2_3 = counter2 - 1;
    if(counter2_3 < 1){
        counter2_3 = counter2_3 + 5
    }
    if(counter2_2 > 5){
        counter2_2 = counter2_2 - 5;
    }
    drawnewcharacter2();
}

function drawnewcharacter2(){
    audio1.play()
    if(counter2 == 1){
        nameofcharacter2 = 'Atoq Navarro';
    }else if(counter2 == 2){
        nameofcharacter2 = 'Eddie Raja';
    }else if(counter2 == 3){
        nameofcharacter2 = 'Harry Flynn';
    }else if(counter2 == 4){
        nameofcharacter2 = 'Talbot'
    }else{
        nameofcharacter2 = 'Rafe Adler'
    }
    document.getElementById('singlekarakter2').innerHTML =
    `<div class="charaktername">
      <h1>${nameofcharacter2}</h1>
    </div>
    <div class="upperpic" onclick="goup2()">
    <img src="./images/img${counter2_2}_e.webp">
  </div>
    <div class="pic">
    <img src="./images/img${counter2}_e.webp">
  </div>
  <div  class="lowerpic" onclick="godown2()">
    <img src="./images/img${counter2_3}_e.webp">
  </div>`
}


function bigsubmit(){
    audio1.pause()
    audio.play()
    originalmatrix =[
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ]
    squares	= [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]
    squarecounter = 0;
    document.getElementById('content').innerHTML = 
    `<div class="head">
    <h1>Race to Henry Avery` + '`' + `s treasure</h1>
    </div>
    <div class="wholeline">
      <div id="standingpeople1">
        <div class="charaktername">
        <h1>${nameofcharacter1}</h1>
      </div>
      <div class="img1_">
      <img src="./images/img1.${counter1}_g.webp">
      </div>
      </div>

      <div class="vs">
        <img src="./images/vs_logo.png">
      </div>

      <div id="standingpeople2">
        <div class="charaktername">
        <h1>${nameofcharacter2}</h1>
      </div>
      <div class="img1_">
      <img src="./images/img1.${counter2}_e.webp">
      </div>
      </div>
      </div>
      
      <div class="loading"><div>
      
      <div class="downhead">
    <h3>Hinweis: Um zu gewinnen müssen Sie ihre drei Bilder in eine diagonale, horizontale oder vertikale Linie bringen!</h3>
    </div>`

      
    document.body.style.backgroundImage = "url('./images/background 2.jpg')";
    document.body.style.backgroundSize = "cover"
    setTimeout(() => {
        fightingarea();
    }, 5900);
}

function fightingarea(){
        document.body.style.backgroundImage = "url('./images/backgroundimage.jpg')"
        document.body.style.backgroundSize = 'cover'
        document.getElementById('content').innerHTML = 
        `<div class="headp">
        <h1>Race to Henry Avery` + '`' + `s treasure</h1>
        <h3>Hinweis: Um zu gewinnen müssen Sie ihre drei Bilder in eine diagonale, horizontale oder vertikale Linie bringen!</h3>
        </div>
        <div class="wholeline">
          <div id="standingpeople3">
            <div class="charaktername">
            <h1>${nameofcharacter1}</h1>
          </div>
          <div class="img1_">
          <img src="./images/img1.${counter1}_g.webp">
          </div>
          </div>

          <div id="grid-container">
        <div id="0"  class="grid-item" onclick="printpics(this,0)"></div>
        <div id="1"  class="grid-item" onclick="printpics(this,1)"></div>
        <div id="2"  class="grid-item" onclick="printpics(this,2)"></div>
        <div id="3"  class="grid-item" onclick="printpics(this,3)"></div>
        <div id="4"  class="grid-item" onclick="printpics(this,4)"></div>
        <div id="5"  class="grid-item" onclick="printpics(this,5)"></div>
        <div id="6"  class="grid-item" onclick="printpics(this,6)"></div>
        <div id="7"  class="grid-item" onclick="printpics(this,7)"></div>
        <div id="8"  class="grid-item" onclick="printpics(this,8)"></div>
    </div>
          
          <div id="standingpeople4">
        <div class="charaktername">
        <h1>${nameofcharacter2}</h1>
      </div>
      <div class="img1_">
      <img src="./images/img1.${counter2}_e.webp">
      </div>
      </div>
      </div>`
    }

function printpics(item,pos){ 
    if(playerone == true && squares[pos] == false){
        document.getElementById(`${pos}`).style.backgroundImage = ` url('./images/img${counter1}_g.webp')`
        document.getElementById(`${pos}`).style.backgroundSize = 'cover'
        if (pos < 3){
            gameMatrix[0][pos] = 1;
        }else if(pos > 2 && pos < 6){
            gameMatrix [1][pos - 3] = 1;
        }else{
            gameMatrix [2][pos - 6] = 1;
        }
        playerone = false
        squarecounter++;
        squares[pos] = true;
    }else if(playerone == false && squares[pos] == false){
        document.getElementById(`${pos}`).style.backgroundImage = ` url('./images/img${counter2}_e.webp')`
        document.getElementById(`${pos}`).style.backgroundSize = 'cover'
        if (pos < 3){
            gameMatrix [0][pos] = 10;
        }else if(pos > 2 && pos < 6){
            gameMatrix [1][pos - 3] = 10;
        }else{
            gameMatrix [2][pos - 6] = 10;
        }
        playerone = true
        squarecounter++; 
        squares[pos] = true;  
    }
    checkwinner();
}

function checkwinner(){
    if (gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2] == 3 || gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2] == 3 ||
        gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2] == 3 || gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0] == 3 ||
        gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1] == 3 || gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2] == 3 ||
        gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2] == 3 || gameMatrix[2][0] + gameMatrix[1][1] + gameMatrix[0][2] == 3){
        winsofcharacter1++;
        document.body.style.backgroundImage = "url('./images/finalback.jpg')"
        document.body.style.backgroundSize = "contain"
        document.getElementById("content").innerHTML =
        `<div class="headl">
        <h1>Race to Henry Avery` + '`' + `s treasure</h1>
        <h2>${nameofcharacter1} hat gewonnen!</h2>
        <h3>Aktueller Spielstand: ${nameofcharacter1}: Hat ${winsofcharacter1} mal gewonnen! ${nameofcharacter2}: Hat ${winsofcharacter2} mal gewonnen!</h3>
        </div>
        <div class="finalimage">
        <img src="./images/img1.${counter1}_g.webp">
        </div>
        
        <div class="submitl" onclick="bigsubmit()">
        <h1>Neues Spiel</h1>
      </div>`
      gameMatrix = originalmatrix;
      console.log(gameMatrix)
    }else if(gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2] == 30 || gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2] == 30 ||
        gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2] == 30 || gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0] == 30 ||
        gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1] == 30 || gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2] == 30 ||
        gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2] == 30 || gameMatrix[2][0] + gameMatrix[1][1] + gameMatrix[0][2] == 30){
            winsofcharacter2++;
            document.getElementById("content").innerHTML =
            `<div class="headl">
            <h1>Race to Henry Avery` + '`' + `s treasure</h1>
            <h2>${nameofcharacter2} hat gewonnen!</h2>
            <h3>Aktueller Spielstand: ${nameofcharacter1}: Hat ${winsofcharacter1} mal gewonnen! ${nameofcharacter2}: Hat ${winsofcharacter2} mal gewonnen!</h3>
            </div>
            <div class="finalimage">
            <img src="./images/img1.${counter2}_e.webp">
            </div>
            
            <div class="submitl" onclick="bigsubmit()">
            <h1>Neues Spiel</h1>
            </div>`
            gameMatrix = originalmatrix;
    }else if(squarecounter == 9){
        document.getElementById('content').innerHTML = 
        `<div class="headl">
        <h1>Race to Henry Avery` + '`' + `s treasure</h1>
        <h2>Unentschieden</h2>
        <h3>Aktueller Spielstand: ${nameofcharacter1}: Hat ${winsofcharacter1} mal gewonnen! ${nameofcharacter2}: Hat ${winsofcharacter2} mal gewonnen!</h3>
        </div>
        <div class="bothcharakters">
        <div class="finalimage">
        <img src="./images/img1.${counter1}_g.webp">
        </div>
        <div class="finalimage">
        <img src="./images/img1.${counter2}_e.webp">
        </div>
        </div>
        
        <div class="submitl" onclick="bigsubmit()">
        <h1>Neues Spiel</h1>
        </div>`
        gameMatrix = originalmatrix;
    }
}
