import axios from 'axios'
import ProductCard from './ProductCard'

class ProductList {
    products = []
    cols = 6
    query = null

    recived(props) {
        this.cols = props.cols
        this.query = props.query
    }

    async created() {
        const url = this.query?.category
            ? `https://dummyjson.com/products/category/${this.query.category}`
            : 'https://dummyjson.com/products'
        const { data } = await axios.get(url)
        this.products = data.products.slice(0, 12)
    }

    render() {
        return (
            <div class="p-5">
            <h1 class="text-2xl font-bold mb-4">Product List</h1>
            <div class={`grid grid-cols-${this.cols ?? 6} gap-4`}>
                {
                    this.products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
        )
    }
}

export default ProductList
