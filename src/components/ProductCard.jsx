import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts";
import { useEffect, useState } from "react";
import Rating from "./elements/Rating";
import { useAuth } from "../contexts/AuthContext";





export const ProductCard = ({product}) => {

             const{ _id,image,name,overview,price,best_seller,rating,in_stock} = product            

             const[inCart,setInCart]=useState(false)

            const {addToCart,cartlist,removeToCart } = useCart()

            const navigate = useNavigate()

            const {token} = useAuth()


            useEffect(()=>{

                const cartProduct= cartlist.find((cartProduct)=> cartProduct._id === product._id )
                
                if(cartProduct){
                    setInCart(true)
                }else{
                    setInCart(false)
                }

            },[cartlist,product._id])

      
           


  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${_id}`} className="relative" >
           {best_seller &&  <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}  
            <img className="rounded-t-lg w-full h-72 object-contain" src={image} alt="" />
        </Link>
        <div className="p-5">
            <Link to={`/products/${_id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            
            <div className="flex items-center my-2">
                <Rating rating={rating} />
                {/* <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star text-yellow-500 mr-1"></i> */}
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>

                {!inCart && <button  disabled={ in_stock ? "":"disabled" } onClick={()=> token ?  addToCart(product) : navigate("/login") } className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
                 ${in_stock ? "": "cursor-not-allowed"  } `}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> }
                

             {inCart && <button disabled={ in_stock ? "":"disabled" }  onClick={()=> removeToCart(product)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800  ${in_stock ? "": "cursor-not-allowed"} `}>Remove Item <i className="ml-1 bi bi-trash3"></i></button> }   
                
            </p>
        </div>
    </div>
  )
}