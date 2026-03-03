import React from 'react';
import { usePoints } from '../context/PointsContext';
import { useAuth } from '../context/AuthContext';

export default function NiaPointsPage({ onNavigate }) {
    const { currentUser } = useAuth();
    const { getBalance } = usePoints();
    const userId = currentUser.uid || currentUser.id;
    const balance = getBalance(userId);

    const historyToday = [
        {
            icon: '🏠',
            title: 'Nest made before 7 AM',
            desc: 'Daily • Auto-counted',
            points: '+5',
            color: 'text-[#2e7d32]',
            bg: 'bg-[#e8f5e9]'
        },
        {
            icon: '✅',
            title: 'Zero violations today',
            desc: 'Daily • Auto-earned',
            points: '+2',
            color: 'text-[#2e7d32]',
            bg: 'bg-[#e8f5e9]'
        },
        {
            icon: '🍲',
            title: 'Meal feedback given',
            desc: 'Lunch • Auto-credited',
            points: '+1',
            color: 'text-[#2e7d32]',
            bg: 'bg-[#e8f5e9]'
        },
        {
            icon: '☕',
            title: 'Free Chai Week used',
            desc: 'Sukh Cafe • Starts Monday',
            points: '-25',
            color: 'text-[#a0440e]',
            bg: 'bg-[#fff5eb]'
        }
    ];

    const historyYesterday = [
        {
            icon: '🏅',
            title: 'Jambo full attendance',
            desc: 'Weekly • Verified by manager',
            points: '+10',
            color: 'text-[#2e7d32]',
            bg: 'bg-[#e8f5e9]'
        },
        {
            icon: '💰',
            title: 'Rent paid on time (full month)',
            desc: 'Auto-counted',
            points: '+15',
            color: 'text-[#2e7d32]',
            bg: 'bg-[#e8f5e9]'
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Hero Section */}
            <div className="bg-[#2b4e78] pt-12 pb-24 px-6 text-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <p className="text-white/40 text-[11px] font-black uppercase tracking-[0.2em] mb-2">Your Nia Points</p>
                    <h1 className="text-6xl font-black text-white tracking-tight">{balance}</h1>

                    <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                        <span className="text-sm">🔥</span>
                        <span className="text-white text-xs font-bold tracking-tight">12-day clean Nest streak!</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions (Floating) */}
            <div className="px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto">
                    <button
                        onClick={() => onNavigate && onNavigate('redeem')}
                        className="bg-white rounded-3xl p-5 shadow-2xl shadow-black/5 border border-gray-100 flex flex-col items-center gap-2 active:scale-95 transition-all"
                    >
                        <div className="text-2xl mb-1">🎟️</div>
                        <p className="font-black text-[#1d1d1f] text-xs">Redeem</p>
                        <p className="text-[10px] text-[#86868b] font-medium">Haat vouchers</p>
                    </button>
                    <button
                        onClick={() => onNavigate && onNavigate('leaderboard')}
                        className="bg-white rounded-3xl p-5 shadow-2xl shadow-black/5 border border-gray-100 flex flex-col items-center gap-2 active:scale-95 transition-all"
                    >
                        <div className="text-2xl mb-1">🏆</div>
                        <p className="font-black text-[#1d1d1f] text-xs">Top List</p>
                        <p className="text-[10px] text-[#86868b] font-medium">Rank #3</p>
                    </button>
                    <button className="bg-white rounded-3xl p-5 shadow-2xl shadow-black/5 border border-gray-100 flex flex-col items-center gap-2 active:scale-95 transition-all">
                        <div className="text-2xl mb-1">🎁</div>
                        <p className="font-black text-[#1d1d1f] text-xs">Rewards</p>
                        <p className="text-[10px] text-[#86868b] font-medium">14 available</p>
                    </button>
                </div>
            </div>

            {/* History Today */}
            <div className="px-6 mt-12 max-w-7xl mx-auto">
                <p className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-6 ml-1">Today</p>
                <div className="flex flex-col divide-y divide-gray-50 border-b border-gray-50">
                    {historyToday.map((item, i) => (
                        <div key={i} className="py-5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center text-xl`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1d1d1f] text-sm tracking-tight">{item.title}</h3>
                                    <p className="text-[11px] text-[#86868b] font-medium mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                            <span className={`font-black text-lg ${item.color}`}>{item.points}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* History Yesterday */}
            <div className="px-6 mt-10 max-w-7xl mx-auto">
                <p className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-6 ml-1">Yesterday</p>
                <div className="flex flex-col divide-y divide-gray-50">
                    {historyYesterday.map((item, i) => (
                        <div key={i} className="py-5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center text-xl`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1d1d1f] text-sm tracking-tight">{item.title}</h3>
                                    <p className="text-[11px] text-[#86868b] font-medium mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                            <span className={`font-black text-lg ${item.color}`}>{item.points}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
