import { useState } from 'react'
import { usePoints } from '../context/PointsContext'

const nestProducts = [
    {
        id: 'n1',
        name: 'Nest Rent',
        category: 'Studio',
        emoji: '🏠',
        savePct: 'Save ₹400/mo',
        priceStr: '₹2,100 vs ₹2,500',
        price: 2100
    },
    {
        id: 'n2',
        name: 'Nia Meals',
        category: 'Studio',
        emoji: '🍛',
        savePct: 'Save 10%',
        priceStr: '₹1,499 vs ₹1,650',
        price: 1499
    },
    {
        id: 'n3',
        name: 'Doctor Visit',
        category: 'Health',
        emoji: '🏥',
        savePct: 'Free Monthly',
        priceStr: '₹0 vs ₹500 MRP',
        price: 0
    },
    {
        id: 'n4',
        name: 'Safety Kit',
        category: 'Safety',
        emoji: '🎒',
        savePct: 'Included',
        priceStr: '₹0 vs ₹300 MRP',
        price: 0
    },
]

const filters = ['All', 'Studio', 'Health', 'Safety']

export default function NestDetails({ onBack }) {
    const [search, setSearch] = useState('')
    const [activeFilter, setActiveFilter] = useState('All')
    const [addedItems, setAddedItems] = useState({})
    const { addToCart } = usePoints()

    const handleAdd = (product) => {
        if (product.price === 0) return;
        setAddedItems(prev => ({ ...prev, [product.id]: true }))
        addToCart({
            id: product.id,
            name: product.name,
            emoji: product.emoji,
            price: product.price,
            category: product.category.toLowerCase(),
            description: `${product.savePct} — ${product.priceStr}`,
        })
    }

    const filtered = nestProducts.filter(p => {
        const matchFilter = activeFilter === 'All' || p.category === activeFilter
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
        return matchFilter && matchSearch
    })

    return (
        <div className="min-h-screen bg-[#f5f5f7] pb-28">
            {/* Header */}
            <div className="bg-white px-4 pt-5 pb-4 sticky top-0 z-30 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-1">
                    {onBack && (
                        <button onClick={onBack} className="text-[#0071e3] font-bold text-sm flex items-center gap-1 active:scale-90 transition-transform">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    <div className="flex items-center gap-2 flex-1 justify-between">
                        <div>
                            <h1 className="text-xl font-black text-[#1d1d1f] tracking-tight">Nest</h1>
                            <p className="text-[#86868b] text-xs font-medium">Best prices. Everything right here.</p>
                        </div>
                    </div>
                </div>

                {/* Search */}
                <div className="relative mt-3">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search services..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#f0f0f0] rounded-xl text-sm text-[#1d1d1f] placeholder-[#86868b] border-none outline-none focus:ring-1 focus:ring-gray-200 transition-all font-medium"
                    />
                </div>

                {/* Filter Pills */}
                <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all border ${activeFilter === f
                                ? 'bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-md'
                                : 'bg-white text-[#1d1d1f] border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="px-3 pt-4 grid grid-cols-2 gap-3">
                {filtered.map(product => (
                    <div key={product.id} className="bg-white rounded-[24px] p-4 flex flex-col gap-2 shadow-sm border border-transparent hover:border-gray-100 transition-all">
                        {/* Category tag */}
                        <p className={`text-[9px] font-black uppercase tracking-[0.05em] ${product.category === 'Studio' ? 'text-[#0071e3]' :
                                product.category === 'Flow' ? 'text-[#1a5c35]' :
                                    product.category === 'Health' ? 'text-[#e84040]' :
                                        product.category === 'Safety' ? 'text-[#2e7d32]' :
                                            'text-[#bf4800]'
                            }`}>
                            {product.category}
                        </p>

                        {/* Emoji */}
                        <div className="text-4xl py-1">{product.emoji}</div>

                        {/* Name */}
                        <h3 className="font-black text-[#1d1d1f] text-[15px] leading-tight tracking-tight mt-1 truncate">{product.name}</h3>

                        {/* Save badge */}
                        <p className="text-green-600 font-bold text-[13px]">{product.savePct}</p>
                        <p className="text-[#86868b] text-[11px] font-medium">{product.priceStr}</p>

                        {/* Add Button */}
                        <button
                            onClick={() => handleAdd(product)}
                            disabled={product.price === 0}
                            className={`mt-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all border ${product.price === 0
                                    ? 'bg-gray-50 text-gray-400 border-gray-100'
                                    : addedItems[product.id]
                                        ? 'bg-[#f0f0f0] text-[#86868b] border-gray-200'
                                        : 'bg-white text-[#bf4800] border-[#bf4800] hover:bg-[#bf4800] hover:text-white active:scale-95'
                                }`}
                        >
                            {product.price === 0 ? '✓ Included' : (addedItems[product.id] ? '✓ Added' : '+ Add')}
                        </button>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-2 text-center">
                    <span className="text-5xl">🔍</span>
                    <p className="text-[#86868b] font-black text-sm uppercase tracking-widest mt-2">No items found</p>
                </div>
            )}
        </div>
    )
}
