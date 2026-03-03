export default function FlowPage({ onNavigate }) {
    const savings = [
        {
            emoji: '💼',
            title: 'Job',
            desc: 'Direct from factory. No middleman.',
            badge: '₹0 fee',
            badgeNote: 'no agent',
            badgeColor: 'text-[#1a7a4a]',
            noteColor: 'text-[#86868b]',
            iconBg: 'bg-[#e8f5ef]',
        },
        {
            emoji: '🎯',
            title: 'No deposit',
            desc: 'No advance payment when you join',
            badge: '₹2K saved',
            badgeNote: 'on joining',
            badgeColor: 'text-[#1a7a4a]',
            noteColor: 'text-[#86868b]',
            iconBg: 'bg-[#e8f5ef]',
        },
        {
            emoji: '⚡',
            title: 'Attendance bonus',
            desc: 'Full month = ₹200 extra',
            badge: '+₹200',
            badgeNote: '/month',
            badgeColor: 'text-[#1a7a4a]',
            noteColor: 'text-[#86868b]',
            iconBg: 'bg-[#e8f5ef]',
        },
        {
            emoji: '📄',
            title: 'Training',
            desc: 'Learn skills for free',
            badge: 'Free',
            badgeNote: 'Included',
            badgeColor: 'text-[#1a7a4a]',
            noteColor: 'text-[#86868b]',
            iconBg: 'bg-[#e8f5ef]',
        },
    ]

    return (
        <div className="min-h-screen bg-white pb-28">
            {/* Hero */}
            <div className="bg-[#144b2a] px-5 pt-8 pb-10">
                <div className="text-4xl mb-3">💼</div>
                <h1 className="text-3xl font-black text-white tracking-tight leading-tight">Flow</h1>
                <p className="text-[#7dc09a] text-sm font-medium mt-1">
                    Direct jobs. No agent fees. No commission.
                </p>
                <button
                    onClick={() => onNavigate && onNavigate('earnings')}
                    className="mt-6 w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center justify-between px-6 transition-all active:scale-[0.98]"
                >
                    <div className="flex items-center gap-3">
                        <span className="text-xl">💰</span>
                        <span className="font-bold text-white text-sm">Monthly earnings check</span>
                    </div>
                    <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Savings List */}
            <div className="px-4 pt-6">
                <p className="text-[10px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4">
                    How You Save Money
                </p>

                <div className="flex flex-col divide-y divide-gray-100">
                    {savings.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 py-4">
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${item.iconBg}`}>
                                {item.emoji}
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-[#1d1d1f] text-sm tracking-tight">{item.title}</h3>
                                <p className="text-[#86868b] text-xs mt-0.5">{item.desc}</p>
                            </div>

                            {/* Badge */}
                            <div className="text-right flex-shrink-0">
                                <p className={`font-black text-sm ${item.badgeColor}`}>{item.badge}</p>
                                <p className={`text-xs ${item.noteColor}`}>{item.badgeNote}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
