// declare class
class Shape {
   /*  constructor(color="red"){
        this.color=color;
    } */
    color="red";
    drawshape(){}
    calculateArea(){}
    color(){
        this.color="red";
    }
}
// export class using module.exports
module.exports.Shape=Shape;