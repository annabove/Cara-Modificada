let mic;

function setup() {
    
    //createCanvas(400, 400);
    createCanvas(windowWidth, windowHeight);
    noStroke();

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
        background(0);
    
    micLevel = mic.getLevel();
    
    //console.log(micLevel);
    
    mov = map(micLevel, 0, 1, 10, 1000);
    
    let boca_w = width / 1.75;
    noStroke();

    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);

    //fons boca
    fill("#FFA07A");
    rect(0, 100, boca_w, 200+mov);

    //llengua
    fill("#FFA07A");
    rect(0, 500, boca_w, 500, 10);

    //dents
    fill("#CD5C5C");
    rect(0, 20, boca_w, 40, 10);

    //barbeta
    fill("#fdddca");
    rect(0, 180, boca_w, 100)
    pop();

    //front
    fill(204, 255, 204);
    rect(0, 0, width, height / 1.8);

    //cella
    fill("#FA8072");
    ellipse(width * 0.25, height / 3.5-mov*0.5, 20);
     fill("#FA8072");
    ellipse(width * 0.27, height / 3.5-mov*0.5, 20);
    fill("#FA8072");
    ellipse(width * 0.29, height / 3.5-mov*0.5, 20);
    fill("#FA8072");
    ellipse(width * 0.31, height / 3.5-mov*0.5, 20);
    fill("#FA8072");
    ellipse(width * 0.23, height / 3.5-mov*0.5, 20);
    fill("#FA8072");
    ellipse(width * 0.21, height / 3.5-mov*0.5, 20);
    fill("#FA8072");
    ellipse(width * 0.19, height / 3.5-mov*0.5, 19);
    fill("#FA8072");
    ellipse(width * 0.17, height / 3.4-mov*0.5, 17);
    fill("#FA8072");
    ellipse(width * 0.15, height / 3.2-mov*0.5, 13);
    
    
    //ull esquerre
    fill("#CD5C5C");
    ellipse(width * 0.25, height / 2.5, 30+mov);
    fill("#CD5C5C");
    ellipse(width * 0.25, height / 2.3, 10);
    
    //pecas
    fill("#F08080");
    ellipse(width * 0.50, height / 10.5+mov, 50);
    

   

    
   
    
//ulldret
    fill("CD5C5C");
    ellipse(width * 0.75, height / 3.5, 50);
    fill("#FA8072");
    ellipse(width * 0.75, height / 2.5, 30+mov);
    fill("#FA8072");
    ellipse(width * 0.75, height / 2.3+mov, 10);
    fill("#FA8072");
    ellipse(width * 0.75, height / 2.2+mov, 10);

   
    //nas
    noFill();
    stroke("#CD5C5C");
    strokeWeight(100);
    arc(width * 0.5, height / 1.85, 60, 60, radians(200), radians(555));
    
     noFill();
    stroke("#F08080");
    strokeWeight(15);
    arc(width * 0.5, height / 1.85, 60, 60+mov, radians(15), radians(155));
    
    
}

//rectMode(CENTER);
 
rect(0+mov*5.5,0+mov*5.5,1000,400);

function touchStarted(){
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
