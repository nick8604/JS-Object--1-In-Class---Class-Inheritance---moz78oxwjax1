// import using require
var shape=require('./shape');
// declare class
class Circle extends shape{
    calculateArea() {
        return 3.14*4*4;
    }
}
// export class using module.exports
module.exports=Circle;