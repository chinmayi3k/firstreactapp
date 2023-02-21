  export function setcartitems(cart){
    return({
        type:"setcart",
        Cart:cart


    });
  }
    export function setdeleteitem(id){
      return({
        type:"setdelete",
        CartId:id
      });
    }
  export function  CartGetter(){
    return(
        {
            type:"cartGetter",
             
        }
    )
}