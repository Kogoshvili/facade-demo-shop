import { inject, signal, prop } from '@kogoshvili/facade/server'
import CartService from 'server/services/CartService'

class Product {
    cartService = inject<CartService>(CartService)
    id = prop<string>(p => p.id)
    product = null

    async mounted(){
        const result = await fetch(`https://dummyjson.com/products/${this.id()}`)
        const data = await result.json()
        this.product = data
    }

    handleAddToCart(){
        this.cartService().addToCart(this.product)
    }

    render() {
        return (
            <div class="py-2 mt-5">
                <div class="flex flex-wrap bg-white shadow-md rounded-lg p-6">
                    <img class="w-1/2 h-64 object-cover" src={this.product.images[0]} alt="Product image" />
                    <div class="w-1/2 px-6">
                        <h2 class="text-xl font-semibold mb-2">{ this.product.title }</h2>
                        <p class="text-gray-700 mb-2">{ this.product.description }</p>
                        <p class="text-gray-700 mb-2">Brand: { this.product.brand }</p>
                        <p class="text-gray-700 mb-2">Category: { this.product.category }</p>
                        <p class="text-gray-700 mb-2">Stock: { this.product.stock }</p>
                        <p class="text-gray-700 mb-2">Rating: { this.product.rating }</p>
                        <p class="text-gray-700 mb-2">Price: ${ this.product.price }</p>
                        <p class="text-gray-700 mb-2">Discount: { this.product.discountPercentage }%</p>
                        <button
                            class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={this.handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
