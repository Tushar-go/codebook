import axios from "axios";




export const postAddToCartService = async (productToAdd, token) => {
    const response = await axios.post(
      '/api/user/cart',
      { product: productToAdd },
      { headers: { authorization: token } }
    );
  
    const { cart } = response.data;
    const { status } = response;
    if (status === 200 || status === 201) {
      return cart;
    }
  };


  export const deleteFromCartService = async (productId, token) => {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token },
    });
  
    const { cart } = response.data;
    const { status } = response;
    if (status === 200 || status === 201) {
      return cart;
    }
  };

