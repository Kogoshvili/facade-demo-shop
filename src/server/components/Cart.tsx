import CartService from 'server/services/CartService'
import { inject, signal, Link } from 'facade/server'

class Cart {
    cartService = inject<CartService>(CartService)
    cart = signal<any[]>([])

    effects = [
        () => {
            const a = this.cartService().cart()
            this.cart(a)
        }
        // [() => this.cart(this.cartService().cart()), this.cartService().cart()],
        // () => {
        //     this.cart().map(item => {
        //         console.log(item.title)
        //     })
        // }
    ]

    render() {
        return (
            <div className="fixed top-12 right-6 p-4 bg-white shadow-lg z-50 w-64 border">
                <h1 className="text-xl font-bold mb-4">Cart</h1>
                <ul className="space-y-2">
                    {
                        this.cart().map(item => (
                            <li className="flex justify-between items-center border-b pb-2">
                                <a href={`/product?id=${item.id}`} className="text-md font-medium">{item.title}</a>
                                <span className="text-md font-semibold">{item.price}</span>
                            </li>
                        ))
                    }
                </ul>
                <p className="text-right font-bold mt-4">Total: {this.cart().reduce((acc, item) => acc + item.price, 0)}</p>
                <a href="/checkout"><button className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600">Checkout</button></a>
            </div>
        )
    }
}

export default Cart
