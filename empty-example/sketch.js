var myBoolean = false;
var isTheMousePressed = false;
var clay = false;
var responsivskin = false;
var voronoi = false;
var symetrie = false;
var pavillon = false;
var foil = false;
var dynashell = false;
var verre = false;
var metamerie = false;
var promethe = false;
var materiaux = false;
var turingclay = false;
var zoom1 = 0.2
var zoom2 = 100;
var Radius = 200;
var strenght = -10;
var cnv, scroll, scrollim;
let buttons = [];
let imagesclay = [];
let imagesresponsivskin = [];
let imagesvoronoi = [];
let imagessymetrie = [];
let imagespavillon = [];
let imagesfoil = [];
let imagesdynashell = [];
let imagesverre = [];
let imagesmetamerie = [];
let imagespromethe = [];
let imagesmateriaux = [];
let imagesturingclay = [];
let intro = [];
let info = [];
let imageintro = [];
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
var spr1 = '0  1';
var tenségrité = 'Tensegrité'; //1
var spr2 = '02';
var jamming = 'Jamming'; //2
var spr3 = '03';
var système = 'Système'; //3
var spr4 = '04';
var pneumatique = 'pneumatique';
var motif = 'Système'; //4
var spr5 = '05';
var procédural = 'procédural';
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
var spr10 = '1  0'
var compliance = 'Compliance'; //18
var spr11 = '1- 1';
var spr12 = '1  2';
var spr13 = '1  3';
var spr14 = '1  4';
var systmL = 'Système L'; //19
var spr15 = '1  5';
var morphing = 'Morphing';//20
var spr16 = '1  6';

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
img1 = p.loadImage('empty-example/Planches_projets/rootsofclay.png');
img2 = p.loadImage('empty-example/Planches_projets/rootsofclay2.png');
img3 = p.loadImage('empty-example/Planches_projets/rootsofclay3.png');
img4 = p.loadImage('empty-example/Planches_projets/rootsofclay4.png');
img5 = p.loadImage('empty-example/Planches_projets/rootsofclay5.png');
img6 = p.loadImage('empty-example/Planches_projets/anisotropy in iteration.png');
img7 = p.loadImage('empty-example/Planches_projets/anisotropy in iteration2.png');
img8 = p.loadImage('empty-example/Planches_projets/anisotropy in iteration3.png');
img9 = p.loadImage('empty-example/Planches_projets/anisotropy in iteration4.png');
img10 = p.loadImage('empty-example/Planches_projets/anisotropy in iteration5.png');
img11 = p.loadImage('empty-example/Planches_projets/anisotropy in iteration6.png');
img12 = p.loadImage('empty-example/Planches_projets/anisotropy in iteration7.png');
img13 = p.loadImage('empty-example/Planches_projets/desgroupesdesymétrie1.png');
img14 = p.loadImage('empty-example/Planches_projets/desgroupesdesymétrie2.png');
img15 = p.loadImage('empty-example/Planches_projets/desgroupesdesymétrie3.png');
img16 = p.loadImage('empty-example/Planches_projets/dossier1.png');
img17 = p.loadImage('empty-example/Planches_projets/dossier12.png');
img18 = p.loadImage('empty-example/Planches_projets/fairecoprsavecleflux.png');
img19 = p.loadImage('empty-example/Planches_projets/fairecoprsavecleflux2.png');
img20 = p.loadImage('empty-example/Planches_projets/fairecoprsavecleflux3.png');
img21 = p.loadImage('empty-example/Planches_projets/fairecoprsavecleflux4.png');
img22 = p.loadImage('empty-example/Planches_projets/fairecoprsavecleflux5.png');
img23 = p.loadImage('empty-example/Planches_projets/fairecoprsavecleflux6.png');
img24 = p.loadImage('empty-example/Planches_projets/fairecoprsavecleflux7.png');
img25 = p.loadImage('empty-example/Planches_projets/grid1.png');
img26 = p.loadImage('empty-example/Planches_projets/grid2.png');
img27 = p.loadImage('empty-example/Planches_projets/grid3.png');
img28 = p.loadImage('empty-example/Planches_projets/grid4.png');
img29 = p.loadImage('empty-example/Planches_projets/grid5.png');
img30 = p.loadImage('empty-example/Planches_projets/inclusionverre1.png');
img31 = p.loadImage('empty-example/Planches_projets/inclusionverre3.png');
img32 = p.loadImage('empty-example/Planches_projets/inclusionverre4.png');
img33 = p.loadImage('empty-example/Planches_projets/inclusionverre5.png');
img34 = p.loadImage('empty-example/Planches_projets/inclusionverre6.png');
img35 = p.loadImage('empty-example/Planches_projets/inclusionverre7.png');
img36 = p.loadImage('empty-example/Planches_projets/inclusionverre8.png');
img37 = p.loadImage('empty-example/Planches_projets/inclusionverre9.png');
img38 = p.loadImage('empty-example/Planches_projets/inclusionverre10.png');
img39 = p.loadImage('empty-example/Planches_projets/Metamerie1.png');
img40 = p.loadImage('empty-example/Planches_projets/Metamerie2.png');
img41 = p.loadImage('empty-example/Planches_projets/Metamerie3.png');
img42 = p.loadImage('empty-example/Planches_projets/Prometheus.png');
img43 = p.loadImage('empty-example/Planches_projets/Prometheus2.png');
img44 = p.loadImage('empty-example/Planches_projets/Prometheus3.png');
img45 = p.loadImage('empty-example/Planches_projets/Prometheus4.png');
img46 = p.loadImage('empty-example/Planches_projets/Prometheus5.png');
img47 = p.loadImage('empty-example/Planches_projets/reactiondematiere.png');
img48 = p.loadImage('empty-example/Planches_projets/reactiondematiere2.png');
img49 = p.loadImage('empty-example/Planches_projets/reactiondematiere3.png');
img50 = p.loadImage('empty-example/Planches_projets/reactiondematiere4.png');
img51 = p.loadImage('empty-example/Planches_projets/reactiondematiere5.png');
img52 = p.loadImage('empty-example/Planches_projets/reactiondematiere6.png');
img53 = p.loadImage('empty-example/Planches_projets/reactiondematiere7.png');
img54 = p.loadImage('empty-example/Planches_projets/responsivskin.png');
img55 = p.loadImage('empty-example/Planches_projets/responsivskin2.png');
img56 = p.loadImage('empty-example/Planches_projets/responsivskin3.png');
img57 = p.loadImage('empty-example/Planches_projets/responsivskin4.png');
img58 = p.loadImage('empty-example/Planches_projets/responsivskin5.png');
img59 = p.loadImage('empty-example/Planches_projets/responsivskin6.png');
img60 = p.loadImage('empty-example/Planches_projets/responsivskin7.png');
img61 = p.loadImage('empty-example/Planches_projets/responsivskin8.png');
img62 = p.loadImage('empty-example/Planches_projets/responsivskin9.png');
img63 = p.loadImage('empty-example/Planches_projets/Turingclay1.png');
img64 = p.loadImage('empty-example/Planches_projets/Turingclay2.png');
img65 = p.loadImage('empty-example/Planches_projets/Turingclay3.png');
img66 = p.loadImage('empty-example/Planches_projets/Turingclay4.png');
img67 = p.loadImage('empty-example/Planches_projets/Turingclay5.png');
  cursor = p.loadImage('empty-example/Planches_projets/delate - 1.png');
  delate1 = p.loadImage('empty-example/Planches_projets/delate 1.png');
  delate2 = p.loadImage('empty-example/Planches_projets/delate 2.png');
  imglogo = p.loadImage('empty-example/Planches_projets/monogram.png');
  imgintro = p.loadImage('empty-example/Planches_projets/pagedegarde3.png');
  targetfleche = p.loadImage('empty-example/Planches_projets/targetfleche.png');
  // targetdevant = p.loadImage('empty-example/Planches_projets/targetdevant.png');
  // targetderriere = p.loadImage('empty-example/Planches_projets/targetderriere.png');




}

//colors
p.setup = function() {
  cnv = p.createCanvas(p.windowWidth,p.windowHeight);//1920x969
  textsize = p.textSize(20);
  textsize2 = 20;
  textsize3= 30;
  texthide = p.color(45,55,66);//25+5,32+10,43+35
  textvu = p.color(177,60,90);//248,252,191
  // rouge = p.color(91,21,15);
  rouge = p.color(132,113,107);
  bleu = p.color(140*1.2,162*1.2,195*1.2)
  // texthideconcept = p.color(61,88,123);
  // texthideconcept = p.color(120,84,50);
  // texthideconcept = p.color(84,64,26);
  texthideconcept = p.color(91,85,83);
  textvuconcept = p.color(bleu);
  textsoustitre = p.color(190,175,172)
  back = p.color(21,6,0);
  p.smooth();
  p.frameRate(50);
  font1 = 'Space Grotesk'
  font2 = 'Michroma';
  cnv.mouseWheel(changeSize);
  scroll = -483;
  scrollim = 0;
  p.textAlign(p.CENTER, p.CENTER);
  console.log();
  p.noStroke();
  initNodesAndSprings();
  for (let i = 0; i < 1; i++){
      buttons[i] = new Button();
    }
  for (let i = 0; i < 1; i++){
        intro[i] = new Buttonintro();
    }
    for (let i = 0; i < 1; i++){
          info[i] = new Info();
      }
};

//scrollsetting
var changeSize = function(event) {
  // if (scroll < 0 && scroll > -484) {
  if (event.deltaY > 0) {
    scroll = scroll - 71;
    scrollim = scrollim -71;
  } else {
    scroll = scroll + 71;
    scrollim = scrollim +71;
  }
}

//initialise
var initNodesAndSprings = function() {

nodes = [];
var rad = nodeDiameter / 2;
for (var i = 0; i < nodeCount; i++) {
  var newNode = new Node(p.width/2+510+p.random(-100, 100), p.height/2+30+p.random(-100, 100));
  newNode.minX =990;
  newNode.minY = 110;
  newNode.maxX = 1865;
  newNode.maxY = p.height;
  newNode.radius = 250;
  newNode.strength = -50;
  nodes.push(newNode);
}
      // set springs randomly
      var newSpring = [];
      newSpring[0] = new Spring(nodes[20], nodes[4]);
      newSpring[1]  = new Spring(nodes[20], nodes[7]);
      newSpring[2]  = new Spring(nodes[7], nodes[4]);
      newSpring[3]  = new Spring(nodes[19], nodes[4]);
      newSpring[4]  = new Spring(nodes[9], nodes[3]);
      newSpring[5]  = new Spring(nodes[3], nodes[6]);
      newSpring[6]  = new Spring(nodes[3], nodes[8]);
      newSpring[7]  = new Spring(nodes[6], nodes[9]);
      newSpring[8]    = new Spring(nodes[8], nodes[9]);
      newSpring[9]    = new Spring(nodes[8], nodes[6]);
      newSpring[10]    = new Spring(nodes[12], nodes[13]);
      newSpring[11]    = new Spring(nodes[12], nodes[16]);
      newSpring[12]    = new Spring(nodes[13], nodes[16]);
      newSpring[13]    = new Spring(nodes[20], nodes[12]);
      newSpring[14]    = new Spring(nodes[20], nodes[17]);
      newSpring[15]    = new Spring(nodes[12], nodes[17]);
      newSpring[16]    = new Spring(nodes[18], nodes[1]);
      newSpring[17]    = new Spring(nodes[8], nodes[5]);
      newSpring[18]    = new Spring(nodes[18], nodes[5]);
      newSpring[19]    = new Spring(nodes[8], nodes[1]);
      newSpring[20]    = new Spring(nodes[1], nodes[5]);
      newSpring[21]    = new Spring(nodes[18], nodes[8]);
      newSpring[22]    = new Spring(nodes[4], nodes[5]);
      newSpring[23]    = new Spring(nodes[18], nodes[4]);
      newSpring[24]    = new Spring(nodes[4], nodes[8]);
      newSpring[25]    = new Spring(nodes[4], nodes[3]);
      newSpring[26]    = new Spring(nodes[5], nodes[3]);
      newSpring[27]    = new Spring(nodes[0], nodes[2]);
      newSpring[28]    = new Spring(nodes[0], nodes[10]);
      newSpring[29]    = new Spring(nodes[11], nodes[0]);
      newSpring[30]    = new Spring(nodes[0], nodes[6]);
      newSpring[31]    = new Spring(nodes[0], nodes[4]);
      newSpring[32]    = new Spring(nodes[0], nodes[5]);
      newSpring[33]    = new Spring(nodes[2], nodes[10]);
      newSpring[34]    = new Spring(nodes[2], nodes[11]);
      newSpring[35]    = new Spring(nodes[2], nodes[6]);
      newSpring[36]    = new Spring(nodes[2], nodes[4]);
      newSpring[37]    = new Spring(nodes[2], nodes[5]);
      newSpring[38]    = new Spring(nodes[10], nodes[11]);
      newSpring[39]    = new Spring(nodes[10], nodes[6]);
      newSpring[40] = new Spring(nodes[10], nodes[4]);
      newSpring[41]  = new Spring(nodes[10], nodes[5]);
      newSpring[42]  = new Spring(nodes[11], nodes[6]);
      newSpring[43]  = new Spring(nodes[11], nodes[4]);
      newSpring[44]  = new Spring(nodes[11], nodes[5]);
      newSpring[45]  = new Spring(nodes[4], nodes[6]);
      newSpring[46]  = new Spring(nodes[6], nodes[5]);
      newSpring[47]  = new Spring(nodes[4], nodes[7]);
      newSpring[48]    = new Spring(nodes[7], nodes[6]);
      newSpring[49]    = new Spring(nodes[8], nodes[15]);
      newSpring[50]    = new Spring(nodes[15], nodes[14]);
      newSpring[51]    = new Spring(nodes[8], nodes[14]);
      newSpring[52]    = new Spring(nodes[9], nodes[2]);
      newSpring[51] = new Spring(nodes[2], nodes[8]);
      newSpring[52]  = new Spring(nodes[2], nodes[3]);
      newSpring[53]  = new Spring(nodes[10], nodes[8]);
      newSpring[54]  = new Spring(nodes[10], nodes[9]);
      newSpring[55]  = new Spring(nodes[10], nodes[3]);
      newSpring[56]  = new Spring(nodes[8], nodes[9]);
      newSpring[57]  = new Spring(nodes[8], nodes[3]);
      newSpring[58]  = new Spring(nodes[12], nodes[8]);
          for (i = 0; i<=58; i++){
          newSpring[i].length = 50;
          newSpring[i].stiffness = 0.2;
          springs.push(newSpring[i]);
        }
  };


