class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=190;
		this.dustbinHeight=210;
		this.wallThickness=20;
		this.angle=0;	
		
		this.image=loadImage("dustbingreen.png");

		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			imageMode (CENTER)
		image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}

