import { inject, signal } from '@kogoshvili/facade/server'
import CartService from 'server/services/CartService'

class CheckoutBody {
    cartService = inject<CartService>(CartService)
    cart = signal<any[]>([])

    effects = [
        () => {
            const cart = this.cartService().cart()
            this.cart(cart)
        },
    ]

    handleDone() {
        this.cartService().clear()
    }

    render() {
        return (
            <div class="mt-10 mx-4">
                <h1 className="text-xl font-bold mb-4">Checkout</h1>
                <div className="p-4 bg-white">
                    <h2 className="text-lg font-bold mb-4">Your Cart</h2>
                    <ul className="space-y-2">
                        {
                            this.cart().map(item => (
                                <li className="flex justify-between items-center border-b pb-2">
                                    <span className="text-md font-medium">{item.title}</span>
                                    <span className="text-md font-semibold">{item.price}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="w-32 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={this.handleDone}>Done</button>
                </div>
            </div>
        )
    }
}

export default CheckoutBody
