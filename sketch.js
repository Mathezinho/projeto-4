 let palavra;
 let musica;
 let imagem;
 
function setup() {
  createCanvas(500, 500);
 palavra = marcos();
}
function preload() {
imagem = loadImage("muitas-laranjas.png.webp");
}

function draw() {
  chocolate();
  marcos();
  let maximo = width;
  let minimo = 0;
  
  let aparecer = map(mouseX, 0 , width, 1,palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 250, 250);
}

function chocolate(){
background("violet");
image(imagem,0,0,500,500);
fill("lightblue");
textSize(64);
textAlign(CENTER,CENTER);
}
 
function marcos(){
let palavra = ["coxinha", "neymar", "mcqueen", "marcos", "GTA"];
return random(palavra);
}