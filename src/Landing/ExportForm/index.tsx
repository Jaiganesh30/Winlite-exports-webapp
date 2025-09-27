import React from 'react'
import type { Product } from '../../modals/Product';


function downloadCSV(filename: string, rows: string[]) {
    const csvContent = rows.join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
}


export default function ExportForm({ products, selected, setSelected }: { products: Product[]; selected:any; setSelected: (s: any) => void }) {

    const toggle = (id: string) => {
        setSelected((prev: string[]) => prev.includes(id) ? prev.filter((x: string) => x !== id) : [...prev, id])
    }

    const exportCSV = () => {
        const chosen = products.filter(p => selected.includes(p.id))
        if (chosen.length === 0) {
            alert('Please select at least one product to export.')
            return
        }


        const header = ['Name', 'SKU', 'Quantity', 'NetWeightKg', 'CountryOfOrigin', 'HSCode']
        const rows = [header.join(',')]
        for (const p of chosen) {
            const row = [p.name, p.sku, String(p.quantity), String(p.netWeightKg), p.countryOfOrigin, p.hsCode]
            rows.push(row.map(cell => '"' + String(cell).replace(/"/g, '""') + '"').join(','))
        }
        downloadCSV('exports_' + new Date().toISOString().slice(0, 10) + '.csv', rows)
    }


    return (
        <div className="export-form">
            <div className="selectors">
                {products.map(p => (
                    <label key={p.id} className={`checkbox ${selected.includes(p.id) ? 'checked' : ''}`}>
                        <input type="checkbox" checked={selected.includes(p.id)} onChange={() => toggle(p.id)} />
                        <span>{p.name} — {p.sku}</span>
                    </label>
                ))}
            </div>
            <div className="actions">
                <button className="btn primary" onClick={exportCSV}>Download CSV</button>
            </div>
        </div>
    )
}