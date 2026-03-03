import React from 'react';

export default function HelpPage() {
    const helpitems = [
        {
            icon: '🚶',
            title: 'Feeling unsafe?',
            desc: 'Talk to Nest Manager, 24/7',
            buttonColor: 'bg-[#c13535]',
            iconBg: 'bg-red-50'
        },
        {
            icon: '🏥',
            title: 'Need a doctor',
            desc: 'Hospital call right away',
            buttonColor: 'bg-[#c13535]',
            iconBg: 'bg-red-50'
        },
        {
            icon: '🚲',
            title: 'Police',
            desc: 'Direct call to police station',
            buttonColor: 'bg-[#2a4e78]',
            iconBg: 'bg-blue-50'
        },
        {
            icon: '👥',
            title: 'Call family',
            desc: 'Call home + Nia support',
            buttonColor: 'bg-[#2a4e78]',
            iconBg: 'bg-green-50'
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* SOS Hero Section */}
            <div className="bg-[#a12c2c] pt-12 pb-16 px-6 text-center">
                <div className="flex justify-center mb-6">
                    <button className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center p-3 animate-pulse">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-2xl shadow-red-900 border-4 border-red-400">
                            <span className="text-[#c13535] text-2xl font-black">SOS</span>
                        </div>
                    </button>
                </div>
                <h1 className="text-3xl font-black text-white tracking-tight">Need help?</h1>
                <p className="text-white/70 text-sm font-medium mt-1">
                    Press the button — get help right away
                </p>
            </div>

            {/* Help Cards */}
            <div className="px-5 -mt-6 flex flex-col gap-3">
                {helpitems.map((item, i) => (
                    <div key={i} className="bg-[#f5f5f7] rounded-[24px] p-4 flex items-center gap-4 shadow-sm">
                        <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center text-xl`}>
                            {item.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-[#1d1d1f] text-sm">{item.title}</h3>
                            <p className="text-[#86868b] text-[11px] font-medium">{item.desc}</p>
                        </div>
                        <button className={`${item.buttonColor} text-white px-5 py-2 rounded-xl text-xs font-black shadow-lg active:scale-95 transition-all`}>
                            Call
                        </button>
                    </div>
                ))}
            </div>

            {/* Emergency Card Status */}
            <div className="px-5 mt-4">
                <div className="bg-[#e8f5e9] rounded-[20px] p-4 flex gap-3 border border-[#c8e6c9]">
                    <div className="w-5 h-5 bg-green-500 rounded-md flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p className="text-[#2e7d32] text-[13px] font-black leading-snug">
                        Your emergency card is active. Safety kit received.
                    </p>
                </div>
            </div>
        </div>
    );
}
