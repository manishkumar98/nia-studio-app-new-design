import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AutoSubscribe() {
    const { currentUser } = useAuth();
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [orderId] = useState('SUB-' + Math.random().toString(36).substr(2, 9).toUpperCase());

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
            icon: '🌝',
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
    const savings = 240;

    if (isConfirmed) {
        return (
            <div className="p-6 max-w-lg mx-auto animate-fadeUp min-h-screen">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
                    <div className="bg-[#34c759] p-12 text-center text-white relative">
                        <div className="text-7xl mb-6">✅</div>
                        <h2 className="text-3xl font-black mb-2 tracking-tight">Success!</h2>
                        <p className="opacity-90 font-medium font-display">Monthly Auto-pay Set Up</p>
                    </div>

                    <div className="p-10 text-center">
                        <div className="bg-white border-2 border-gray-100 p-8 rounded-[32px] mb-8 shadow-inner flex flex-col items-center">
                            <p className="text-[11px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-2">Subscription ID</p>
                            <div className="text-2xl font-black tracking-[0.1em] text-[#1d1d1f] font-mono bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                                {orderId}
                            </div>
                        </div>

                        <div className="p-5 bg-green-50 rounded-2xl mb-8 border border-green-100 text-left">
                            <div className="flex gap-3">
                                <span className="text-xl">💳</span>
                                <p className="text-xs text-green-800 font-bold leading-relaxed">
                                    AUTO-PAY ACTIVE: <span className="font-medium opacity-80">₹{total.toLocaleString('en-IN')} will be deducted from your earnings on the 1st of every month automatically.</span>
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsConfirmed(false)}
                            className="w-full py-5 bg-[#1d1d1f] text-white rounded-2xl font-black hover:scale-[0.98] transition-all shadow-lg text-sm uppercase tracking-widest"
                        >
                            Back to Settings
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white pb-40">
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

            {/* Fixed Checkout Button */}
            <div className="fixed bottom-24 left-0 right-0 px-6 animate-fadeUp">
                <button
                    onClick={() => setIsConfirmed(true)}
                    disabled={total === 0}
                    className={`w-full py-5 rounded-[24px] font-black text-white shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 ${total === 0 ? 'bg-gray-300' : 'bg-[#1d1d1f]'}`}
                >
                    Confirm Subscription • ₹{total.toLocaleString('en-IN')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
