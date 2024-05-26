import { signal } from 'facade-js/server'

class CartService {
    cart = signal<any[]>([])

    addToCart(item: any) {
        this.cart([...this.cart(), item])
    }

    removeFromCart(item: any) {
    }

    clear() {
        this.cart([])
    }
}

export default CartService
