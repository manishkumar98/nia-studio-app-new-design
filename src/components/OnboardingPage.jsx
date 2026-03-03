import React from 'react';

export default function OnboardingPage() {
    const steps = [
        {
            id: 1,
            title: 'Aadhaar check',
            desc: 'ID verified',
            status: 'Done',
            statusColor: 'bg-[#e8f5e9] text-[#2e7d32]',
            isCompleted: true
        },
        {
            id: 2,
            title: 'Safety kit received',
            desc: 'Lock, whistle, card, pad kit',
            status: 'Done',
            statusColor: 'bg-[#e8f5e9] text-[#2e7d32]',
            isCompleted: true
        },
        {
            id: 3,
            title: 'UPI set up',
            desc: 'Bank account connected',
            status: 'Done',
            statusColor: 'bg-[#e8f5e9] text-[#2e7d32]',
            isCompleted: true
        },
        {
            id: 4,
            title: 'e-Shram card',
            desc: 'Government worker ID',
            status: 'Start',
            statusColor: 'bg-[#2a4e78] text-white',
            isCompleted: false
        },
        {
            id: 5,
            title: 'PM-JAY card',
            desc: 'Free treatment health card',
            status: 'Pending',
            statusColor: 'bg-[#f5f5f7] text-[#86868b]',
            isCompleted: false,
            isLocked: true
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Hero Section */}
            <div className="bg-[#061121] pt-12 pb-20 px-6 text-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-3xl font-black text-white tracking-tight">Welcome to Nia</h1>
                    <p className="text-white/40 text-sm font-medium mt-1">
                        Complete these on your first day
                    </p>
                </div>
            </div>

            {/* Progress Card (Floating) */}
            <div className="px-6 -mt-10 relative z-20">
                <div className="bg-white rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 border border-gray-100/50">
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-3">
                        <div className="bg-[#2e7d32] h-full w-[60%] transition-all duration-1000"></div>
                    </div>
                    <p className="text-[#86868b] text-sm font-bold">
                        <span className="text-[#1d1d1f]">3 / 5</span> steps done
                    </p>
                </div>
            </div>

            {/* Steps List */}
            <div className="px-6 mt-8 flex flex-col divide-y divide-gray-50">
                {steps.map((step) => (
                    <div key={step.id} className="py-5 flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                            {/* Icon/Number */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step.isCompleted ? 'bg-[#2e7d32]' : 'bg-[#f5f5f7] text-[#1d1d1f]'}`}>
                                {step.isCompleted ? (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <span className={step.isLocked ? 'text-[#86868b]' : 'text-[#2a4e78]'}>{step.id}</span>
                                )}
                            </div>
                            <div>
                                <h3 className={`font-bold text-base tracking-tight ${step.isLocked ? 'text-[#86868b]' : 'text-[#1d1d1f]'}`}>{step.title}</h3>
                                <p className="text-[11px] text-[#86868b] font-medium leading-tight">{step.desc}</p>
                            </div>
                        </div>
                        <button className={`${step.statusColor} px-5 py-1.5 rounded-xl text-xs font-black shadow-sm active:scale-95 transition-all`}>
                            {step.status}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
