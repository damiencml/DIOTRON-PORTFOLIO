var myBoolean = false;
var zoom1 = 0.2
var zoom2 = 100;
var Radius = 200;
var strenght = -10;
var cnv, scroll;

var nodeDiameterxa;
var nodeDiameterya;
var nodeDiameterxb;
var nodeDiameteryb;
var nodeDiameterxc;
var nodeDiameteryc;
var nodeDiameterxd;
var nodeDiameteryd;
var nodeDiameterxe;
var nodeDiameterye;

var textsize;
var textsize2;
var font;
var texthide;
var textvu;
var back;
var rouge;
var strokenode = 10;
//=======================================
//=======================================
var auxétisme = 'Auxetisme'; //0
var spr1 = '01';
var tenségrité = 'Tensegrité'; //1
var spr2 = '02';
var jamming = 'Jamming'; //2
var spr3 = '03';
var système = 'Système'; //3
var spr4 = '04';
var pneumatique = 'pneumatique';
var motif = 'Système'; //4
var spr5 = '05';
var procédural = 'procédurale';
var mémoire = 'Bi-stabilité'; //5
var spr6 = '06';
var surface = 'Tension'; //6
var spr7 = '07';
var entension = 'Surfassique';
var motif2 = 'Motif'; //7
var spr8 = '08';
var céllulaire = 'céllulaire';
var courbes = 'Courbe'; //8
var polynomiales = 'polynomiale';
var déformation = 'déformation'; //9
var différentielle = 'différentielles';
var matière = 'Matière'; //10
var granulaire = 'granulaire';
var abrasion = 'Abrasion'; //11
var turbulence = 'Perturbation'; //12
var réflexion = 'Réflexion'; //13
var portance = 'Portance'; //14
var écoulement = 'Ecoulement'; //15
var laminaire = 'laminaire';
var réaction = 'Réaction'; //16
var chimique = 'chimique';
var spr9 = '09';
var réacdif = 'Réaction/Diffusion';//17
var spr10 = '10'
var compliance = 'Compliance'; //18
var spr11 = '11';
var spr12 = '12';
var spr13 = '13';
var spr14 = '14';
var systmL = 'Système L'; //19
var spr15 = '15';
var morphing = 'Morphing';//20
var spr16 = '16';

var spr15;
var a = 0.0;


//=======================================
//          SKETCH START HERE
//=======================================
// let img;
// function preload () {
//   img = loadImage('programmation/p5/portefolio/empty-example/lorenz2.png');
// }

var sketch = function(p) {
  // an array for the nodes
var nodeCount = 69;
var nodes = [];
  // an array for the springs
var springs = [];
  // dragged node
var selectedNode = null;
var nodeDiameter = 16;

// p.preload = function() {
// };
let img;
p.preload = function() {
  img = p.loadImage('empty-example/lorenz2.png');
}

//colors
p.setup = function() {
  cnv = p.createCanvas(1920, 965);//1076
  textsize = p.textSize(20);
  textsize2 = p.textSize(20);
  texthide = p.color(25+5,32+10,43+35);
  textvu = p.color(248,252,191);
  // rouge = p.color(91,21,15);
  rouge = p.color(74,54,26);
  bleu = p.color(140,162,195)

  // texthideconcept = p.color(61,88,123);
  // texthideconcept = p.color(120,84,50);
  // texthideconcept = p.color(84,64,26);
  texthideconcept = p.color(74,54,26);
  textvuconcept = p.color(bleu);
  back = p.color(22,17,0);
  p.smooth();
  p.frameRate(50);
  font1 = 'Space Grotesk'
  font2 = 'Honor';
  cnv.mouseWheel(changeSize);
  scroll = -483;
  p.textAlign(p.CENTER, p.CENTER);
  console.log();
  p.noStroke();
  initNodesAndSprings();
};
//scrollsetting
var changeSize = function(event) {

  // if (scroll < 0 && scroll > -484) {
  if (event.deltaY > 0) {
    scroll = scroll - 71;
  } else {
    scroll = scroll + 71;
  }
}
//initialise
var initNodesAndSprings = function() {

var rad = nodeDiameterxb/2;
nodes[0] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
nodes[0].minX = rad;
nodes[0].minY = rad;
nodes[0].maxX = p.width - rad;
nodes[0].maxY = p.height - rad;
nodes[0].radius = Radius;
nodes[0].strength = strenght;
nodes[1] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
nodes[1].minX = rad;
nodes[1].minY = rad;
nodes[1].maxX = p.width - rad;
    nodes[1].maxY = p.height - rad;
    nodes[1].radius = Radius;
    nodes[1].strength = strenght;
    nodes[2] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[2].minX = rad;
    nodes[2].minY = rad;
    nodes[2].maxX = p.width - rad;
    nodes[2].maxY = p.height - rad;
    nodes[2].radius = Radius;
    nodes[2].strength = strenght;
    nodes[3] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[3].minX = rad;
    nodes[3].minY = rad;
    nodes[3].maxX = p.width - rad;
    nodes[3].maxY = p.height - rad;
    nodes[3].radius = Radius;
    nodes[3].strength = strenght;
    nodes[4] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100,100));
    nodes[4].minX = rad;
    nodes[4].minY = rad;
    nodes[4].maxX = p.width - rad;
    nodes[4].maxY = p.height - rad;
    nodes[4].radius = Radius;
    nodes[4].strength = strenght;
    nodes[5] = new Node(p.width/2+400+p.random(-100,100), p.height/2+p.random(-100, 100));
    nodes[5].minX = rad;
    nodes[5].minY = rad;
    nodes[5].maxX = p.width - rad;
    nodes[5].maxY = p.height - rad;
    nodes[5].radius = Radius;
    nodes[5].strength = strenght;
    nodes[6] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100,100));
    nodes[6].minX = rad;
    nodes[6].minY = rad;
    nodes[6].maxX = p.width - rad;
    nodes[6].maxY = p.height - rad;
    nodes[6].radius = Radius;
    nodes[6].strength = strenght;
    nodes[7] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[7].minX = rad;
    nodes[7].minY = rad;
    nodes[7].maxX = p.width - rad;
    nodes[7].maxY = p.height - rad;
    nodes[7].radius = Radius;
    nodes[7].strength = strenght;
    nodes[8] = new Node(p.width/2+400+p.random(-100,100), p.height/2+p.random(-100, 100));
    nodes[8].minX = rad;
    nodes[8].minY = rad;
    nodes[8].maxX = p.width - rad;
    nodes[8].maxY = p.height - rad;
    nodes[8].radius = Radius;
    nodes[8].strength = strenght;
    nodes[9] = new Node(p.width/2+400+p.random(-100,100), p.height/2+p.random(-100, 100));
    nodes[9].minX = rad;
    nodes[9].minY = rad;
    nodes[9].maxX = p.width - rad;
    nodes[9].maxY = p.height - rad;
    nodes[9].radius = Radius;
    nodes[9].strength = strenght;
    nodes[10] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[10].minX = rad;
    nodes[10].minY = rad;
    nodes[10].maxX = p.width - rad;
    nodes[10].maxY = p.height - rad;
    nodes[10].radius = Radius;
    nodes[10].strength = strenght;
    nodes[11] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[11].minX = rad;
    nodes[11].minY = rad;
    nodes[11].maxX = p.width - rad;
    nodes[11].maxY = p.height - rad;
    nodes[11].radius = Radius;
    nodes[11].strength = strenght;
    nodes[12] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[12].minX = rad;
    nodes[12].minY = rad;
    nodes[12].maxX = p.width - rad;
    nodes[12].maxY = p.height - rad;
    nodes[12].radius = Radius;
    nodes[12].strength = strenght;
    nodes[13] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[13].minX = rad;
    nodes[13].minY = rad;
    nodes[13].maxX = p.width - rad;
    nodes[13].maxY = p.height - rad;
    nodes[13].radius = Radius;
    nodes[13].strength = strenght;
    nodes[14] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[14].minX = rad;
    nodes[14].minY = rad;
    nodes[14].maxX = p.width - rad;
    nodes[14].maxY = p.height - rad;
    nodes[14].radius = Radius;
    nodes[14].strength = strenght;
    nodes[15] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[15].minX = rad;
    nodes[15].minY = rad;
    nodes[15].maxX = p.width - rad;
    nodes[15].maxY = p.height - rad;
    nodes[15].radius = Radius;
    nodes[15].strength = strenght;
    nodes[16] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[16].minX = rad;
    nodes[16].minY = rad;
    nodes[16].maxX = p.width - rad;
    nodes[16].maxY = p.height - rad;
    nodes[16].radius = Radius;
    nodes[16].strength = strenght;
    nodes[17] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[17].minX = rad;
    nodes[17].minY = rad;
    nodes[17].maxX = p.width - rad;
    nodes[17].maxY = p.height - rad;
    nodes[17].radius = Radius;
    nodes[17].strength = strenght;
    nodes[18] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[18].minX = rad;
    nodes[18].minY = rad;
    nodes[18].maxX = p.width - rad;
    nodes[18].maxY = p.height - rad;
    nodes[18].radius = Radius;
    nodes[18].strength = strenght;
    nodes[19] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[19].minX = rad;
    nodes[19].minY = rad;
    nodes[19].maxX = p.width - rad;
    nodes[19].maxY = p.height - rad;
    nodes[19].radius = Radius;
    nodes[19].strength = strenght;
    nodes[20] = new Node(p.width/2+400+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[20].minX = rad;
    nodes[20].minY = rad;
    nodes[20].maxX = p.width - rad;
    nodes[20].maxY = p.height - rad;
    nodes[20].radius = Radius;
    nodes[20].strength = strenght;

if(p.key=='r' ||p.key=='R') {
        nodes[0] = new Node(p.width/2+400+p.random(-94, 0), p.height/2+p.random(-125, 0));
        nodes[0].minX = rad;
        nodes[0].minY = rad;
        nodes[0].maxX = p.width - rad;
        nodes[0].maxY = p.height - rad;
        nodes[0].radius = Radius;
        nodes[0].strength = strenght;

        nodes[1] = new Node(p.width/2+400+p.random(-182, -188), p.height/2+p.random(-150, -125));
        nodes[1].minX = rad;
        nodes[1].minY = rad;
        nodes[1].maxX = p.width - rad;
        nodes[1].maxY = p.height - rad;
        nodes[1].radius = Radius;
        nodes[1].strength = strenght;

        nodes[2] = new Node(p.width/2+400+p.random(0, 94), p.height/2+p.random(0, 125));
        nodes[2].minX = rad;
        nodes[2].minY = rad;
        nodes[2].maxX = p.width - rad;
        nodes[2].maxY = p.height - rad;
        nodes[2].radius = Radius;
        nodes[2].strength = strenght;

        nodes[3] = new Node(p.width/2+400+p.random(282, 376), p.height/2+p.random(-150, -125));
        nodes[3].minX = rad;
        nodes[3].minY = rad;
        nodes[3].maxX = p.width - rad;
        nodes[3].maxY = p.height - rad;
        nodes[3].radius = Radius;
        nodes[3].strength = strenght;

        nodes[4] = new Node(p.width/2+400+p.random(94, 188), p.height/2+p.random(-125, -100));
        nodes[4].minX = rad;
        nodes[4].minY = rad;
        nodes[4].maxX = p.width - rad;
        nodes[4].maxY = p.height - rad;
        nodes[4].radius = Radius;
        nodes[4].strength = strenght;

        nodes[5] = new Node(p.width/2+400+p.random(-188,-94), p.height/2+p.random(-125, 0));
        nodes[5].minX = rad;
        nodes[5].minY = rad;
        nodes[5].maxX = p.width - rad;
        nodes[5].maxY = p.height - rad;
        nodes[5].radius = Radius;
        nodes[5].strength = strenght;

        nodes[6] = new Node(p.width/2+400+p.random(0, 94), p.height/2+p.random(-375,-150));
        nodes[6].minX = rad;
        nodes[6].minY = rad;
        nodes[6].maxX = p.width - rad;
        nodes[6].maxY = p.height - rad;
        nodes[6].radius = Radius;
        nodes[6].strength = strenght;

        nodes[7] = new Node(p.width/2+400+p.random(94, 188), p.height/2+p.random(-165, -140));
        nodes[7].minX = rad;
        nodes[7].minY = rad;
        nodes[7].maxX = p.width - rad;
        nodes[7].maxY = p.height - rad;
        nodes[7].radius = Radius;
        nodes[7].strength = strenght;

        nodes[8] = new Node(p.width/2+400+p.random(0,94), p.height/2+p.random(125, 250));
        nodes[8].minX = rad;
        nodes[8].minY = rad;
        nodes[8].maxX = p.width - rad;
        nodes[8].maxY = p.height - rad;
        nodes[8].radius = Radius;
        nodes[8].strength = strenght;

        nodes[9] = new Node(p.width/2+400+p.random(-188,-94), p.height/2+p.random(0, 125));
        nodes[9].minX = rad;
        nodes[9].minY = rad;
        nodes[9].maxX = p.width - rad;
        nodes[9].maxY = p.height - rad;
        nodes[9].radius = Radius;
        nodes[9].strength = strenght;

        nodes[10] = new Node(p.width/2+400+p.random(188, 282), p.height/2+p.random(-125, 0));
        nodes[10].minX = rad;
        nodes[10].minY = rad;
        nodes[10].maxX = p.width - rad;
        nodes[10].maxY = p.height - rad;
        nodes[10].radius = Radius;
        nodes[10].strength = strenght;

        nodes[11] = new Node(p.width/2+400+p.random(94, 188), p.height/2+p.random(-125, 0));
        nodes[11].minX = rad;
        nodes[11].minY = rad;
        nodes[11].maxX = p.width - rad;
        nodes[11].maxY = p.height - rad;
        nodes[11].radius = Radius;
        nodes[11].strength = strenght;

        nodes[12] = new Node(p.width/2+400+p.random(94, 188), p.height/2+p.random(188,250));
        nodes[12].minX = rad;
        nodes[12].minY = rad;
        nodes[12].maxX = p.width - rad;
        nodes[12].maxY = p.height - rad;
        nodes[12].radius = Radius;
        nodes[12].strength = strenght;

        nodes[13] = new Node(p.width/2+400+p.random(94,188), p.height/2+p.random(250, 375));
        nodes[13].minX = rad;
        nodes[13].minY = rad;
        nodes[13].maxX = p.width - rad;
        nodes[13].maxY = p.height - rad;
        nodes[13].radius = Radius;
        nodes[13].strength = strenght;

        nodes[14] = new Node(p.width/2+400+p.random(-182, -188), p.height/2+p.random(250, 375));
        nodes[14].minX = rad;
        nodes[14].minY = rad;
        nodes[14].maxX = p.width - rad;
        nodes[14].maxY = p.height - rad;
        nodes[14].radius = Radius;
        nodes[14].strength = strenght;

        nodes[15] = new Node(p.width/2+400+p.random(-182, -188), p.height/2+p.random(125, 250));
        nodes[15].minX = rad;
        nodes[15].minY = rad;
        nodes[15].maxX = p.width - rad;
        nodes[15].maxY = p.height - rad;
        nodes[15].radius = Radius;
        nodes[15].strength = strenght;

        nodes[16] = new Node(p.width/2+400+p.random(282, 376), p.height/2+p.random(125, 250));
        nodes[16].minX = rad;
        nodes[16].minY = rad;
        nodes[16].maxX = p.width - rad;
        nodes[16].maxY = p.height - rad;
        nodes[16].radius = Radius;
        nodes[16].strength = strenght;

        nodes[17] = new Node(p.width/2+400+p.random(282, 188), p.height/2+p.random(0, 125));
        nodes[17].minX = rad;
        nodes[17].minY = rad;
        nodes[17].maxX = p.width - rad;
        nodes[17].maxY = p.height - rad;
        nodes[17].radius = Radius;
        nodes[17].strength = strenght;

        nodes[18] = new Node(p.width/2+400+p.random(-376,-182), p.height/2+p.random(0, 125));
        nodes[18].minX = rad;
        nodes[18].minY = rad;
        nodes[18].maxX = p.width - rad;
        nodes[18].maxY = p.height - rad;
        nodes[18].radius = Radius;
        nodes[18].strength = strenght;

        nodes[19] = new Node(p.width/2+400+p.random(-94, 0), p.height/2+p.random(-150,-125));
        nodes[19].minX = rad;
        nodes[19].minY = rad;
        nodes[19].maxX = p.width - rad;
        nodes[19].maxY = p.height - rad;
        nodes[19].radius = Radius;
        nodes[19].strength = strenght;

        nodes[20] = new Node(p.width/2+400+p.random(282, 376), p.height/2+p.random(-125, 0));
        nodes[20].minX = rad;
        nodes[20].minY = rad;
        nodes[20].maxX = p.width - rad;
        nodes[20].maxY = p.height - rad;
        nodes[20].radius = Radius;
        nodes[20].strength = strenght;


      }



  };