p.draw = function() {
p.textFont(font1);
if (p.myBoolean) beginRecord(p.PDF, timestamp()+'.pdf');
p.background(back);
if (p.mouseX < p.width-1100){
let spacing =30;
for (let k = spacing/2; k <= p.width-1100 ; k += spacing) {
  for (let l = spacing/2; l <= p.height; l += spacing) {
    let mx =p.mouseX*1.5;
    let my =p.mouseY*1.5;
    let d = p.dist(mx, my, k, l);
    p.noStroke();
    p.fill(8*3,26*3,73*3,d*0.005);
    p.ellipse(k, l, 300);
}
}
}else{
  let spacing =30;
  for (let k = spacing/2; k <= p.width-1100 ; k += spacing) {
    for (let l = spacing/2; l <= p.height; l += spacing) {
      let d = p.dist(700, 800, k, l);
      p.noStroke();
      p.fill(8*3,26*3,73*3,d*0.005);
      p.ellipse(k, l, 300);
  }
  }
}
// let spacing =25;
// for (let k = spacing/2; k <= p.width-1000 ; k += spacing) {
//   for (let l = spacing/2; l <= p.height; l += spacing) {
//
//           let pnoiseVal = p.noise(k * 0.02,  l * 0.02, p.frameCount * 0.01);
//            p.noStroke();
//           p.fill(8*3,26*3,73*3,pnoiseVal*20);
//           p.ellipse(k, l, 100);
// }
// }
// p.fill(0,15,80,50);
// p.rect(0,0,923,p.height);

// var gridSize = 40;
// for (var x = 960; x <= p.width-10; x += gridSize) {
// for (var y = 30; y <= p.height-11; y += gridSize) {
// p.fill(texthide);
// p.rect(x-1, y-1, 4, 4,5);
var gridSize = 20;
for (let x = 960; x <= p.width-10; x += gridSize) {
for (let y = 30; y <= p.height-11; y += gridSize) {
  // if ((p.mouseX<p.width && p.mouseX>p.width-1000)&&(p.mouseY<p.height)){
//   let o = p.dist(p.mouseX,p.mouseY, x, y);
// let q =1000-1.5*o;
//   p.noStroke();
//   p.fill(texthide);
//   p.ellipse(x, y, q*0.007);
// }else {
  let o = p.dist(p.width/2+480,p.height/2, x, y);
let q =1000-1.5*o;
  p.noStroke();
  p.fill(texthide);
  p.ellipse(x, y, q*0.007);
  // p.fill(45*3,55*3,66*3);
  // p.ellipse(x, y, q*0.002);
// }
}
}

p.cursor(cursor);

// p.image(img, 50, 50, 400, 400);
// p.image(img2, 50, 50, 800, 800);

// p.image(img4, 50, 50, 400, 400);
// p.image(img5, 50, 50, 400, 400);
// p.image(img6, 50, 50, 400, 400);



//repères
//  p.stroke(119,138,164);
// p.stroke(255,255,150);
// var gauche = p.line(990, 0, 990, p.height);
// var droite = p.line(1865, 0, 1865, p.height);
// var haut = p.line(0, 60, p.width, 60);
// var bas = p.line(0, 1800, p.width, 1800);
// var gauche2 = p.line(70, 0, 70, p.height);
// var haut2 = p.line(0, 70, p.width, 70);
// var bas2 = p.line(0, 111, p.width, 111);//+41px//+10px

 for (var i = 0; i < 21; i++) {
     nodes[i].attractNodes(nodes);
   }
 for (var i = 0 ; i < 21; i++) {
   nodes[i].update();
 }
 for (var i = 0; i < springs.length; i++) {
   springs[i].update();
 }
 if (selectedNode != null) {
    // if (p.key == 'E'|| p.key == 'e') {
   selectedNode.x = p.mouseX;
   selectedNode.y = p.mouseY;
 // }
}

if (scroll == -483+3*71){
  pavillon = true;
} else {
  pavillon = false;
}
if (scroll == -483+71){
  responsivskin = true;
} else {
  responsivskin = false;
}
if (scroll == -483){
  verre = true;
} else {
  verre = false;
}
if (scroll == -483-71){
  turingclay = true;
} else {
  turingclay = false;
}
if (scroll == -483-2*71){
  metamerie = true;
} else {
  metamerie = false;
}
if (scroll == -483-3*71){
  dynashell = true;
} else {
  dynashell = false;
}
if (scroll == -483-4*71){
  symetrie = true;
} else {
  symetrie = false;
}
if (scroll == -483-5*71){
  materiaux = true;
} else {
  materiaux = false;
}
if (scroll == -483-6*71){
  voronoi = true;
} else {
  voronoi = false;
}
if (scroll == -483-7*71){
  foil = true;
} else {
  foil = false;
}
if (scroll == -483-8*71){
  promethe = true;
} else {
  promethe = false;
}
if (scroll == -483-9*71){
  clay = true;
} else {
  clay = false;
}

 p.stroke(texthide);
    p.strokeWeight(2);
    p.line(nodes[20].x, nodes[20].y, nodes[4].x, nodes[4].y);
     p.line(nodes[20].x, nodes[20].y, nodes[7].x, nodes[7].y);
     p.line(nodes[7].x, nodes[7].y, nodes[4].x, nodes[4].y);
   p.line(nodes[19].x, nodes[19].y, nodes[4].x, nodes[4].y);
     p.line(nodes[9].x, nodes[9].y, nodes[3].x, nodes[3].y);
     p.line(nodes[3].x, nodes[3].y, nodes[6].x, nodes[6].y);
     p.line(nodes[3].x, nodes[3].y, nodes[8].x, nodes[8].y);
     p.line(nodes[9].x, nodes[9].y, nodes[6].x, nodes[6].y);
     p.line(nodes[9].x, nodes[9].y, nodes[8].x, nodes[8].y);
     p.line(nodes[8].x, nodes[8].y, nodes[6].x, nodes[6].y);
     p.line(nodes[12].x, nodes[12].y, nodes[13].x, nodes[13].y);
     p.line(nodes[12].x, nodes[12].y, nodes[16].x, nodes[16].y);
     p.line(nodes[13].x, nodes[13].y, nodes[16].x, nodes[16].y);
     p.line(nodes[20].x, nodes[20].y, nodes[12].x, nodes[12].y);
     p.line(nodes[20].x, nodes[20].y, nodes[17].x, nodes[17].y);
     p.line(nodes[12].x, nodes[12].y, nodes[17].x, nodes[17].y);
     p.line(nodes[18].x, nodes[18].y, nodes[1].x, nodes[1].y);
     p.line(nodes[8].x, nodes[8].y, nodes[5].x, nodes[5].y);
     p.line(nodes[18].x, nodes[18].y, nodes[5].x, nodes[5].y);
     p.line(nodes[1].x, nodes[1].y, nodes[8].x, nodes[8].y);
     p.line(nodes[1].x, nodes[1].y, nodes[5].x, nodes[5].y);
     p.line(nodes[18].x, nodes[18].y, nodes[8].x, nodes[8].y);
     p.line(nodes[4].x, nodes[4].y, nodes[5].x, nodes[5].y);
     p.line(nodes[18].x, nodes[18].y, nodes[4].x, nodes[4].y);
     p.line(nodes[4].x, nodes[4].y, nodes[8].x, nodes[8].y);
     p.line(nodes[4].x, nodes[4].y, nodes[3].x, nodes[3].y);
     p.line(nodes[5].x, nodes[5].y, nodes[3].x, nodes[3].y);
   p.line(nodes[0].x, nodes[0].y, nodes[2].x, nodes[2].y);
     p.line(nodes[0].x, nodes[0].y, nodes[10].x, nodes[10].y);
     p.line(nodes[0].x, nodes[0].y, nodes[11].x, nodes[11].y);
     p.line(nodes[0].x, nodes[0].y, nodes[6].x, nodes[6].y);
     p.line(nodes[0].x, nodes[0].y, nodes[4].x, nodes[4].y);
     p.line(nodes[0].x, nodes[0].y, nodes[5].x, nodes[5].y);
     p.line(nodes[2].x, nodes[2].y, nodes[10].x, nodes[10].y);
     p.line(nodes[2].x, nodes[2].y, nodes[11].x, nodes[11].y);
     p.line(nodes[2].x, nodes[2].y, nodes[6].x, nodes[6].y);
     p.line(nodes[2].x, nodes[2].y, nodes[4].x, nodes[4].y);
     p.line(nodes[2].x, nodes[2].y, nodes[5].x, nodes[5].y);
     p.line(nodes[10].x, nodes[10].y, nodes[11].x, nodes[11].y);
     p.line(nodes[10].x, nodes[10].y, nodes[6].x, nodes[6].y);
     p.line(nodes[10].x, nodes[10].y, nodes[4].x, nodes[4].y);
     p.line(nodes[10].x, nodes[10].y, nodes[5].x, nodes[5].y);
     p.line(nodes[11].x, nodes[11].y, nodes[6].x, nodes[6].y);
     p.line(nodes[11].x, nodes[11].y, nodes[4].x, nodes[4].y);
     p.line(nodes[11].x, nodes[11].y, nodes[5].x, nodes[5].y);
     p.line(nodes[6].x, nodes[6].y, nodes[4].x, nodes[4].y);
     p.line(nodes[6].x, nodes[6].y, nodes[5].x, nodes[5].y);
   p.line(nodes[4].x, nodes[4].y, nodes[7].x, nodes[7].y);
     p.line(nodes[7].x, nodes[7].y, nodes[6].x, nodes[6].y);
     p.line(nodes[8].x, nodes[8].y, nodes[15].x, nodes[15].y);
     p.line(nodes[15].x, nodes[15].y, nodes[14].x, nodes[14].y);
     p.line(nodes[8].x, nodes[8].y, nodes[14].x, nodes[14].y);
   p.line(nodes[9].x, nodes[9].y, nodes[2].x, nodes[2].y);
   p.line(nodes[2].x, nodes[2].y, nodes[8].x, nodes[8].y);
 p.line(nodes[2].x, nodes[2].y, nodes[3].x, nodes[3].y);
 p.line(nodes[10].x, nodes[10].y, nodes[8].x, nodes[8].y);
 p.line(nodes[10].x, nodes[10].y, nodes[9].x, nodes[9].y);
   p.line(nodes[10].x, nodes[10].y, nodes[3].x, nodes[3].y);
   p.line(nodes[8].x, nodes[8].y, nodes[9].x, nodes[9].y);
   p.line(nodes[8].x, nodes[8].y, nodes[3].x, nodes[3].y);
 p.line(nodes[12].x, nodes[12].y, nodes[8].x, nodes[8].y);
 p.line(nodes[3].x, nodes[3].y, nodes[2].x, nodes[2].y);
 p.line(nodes[3].x, nodes[3].y, nodes[11].x, nodes[11].y);



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
p.fill(0,7,142);
// p.stroke(91,21,15);
// p.noStroke();
p.ellipse(nodes[8].x, nodes[8].y, nodeDiameterxe, nodeDiameterye);
p.ellipse(nodes[4].x, nodes[4].y, nodeDiameterxe, nodeDiameterye);
// p.stroke(78,25,20);
p.ellipse(nodes[6].x, nodes[6].y, nodeDiameterxa, nodeDiameterya);
p.ellipse(nodes[2].x, nodes[2].y, nodeDiameterxa, nodeDiameterya);
p.ellipse(nodes[10].x, nodes[10].y, nodeDiameterxa, nodeDiameterya);
p.ellipse(nodes[5].x, nodes[5].y, nodeDiameterxa, nodeDiameterya);
// p.stroke(67,26,20);
p.ellipse(nodes[11].x, nodes[11].y, nodeDiameterxb, nodeDiameteryb);
p.ellipse(nodes[0].x, nodes[0].y, nodeDiameterxb, nodeDiameteryb);
p.ellipse(nodes[3].x, nodes[3].y, nodeDiameterxb, nodeDiameteryb);
// p.stroke(55,23,18);
p.ellipse(nodes[18].x, nodes[18].y, nodeDiameterxc, nodeDiameteryc);
p.ellipse(nodes[9].x, nodes[9].y, nodeDiameterxc, nodeDiameteryc);
p.ellipse(nodes[12].x, nodes[12].y, nodeDiameterxc, nodeDiameteryc);
p.ellipse(nodes[20].x, nodes[20].y, nodeDiameterxc, nodeDiameteryc);
// p.stroke(21,19,12);
p.ellipse(nodes[17].x, nodes[17].y, nodeDiameterxd, nodeDiameteryd);
p.ellipse(nodes[13].x, nodes[13].y, nodeDiameterxd, nodeDiameteryd);
p.ellipse(nodes[16].x, nodes[16].y, nodeDiameterxd, nodeDiameteryd);
p.ellipse(nodes[7].x, nodes[7].y, nodeDiameterxd, nodeDiameteryd);
p.ellipse(nodes[15].x, nodes[15].y, nodeDiameterxd, nodeDiameteryd);
p.ellipse(nodes[1].x, nodes[1].y, nodeDiameterxd, nodeDiameteryd);
p.ellipse(nodes[14].x, nodes[14].y, nodeDiameterxd, nodeDiameteryd);
p.ellipse(nodes[19].x, nodes[19].y, nodeDiameterxd, nodeDiameteryd);

    p.fill(back);

  p.noStroke();
  p.ellipse(nodes[8].x, nodes[8].y, nodeDiameterxe+strokenode, nodeDiameterye+strokenode);
  p.ellipse(nodes[4].x, nodes[4].y, nodeDiameterxe+strokenode, nodeDiameterye+strokenode);
  p.noStroke();
  p.ellipse(nodes[2].x, nodes[2].y, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.ellipse(nodes[6].x, nodes[6].y, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.ellipse(nodes[10].x, nodes[10].y, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.ellipse(nodes[5].x, nodes[5].y, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
  p.noStroke();
  p.ellipse(nodes[0].x, nodes[0].y, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
  p.ellipse(nodes[3].x, nodes[3].y, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
  p.ellipse(nodes[11].x, nodes[11].y, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
  p.noStroke();
  p.ellipse(nodes[18].x, nodes[18].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.ellipse(nodes[9].x, nodes[9].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.ellipse(nodes[12].x, nodes[12].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.ellipse(nodes[20].x, nodes[20].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
  p.noStroke();
  p.ellipse(nodes[17].x, nodes[17].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
  p.ellipse(nodes[13].x, nodes[13].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
  p.ellipse(nodes[16].x, nodes[16].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
  p.ellipse(nodes[7].x, nodes[7].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
  p.ellipse(nodes[15].x, nodes[15].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
  p.ellipse(nodes[1].x, nodes[1].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
  p.ellipse(nodes[14].x, nodes[14].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
  p.ellipse(nodes[19].x, nodes[19].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);


  p.textSize(20);
  p.textFont(font1);
  p.textAlign(p.CENTER, p.CENTE);

           if ((nodes[0].x-50 < p.mouseX && nodes[0].x+50 > p.mouseX) && (nodes[0].y-50 < p.mouseY && nodes[0].y+50 > p.mouseY)) {
            p.cursor('grab');p.fill(textvuconcept);
            p.textSize(textsize+10);
            p.text(auxétisme, nodes[0].x, nodes[0].y);
            if (p.mouseIsPressed == true){
              if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
              p.noStroke();
              p.fill(back,340);
              p.rect(0,0,p.windowWidth,p.windowHeight);
              p.image(delate2,p.width-98,44);
              p.noStroke();
              p.noLoop();
            p.fill(bleu);
                p.text('Auxétisme (anglissisme) def. :',150,340);
              p.fill(textsoustitre);
                p.text("Caractère d'un matériaux qui, contrairement aux matériaux conventionels, s'expend quand on l'étire et inversement. En résistance des matériaux (RDM),",200,340+60);
                p.text("on peut décrire ce comportement par le coéfficient de Poisson qui représente le rapport du rétrecissemnt transversal d'un échantillon sur son",200,340+60+30);
                p.text("allongement longitudinal. Pour presque tout les matériaux ce coefficient est donc positif, mais pour un matériaux auxétique ce coefficient est alors négatif.",200,340+60+30+30);
              p.drawingContext.filter = 'Blur(8px)';
          //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
          }
        }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
              p.text(auxétisme, nodes[0].x, nodes[0].y);
           }

            if ((nodes[1].x-50 < p.mouseX && nodes[1].x+50 > p.mouseX) && (nodes[1].y-50 < p.mouseY && nodes[1].y+50 > p.mouseY)) {
            p.cursor('grab');p.fill(textvuconcept);
            p.textSize(textsize+10);
            p.text(tenségrité, nodes[1].x, nodes[1].y);
            if (p.mouseIsPressed == true){
              if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
              p.noStroke();
              p.fill(back,340);
              p.rect(0,0,p.windowWidth,p.windowHeight);
              p.image(delate2,p.width-98,44);
              p.noStroke();
              p.noLoop();
            p.fill(bleu);
                p.text('tenségrité def. :',150,340);
              p.fill(textsoustitre);
                p.text("Ce mot est la contraction directe de 'tension' et 'intégrité' et ainsi nous pouvons en déduire qu'une structure tensègre est une structure dont la tension interne",200,340+60);
                p.text("assure sa propre intégrité, c'est à dire son bon fonctionnement.",200,340+60+30);
              p.drawingContext.filter = 'Blur(8px)';
          //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
          }
        }
            } else {
           p.fill(texthideconcept);
           p.textSize(textsize+10);
           p.text(tenségrité, nodes[1].x, nodes[1].y);
           }

          if ((nodes[2].x-50 < p.mouseX && nodes[2].x+50 > p.mouseX) && (nodes[2].y-50 < p.mouseY && nodes[2].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
               p.text(jamming, nodes[2].x, nodes[2].y);
               if (p.mouseIsPressed == true){
                 if(p.keyIsPressed == true){
                 p.textAlign(p.LEFT);
                 p.noStroke();
                 p.fill(back,340);
                 p.rect(0,0,p.windowWidth,p.windowHeight);
                 p.image(delate2,p.width-98,44);
                 p.noStroke();
                 p.noLoop();
               p.fill(bleu);
                   p.text('Jamming (or. anglaise) def. :',150,340);
                 p.fill(textsoustitre);
                   p.text("La traduction directe de 'jamming' en français est 'confiture'. En fait cette traduction est plutôt imagaire puisque le concepte de jamming conciste à utiliser",200,340+60);
                   p.text("une matière granulaire molle, sous vide dans une poche hermétique pour changer ces propriétés. Avec une pression normale, la poche est molle mais sous vide elle gagne",200,340+60+30);
                   p.text("en dureté. Ceci peux s'expliquer à l'échelle des grains qui sans air ne peuvent plus se mouvoir entre eux.",200,340+60+30+30);
                 p.drawingContext.filter = 'Blur(8px)';
             //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
             }
           }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
               p.text(jamming, nodes[2].x, nodes[2].y);
            }


          if ((nodes[3].x-50 < p.mouseX && nodes[3].x+50 > p.mouseX) && (nodes[3].y-50 < p.mouseY && nodes[3].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(système, nodes[3].x, nodes[3].y-10);
              p.text(pneumatique, nodes[3].x , nodes[3].y+10);
              if (p.mouseIsPressed == true){
                if(p.keyIsPressed == true){
               p.textAlign(p.LEFT);
                p.noStroke();
                p.fill(back,340);
                p.rect(0,0,p.windowWidth,p.windowHeight);
                p.image(delate2,p.width-98,44);
                p.noStroke();
                p.noLoop();
              p.fill(bleu);
                  p.text('Système pneumatique def. :',150,340);
                p.fill(textsoustitre);
                  p.text("Un sytème pneumatique est un système mécanique permétant d'exploiter l'énergie emmagasinée dans un gaz sous forme mécanique du fait qu'elle est comprimée.",200,340+60);
                  p.text("Les avantages qu'il faut y voir sont sa grande réactivité, son efficacité mécanique qui dépasse beaucoup d'autres sources d'énergie. Aussi cette énergie",200,340+60+30);
                  p.text("est 100% propre ce qui en fait un outil prométeur pour notre futur.",200,340+60+30+30);
                p.drawingContext.filter = 'Blur(8px)';
            //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
            }
          }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(système, nodes[3].x, nodes[3].y-10);
              p.text(pneumatique, nodes[3].x , nodes[3].y+10);
            }

              if ((nodes[4].x-50 < p.mouseX && nodes[4].x+50 > p.mouseX) && (nodes[4].y-50 < p.mouseY && nodes[4].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(motif, nodes[4].x, nodes[4].y -10);
             p.text(procédural, nodes[4].x , nodes[4].y +10);
             if (p.mouseIsPressed == true){
               if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
               p.noStroke();
               p.fill(back,340);
               p.rect(0,0,p.windowWidth,p.windowHeight);
               p.image(delate2,p.width-98,44);
               p.noStroke();
               p.noLoop();
             p.fill(bleu);
                 p.text('Système procédural def. :',150,340);
               p.fill(textsoustitre);
                 p.text("Un système (formel) procédural est un ensemble de formes jamais identiques mais dont les lois qui régissent sa gènese sont toujours vérifiées et respéctées.",200,340+60);
                 p.text("Ces motifs sont souvent issues de recherche des formes de génèse dans la nature. Un des précurseurs de ces systèmes reste Alan turring sur ces simulations",200,340+60+30);
                 p.text("de motifs dynamiques. Les systèmes-L en sont aussi un bon éxemple.",200,340+60+30+30);
               p.drawingContext.filter = 'Blur(8px)';
           //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
           }
         }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(motif, nodes[4].x, nodes[4].y -10);
             p.text(procédural, nodes[4].x , nodes[4].y +10);
            }

              if ((nodes[5].x-50 < p.mouseX && nodes[5].x+50 > p.mouseX) && (nodes[5].y-50 < p.mouseY && nodes[5].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(mémoire, nodes[5].x, nodes[5].y);
                if (p.mouseIsPressed == true){
                  if(p.keyIsPressed == true){
                 p.textAlign(p.LEFT);
                  p.noStroke();
                  p.fill(back,340);
                  p.rect(0,0,p.windowWidth,p.windowHeight);
                  p.image(delate2,p.width-98,44);
                  p.noStroke();
                  p.noLoop();
                p.fill(bleu);
                    p.text('Bi-stabilité def. :',150,340);
                  p.fill(textsoustitre);
                  p.text("La Bi-stabilité est le caractère de quelquechose qui détient, en puissance, deux états stables différents. Entre ces deux états le système passe par un état",200,340+60);
                  p.text("instable nécessaire qui fait passer le système das un un des deux états stable. Le rythme est alors le suivant : Etat Stable A / Etat Instable / Etat Stable B ",200,340+60+30);
                  p.text("ou inversement. C'est alors que nous pouvons tirer partie de deux modalités différentes d'un seul objet et explorer le caractère chaotique de celui-ci par le même biais.",200,340+60+30+30);
                  p.drawingContext.filter = 'Blur(8px)';
              //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
              }
            }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(mémoire, nodes[5].x, nodes[5].y);
            }

              if ((nodes[6].x-50 < p.mouseX && nodes[6].x+50 > p.mouseX) && (nodes[6].y-50 < p.mouseY && nodes[6].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(surface, nodes[6].x, nodes[6].y -10);
             p.text(entension, nodes[6].x, nodes[6].y +10);
             if (p.mouseIsPressed == true){
               if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
               p.noStroke();
               p.fill(back,340);
               p.rect(0,0,p.windowWidth,p.windowHeight);
               p.image(delate2,p.width-98,44);
               p.noStroke();
               p.noLoop();
             p.fill(bleu);
                 p.text('Tension surfacique def. :',150,340);
               p.fill(textsoustitre);
               p.text("Une tension est le plus simplement illustrée entre deux points et s'imagine bien par tout le monde. C'est une tension à 1 dimension. A 2 dimensions la tension",200,340+60);
               p.text("se décrits sur un plan ou dans le monde réel sur une surface dont la topologie et le contour est définit par cette tension interne. Alors une même surface peut",200,340+60+30);
               p.text("présenter une infinité de profils suivant les forces de tension qui la traverse. L'équivalence à la troisième dimension peut se raprocher des modèles de tenségrité.",200,340+60+30+30);
                p.drawingContext.filter = 'Blur(8px)';
           //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
           }
         }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
               p.text(surface, nodes[6].x, nodes[6].y -10);
             p.text(entension, nodes[6].x, nodes[6].y +10);
            }

             if ((nodes[7].x-50 < p.mouseX && nodes[7].x+50 > p.mouseX) && (nodes[7].y-50 < p.mouseY && nodes[7].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(motif, nodes[7].x, nodes[7].y -10);
             p.text(céllulaire, nodes[7].x , nodes[7].y +10);
             if (p.mouseIsPressed == true){
               if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
               p.noStroke();
               p.fill(back,340);
               p.rect(0,0,p.windowWidth,p.windowHeight);
               p.image(delate2,p.width-98,44);
               p.noStroke();
               p.noLoop();
             p.fill(bleu);
                 p.text('Système céllulaire def. :',150,340);
               p.fill(textsoustitre);
               p.text("Un Système céllulaire peut se voir comme un ensemble de céllules souvent jamais identiques dont les frontiéres qui les cernes s'ajuste à chacunes des cellules",200,340+60);
               p.text("voisines. L'exemple le plus simple à comprendre et peut-être le plus connu reste le diagramme de Voronoi du mathématicien Russe Gueorgui Voronoï. Ces motifs",200,340+60+30);
               p.text("sont souvent issues de recherches sur la génèse des formes céllulaires dans la nature.",200,340+60+30+30);
               p.drawingContext.filter = 'Blur(8px)';
           //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
           }
         }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
               p.text(motif, nodes[7].x, nodes[7].y -10);
             p.text(céllulaire, nodes[7].x , nodes[7].y +10);
            }

           if ((nodes[8].x-50 < p.mouseX && nodes[8].x+50 > p.mouseX) && (nodes[8].y-50 < p.mouseY && nodes[8].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                p.text(courbes, nodes[8].x, nodes[8].y -10);
             p.text(polynomiales, nodes[8].x , nodes[8].y +10);
             if (p.mouseIsPressed == true){
               if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
               p.noStroke();
               p.fill(back,340);
               p.rect(0,0,p.windowWidth,p.windowHeight);
               p.image(delate2,p.width-98,44);
               p.noStroke();
               p.noLoop();
             p.fill(bleu);
                 p.text('Courbe polynomiale def. :',150,340);
               p.fill(textsoustitre);
               p.text("La courbe polynomiale est une objet mathématique qui pour un seul abscisse possède plusieurs ordonnées ou inversement. Ceci à pour cause de créer des courbes",200,340+60);
               p.text("synusoidales, c'est à dire avec une ou plusieurs vagues.",200,340+60+30);
               p.drawingContext.filter = 'Blur(8px)';
           //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
           }
         }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
               p.text(courbes, nodes[8].x, nodes[8].y -10);
             p.text(polynomiales, nodes[8].x , nodes[8].y +10);
            }


            if ((nodes[9].x-50 < p.mouseX && nodes[9].x+50 > p.mouseX) && (nodes[9].y-50 < p.mouseY && nodes[9].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(déformation, nodes[9].x, nodes[9].y -10);
             p.text(différentielle, nodes[9].x , nodes[9].y +10);
             if (p.mouseIsPressed == true){
               if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
               p.noStroke();
               p.fill(back,340);
               p.rect(0,0,p.windowWidth,p.windowHeight);
               p.image(delate2,p.width-98,44);
               p.noStroke();
               p.noLoop();
             p.fill(bleu);
                 p.text('Déformation différenttielle def. :',150,340);
               p.fill(textsoustitre);
               p.text("Déformation d'un objet causée par la différence de plusieurs forces contradictoires.",200,340+60);
               p.drawingContext.filter = 'Blur(8px)';
           //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
           }
         }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(déformation, nodes[9].x, nodes[9].y -10);
             p.text(différentielle, nodes[9].x , nodes[9].y +10);
            }

           if ((nodes[10].x-50 < p.mouseX && nodes[10].x+50 > p.mouseX) && (nodes[10].y-50 < p.mouseY && nodes[10].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(matière, nodes[10].x, nodes[10].y -10);
             p.text(granulaire, nodes[10].x, nodes[10].y +10);
             if (p.mouseIsPressed == true){
               if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
               p.noStroke();
               p.fill(back,340);
               p.rect(0,0,p.windowWidth,p.windowHeight);
               p.image(delate2,p.width-98,44);
               p.noStroke();
               p.noLoop();
             p.fill(bleu);
                 p.text('Matière granulaire def. :',150,340);
               p.fill(textsoustitre);
               p.text("Cette dénomination englobe toutes les matières inconsistantes constituées de grains plus ou moins grands. Le sable en est le plus large représentant.",200,340+60);
               p.text("Ces matières ont des comportements qui se raprochent des fluides sans leurs désavantages. Les matières granulaires sont concidérées comme informes à",200,340+60+30);
               p.text("l'état naturel et protéiforme par l'interprétation humaine.",200,340+60+30+30);
               p.drawingContext.filter = 'Blur(8px)';
           //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
           }
         }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(matière, nodes[10].x, nodes[10].y -10);
             p.text(granulaire, nodes[10].x , nodes[10].y +10);
            }


           if ((nodes[11].x-50 < p.mouseX && nodes[11].x+50 > p.mouseX) && (nodes[11].y-50 < p.mouseY && nodes[11].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(abrasion, nodes[11].x, nodes[11].y );
                 if (p.mouseIsPressed == true){
                   if(p.keyIsPressed == true){
                  p.textAlign(p.LEFT);
                   p.noStroke();
                   p.fill(back,340);
                   p.rect(0,0,p.windowWidth,p.windowHeight);
                   p.image(delate2,p.width-98,44);
                   p.noStroke();
                   p.noLoop();
                 p.fill(bleu);
                     p.text('Abrasion def. :',150,340);
                   p.fill(textsoustitre);
                   p.text("L'abrasion est la conséquence d'un contacte répété entre une surface d'une granulométrie forte sur une surface plus lisse.",200,340+60);
                   p.drawingContext.filter = 'Blur(8px)';
               //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
               }
             }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(abrasion, nodes[11].x, nodes[11].y );
            }


            if ((nodes[12].x-50 < p.mouseX && nodes[12].x+50 > p.mouseX) && (nodes[12].y-50 < p.mouseY && nodes[12].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(turbulence, nodes[12].x, nodes[12].y);
                 if (p.mouseIsPressed == true){
                   if(p.keyIsPressed == true){
                  p.textAlign(p.LEFT);
                   p.noStroke();
                   p.fill(back,340);
                   p.rect(0,0,p.windowWidth,p.windowHeight);
                   p.image(delate2,p.width-98,44);
                   p.noStroke();
                   p.noLoop();
                 p.fill(bleu);
                     p.text('Perturbation def. :',150,340);
                   p.fill(textsoustitre);
                   p.text("En mécanique des fluides on considère l'écoulement perturbé comme l'opposé d'un écoulement laminaire qui serait l'écoulement le plus linéaire",200,340+60);
                   p.text("et économique énergétiquement. Une comparaison de ces opposées pourrait se faire avec l'ordre et le chaos en considérant que le chaos est le",200,340+60+30);
                   p.text("lieux ou les plus belles choses peuvent s'y réaliser.",200,340+60+30+30);
                   p.drawingContext.filter = 'Blur(8px)';
               //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
               }
             }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(turbulence, nodes[12].x, nodes[12].y);
            }

             if ((nodes[13].x-50 < p.mouseX && nodes[13].x+50 > p.mouseX) && (nodes[13].y-50 < p.mouseY && nodes[13].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(réflexion, nodes[13].x, nodes[13].y);
                 if (p.mouseIsPressed == true){
                   if(p.keyIsPressed == true){
                  p.textAlign(p.LEFT);
                   p.noStroke();
                   p.fill(back,340);
                   p.rect(0,0,p.windowWidth,p.windowHeight);
                   p.image(delate2,p.width-98,44);
                   p.noStroke();
                   p.noLoop();
                 p.fill(bleu);
                     p.text('Réflexion def. :',150,340);
                   p.fill(textsoustitre);
                   p.text("Le phénomène de réfléxion est un phénomène physique qui se joue entre la lumière et les aspects de surface de la matière plus ou moins lisse,",200,340+60);
                   p.text("irrisée ou autre. L'organisation des derniers élèments en surface déterminent largement l'effet de réfléxion. C'est en partie avec ce phénomène",200,340+60+30);
                   p.text("omniprésent autour de nous que le monde nous émerveille.",200,340+60+30+30);
                   p.drawingContext.filter = 'Blur(8px)';
               //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
               }
             }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(réflexion, nodes[13].x, nodes[13].y);
            }


            if ((nodes[14].x-50 < p.mouseX && nodes[14].x+50 > p.mouseX) && (nodes[14].y-50 < p.mouseY && nodes[14].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(portance, nodes[14].x, nodes[14].y);
                 if (p.mouseIsPressed == true){
                   if(p.keyIsPressed == true){
                  p.textAlign(p.LEFT);
                   p.noStroke();
                   p.fill(back,340);
                   p.rect(0,0,p.windowWidth,p.windowHeight);
                   p.image(delate2,p.width-98,44);
                   p.noStroke();
                   p.noLoop();
                 p.fill(bleu);
                     p.text('Portance def. :',150,340);
                   p.fill(textsoustitre);
                   p.text("Force opposée à la traction terrestre permétant d'élever dans l'air un objet. Des formes comme les profils d'ailes sont issues de l'optimisation des effets de dépressions,",200,340+60);
                   p.text("de la minimisation des effets de trainée pour maximiser l'effet de portance. Dans le mouvement l'économie d'énergie dicte les bonnes formes à adopter.",200,340+60+30);
                   p.drawingContext.filter = 'Blur(8px)';
               //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
               }
             }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(portance, nodes[14].x, nodes[14].y);
            }


            if ((nodes[15].x-50 < p.mouseX && nodes[15].x+50 > p.mouseX) && (nodes[15].y-50 < p.mouseY && nodes[15].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(écoulement, nodes[15].x, nodes[15].y -10);
             p.text(laminaire, nodes[15].x , nodes[15].y +10);
             if (p.mouseIsPressed == true){
               if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
               p.noStroke();
               p.fill(back,340);
               p.rect(0,0,p.windowWidth,p.windowHeight);
               p.image(delate2,p.width-98,44);
               p.noStroke();
               p.noLoop();
             p.fill(bleu);
                 p.text('Ecoulement laminaire def. :',150,340);
               p.fill(textsoustitre);
               p.text("En mécanique des fluides on considère l'écoulement perturbé comme l'opposé d'un écoulement laminaire qui serait l'écoulement le plus linéaire",200,340+60);
               p.text("et économique énergétiquement. Dans la nature l'écoulement laminaire est souvent recherché pour faciliter la pénétration d'un objet dans un milieux",200,340+60+30);
               p.text("et réduire les perturbations qui coûtent en énergie.",200,340+60+30+30);
               p.drawingContext.filter = 'Blur(8px)';
           //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
           }
         }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(écoulement, nodes[15].x, nodes[15].y -10);
             p.text(laminaire, nodes[15].x, nodes[15].y +10);
            }


            if ((nodes[16].x-50 < p.mouseX && nodes[16].x+50 > p.mouseX) && (nodes[16].y-50 < p.mouseY && nodes[16].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(réaction, nodes[16].x, nodes[16].y -10);
             p.text(chimique, nodes[16].x , nodes[16].y +10);
             if (p.mouseIsPressed == true){
               if(p.keyIsPressed == true){
              p.textAlign(p.LEFT);
               p.noStroke();
               p.fill(back,340);
               p.rect(0,0,p.windowWidth,p.windowHeight);
               p.image(delate2,p.width-98,44);
               p.noStroke();
               p.noLoop();
             p.fill(bleu);
                 p.text('Réaction chimique def. :',150,340);
               p.fill(textsoustitre);
               p.text("Une réaction chimique est une transformation de la matière au cours de laquelle les espèces chimiques sont modifiées. Les espèces",200,340+60);
               p.text("qui sont consommées sont appelées réactifs ; les espèces formées au cours de la réaction sont appelées produits. Depuis les travaux de Lavoisier (1777),",200,340+60+30);
               p.text("on sait que la réaction chimique se fait sans variation mesurable de la masse : « Rien ne se perd, rien ne se crée, tout se transforme »",200,340+60+30+30);
               p.drawingContext.filter = 'Blur(8px)';
           //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
           }
         }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(réaction, nodes[16].x, nodes[16].y -10);
             p.text(chimique, nodes[16].x, nodes[16].y +10);
            }

            if ((nodes[17].x-50 < p.mouseX && nodes[17].x+50 > p.mouseX) && (nodes[17].y-50 < p.mouseY && nodes[17].y+50 > p.mouseY)) {
                p.cursor('grab');p.fill(textvuconcept);
              p.textSize(textsize+10);
                 p.text(réacdif, nodes[17].x, nodes[17].y);
                 if (p.mouseIsPressed == true){
                   if(p.keyIsPressed == true){

                  p.textAlign(p.LEFT);
                   p.noStroke();
                   p.fill(back,340);
                   p.rect(0,0,p.windowWidth,p.windowHeight);
                   p.image(delate2,p.width-98,44);
                   p.noStroke();
                   p.noLoop();
                 p.fill(bleu);
                     p.text('Réaction/diffusion def. :',150,340);
                   p.fill(textsoustitre);
                   p.text("Un système de réaction-diffusion est un modèle mathématique qui décrit l'évolution des concentrations d'une ou plusieurs substances spatialement distribuées",200,340+60);
                   p.text("et soumises à deux processus : un processus de réactions chimiques locales, dans lequel les différentes substances se transforment, et un processus de",200,340+60+30);
                   p.text("diffusion qui provoque une répartition de ces substances dans l'espace. Ce modèle permet nottement de simuler des systèmes dynamiques naturels en croissance.",200,340+60+30+30);
                   p.drawingContext.filter = 'Blur(8px)';
               //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
               }
             }
            } else {
              p.fill(texthideconcept);
              p.textSize(textsize+10);
                p.text(réacdif, nodes[17].x, nodes[17].y);
            }


              if ((nodes[20].x-50 < p.mouseX && nodes[20].x+50 > p.mouseX) && (nodes[20].y-50 < p.mouseY && nodes[20].y+50 > p.mouseY)) {
                  p.cursor('grab');p.fill(textvuconcept);
                p.textSize(textsize+10);
                   p.text(morphing, nodes[20].x, nodes[20].y);
                   if (p.mouseIsPressed == true){
                     if(p.keyIsPressed == true){
                    p.textAlign(p.LEFT);
                     p.noStroke();
                     p.fill(back,340);
                     p.rect(0,0,p.windowWidth,p.windowHeight);
                     p.image(delate2,p.width-98,44);
                     p.noStroke();
                     p.noLoop();
                   p.fill(bleu);
                       p.text('Morphing (or. anglaise) def. :',150,340);
                     p.fill(textsoustitre);
                     p.text("Le morphing consiste dans une géométrie donnée à adapter un élèment comme un motif proportionnelemnt au cellules du maillage de la géométrie",200,340+60);
                     p.text("qui s'en retrouve optimisée. Cela peut être utile pour garder une cohérance visuelle entre un décore et les caractéristiques formelles d'une ",200,340+60+30);
                     p.text("forme ou pour assurer des propriétés physiques comme la répartition des forces par exemple.",200,340+60+30+30);
                     p.drawingContext.filter = 'Blur(8px)';
                 //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
                 }
               }
              } else {
                p.fill(texthideconcept);
                p.textSize(textsize+10);
                  p.text(morphing, nodes[20].x, nodes[20].y);
              }


                if ((nodes[18].x-50 < p.mouseX && nodes[18].x+50 > p.mouseX) && (nodes[18].y-50 < p.mouseY && nodes[18].y+50 > p.mouseY)) {
                    p.cursor('grab');p.fill(textvuconcept);
                  p.textSize(textsize+10);
                     p.text(compliance, nodes[18].x, nodes[18].y);
                     if (p.mouseIsPressed == true){
                       if(p.keyIsPressed == true){
                      p.textAlign(p.LEFT);
                       p.noStroke();
                       p.fill(back,340);
                       p.rect(0,0,p.windowWidth,p.windowHeight);
                       p.image(delate2,p.width-98,44);
                       p.noStroke();
                       p.noLoop();
                     p.fill(bleu);
                         p.text('Compliance (anglissisme) def. :',150,340);
                       p.fill(textsoustitre);
                       p.text("Forme de résiliance d'un objet qui accepte toutefois la déformation comme un paramètre utile. Ce caractère est souvent donnée par des jeux de densité",200,340+60);
                       p.text("de matière, de dimensionnement ou encore d'hybridation de matières aux propriétées opposées à des points stratégiques dans la pièce. Ainsi la pièce varie",200,340+60+30);
                       p.text("de géométrie aux endroits permis sans rompre pour s'adapter à son milieux.",200,340+60+30+30);
                       p.drawingContext.filter = 'Blur(8px)';
                   //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
                   }
                 }
                } else {
                  p.fill(texthideconcept);
                  p.textSize(textsize+10);
                    p.text(compliance, nodes[18].x, nodes[18].y);
                }

                  if ((nodes[19].x-50 < p.mouseX && nodes[19].x+50 > p.mouseX) && (nodes[19].y-50 < p.mouseY && nodes[19].y+50 > p.mouseY)) {
                      p.cursor('grab');p.fill(textvuconcept);
                    p.textSize(textsize+10);
                       p.text(systmL, nodes[19].x, nodes[19].y);
                       if (p.mouseIsPressed == true){
                         if(p.keyIsPressed == true){
                        p.textAlign(p.LEFT);
                         p.noStroke();
                         p.fill(back,340);
                         p.rect(0,0,p.windowWidth,p.windowHeight);
                         p.image(delate2,p.width-98,44);
                         p.noStroke();
                         p.noLoop();
                       p.fill(bleu);
                           p.text('Système L def. :',150,340);
                         p.fill(textsoustitre);
                         p.text("Grammaire formelle, inventé en 1968 par le biologiste Aristid Lindenmayer permettant de modéliser le processus de développement",200,340+60);
                         p.text("et de prolifération de plantes ou de bactéries.",200,340+60+30);
                         p.drawingContext.filter = 'Blur(8px)';
                     //     // window.open("https://www.cjoint.com/doc/22_07/LGrrsuBy4Rf_demande-convention-stage-107758-7-1-.pdf");
                     }
                   }
                  } else {
                    p.fill(texthideconcept);
                    p.textSize(textsize+10);
                      p.text(systmL, nodes[19].x, nodes[19].y);
                  }

                  // interactivity menu

for (let a = 0; a < imagespavillon.length; a++){
imagespavillon[a].showpavillon();
}
for (let a = 0; a < imagesresponsivskin.length; a++){
imagesresponsivskin[a].showresponsivskin();
}
for (let a = 0; a < imagesverre.length; a++){
imagesverre[a].showverre();
}
for (let a = 0; a < imagesturingclay.length; a++){
imagesturingclay[a].showturingclay();
}
for (let a = 0; a < imagesmetamerie.length; a++){
imagesmetamerie[a].showmetamerie();
}
for (let a = 0; a < imagesdynashell.length; a++){
imagesdynashell[a].showdynashell();
}
for (let a = 0; a < imagessymetrie.length; a++){
imagessymetrie[a].showsymetrie();
}
for (let a = 0; a < imagesmateriaux.length; a++){
imagesmateriaux[a].showmateriaux();
}
for (let a = 0; a < imagesvoronoi.length; a++){
imagesvoronoi[a].showvoronoi();
}
for (let a = 0; a < imagesfoil.length; a++){
imagesfoil[a].showfoil();
}
for (let a = 0; a < imagespromethe.length; a++){
imagespromethe[a].showpromethe();
}
for (let a = 0; a < imagesclay.length; a++){
imagesclay[a].showclay();
}

for (let i = 0; i < buttons.length; i++){
buttons[i].showbutton();
}

//identifier projet scroller
    if (scroll === -341+71 ) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[20].x, nodes[20].y, nodes[4].x, nodes[4].y,20,20);
      p.line(nodes[20].x, nodes[20].y, nodes[7].x, nodes[7].y);
      p.line(nodes[7].x, nodes[7].y, nodes[4].x, nodes[4].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr1, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr1,nodes[20].x*1/3+nodes[4].x*1/3+nodes[7].x*1/3,nodes[20].y*1/3+nodes[4].y*1/3+nodes[7].y*1/3);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(morphing, nodes[20].x, nodes[20].y);
    p.text(motif, nodes[4].x, nodes[4].y-10);
    p.text(procédural, nodes[4].x, nodes[4].y+10);
    p.text(motif, nodes[7].x, nodes[7].y-10);
    p.text(céllulaire, nodes[7].x , nodes[7].y +10);
    }
    if (scroll === -341 ) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[19].x, nodes[19].y, nodes[4].x, nodes[4].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr2, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr2,nodes[4].x*0.5+nodes[19].x*0.5,nodes[4].y*0.5+nodes[19].y*0.5);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(systmL, nodes[19].x, nodes[19].y);
    p.text(motif, nodes[4].x, nodes[4].y-10);
    p.text(procédural, nodes[4].x , nodes[4].y +10);
    }
    if (scroll === -341-71 ) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[9].x, nodes[9].y, nodes[3].x, nodes[3].y);
      p.line(nodes[3].x, nodes[3].y, nodes[6].x, nodes[6].y);
      p.line(nodes[3].x, nodes[3].y, nodes[8].x, nodes[8].y);
      p.line(nodes[9].x, nodes[9].y, nodes[6].x, nodes[6].y);
      p.line(nodes[9].x, nodes[9].y, nodes[8].x, nodes[8].y);
      p.line(nodes[8].x, nodes[8].y, nodes[6].x, nodes[6].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr3, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr3,nodes[3].x*1/4+nodes[9].x*1/4+nodes[6].x*1/4+nodes[8].x*1/4,nodes[3].y*1/4+nodes[9].y*1/4+nodes[8].y*1/4+nodes[6].y*1/4);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(déformation, nodes[9].x, nodes[9].y-10);
        p.text(différentielle, nodes[9].x, nodes[9].y+10);
        p.text(surface, nodes[6].x, nodes[6].y-10);
        p.text(entension, nodes[6].x, nodes[6].y+10);
        p.text(courbes, nodes[8].x, nodes[8].y-10);
        p.text(polynomiales, nodes[8].x, nodes[8].y+10);
    p.text(système, nodes[3].x, nodes[3].y-10);
p.text(pneumatique, nodes[3].x, nodes[3].y+10);
    }
    if (scroll === -483 ) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[12].x, nodes[12].y, nodes[13].x, nodes[13].y);
      p.line(nodes[12].x, nodes[12].y, nodes[16].x, nodes[16].y);
      p.line(nodes[13].x, nodes[13].y, nodes[16].x, nodes[16].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr4, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr4,nodes[16].x*1/3+nodes[12].x*1/3+nodes[13].x*1/3,nodes[16].y*1/3+nodes[12].y*1/3+nodes[13].y*1/3);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(réflexion, nodes[13].x, nodes[13].y);
    p.text(turbulence, nodes[12].x, nodes[12].y);
    p.text(réaction, nodes[16].x, nodes[16].y-10);
    p.text(chimique, nodes[16].x, nodes[16].y+10);
    }
    if (scroll === -483-71 ) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[20].x, nodes[20].y, nodes[12].x, nodes[12].y);
      p.line(nodes[20].x, nodes[20].y, nodes[17].x, nodes[17].y);
      p.line(nodes[12].x, nodes[12].y, nodes[17].x, nodes[17].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr5, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr5,nodes[20].x*1/3+nodes[12].x*1/3+nodes[17].x*1/3,nodes[20].y*1/3+nodes[12].y*1/3+nodes[17].y*1/3);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(morphing, nodes[20].x, nodes[20].y);
    p.text(turbulence, nodes[12].x, nodes[12].y);
    p.text(réacdif, nodes[17].x, nodes[17].y);
    }
    if (scroll === -483-71-71 ) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[18].x, nodes[18].y, nodes[1].x, nodes[1].y);
      p.line(nodes[8].x, nodes[8].y, nodes[5].x, nodes[5].y);
      p.line(nodes[18].x, nodes[18].y, nodes[5].x, nodes[5].y);
      p.line(nodes[1].x, nodes[1].y, nodes[8].x, nodes[8].y);
      p.line(nodes[1].x, nodes[1].y, nodes[5].x, nodes[5].y);
      p.line(nodes[18].x, nodes[18].y, nodes[8].x, nodes[8].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr6, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr6,nodes[18].x*1/4+nodes[1].x*1/4+nodes[5].x*1/4+nodes[8].x*1/4,nodes[18].y*1/4+nodes[1].y*1/4+nodes[5].y*1/4+nodes[8].y*1/4);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(compliance, nodes[18].x, nodes[18].y);
    p.text(tenségrité, nodes[1].x, nodes[1].y);
    p.text(mémoire, nodes[5].x, nodes[5].y);
    p.text(courbes, nodes[8].x, nodes[8].y-10);
    p.text(polynomiales, nodes[8].x, nodes[8].y+10);
    }
    if (scroll === -483-71-71-71 ) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[4].x, nodes[4].y, nodes[5].x, nodes[5].y);
      p.line(nodes[18].x, nodes[18].y, nodes[4].x, nodes[4].y);
      p.line(nodes[5].x, nodes[5].y, nodes[18].x, nodes[18].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr7, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr7,nodes[4].x*1/3+nodes[5].x*1/3+nodes[18].x*1/3,nodes[4].y*1/3+nodes[5].y*1/3+nodes[18].y*1/3);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(compliance, nodes[18].x, nodes[18].y);
    p.text(mémoire, nodes[5].x, nodes[5].y);
    p.text(motif, nodes[4].x, nodes[4].y-10);
    p.text(procédural, nodes[4].x, nodes[4].y+10);
    }
    if (scroll === -483-71-71-71-71) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[4].x, nodes[4].y, nodes[5].x, nodes[5].y);
      p.line(nodes[4].x, nodes[4].y, nodes[8].x, nodes[8].y);
      p.line(nodes[4].x, nodes[4].y, nodes[3].x, nodes[3].y);
      p.line(nodes[5].x, nodes[5].y, nodes[8].x, nodes[8].y);
      p.line(nodes[5].x, nodes[5].y, nodes[3].x, nodes[3].y);
      p.line(nodes[3].x, nodes[3].y, nodes[8].x, nodes[8].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr8, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr8,nodes[4].x*1/4+nodes[5].x*1/4+nodes[8].x*1/4+nodes[3].x*1/4,nodes[4].y*1/4+nodes[5].y*1/4+nodes[8].y*1/4+nodes[3].y*1/4);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(motif, nodes[4].x, nodes[4].y-10);
    p.text(procédural, nodes[4].x, nodes[4].y+10);
    p.text(mémoire, nodes[5].x, nodes[5].y);
    p.text(courbes, nodes[8].x, nodes[8].y-10);
    p.text(polynomiales, nodes[8].x, nodes[8].y+10);
    p.text(système, nodes[3].x, nodes[3].y-10);
p.text(pneumatique, nodes[3].x, nodes[3].y+10);

    }
    if (scroll === -483-71-71-71-71-71) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[0].x, nodes[0].y, nodes[2].x, nodes[2].y);
      p.line(nodes[0].x, nodes[0].y, nodes[10].x, nodes[10].y);
      p.line(nodes[0].x, nodes[0].y, nodes[11].x, nodes[11].y);
      p.line(nodes[0].x, nodes[0].y, nodes[6].x, nodes[6].y);
      p.line(nodes[0].x, nodes[0].y, nodes[4].x, nodes[4].y);
      p.line(nodes[0].x, nodes[0].y, nodes[5].x, nodes[5].y);
      p.line(nodes[2].x, nodes[2].y, nodes[10].x, nodes[10].y);
      p.line(nodes[2].x, nodes[2].y, nodes[11].x, nodes[11].y);
      p.line(nodes[2].x, nodes[2].y, nodes[6].x, nodes[6].y);
      p.line(nodes[2].x, nodes[2].y, nodes[4].x, nodes[4].y);
      p.line(nodes[2].x, nodes[2].y, nodes[5].x, nodes[5].y);
      p.line(nodes[10].x, nodes[10].y, nodes[11].x, nodes[11].y);
      p.line(nodes[10].x, nodes[10].y, nodes[6].x, nodes[6].y);
      p.line(nodes[10].x, nodes[10].y, nodes[4].x, nodes[4].y);
      p.line(nodes[10].x, nodes[10].y, nodes[5].x, nodes[5].y);
      p.line(nodes[11].x, nodes[11].y, nodes[6].x, nodes[6].y);
      p.line(nodes[11].x, nodes[11].y, nodes[4].x, nodes[4].y);
      p.line(nodes[11].x, nodes[11].y, nodes[5].x, nodes[5].y);
      p.line(nodes[6].x, nodes[6].y, nodes[4].x, nodes[4].y);
      p.line(nodes[6].x, nodes[6].y, nodes[5].x, nodes[5].y);
      p.line(nodes[4].x, nodes[4].y, nodes[5].x, nodes[5].y);
      p.line(nodes[3].x, nodes[3].y, nodes[0].x, nodes[0].y);
      p.line(nodes[3].x, nodes[3].y, nodes[2].x, nodes[2].y);
      p.line(nodes[3].x, nodes[3].y, nodes[10].x, nodes[10].y);
      p.line(nodes[3].x, nodes[3].y, nodes[11].x, nodes[11].y);
      p.line(nodes[3].x, nodes[3].y, nodes[6].x, nodes[6].y);
      p.line(nodes[4].x, nodes[4].y, nodes[3].x, nodes[3].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr9, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr9,nodes[0].x*1/7+nodes[2].x*1/7+nodes[10].x*1/7+nodes[11].x*1/7+nodes[6].x*1/7+nodes[4].x*1/7+nodes[5].x*1/7 ,nodes[0].y*1/7+nodes[2].y*1/7+nodes[10].y*1/7+nodes[11].y*1/7+nodes[6].y*1/7+nodes[4].y*1/7+nodes[5].y*1/7);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(jamming, nodes[2].x, nodes[2].y);
    p.text(matière, nodes[10].x, nodes[10].y-10);
    p.text(granulaire, nodes[10].x, nodes[10].y+10);
    p.text(motif, nodes[4].x, nodes[4].y-10);
    p.text(procédural, nodes[4].x, nodes[4].y+10);
        p.text(mémoire, nodes[5].x, nodes[5].y);
        p.text(système, nodes[3].x, nodes[3].y-10);
    p.text(pneumatique, nodes[3].x, nodes[3].y+10);
    p.text(auxétisme, nodes[0].x, nodes[0].y);
p.text(abrasion, nodes[11].x, nodes[11].y);
p.text(surface, nodes[6].x, nodes[6].y-10);
p.text(entension, nodes[6].x, nodes[6].y+10);


    }
    if (scroll === -483-71-71-71-71-71-71) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[6].x, nodes[6].y, nodes[4].x, nodes[4].y);
      p.line(nodes[4].x, nodes[4].y, nodes[7].x, nodes[7].y);
      p.line(nodes[7].x, nodes[7].y, nodes[6].x, nodes[6].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr10, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr10,nodes[6].x*1/3+nodes[4].x*1/3+nodes[7].x*1/3,nodes[6].y*1/3+nodes[4].y*1/3+nodes[7].y*1/3);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(motif, nodes[4].x, nodes[4].y-10);
    p.text(procédural, nodes[4].x, nodes[4].y+10);
    p.text(motif, nodes[7].x, nodes[7].y-10);
    p.text(céllulaire, nodes[7].x , nodes[7].y +10);
    p.text(surface, nodes[6].x, nodes[6].y-10);
    p.text(entension, nodes[6].x, nodes[6].y+10);
    }
    if (scroll === -483-71-71-71-71-71-71-71) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[8].x, nodes[8].y, nodes[15].x, nodes[15].y);
      p.line(nodes[15].x, nodes[15].y, nodes[14].x, nodes[14].y);
      p.line(nodes[8].x, nodes[8].y, nodes[14].x, nodes[14].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr11, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr11,nodes[8].x*1/3+nodes[14].x*1/3+nodes[15].x*1/3,nodes[8].y*1/3+nodes[14].y*1/3+nodes[15].y*1/3);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(courbes, nodes[8].x, nodes[8].y-10);
    p.text(polynomiales, nodes[8].x, nodes[8].y+10);
    p.text(portance, nodes[14].x, nodes[14].y);
    p.text(écoulement, nodes[15].x, nodes[15].y-10);
    p.text(laminaire, nodes[15].x, nodes[15].y+10);
    }
    if (scroll === -483-71-71-71-71-71-71-71-71) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[9].x, nodes[9].y, nodes[2].x, nodes[2].y);
      p.line(nodes[2].x, nodes[2].y, nodes[10].x, nodes[10].y);
      p.line(nodes[2].x, nodes[2].y, nodes[8].x, nodes[8].y);
      p.line(nodes[2].x, nodes[2].y, nodes[6].x, nodes[6].y);
      p.line(nodes[2].x, nodes[2].y, nodes[3].x, nodes[3].y);
      p.line(nodes[10].x, nodes[10].y, nodes[8].x, nodes[8].y);
      p.line(nodes[10].x, nodes[10].y, nodes[9].x, nodes[9].y);
      p.line(nodes[10].x, nodes[10].y, nodes[6].x, nodes[6].y);
      p.line(nodes[10].x, nodes[10].y, nodes[3].x, nodes[3].y);
      p.line(nodes[8].x, nodes[8].y, nodes[9].x, nodes[9].y);
      p.line(nodes[8].x, nodes[8].y, nodes[6].x, nodes[6].y);
      p.line(nodes[8].x, nodes[8].y, nodes[3].x, nodes[3].y);
      p.line(nodes[9].x, nodes[9].y, nodes[6].x, nodes[6].y);
      p.line(nodes[9].x, nodes[9].y, nodes[3].x, nodes[3].y);
      p.line(nodes[3].x, nodes[3].y, nodes[6].x, nodes[6].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr12, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr12,nodes[9].x*1/6+nodes[2].x*1/6+nodes[10].x*1/6+nodes[8].x*1/6+nodes[6].x*1/6+nodes[3].x*1/6 ,nodes[9].y*1/6+nodes[2].y*1/6+nodes[10].y*1/6+nodes[8].y*1/6+nodes[6].y*1/6+nodes[3].y*1/6);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(courbes, nodes[8].x, nodes[8].y-10);
    p.text(polynomiales, nodes[8].x, nodes[8].y+10);
    p.text(surface, nodes[6].x, nodes[6].y-10);
    p.text(entension, nodes[6].x, nodes[6].y+10);
    p.text(jamming, nodes[2].x, nodes[2].y);
    p.text(matière, nodes[10].x, nodes[10].y-10);
    p.text(granulaire, nodes[10].x, nodes[10].y+10);
    p.text(système, nodes[3].x, nodes[3].y-10);
p.text(pneumatique, nodes[3].x, nodes[3].y+10);
p.text(déformation, nodes[9].x, nodes[9].y-10);
    p.text(différentielle, nodes[9].x, nodes[9].y+10);
    }
    if (scroll === -483-71-71-71-71-71-71-71-71-71) {
      p.stroke(45*1.5,55*1.5,66*1.5);
      p.strokeWeight(2);
      p.line(nodes[12].x, nodes[12].y, nodes[8].x, nodes[8].y);
      p.stroke(textvu);
      p.strokeWeight(2);
      p.textAlign(p.LEFT);
      p.fill(textvu);
      p.textSize(52);
      p.textFont(font2);
      p.text(spr13, 65, -173-42, p.width, 970);
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);
      p.textSize(20);
    p.fill(textvu);
    p.textSize(textsize3);
    p.textFont(font2);
    p.text(spr13,nodes[12].x*0.5+nodes[8].x*0.5,nodes[12].y*0.5+nodes[8].y*0.5);
    p.fill(textvuconcept);
    p.textSize(20);
    p.textFont(font1);
    p.text(courbes, nodes[8].x, nodes[8].y-10);
    p.text(polynomiales, nodes[8].x, nodes[8].y+10);
    p.text(turbulence, nodes[12].x, nodes[12].y);
    }
