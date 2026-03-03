import { useState } from 'react'
import { useAuth } from './context/AuthContext'
import { usePoints } from './context/PointsContext'
import Login from './components/Login'
import ManualLedger from './components/ManualLedger'
import Leaderboard from './components/Leaderboard'
import Store from './components/Store'
import CartDrawer from './components/CartDrawer'
import BottomNav from './components/BottomNav'
import PointsBanner from './components/PointsBanner'
import Earn from './components/Earn'
import Redeem from './components/Redeem'
import StudioPage from './components/StudioPage'
import HomePage from './components/HomePage'
import FlowPage from './components/FlowPage'
import TribePage from './components/TribePage'
import NiaHaat from './components/NiaHaat'
import Me from './components/Me'
import HelpPage from './components/HelpPage'
import AutoSubscribe from './components/AutoSubscribe'
import MonthlyEarnings from './components/MonthlyEarnings'
import OnboardingPage from './components/OnboardingPage'
import TribeEventsPage from './components/TribeEventsPage'
import SavingsMoney from './components/SavingsMoney'
import NiaPointsPage from './components/NiaPointsPage'
import Scanner from './components/Scanner'
import Header from './components/Header'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import OrderTerminal from './components/OrderTerminal'
import GlobalSearch from './components/GlobalSearch'

