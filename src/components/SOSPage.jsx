import { useState } from 'react'

export default function SOSPage({ onBack }) {
    const [pressed, setPressed] = useState(false)
    const [countdown, setCountdown] = useState(null)

    const handleSOSPress = () => {
        if (pressed) {
            setPressed(false)
            setCountdown(null)
            return
        }
        setPressed(true)
        let count = 3
        setCountdown(count)
        const interval = setInterval(() => {
            count -= 1
            if (count <= 0) {
                clearInterval(interval)
                setCountdown(0)
            } else {
                setCountdown(count)
            }
        }, 1000)
    }

    const emergencyContacts = [
        { name: 'Police', number: '100', emoji: '👮' },
        { name: 'Ambulance', number: '108', emoji: '🚑' },
        { name: 'Women Helpline', number: '1091', emoji: '🆘' },
        { name: 'Nia Manager', number: 'Call Now', emoji: '🏠' },
    ]

    return (
        <div className="min-h-screen bg-[#c0392b] pb-28 flex flex-col">
            {/* Header */}
            <div className="px-4 pt-5 pb-4 flex items-center gap-3">
                <button
                    onClick={onBack}
                    className="text-white/80 flex items-center gap-1 active:scale-90 transition-transform"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-white text-sm font-black">N</span>
                    </div>
                    <span className="text-white font-black text-base tracking-tight">Nia</span>
                </div>
            </div>

            {/* SOS Button Section */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 py-10">
                {/* Pulsing SOS Button */}
                <div className="relative flex items-center justify-center">
                    {/* Outer pulse rings */}
                    {pressed && (
                        <>
                            <div className="absolute w-56 h-56 rounded-full bg-white/10 animate-ping" />
                            <div className="absolute w-48 h-48 rounded-full bg-white/15 animate-ping" style={{ animationDelay: '0.3s' }} />
                        </>
                    )}
                    {/* Outer ring */}
                    <div className={`w-44 h-44 rounded-full flex items-center justify-center transition-all duration-300 ${pressed ? 'bg-white/20 scale-105' : 'bg-white/10'}`}>
                        {/* Inner button */}
                        <button
                            onClick={handleSOSPress}
                            className={`w-36 h-36 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-200 active:scale-95 select-none
                                ${pressed
                                    ? 'bg-white text-[#c0392b] scale-105'
                                    : 'bg-white text-[#c0392b]'
                                }`}
                        >
                            {countdown !== null && countdown > 0 ? (
                                <span className="text-5xl font-black leading-none">{countdown}</span>
                            ) : (
                                <span className="text-3xl font-black tracking-wider">SOS</span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Heading & Subheading — colour contrast like the image */}
                <div className="text-center space-y-2">
                    <h1 className="text-white text-3xl font-black tracking-tight leading-tight">
                        Need help?
                    </h1>
                    <p className="text-white/55 text-[15px] font-medium leading-relaxed max-w-xs mx-auto">
                        Press the button — get help right away
                    </p>
                </div>

                {/* Status message */}
                {pressed && countdown === 0 && (
                    <div className="bg-white/15 rounded-3xl px-6 py-4 text-center space-y-1 border border-white/20">
                        <p className="text-white font-black text-lg">🚨 Alert Sent!</p>
                        <p className="text-white/70 text-sm font-medium">Your Nest Manager has been notified.</p>
                    </div>
                )}
            </div>

            {/* Emergency Contacts */}
            <div className="px-4 pb-4">
                <p className="text-white/60 text-[11px] font-black uppercase tracking-widest mb-3 text-center">
                    Emergency Contacts
                </p>
                <div className="grid grid-cols-2 gap-3">
                    {emergencyContacts.map((contact) => (
                        <button
                            key={contact.name}
                            className="bg-white/10 hover:bg-white/20 active:scale-95 transition-all rounded-2xl p-4 flex items-center gap-3 border border-white/10 text-left"
                        >
                            <span className="text-2xl">{contact.emoji}</span>
                            <div>
                                <p className="text-white font-black text-sm leading-tight">{contact.name}</p>
                                <p className="text-white/60 text-xs font-bold mt-0.5">{contact.number}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
