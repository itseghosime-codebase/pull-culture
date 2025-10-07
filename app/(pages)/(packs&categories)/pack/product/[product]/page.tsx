import AvailablePulls from '@/components/product/AvailablePulls'
import ProductOverview from '@/components/product/ProductOverview'
import { fetchedProduct } from '@/context/Content'
import React from 'react'

export default function page() {
    return (
        <div>
            <ProductOverview product={fetchedProduct} />
            <AvailablePulls />
        </div>
    )
}
