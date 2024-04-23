class Circle{
    
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(radius){
        this.radius = radius;
    }
    get Color(){
        return this.color;
    }
    set Color(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`
    }
    get Area(){
        return Math.PI * this.radius * this.radius;
    }
    get Circumference(){
        return 2*Math.PI * this.radius;
    }
}

let circle = new Circle(1.0, "red")

console.log("the circle radius is:",circle.radius)

circle.Radius = 2

console.log("after set circle radius is:",circle.radius)

console.log("the circle color is:",circle.color)

circle.Color="yellow"

console.log("after set circle color is:",circle.color)

console.log(circle.toString)

console.log("the circle area is:",circle.Area)

console.log("the circumfrence area is:",circle.Circumference)

