import Header from 'server/layouts/header'
import Body from 'server/layouts/body'
import NavBar from 'server/components/NavBar'
import Product from 'server/components/Product'
import { prop } from 'facade/server'

class PDP {
    id = prop((r) => r.query.id)

    render() {
        return (
            <html>
                <Header name="Shop - PDP" />
                <Body>
                    <NavBar />
                    <Product id={this.id} />
                </Body>
            </html>
        )
    }
}

export default PDP
