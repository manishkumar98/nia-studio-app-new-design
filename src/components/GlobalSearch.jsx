import { useState, useEffect, useRef } from 'react'
import { products } from '../data/products'
import { rewards } from '../data/rewards'
import { creditActions } from '../data/actions'

export default function GlobalSearch({ onClose, onNavigate }) {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState({ products: [], rewards: [], actions: [] })
    const inputRef = useRef(null)

    useEffect(() => {
        // Auto-focus input on open
        if (inputRef.current) {
            inputRef.current.focus()
        }

        // Handle Escape key
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    useEffect(() => {
        if (!query.trim()) {
            setResults({ products: [], rewards: [], actions: [] })
            return
        }

        const q = query.toLowerCase()

        const filteredProducts = products.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        ).slice(0, 4)

        const filteredRewards = rewards.filter(r =>
            r.name.toLowerCase().includes(q) ||
            r.category.toLowerCase().includes(q)
        ).slice(0, 4)

        const filteredActions = creditActions.filter(a =>
            a.label.toLowerCase().includes(q) ||
            a.category.toLowerCase().includes(q)
        ).slice(0, 4)

        setResults({
            products: filteredProducts,
            rewards: filteredRewards,
            actions: filteredActions
        })
    }, [query])

    const totalResults = results.products.length + results.rewards.length + results.actions.length

    return (
        <div className="fixed inset-0 z-[100] bg-white animate-fadeIn overflow-y-auto">
            {/* Search Header */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-2xl z-20 border-b border-gray-100">
                <div className="max-w-screen-md mx-auto px-6 h-20 flex items-center gap-4">
                    <svg className="w-5 h-5 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search Nia One..."
                        className="flex-1 bg-transparent border-none outline-none text-xl font-medium text-[#1d1d1f] placeholder:text-[#86868b]"
                    />
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-bold text-[#0071e3] hover:bg-blue-50 rounded-full transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-screen-md mx-auto px-6 py-10">
                {!query ? (
                    <div className="space-y-8 animate-fadeUp">
                        <div>
                            <p className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4">Quick Links</p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: 'Nia Store', target: 'store', emoji: '🛍️' },
                                    { label: 'Nia Haat', target: 'haat', emoji: '🍎' },
                                    { label: 'Earn Points', target: 'earn', emoji: '⚡' },
                                    { label: 'Redeem', target: 'redeem', emoji: '🎁' }
                                ].map(link => (
                                    <button
                                        key={link.target}
                                        onClick={() => { onNavigate(link.target); onClose(); }}
                                        className="flex items-center gap-3 p-4 bg-[#f5f5f7] rounded-2xl hover:bg-[#e8e8ed] transition-colors text-left group"
                                    >
                                        <span className="text-xl group-hover:scale-110 transition-transform">{link.emoji}</span>
                                        <span className="text-[15px] font-bold text-[#1d1d1f]">{link.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4">Popular Services</p>
                            <div className="space-y-2">
                                {['Affordable Housing', 'Job Matching', 'Skill Certificates'].map(item => (
                                    <div key={item} className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
                                        <svg className="w-4 h-4 text-[#86868b] group-hover:text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                        <span className="text-[15px] font-medium text-[#1d1d1f]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : totalResults > 0 ? (
                    <div className="space-y-10 animate-fadeUp">
                        {/* Products Results */}
                        {results.products.length > 0 && (
                            <div>
                                <h3 className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4 border-b border-gray-100 pb-2">Products in Store</h3>
                                <div className="space-y-4">
                                    {results.products.map(p => (
                                        <div
                                            key={p.id}
                                            onClick={() => { onNavigate('store'); onClose(); }}
                                            className="flex items-center gap-4 p-4 hover:bg-[#f5f5f7] rounded-[24px] cursor-pointer transition-all group"
                                        >
                                            <div className="w-14 h-14 bg-[#f5f5f7] group-hover:bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-colors">
                                                {p.emoji}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-[#1d1d1f]">{p.name}</h4>
                                                <p className="text-xs text-[#86868b] mt-0.5">{p.description}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-black text-[#1d1d1f]">₹{p.price}</div>
                                                <div className="text-[10px] font-black text-[#0071e3] uppercase">In Store</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Rewards Results */}
                        {results.rewards.length > 0 && (
                            <div>
                                <h3 className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4 border-b border-gray-100 pb-2">Rewards Catalog</h3>
                                <div className="space-y-4">
                                    {results.rewards.map(r => (
                                        <div
                                            key={r.id}
                                            onClick={() => { onNavigate('redeem'); onClose(); }}
                                            className="flex items-center gap-4 p-4 hover:bg-[#ebf5ff] rounded-[24px] cursor-pointer transition-all group border border-transparent hover:border-blue-100"
                                        >
                                            <div className="w-14 h-14 bg-[#f5f5f7] rounded-2xl flex items-center justify-center text-3xl group-hover:bg-white transition-colors">
                                                {r.emoji}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-[#1d1d1f]">{r.name}</h4>
                                                <p className="text-xs text-[#86868b] mt-0.5 capitalize">{r.category} • {r.fulfillment}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-black text-[#0071e3]">{r.cost}</div>
                                                <div className="text-[10px] font-black text-[#86868b] uppercase">Points</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actions/Tasks Results */}
                        {results.actions.length > 0 && (
                            <div>
                                <h3 className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4 border-b border-gray-100 pb-2">Ways to Earn</h3>
                                <div className="space-y-2">
                                    {results.actions.map(a => (
                                        <div
                                            key={a.code}
                                            onClick={() => { onNavigate('earn'); onClose(); }}
                                            className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-lg font-black group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    ⚡
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#1d1d1f] text-sm">{a.label}</h4>
                                                    <p className="text-[10px] text-[#86868b] font-bold uppercase tracking-widest">{a.category}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-lg font-black text-blue-600">+{a.points}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center animate-fadeIn">
                        <div className="text-6xl mb-6">🔍</div>
                        <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">No results for "{query}"</h3>
                        <p className="text-[#86868b] max-w-xs mx-auto">
                            Check your spelling or try searching for products, rewards, or community tasks.
                        </p>
                    </div>
                )}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-fadeUp {
                    animation: fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}} />
        </div>
    )
}
