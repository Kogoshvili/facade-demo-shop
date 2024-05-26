import { registerPages, initServer } from '@kogoshvili/facade/server'

import ShopPage from 'server/pages/ShopPage'
import PDP from 'server/pages/PDP'
import PLP from 'server/pages/PLP'
import Checkout from 'server/pages/Checkout'

registerPages({
    'checkout': Checkout,
    'products': PLP,
    'product': PDP,
    'index': ShopPage
})

initServer({
    root: __dirname,
    port: 3000,
    clientPath: '../public'
})
