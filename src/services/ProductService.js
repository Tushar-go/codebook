

export async function getProductList(searchTerm) {

    const response = await fetch(`/api/products/search?query=${searchTerm ? searchTerm : ""}`)
    const data = await response.json()
    const fetchedProducts = data.products.models

    return fetchedProducts

}


export async function getProduct(id) {
    const response = await fetch(`/api/products/${id}`)  // dont need to add : after / 
    const { product } = await response.json()
    return product
}