// p.image(cursor,p.mouseX,p.mouseY);
//instruction UX


// p.image(targetdevant,50+47,185+80);


for (let j = 0; j < imageintro.length; j++){
 imageintro[j].showIntro();
 }

 for (let r = 0; r < intro.length; r++){
  intro[r].showButtonIntro();
  }
  for (let r = 0; r < info.length; r++){
   info[r].showinfo();
   }

};
class Imagepavillon {
  showpavillon(){
p.image(img16, 55, 35+scrollim, p.width-55-55, p.height-39);
p.image(img17, 55, 35+935+scrollim,p.width-55-55, p.height-39);
  p.image(delate1,15,23);
  }
}
class Imageresponsivskin {
  showresponsivskin(){
p.image(img54, 55, 35+scrollim, 870, 786);
p.image(img55, 55, 35+796.5+scrollim, 870, 786);
p.image(img56, 55, 35+796.5*2+scrollim, 870, 786);
p.image(img57, 55, 35+796.5*3+scrollim, 870, 786);
p.image(img58, 55, 35+796.5*4+scrollim, 870, 786);
p.image(img59, 55, 35+796.5*5+scrollim, 870, 786);
p.image(img60, 55, 35+796.5*6+scrollim, 870, 786);
p.image(img61, 55, 35+796.5*7+scrollim, 870, 786);
p.image(img62, 55, 35+796.5*8+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[9].x, nodes[9].y, nodes[3].x, nodes[3].y);
  p.line(nodes[3].x, nodes[3].y, nodes[6].x, nodes[6].y);
  p.line(nodes[3].x, nodes[3].y, nodes[8].x, nodes[8].y);
  p.line(nodes[9].x, nodes[9].y, nodes[6].x, nodes[6].y);
  p.line(nodes[9].x, nodes[9].y, nodes[8].x, nodes[8].y);
  p.line(nodes[8].x, nodes[8].y, nodes[6].x, nodes[6].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr3,nodes[3].x*1/4+nodes[9].x*1/4+nodes[6].x*1/4+nodes[8].x*1/4,nodes[3].y*1/4+nodes[9].y*1/4+nodes[8].y*1/4+nodes[6].y*1/4);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(déformation, nodes[9].x, nodes[9].y-10);
      p.text(différentielle, nodes[9].x, nodes[9].y+10);
      p.text(surface, nodes[6].x, nodes[6].y-10);
      p.text(entension, nodes[6].x, nodes[6].y+10);
      p.text(courbes, nodes[8].x, nodes[8].y-10);
      p.text(polynomiales, nodes[8].x, nodes[8].y+10);
  p.text(système, nodes[3].x, nodes[3].y-10);
p.text(pneumatique, nodes[3].x, nodes[3].y+10);
  }
}
class Imageverre{
  showverre(){
p.image(img30, 55, 35+scrollim, 870, 786);
p.image(img31, 55, 35+796.5+scrollim, 870, 786);
p.image(img32, 55, 35+796.5*2+scrollim, 870, 786);
p.image(img33, 55, 35+796.5*3+scrollim, 870, 786);
p.image(img34, 55, 35+796.5*4+scrollim, 870, 786);
p.image(img35, 55, 35+796.5*5+scrollim, 870, 786);
p.image(img36, 55, 35+796.5*6+scrollim, 870, 786);
p.image(img37, 55, 35+796.5*7+scrollim, 870, 786);
p.image(img38, 55, 35+796.5*8+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[12].x, nodes[12].y, nodes[13].x, nodes[13].y);
  p.line(nodes[12].x, nodes[12].y, nodes[16].x, nodes[16].y);
  p.line(nodes[13].x, nodes[13].y, nodes[16].x, nodes[16].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr4,nodes[16].x*1/3+nodes[12].x*1/3+nodes[13].x*1/3,nodes[16].y*1/3+nodes[12].y*1/3+nodes[13].y*1/3);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(réflexion, nodes[13].x, nodes[13].y);
  p.text(turbulence, nodes[12].x, nodes[12].y);
  p.text(réaction, nodes[16].x, nodes[16].y-10);
  p.text(chimique, nodes[16].x, nodes[16].y+10);
  }
}
class Imageturingclay{
  showturingclay(){
p.image(img63, 55, 35+scrollim, 870, 786);
p.image(img64, 55, 35+796.5+scrollim, 870, 786);
p.image(img65, 55, 35+796.5*2+scrollim, 870, 786);
p.image(img66, 55, 35+796.5*3+scrollim, 870, 786);
p.image(img67, 55, 35+796.5*4+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[20].x, nodes[20].y, nodes[12].x, nodes[12].y);
  p.line(nodes[20].x, nodes[20].y, nodes[17].x, nodes[17].y);
  p.line(nodes[12].x, nodes[12].y, nodes[17].x, nodes[17].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr5,nodes[20].x*1/3+nodes[12].x*1/3+nodes[17].x*1/3,nodes[20].y*1/3+nodes[12].y*1/3+nodes[17].y*1/3);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(morphing, nodes[20].x, nodes[20].y);
  p.text(turbulence, nodes[12].x, nodes[12].y);
  p.text(réacdif, nodes[17].x, nodes[17].y);
  }
}
class Imagemetamerie{
  showmetamerie(){
      if ((p.mouseIsPressed == true) && (p.mouseX < 874 && p.mouseX > 620 && p.mouseY < 183+scroll && p.mouseY > 138+scroll)) {
    window.open('https://youtu.be/Ur-IOMWG3_w');
      }
p.image(img39, 55, 35+scrollim, 870, 786);
p.image(img40, 55, 35+796.5+scrollim, 870, 786);
p.image(img41, 55, 35+796.5*2+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[18].x, nodes[18].y, nodes[1].x, nodes[1].y);
  p.line(nodes[8].x, nodes[8].y, nodes[5].x, nodes[5].y);
  p.line(nodes[18].x, nodes[18].y, nodes[5].x, nodes[5].y);
  p.line(nodes[1].x, nodes[1].y, nodes[8].x, nodes[8].y);
  p.line(nodes[1].x, nodes[1].y, nodes[5].x, nodes[5].y);
  p.line(nodes[18].x, nodes[18].y, nodes[8].x, nodes[8].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr6,nodes[18].x*1/4+nodes[1].x*1/4+nodes[5].x*1/4+nodes[8].x*1/4,nodes[18].y*1/4+nodes[1].y*1/4+nodes[5].y*1/4+nodes[8].y*1/4);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(compliance, nodes[18].x, nodes[18].y);
  p.text(tenségrité, nodes[1].x, nodes[1].y);
  p.text(mémoire, nodes[5].x, nodes[5].y);
  p.text(courbes, nodes[8].x, nodes[8].y-10);
  p.text(polynomiales, nodes[8].x, nodes[8].y+10);
  }
}
class Imagedynashell{
  showdynashell(){
p.image(img25, 55, 35+scrollim, 870, 786);
p.image(img26, 55, 35+796.5+scrollim, 870, 786);
p.image(img27, 55, 35+796.5*2+scrollim, 870, 786);
p.image(img28, 55, 35+796.5*3+scrollim, 870, 786);
p.image(img29, 55, 35+796.5*4+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[4].x, nodes[4].y, nodes[5].x, nodes[5].y);
  p.line(nodes[18].x, nodes[18].y, nodes[4].x, nodes[4].y);
  p.line(nodes[5].x, nodes[5].y, nodes[18].x, nodes[18].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr7,nodes[4].x*1/3+nodes[5].x*1/3+nodes[18].x*1/3,nodes[4].y*1/3+nodes[5].y*1/3+nodes[18].y*1/3);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(compliance, nodes[18].x, nodes[18].y);
  p.text(mémoire, nodes[5].x, nodes[5].y);
  p.text(motif, nodes[4].x, nodes[4].y-10);
  p.text(procédural, nodes[4].x, nodes[4].y+10);
  }
}
class Imagesymetrie {
  showsymetrie(){
    if ((p.mouseIsPressed == true) && (p.mouseX < 191 && p.mouseX > 91 && p.mouseY < 1735+scroll && p.mouseY > 1695+scroll)) {
  window.open('https://youtu.be/046p7epyHP8');
    }
    if ((p.mouseIsPressed == true) && (p.mouseX < 456 && p.mouseX > 356 && p.mouseY < 1735+scroll && p.mouseY > 1695+scroll)) {
  window.open('https://youtu.be/DUjVRIRzlbE');
    }
    if ((p.mouseIsPressed == true) && (p.mouseX < 191 && p.mouseX > 91 && p.mouseY < 2190+scroll && p.mouseY > 2150+scroll)) {
  window.open('https://youtu.be/uCq8UL-78H8');
    }
p.image(img13, 55, 35+scrollim, 870, 786);
p.image(img14, 55, 35+796.5+scrollim, 870, 786);
p.image(img15, 55, 35+796.5*2+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[4].x, nodes[4].y, nodes[5].x, nodes[5].y);
  p.line(nodes[4].x, nodes[4].y, nodes[8].x, nodes[8].y);
  p.line(nodes[4].x, nodes[4].y, nodes[3].x, nodes[3].y);
  p.line(nodes[5].x, nodes[5].y, nodes[8].x, nodes[8].y);
  p.line(nodes[5].x, nodes[5].y, nodes[3].x, nodes[3].y);
  p.line(nodes[3].x, nodes[3].y, nodes[8].x, nodes[8].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr8,nodes[4].x*1/4+nodes[5].x*1/4+nodes[8].x*1/4+nodes[3].x*1/4,nodes[4].y*1/4+nodes[5].y*1/4+nodes[8].y*1/4+nodes[3].y*1/4);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(motif, nodes[4].x, nodes[4].y-10);
  p.text(procédural, nodes[4].x, nodes[4].y+10);
  p.text(mémoire, nodes[5].x, nodes[5].y);
  p.text(courbes, nodes[8].x, nodes[8].y-10);
  p.text(polynomiales, nodes[8].x, nodes[8].y+10);
  p.text(système, nodes[3].x, nodes[3].y-10);
  p.text(pneumatique, nodes[3].x, nodes[3].y+10);
  }
}
class Imagemateriaux {
  showmateriaux(){
p.image(img47, 55, 35+scrollim, 870, 786);
p.image(img48, 55, 35+796.5+scrollim, 870, 786);
p.image(img49, 55, 35+796.5*2+scrollim, 870, 786);
p.image(img50, 55, 35+796.5*3+scrollim, 870, 786);
p.image(img51, 55, 35+796.5*4+scrollim, 870, 786);
p.image(img52, 55, 35+796.5*5+scrollim, 870, 786);
p.image(img53, 55, 35+796.5*6+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[0].x, nodes[0].y, nodes[2].x, nodes[2].y);
  p.line(nodes[0].x, nodes[0].y, nodes[10].x, nodes[10].y);
  p.line(nodes[0].x, nodes[0].y, nodes[11].x, nodes[11].y);
  p.line(nodes[0].x, nodes[0].y, nodes[6].x, nodes[6].y);
  p.line(nodes[0].x, nodes[0].y, nodes[4].x, nodes[4].y);
  p.line(nodes[0].x, nodes[0].y, nodes[5].x, nodes[5].y);
  p.line(nodes[2].x, nodes[2].y, nodes[10].x, nodes[10].y);
  p.line(nodes[2].x, nodes[2].y, nodes[11].x, nodes[11].y);
  p.line(nodes[2].x, nodes[2].y, nodes[6].x, nodes[6].y);
  p.line(nodes[2].x, nodes[2].y, nodes[4].x, nodes[4].y);
  p.line(nodes[2].x, nodes[2].y, nodes[5].x, nodes[5].y);
  p.line(nodes[10].x, nodes[10].y, nodes[11].x, nodes[11].y);
  p.line(nodes[10].x, nodes[10].y, nodes[6].x, nodes[6].y);
  p.line(nodes[10].x, nodes[10].y, nodes[4].x, nodes[4].y);
  p.line(nodes[10].x, nodes[10].y, nodes[5].x, nodes[5].y);
  p.line(nodes[11].x, nodes[11].y, nodes[6].x, nodes[6].y);
  p.line(nodes[11].x, nodes[11].y, nodes[4].x, nodes[4].y);
  p.line(nodes[11].x, nodes[11].y, nodes[5].x, nodes[5].y);
  p.line(nodes[6].x, nodes[6].y, nodes[4].x, nodes[4].y);
  p.line(nodes[6].x, nodes[6].y, nodes[5].x, nodes[5].y);
  p.line(nodes[4].x, nodes[4].y, nodes[5].x, nodes[5].y);
  p.line(nodes[3].x, nodes[3].y, nodes[0].x, nodes[0].y);
  p.line(nodes[3].x, nodes[3].y, nodes[2].x, nodes[2].y);
  p.line(nodes[3].x, nodes[3].y, nodes[10].x, nodes[10].y);
  p.line(nodes[3].x, nodes[3].y, nodes[11].x, nodes[11].y);
  p.line(nodes[3].x, nodes[3].y, nodes[6].x, nodes[6].y);
  p.line(nodes[4].x, nodes[4].y, nodes[3].x, nodes[3].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr9,nodes[0].x*1/7+nodes[2].x*1/7+nodes[10].x*1/7+nodes[11].x*1/7+nodes[6].x*1/7+nodes[4].x*1/7+nodes[5].x*1/7 ,nodes[0].y*1/7+nodes[2].y*1/7+nodes[10].y*1/7+nodes[11].y*1/7+nodes[6].y*1/7+nodes[4].y*1/7+nodes[5].y*1/7);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(jamming, nodes[2].x, nodes[2].y);
  p.text(matière, nodes[10].x, nodes[10].y-10);
  p.text(granulaire, nodes[10].x, nodes[10].y+10);
  p.text(motif, nodes[4].x, nodes[4].y-10);
  p.text(procédural, nodes[4].x, nodes[4].y+10);
      p.text(mémoire, nodes[5].x, nodes[5].y);
      p.text(système, nodes[3].x, nodes[3].y-10);
  p.text(pneumatique, nodes[3].x, nodes[3].y+10);
  p.text(auxétisme, nodes[0].x, nodes[0].y);
p.text(abrasion, nodes[11].x, nodes[11].y);
p.text(surface, nodes[6].x, nodes[6].y-10);
p.text(entension, nodes[6].x, nodes[6].y+10);
  }
}
class Imagevoronoi {
  showvoronoi(){
p.image(img6, 55, 35+scrollim, 870, 786);
p.image(img7, 55, 35+796.5+scrollim, 870, 786);
p.image(img8, 55, 35+796.5*2+scrollim, 870, 786);
p.image(img9, 55, 35+796.5*3+scrollim, 870, 786);
p.image(img10, 55, 35+796.5*4+scrollim, 870, 786);
p.image(img11, 55, 35+796.5*5+scrollim, 870, 786);
p.image(img12, 55, 35+796.5*6+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[6].x, nodes[6].y, nodes[4].x, nodes[4].y);
  p.line(nodes[4].x, nodes[4].y, nodes[7].x, nodes[7].y);
  p.line(nodes[7].x, nodes[7].y, nodes[6].x, nodes[6].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr10,nodes[6].x*1/3+nodes[4].x*1/3+nodes[7].x*1/3,nodes[6].y*1/3+nodes[4].y*1/3+nodes[7].y*1/3);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(motif, nodes[4].x, nodes[4].y-10);
  p.text(procédural, nodes[4].x, nodes[4].y+10);
  p.text(motif, nodes[7].x, nodes[7].y-10);
  p.text(céllulaire, nodes[7].x , nodes[7].y +10);
  p.text(surface, nodes[6].x, nodes[6].y-10);
  p.text(entension, nodes[6].x, nodes[6].y+10);
  }
}
class Imagefoil {
  showfoil(){
    p.image(img18, 55, 35+scrollim, 870, 786);
    p.image(img19, 55, 35+796.5+scrollim, 870, 786);
    p.image(img20, 55, 35+796.5*2+scrollim, 870, 786);
    p.image(img21, 55, 35+796.5*3+scrollim, 870, 786);
    p.image(img22, 55, 35+796.5*4+scrollim, 870, 786);
    p.image(img23, 55, 35+796.5*5+scrollim, 870, 786);
    p.image(img24, 55, 35+796.5*6+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[8].x, nodes[8].y, nodes[15].x, nodes[15].y);
  p.line(nodes[15].x, nodes[15].y, nodes[14].x, nodes[14].y);
  p.line(nodes[8].x, nodes[8].y, nodes[14].x, nodes[14].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr11,nodes[8].x*1/3+nodes[14].x*1/3+nodes[15].x*1/3,nodes[8].y*1/3+nodes[14].y*1/3+nodes[15].y*1/3);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(courbes, nodes[8].x, nodes[8].y-10);
  p.text(polynomiales, nodes[8].x, nodes[8].y+10);
  p.text(portance, nodes[14].x, nodes[14].y);
  p.text(écoulement, nodes[15].x, nodes[15].y-10);
  p.text(laminaire, nodes[15].x, nodes[15].y+10);
  }
}
class Imagepromethe {
  showpromethe(){
    p.image(img42, 55, 35+scrollim, 870, 786);
    p.image(img43, 55, 35+796.5+scrollim, 870, 786);
    p.image(img44, 55, 35+796.5*2+scrollim, 870, 786);
    p.image(img45, 55, 35+796.5*3+scrollim, 870, 786);
    p.image(img46, 55, 35+796.5*4+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
  p.line(nodes[9].x, nodes[9].y, nodes[2].x, nodes[2].y);
  p.line(nodes[2].x, nodes[2].y, nodes[10].x, nodes[10].y);
  p.line(nodes[2].x, nodes[2].y, nodes[8].x, nodes[8].y);
  p.line(nodes[2].x, nodes[2].y, nodes[6].x, nodes[6].y);
  p.line(nodes[2].x, nodes[2].y, nodes[3].x, nodes[3].y);
  p.line(nodes[10].x, nodes[10].y, nodes[8].x, nodes[8].y);
  p.line(nodes[10].x, nodes[10].y, nodes[9].x, nodes[9].y);
  p.line(nodes[10].x, nodes[10].y, nodes[6].x, nodes[6].y);
  p.line(nodes[10].x, nodes[10].y, nodes[3].x, nodes[3].y);
  p.line(nodes[8].x, nodes[8].y, nodes[9].x, nodes[9].y);
  p.line(nodes[8].x, nodes[8].y, nodes[6].x, nodes[6].y);
  p.line(nodes[8].x, nodes[8].y, nodes[3].x, nodes[3].y);
  p.line(nodes[9].x, nodes[9].y, nodes[6].x, nodes[6].y);
  p.line(nodes[9].x, nodes[9].y, nodes[3].x, nodes[3].y);
  p.line(nodes[3].x, nodes[3].y, nodes[6].x, nodes[6].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr12,nodes[9].x*1/6+nodes[2].x*1/6+nodes[10].x*1/6+nodes[8].x*1/6+nodes[6].x*1/6+nodes[3].x*1/6 ,nodes[9].y*1/6+nodes[2].y*1/6+nodes[10].y*1/6+nodes[8].y*1/6+nodes[6].y*1/6+nodes[3].y*1/6);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(courbes, nodes[8].x, nodes[8].y-10);
  p.text(polynomiales, nodes[8].x, nodes[8].y+10);
  p.text(surface, nodes[6].x, nodes[6].y-10);
  p.text(entension, nodes[6].x, nodes[6].y+10);
  p.text(jamming, nodes[2].x, nodes[2].y);
  p.text(matière, nodes[10].x, nodes[10].y-10);
  p.text(granulaire, nodes[10].x, nodes[10].y+10);
  p.text(système, nodes[3].x, nodes[3].y-10);
p.text(pneumatique, nodes[3].x, nodes[3].y+10);
p.text(déformation, nodes[9].x, nodes[9].y-10);
  p.text(différentielle, nodes[9].x, nodes[9].y+10);
  }
}
class Imageclay {
  showclay(){
    p.image(img1, 55, 35+scrollim, 870, 786);
    p.image(img2, 55, 35+796.5+scrollim, 870, 786);
    p.image(img3, 55, 35+796.5*2+scrollim, 870, 786);
    p.image(img4, 55, 35+796.5*3+scrollim, 870, 786);
    p.image(img5, 55, 35+796.5*4+scrollim, 870, 786);
  p.image(delate1,15,23);
  p.stroke(bleu);
  p.strokeWeight(1);
      p.line(nodes[12].x, nodes[12].y, nodes[8].x, nodes[8].y);
  p.noStroke();
  p.textAlign(p.CENTER,p.CENTER);
  p.fill(textvu);
  p.textSize(textsize3);
  p.textFont(font2);
  p.text(spr13,nodes[12].x*0.5+nodes[8].x*0.5,nodes[12].y*0.5+nodes[8].y*0.5);
  p.fill(textvuconcept);
  p.textSize(textsize2);
  p.textFont(font1);
  p.text(courbes, nodes[8].x, nodes[8].y-10);
  p.text(polynomiales, nodes[8].x, nodes[8].y+10);
  p.text(turbulence, nodes[12].x, nodes[12].y);
  }
}
class Button {

