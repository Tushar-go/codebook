import {ProductCard} from "../ProductCard"


import React, { useEffect, useState } from 'react'

export default function FeaturedProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts(){
      const response = await fetch("/api/products")
      const data = await response.json()
      setProducts(data.products)
    }
    fetchProducts();
  }, [])

                const featuredProducts  = products.slice(0,3)
                
                

    return (
        <section className="my-20">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1> 
               
            <div className="flex flex-wrap justify-center lg:flex-row">
    
              { featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              )) }
    
            </div>
        </section>
      )
    }

