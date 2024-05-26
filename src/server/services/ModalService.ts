import { signal } from 'facade-js/server'

class ModalService {
    modal = signal<string|null>(null)

    openModal(data: any) {
        this.modal(data)
    }

    closeModal() {
        this.modal(null)
    }
}

export default ModalService
