import  { useState } from 'react'
import ProductList from '../../Landing/ProductList'
import { sampleProducts } from '../../mocks/sampleProducts'


export default function ProductsPage() {
    const [products, setProducts] = useState(sampleProducts)


    const toggleAvailable = (id: string) => {
        setProducts((prev) => prev.map(p => p.id === id ? { ...p, available: !p.available } : p))
    }


    return (
        <section>
            <h2>Products</h2>
            <p className="muted">Manage goods that can be exported. Click a product to toggle availability.</p>
            <ProductList products={products} onToggle={toggleAvailable} />
        </section>
    )
}