class Polygon{
    shape
    constructor(array){
        this.shape = array
    }
    perimeter(){
     let sum = this.shape.reduce(function(a,b){
         return a + b;
     })
     return sum;
    }
}