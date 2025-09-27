import type { Product } from '../../modals/Product'


export default function ProductList({ products, onToggle }: { products: Product[]; onToggle: (id: string) => void }) {
    return (
        <ul className="product-list">
            {products.map(p => (
                <li key={p.id} className={`product-item ${p.available ? 'available' : 'unavailable'}`} onClick={() => onToggle(p.id)}>
                    <div className="left">
                        <div className="name">{p.name}</div>
                        <div className="sku">SKU: {p.sku}</div>
                    </div>
                    <div className="right">
                        <div className="qty">{p.quantity} pcs</div>
                        <div className="price">{p.netWeightKg} kg</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}