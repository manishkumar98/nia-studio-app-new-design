export default function BottomNav({ activeTab, onTabChange, subPage }) {
    const tabs = [
        {
            id: 'studio',
            label: 'Studio',
            icon: (active) => (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
                </svg>
            ),
        },
        {
            id: 'flow',
            label: 'Flow',
            icon: (active) => (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8M16 21H8" />
                </svg>
            ),
        },
        {
            id: 'tribe',
            label: 'Tribe',
            icon: (active) => (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0zM21 8a3 3 0 11-6 0 3 3 0 016 0zM3 8a3 3 0 116 0 3 3 0 01-6 0z" />
                </svg>
            ),
        },
        {
            id: 'me',
            label: 'Me',
            icon: (active) => (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
    ]

    const activeColor = 'text-[#0071e3]'

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 z-50 md:hidden pb-safe">
            <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
                {tabs.map(tab => {
                    const isActive = activeTab === tab.id

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className="flex flex-col items-center justify-center flex-1 gap-0.5 py-2 transition-all"
                        >
                            <span className={`transition-all ${isActive ? activeColor : 'text-[#86868b]'}`}>
                                {tab.icon(isActive)}
                            </span>
                            <span
                                className={`text-[10px] font-bold tracking-wide transition-all ${isActive ? activeColor : 'text-[#86868b]'
                                    }`}
                            >
                                {tab.label}
                            </span>
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
