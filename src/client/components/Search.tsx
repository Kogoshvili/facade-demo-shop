import { signal } from 'facade-js/client'

class Search {
    value: string = ''
    showResults = signal(false)
    products = signal([])

    async getProducts() {
        const response = await fetch(`https://dummyjson.com/products/search?q=${this.value}`);
        const data = await response.json();
        this.products(data.products.slice(0, 3))
    }

    handleInput(e) {
        this.value = e.target.value
        if (this.value.length > 2) {
            this.getProducts()
            this.showResults(true)
        } else if (this.value.length === 0) {
            this.showResults(false)
        }
    }

    renderd(element) {
        document.addEventListener("mousedown", (event) => {
            if (element && !element.contains(event.target)) {
                this.showResults(false)
            }
        });
    }

    render() {
        return (
            <div class="relative">
                <input
                    type="text"
                    value={this.value}
                    placeholder="Search..."
                    class="w-full p-2 rounded-lg focus:outline-none"
                    onInput:defer={this.handleInput}
                />
                {
                    this.showResults() && (
                        <div class="absolute w-full bg-white shadow-lg mt-2 z-10">
                            {
                                this.products().map((product, index) => (
                                    <div key={index} class="p-2 border-b border-gray-200 hover:bg-gray-100">
                                        <a href={`/product?id=${product.id}`}>
                                            <h1 class="text-lg font-bold">{product.title}</h1>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Search
