import React from 'react';

export default function MonthlyEarnings() {
    const earningsData = [
        {
            icon: '🧵',
            title: 'Tailoring work',
            desc: '42 clothes stitched this month',
            amount: '3,200',
            stats: '42 orders',
            iconBg: 'bg-[#e8f5e9]'
        },
        {
            icon: '🍴',
            title: 'Tiffin delivery',
            desc: 'Daily lunch orders via WhatsApp',
            amount: '3,750',
            stats: '75 orders',
            iconBg: 'bg-[#e8f5e9]'
        },
        {
            icon: '💇‍♀️',
            title: 'Beauty parlour',
            desc: 'Threading, hair cut, facial',
            amount: '1,500',
            stats: '28 clients',
            iconBg: 'bg-[#e8f5e9]'
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Hero Earnings Section */}
            <div className="bg-[#144b2a] pt-12 pb-16 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <p className="text-white/60 text-[11px] font-black uppercase tracking-[0.2em] mb-2">This month's earnings</p>
                    <h1 className="text-5xl font-black text-white tracking-tight">₹8,450</h1>
                    <p className="text-white/40 text-sm font-medium mt-1">
                        ₹2,100 more than last month
                    </p>
                </div>
            </div>

            {/* List Section */}
            <div className="px-6 mt-8">
                <p className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-6 ml-1">
                    Where you earned
                </p>

                <div className="flex flex-col divide-y divide-gray-50 bg-white rounded-[32px] border border-gray-100/50 shadow-sm overflow-hidden">
                    {earningsData.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 px-5 py-6">
                            <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center text-2xl`}>
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-[#1d1d1f] text-sm tracking-tight">{item.title}</h3>
                                <p className="text-[11px] text-[#86868b] font-medium mt-0.5">{item.desc}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-black text-[#1a5c35] text-base leading-none">₹{item.amount}</p>
                                <p className="text-[10px] font-bold text-[#86868b] mt-1">{item.stats}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Support Message */}
            <div className="px-6 mt-6">
                <div className="bg-[#e8f5e9] rounded-[24px] p-5 flex items-center gap-4 border border-[#c8e6c9]">
                    <span className="text-2xl">📈</span>
                    <p className="text-[#2e7d32] text-sm font-black leading-snug">
                        80-95% earnings are yours. Nia just helps.
                    </p>
                </div>
            </div>
        </div>
    );
}
