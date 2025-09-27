import React, { useState } from 'react'
import { sampleProducts } from '../../mocks/sampleProducts'
import ExportForm from '../../Landing/ExportForm'


export default function ExportPage() {
    const [products] = useState(sampleProducts)
    const [selected, setSelected] = useState<string[]>([])


    return (
        <section>
            <h2>Export goods</h2>
            <p className="muted">Select products and create an export CSV for customs / carriers.</p>
            <ExportForm products={products} selected={selected} setSelected={setSelected} />
        </section>
    )
}