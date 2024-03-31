import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../contexts";
import Rating from "../components/elements/Rating";
import { useAuth } from "../contexts/AuthContext";
import { useTitle } from "../hooks/useTitle";
import { getProduct } from "../services/ProductService";
import { toast } from "react-toastify";

function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  //  const {price,name,long_description,overview,image,size,rating,in_stock,best_seller} = product

  const [inCart, setInCart] = useState(false);

  const { addToCart, cartlist, removeToCart } = useCart();

  useTitle(product?.name);

  useEffect(() => {
    const cartProduct = cartlist.find(
      (cartProduct) => cartProduct._id === product?._id
    );

    if (cartProduct) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartlist, product?._id]);

  const navigate = useNavigate();

  const { token } = useAuth();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(productId);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchProduct();
  }, [productId]);

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product?.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {product?.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img
              className="rounded   h-64"
              src={product?.image}
              alt={product?.name}
            />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product?.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product?.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {product?.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}

              {product?.in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}

              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product?.size} MB
              </span>
            </p>
            <p className="my-3">
              {!inCart && (
                <button
                  onClick={() =>
                    token ? addToCart(product) : navigate("/login")
                  }
                  disabled={product?.in_stock ? "" : "disabled"}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                    product?.in_stock ? "" : "cursor-not-allowed"
                  }`}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )}
              {inCart && (
                <button
                  onClick={() => removeToCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 
                ${product.in_stock ? "" : "cursor-not-allowed"} `}
                  disabled={product?.in_stock ? "" : "disabled"}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product?.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