  showbutton(){

    p.strokeWeight(2);
    p.stroke(177,60,90);
    p.noFill();



    // p.rect(50, 260-35, 130, 85,5);
    p.noStroke();
    p.fill(87,15,17,90);
    p.rect(30, 240, 810, 56, 10);
    p.strokeWeight(2);
    p.stroke(177,60,90);
    p.line(40,0,40,p.height);
    p.noStroke();
    // p.fill(177,60,90);
    // p.image(targetderriere,55,185+40);
    p.image(targetfleche,30,252);
    // p.rect(30, 297-35, 30, 10,5);

    p.textAlign(p.LEFT);

    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr1, 65, 55+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Pavillon hupersensible.', 190, 78-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Fiction pour une démocratrie participative de la technique.',190,103-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr2, 65, 92+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text("Le Banc «L» (Coming soon).", 190, 78+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Banc en arboréscance généré par ordinateur.',190,103+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr3, 65, 92+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text("ResponsiveSkin.", 190, 78+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Pavillon de recherche/Air de jeux/Abris.',190,103+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr4, 65, 92+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Entre aléatoire et méthode.', 190, 78+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Inclusions verre/métaux pour des situations libres d’usages.',190,103+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr5, 65, 92+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Turing Clay.', 190, 78+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Rencontre entre la l’argile et le design génératif.',190,103+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr6, 65, 92+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Méta-méria.', 190, 78+71+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Jeux de construction pris dans la fluctuation.',190,103+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr7, 65, 92+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Dynashell.', 190, 78+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Grille modulaire à relief variable.',190,103+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr8, 65, 92+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text("Un maillage d'air.", 190, 78+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Découvertes des maillages de muscles artificielles.',190,103+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr9, 65, 92+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Réactions de matières. De l’expérience ordinaire à l’innovation.', 190, 78+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Hybridation de principes technologiques innovants.',190,103+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr10, 65, 92+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Du hasard au procédé.', 190, 78+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Conception d’une table basse.',190,103+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr11, 65, 92+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Faire corps avec le flux.', 190, 78+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Conception d’un «hydrofoil» optimisé.',190,103+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr12, 65, 92+71+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text('Prométhée.', 190, 78+71+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Conception d’une assise évolutive.',190,103+71+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font2);
    p.fill(bleu);
    p.textSize(52);
    p.text(spr13, 65, 92+71+71+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.textFont(font1);
    p.textSize(20);
    p.fill(textsoustitre);
    p.textSize(textsize+10);
    p.text("La terre comme retour aux «sources».", 190, 78+71+71+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
    p.fill(bleu);
    p.text('Deux productions artisanales en terre cuite.',190,103+71+71+71+71+71+71+71+71+71+71+71+71-37+scroll, p.width, 970);
  }
}
class Buttonintro {
  showButtonIntro(){
    p.noFill();
    p.stroke(177,60,90);
    p.strokeWeight(1);
    p.textAlign(p.RIGHT);
    p.image(imglogo,p.width-85,30,60,60);
    p.fill(177,60,90);
    p.textSize(20);
    p.noStroke();
    p.text('-About me',p.width-50,60);
    }
}
class Intro {
  showIntro(){
    p.image(imgintro,0,0,p.width,p.height);
       p.image(delate2,p.width-98,44);
}
}
class Info {
  showinfo(){
  p.stroke(177,60,90);
  p.strokeWeight(1);
  p.line(1195,35, 1195, 68);
  p.noStroke();
  p.textAlign(p.LEFT);
  p.fill(177,60,90);
  p.textSize(20);
  p.text('Press R',945,43);
  p.textSize(15);
  p.text('to reorganize the constellation',945,63);
  p.textSize(20);
  p.text('Press CNTRL and click',1220,43);
  p.textSize(15);
  p.text('on the words to learn more about theme',1220,63);
}
}

p.mousePressed = function(){
    // isTheMousePressed = !isTheMousePressed;
  if ((30 < p.mouseX && 30+790 > p.mouseX) && (240 < p.mouseY && 240+56 > p.mouseY)){
    if (pavillon == true){
      for (let q = 0; q < info.length; q++){
     info.splice(q,50);
    }
    scroll = 0;
    imagespavillon.push(new Imagepavillon());
  }
  if (responsivskin == true){
  scroll = 0;
  imagesresponsivskin.push(new Imageresponsivskin());
}
    if (verre == true){
    scroll = 0;
    imagesverre.push(new Imageverre());
  }
  if (turingclay == true){
  scroll = 0;
  imagesturingclay.push(new Imageturingclay());
}
if (metamerie == true){
scroll = 0;
imagesmetamerie.push(new Imagemetamerie());
}
if (dynashell == true){
scroll = 0;
imagesdynashell.push(new Imagedynashell());
}
    if (symetrie == true){
    scroll = 0;
    imagessymetrie.push(new Imagesymetrie());
  }
  if (materiaux== true){
  scroll = 0;
  imagesmateriaux.push(new Imagemateriaux());
}
if (voronoi== true){
scroll = 0;
imagesvoronoi.push(new Imagevoronoi());
}
if (foil== true){
scroll = 0;
imagesfoil.push(new Imagefoil());
}
if (promethe== true){
scroll = 0;
imagespromethe.push(new Imagepromethe());
}
if (clay== true){
scroll = 0;
imagesclay.push(new Imageclay());
}
scrollim = 0;
if((scroll != -341) && (scroll != -199) && (scroll != -1122) && (scroll != -199+71) && (scroll != -199+71+71) && (scroll != -199+71+71+71) && (scroll != -199+71+71+71+71)  && (scroll != -1122-71)  && (scroll != -1122-71-71)  && (scroll != -1122-71-71-71)  && (scroll != -1122-71-71-71-71) ) {
   for (let i = 0; i < buttons.length; i++){
   buttons.splice(i,50);
 }
 for (let q = 0; q < intro.length; q++){
intro.splice(q,50);
}
}
}
  if ((15 < p.mouseX  && 65 > p.mouseX) && (23 < p.mouseY && 73 > p.mouseY)){
   info.push(new Info());
   buttons.push(new Button());
intro.push(new Buttonintro());
   scroll = -341-71-71;
   scrollim = 0;
   for (let a = 0; a < imagespavillon.length; a++){
 imagespavillon.splice(a,50);
}
for (let a = 0; a < imagesresponsivskin.length; a++){
imagesresponsivskin.splice(a,50);
}
 for (let a = 0; a < imagesverre.length; a++){
imagesverre.splice(a,50);
}
for (let a = 0; a < imagesturingclay.length; a++){
imagesturingclay.splice(a,50);
}
for (let a = 0; a < imagesmetamerie.length; a++){
imagesmetamerie.splice(a,50);
}
for (let a = 0; a < imagesdynashell.length; a++){
imagesdynashell.splice(a,50);
}
for (let a = 0; a < imagessymetrie.length; a++){
imagessymetrie.splice(a,50);
}
for (let a = 0; a < imagesmateriaux.length; a++){
imagesmateriaux.splice(a,50);
}
for (let a = 0; a < imagesvoronoi.length; a++){
imagesvoronoi.splice(a,50);
}
for (let a = 0; a < imagesfoil.length; a++){
imagesfoil.splice(a,50);
}
for (let a = 0; a < imagespromethe.length; a++){
imagespromethe.splice(a,50);
}
for (let a = 0; a < imagesclay.length; a++){
imagesclay.splice(a,50);
}
}

if ((p.width-170 < p.mouseX  && p.width-30 > p.mouseX) && (40 < p.mouseY && 90 > p.mouseY)){
  imageintro.push(new Intro());
  // scroll = 341;
  scrollim = 0;
  for (let q = 0; q < intro.length; q++){
intro.splice(q,50);
}
for (let q = 0; q < info.length; q++){
info.splice(q,50);
}
}


if ((p.width-98 < p.mouseX  && p.width-98+50 > p.mouseX) && (44 < p.mouseY && 94 > p.mouseY)){
p.loop();
buttons.push(new Button());
intro.push(new Buttonintro());
  info.push(new Info());
scroll = -341-71-71;
   scrollim = 0;
for (let i = 0; i < buttons.length; i++){
buttons.splice(i,1);
}
for (let j = 0; j < imageintro.length; j++){
imageintro.splice(j,50);
}
p.drawingContext.filter = 'none';
}

if ((990 < p.mouseX  && 1865 > p.mouseX) && (110 < p.mouseY && p.height > p.mouseY)&&(p.keyIsPressed == true)){
 buttons.push(new Button());
intro.push(new Buttonintro());
 scroll = -341-71-71;
 scrollim = 0;
 for (let a = 0; a < imagespavillon.length; a++){
imagespavillon.splice(a,50);
}
for (let a = 0; a < imagesresponsivskin.length; a++){
imagesresponsivskin.splice(a,50);
}
for (let a = 0; a < imagesverre.length; a++){
imagesverre.splice(a,50);
}
for (let a = 0; a < imagesturingclay.length; a++){
imagesturingclay.splice(a,50);
}
for (let a = 0; a < imagesmetamerie.length; a++){
imagesmetamerie.splice(a,50);
}
for (let a = 0; a < imagesdynashell.length; a++){
imagesdynashell.splice(a,50);
}
for (let a = 0; a < imagessymetrie.length; a++){
imagessymetrie.splice(a,50);
}
for (let a = 0; a < imagesmateriaux.length; a++){
imagesmateriaux.splice(a,50);
}
for (let a = 0; a < imagesvoronoi.length; a++){
imagesvoronoi.splice(a,50);
}
for (let a = 0; a < imagesfoil.length; a++){
imagesfoil.splice(a,50);
}
for (let a = 0; a < imagespromethe.length; a++){
imagespromethe.splice(a,50);
}
for (let a = 0; a < imagesclay.length; a++){
imagesclay.splice(a,50);
}
for (let q = 0; q < intro.length; q++){
intro.splice(q,50);
}
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
initNodesAndSprings();
}
};
p.windowResized = function() {
  p.resizeCanvas(p.windowWidth, p.windowHeight);

}

};

var myp5 = new p5(sketch);