export default function App() {
  const { currentUser, logout, loading } = useAuth()
  const { cart } = usePoints()
  const [activeTab, setActiveTab] = useState('studio')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)
  const [staffView, setStaffView] = useState('scanner')
  // Sub-page routing: null = tab home, 'haat' | 'earn' | 'redeem' | 'leaderboard' | 'store' | 'studio-details'
  const [subPage, setSubPage] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLanding, setIsLanding] = useState(true)

  const goToHome = () => {
    setActiveTab('studio')
    setSubPage(null)
    setIsCheckout(false)
    setIsSearchOpen(false)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSubPage(tab === 'studio' ? 'studio-details' : null)
    setIsCheckout(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7]">
        <div className="w-12 h-12 border-4 border-[#0071e3] border-t-transparent rounded-full animate-spin shadow-xl"></div>
      </div>
    )
  }

  if (!currentUser) {
    if (isLanding) {
      return <HomePage onNavigate={handleTabChange} onGetStarted={() => setIsLanding(false)} />
    }
    return <Login />
  }

  const isStaff = currentUser.role === 'eae' || currentUser.role === 'jco'
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const userId = currentUser.uid || currentUser.id

  // --- STAFF VIEW (unchanged) ---
  if (isStaff) {
    return (
      <div className="min-h-screen bg-[#fafafa]">
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 h-14 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#1d1d1f] rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-[#1d1d1f]">Nia Staff</span>
                <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-lg uppercase">{currentUser.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <div className="text-sm font-bold text-[#1d1d1f]">{currentUser.name}</div>
                <div className="text-[10px] text-[#86868b] uppercase font-bold tracking-widest">{currentUser.nestName}</div>
              </div>
              <button
                onClick={() => { logout(); }}
                className="p-2 rounded-2xl bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all border border-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <header className="bg-white border-b border-gray-100 px-4 py-3 sticky top-14 z-30">
          <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto no-scrollbar">
            {[
              { id: 'scanner', label: '📷 QR Scanner' },
              { id: 'orders', label: '🛍️ Orders' },
              { id: 'ledger', label: '📝 Manual Ledger' },
              { id: 'leaderboard', label: '🎯 Leaderboard' },
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setStaffView(btn.id)}
                className={`px-5 py-2 rounded-2xl text-sm font-bold transition-all whitespace-nowrap ${staffView === btn.id
                  ? 'bg-[#0071e3] text-white shadow-lg shadow-blue-100'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-4 md:p-8">
          {staffView === 'scanner' && <Scanner />}
          {staffView === 'orders' && <OrderTerminal />}
          {staffView === 'ledger' && <ManualLedger />}
          {staffView === 'leaderboard' && <Leaderboard />}
        </main>
      </div>
    )
  }

  // --- CHECKOUT ---
  if (isCheckout) {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <Checkout onBack={() => setIsCheckout(false)} />
      </div>
    )
  }

  // --- SUB-PAGES (accessible from any tab) ---
  if (subPage === 'haat') {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="haat"
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
          subPage={subPage}
        />
        <NiaHaat onBack={() => setSubPage(null)} />
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => setIsCheckout(true)}
        />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'earn') {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="me"
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
          subPage={subPage}
        />
        <div className="px-4 pt-3">
          <button onClick={() => setSubPage(null)} className="text-[#0071e3] font-bold text-sm flex items-center gap-1 mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
        <Earn />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'redeem') {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="me"
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
          subPage={subPage}
        />
        <div className="px-4 pt-3">
          <button onClick={() => setSubPage(null)} className="text-[#0071e3] font-bold text-sm flex items-center gap-1 mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
        <Redeem />
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => setIsCheckout(true)}
        />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'leaderboard') {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="tribe"
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
          subPage={subPage}
        />
        <div className="px-4 pt-3">
          <button onClick={() => setSubPage(null)} className="text-[#0071e3] font-bold text-sm flex items-center gap-1 mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
        <Leaderboard />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'store') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="haat"
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
          subPage={subPage}
        />
        <div className="px-4 pt-3">
          <button onClick={() => setSubPage(null)} className="text-[#0071e3] font-bold text-sm flex items-center gap-1 mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
        <PointsBanner userId={userId} />
        <Store />
        <Footer />
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => setIsCheckout(true)}
        />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'help') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="me"
          subPage={subPage}
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
        />
        <HelpPage />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'autosubscribe') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="studio"
          subPage={subPage}
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
        />
        <AutoSubscribe />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'earnings') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="flow"
          subPage={subPage}
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
        />
        <MonthlyEarnings />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'onboarding') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="studio"
          subPage={subPage}
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
        />
        <OnboardingPage />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'events') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="tribe"
          subPage={subPage}
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
        />
        <TribeEventsPage />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'savings') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="studio"
          subPage={subPage}
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
        />
        <SavingsMoney />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  if (subPage === 'niapoints') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          userName={currentUser.name}
          nestName={currentUser.nestName}
          onSignOut={logout}
          balance={usePoints().getBalance(userId)}
          activeTab="studio"
          subPage={subPage}
          onSearchClick={() => setIsSearchOpen(true)}
          onHomeClick={goToHome}
          onTabChange={handleTabChange}
        />
        <NiaPointsPage onNavigate={(page) => setSubPage(page)} />
        <BottomNav activeTab={activeTab} subPage={subPage} onTabChange={handleTabChange} />
      </div>
    )
  }

  // --- RESIDENT VIEW (main 4-tab layout) ---
  return (
    <div className="min-h-screen bg-white pb-16">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        userName={currentUser.name}
        nestName={currentUser.nestName}
        onSignOut={logout}
        balance={usePoints().getBalance(userId)}
        activeTab={activeTab}
        subPage={subPage}
        onSearchClick={() => setIsSearchOpen(true)}
        onHomeClick={goToHome}
        onTabChange={handleTabChange}
      />

      <main>
        {activeTab === 'studio' && (
          subPage === 'studio-details'
            ? <StudioPage onNavigate={(page) => setSubPage(page)} />
            : <HomePage onNavigate={(page) => setSubPage(page)} />
        )}
        {activeTab === 'flow' && <FlowPage onNavigate={(page) => setSubPage(page)} />}
        {activeTab === 'tribe' && <TribePage onNavigate={(page) => setSubPage(page)} />}
        {activeTab === 'me' && <Me onNavigate={(page) => setSubPage(page)} />}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => setIsCheckout(true)}
      />

      <BottomNav
        activeTab={activeTab}
        subPage={subPage}
        onTabChange={handleTabChange}
      />

      {isSearchOpen && (
        <GlobalSearch
          onClose={() => setIsSearchOpen(false)}
          onNavigate={(page) => {
            setSubPage(page);
            setIsSearchOpen(false);
          }}
        />
      )}
    </div>
  )
}
