export default function HomePage({ onNavigate, onGetStarted }) {
    const savingsHighlights = [
        { label: '₹400', sub: 'Save on rent', color: 'text-[#129d5b]' },
        { label: '10%', sub: 'Save on meals', color: 'text-[#129d5b]' },
        { label: '20%', sub: 'Off on essentials', color: 'text-[#129d5b]' },
    ]

    const featureCards = [
        {
            id: 'studio',
            emoji: '🏠',
            title: 'Studio',
            desc: 'Room ₹2,100. Cheap meals. Free doctor.',
            navigateTo: 'studio-details',
            iconBg: 'bg-[#f0f7f4]',
        },
        {
            id: 'flow',
            emoji: '💼',
            title: 'Flow',
            desc: 'Direct jobs. No agent fees.',
            navigateTo: 'flow',
            iconBg: 'bg-[#f0f4f7]',
        },
        {
            id: 'tribe',
            emoji: '🤝',
            title: 'Tribe',
            desc: 'Cheap supplies. Friends & support.',
            navigateTo: 'tribe',
            iconBg: 'bg-[#fdf7f0]',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-[#061121] px-6 pt-10 pb-16 md:pb-24 relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>

                <div className="max-w-7xl mx-auto relative z-10 space-y-5">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#2a1b18] text-[#d27c3c] text-[11px] md:text-sm font-black uppercase tracking-wider">
                        Low prices. Right next door.
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
                        Live. Work.<br />Grow.
                    </h1>

                    <p className="text-white/60 text-[15px] md:text-lg font-medium leading-relaxed max-w-md">
                        Room, meals, medicine — all at lower prices than outside. Save every month.
                    </p>

                    <div className="flex items-center gap-6 pt-2">
                        <button
                            onClick={onGetStarted}
                            className="bg-[#2d4a6b] hover:bg-[#3d5a7b] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-black text-[15px] md:text-lg shadow-lg active:scale-95 transition-all"
                        >
                            See What You Get
                        </button>
                        <button className="text-white/60 hover:text-white font-bold text-[15px] md:text-lg flex items-center gap-1 group">
                            Learn more
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Savings Stats Card */}
            <div className="px-4 md:px-8 mt-4 relative z-20">
                <div className="max-w-5xl mx-auto bg-[#f5f5f7] rounded-[32px] p-6 md:p-10 flex items-center justify-between shadow-xl shadow-black/5 border border-white/50">
                    {savingsHighlights.map((item, idx) => (
                        <div key={idx} className={`flex-1 text-center ${idx !== 2 ? 'border-r border-gray-200' : ''}`}>
                            <div className={`text-2xl md:text-4xl font-black ${item.color} tracking-tight`}>{item.label}</div>
                            <div className="text-[10px] md:text-xs font-bold text-[#86868b] uppercase tracking-widest leading-tight mt-1">{item.sub}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="px-4 md:px-8 mt-8 md:mt-16 pb-10">
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 md:gap-8">
                    {featureCards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => card.navigateTo && onNavigate && onNavigate(card.navigateTo)}
                            className="bg-[#f5f5f7]/50 rounded-[28px] md:rounded-[40px] p-3.5 md:p-8 flex flex-col gap-3 md:gap-4 min-h-[160px] md:min-h-[240px] cursor-pointer active:scale-[0.98] transition-all hover:bg-[#f5f5f7] border border-transparent hover:border-gray-200"
                        >
                            <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${card.iconBg} flex items-center justify-center text-xl md:text-3xl shadow-sm`}>
                                {card.emoji}
                            </div>
                            <div>
                                <h3 className="font-black text-[#1d1d1f] text-sm md:text-xl tracking-tight leading-tight">{card.title}</h3>
                                <p className="text-[#6e6e73] text-[10px] md:text-sm font-bold mt-1 md:mt-2 leading-tight md:leading-[1.6]">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="px-4 md:px-8 mb-32">
                <div className="max-w-7xl mx-auto bg-[#0a1528] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-between shadow-2xl relative overflow-hidden group text-center md:text-left">
                    <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                        <span className="text-[200px]">🏠</span>
                    </div>

                    <div className="relative z-10 flex-1">
                        <h3 className="text-white font-black text-2xl md:text-4xl tracking-tight mb-2">
                            Save ₹800+ every month
                        </h3>
                        <p className="text-white/50 text-sm md:text-base font-bold leading-tight">
                            On room, meals & daily essentials
                        </p>
                    </div>

                    <button
                        onClick={onGetStarted}
                        className="bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-2xl font-black text-lg relative z-10 shadow-lg active:scale-95 transition-all shadow-orange-900/20 whitespace-nowrap"
                    >
                        See What You Get →
                    </button>
                </div>
            </div>
        </div>
    )
}
