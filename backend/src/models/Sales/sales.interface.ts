export interface Sales {
    items:object;
    subTotal:number;
    createdAt:Date;
}
export interface item{
    productId:string,
    quantity:number,
    price:number,
    total:number
}
export interface ISales{
    id:string
}
export interface Iitem{
    id:string
}