import Header from 'server/layouts/header'
import Body from 'server/layouts/body'
import NavBar from 'server/components/NavBar'
import CheckoutBody from 'server/components/CheckoutBody'

class Checkout {
    render() {
        return (
            <html>
                <Header name="Shop - Checkout" />
                <Body>
                    <NavBar />
                    <CheckoutBody />
                </Body>
            </html>
        )
    }
}

export default Checkout
