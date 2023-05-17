class point
{
    dim1:number;
    dim2:number;
    constructor(dim1,dim2)
    {
        this.dim1=dim1;
        this.dim2=dim2;
    }
    length(p1:point,p2:point):number
    {
        var len:number
         len= Math.sqrt(((p1.dim2-p2.dim2)*(p1.dim2-p2.dim2))+((p1.dim1-p2.dim1)*(p1.dim1-p2.dim1)));
         return len
    }
 }