import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useTheme } from '../../context/ThemeContext';

const sections = ['Account', 'Notifications', 'Privacy', 'Payment', 'Security'];

export default function Settings() {
  const [active, setActive] = useState('Account');
  const { showToast } = useStore();
  const { theme, toggleTheme } = useTheme();
  const [notifPrefs, setNotifPrefs] = useState({ email: true, sms: false, push: true, marketing: false });
  const [privacy, setPrivacy] = useState({ publicProfile: true, showProgress: false });

  return (
    <div className="grid lg:grid-cols-[200px_1fr] gap-8">
      <div className="flex lg:flex-col gap-1 overflow-x-auto">
        {sections.map((s) => (
          <button key={s} onClick={() => setActive(s)} className={`px-3.5 py-2.5 rounded-md text-sm font-medium text-left whitespace-nowrap ${active === s ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300' : 'text-navy-500 dark:text-slate-300 hover:bg-navy-50 dark:hover:bg-white/5'}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="card-surface p-6 max-w-2xl">
        {active === 'Account' && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-navy-900 dark:text-white">Account Preferences</h3>
            <ToggleRow label="Dark Mode" description="Switch between light and dark appearance." checked={theme === 'dark'} onChange={toggleTheme} />
            <div>
              <label className="label-text">Change Password</label>
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="password" placeholder="New password" className="input-field" />
                <input type="password" placeholder="Confirm password" className="input-field" />
              </div>
            </div>
            <button onClick={() => showToast('Password changed')} className="btn-primary">Update Password</button>
          </div>
        )}

        {active === 'Notifications' && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-navy-900 dark:text-white">Notification Preferences</h3>
            <ToggleRow label="Email notifications" description="Course updates, deadlines and results." checked={notifPrefs.email} onChange={() => setNotifPrefs((p) => ({ ...p, email: !p.email }))} />
            <ToggleRow label="SMS notifications" description="Urgent deadline reminders via SMS." checked={notifPrefs.sms} onChange={() => setNotifPrefs((p) => ({ ...p, sms: !p.sms }))} />
            <ToggleRow label="Push notifications" description="Real-time updates on this device." checked={notifPrefs.push} onChange={() => setNotifPrefs((p) => ({ ...p, push: !p.push }))} />
            <ToggleRow label="Marketing emails" description="Offers, new courses and newsletters." checked={notifPrefs.marketing} onChange={() => setNotifPrefs((p) => ({ ...p, marketing: !p.marketing }))} />
          </div>
        )}

        {active === 'Privacy' && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-navy-900 dark:text-white">Privacy Settings</h3>
            <ToggleRow label="Public profile" description="Allow others to view your instructor/student profile." checked={privacy.publicProfile} onChange={() => setPrivacy((p) => ({ ...p, publicProfile: !p.publicProfile }))} />
            <ToggleRow label="Show course progress" description="Display your learning progress on your public profile." checked={privacy.showProgress} onChange={() => setPrivacy((p) => ({ ...p, showProgress: !p.showProgress }))} />
          </div>
        )}

        {active === 'Payment' && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-navy-900 dark:text-white">Payment Methods</h3>
            <div className="border border-navy-200 dark:border-white/10 rounded-md p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-navy-800 dark:text-slate-100">UPI — user@okhdfcbank</p>
                <p className="text-xs text-navy-400">Default payment method</p>
              </div>
              <span className="badge bg-emerald-500/10 text-emerald-600">Verified</span>
            </div>
            <button onClick={() => showToast('Redirecting to add payment method')} className="btn-secondary">Add Payment Method</button>
          </div>
        )}

        {active === 'Security' && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-navy-900 dark:text-white">Security</h3>
            <ToggleRow label="Two-factor authentication" description="Add an extra layer of security to your account." checked={false} onChange={() => showToast('2FA setup started')} />
            <div>
              <p className="text-sm font-semibold text-navy-800 dark:text-slate-100 mb-1">Active Sessions</p>
              <p className="text-xs text-navy-400">Chrome on Windows — this device — Delhi, IN</p>
            </div>
            <button onClick={() => showToast('Signed out of all other sessions')} className="btn-secondary">Log out of all other devices</button>
          </div>
        )}
      </div>
    </div>
  );
}

function ToggleRow({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <div>
        <p className="text-sm font-semibold text-navy-800 dark:text-slate-100">{label}</p>
        <p className="text-xs text-navy-400">{description}</p>
      </div>
      <button onClick={onChange} className={`w-11 h-6 rounded-full shrink-0 relative transition-colors ${checked ? 'bg-violet-600' : 'bg-navy-200 dark:bg-white/15'}`}>
        <span className={`absolute top-0.5 h-5 w-5 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}
