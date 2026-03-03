export default function StudioPage({ onNavigate }) {
    const cards = [
        {
            id: 'nest',
            emoji: '🏠',
            title: 'Nest',
            desc: 'Room, meals, doctor & safety kit',
            badge: 'Save ₹400/mo on rent',
            navigateTo: 'nest-details',
        },
        {
            id: 'haat',
            emoji: '🛒',
            title: 'Haat',
            desc: 'Pads, cosmetics, medicine & snacks',
            badge: '10–20% off vs MRP',
            navigateTo: 'haat',
        },
        {
            id: 'health',
            emoji: '💊',
            title: 'Health',
            desc: 'Free check-up, blood test & medicine',
            badge: 'Free every month',
            navigateTo: 'nest-details',
        },
        {
            id: 'safety',
            emoji: '🔒',
            title: 'Safety',
            desc: 'Lock, whistle, SOS & emergency card',
            badge: 'Kit included',
            navigateTo: 'nest-details',
        },
        {
            id: 'autosubscribe',
            emoji: '🔄',
            title: 'Auto-subscribe',
            desc: 'Daily essentials at best rates',
            badge: 'Save ₹240/mo extra',
            navigateTo: 'autosubscribe',
        },
        {
            id: 'onboarding',
            emoji: '📱',
            title: 'Digital Onboarding',
            desc: 'Complete your first day steps',
            badge: '3/5 steps done',
            navigateTo: 'onboarding',
        },
        {
            id: 'savings',
            emoji: '💰',
            title: 'Savings & Money',
            desc: 'Chit fund, gold & emergency fund',
            badge: '₹14.5K saved',
            navigateTo: 'savings',
        },
        {
            id: 'niapoints',
            emoji: '⚡',
            title: 'Nia Points',
            desc: 'Daily streaks, rewards & history',
            badge: '342 pts',
            navigateTo: 'niapoints',
        },
    ]

    return (
        <div className="min-h-screen bg-[#f5f5f7] pb-28">
            {/* Hero Section */}
            <div className="bg-[#1e3752] px-6 pt-10 pb-12 md:pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">Studio</h1>
                    <p className="text-white/60 text-sm md:text-lg font-medium mt-1">
                        Your living, shopping & wellness — all in one place
                    </p>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="px-4 md:px-8 mt-4 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => card.navigateTo && onNavigate && onNavigate(card.navigateTo)}
                            className={`bg-white rounded-[28px] md:rounded-[40px] p-5 flex flex-col gap-3 shadow-sm border border-gray-100/50 ${card.navigateTo ? 'cursor-pointer active:scale-[0.98] transition-all hover:shadow-lg' : ''}`}
                        >
                            <div className="text-3xl md:text-4xl">{card.emoji}</div>
                            <div className="flex-1">
                                <h3 className="font-black text-[#1d1d1f] text-base md:text-xl tracking-tight">{card.title}</h3>
                                <p className="text-[#6e6e73] text-[11px] md:text-sm font-bold mt-1 leading-snug">{card.desc}</p>
                            </div>
                            <span className={`inline-block mt-2 px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-black w-fit bg-[#e8f5e9] text-[#2e7d32]`}>
                                {card.badge}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Savings Banner */}
            <div className="px-4 md:px-8 mt-6">
                <div className="max-w-7xl mx-auto bg-white rounded-[28px] md:rounded-[40px] px-6 py-5 flex items-center gap-4 shadow-sm border border-gray-100/50">
                    <div className="w-12 h-12 rounded-2xl bg-[#fff8e1] flex items-center justify-center text-2xl shadow-sm">
                        💰
                    </div>
                    <div>
                        <p className="font-black text-[#1d1d1f] text-sm md:text-lg tracking-tight">Save ₹800+ every month</p>
                        <p className="text-[#6e6e73] text-[11px] md:text-sm font-bold">On room, meals & daily essentials</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
