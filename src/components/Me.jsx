import { useAuth } from '../context/AuthContext'
import { usePoints } from '../context/PointsContext'

export default function Me({ onNavigate }) {
    const { currentUser, logout } = useAuth()
    const { getBalance } = usePoints()

    const userId = currentUser.uid || currentUser.id
    const balance = getBalance(userId)

    const menuItems = [
        {
            icon: (
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-xl">
                    👤
                </div>
            ),
            title: 'My details',
            desc: 'Name, phone, Aadhaar',
            onClick: () => { }
        },
        {
            icon: (
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-xl">
                    💼
                </div>
            ),
            title: 'My job',
            desc: 'Current & past jobs',
            onClick: () => { }
        },
        {
            icon: (
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-xl">
                    💰
                </div>
            ),
            title: 'Money',
            desc: 'Rent, meals, shopping history',
            onClick: () => { }
        },
        {
            icon: (
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-xl">
                    🎓
                </div>
            ),
            title: 'Certificates',
            desc: 'Your earned certificates',
            onClick: () => { }
        },
        {
            icon: (
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-xl">
                    🔔
                </div>
            ),
            title: 'Alerts',
            desc: "See what's new",
            onClick: () => { }
        },
        {
            icon: (
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-xl">
                    ⚡
                </div>
            ),
            title: 'Need help?',
            desc: 'Call or chat with us',
            onClick: () => onNavigate && onNavigate('help')
        },
        {
            icon: (
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-xl">
                    🚪
                </div>
            ),
            title: 'Sign Out',
            desc: 'Logout of your account',
            onClick: logout,
            danger: true
        }
    ]

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Hero Profile Section */}
            <div className="bg-[#2b4e78] pt-12 pb-24 px-6 relative overflow-hidden">
                {/* Subtle background circles */}
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#0071e3]/10 rounded-full blur-3xl"></div>

                <div className="flex flex-col items-center relative z-10">
                    <div className="w-24 h-24 rounded-full bg-[#2d4a6b] flex items-center justify-center text-4xl text-white shadow-xl mb-6 border-4 border-white/5">
                        {currentUser.name.charAt(0)}
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight">{currentUser.name}</h1>
                    <p className="text-white/40 text-sm font-medium mt-1">
                        At Nia since Jan 2026
                    </p>
                </div>
            </div>

            {/* Stats Bar (Overlapping) */}
            <div className="px-6 -mt-12 relative z-20">
                <div className="bg-white rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 grid grid-cols-3 divide-x divide-gray-100 border border-gray-100/50">
                    <div className="text-center">
                        <p className="text-2xl font-black text-[#1d1d1f]">{balance}</p>
                        <p className="text-[11px] font-bold text-[#86868b] mt-1 uppercase tracking-tight">Points</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-black text-[#1d1d1f]">₹550</p>
                        <p className="text-[11px] font-bold text-[#86868b] mt-1 uppercase tracking-tight">Saved</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-black text-[#1d1d1f]">87%</p>
                        <p className="text-[11px] font-bold text-[#86868b] mt-1 uppercase tracking-tight">Profile</p>
                    </div>
                </div>
            </div>

            {/* Menu List */}
            <div className="px-6 mt-12">
                <p className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4 ml-2">
                    My Account
                </p>

                <div className="flex flex-col divide-y divide-gray-100 bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                    {menuItems.map((item, i) => (
                        <button
                            key={i}
                            onClick={item.onClick}
                            className="flex items-center gap-4 px-5 py-4 w-full text-left hover:bg-gray-50 active:bg-gray-100 transition-all group"
                        >
                            <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className={`font-bold text-sm tracking-tight ${item.danger ? 'text-red-600' : 'text-[#1d1d1f]'}`}>
                                    {item.title}
                                </h3>
                                <p className="text-[11px] text-[#86868b] font-medium mt-0.5 group-hover:text-[#1d1d1f] transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                            <svg className="w-4 h-4 text-gray-300 group-hover:text-[#0071e3] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ))}
                </div>
            </div>

            {/* Support Caption */}
            <div className="mt-12 text-center">
                <p className="text-[10px] font-black text-[#86868b] uppercase tracking-[0.15em]">
                    Nia Version 1.0.4 • Kush-12
                </p>
            </div>
        </div>
    )
}
