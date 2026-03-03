import React from 'react';

export default function SavingsMoney() {
    const savingsPlans = [
        {
            icon: '🌚',
            title: 'Gold Savings',
            desc: '7 of 12 months done',
            amount: '3,500',
            note: '/ ₹6,000',
            iconBg: 'bg-amber-50'
        },
        {
            icon: '💸',
            title: 'Festival Money',
            desc: 'Holi fund • Send home via UPI',
            amount: '5,000',
            note: 'ready to send',
            iconBg: 'bg-green-50'
        },
        {
            icon: '🏠',
            title: 'Room Deposit',
            desc: 'Security deposit — fully refundable',
            amount: '3,999',
            note: 'refundable',
            iconBg: 'bg-blue-50'
        },
        {
            icon: '💰',
            title: 'Emergency Fund',
            desc: '₹200 auto-saved every month',
            amount: '2,000',
            note: '10 months',
            iconBg: 'bg-red-50'
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Hero Section */}
            <div className="bg-[#244d73] pt-12 pb-20 px-6 relative overflow-hidden text-center md:text-left">
                <div className="max-w-7xl mx-auto relative z-10">
                    <p className="text-white/60 text-[11px] font-black uppercase tracking-[0.2em] mb-2">Total Savings</p>
                    <h1 className="text-5xl font-black text-white tracking-tight leading-none">₹14,500</h1>
                    <p className="text-white/40 text-sm font-medium mt-2">
                        Chit fund + gold + money sent home
                    </p>
                </div>
            </div>

            {/* Chit Fund Floating Card */}
            <div className="px-6 -mt-10 relative z-20">
                <div className="bg-white rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 flex items-center gap-6 border border-gray-100/50 max-w-7xl mx-auto">
                    {/* Radial Progress */}
                    <div className="relative w-20 h-20 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="34"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-gray-100"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r="34"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={213.6}
                                strokeDashoffset={213.6 * (1 - 0.75)}
                                className="text-[#2e7d32]"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-black text-[#1d1d1f]">75%</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#1d1d1f] text-base">Chit Fund</h3>
                        <p className="text-[#86868b] text-[11px] font-medium leading-snug mt-1">
                            ₹500/month x 20 members • Your turn: Month 8
                        </p>
                    </div>
                </div>
            </div>

            {/* Saving Plans List */}
            <div className="px-6 mt-12 max-w-7xl mx-auto">
                <p className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-6 ml-1">
                    Saving Plans
                </p>

                <div className="flex flex-col divide-y divide-gray-50 bg-white rounded-[32px] border border-gray-100/50 shadow-sm overflow-hidden">
                    {savingsPlans.map((plan, i) => (
                        <div key={i} className="flex items-center gap-4 px-5 py-6">
                            <div className={`w-12 h-12 rounded-2xl ${plan.iconBg} flex items-center justify-center text-2xl`}>
                                {plan.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-[#1d1d1f] text-sm tracking-tight truncate">{plan.title}</h3>
                                <p className="text-[11px] text-[#86868b] font-medium mt-0.5 truncate">{plan.desc}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                                <p className="font-black text-[#1d1d1f] text-base leading-none">₹{plan.amount}</p>
                                <p className="text-[10px] font-bold text-[#86868b] mt-1">{plan.note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
