// Add your Circle class here

const pi = Math.PI;
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return (this.radius *2);
    }
    set diameter(newDiameter){
        this.radius = newDiameter/2;
    }
    get circumference(){
        return ( this.radius * 2 ) * pi
    }
    set circumference(newCirc){
        this.radius = newCirc / ( pi * 2 )
    }
    get area(){
        return ((this.radius **2) * pi)
    }
    set area(newArea){
        this.radius = Math.sqrt( newArea / pi )
    }
}