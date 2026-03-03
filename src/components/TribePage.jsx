export default function TribePage({ onNavigate }) {
    const sections = [
        {
            title: 'Learn & Grow',
            items: [
                {
                    emoji: '🎓',
                    title: 'College courses',
                    desc: 'Get a degree from top colleges on...',
                    badge: 'Certificate',
                    badgeNote: 'included',
                    badgeColor: 'text-[#1a5c35]',
                },
                {
                    emoji: '💻',
                    title: 'Digital skills',
                    desc: 'English, Excel, phone apps & more',
                    badge: 'Free',
                    badgeNote: 'for members',
                    badgeColor: 'text-[#1a5c35]',
                },
            ],
        },
        {
            title: 'Earn & Lead',
            items: [
                {
                    emoji: '💰',
                    title: 'Sell at Haat',
                    desc: 'Make & sell food, crafts or clot...',
                    badge: 'Keep 85-95%',
                    badgeNote: 'earnings',
                    badgeColor: 'text-[#1a5c35]',
                },
                {
                    emoji: '👥',
                    title: 'Invite friends',
                    desc: 'Bring others to Nia, earn points',
                    badge: '+50 pts',
                    badgeNote: 'per referral',
                    badgeColor: 'text-[#1a5c35]',
                },
                {
                    emoji: '⭐',
                    title: 'Become a Warden',
                    desc: 'Lead your floor, earn extra every month',
                    badge: '+₹500',
                    badgeNote: '/month',
                    badgeColor: 'text-[#1a5c35]',
                },
            ],
        },
        {
            title: 'Daily Life',
            items: [
                {
                    emoji: '📅',
                    title: 'Calendar & Events',
                    desc: 'Jambo nights, Haat days & meetups',
                    badge: 'Free',
                    badgeNote: 'to join',
                    badgeColor: 'text-[#1a5c35]',
                },
                {
                    emoji: '🤲',
                    title: 'Peer support',
                    desc: 'Chat groups, mentors & community help',
                    badge: 'Always',
                    badgeNote: 'available',
                    badgeColor: 'text-[#1a5c35]',
                },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-white pb-28">
            {/* Hero */}
            <div className="bg-[#a0440e] px-5 pt-8 pb-10">
                <div className="text-4xl mb-3">🤝</div>
                <h1 className="text-3xl font-black text-white tracking-tight leading-tight">Tribe</h1>
                <p className="text-[#e3b08a] text-sm font-medium mt-1">
                    Grow, earn &amp; belong. Your community, your opportunity.
                </p>
            </div>

            {/* Sections */}
            <div className="px-4 pt-6 flex flex-col gap-6">
                {sections.map((section) => (
                    <div key={section.title}>
                        <p className="text-[10px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-3">
                            {section.title}
                        </p>

                        <div className="flex flex-col divide-y divide-gray-100 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            {section.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 px-4 py-4">
                                    {/* Icon */}
                                    <div className="w-11 h-11 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-xl flex-shrink-0">
                                        {item.emoji}
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-[#1d1d1f] text-sm tracking-tight">{item.title}</h3>
                                        <p className="text-[#86868b] text-xs mt-0.5 truncate">{item.desc}</p>
                                    </div>

                                    {/* Badge */}
                                    <div className="text-right flex-shrink-0">
                                        <p className={`font-black text-sm ${item.badgeColor}`}>{item.badge}</p>
                                        <p className="text-[#86868b] text-xs">{item.badgeNote}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Leaderboard Quick Access */}
                <button
                    onClick={() => onNavigate && onNavigate('leaderboard')}
                    className="bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-sm w-full text-left active:scale-[0.98] transition-transform border border-gray-100"
                >
                    <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-lg flex-shrink-0">
                        🏆
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-[#1d1d1f] text-sm">Points Leaderboard</p>
                        <p className="text-[#86868b] text-xs">See community rankings</p>
                    </div>
                    <svg className="w-4 h-4 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
