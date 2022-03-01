// declare class
class shape {
   drawShape(){
       console.log("Circle");
   }
   calculateArea(){
       return 3.14*4*4;
   }
   color(){
       this.color=red;
   }
}
// export class using module.exports
module.exports=shape;