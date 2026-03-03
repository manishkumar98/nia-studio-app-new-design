import React, { useState } from 'react';

export default function AutoSubscribe() {
    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            name: 'Pads every month',
            desc: 'Save 20% • ₹32 vs ₹40 MRP',
            price: 32,
            icon: '🧻',
            iconBg: 'bg-red-50',
            enabled: true
        },
        {
            id: 2,
            name: 'Gold savings',
            desc: 'Get a gold coin at end of year',
            price: 500,
            icon: '🌚',
            iconBg: 'bg-amber-50',
            enabled: true
        },
        {
            id: 3,
            name: 'Meals',
            desc: 'Save 10% • ₹1,350 vs ₹1,500',
            price: 1350,
            icon: '🥣',
            iconBg: 'bg-green-50',
            enabled: true
        },
        {
            id: 4,
            name: 'Medicine kit',
            desc: 'Save 15% • Paracetamol, ORS, iron',
            price: 85,
            icon: '💊',
            iconBg: 'bg-blue-50',
            enabled: false
        }
    ]);

    const toggleSub = (id) => {
        setSubscriptions(subs => subs.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
    };

    const total = subscriptions.reduce((acc, curr) => curr.enabled ? acc + curr.price : acc, 0);
    const savings = 240; // Mock static savings or could be calculated

    return (
        <div className="min-h-screen bg-white pb-32">
            <div className="px-6 pt-8 pb-4">
                <h1 className="text-2xl font-black text-[#1d1d1f] tracking-tight">Monthly auto-subscribe</h1>
                <p className="text-[#86868b] text-sm font-medium mt-1">
                    Turn on, it gets deducted every month. Best rates.
                </p>
            </div>

            <div className="px-6 flex flex-col gap-3">
                {subscriptions.map((sub) => (
                    <div key={sub.id} className="bg-[#f5f5f7] rounded-[24px] p-5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl ${sub.iconBg} flex items-center justify-center text-2xl`}>
                                {sub.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1d1d1f] text-sm">{sub.name}</h3>
                                <p className="text-[#86868b] text-[11px] font-medium leading-tight mt-0.5">{sub.desc}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="text-right">
                                <p className="text-sm font-black text-[#1d1d1f]">₹{sub.price}</p>
                                <p className="text-[10px] font-bold text-[#86868b]">/month</p>
                            </div>
                            <button
                                onClick={() => toggleSub(sub.id)}
                                className={`w-11 h-6 rounded-full transition-colors relative ${sub.enabled ? 'bg-[#34c759]' : 'bg-gray-200'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${sub.enabled ? 'left-6' : 'left-1 shadow-sm'}`} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Monthly Total Card */}
            <div className="px-6 mt-6">
                <div className="bg-[#f0f7ff] rounded-[24px] p-5 flex justify-between items-center border border-[#e1effe]">
                    <div>
                        <p className="text-[11px] font-bold text-[#2a4e78] uppercase tracking-tight">Monthly total</p>
                        <p className="text-xl font-black text-[#1d1d1f]">₹{total.toLocaleString('en-IN')}/mo</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[11px] font-bold text-[#2a4e78] uppercase tracking-tight">You save</p>
                        <p className="text-xl font-black text-[#1a5c35]">₹{savings}/mo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
