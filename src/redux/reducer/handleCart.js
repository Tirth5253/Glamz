//==========================THIS iS the Reducer File means this will carried outs Action==========================
//here the reducer function "handle Cart" will takes the two parameters
//the "state" ==> is used to make chages in the  state of the application
//by the action ==> we will executes the  code that will changes the state 


const cart = []                                                                           //initial state of the cart [empty]

const handleCart = (state=cart, action) =>{
    const product = action.payload                                                         //payload is the property that contains the data that needs to be carried with "action"
    switch(action.type){
        case "ADDITEM": 
                                                                                          //First Checks if product already in cart , so what does that  ==> in find it iterates through each element as "x" so the logic says existing elements will get iterates throught the "x" and if its id will matches the Adding products' id then it will simply increases the quantity
            const exist = state.find((x) => x.id === product.id)
            if(exist){
                // Increase the quantity
                return state.map((x)=>x.id ===product.id?{...x, qty: x.qty+1}:x)          //if the product already exists then we will run the map function that "copies the rest of the property of the[x] but increses the quantity by the  by one
            }
            else{
                return [...state, {...product, qty:1}]                                   //else just add the "product" means the new item and set the quantity as 1
            }
        case "DELITEM":
            const exist2 = state.find((x) => x.id === product.id)
            if(exist2.qty === 1){                                                      //If the count of the product is 1 then as we know that if we reduces the count from the product at 1 then it will removed from the cart 
                return state.filter((x)=>x.id!==exist2.id)                            //so here to do that we have used the "filter" method means, filter method will return the new array and that array will be generated on the basis of the this condition "return an array elements which does not satisfies this problem==> [x.id !== exist2.id]" means that except id in the array that matches our product[exist2.id] to get deleted
            }
            else{
                return state.map((x)=> x.id===product.id?{...x, qty:x.qty-1}:x)      //and here if if qty is >1 than just reduce the qty by 1 and if "id" not matches than return the "x" means exact state that is now 
            }
        default:
            return state
            break;
    }
}

export default handleCart