p.draw = function() {
p.textFont(font1);
if (p.myBoolean) beginRecord(p.PDF, timestamp()+'.pdf');
p.background(back);
var gridSize = 70;
for (var x = 12; x <= p.width+400; x += gridSize) {
for (var y = 15; y <= p.height+400; y += gridSize) {
p.fill(40,32,35);
p.noStroke();
p.rect(x-1, y-1, 5, 5, 72);
}
}
p.image(img, 500, 500, 400, 200, 200, 100, 500, 500);

//repères
//  p.stroke(119,138,164);
// p.stroke(255,255,150);
// var gauche = p.line(880, 0, 880, p.height);
// var droite = p.line(1865, 0, 1865, p.height);
// var haut = p.line(0, 60, p.width, 60);
// var bas = p.line(0, 905, p.width, 905);
// var gauche2 = p.line(70, 0, 70, p.height);
// var haut2 = p.line(0, 70, p.width, 70);
// var bas2 = p.line(0, 111, p.width, 111);//+41px//+10px




// p.cadre = function () {
var node0posX =  p.constrain(nodes[0].x, 880, 1865);
var node0posY =  p.constrain(nodes[0].y, 60, 905);
if (node0posX === 880 || node0posY === 60 ){ nodes[0] =  new Node(node0posX+1, node0posY+1);}
if (node0posX === 1865 || node0posY === 905 ){ nodes[0] =  new Node(node0posX-1, node0posY-1);}

var node1posX =  p.constrain(nodes[1].x, 880, 1865);
var node1posY =  p.constrain(nodes[1].y, 60, 905);
if (node1posX === 880 || node1posY === 60 ){ nodes[1] =  new Node(node1posX+1, node1posY+1);}
if (node1posX === 1865 || node1posY === 905 ){ nodes[1] =  new Node(node1posX-1, node1posY-1);}

var node2posX =  p.constrain(nodes[2].x, 880, 1865);
var node2posY =  p.constrain(nodes[2].y, 60, 905);
if (node2posX === 880 || node2posY === 60 ){ nodes[2] =  new Node(node2posX+1, node2posY+1);}
if (node2posX === 1865 || node2posY === 905 ){ nodes[2] =  new Node(node2posX-1, node2posY-1);}

var node3posX =  p.constrain(nodes[3].x, 880, 1865);
var node3posY =  p.constrain(nodes[3].y, 60, 905);
if (node3posX === 880 || node3posY === 60 ){ nodes[3] =  new Node(node3posX+1, node3posY+1);}
if (node3posX === 1865 || node3posY === 905 ){ nodes[3] =  new Node(node3posX-1, node3posY-1);}

var node4posX =  p.constrain(nodes[4].x, 880, 1865);
var node4posY =  p.constrain(nodes[4].y, 60, 905);
if (node4posX === 880 || node4posY === 60 ){ nodes[4] =  new Node(node4posX+1, node4posY+1);}
if (node4posX === 1865 || node4posY === 905 ){ nodes[4] =  new Node(node4posX-1, node4posY-1);}

var node5posX =  p.constrain(nodes[5].x, 880, 1865);
var node5posY =  p.constrain(nodes[5].y, 60, 905);
if (node5posX === 880 || node5posY === 60 ){ nodes[5] =  new Node(node5posX+1, node5posY+1);}
if (node5posX === 1865 || node5posY === 905 ){ nodes[5] =  new Node(node5posX-1, node5posY-1);}

var node6posX =  p.constrain(nodes[6].x, 880, 1865);
var node6posY =  p.constrain(nodes[6].y, 60, 905);
if (node6posX === 880 || node6posY === 60 ){ nodes[6] =  new Node(node6posX+1, node6posY+1);}
if (node6posX === 1865 || node6posY === 905 ){ nodes[6] =  new Node(node6posX-1, node6posY-1);}

var node7posX =  p.constrain(nodes[7].x, 880, 1865);
var node7posY =  p.constrain(nodes[7].y, 60, 905);
if (node7posX === 880 || node7posY === 60 ){ nodes[7] =  new Node(node7posX+1, node7posY+1);}
if (node7posX === 1865 || node7posY === 905 ){ nodes[7] =  new Node(node7posX-1, node7posY-1);}

var node8posX =  p.constrain(nodes[8].x, 880, 1865);
var node8posY =  p.constrain(nodes[8].y, 60, 905);
if (node8posX === 880 || node8posY === 60 ){ nodes[8] =  new Node(node8posX+1, node8posY+1);}
if (node8posX === 1865 || node8posY === 905 ){ nodes[8] =  new Node(node8posX-1, node8posY-1);}

var node9posX =  p.constrain(nodes[9].x, 880, 1865);
var node9posY =  p.constrain(nodes[9].y, 60, 905);
if (node9posX === 880 || node9posY === 60 ){ nodes[9] =  new Node(node9posX+1, node9posY+1);}
if (node9posX === 1865 || node9posY === 905 ){ nodes[9] =  new Node(node9posX-1, node9posY-1);}

var node10posX =  p.constrain(nodes[10].x, 880, 1865);
var node10posY =  p.constrain(nodes[10].y, 60, 905);
if (node10posX === 880 || node10posY === 60 ){ nodes[10] =  new Node(node10posX+1, node10posY+1);}
if (node10posX === 1865 || node10posY === 905 ){ nodes[10] =  new Node(node10posX-1, node10posY-1);}

var node11posX =  p.constrain(nodes[11].x, 880, 1865);
var node11posY =  p.constrain(nodes[11].y, 60, 905);
if (node11posX === 880 || node11posY === 60 ){ nodes[11] =  new Node(node11posX+1, node11posY+1);}
if (node11posX === 1865 || node11posY === 905 ){ nodes[11] =  new Node(node11posX-1, node11posY-1);}

var node12posX =  p.constrain(nodes[12].x, 880, 1865);
var node12posY =  p.constrain(nodes[12].y, 60, 905);
if (node12posX === 880 || node12posY === 60 ){ nodes[12] =  new Node(node12posX+1, node12posY+1);}
if (node12posX === 1865 || node12posY === 905 ){ nodes[12] =  new Node(node12posX-1, node12posY-1);}

var node13posX =  p.constrain(nodes[13].x, 880, 1865);
var node13posY =  p.constrain(nodes[13].y, 60, 905);
if (node13posX === 880 || node13posY === 60 ){ nodes[13] =  new Node(node13posX+1, node13posY+1);}
if (node13posX === 1865 || node13posY === 905 ){ nodes[13] =  new Node(node13posX-1, node13posY-1);}

var node14posX =  p.constrain(nodes[14].x, 880, 1865);
var node14posY =  p.constrain(nodes[14].y, 60, 905);
if (node14posX === 880 || node14posY === 60 ){ nodes[14] =  new Node(node14posX+1, node14posY+1);}
if (node14posX === 1865 || node14posY === 905 ){ nodes[14] =  new Node(node14posX-1, node14posY-1);}

var node15posX =  p.constrain(nodes[15].x, 880, 1865);
var node15posY =  p.constrain(nodes[15].y, 60, 905);
if (node15posX === 880 || node15posY === 60 ){ nodes[15] =  new Node(node15posX+1, node15posY+1);}
if (node15posX === 1865 || node15posY === 905 ){ nodes[15] =  new Node(node15posX-1, node15posY-1);}

var node16posX =  p.constrain(nodes[16].x, 880, 1865);
var node16posY =  p.constrain(nodes[16].y, 60, 905);
if (node16posX === 880 || node16posY === 60 ){ nodes[16] =  new Node(node16posX+1, node16posY+1);}
if (node16posX === 1865 || node16posY === 905 ){ nodes[16] =  new Node(node16posX-1, node16posY-1);}

var node17posX =  p.constrain(nodes[17].x, 880, 1865);
var node17posY =  p.constrain(nodes[17].y, 60, 905);
if (node17posX === 880 || node17posY === 60 ){ nodes[17] =  new Node(node17posX+1, node17posY+1);}
if (node17posX === 1865 || node17posY === 905 ){ nodes[17] =  new Node(node17posX-1, node17posY-1);}

var node18posX =  p.constrain(nodes[18].x, 880, 1865);
var node18posY =  p.constrain(nodes[18].y, 60, 905);
if (node18posX === 880 || node18posY === 60 ){ nodes[18] =  new Node(node18posX+1, node18posY+1);}
if (node18posX === 1865 || node18posY === 905 ){ nodes[18] =  new Node(node18posX-1, node18posY-1);}

var node19posX =  p.constrain(nodes[19].x, 880, 1865);
var node19posY =  p.constrain(nodes[19].y, 60, 905);
if (node19posX === 880 || node19posY === 60 ){ nodes[19] =  new Node(node19posX+1, node19posY+1);}
if (node19posX === 1865 || node19posY === 905 ){ nodes[19] =  new Node(node19posX-1, node19posY-1);}

var node20posX =  p.constrain(nodes[20].x, 880, 1865);
var node20posY =  p.constrain(nodes[20].y, 60, 905);
if (node20posX === 880 || node20posY === 60 ){ nodes[20] =  new Node(node20posX+1, node20posY+1);}
if (node20posX === 1865 || node20posY === 905 ){ nodes[20] =  new Node(node20posX-1, node20posY-1);}


   nodes[0].attract(nodes[1]);    nodes[0].attract(nodes[2]);    nodes[0].attract(nodes[3]);    nodes[0].attract(nodes[4]);    nodes[0].attract(nodes[5]); nodes[0].attract(nodes[6]); nodes[0].attract(nodes[7]); nodes[0].attract(nodes[8]); nodes[0].attract(nodes[9]); nodes[0].attract(nodes[10]); nodes[0].attract(nodes[11]); nodes[0].attract(nodes[12]); nodes[0].attract(nodes[13]); nodes[0].attract(nodes[14]); nodes[0].attract(nodes[15]); nodes[0].attract(nodes[16]);  nodes[0].attract(nodes[17]);  nodes[0].attract(nodes[18]);  nodes[0].attract(nodes[19]);  nodes[0].attract(nodes[20]);
   nodes[1].attract(nodes[0]);    nodes[1].attract(nodes[2]);    nodes[1].attract(nodes[3]);    nodes[1].attract(nodes[4]);    nodes[1].attract(nodes[5]); nodes[1].attract(nodes[6]); nodes[1].attract(nodes[7]); nodes[1].attract(nodes[8]); nodes[1].attract(nodes[9]); nodes[1].attract(nodes[10]); nodes[1].attract(nodes[11]); nodes[1].attract(nodes[12]); nodes[1].attract(nodes[13]); nodes[1].attract(nodes[14]); nodes[1].attract(nodes[15]);  nodes[1].attract(nodes[16]);  nodes[1].attract(nodes[17]);  nodes[1].attract(nodes[18]);  nodes[1].attract(nodes[19]);  nodes[1].attract(nodes[20]);
   nodes[2].attract(nodes[0]);    nodes[2].attract(nodes[1]);    nodes[2].attract(nodes[3]);    nodes[2].attract(nodes[4]);    nodes[2].attract(nodes[5]); nodes[2].attract(nodes[6]); nodes[2].attract(nodes[7]); nodes[2].attract(nodes[8]); nodes[2].attract(nodes[9]); nodes[2].attract(nodes[10]); nodes[2].attract(nodes[11]); nodes[2].attract(nodes[12]); nodes[2].attract(nodes[13]); nodes[2].attract(nodes[14]); nodes[2].attract(nodes[15]);  nodes[2].attract(nodes[16]);  nodes[2].attract(nodes[17]);  nodes[2].attract(nodes[18]);  nodes[2].attract(nodes[19]);  nodes[2].attract(nodes[20]);
   nodes[3].attract(nodes[0]);    nodes[3].attract(nodes[1]);    nodes[3].attract(nodes[2]);    nodes[3].attract(nodes[4]);    nodes[3].attract(nodes[5]); nodes[3].attract(nodes[6]); nodes[3].attract(nodes[7]); nodes[3].attract(nodes[8]); nodes[3].attract(nodes[9]); nodes[3].attract(nodes[10]); nodes[3].attract(nodes[11]); nodes[3].attract(nodes[12]); nodes[3].attract(nodes[13]); nodes[3].attract(nodes[14]); nodes[3].attract(nodes[15]); nodes[3].attract(nodes[16]);   nodes[3].attract(nodes[17]); nodes[3].attract(nodes[18]); nodes[3].attract(nodes[19]); nodes[3].attract(nodes[20]);
   nodes[4].attract(nodes[0]);    nodes[4].attract(nodes[1]);    nodes[4].attract(nodes[2]);    nodes[4].attract(nodes[3]);    nodes[4].attract(nodes[5]); nodes[4].attract(nodes[6]); nodes[4].attract(nodes[7]); nodes[4].attract(nodes[8]); nodes[4].attract(nodes[9]); nodes[4].attract(nodes[10]); nodes[4].attract(nodes[11]); nodes[4].attract(nodes[12]); nodes[4].attract(nodes[13]); nodes[4].attract(nodes[14]); nodes[4].attract(nodes[15]); nodes[4].attract(nodes[16]);   nodes[4].attract(nodes[17]); nodes[4].attract(nodes[18]); nodes[4].attract(nodes[19]); nodes[4].attract(nodes[20]);
   nodes[5].attract(nodes[0]);    nodes[5].attract(nodes[1]);    nodes[5].attract(nodes[2]);    nodes[5].attract(nodes[3]);    nodes[5].attract(nodes[4]); nodes[5].attract(nodes[6]); nodes[5].attract(nodes[7]); nodes[5].attract(nodes[8]); nodes[5].attract(nodes[9]); nodes[5].attract(nodes[10]); nodes[5].attract(nodes[11]); nodes[5].attract(nodes[12]); nodes[5].attract(nodes[13]); nodes[5].attract(nodes[14]); nodes[5].attract(nodes[15]); nodes[5].attract(nodes[16]);   nodes[5].attract(nodes[17]); nodes[5].attract(nodes[18]); nodes[5].attract(nodes[19]); nodes[5].attract(nodes[20]);
   nodes[6].attract(nodes[0]);    nodes[6].attract(nodes[1]);    nodes[6].attract(nodes[2]);    nodes[6].attract(nodes[3]);    nodes[6].attract(nodes[4]); nodes[6].attract(nodes[5]); nodes[6].attract(nodes[7]); nodes[6].attract(nodes[8]); nodes[6].attract(nodes[9]); nodes[6].attract(nodes[10]); nodes[6].attract(nodes[11]); nodes[6].attract(nodes[12]); nodes[6].attract(nodes[13]); nodes[6].attract(nodes[14]); nodes[6].attract(nodes[15]);  nodes[6].attract(nodes[16]);  nodes[6].attract(nodes[17]); nodes[6].attract(nodes[18]);  nodes[6].attract(nodes[19]);  nodes[6].attract(nodes[20]);
   nodes[7].attract(nodes[0]);    nodes[7].attract(nodes[1]);    nodes[7].attract(nodes[2]);    nodes[7].attract(nodes[3]);    nodes[7].attract(nodes[4]); nodes[7].attract(nodes[5]); nodes[7].attract(nodes[6]); nodes[7].attract(nodes[8]); nodes[7].attract(nodes[9]); nodes[7].attract(nodes[10]); nodes[7].attract(nodes[11]); nodes[7].attract(nodes[12]); nodes[7].attract(nodes[13]); nodes[7].attract(nodes[14]); nodes[7].attract(nodes[15]); nodes[7].attract(nodes[16]);   nodes[7].attract(nodes[17]); nodes[7].attract(nodes[18]); nodes[7].attract(nodes[19]); nodes[7].attract(nodes[20]);
   nodes[8].attract(nodes[0]);    nodes[8].attract(nodes[1]);    nodes[8].attract(nodes[2]);    nodes[8].attract(nodes[3]);    nodes[8].attract(nodes[4]); nodes[8].attract(nodes[5]); nodes[8].attract(nodes[6]); nodes[8].attract(nodes[7]); nodes[8].attract(nodes[9]); nodes[8].attract(nodes[10]); nodes[8].attract(nodes[11]); nodes[8].attract(nodes[12]); nodes[8].attract(nodes[13]); nodes[8].attract(nodes[14]); nodes[8].attract(nodes[15]); nodes[8].attract(nodes[16]);   nodes[8].attract(nodes[17]); nodes[8].attract(nodes[18]); nodes[8].attract(nodes[19]); nodes[8].attract(nodes[20]);
   nodes[9].attract(nodes[0]);    nodes[9].attract(nodes[1]);    nodes[9].attract(nodes[2]);    nodes[9].attract(nodes[3]);    nodes[9].attract(nodes[4]); nodes[9].attract(nodes[5]); nodes[9].attract(nodes[6]); nodes[9].attract(nodes[7]); nodes[9].attract(nodes[8]); nodes[9].attract(nodes[10]); nodes[9].attract(nodes[11]); nodes[9].attract(nodes[12]); nodes[9].attract(nodes[13]); nodes[9].attract(nodes[14]); nodes[9].attract(nodes[15]); nodes[9].attract(nodes[16]);   nodes[9].attract(nodes[17]); nodes[9].attract(nodes[18]); nodes[9].attract(nodes[19]); nodes[9].attract(nodes[20]);
   nodes[10].attract(nodes[0]);    nodes[10].attract(nodes[1]);    nodes[10].attract(nodes[2]);    nodes[10].attract(nodes[3]);    nodes[10].attract(nodes[4]); nodes[10].attract(nodes[5]); nodes[10].attract(nodes[6]); nodes[10].attract(nodes[7]); nodes[10].attract(nodes[8]); nodes[10].attract(nodes[9]); nodes[10].attract(nodes[11]); nodes[10].attract(nodes[12]); nodes[10].attract(nodes[13]); nodes[10].attract(nodes[14]); nodes[10].attract(nodes[15]);  nodes[10].attract(nodes[16]);  nodes[10].attract(nodes[17]);  nodes[10].attract(nodes[18]);  nodes[10].attract(nodes[19]);  nodes[10].attract(nodes[20]);
   nodes[11].attract(nodes[0]);    nodes[11].attract(nodes[1]);    nodes[11].attract(nodes[2]);    nodes[11].attract(nodes[3]);    nodes[11].attract(nodes[4]); nodes[11].attract(nodes[5]); nodes[11].attract(nodes[6]); nodes[11].attract(nodes[7]); nodes[11].attract(nodes[8]); nodes[11].attract(nodes[9]); nodes[11].attract(nodes[10]); nodes[11].attract(nodes[12]); nodes[11].attract(nodes[13]); nodes[11].attract(nodes[14]); nodes[11].attract(nodes[15]); nodes[11].attract(nodes[16]); nodes[11].attract(nodes[17]); nodes[11].attract(nodes[18]); nodes[11].attract(nodes[19]); nodes[11].attract(nodes[20]);
   nodes[12].attract(nodes[0]);    nodes[12].attract(nodes[1]);    nodes[12].attract(nodes[2]);    nodes[12].attract(nodes[3]);    nodes[12].attract(nodes[4]); nodes[12].attract(nodes[5]); nodes[12].attract(nodes[6]); nodes[12].attract(nodes[7]); nodes[12].attract(nodes[8]); nodes[12].attract(nodes[9]); nodes[12].attract(nodes[10]); nodes[12].attract(nodes[11]); nodes[12].attract(nodes[13]); nodes[12].attract(nodes[14]); nodes[12].attract(nodes[15]); nodes[12].attract(nodes[16]); nodes[12].attract(nodes[17]); nodes[12].attract(nodes[18]); nodes[12].attract(nodes[19]); nodes[12].attract(nodes[20]);
   nodes[13].attract(nodes[0]);    nodes[13].attract(nodes[1]);    nodes[13].attract(nodes[2]);    nodes[13].attract(nodes[3]);    nodes[13].attract(nodes[4]); nodes[13].attract(nodes[5]); nodes[13].attract(nodes[6]); nodes[13].attract(nodes[7]); nodes[13].attract(nodes[8]); nodes[13].attract(nodes[9]); nodes[13].attract(nodes[10]); nodes[13].attract(nodes[11]); nodes[13].attract(nodes[12]); nodes[13].attract(nodes[14]); nodes[13].attract(nodes[15]); nodes[13].attract(nodes[16]); nodes[13].attract(nodes[17]); nodes[13].attract(nodes[18]); nodes[13].attract(nodes[19]); nodes[13].attract(nodes[20]);
   nodes[14].attract(nodes[0]);    nodes[14].attract(nodes[1]);    nodes[14].attract(nodes[2]);    nodes[14].attract(nodes[3]);    nodes[14].attract(nodes[4]); nodes[14].attract(nodes[5]); nodes[14].attract(nodes[6]); nodes[14].attract(nodes[7]); nodes[14].attract(nodes[8]); nodes[14].attract(nodes[9]); nodes[14].attract(nodes[10]); nodes[14].attract(nodes[11]); nodes[14].attract(nodes[12]); nodes[14].attract(nodes[13]); nodes[14].attract(nodes[15]); nodes[14].attract(nodes[16]); nodes[14].attract(nodes[17]); nodes[14].attract(nodes[18]); nodes[14].attract(nodes[19]); nodes[14].attract(nodes[20]);
   nodes[15].attract(nodes[0]);    nodes[15].attract(nodes[1]);    nodes[15].attract(nodes[2]);    nodes[15].attract(nodes[3]);    nodes[15].attract(nodes[4]); nodes[15].attract(nodes[5]); nodes[15].attract(nodes[6]); nodes[15].attract(nodes[7]); nodes[15].attract(nodes[8]); nodes[15].attract(nodes[9]); nodes[15].attract(nodes[10]); nodes[15].attract(nodes[11]); nodes[15].attract(nodes[12]); nodes[15].attract(nodes[13]); nodes[15].attract(nodes[14]);  nodes[15].attract(nodes[16]);  nodes[15].attract(nodes[17]);  nodes[15].attract(nodes[18]);  nodes[15].attract(nodes[19]);  nodes[15].attract(nodes[20]);
   nodes[16].attract(nodes[0]);    nodes[16].attract(nodes[1]);    nodes[16].attract(nodes[2]);    nodes[16].attract(nodes[3]);    nodes[16].attract(nodes[4]); nodes[16].attract(nodes[5]); nodes[16].attract(nodes[6]); nodes[16].attract(nodes[7]); nodes[16].attract(nodes[8]); nodes[16].attract(nodes[9]); nodes[16].attract(nodes[10]); nodes[16].attract(nodes[11]); nodes[16].attract(nodes[12]); nodes[16].attract(nodes[13]); nodes[16].attract(nodes[14]); nodes[16].attract(nodes[15]); nodes[16].attract(nodes[17]); nodes[16].attract(nodes[18]); nodes[16].attract(nodes[19]); nodes[16].attract(nodes[20]);
   nodes[17].attract(nodes[0]);    nodes[17].attract(nodes[1]);    nodes[17].attract(nodes[2]);    nodes[17].attract(nodes[3]);    nodes[17].attract(nodes[4]); nodes[17].attract(nodes[5]); nodes[17].attract(nodes[6]); nodes[17].attract(nodes[7]); nodes[17].attract(nodes[8]); nodes[17].attract(nodes[9]); nodes[17].attract(nodes[10]); nodes[17].attract(nodes[11]); nodes[17].attract(nodes[12]); nodes[17].attract(nodes[13]); nodes[17].attract(nodes[14]); nodes[17].attract(nodes[15]); nodes[17].attract(nodes[16]); nodes[17].attract(nodes[18]); nodes[17].attract(nodes[19]); nodes[17].attract(nodes[20]);
   nodes[18].attract(nodes[0]);    nodes[18].attract(nodes[1]);    nodes[18].attract(nodes[2]);    nodes[18].attract(nodes[3]);    nodes[18].attract(nodes[4]); nodes[18].attract(nodes[5]); nodes[18].attract(nodes[6]); nodes[18].attract(nodes[7]); nodes[18].attract(nodes[8]); nodes[18].attract(nodes[9]); nodes[18].attract(nodes[10]); nodes[18].attract(nodes[11]); nodes[18].attract(nodes[12]); nodes[18].attract(nodes[13]); nodes[18].attract(nodes[14]); nodes[18].attract(nodes[15]); nodes[18].attract(nodes[16]); nodes[18].attract(nodes[17]); nodes[18].attract(nodes[19]); nodes[18].attract(nodes[20]);
   nodes[19].attract(nodes[0]);    nodes[19].attract(nodes[1]);    nodes[19].attract(nodes[2]);    nodes[19].attract(nodes[3]);    nodes[19].attract(nodes[4]); nodes[19].attract(nodes[5]); nodes[19].attract(nodes[6]); nodes[19].attract(nodes[7]); nodes[19].attract(nodes[8]); nodes[19].attract(nodes[9]); nodes[19].attract(nodes[10]); nodes[19].attract(nodes[11]); nodes[19].attract(nodes[12]); nodes[19].attract(nodes[13]); nodes[19].attract(nodes[14]); nodes[19].attract(nodes[15]); nodes[19].attract(nodes[16]); nodes[19].attract(nodes[17]); nodes[19].attract(nodes[18]); nodes[19].attract(nodes[20]);
   nodes[20].attract(nodes[0]);    nodes[20].attract(nodes[1]);    nodes[20].attract(nodes[2]);    nodes[20].attract(nodes[3]);    nodes[20].attract(nodes[4]); nodes[20].attract(nodes[5]); nodes[20].attract(nodes[6]); nodes[20].attract(nodes[7]); nodes[20].attract(nodes[8]); nodes[20].attract(nodes[9]); nodes[20].attract(nodes[10]); nodes[20].attract(nodes[11]); nodes[20].attract(nodes[12]); nodes[20].attract(nodes[13]); nodes[20].attract(nodes[14]); nodes[20].attract(nodes[15]); nodes[20].attract(nodes[16]); nodes[20].attract(nodes[17]); nodes[20].attract(nodes[18]); nodes[20].attract(nodes[19]);


 for (var i = 0 ; i < 21; i++) {
   nodes[i].update();
 }
 // for (var i = 0; i < springs.length; i++) {
 //   springs[i].update();
 // }
 if (selectedNode != null) {
    // if (p.key == 'E'|| p.key == 'e') {
   selectedNode.x = p.mouseX;
   selectedNode.y = p.mouseY;
 // }
}


 p.stroke(29,32,45)
    p.strokeWeight(1);
  var line1 = p.line(node0posX, node0posY, node1posX, node1posY);
  var line2 = p.line(node0posX, node0posY, node2posX, node2posY);
  var line3 = p.line(node0posX, node0posY, node3posX, node3posY);
  var line4 = p.line(node0posX, node0posY, node4posX, node4posY);
  var line5 = p.line(node0posX, node0posY, node5posX, node5posY);
  var line6 = p.line(node1posX, node1posY, node6posX, node6posY);
  var line7 = p.line(node4posX, node4posY, node7posX, node7posY);
  var line8 = p.line(node6posX, node6posY, node7posX, node7posY);
  var line9 = p.line(node3posX, node3posY, node6posX, node6posY);
  var line10 = p.line(node1posX, node1posY, node5posX, node5posY);
  var line11 = p.line(node2posX, node2posY, node8posX, node8posY);
  var line12 = p.line(node1posX, node1posY, node9posX, node9posY);
  var line12 = p.line(node5posX, node5posY, node9posX, node9posY);
  var line14 = p.line(node2posX, node2posY, node9posX, node9posY);
  var line15 = p.line(node8posX, node8posY, node9posX, node9posY);
  var line16 = p.line(node2posX, node2posY, node10posX, node10posY);
  var line17 = p.line(node10posX, node10posY, node11posX, node11posY);
  var line18 = p.line(node8posX, node8posY, node12posX, node12posY);
  var line19 = p.line(node12posX, node12posY, node13posX, node13posY);
  var line20 = p.line(node8posX, node8posY, node14posX, node14posY);
  var line21 = p.line(node14posX, node14posY, node15posX, node15posY);
  var line22 = p.line(node8posX, node8posY, node15posX, node15posY);
  var line23 = p.line(node12posX, node12posY, node16posX, node16posY);
  var line24 = p.line(node13posX, node13posY, node16posX, node16posY);
  var line25 = p.line(node12posX, node12posY, node17posX, node17posY);
  var line26 = p.line(node20posX, node20posY, node17posX, node17posY);
  var line27 = p.line(node20posX, node20posY, node4posX, node4posY);
  var line28 = p.line(node20posX, node20posY, node7posX, node7posY);
  var line29 = p.line(node18posX, node18posY, node1posX, node1posY);
  var line30 = p.line(node18posX, node18posY, node8posX, node8posY);
  var line30 = p.line(node18posX, node18posY, node5posX, node5posY);
  var line31 = p.line(node19posX, node19posY, node4posX, node4posY);
  var line32 = p.line(node4posX, node4posY, node5posX, node5posY);
  var line33 = p.line(node6posX, node6posY, node8posX, node8posY);
  var line34 = p.line(node3posX, node3posY, node8posX, node8posY);
  var line35 = p.line(node4posX, node4posY, node8posX, node8posY);
  var line36 = p.line(node9posX, node9posY, node3posX, node3posY);
  var line32 = p.line(node6posX, node6posY, node9posX, node9posY);
  var line33 = p.line(node4posX, node4posY, node3posX, node3posY);
  var line34 = p.line(node5posX, node5posY, node8posX, node8posY);

  // p.update(line1);

  if (myBoolean) {
        myBoolean = false;
        p.println('saving to pdf – finishing');
        p.endRecord();
      }
      a = a + 0.04;
       nodeDiameterxd=p.sq(a-3);
       nodeDiameterxd= nodeDiameterxd+1;
       nodeDiameterxd= p.sqrt(nodeDiameterxd);
       nodeDiameterxd=-a/nodeDiameterxd*15;
       nodeDiameteryd=p.sq(a-3);
       nodeDiameteryd= nodeDiameteryd+1;
       nodeDiameteryd= p.sqrt(nodeDiameteryd);
       nodeDiameteryd=-a/nodeDiameteryd*15;
       nodeDiameteryc=p.sq(a-1);
       nodeDiameteryc= nodeDiameteryc+1;
       nodeDiameteryc= p.sqrt(nodeDiameteryc);
       nodeDiameteryc=-a/nodeDiameteryc*30;
       nodeDiameterxc=p.sq(a-1);
       nodeDiameterxc= nodeDiameterxc+1;
       nodeDiameterxc= p.sqrt(nodeDiameterxc);
       nodeDiameterxc=-a/nodeDiameterxc*30;
       nodeDiameteryb=p.sq(a-1.5);
       nodeDiameteryb= nodeDiameteryb+1;
       nodeDiameteryb= p.sqrt(nodeDiameteryb);
       nodeDiameteryb=-a/nodeDiameteryb*50;
       nodeDiameterxb=p.sq(a-1.5);
       nodeDiameterxb= nodeDiameterxb+1;
       nodeDiameterxb= p.sqrt(nodeDiameterxb);
       nodeDiameterxb=-a/nodeDiameterxb*50;
       nodeDiameterya=p.sq(a-1);
       nodeDiameterya= nodeDiameterya+1;
       nodeDiameterya= p.sqrt(nodeDiameterya);
       nodeDiameterya=-a/nodeDiameterya*70;
       nodeDiameterxa=p.sq(a-1);
       nodeDiameterxa= nodeDiameterxa+1;
       nodeDiameterxa= p.sqrt(nodeDiameterxa);
       nodeDiameterxa=-a/nodeDiameterxa*70;
       nodeDiameterye=p.sq(a-1);
       nodeDiameterye= nodeDiameterye+1;
       nodeDiameterye= p.sqrt(nodeDiameterye);
       nodeDiameterye=-a/nodeDiameterye*90;
       nodeDiameterxe=p.sq(a-1);
       nodeDiameterxe= nodeDiameterxe+1;
       nodeDiameterxe= p.sqrt(nodeDiameterxe);
       nodeDiameterxe=-a/nodeDiameterxe*90;




p.strokeWeight(2);
p.fill(8,26,73);

// p.stroke(91,21,15);
// p.noStroke();
p.ellipse(node8posX, node8posY, nodeDiameterxe, nodeDiameterye);
p.ellipse(node4posX, node4posY, nodeDiameterxe, nodeDiameterye);

// p.stroke(78,25,20);
p.ellipse(node1posX, node1posY, nodeDiameterxa, nodeDiameterya);
p.ellipse(node6posX, node6posY, nodeDiameterxa, nodeDiameterya);
p.ellipse(node9posX, node9posY, nodeDiameterxa, nodeDiameterya);
p.ellipse(node3posX, node3posY, nodeDiameterxa, nodeDiameterya);
p.ellipse(node0posX, node0posY, nodeDiameterxa, nodeDiameterya);
p.ellipse(node5posX, node5posY, nodeDiameterxa, nodeDiameterya);

// p.stroke(67,26,20);
p.ellipse(node18posX, node18posY, nodeDiameterxb, nodeDiameteryb);
p.ellipse(node12posX, node12posY, nodeDiameterxb, nodeDiameteryb);
p.ellipse(node20posX, node20posY, nodeDiameterxb, nodeDiameteryb);
p.ellipse(node7posX, node7posY, nodeDiameterxb, nodeDiameteryb);
p.ellipse(node2posX, node2posY, nodeDiameterxb, nodeDiameteryb);

// p.stroke(55,23,18);
p.ellipse(node11posX, node11posY, nodeDiameterxc, nodeDiameteryc);
p.ellipse(node13posX, node13posY, nodeDiameterxc, nodeDiameteryc);
p.ellipse(node16posX, node16posY, nodeDiameterxc, nodeDiameteryc);
p.ellipse(node17posX, node17posY, nodeDiameterxc, nodeDiameteryc);
p.ellipse(node14posX, node14posY, nodeDiameterxc, nodeDiameteryc);
p.ellipse(node15posX, node15posY, nodeDiameterxc, nodeDiameteryc);

// p.stroke(21,19,12);
p.ellipse(node19posX, node19posY, nodeDiameterxd, nodeDiameteryd);
p.ellipse(node10posX, node10posY, nodeDiameterxd, nodeDiameteryd);


    p.fill(back);

  p.noStroke();
  p.ellipse(node8posX, node8posY, nodeDiameterxe+strokenode, nodeDiameterye+strokenode);
  p.ellipse(node4posX, node4posY, nodeDiameterxe+strokenode, nodeDiameterye+strokenode);

  p.noStroke();
  p.ellipse(node1posX, node1posY, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.ellipse(node6posX, node6posY, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.ellipse(node9posX, node9posY, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.ellipse(node0posX, node0posY, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.ellipse(node3posX, node3posY, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.ellipse(node5posX, node5posY, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);

  p.noStroke();
  p.ellipse(node18posX, node18posY, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
  p.ellipse(node12posX, node12posY, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
  p.ellipse(node20posX, node20posY, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
  p.ellipse(node7posX, node7posY, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
  p.ellipse(node2posX, node2posY, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
  p.noStroke();
  p.ellipse(node11posX, node11posY, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.ellipse(node13posX, node13posY, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.ellipse(node16posX, node16posY, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.ellipse(node17posX, node17posY, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.ellipse(node14posX, node14posY, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.ellipse(node15posX, node15posY, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);

  p.noStroke();
  p.ellipse(node19posX, node19posY, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
  p.ellipse(node10posX, node10posY, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);

  p.textSize(20);
  p.textFont(font1);
  p.textAlign(p.CENTER, p.CENTER);

           if ((node0posX-50 < p.mouseX && node0posX+50 > p.mouseX) && (node0posY-50 < p.mouseY && node0posY+50 > p.mouseY)) {
            p.fill(textvuconcept);
            p.textSize(textsize+10);
            p.text(auxétisme, node0posX, node0posY);
            if (p.mouseIsPressed == true){
              if(p.keyIsPressed == true){
              p.noStroke();
              p.fill(8,16,23,500)
              p.rect(0,0,p.windowWidth,p.windowHeight);
              p.stroke(177,60,90);
              p.noFill();
              p.line(85,85,115,115);
              p.line(115,85,85,115);
              p.ellipse(100,100,50);
              p.noStroke();
              p.noLoop();
            p.fill(bleu);
                p.text('auxétisme (anglissisme) def :',400,190);
              p.fill(textvu);
                p.text("caractère d'un matériaux qui, contrairement aux matériaux conventionels, s'expend quand on l'étire et inversement.",900,250);
              p.drawingContext.filter = 'Blur(8px)';
          //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
          }
        }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
              p.text(auxétisme, node0posX, node0posY);
           }




            if ((node1posX-50 < p.mouseX && node1posX+50 > p.mouseX) && (node1posY-50 < p.mouseY && node1posY+50 > p.mouseY)) {
            p.fill(textvuconcept);
            p.textSize(textsize+10);
            p.text(tenségrité, node1posX, node1posY);
            } else {
           p.fill(texthideconcept);
           p.textSize(textsize+10);
           p.text(tenségrité, node1posX, node1posY);
           }




          if ((node2posX-50 < p.mouseX && node2posX+50 > p.mouseX) && (node2posY-50 < p.mouseY && node2posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
               p.text(jamming, node2posX, node2posY);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
               p.text(jamming, node2posX, node2posY);
            }




          if ((node3posX-50 < p.mouseX && node3posX+50 > p.mouseX) && (node3posY-50 < p.mouseY && node3posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(système, node3posX, node3posY-10);
              p.text(pneumatique, node3posX , node3posY+10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(système, node3posX, node3posY-10);
              p.text(pneumatique, node3posX , node3posY+10);
            }




              if ((node4posX-50 < p.mouseX && node4posX+50 > p.mouseX) && (node4posY-50 < p.mouseY && node4posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(motif, node4posX, node4posY -10);
             p.text(procédural, node4posX , node4posY +10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(motif, node4posX, node4posY -10);
             p.text(procédural, node4posX , node4posY +10);
            }


              if ((node5posX-50 < p.mouseX && node5posX+50 > p.mouseX) && (node5posY-50 < p.mouseY && node5posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(mémoire, node5posX, node5posY);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(mémoire, node5posX, node5posY);
            }


              if ((node6posX-50 < p.mouseX && node6posX+50 > p.mouseX) && (node6posY-50 < p.mouseY && node6posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(surface, node6posX, node6posY -10);
             p.text(entension, node6posX, node6posY +10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
               p.text(surface, node6posX, node6posY -10);
             p.text(entension, node6posX, node6posY +10);
            }


             if ((node7posX-50 < p.mouseX && node7posX+50 > p.mouseX) && (node7posY-50 < p.mouseY && node7posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(motif, node7posX, node7posY -10);
             p.text(céllulaire, node7posX , node7posY +10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
               p.text(motif, node7posX, node7posY -10);
             p.text(céllulaire, node7posX , node7posY +10);
            }


           if ((node8posX-50 < p.mouseX && node8posX+50 > p.mouseX) && (node8posY-50 < p.mouseY && node8posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(courbes, node8posX, node8posY -10);
             p.text(polynomiales, node8posX , node8posY +10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
               p.text(courbes, node8posX, node8posY -10);
             p.text(polynomiales, node8posX , node8posY +10);
            }


            if ((node9posX-50 < p.mouseX && node9posX+50 > p.mouseX) && (node9posY-50 < p.mouseY && node9posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(déformation, node9posX, node9posY -10);
             p.text(différentielle, node9posX , node9posY +10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(déformation, node9posX, node9posY -10);
             p.text(différentielle, node9posX , node9posY +10);
            }



           if ((node10posX-50 < p.mouseX && node10posX+50 > p.mouseX) && (node10posY-50 < p.mouseY && node10posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(matière, node10posX, node10posY -10);
             p.text(granulaire, node10posX, node10posY +10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(matière, node10posX, node10posY -10);
             p.text(granulaire, node10posX , node10posY +10);
            }



           if ((node11posX-50 < p.mouseX && node11posX+50 > p.mouseX) && (node11posY-50 < p.mouseY && node11posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(abrasion, node11posX, node11posY );
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(abrasion, node11posX, node11posY );
            }


            if ((node12posX-50 < p.mouseX && node12posX+50 > p.mouseX) && (node12posY-50 < p.mouseY && node12posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(turbulence, node12posX, node12posY);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(turbulence, node12posX, node12posY);
            }



             if ((node13posX-50 < p.mouseX && node13posX+50 > p.mouseX) && (node13posY-50 < p.mouseY && node13posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(réflexion, node13posX, node13posY);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(réflexion, node13posX, node13posY);
            }


            if ((node14posX-50 < p.mouseX && node14posX+50 > p.mouseX) && (node14posY-50 < p.mouseY && node14posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(portance, node14posX, node14posY);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(portance, node14posX, node14posY);
            }



            if ((node15posX-50 < p.mouseX && node15posX+50 > p.mouseX) && (node15posY-50 < p.mouseY && node15posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(écoulement, node15posX, node15posY -10);
             p.text(laminaire, node15posX , node15posY +10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(écoulement, node15posX, node15posY -10);
             p.text(laminaire, node15posX, node15posY +10);
            }


            if ((node16posX-50 < p.mouseX && node16posX+50 > p.mouseX) && (node16posY-50 < p.mouseY && node16posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(réaction, node16posX, node16posY -10);
             p.text(chimique, node16posX , node16posY +10);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(réaction, node16posX, node16posY -10);
             p.text(chimique, node16posX, node16posY +10);
            }


            if ((node17posX-50 < p.mouseX && node17posX+50 > p.mouseX) && (node17posY-50 < p.mouseY && node17posY+50 > p.mouseY)) {
                p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(réacdif, node17posX, node17posY);
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(réacdif, node17posX, node17posY);
            }


              if ((node20posX-50 < p.mouseX && node20posX+50 > p.mouseX) && (node20posY-50 < p.mouseY && node20posY+50 > p.mouseY)) {
                  p.fill(textvuconcept);
                p.textSize(textsize+10);
                   p.text(morphing, node20posX, node20posY);
              } else {
                p.fill(texthideconcept);
                p.textSize(textsize+10);
                  p.text(morphing, node20posX, node20posY);
              }



                if ((node18posX-50 < p.mouseX && node18posX+50 > p.mouseX) && (node18posY-50 < p.mouseY && node18posY+50 > p.mouseY)) {
                    p.fill(textvuconcept);
                  p.textSize(textsize+10);
                     p.text(compliance, node18posX, node18posY);
                } else {
                  p.fill(texthideconcept);
                  p.textSize(textsize+10);
                    p.text(compliance, node18posX, node18posY);
                }


                  if ((node19posX-50 < p.mouseX && node19posX+50 > p.mouseX) && (node19posY-50 < p.mouseY && node19posY+50 > p.mouseY)) {
                      p.fill(textvuconcept);
                    p.textSize(textsize+10);
                       p.text(systmL, node19posX, node19posY);
                  } else {
                    p.fill(texthideconcept);
                    p.textSize(textsize+10);
                      p.text(systmL, node19posX, node19posY);
                  }

  //target
p.strokeWeight(1)
p.stroke(177,60,90);
p.noFill();
p.rect(62, 260, 90, 85, 10);
p.noStroke();
// p.stroke(textvuconcept);
p.fill(140,162,195,100);
p.rect(30, 275, 790, 56, 10);

p.textAlign(p.LEFT);
p.textFont(font2);
p.fill(texthide);
p.textSize(69);
p.text(spr1, 65, 97+scroll, p.width, p.height);
p.textFont(font1);
p.textSize(20);
p.fill(textvuconcept);
p.textSize(textsize+10);
p.text('Matière entre éclats et pénombre.', 160, 78+scroll, p.width, p.height);
p.fill(rouge);
p.text('Expérimentations et études autour de concepts fondamentaux.',160,103+scroll, p.width, p.height);
p.textFont(font2);
p.fill(texthide);
p.textSize(69);
p.text(spr2, 65, 97+71+scroll, p.width, p.height);
p.textFont(font1);
p.textSize(20);
p.fill(textvuconcept);
p.textSize(textsize+10);
p.text('La terre comme retour aux «sources».', 160, 78+71+scroll, p.width, p.height);
p.fill(rouge);
p.text('Deux productions artisanales en terre cuite.',160,103+71+scroll, p.width, p.height);
p.textFont(font2);
p.fill(texthide);
p.textSize(69);
p.text(spr3, 65, 97+71+71+scroll, p.width, p.height);
p.textFont(font1);
p.textSize(20);
p.fill(textvuconcept);
p.textSize(textsize+10);
p.text('Équilibre intérieur et volumétrie variable.', 160, 78+71+71+scroll, p.width, p.height);
p.fill(rouge);
p.text('Production d’un saladier adaptatif.',160,103+71+71+scroll, p.width, p.height);
p.textFont(font2);
p.fill(texthide);
p.textSize(69);
p.text(spr4, 65, 97+71+71+71+scroll, p.width, p.height);
p.textFont(font1);
p.textSize(20);
p.fill(textvuconcept);
p.textSize(textsize+10);
p.text('Faire corps avec le flux.', 160, 78+71+71+71+scroll, p.width, p.height);
p.fill(rouge);
p.text('Conception d’un «hydrofoil» optimisé.',160,103+71+71+71+scroll, p.width, p.height);
p.textFont(font2);
p.fill(texthide);
p.textSize(69);
p.text(spr5, 65, 97+71+71+71+71+scroll, p.width, p.height);
p.textFont(font1);
p.textSize(20);
p.fill(textvuconcept);
p.textSize(textsize+10);
p.text('Du hasard au procédé.', 160, 78+71+71+71+71+scroll, p.width, p.height);
p.fill(rouge);
p.text('Conception d’une table basse.',160,103+71+71+71+71+scroll, p.width, p.height);
p.textFont(font2);
p.fill(texthide);
p.textSize(69);
p.text(spr6, 65, 97+71+71+71+71+71+scroll, p.width, p.height);
p.textFont(font1);
p.textSize(20);
p.fill(textvuconcept);
p.textSize(textsize+10);
p.text('Réactions de matières. De l’expérience ordinaire à l’innovation.', 160, 78+71+71+71+71+71+scroll, p.width, p.height);
p.fill(rouge);
p.text('Hybridation de principes technologiques innovants.',160,103+71+71+71+71+71+scroll, p.width, p.height);
p.textFont(font2);
p.fill(texthide);
p.textSize(69);
p.text(spr7, 65, 97+71+71+71+71+71+71+scroll, p.width, p.height);
p.textFont(font1);
p.textSize(20);
p.fill(textvuconcept);
p.textSize(textsize+10);
p.text('Une concentration de procédés.', 160, 78+71+71+71+71+71+71+scroll, p.width, p.height);
p.fill(rouge);
p.text('pour une micro-architecture cinématique.',160,103+71+71+71+71+71+71+scroll, p.width, p.height);
p.textFont(font2);
p.fill(texthide);
p.textSize(69);
p.text(spr8, 65, 97+71+71+71+71+71+71+71+scroll, p.width, p.height);
p.textFont(font1);
p.textSize(20);
p.fill(textvuconcept);
p.textSize(textsize+10);
p.text('Prométhée.', 160, 78+71+71+71+71+71+71+71+scroll, p.width, p.height);
p.fill(rouge);
p.text('Conception d’une assise évolutive.',160,103+71+71+71+71+71+71+71+scroll, p.width, p.height);





p.textFont(font2);

          if ((node0posX*0.5+node1posX*0.5-50 < p.mouseX && node0posX*0.5+node1posX*0.5+50 > p.mouseX) && ( node0posY*0.5+node1posY*0.5-50 < p.mouseY &&  node0posY*0.5+node1posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, node0posX*0.5+node1posX*0.5, node0posY*0.5+node1posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, node0posX*0.5+node1posX*0.5, node0posY*0.5+node1posY*0.5);
         }


          if ((node0posX*0.5+node2posX*0.5-50 < p.mouseX && node0posX*0.5+node2posX*0.5+50 > p.mouseX) && (  node0posY*0.5+node2posY*0.5-50 < p.mouseY &&   node0posY*0.5+node2posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6, node0posX*0.5+node2posX*0.5,  node0posY*0.5+node2posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, node0posX*0.5+node2posX*0.5,  node0posY*0.5+node2posY*0.5);
         }



          if ((node0posX*0.5+node3posX*0.5-50 < p.mouseX && node0posX*0.5+node3posX*0.5+50 > p.mouseX) && (node0posY*0.5+node3posY*0.5-50 < p.mouseY && node0posY*0.5+node3posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6, node0posX*0.5+node3posX*0.5,  node0posY*0.5+node3posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, node0posX*0.5+node3posX*0.5,  node0posY*0.5+node3posY*0.5);
         }



          if (( node0posX*0.5+node4posX*0.5 < p.mouseX &&  node0posX*0.5+node4posX*0.5+50 > p.mouseX) && ( node0posY*0.5+node4posY*0.5-50 < p.mouseY &&  node0posY*0.5+node4posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, node0posX*0.5+node4posX*0.5+15,   node0posY*0.5+node4posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, node0posX*0.5+node4posX*0.5+15,   node0posY*0.5+node4posY*0.5);
         }



          if (( node0posX*0.5+node4posX*0.5-50 < p.mouseX &&   node0posX*0.5+node4posX*0.5 > p.mouseX) && (  node0posY*0.5+node4posY*0.5-50 < p.mouseY &&   node0posY*0.5+node4posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,  node0posX*0.5+node4posX*0.5-15,   node0posY*0.5+node4posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, node0posX*0.5+node4posX*0.5-15,   node0posY*0.5+node4posY*0.5);
         }



          if (( node0posX*0.5+node5posX*0.5 < p.mouseX &&  node0posX*0.5+node5posX*0.5+50 > p.mouseX) && ( node0posY*0.5+node5posY*0.5-50 < p.mouseY &&  node0posY*0.5+node5posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, node0posX*0.5+node5posX*0.5+15, node0posY*0.5+node5posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, node0posX*0.5+node5posX*0.5+15, node0posY*0.5+node5posY*0.5);
         }




          if ((  node1posX*0.5+node5posX*0.5 < p.mouseX &&   node1posX*0.5+node5posX*0.5+50 > p.mouseX) && ( node1posY*0.5+node5posY*0.5-50 < p.mouseY &&  node1posY*0.5+node5posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  node1posX*0.5+node5posX*0.5+15, node1posY*0.5+node5posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  node1posX*0.5+node5posX*0.5+15, node1posY*0.5+node5posY*0.5);
         }



          if ((node1posX*0.5+node5posX*0.5-50 < p.mouseX &&  node1posX*0.5+node5posX*0.5 > p.mouseX) && (  node1posY*0.5+node5posY*0.5-50 < p.mouseY &&  node1posY*0.5+node5posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr3,node1posX*0.5+node5posX*0.5-15, node1posY*0.5+node5posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr3,node1posX*0.5+node5posX*0.5-15, node1posY*0.5+node5posY*0.5);
         }



          if ((  node8posX*0.5+node9posX*0.5 < p.mouseX &&   node8posX*0.5+node9posX*0.5+50 > p.mouseX) && (  node8posY*0.5+node9posY*0.5-50 < p.mouseY &&  node8posY*0.5+node9posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  node8posX*0.5+node9posX*0.5+15, node8posY*0.5+node9posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  node8posX*0.5+node9posX*0.5+15, node8posY*0.5+node9posY*0.5);
         }



          if ((node8posX*0.5+node9posX*0.5-50 < p.mouseX &&  node8posX*0.5+node9posX*0.5 > p.mouseX) && ( node8posY*0.5+node9posY*0.5-50 < p.mouseY && node8posY*0.5+node9posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,node8posX*0.5+node9posX*0.5-15, node8posY*0.5+node9posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,node8posX*0.5+node9posX*0.5-15, node8posY*0.5+node9posY*0.5);
         }



          if (( node2posX*0.5+node10posX*0.5-50 < p.mouseX && node2posX*0.5+node10posX*0.5+50 > p.mouseX) && ( node2posY*0.5+node10posY*0.5-50 < p.mouseY &&  node2posY*0.5+node10posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8, node2posX*0.5+node10posX*0.5+15, node2posY*0.5+node10posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8, node2posX*0.5+node10posX*0.5+15, node2posY*0.5+node10posY*0.5);
         }



          if ((node2posX*0.5+node10posX*0.5-50 < p.mouseX &&  node2posX*0.5+node10posX*0.5 > p.mouseX) && ( node2posY*0.5+node10posY*0.5-50 < p.mouseY && node2posY*0.5+node10posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,node2posX*0.5+node10posX*0.5-15, node2posY*0.5+node10posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6,node2posX*0.5+node10posX*0.5-15, node2posY*0.5+node10posY*0.5);
         }


          if (( node1posX*0.5+node6posX*0.5-50 < p.mouseX &&  node1posX*0.5+node6posX*0.5+50 > p.mouseX) && ( node1posY*0.5+node6posY*0.5-50 < p.mouseY && node1posY*0.5+node6posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  node1posX*0.5+node6posX*0.5, node1posY*0.5+node6posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  node1posX*0.5+node6posX*0.5, node1posY*0.5+node6posY*0.5);
         }




          if ((  node6posX*0.5+node7posX*0.5-50 < p.mouseX &&   node6posX*0.5+node7posX*0.5+50 > p.mouseX) && (node6posY*0.5+node7posY*0.5-50 < p.mouseY && node6posY*0.5+node7posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr5,  node6posX*0.5+node7posX*0.5,node6posY*0.5+node7posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr5,  node6posX*0.5+node7posX*0.5,node6posY*0.5+node7posY*0.5);
         }



          if (( node2posX*0.5+node8posX*0.5-50 < p.mouseX && node2posX*0.5+node8posX*0.5+50 > p.mouseX) && ( node2posY*0.5+node8posY*0.5-50 < p.mouseY &&  node2posY*0.5+node8posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,node2posX*0.5+node8posX*0.5, node2posY*0.5+node8posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,node2posX*0.5+node8posX*0.5, node2posY*0.5+node8posY*0.5);
         }



          if ((  node1posX*0.5+node9posX*0.5-50 < p.mouseX &&  node1posX*0.5+node9posX*0.5+50 > p.mouseX) && ( node1posY*0.5+node9posY*0.5-50 < p.mouseY && node1posY*0.5+node9posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, node1posX*0.5+node9posX*0.5, node1posY*0.5+node9posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, node1posX*0.5+node9posX*0.5, node1posY*0.5+node9posY*0.5);
         }


          if ((node5posX*0.5+node9posX*0.5-50 < p.mouseX && node5posX*0.5+node9posX*0.5+50 > p.mouseX) && ( node5posY*0.5+node9posY*0.5-50 < p.mouseY && node5posY*0.5+node9posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,node5posX*0.5+node9posX*0.5,node5posY*0.5+node9posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,node5posX*0.5+node9posX*0.5,node5posY*0.5+node9posY*0.5);
         }



          if ((node2posX*0.5+node9posX*0.5-50 < p.mouseX && node2posX*0.5+node9posX*0.5+50 > p.mouseX) && (node2posY*0.5+node9posY*0.5-50 < p.mouseY && node2posY*0.5+node9posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,node2posX*0.5+node9posX*0.5,node2posY*0.5+node9posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,node2posX*0.5+node9posX*0.5,node2posY*0.5+node9posY*0.5);
         }


          if ((node10posX*0.5+node11posX*0.5-50 < p.mouseX && node10posX*0.5+node11posX*0.5+50 > p.mouseX) && (node10posY*0.5+node11posY*0.5-50 < p.mouseY && node10posY*0.5+node11posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,node10posX*0.5+node11posX*0.5,node10posY*0.5+node11posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6,node10posX*0.5+node11posX*0.5,node10posY*0.5+node11posY*0.5);
         }


          if ((node8posX*0.5+node12posX*0.5-50 < p.mouseX && node8posX*0.5+node12posX*0.5+50 > p.mouseX) && ( node8posY*0.5+node12posY*0.5-50 < p.mouseY &&  node8posY*0.5+node12posY*0.5+50 > p.mouseY)) {
            p.fill(textvu);
          p.textSize(textsize2);
          p.textFont(font2);
          p.text(spr2,node8posX*0.5+node12posX*0.5,node8posY*0.5+node12posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.textFont(font2);
          p.text(spr2,node8posX*0.5+node12posX*0.5,node8posY*0.5+node12posY*0.5);
         }




          if (( node12posX*0.5+node13posX*0.5-50 < p.mouseX &&  node12posX*0.5+node13posX*0.5 > p.mouseX) && ( node12posY*0.5+node13posY*0.5-50 < p.mouseY &&  node12posY*0.5+node13posY*0.5+50 > p.mouseY)) {
            p.fill(textvu);
          p.textSize(textsize2);
          p.textFont(font2);
          p.text(spr1, node12posX*0.5+node13posX*0.5-15,node12posY*0.5+node13posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.textFont(font2);
          p.text(spr1, node12posX*0.5+node13posX*0.5-15,node12posY*0.5+node13posY*0.5);
         }



          if (( node12posX*0.5+node13posX*0.5 < p.mouseX &&  node12posX*0.5+node13posX*0.5+50 > p.mouseX) && ( node12posY*0.5+node13posY*0.5-50 < p.mouseY &&  node12posY*0.5+node13posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr9, node12posX*0.5+node13posX*0.5+15,node12posY*0.5+node13posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr9, node12posX*0.5+node13posX*0.5+15,node12posY*0.5+node13posY*0.5);
         }




          if ((  node8posX*0.5+node14posX*0.5-50 < p.mouseX &&  node8posX*0.5+node14posX*0.5+50 > p.mouseX) && ( node8posY*0.5+node14posY*0.5-50 < p.mouseY &&  node8posY*0.5+node14posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr4,  node8posX*0.5+node14posX*0.5,node8posY*0.5+node14posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr4,  node8posX*0.5+node14posX*0.5,node8posY*0.5+node14posY*0.5);
         }




                   if ((  node15posX*0.5+node14posX*0.5-50 < p.mouseX &&  node15posX*0.5+node14posX*0.5+50 > p.mouseX) && ( node15posY*0.5+node14posY*0.5-50 < p.mouseY &&  node15posY*0.5+node14posY*0.5+50 > p.mouseY)) {
                   p.fill(textvu);
                   p.textSize(textsize2);
                   p.text(spr4,  node15posX*0.5+node14posX*0.5,node15posY*0.5+node14posY*0.5);
                   } else {
                     p.fill(texthide);
                   p.textSize(textsize2);
                   p.text(spr4,  node15posX*0.5+node14posX*0.5,node15posY*0.5+node14posY*0.5);
                  }



          if (( node8posX*0.5+node15posX*0.5-50 < p.mouseX &&   node8posX*0.5+node15posX*0.5+50 > p.mouseX) && (node8posY*0.5+node15posY*0.5-50 < p.mouseY && node8posY*0.5+node15posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr4, node8posX*0.5+node15posX*0.5,node8posY*0.5+node15posY*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr4, node8posX*0.5+node15posX*0.5,node8posY*0.5+node15posY*0.5);
         }


           if (( node12posX*0.5+node16posX*0.5-50 < p.mouseX &&   node12posX*0.5+node16posX*0.5+50 > p.mouseX) && (node12posY*0.5+node16posY*0.5-50 < p.mouseY && node12posY*0.5+node16posY*0.5+50 > p.mouseY)) {
           p.fill(textvu);
           p.textSize(textsize2);
           p.text(spr9, node12posX*0.5+node16posX*0.5,node12posY*0.5+node16posY*0.5);
           } else {
             p.fill(texthide);
           p.textSize(textsize2);
           p.text(spr9, node12posX*0.5+node16posX*0.5,node12posY*0.5+node16posY*0.5);
          }



          if (( node13posX*0.5+node16posX*0.5-50 < p.mouseX &&   node13posX*0.5+node16posX*0.5+50 > p.mouseX) && (node13posY*0.5+node16posY*0.5-50 < p.mouseY && node13posY*0.5+node16posY*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr9, node13posX*0.5+node16posX*0.5,node13posY*0.5+node16posY*0.5);
          } else {
            p.fill(texthide);
            p.textSize(textsize2);
            p.text(spr9, node13posX*0.5+node16posX*0.5,node13posY*0.5+node16posY*0.5);
          }



            if (( node12posX*0.5+node17posX*0.5-50 < p.mouseX &&   node12posX*0.5+node17posX*0.5+50 > p.mouseX) && (node12posY*0.5+node17posY*0.5-50 < p.mouseY && node12posY*0.5+node17posY*0.5+50 > p.mouseY)) {
            p.fill(textvu);
            p.textSize(textsize2);
            p.text(spr10, node12posX*0.5+node17posX*0.5,node12posY*0.5+node17posY*0.5);
            } else {
              p.fill(texthide);
              p.textSize(textsize2);
              p.text(spr10, node12posX*0.5+node17posX*0.5,node12posY*0.5+node17posY*0.5);
            }



              if (( node20posX*0.5+node17posX*0.5-50 < p.mouseX &&   node20posX*0.5+node17posX*0.5+50 > p.mouseX) && (node20posY*0.5+node17posY*0.5-50 < p.mouseY && node20posY*0.5+node17posY*0.5+50 > p.mouseY)) {
              p.fill(textvu);
              p.textSize(textsize2);
              p.text(spr10, node20posX*0.5+node17posX*0.5,node20posY*0.5+node17posY*0.5);
              } else {
                p.fill(texthide);
                p.textSize(textsize2);
                p.text(spr10, node20posX*0.5+node17posX*0.5,node20posY*0.5+node17posY*0.5);
              }



                if (( node20posX*0.5+node7posX*0.5-50 < p.mouseX &&   node20posX*0.5+node7posX*0.5+50 > p.mouseX) && (node20posY*0.5+node7posY*0.5-50 < p.mouseY && node20posY*0.5+node7posY*0.5+50 > p.mouseY)) {
                p.fill(textvu);
                p.textSize(textsize2);
                p.text(spr16, node20posX*0.5+node7posX*0.5,node20posY*0.5+node7posY*0.5);
                } else {
                  p.fill(texthide);
                  p.textSize(textsize2);
                  p.text(spr16, node20posX*0.5+node7posX*0.5,node20posY*0.5+node7posY*0.5);
                }


                  if (( node20posX*0.5+node4posX*0.5-50 < p.mouseX &&   node20posX*0.5+node4posX*0.5+50 > p.mouseX) && (node20posY*0.5+node4posY*0.5-50 < p.mouseY && node20posY*0.5+node4posY*0.5+50 > p.mouseY)) {
                  p.fill(textvu);
                  p.textSize(textsize2);
                  p.text(spr16, node20posX*0.5+node4posX*0.5,node20posY*0.5+node4posY*0.5);
                  } else {
                    p.fill(texthide);
                    p.textSize(textsize2);
                    p.text(spr16, node20posX*0.5+node4posX*0.5,node20posY*0.5+node4posY*0.5);
                  }



                    if (( node18posX*0.5+node1posX*0.5-50 < p.mouseX &&   node18posX*0.5+node1posX*0.5+50 > p.mouseX) && (node18posY*0.5+node1posY*0.5-50 < p.mouseY && node18posY*0.5+node1posY*0.5+50 > p.mouseY)) {
                    p.fill(textvu);
                    p.textSize(textsize2);
                    p.text(spr11, node18posX*0.5+node1posX*0.5,node18posY*0.5+node1posY*0.5);
                    } else {
                      p.fill(texthide);
                      p.textSize(textsize2);
                      p.text(spr11, node18posX*0.5+node1posX*0.5,node18posY*0.5+node1posY*0.5);
                    }



                      if (( node18posX*0.5+node8posX*0.5-50 < p.mouseX &&   node18posX*0.5+node8posX*0.5+50 > p.mouseX) && (node18posY*0.5+node8posY*0.5-50 < p.mouseY && node18posY*0.5+node8posY*0.5+50 > p.mouseY)) {
                      p.fill(textvu);
                      p.textSize(textsize2);
                      p.text(spr11, node18posX*0.5+node8posX*0.5,node18posY*0.5+node8posY*0.5);
                      } else {
                        p.fill(texthide);
                        p.textSize(textsize2);
                        p.text(spr11, node18posX*0.5+node8posX*0.5,node18posY*0.5+node8posY*0.5);
                      }




                        if ((  node18posX*0.5+node5posX*0.5 < p.mouseX &&   node18posX*0.5+node5posX*0.5+50 > p.mouseX) && (  node18posY*0.5+node5posY*0.5-50 < p.mouseY &&  node18posY*0.5+node5posY*0.5+50 > p.mouseY)) {
                        p.fill(textvu);
                        p.textSize(textsize2);
                        p.text(spr12,  node18posX*0.5+node5posX*0.5+15, node18posY*0.5+node5posY*0.5);
                        } else {
                          p.fill(texthide);
                        p.textSize(textsize2);
                        p.text(spr12,  node18posX*0.5+node5posX*0.5+15, node18posY*0.5+node5posY*0.5);
                       }


                        if ((node18posX*0.5+node5posX*0.5-50 < p.mouseX &&  node18posX*0.5+node5posX*0.5 > p.mouseX) && ( node18posY*0.5+node5posY*0.5-50 < p.mouseY && node18posY*0.5+node5posY*0.5+50 > p.mouseY)) {
                        p.fill(textvu);
                        p.textSize(textsize2);
                        p.text(spr11,node18posX*0.5+node5posX*0.5-15, node18posY*0.5+node5posY*0.5);
                        } else {
                          p.fill(texthide);
                        p.textSize(textsize2);
                        p.text(spr11,node18posX*0.5+node5posX*0.5-15, node18posY*0.5+node5posY*0.5);
                       }


                        if (( node19posX*0.5+node4posX*0.5-50 < p.mouseX &&   node19posX*0.5+node4posX*0.5+50 > p.mouseX) && (node19posY*0.5+node4posY*0.5-50 < p.mouseY && node19posY*0.5+node4posY*0.5+50 > p.mouseY)) {
                        p.fill(textvu);
                        p.textSize(textsize2);
                        p.text(spr15, node19posX*0.5+node4posX*0.5,node19posY*0.5+node4posY*0.5);
                        } else {
                          p.fill(texthide);
                          p.textSize(textsize2);
                          p.text(spr15, node19posX*0.5+node4posX*0.5,node19posY*0.5+node4posY*0.5);
                        }



                          if ((  node4posX*0.5+node5posX*0.5 < p.mouseX &&   node4posX*0.5+node5posX*0.5+50 > p.mouseX) && (  node4posY*0.5+node5posY*0.5-50 < p.mouseY &&  node4posY*0.5+node5posY*0.5+50 > p.mouseY)) {
                          p.fill(textvu);
                          p.textSize(textsize2);
                          p.text(spr12,  node4posX*0.5+node5posX*0.5+15, node4posY*0.5+node5posY*0.5);
                          } else {
                            p.fill(texthide);
                          p.textSize(textsize2);
                          p.text(spr12,  node4posX*0.5+node5posX*0.5+15, node4posY*0.5+node5posY*0.5);
                         }



                          if ((node4posX*0.5+node5posX*0.5-50 < p.mouseX &&  node4posX*0.5+node5posX*0.5 > p.mouseX) && ( node4posY*0.5+node5posY*0.5-50 < p.mouseY && node4posY*0.5+node5posY*0.5+50 > p.mouseY)) {
                          p.fill(textvu);
                          p.textSize(textsize2);
                          p.text(spr14,node4posX*0.5+node5posX*0.5-15, node4posY*0.5+node5posY*0.5);
                          } else {
                            p.fill(texthide);
                          p.textSize(textsize2);
                          p.text(spr14,node4posX*0.5+node5posX*0.5-15, node4posY*0.5+node5posY*0.5);
                         }



                          if (( node6posX*0.5+node8posX*0.5-50 < p.mouseX &&   node6posX*0.5+node8posX*0.5+50 > p.mouseX) && (node6posY*0.5+node8posY*0.5-50 < p.mouseY && node6posY*0.5+node8posY*0.5+50 > p.mouseY)) {
                          p.fill(textvu);
                          p.textSize(textsize2);
                          p.text(spr13, node6posX*0.5+node8posX*0.5,node6posY*0.5+node8posY*0.5);
                          } else {
                            p.fill(texthide);
                            p.textSize(textsize2);
                            p.text(spr13, node6posX*0.5+node8posX*0.5,node6posY*0.5+node8posY*0.5);
                          }



                            if ((  node3posX*0.5+node8posX*0.5 < p.mouseX &&   node3posX*0.5+node8posX*0.5+80 > p.mouseX) && (  node3posY*0.5+node8posY*0.5-80 < p.mouseY &&  node3posY*0.5+node8posY*0.5+80 > p.mouseY)) {
                            p.fill(textvu);
                            p.textSize(textsize2);
                            p.text(spr13,  node3posX*0.5+node8posX*0.5+18, node3posY*0.5+node8posY*0.5);
                            } else {
                              p.fill(texthide);
                            p.textSize(textsize2);
                            p.text(spr13,  node3posX*0.5+node8posX*0.5+18, node3posY*0.5+node8posY*0.5);
                           }



                            if ((node3posX*0.5+node8posX*0.5-80 < p.mouseX &&  node3posX*0.5+node8posX*0.5 > p.mouseX) && ( node3posY*0.5+node8posY*0.5-80 < p.mouseY && node3posY*0.5+node8posY*0.5+80 > p.mouseY)) {
                            p.fill(textvu);
                            p.textSize(textsize2);
                            p.text(spr14,node3posX*0.5+node8posX*0.5-18, node3posY*0.5+node8posY*0.5);
                            } else {
                              p.fill(texthide);
                            p.textSize(textsize2);
                            p.text(spr14,node3posX*0.5+node8posX*0.5-18, node3posY*0.5+node8posY*0.5);
                           }



                            if (( node9posX*0.5+node3posX*0.5-50 < p.mouseX &&   node9posX*0.5+node3posX*0.5+50 > p.mouseX) && (node9posY*0.5+node3posY*0.5-50 < p.mouseY && node9posY*0.5+node3posY*0.5+50 > p.mouseY)) {
                            p.fill(textvu);
                            p.textSize(textsize2);
                            p.text(spr13, node9posX*0.5+node3posX*0.5,node9posY*0.5+node3posY*0.5);
                            } else {
                              p.fill(texthide);
                              p.textSize(textsize2);
                              p.text(spr13, node9posX*0.5+node3posX*0.5,node9posY*0.5+node3posY*0.5);
                            }



                              if (( node8posX*0.5+node4posX*0.5-50 < p.mouseX &&   node8posX*0.5+node4posX*0.5+50 > p.mouseX) && (node8posY*0.5+node4posY*0.5-50 < p.mouseY && node8posY*0.5+node4posY*0.5+50 > p.mouseY)) {
                              p.fill(textvu);
                              p.textSize(textsize2);
                              p.text(spr14, node8posX*0.5+node4posX*0.5,node8posY*0.5+node4posY*0.5);
                              } else {
                                p.fill(texthide);
                                p.textSize(textsize2);
                                p.text(spr14, node8posX*0.5+node4posX*0.5,node8posY*0.5+node4posY*0.5);
                              }



                                if (( node9posX*0.5+node6posX*0.5-50 < p.mouseX &&   node9posX*0.5+node6posX*0.5+50 > p.mouseX) && (node9posY*0.5+node6posY*0.5-50 < p.mouseY && node9posY*0.5+node6posY*0.5+50 > p.mouseY)) {
                                p.fill(textvu);
                                p.textSize(textsize2);
                                p.text(spr13, node9posX*0.5+node6posX*0.5,node9posY*0.5+node6posY*0.5);
                                } else {
                                  p.fill(texthide);
                                  p.textSize(textsize2);
                                  p.text(spr13, node9posX*0.5+node6posX*0.5,node9posY*0.5+node6posY*0.5);
                                }


  if (( node3posX*0.5+node4posX*0.5-50 < p.mouseX &&   node3posX*0.5+node4posX*0.5+50 > p.mouseX) && (node3posY*0.5+node4posY*0.5-50 < p.mouseY && node3posY*0.5+node4posY*0.5+50 > p.mouseY)) {
  p.fill(textvu);
  p.textSize(textsize2);
  p.text(spr14, node3posX*0.5+node4posX*0.5,node3posY*0.5+node4posY*0.5);
  } else {
  p.fill(texthide);
  p.textSize(textsize2);
  p.text(spr14, node3posX*0.5+node4posX*0.5,node3posY*0.5+node4posY*0.5);
  }




    if ((  node3posX*0.5+node6posX*0.5 < p.mouseX &&   node3posX*0.5+node6posX*0.5+50 > p.mouseX) && ( node3posY*0.5+node6posY*0.5-50 < p.mouseY &&  node3posY*0.5+node6posY*0.5 > p.mouseY)) {
    p.fill(textvu);
    p.textSize(textsize2);
    p.text(spr6,  node3posX*0.5+node6posX*0.5+30, node3posY*0.5+node6posY*0.5-10);
    } else {
      p.fill(texthide);
    p.textSize(textsize2);
    p.text(spr6,  node3posX*0.5+node6posX*0.5+30, node3posY*0.5+node6posY*0.5-10);
   }




             if ((node3posX*0.5+node6posX*0.5-50 < p.mouseX &&  node3posX*0.5+node6posX*0.5+50 > p.mouseX) && (  node3posY*0.5+node6posY*0.5+10 < p.mouseY &&  node3posY*0.5+node6posY*0.5+80> p.mouseY)) {
             p.fill(textvu);
             p.textSize(textsize2);
             p.text(spr8, node3posX*0.5+node6posX*0.5, node3posY*0.5+node6posY*0.5+30);
             } else {
               p.fill(texthide);
             p.textSize(textsize2);
             p.text(spr8, node3posX*0.5+node6posX*0.5, node3posY*0.5+node6posY*0.5+30);
            }



    if ((node3posX*0.5+node6posX*0.5-50 < p.mouseX &&  node3posX*0.5+node6posX*0.5 > p.mouseX) && (  node3posY*0.5+node6posY*0.5-50 < p.mouseY &&  node3posY*0.5+node6posY*0.5 > p.mouseY)) {
    p.fill(textvu);
    p.textSize(textsize2);
    p.text(spr13, node3posX*0.5+node6posX*0.5-30, node3posY*0.5+node6posY*0.5-10);
    } else {
      p.fill(texthide);
    p.textSize(textsize2);
    p.text(spr13, node3posX*0.5+node6posX*0.5-30, node3posY*0.5+node6posY*0.5-10);
   }



      if ((  node4posX*0.5+node7posX*0.5 < p.mouseX &&   node4posX*0.5+node7posX*0.5+50 > p.mouseX) && (  node4posY*0.5+node7posY*0.5-50 < p.mouseY &&  node4posY*0.5+node7posY*0.5+50 > p.mouseY)) {
      p.fill(textvu);
      p.textSize(textsize2);
      p.text(spr5,  node4posX*0.5+node7posX*0.5+17, node4posY*0.5+node7posY*0.5);
      } else {
        p.fill(texthide);
      p.textSize(textsize2);
      p.text(spr5,  node4posX*0.5+node7posX*0.5+17, node4posY*0.5+node7posY*0.5);
     }



      if ((node4posX*0.5+node7posX*0.5-50 < p.mouseX &&  node4posX*0.5+node7posX*0.5 > p.mouseX) && ( node4posY*0.5+node7posY*0.5-50 < p.mouseY && node4posY*0.5+node7posY*0.5+50 > p.mouseY)) {
      p.fill(textvu);
      p.textSize(textsize2);
      p.text(spr16,node4posX*0.5+node7posX*0.5-17, node4posY*0.5+node7posY*0.5);
      } else {
        p.fill(texthide);
      p.textSize(textsize2);
      p.text(spr16,node4posX*0.5+node7posX*0.5-17, node4posY*0.5+node7posY*0.5);
     }



      if ((  node5posX*0.5+node8posX*0.5 < p.mouseX &&   node5posX*0.5+node8posX*0.5+50 > p.mouseX) && (  node5posY*0.5+node8posY*0.5-50 < p.mouseY &&  node5posY*0.5+node8posY*0.5+50 > p.mouseY)) {
      p.fill(textvu);
      p.textSize(textsize2);
      p.text(spr11,  node5posX*0.5+node8posX*0.5+15, node5posY*0.5+node8posY*0.5);
      } else {
        p.fill(texthide);
      p.textSize(textsize2);
      p.text(spr11,  node5posX*0.5+node8posX*0.5+15, node5posY*0.5+node8posY*0.5);
     }



      if ((node5posX*0.5+node8posX*0.5-50 < p.mouseX &&  node5posX*0.5+node8posX*0.5 > p.mouseX) && ( node5posY*0.5+node8posY*0.5-50 < p.mouseY && node5posY*0.5+node8posY*0.5+50 > p.mouseY)) {
      p.fill(textvu);
      p.textSize(textsize2);
      p.text(spr14,node5posX*0.5+node8posX*0.5-15, node5posY*0.5+node8posY*0.5);
      } else {
        p.fill(texthide);
      p.textSize(textsize2);
      p.text(spr14,node5posX*0.5+node8posX*0.5-15, node5posY*0.5+node8posY*0.5);
     }


//identifier projet scroller
    if (scroll === -341+71 ) {
      p.stroke(bleu);
      p.strokeWeight(1);
      p.line(node13posX, node13posY, node12posX, node12posY);
      p.noStroke();
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(69);
      p.textFont(font2);
      p.text(spr1, 65, -173, p.width, p.height);
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize2);
    p.textFont(font2);
    p.text(spr1,node13posX*0.5+node12posX*0.5-15,node13posY*0.5+node12posY*0.5);
    p.fill(textvuconcept);
    p.textSize(textsize+10);
    p.textFont(font1);
    p.text(turbulence, node12posX, node12posY);
    p.text(réflexion, node13posX, node13posY);
    }
    if (scroll === -341 ) {
      p.stroke(bleu);
      p.strokeWeight(1);
      p.line(node12posX, node12posY, node8posX, node8posY);
      p.noStroke();
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(69);
      p.textFont(font2);
      p.text(spr2, 65, -173, p.width, p.height);
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize2);
    p.textFont(font2);
    p.text(spr2,node8posX*0.5+node12posX*0.5,node8posY*0.5+node12posY*0.5);
    p.fill(textvuconcept);
    p.textSize(textsize+10);
    p.textFont(font1);
    p.text(turbulence, node12posX, node12posY);
    p.text(courbes, node8posX, node8posY-10);
    p.text(polynomiales, node8posX , node8posY +10);
    }
    if (scroll === -341-71 ) {
      p.stroke(bleu);
      p.strokeWeight(1);
      p.line(node1posX, node1posY, node5posX, node5posY);
      p.noStroke();
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(69);
      p.textFont(font2);
      p.text(spr3, 65, -173, p.width, p.height);
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize2);
    p.textFont(font2);
    p.text(spr3,node5posX*0.5+node1posX*0.5-15,node5posY*0.5+node1posY*0.5);
    p.fill(textvuconcept);
    p.textSize(textsize+10);
    p.textFont(font1);
    p.text(tenségrité, node1posX, node1posY);
    p.text(mémoire, node5posX, node5posY);
    }
    if (scroll === -483 ) {
      p.stroke(bleu);
      p.strokeWeight(1);
      p.line(node12posX, node12posY, node15posX, node15posY);
      p.line(node15posX, node15posY, node8posX, node8posY);
      p.line(node14posX, node14posY, node8posX, node8posY);
      p.line(node15posX, node15posY, node14posX, node14posY);
      p.noStroke();
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(69);
      p.textFont(font2);
      p.text(spr4, 65, -173, p.width, p.height);
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize2);
    p.textFont(font2);
    p.text(spr4,node15posX*0.5+node12posX*0.5,node15posY*0.5+node12posY*0.5);
    p.text(spr4,node15posX*0.5+node8posX*0.5,node15posY*0.5+node8posY*0.5);
    p.text(spr4,node14posX*0.5+node8posX*0.5,node14posY*0.5+node8posY*0.5);
    p.text(spr4,node15posX*0.5+node14posX*0.5,node15posY*0.5+node14posY*0.5);
    p.fill(textvuconcept);
    p.textSize(textsize+10);
    p.textFont(font1);
    p.text(portance, node14posX, node14posY);
    p.text(écoulement, node15posX, node15posY-10);
    p.text(laminaire, node15posX, node15posY+10);
    p.text(turbulence, node12posX, node12posY);
    p.text(courbes, node8posX, node8posY-10);
    p.text(polynomiales, node8posX , node8posY +10);
    }
    if (scroll === -483-71 ) {
      p.stroke(bleu);
      p.strokeWeight(1);
      p.line(node6posX, node6posY, node7posX, node7posY);
      p.line(node4posX, node4posY, node7posX, node7posY);
      p.noStroke();
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(69);
      p.textFont(font2);
      p.text(spr5, 65, -173, p.width, p.height);
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize2);
    p.textFont(font2);
    p.text(spr5,node6posX*0.5+node7posX*0.5,node6posY*0.5+node7posY*0.5);
    p.text(spr5,node4posX*0.5+node7posX*0.5+15,node4posY*0.5+node7posY*0.5);
    p.fill(textvuconcept);
    p.textSize(textsize+10);
    p.textFont(font1);
    p.text(système, node4posX, node4posY-10);
    p.text(procédural, node4posX, node4posY+10);
    p.text(surface, node6posX, node6posY-10);
    p.text(entension, node6posX, node6posY+10);
    p.text(système, node7posX, node7posY-10);
    p.text(céllulaire, node7posX, node7posY+10);
    }
    if (scroll === -483-71-71 ) {
      p.stroke(bleu);
      p.strokeWeight(1);
      p.line(node4posX, node4posY, node0posX, node0posY);
      p.line(node0posX, node0posY, node3posX, node3posY);
      p.line(node0posX, node0posY, node2posX, node2posY);
      p.line(node10posX, node10posY, node2posX, node2posY);
      p.line(node11posX, node11posY, node10posX, node10posY);
      p.noStroke();
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(69);
      p.textFont(font2);
      p.text(spr6, 65, -173, p.width, p.height);
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize2);
    p.textFont(font2);
    p.text(spr6,node4posX*0.5+node0posX*0.5-15,node4posY*0.5+node0posY*0.5);
    p.text(spr6,node0posX*0.5+node3posX*0.5,node0posY*0.5+node3posY*0.5);
    p.text(spr6,node0posX*0.5+node2posX*0.5,node0posY*0.5+node2posY*0.5);
    p.text(spr6,node10posX*0.5+node2posX*0.5-15,node10posY*0.5+node2posY*0.5);
    p.text(spr6,node10posX*0.5+node11posX*0.5,node10posY*0.5+node11posY*0.5);
    p.fill(textvuconcept);
    p.textSize(textsize+10);
    p.textFont(font1);
    p.text(système, node4posX, node4posY-10);
    p.text(procédural, node4posX, node4posY+10);
    p.text(système, node3posX, node3posY-10);
    p.text(pneumatique, node3posX, node3posY+10);
    p.text(auxétisme, node0posX, node0posY);
    p.text(jamming, node2posX, node2posY);
    p.text(matière, node10posX, node10posY-10);
    p.text(granulaire, node10posX, node10posY+10);
    p.text(abrasion, node11posX, node11posY);

    }
    if (scroll === -483-71-71-71 ) {
      p.stroke(bleu);
      p.strokeWeight(1);
      p.line(node4posX, node4posY, node0posX, node0posY);
      p.line(node6posX, node6posY, node1posX, node1posY);
      p.line(node5posX, node5posY, node1posX, node1posY);
      p.line(node8posX, node8posY, node1posX, node1posY);
      p.line(node9posX, node9posY, node1posX, node1posY);
      p.line(node0posX, node0posY, node1posX, node1posY);
      p.line(node5posX, node5posY, node9posX, node9posY);
      p.line(node8posX, node8posY, node9posX, node9posY);
      p.noStroke();
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(69);
      p.textFont(font2);
      p.text(spr7, 65, -173, p.width, p.height);
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize2);
    p.textFont(font2);
    p.text(spr7,node4posX*0.5+node0posX*0.5+15,node4posY*0.5+node0posY*0.5);
    p.text(spr7,node6posX*0.5+node1posX*0.5,node6posY*0.5+node1posY*0.5);
    p.text(spr7,node5posX*0.5+node1posX*0.5+15,node5posY*0.5+node1posY*0.5);
    p.text(spr7,node1posX*0.5+node8posX*0.5,node1posY*0.5+node8posY*0.5);
    p.text(spr7,node9posX*0.5+node1posX*0.5,node9posY*0.5+node1posY*0.5);
    p.text(spr7,node0posX*0.5+node1posX*0.5,node0posY*0.5+node1posY*0.5);
    p.text(spr7,node9posX*0.5+node5posX*0.5,node9posY*0.5+node5posY*0.5);
    p.text(spr7,node9posX*0.5+node8posX*0.5+15,node9posY*0.5+node8posY*0.5);
    p.fill(textvuconcept);
    p.textSize(textsize+10);
    p.textFont(font1);
    p.text(système, node4posX, node4posY-10);
    p.text(procédural, node4posX, node4posY+10);
    p.text(surface, node6posX, node6posY-10);
    p.text(entension, node6posX, node6posY+10);
    p.text(auxétisme, node0posX, node0posY);
    p.text(tenségrité, node1posX, node1posY);
    p.text(mémoire, node5posX, node5posY);
    p.text(déformation, node9posX, node9posY-10);
    p.text(différentielle, node9posX, node9posY+10);
    p.text(courbes, node8posX, node8posY-10);
    p.text(polynomiales, node8posX, node8posY+10);

    }
    if (scroll === -483-71-71-71-71) {
      p.stroke(bleu);
      p.strokeWeight(1);
      p.line(node9posX, node9posY, node2posX, node2posY);
      p.line(node9posX, node9posY, node8posX, node8posY);
      p.line(node2posX, node2posY, node8posX, node8posY);
      p.line(node2posX, node2posY, node10posX, node10posY);
      p.noStroke();
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(69);
      p.textFont(font2);
      p.text(spr8, 65, -173, p.width, p.height);
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize2);
    p.textFont(font2);
    p.text(spr8,node9posX*0.5+node2posX*0.5,node9posY*0.5+node2posY*0.5);
    p.text(spr8,node8posX*0.5+node9posX*0.5-15,node8posY*0.5+node9posY*0.5);
    p.text(spr8,node2posX*0.5+node8posX*0.5,node2posY*0.5+node8posY*0.5);
    p.text(spr8,node2posX*0.5+node10posX*0.5+15,node2posY*0.5+node10posY*0.5);
    p.fill(textvuconcept);
    p.textSize(textsize+10);
    p.textFont(font1);
    p.text(courbes, node8posX, node8posY-10);
    p.text(polynomiales, node8posX, node8posY+10);
    p.text(jamming, node2posX, node2posY);
    p.text(matière, node10posX, node10posY-10);
    p.text(granulaire, node10posX, node10posY+10);
    p.text(déformation, node9posX, node9posY-10);
    p.text(différentielle, node9posX, node9posY+10);
    p.text(courbes, node8posX, node8posY-10);
    p.text(polynomiales, node8posX, node8posY+10);

    }

};

// p.mouseDragged = function(){

// }



p.mousePressed = function(){
if ((75 < p.mouseX  && 125 > p.mouseX) && (75 < p.mouseY && 125 > p.mouseY)){
      p.loop();
        p.drawingContext.filter = 'none';
    }

//link beetwen mouse and nodes
var maxDist = 50;
for (var i = 0; i < 50; i++) {
var checkNode = nodes[i];
var d = p.dist(p.mouseX, p.mouseY, checkNode.x, checkNode.y);
if (d < maxDist) {
selectedNode = checkNode;
maxDist = d;
}
}
}



p.mouseReleased = function() {


if (selectedNode != null) {
selectedNode = null;
}
};


p.keyPressed = function() {

if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
if (p.key=='p' || p.key=='P') {
myBoolean = true;
p.println('saving to pdf - starting (this may take some time)');
}
if (p.key == 'r' || p.key == 'R') {
p.background(255);
initNodesAndSprings();
}
};
};

var myp5 = new p5(sketch);
