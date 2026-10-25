import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Mail,
  Trash2,
  Eye,
  Sun,
  Moon,
  Users,
  MousePointerClick,
  Send,
  Star,
  X,
  Check,
  AlertCircle,
  LayoutDashboard,
  Settings,
  LogOut,
  Palette,
} from 'lucide-react';
import { CustomerReview } from '../utils/customerReviews';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  reviews: CustomerReview[];
  onDeleteReview: (id: string) => void;
  analytics: {
    visitorCount: number;
    mailtoClicks: number;
    formSubmits: number;
    totalReviews: number;
  };
  isDarkTheme: boolean;
  onToggleTheme: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  reviews,
  onDeleteReview,
  analytics,
  isDarkTheme,
  onToggleTheme,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'reviews' | 'settings'>('dashboard');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctEmail = 'shivasagao6@gmail.com';
    const correctPass = 'shivasagrpapahainaok';

    if (
      emailInput.trim().toLowerCase() === correctEmail.toLowerCase() &&
      passwordInput === correctPass
    ) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid Gmail or Admin Password. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmailInput('');
    setPasswordInput('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#1A202A] border border-[#2A303B] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {!isAuthenticated ? (
          /* Login Screen */
          <div className="p-8 sm:p-10 max-w-md mx-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A303B] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-[#ECE8DE]">Admin Portal</h3>
                  <p className="text-xs text-[#8F96A3]">Shiva Sagar UGC Dashboard</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-[#8F96A3] hover:text-[#ECE8DE] p-1.5 rounded-md bg-[#12161C] border border-[#2A303B]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3 rounded-md bg-red-950/50 border border-red-800/60 text-xs text-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-1.5">
                  Admin Gmail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-[#8F96A3]" />
                  <input
                    type="email"
                    required
                    placeholder="shivasagao6@gmail.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md pl-10 pr-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3] block mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-[#8F96A3]" />
                  <input
                    type="password"
                    required
                    placeholder="Enter admin password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-[#12161C] border border-[#2A303B] focus:border-[#C9A24B] rounded-md pl-10 pr-3.5 py-2.5 text-sm text-[#ECE8DE] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#C9A24B] hover:bg-[#d6b059] text-[#1A1508] font-semibold text-sm transition-all shadow-[0_0_16px_rgba(201,162,75,0.25)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Authenticate Admin Panel</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div>
            {/* Header */}
            <div className="px-6 py-4 bg-[#12161C] border-b border-[#2A303B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#ECE8DE]">Shiva Sagar — Admin Control Center</h3>
                  <p className="text-xs text-[#7FAE8E]">Logged in as shivasagao6@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded bg-[#1A202A] border border-[#2A303B] hover:border-[#C9A24B] text-xs text-[#ECE8DE]"
                >
                  Close Panel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-3.5 py-1.5 rounded bg-red-950/40 border border-red-800/60 hover:bg-red-900/50 text-xs text-red-200 flex items-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Nav Tabs */}
            <div className="flex border-b border-[#2A303B] bg-[#161B22] px-6">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'dashboard'
                    ? 'border-[#C9A24B] text-[#C9A24B]'
                    : 'border-transparent text-[#8F96A3] hover:text-[#ECE8DE]'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Analytics Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-4 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-[#C9A24B] text-[#C9A24B]'
                    : 'border-transparent text-[#8F96A3] hover:text-[#ECE8DE]'
                }`}
              >
                <Trash2 className="w-4 h-4" />
                <span>Manage Reviews ({reviews.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'settings'
                    ? 'border-[#C9A24B] text-[#C9A24B]'
                    : 'border-transparent text-[#8F96A3] hover:text-[#ECE8DE]'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Theme & Settings</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 sm:p-8">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xl text-[#ECE8DE] mb-1">Traffic & Engagement Analytics</h4>
                    <p className="text-xs text-[#8F96A3]">Real-time tracking of visitor traffic and Gmail inquiries.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Visitors */}
                    <div className="p-5 rounded-lg bg-[#12161C] border border-[#2A303B]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-wider text-[#8F96A3] font-semibold">Total Visitors</span>
                        <Users className="w-5 h-5 text-[#C9A24B]" />
                      </div>
                      <div className="text-3xl font-display font-semibold text-[#ECE8DE]">
                        {analytics.visitorCount}
                      </div>
                      <span className="text-[11px] text-[#7FAE8E] mt-1 block">Live tracking active</span>
                    </div>

                    {/* Gmail clicks */}
                    <div className="p-5 rounded-lg bg-[#12161C] border border-[#2A303B]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-wider text-[#8F96A3] font-semibold">Gmail / Email Clicks</span>
                        <MousePointerClick className="w-5 h-5 text-[#7FAE8E]" />
                      </div>
                      <div className="text-3xl font-display font-semibold text-[#ECE8DE]">
                        {analytics.mailtoClicks}
                      </div>
                      <span className="text-[11px] text-[#7FAE8E] mt-1 block">Clicks on mailto & product image</span>
                    </div>

                    {/* Form Submits */}
                    <div className="p-5 rounded-lg bg-[#12161C] border border-[#2A303B]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-wider text-[#8F96A3] font-semibold">Inquiry Submissions</span>
                        <Send className="w-5 h-5 text-[#6495ED]" />
                      </div>
                      <div className="text-3xl font-display font-semibold text-[#ECE8DE]">
                        {analytics.formSubmits}
                      </div>
                      <span className="text-[11px] text-[#7FAE8E] mt-1 block">Completed project briefs</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xl text-[#ECE8DE] mb-1">Manage Customer Reviews</h4>
                    <p className="text-xs text-[#8F96A3]">Review and delete any inappropriate or unwanted customer reviews.</p>
                  </div>

                  <div className="space-y-3">
                    {reviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="p-4 rounded-lg bg-[#12161C] border border-[#2A303B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-[#ECE8DE]">{rev.name}</span>
                            <span className="text-xs text-[#8F96A3]">({rev.location})</span>
                            <span className="text-xs font-mono text-[#C9A24B] bg-[#C9A24B]/10 px-1.5 py-0.5 rounded">
                              ★ {rev.rating.toFixed(1)}
                            </span>
                          </div>
                          <p className="text-xs text-[#8F96A3] italic">"{rev.description}"</p>
                        </div>

                        <button
                          onClick={() => onDeleteReview(rev.id)}
                          className="px-3.5 py-1.5 rounded bg-red-950/40 border border-red-800/60 hover:bg-red-900/50 text-xs text-red-200 flex items-center gap-1.5 cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete Review</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xl text-[#ECE8DE] mb-1">Theme & Site Settings</h4>
                    <p className="text-xs text-[#8F96A3]">Toggle dark/light theme mode and manage site preferences.</p>
                  </div>

                  <div className="p-5 rounded-lg bg-[#12161C] border border-[#2A303B] flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm text-[#ECE8DE]">Website Theme Mode</div>
                      <div className="text-xs text-[#8F96A3]">Switch between dark ink-navy theme and clean light theme.</div>
                    </div>

                    <button
                      onClick={onToggleTheme}
                      className="px-4 py-2 rounded-md bg-[#1A202A] border border-[#2A303B] hover:border-[#C9A24B] text-xs text-[#ECE8DE] flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      {isDarkTheme ? (
                        <>
                          <Sun className="w-4 h-4 text-[#C9A24B]" />
                          <span>Switch to Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-4 h-4 text-[#C9A24B]" />
                          <span>Switch to Dark Mode</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
