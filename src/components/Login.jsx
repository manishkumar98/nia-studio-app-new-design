import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { mockUsers } from '../data/mockUsers'

export default function Login() {
  const [portal, setPortal] = useState('resident') // 'resident' or 'staff'
  const [method, setMethod] = useState('legacy')
  const [empId, setEmpId] = useState('')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { mockLogin, loginWithGoogle, setupRecaptcha, sendOtp, confirmOtp } = useAuth()

  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [confirmationResult, setConfirmationResult] = useState(null)
  const [step, setStep] = useState('input') // 'input' or 'otp'

  const handleLegacyLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    setTimeout(() => {
      const user = mockUsers.find(u => u.employeeId === empId && u.pin === pin)
      if (user) {
        mockLogin(user)
      } else {
        setError('Invalid ID or PIN')
        setLoading(false)
      }
    }, 800)
  }

  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      await loginWithGoogle(portal)
    } catch (err) {
      setError('Google Sign-in failed. Please try again.')
      setLoading(false)
    }
  }

  const handleSendOtp = async (e) => {
    e.preventDefault()
    if (!phoneNumber) return setError('Please enter a phone number')
    setLoading(true)
    setError('')
    try {
      setupRecaptcha('recaptcha-container')
      const result = await sendOtp(phoneNumber)
      setConfirmationResult(result)
      setStep('otp')
    } catch (err) {
      console.error(err)
      setError('Failed to send OTP. Try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await confirmOtp(confirmationResult, otp, portal)
    } catch (err) {
      setError('Invalid OTP code')
    } finally {
      setLoading(false)
    }
  }

  const methods = portal === 'resident'
    ? [
      { id: 'legacy', label: 'PIN', disabled: false }
    ]
    : [
      { id: 'legacy', label: 'EMP ID', disabled: false }
    ];

  return (
    <div className="min-h-screen bg-[#061121] flex flex-col relative overflow-hidden font-display">
      <div id="recaptcha-container"></div>

      {/* Decorative glow like Home Page */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <header className="w-full py-10 px-6 relative z-30 flex items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10">
            <span className="text-white font-black text-sm">N</span>
          </div>
          <span className="text-xl font-black tracking-tight text-white">Nia</span>
        </div>
      </header>

      {/* Main Login Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 relative z-20">
        <div className="max-w-md w-full">
          {/* Hero Branding matching Home Page */}
          <div className="text-center mb-10 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2a1b18] text-[#d27c3c] text-[11px] font-black uppercase tracking-wider">
              {portal === 'staff' ? 'Enterprise Staff Terminal' : 'Low Prices. Right Next Door.'}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Login to<br />{portal === 'staff' ? 'Staff' : 'Studio'}
            </h1>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl shadow-black/40 border border-white/10 overflow-hidden relative">
            <div className="relative z-10 space-y-8">
              {error && (
                <div className="bg-rose-50 text-rose-600 p-4 rounded-3xl text-[11px] font-black uppercase tracking-widest text-center border border-rose-100 animate-shake">
                  {error}
                </div>
              )}

              <form onSubmit={handleLegacyLogin} className="space-y-4">
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={portal === 'staff' ? "Staff ID (e.g. EAE001)" : "Resident ID (e.g. NIA001)"}
                      className="w-full px-8 py-5 bg-[#f5f5f7] border-2 border-transparent rounded-[24px] text-lg font-black text-center focus:border-blue-500 focus:bg-white outline-none transition-all uppercase placeholder:opacity-30 placeholder:uppercase"
                      value={empId}
                      onChange={(e) => setEmpId(e.target.value.toUpperCase())}
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="PIN"
                      className="w-full px-8 py-5 bg-[#f5f5f7] border-2 border-transparent rounded-[24px] text-lg font-black text-center focus:border-blue-500 focus:bg-white outline-none transition-all tracking-[0.8em] placeholder:tracking-normal placeholder:opacity-30"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 md:py-5 rounded-xl font-black text-lg text-white shadow-xl transition-all active:scale-95 ${portal === 'staff' ? 'bg-[#1d1d1f]' : 'bg-[#2d4a6b] hover:bg-[#3d5a7b]'}`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Verifying...</span>
                    </div>
                  ) : 'Enter Dashboard'}
                </button>
              </form>


              {/* Staff Portal Link as requested */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setPortal(portal === 'resident' ? 'staff' : 'resident')}
                  className="text-xs font-black uppercase tracking-[0.2em] text-[#86868b] hover:text-[#1d1d1f] transition-colors decoration-[#d27c3c]/20 hover:decoration-[#d27c3c]/50"
                >
                  {portal === 'resident' ? 'Login as Nia Staff →' : 'Back to Resident Portal'}
                </button>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">
            Nia One Ecosystem • Enterprise Ready
          </p>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="w-full py-12 px-6 relative z-30 max-w-7xl mx-auto border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-widest text-white/20">© 2026 Nia Studio</p>
          <a href="#" className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white/40 transition-all">Support Terminal</a>
        </div>
        <div className="flex gap-6">
          <span className="text-[9px] font-black uppercase tracking-widest text-[#d27c3c] opacity-40">Encryption AES-256</span>
          <span className="text-[9px] font-black uppercase tracking-widest text-[#d27c3c] opacity-40">Build Stable 1.2.x</span>
        </div>
      </footer>
    </div>
  )
}
