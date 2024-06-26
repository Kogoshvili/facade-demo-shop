class Filter {
    render() {
        return (
            <div class="p-4">
                <h1 class="font-bold text-xl mb-4">Filter</h1>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="sort">
                        Sort By
                    </label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="sort"
                    >
                        <option value="default">Default</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                    </select>
                </div>
                <div>
                    <p class="block text-gray-700 text-sm font-bold mb-2">Categories</p>
                </div>
            </div>
        )
    }
}

export default Filter
