export default function Header({ cartCount, onCartClick, userName, nestName, onSignOut, balance, activeTab, onSearchClick, onHomeClick, onTabChange, subPage }) {
    const tabBgColors = {
        studio: subPage === 'studio-details' ? 'bg-[#2a4e78]' : 'bg-[#061121]',
        flow: 'bg-[#1a5c35]',
        tribe: 'bg-[#a0440e]',
        me: 'bg-[#061121]',
        haat: 'bg-white',
        help: 'bg-[#c13535]',
        autosubscribe: 'bg-white',
        earnings: 'bg-[#1a5c35]',
        onboarding: 'bg-[#061121]',
        events: 'bg-[#a0440e]',
        savings: 'bg-[#244d73]',
    }

    const isColored = activeTab && activeTab !== 'haat'
    const bgColor = tabBgColors[activeTab] || 'bg-white'
    const textColor = isColored ? 'text-white' : 'text-[#1d1d1f]'
    const navText = isColored ? 'text-white/60 hover:text-white' : 'text-[#86868b] hover:text-[#1d1d1f]'
    const activeNavText = isColored ? 'text-white font-bold' : 'text-[#0071e3] font-bold'
    const iconColor = isColored ? 'text-white/80' : 'text-[#1d1d1f]'
    const logoBg = isColored ? 'bg-white/20' : 'bg-[#1d1d1f]'
    const logoText = isColored ? 'text-white' : 'text-white'
    const nameBg = isColored ? 'text-white' : 'text-[#1d1d1f]'

    const navItems = [
        { id: 'studio', label: 'Studio' },
        { id: 'flow', label: 'Flow' },
        { id: 'tribe', label: 'Tribe' },
        { id: 'me', label: 'Me' },
    ]

    return (
        <nav className={`${bgColor} sticky top-0 z-50 h-16 px-4 md:px-8 transition-colors duration-300 shadow-sm`}>
            <div className="h-full flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <button
                        onClick={onHomeClick}
                        className="flex items-center gap-2 active:scale-95 transition-transform"
                    >
                        <div className={`w-8 h-8 rounded-xl ${logoBg} flex items-center justify-center`}>
                            <span className={`text-sm font-black ${logoText}`}>N</span>
                        </div>
                        <span className={`text-lg font-black tracking-tight ${nameBg}`}>Nia</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => onTabChange(item.id)}
                                className={`text-sm tracking-tight transition-colors ${activeTab === item.id ? activeNavText : navText}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Points (on light headers only) */}
                    {!isColored && (
                        <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-[#f5f5f7] rounded-full">
                            <span className="text-amber-500 text-xs font-black">⚡</span>
                            <span className="text-xs font-bold text-[#1d1d1f] tracking-tight">{balance} <span className="text-[#86868b] font-medium">pts</span></span>
                        </div>
                    )}

                    {activeTab !== 'haat' && activeTab !== 'me' && (
                        <button
                            onClick={onSearchClick}
                            className={`${iconColor} hover:scale-110 active:scale-90 transition-transform p-2 md:p-3`}
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    )}

                    {/* Settings icon only on me tab */}
                    {activeTab === 'me' && (
                        <button className={`${iconColor} bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    )}

                    {/* Cart icon only on haat tab */}
                    {(activeTab === 'haat') && (
                        <button onClick={onCartClick} className={`relative ${iconColor} p-2 md:p-3`}>
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-[#0066FF] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    )}

                    {/* Bell on studio / flow / tribe */}
                    {(activeTab === 'studio' || activeTab === 'flow' || activeTab === 'tribe') && (
                        <button className={`${iconColor} p-2 md:p-3`}>
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                    )}

                    {/* Desktop Sign Out */}
                    <button
                        onClick={onSignOut}
                        className={`hidden md:flex ml-4 px-5 py-2 rounded-xl text-sm font-bold border ${isColored ? 'border-white/30 hover:bg-white/10 text-white' : 'border-gray-200 hover:bg-gray-50 text-[#1d1d1f]'} transition-all`}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </nav>
    )
}
