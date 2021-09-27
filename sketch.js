var weights=[43,52,98,38]

function calculate_avg(){
var sum=weights[0]+weights[1]+weights[2]+weights[3]
console.log(sum)
var avg=sum/weights.length
console.log(avg)
}
calculate_avg();












function setup() {
  createCanvas(800,800);
  var sprite=createSprite(100,200,50,50)
  sprite.shapeColor="green"
}

function draw() 
{
  background("blue");
  if(keyIsDown(RIGHT_ARROW)){
    background("red")
    sprite.x=sprite.x+10
  }
drawSprites()
}




