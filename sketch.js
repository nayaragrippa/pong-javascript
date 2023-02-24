//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let velocidadeXOponente;
let chanceDeErrar = 0;

//sons do jogo
let raquetada;
let ponto;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();  
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}


function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha (){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda (){
  if (xBolinha + raio> width ||
      xBolinha - raio< 0 ){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio> height ||
      yBolinha - raio< 0 ){
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete (x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}


function movimentaMinhaRaquete (){
  if (keyIsDown (87)){
    yRaquete -= 10;
  }
  if (keyIsDown (83)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }
}

function colisaoRaqueteOponente(){
  if(xBolinha + raio > xRaqueteOponente 
   && yBolinha - raio < yRaqueteOponente + raqueteAltura
   && yBolinha + raio > yRaqueteOponente){
  velocidadexBolinha *= -1;
}
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function incluiPlacar(){
  fill(255)
  text(meusPontos, 278, 26)
  text(pontosDoOponente, 321, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function preload() {
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
        velocidadexBolinha *= -1;
        raquetada.play();
    }
}

function colisaoRaqueteOponente(x, y) {
    if (xBolinha + raio > xRaqueteOponente + raqueteComprimento && yBolinha - raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente) {
        velocidadexBolinha *= -1;
        raquetada.play();
    }
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}


function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 200){
    chanceDeErrar = 2001
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 45
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}


