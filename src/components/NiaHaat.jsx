import { useState } from 'react'
import { usePoints } from '../context/PointsContext'

const haatProducts = [
    { id: 'h1', name: 'Sanitary Pads', category: 'Essentials', emoji: '🧴', savePct: 'Save 20%', priceStr: '₹32 vs ₹40 MRP', price: 32 },
    { id: 'h2', name: 'Maggi (4-pack)', category: 'Essentials', emoji: '🍜', savePct: 'Save 10%', priceStr: '₹45 vs ₹50 MRP', price: 45 },
    { id: 'h3', name: 'Nest Rent', category: 'Studio', emoji: '🏠', savePct: 'Save ₹400/mo', priceStr: '₹2,100 vs ₹2,500', price: 2100 },
    { id: 'h4', name: 'Hair Oil (100ml)', category: 'Essentials', emoji: '✨', savePct: 'Save 15%', priceStr: '₹85 vs ₹100 MRP', price: 85 },
    { id: 'h5', name: 'Paracetamol Strip', category: 'Health', emoji: '💊', savePct: 'Save 25%', priceStr: '₹15 vs ₹20 MRP', price: 15 },
    { id: 'h6', name: 'Phone Recharge ₹199', category: 'Digital', emoji: '📱', savePct: 'Save ₹20', priceStr: '₹179 vs ₹199', price: 179 },
    { id: 'h7', name: 'Instant Noodles', category: 'Essentials', emoji: '🍟', savePct: 'Save 12%', priceStr: '₹14 vs ₹16 MRP', price: 14 },
    { id: 'h8', name: 'Job Match Plan', category: 'Flow', emoji: '💼', savePct: 'Save ₹100', priceStr: '₹99 vs ₹199', price: 99 },
]

const filters = ['All', 'Studio', 'Flow', 'Essentials', 'Health', 'Digital']

export default function NiaHaat({ onBack }) {
    const [search, setSearch] = useState('')
    const [activeFilter, setActiveFilter] = useState('All')
    const [addedItems, setAddedItems] = useState({})
    const { addToCart } = usePoints()

    const handleAdd = (product) => {
        setAddedItems(prev => ({ ...prev, [product.id]: true }))
        // map to global product shape for cart compatibility
        addToCart({
            id: product.id,
            name: product.name,
            emoji: product.emoji,
            price: product.price,
            category: product.category.toLowerCase(),
            description: `${product.savePct} — ${product.priceStr}`,
        })
    }

    const filtered = haatProducts.filter(p => {
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
                        <button onClick={onBack} className="text-[#0071e3] font-bold text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    <div className="flex items-center gap-2 flex-1 justify-between">
                        <div>
                            <h1 className="text-xl font-black text-[#1d1d1f] tracking-tight">Nia Haat</h1>
                            <p className="text-[#86868b] text-xs">Best prices. Everything right here.</p>
                        </div>
                        <button className="w-9 h-9 flex items-center justify-center text-[#1d1d1f]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="relative mt-3">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#f0f0f0] rounded-xl text-sm text-[#1d1d1f] placeholder-[#86868b] border-none outline-none"
                    />
                </div>

                {/* Filter Pills */}
                <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${activeFilter === f
                                ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                                : 'bg-white text-[#1d1d1f] border-gray-200'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="px-4 pt-4 grid grid-cols-2 gap-3">
                {filtered.map(product => (
                    <div key={product.id} className="bg-white rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
                        {/* Category tag */}
                        <p className={`text-[10px] font-black uppercase tracking-wider ${product.category === 'Studio' ? 'text-[#0071e3]' :
                            product.category === 'Flow' ? 'text-[#1a5c35]' :
                                product.category === 'Health' ? 'text-[#e84040]' :
                                    'text-[#bf4800]'
                            }`}>
                            {product.category}
                        </p>

                        {/* Emoji */}
                        <div className="text-3xl">{product.emoji}</div>

                        {/* Name */}
                        <h3 className="font-bold text-[#1d1d1f] text-sm leading-tight">{product.name}</h3>

                        {/* Save badge */}
                        <p className="text-green-600 font-bold text-xs">{product.savePct}</p>
                        <p className="text-[#86868b] text-[11px]">{product.priceStr}</p>

                        {/* Add Button */}
                        <button
                            onClick={() => handleAdd(product)}
                            className={`mt-1 w-full py-2 rounded-xl text-sm font-bold transition-all border ${addedItems[product.id]
                                ? 'bg-[#f0f0f0] text-[#86868b] border-gray-200'
                                : 'bg-white text-[#bf4800] border-[#bf4800] hover:bg-[#bf4800] hover:text-white active:scale-95'
                                }`}
                        >
                            {addedItems[product.id] ? '✓ Added' : '+ Add'}
                        </button>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-2 text-center">
                    <span className="text-4xl">🔍</span>
                    <p className="text-[#86868b] font-bold text-sm">No items found</p>
                </div>
            )}
        </div>
    )
}
