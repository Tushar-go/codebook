export const cartReducer = (state,action) =>{
    const {type,payload} = action

    switch(type){

        case "ADD_TO_CART":
          return {...state , cartlist:payload.products, total:payload.total}

        case "REMOVE_TO_CART":
          return {...state , cartlist:payload.products , total:payload.total}

        case "CLEAR_CART":
          return {...state, cartlist:payload.products , total:payload.total}

       

          default:
          return new Error("no case found")

    }


}