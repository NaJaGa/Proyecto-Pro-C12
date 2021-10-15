var path,boy,imapath , leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var anijaxon, jaxon;

function preload(){
  //loadImage de path (camino)
  imapath = loadImage("path.png")
  //loadAnimation de boy (niño)
  anijaxon = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  
  createCanvas(400,400);
  //crear sprite de path (camino)
  path = createSprite (200,200,10,10)
  //agregar imagen de path
  path.addImage(imapath);
  

//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.velocityY = 7;
path.y = height/2;
path.scale=1.2;

//crear sprite de boy (niño)
jaxon = createSprite(200,350,20,20);
jaxon.addAnimation("JaxonRunning",anijaxon)
jaxon.scale = .08;
//agregar animación para boy
//boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false;
}

function draw() {
  background(0);
  //path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  jaxon.x = World.mouseX;
  
  //edges= createEdgeSprites();
  //boy.collide(edges[3]);
  jaxon.collide(leftBoundary);
  jaxon.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
   //código para reiniciar el fondo
  if (path.y > 500){
    path.y = height/2;
  }
  
  
    
  
  
  drawSprites();
}
