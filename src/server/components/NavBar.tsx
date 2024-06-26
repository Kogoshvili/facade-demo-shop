import axios from 'axios'
import { Splide } from '@splidejs/splide'
import { inject, signal, Facade, Link } from '@kogoshvili/facade/server'
import CartService from 'server/services/CartService'
import Cart from './Cart'
import { getElement } from '@kogoshvili/facade/client/utils'

class NavBar {
    cartService = inject<CartService>(CartService)
    menu = []
    cartCount = signal<number>(0)
    showCart = signal<boolean>(false)

    async mounted() {
        const { data } = await axios.get('https://dummyjson.com/products/categories')
        this.menu = data.map(item => ({
            title: item.name,
            value: item.slug
        }))
    }

    effects = [
        () => {
            const a = this.cartService().cart()
            this.cartCount(a.length)
        }
    ]

    serverTest() {
        console.log('Navbar Server')
        return 100;
    }

    script_test() {
        console.log('Navbar Script')
    }

    async script() {
        const splide: any = new Splide('.splide', {
            perPage: 6,
            arrows: false,
            pagination: false,
            padding: {
                right: '3rem',
                left: '3rem',
            },
        });
        splide.mount();
        this.script_test()
        const w = await this.serverTest();
        console.log('response', w)
        const element = getElement(this)
        document.addEventListener("mousedown", (event) => {
            if (element && !element.contains(event.target as any)) {
                if (this.showCart()) {
                    this.handleClick(false)
                }
            }
        });
    }

    handleClick(show?: boolean) {
        this.showCart((v) => show ?? !v)
    }

    render() {
        return (
            <nav class="navbar">
                <div class="bg-blue-600 p-4 flex justify-between items-center">
                    <div class="flex items-center">
                        <img src="https://via.placeholder.com/50" alt="Logo" class="h-8 w-8 mr-2" />
                        <Link href={`/`} class="text-white font-bold">Brand</Link>
                    </div>
                    <div class="flex-1 mx-4">
                        <Facade component="Search" />
                    </div>
                    <button class="bg-white text-blue-600 p-2 rounded-lg relative" onClick={this.handleClick}>
                        {
                            this.cartCount() > 0 && (
                                <div class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center">
                                    <span>{this.cartCount()}</span>
                                </div>
                            )
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '22px' }}>
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                        {this.showCart() && <Cart />}
                    </button>
                </div>
                <div class="splide" role="group" aria-label="Splide Basic HTML Example">
                    <div class="splide__track bg-blue-100 flex py-3">
                        <ul class="splide__list">
                            {
                                this.menu.map(item => (
                                    <li class="splide__slide">
                                        <Link href={`/products?category=${item.value}`} class="text-black">{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default NavBar
