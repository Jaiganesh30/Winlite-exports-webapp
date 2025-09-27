import type { Product } from "../modals/Product";

export const sampleProducts: Product[] = [
    { id: 'p1', name: 'Steel Pipes', sku: 'SP-100', quantity: 120, netWeightKg: 2400, countryOfOrigin: 'CN', hsCode: '7306.30', available: true },
    { id: 'p2', name: 'Plastic Granules', sku: 'PG-210', quantity: 500, netWeightKg: 2500, countryOfOrigin: 'US', hsCode: '3901.20', available: true },
    { id: 'p3', name: 'Textile Rolls', sku: 'TR-330', quantity: 40, netWeightKg: 400, countryOfOrigin: 'IN', hsCode: '5407.32', available: false }
    ]