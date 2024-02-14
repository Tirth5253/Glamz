// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM", //here the type defines the action that carries out 
        payload:product       //the payload means that data associated with action
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}
// actions.js
export const addLike = (product) => {
    return {
        type: "LIKE",
        payload: product
    }
}

export const removeLike = (product) => {
    return {
        type: "UNLIKE",
        payload: product
    }
}
