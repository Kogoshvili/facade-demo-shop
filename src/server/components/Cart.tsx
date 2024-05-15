import CartService from 'server/services/CartService'
import { inject, effect, signal } from 'facade/server'

class Cart {
    cartService = inject<CartService>(CartService)
    cart = signal<any[]>([])

    effects = [
        () => this.cart(this.cartService().cart()),
        // [() => this.cart(this.cartService().cart()), this.cartService().cart()],
        // () => {
        //     this.cart().map(item => {
        //         console.log(item.title)
        //     })
        // }
    ]

    render() {
        return (
            <div class="absolute top-10 right-0 p-4 bg-white shadow-lg z-10 w-48">
                <h1>Cart</h1>
                <ul>
                    {
                        this.cart().map(item => (
                            <li>{item.title} - {item.price}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Cart
