import React from 'react';
import {
  LayoutDashboard,
  User,
  CalendarCheck,
  FileText,
  DollarSign,
  KeyRound,
  Settings,
  LogOut,
  HelpCircle,
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 fixed h-full z-10 select-none">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-3 py-4 mb-4">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-200">
            <span className="text-xl">👥</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight text-slate-900 tracking-tight">Dayflow</h1>
            <p className="text-[11px] font-semibold text-slate-400 tracking-wider">HRMS</p>
          </div>
        </div>

        {/* Active Dashboard Link */}
        <div className="bg-blue-50 text-blue-600 rounded-xl px-4 py-2.5 flex items-center gap-3 font-medium text-sm mb-6 cursor-pointer">
          <LayoutDashboard className="w-4 h-4 text-blue-600" />
          <span>Dashboard</span>
        </div>

        {/* Main Section */}
        <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2">Main</p>
        <nav className="space-y-1 mb-6">
          <NavItem icon={<User className="w-4 h-4" />} label="Profile" />
          <NavItem icon={<CalendarCheck className="w-4 h-4" />} label="Attendance" />
          <NavItem icon={<FileText className="w-4 h-4" />} label="Leave Requests" />
          <NavItem icon={<DollarSign className="w-4 h-4" />} label="Payroll" />
        </nav>

        {/* Account Section */}
        <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2">Account</p>
        <nav className="space-y-1">
          <NavItem icon={<KeyRound className="w-4 h-4" />} label="Change Password" />
          <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
        </nav>
      </div>

      {/* Footer Support & Logout */}
      <div>
        <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl w-full transition mb-4">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>

        <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-3.5 flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-slate-800">Need Help?</p>
            <a href="#support" className="text-blue-600 hover:underline font-medium">Contact HR Support</a>
          </div>
        </div>

        <p className="text-[11px] text-center text-slate-400 font-medium">© 2026 Dayflow HRMS</p>
      </div>
    </aside>
  );
}

function NavItem({ icon, label }) {
  return (
    <button className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-xs font-semibold w-full transition">
      {icon}
      <span>{label}</span>
    </button>
  );
}