import React from 'react';

export default function TribeEventsPage() {
    const badges = [
        { emoji: '🏆', title: 'Star of Month' },
        { emoji: '💰', title: 'Savings Star' },
        { emoji: '🎓', title: 'English Learner' },
    ];

    const events = [
        {
            day: '8',
            month: 'MAR',
            title: 'Movie Night',
            desc: 'Film + popcorn • Once a month',
            category: 'Tribe',
            catColor: 'bg-[#fff5eb] text-[#a0440e]'
        },
        {
            day: '15',
            month: 'MAR',
            title: 'Health Check-up',
            desc: 'Free doctor visit • Blood test',
            category: 'Health',
            catColor: 'bg-[#e8f5e9] text-[#2e7d32]'
        },
        {
            day: '22',
            month: 'MAR',
            title: 'Self-Defence Class',
            desc: 'Learn from police • Every month',
            category: 'Skill',
            catColor: 'bg-[#f0f7ff] text-[#0071e3]'
        },
        {
            day: '29',
            month: 'MAR',
            title: 'Tribe Night',
            desc: 'Birthday, dance, rangoli & music',
            category: 'Tribe',
            catColor: 'bg-[#fff5eb] text-[#a0440e]'
        },
        {
            day: '30',
            month: 'MAR',
            title: 'Clothes Swap',
            desc: 'Give old, take new • Every month',
            category: 'Tribe',
            catColor: 'bg-[#fff5eb] text-[#a0440e]'
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-32">
            <div className="px-6 pt-8 pb-4">
                <h1 className="text-2xl font-black text-[#1d1d1f] tracking-tight">Tribe Events</h1>
                <p className="text-[#86868b] text-sm font-medium mt-1">
                    Your badges, events & fun
                </p>
            </div>

            {/* Badges Slider */}
            <div className="px-6 mb-8 overflow-x-auto flex gap-3 no-scrollbar">
                {badges.map((badge, i) => (
                    <div key={i} className="flex-shrink-0 bg-[#fff5eb] rounded-2xl px-4 py-2.5 flex items-center gap-2 border border-[#ffe0bd]">
                        <span className="text-lg">{badge.emoji}</span>
                        <span className="text-xs font-black text-[#a0440e] whitespace-nowrap">{badge.title}</span>
                    </div>
                ))}
            </div>

            {/* Events List */}
            <div className="px-6 flex flex-col gap-3">
                {events.map((event, i) => (
                    <div key={i} className="bg-[#f5f5f7] rounded-[24px] p-5 flex items-center gap-5 shadow-sm">
                        {/* Date Box */}
                        <div className="text-center flex-shrink-0 border-r border-gray-200 pr-5">
                            <p className="text-2xl font-black text-[#1d1d1f] leading-none">{event.day}</p>
                            <p className="text-[10px] font-black text-[#86868b] mt-1">{event.month}</p>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-[#1d1d1f] text-sm truncate">{event.title}</h3>
                            <p className="text-[#86868b] text-[11px] font-medium leading-tight mt-0.5 truncate">{event.desc}</p>
                        </div>

                        {/* Category Badge */}
                        <div className={`px-3 py-1 rounded-lg text-[10px] font-black ${event.catColor}`}>
                            {event.category}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
