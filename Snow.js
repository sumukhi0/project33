class Snow{
    constructor(x,y){
        this.image = loadImage("snow4.webp");
    }
    display(){
        
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
         
      
          for(var i=0; i<this.trajectory.length; i++){
            image(this.image, this.trajectory[i][0], this.trajectory[i][1]);
          }
    }
}