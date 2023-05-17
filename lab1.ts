class Rectangle
{
    width:number;
    height:number;
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }
     CalcCircumference():number
    {
        return (this.width+this.height)*2
    }
    static WhoAmI(){
        console.log("I am rectangle");
    }
}
class Square extends Rectangle
{
         
        constructor(len)
        {
            super(len,len)
            //this.len=len;
        }
        CalcCircumference():number
        {
            super.CalcCircumference()
            return (this.width*4)
        }
        static WhoAmI(){
            console.log("I am square");
        }
}
     var s=new Square(2);
     var r=new Rectangle(2,2);
console.log(s.CalcCircumference());
console.log(r.CalcCircumference());
     



