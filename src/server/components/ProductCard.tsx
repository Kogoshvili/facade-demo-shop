import { inject, prop } from 'facade/server'
import ModalService from 'server/services/ModalService'

function truncate(str, num): string {
    if (str.length <= num) return str
    return str.slice(0, num) + '...'
}

class ProductCard {
    product = prop<any>((p: any) => p.product)
    modalService = inject<ModalService>(ModalService)

    recived(props) {
        this.product().description = truncate(this.product().description, 100)
    }

    openModal() {
        // this.modalService().openModal(this.product)
    }

    render() {
        return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-2" onClick={this.openModal}>
                <img class="w-full" src={this.product().thumbnail} alt={this.product().title} />
                <div class="px-6 py-4">
                    <a href={`/product?id=${this.product().id}`} class="font-bold text-xl mb-2">{this.product().title}</a>
                    <p class="text-gray-700 text-base">{this.product().description}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {this.product().price}</span>
                </div>
            </div>
        )
    }

}

export default ProductCard
