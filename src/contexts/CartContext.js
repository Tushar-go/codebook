import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducers/cartReducers"
import { deleteFromCartService, postAddToCartService } from "../services/CartService"
import { useAuth } from "./AuthContext"
import axios from "axios"

const cartInitialState = {
    cartlist: [],
    total: 0
}



export const CartContext = createContext(cartInitialState)



export const CartProvider = ({children}) => {

    const {token} = useAuth()
    

        const[state,dispatch]=useReducer(cartReducer,cartInitialState)

       async function addToCart(product){
            //    const updatedList = state.cartlist.concat(product)
               const updatedTotal = state.total + product.price
            const updatedList = await postAddToCartService(product,token) 
            // console.log(updatedList)
            // console.log(product)
            // console.log(token)

               dispatch({
                type:"ADD_TO_CART",
                payload:{
                    products: updatedList,
                    total : updatedTotal
                }
               })

        }


      async  function removeToCart(product){
        //  const updatedList =  state.cartlist.filter(cartItem=> cartItem._id !== product._id )

           const updatedList = await deleteFromCartService(product._id,token)
           

         const updatedTotal = state.total - product.price
            dispatch({
                type:"REMOVE_TO_CART",
                payload:{
                    products: updatedList,
                    total: updatedTotal
                }
            })

        }


      async function clearCart(){

        const cart = state.cartlist
        for (const item of cart) {
            await axios.delete(`api/user/cart/${item._id}`, {
              headers: {
                authorization: token,
              },
            });
          }

            dispatch({
                type:"CLEAR_CART",
                payload:{
                    products:[],
                    total:0
                }
            })
        }

    const value = {
        cartlist: state.cartlist,
        total: state.total,
        addToCart,
        removeToCart,
        clearCart
    }

    
  return (<CartContext.Provider value={value}  >
    {children}
    </CartContext.Provider>)
}


  export function useCart(){
    return useContext(CartContext)
  }