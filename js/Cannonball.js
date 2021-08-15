class Cannonball{
constructor(x,y){


   var options={

restitution:0.8,
friction:1,
density:1,
isStatic:true

   } 

    this.body = Bodies.circle(x,y,40,options)
   this.image = loadImage("assets/cannonball.png")
   this.r=40
    World.add(world,this.body)








}

display(){
//v=ar pos this.body.position
var angle = this.body.angle

push()
translate(this.body.position.x,this.body.position.y)
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()








}











shoot(){
var velocity=p5.Vector.fromAngle(cannon.angle)
velocity.mult(20)

Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
Matter.Body.setStatic(this.body,false)




    
}

}

