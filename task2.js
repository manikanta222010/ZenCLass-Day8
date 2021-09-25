class Circle {
    constructor(radius=1.0, color="red"){
        this.radius=radius
        this.color=color
    }
    getRadius(){
        console.log(`Radius of circle is ${this.radius}`)
    }
    setRadius(x){
        this.radius=x
        console.log(`Radius of circle is set to ${this.radius}`)
    }
    getColor(){
        console.log(`Color of circle is ${this.color}`)
    }
    setColor(x){
        this.color=x
        console.log(`Color of circle is set to ${this.color}`)
    }
    getArea(){
        console.log(`Area of circle is ${Math.PI*(this.radius*this.radius)}`)
    }
    getCircumference(){
        console.log(`Circumference of circle is ${2*Math.PI*this.radius}`)
    }
}

const circle1 = new Circle(2, "green")
circle1.getRadius()
circle1.setRadius(4)
circle1.getColor()
circle1.setColor("black")
circle1.getArea()
circle1.getCircumference()