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
  Bell,
  Menu,
  ChevronRight,
  ArrowRight,
  Edit2,
  CheckCircle2,
  Clock,
  Info,
  AlertTriangle,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export default function DayflowDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
      {/* Sidebar */}
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

          {/* Active Section */}
          <div className="bg-blue-50 text-blue-600 rounded-xl px-4 py-2.5 flex items-center gap-3 font-medium text-sm mb-6 cursor-pointer">
            <LayoutDashboard className="w-4 h-4 text-blue-600" />
            <span>Dashboard</span>
          </div>

          {/* Main Navigation */}
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2">Main</p>
          <nav className="space-y-1 mb-6">
            <NavItem icon={<User className="w-4 h-4" />} label="Profile" />
            <NavItem icon={<CalendarCheck className="w-4 h-4" />} label="Attendance" />
            <NavItem icon={<FileText className="w-4 h-4" />} label="Leave Requests" />
            <NavItem icon={<DollarSign className="w-4 h-4" />} label="Payroll" />
          </nav>

          {/* Account Navigation */}
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2">Account</p>
          <nav className="space-y-1">
            <NavItem icon={<KeyRound className="w-4 h-4" />} label="Change Password" />
            <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
          </nav>
        </div>

        {/* Bottom Sidebar Section */}
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

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Top Header */}
        <header className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8">
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition">
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell className="w-5 h-5 text-slate-500 hover:text-slate-700 transition" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                3
              </span>
            </div>

            <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/20"
              />
              <div className="text-right leading-tight">
                <h4 className="text-sm font-semibold text-slate-800">Surajeet Patra</h4>
                <p className="text-[11px] text-slate-400">Frontend Developer</p>
              </div>
            </div>
          </div>
        </header>

        {/* Greeting Banner */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              Good morning, Surajeet! <span className="text-2xl">👋</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">Here's what's happening with your work today.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-sm">
            <CalendarCheck className="w-4 h-4 text-slate-400" />
            <span>Thursday, 22 August 2026</span>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-800 mb-4">Quick Access</h3>
          <div className="grid grid-cols-4 gap-4">
            <QuickActionCard
              icon={<User className="w-5 h-5 text-white" />}
              iconBg="bg-blue-600"
              title="Profile"
              desc="View and update your personal information"
              btnText="View Profile"
              btnColor="text-blue-600 hover:bg-blue-50"
            />
            <QuickActionCard
              icon={<CalendarCheck className="w-5 h-5 text-white" />}
              iconBg="bg-emerald-500"
              title="Attendance"
              desc="Track your attendance and working hours"
              btnText="View Attendance"
              btnColor="text-emerald-600 hover:bg-emerald-50"
            />
            <QuickActionCard
              icon={<FileText className="w-5 h-5 text-white" />}
              iconBg="bg-amber-500"
              title="Leave Requests"
              desc="Apply for leave and track requests"
              btnText="View Leaves"
              btnColor="text-amber-600 hover:bg-amber-50"
            />
            <QuickActionCard
              icon={<LogOut className="w-5 h-5 text-white" />}
              iconBg="bg-rose-500"
              title="Logout"
              desc="Sign out from your account securely"
              btnText="Logout"
              btnColor="text-rose-600 hover:bg-rose-50"
            />
          </div>
        </div>

        {/* Row 1: Profile Summary & Recent Activity */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Profile Summary */}
          <div className="col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800">Profile Summary</h3>
              <a href="#profile" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                View Full Profile <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Surajeet"
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition">
                  <Edit2 className="w-3 h-3" /> Edit Profile
                </button>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Employee ID</span>
                  <span className="font-semibold text-slate-800">EMP00123</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Full Name</span>
                  <span className="font-semibold text-slate-800">Surajeet Patra</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Email</span>
                  <span className="font-semibold text-slate-800">surajeet@example.com</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Phone</span>
                  <span className="font-semibold text-slate-800">+91 98765 43210</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Department</span>
                  <span className="font-semibold text-slate-800">Engineering</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Designation</span>
                  <span className="font-semibold text-slate-800">Frontend Developer</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Date of Joining</span>
                  <span className="font-semibold text-slate-800">01 Jan 2024</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Reporting Manager</span>
                  <span className="font-semibold text-slate-800">Rohit Sharma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-slate-800">Recent Activity</h3>
                <a href="#activity" className="text-xs font-semibold text-slate-500 hover:text-slate-700">View All</a>
              </div>

              <div className="space-y-4">
                <ActivityItem
                  icon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  title="You marked your attendance"
                  time="Today, 09:15 AM"
                />
                <ActivityItem
                  icon={<FileText className="w-4 h-4 text-amber-500" />}
                  title="Leave request for 25 Aug 2026 is pending"
                  time="Today, 10:30 AM"
                />
                <ActivityItem
                  icon={<Info className="w-4 h-4 text-blue-500" />}
                  title="Profile updated successfully"
                  time="Yesterday, 04:45 PM"
                />
                <ActivityItem
                  icon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  title="You marked your attendance"
                  time="Yesterday, 09:10 AM"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Attendance Overview & Leave Summary */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Attendance Overview */}
          <div className="col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-800">Attendance Overview</h3>
              <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg">
                This Week <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Weekly Days Bar */}
            <div className="grid grid-cols-7 gap-2 mb-6 text-center">
              <DayCard day="Mon" date="19" status="Present" active={false} />
              <DayCard day="Tue" date="20" status="Present" active={false} />
              <DayCard day="Wed" date="21" status="Half-day" active={false} isHalfDay />
              <DayCard day="Thu" date="22" status="Present" active={true} />
              <DayCard day="Fri" date="23" status="-" active={false} />
              <DayCard day="Sat" date="24" status="-" active={false} />
              <DayCard day="Sun" date="25" status="-" active={false} />
            </div>

            {/* Day details */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-slate-500">Today's Status</span>
                  <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold text-[10px]">Present</span>
                </div>
                <div className="flex gap-8 mt-2">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Check-in</span>
                    <span className="font-bold text-slate-800">09:15 AM</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Check-out</span>
                    <span className="font-bold text-slate-800">06:20 PM</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Total Hours</span>
                    <span className="font-bold text-slate-800">09h 05m</span>
                  </div>
                </div>
              </div>

              <a href="#attendance" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                View Full Attendance <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Leave Summary */}
          <div className="col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800">Leave Summary</h3>
                <a href="#leaves" className="text-xs font-semibold text-slate-500 hover:text-slate-700">View All</a>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                <LeaveStatCard title="Total Leaves" count="18" sub="days" bg="bg-blue-50/60" text="text-blue-600" />
                <LeaveStatCard title="Used Leaves" count="6" sub="days" bg="bg-slate-50" text="text-slate-800" />
                <LeaveStatCard title="Pending Leaves" count="1" sub="day" bg="bg-amber-50/60" text="text-amber-600" />
                <LeaveStatCard title="Remaining Leaves" count="12" sub="days" bg="bg-emerald-50/60" text="text-emerald-600" />
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-800">Recent Leave Request</span>
                  <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded">Pending</span>
                </div>
                <p className="text-slate-500 font-medium">Sick Leave</p>
                <p className="text-slate-400 text-[11px]">25 Aug 2026 - 26 Aug 2026 (2 days)</p>
                <p className="text-slate-400 text-[11px]">Applied on 20 Aug 2026</p>
              </div>
            </div>

            <a href="#leaves" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline pt-3">
              View All Leaves <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Row 3: Alerts & Payroll Overview */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Alerts */}
          <div className="col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Alerts</h3>
            <div className="space-y-3 text-xs">
              <div className="bg-amber-50/70 border border-amber-100 p-3 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Pending Leave Request</h4>
                  <p className="text-slate-500">Your leave request for 25 Aug 2026 is pending approval.</p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-100 p-3 rounded-xl flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Attendance Reminder</h4>
                  <p className="text-slate-500">Don't forget to mark your attendance today.</p>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Profile Update</h4>
                  <p className="text-slate-500">Your profile was updated successfully.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payroll Overview */}
          <div className="col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-slate-800">Payroll Overview</h3>
                <a href="#payroll" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                  View Payslip History <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-blue-50/50 border border-blue-100 text-blue-600 rounded-xl p-2.5 flex items-center gap-2 text-xs font-medium mb-4">
                <Info className="w-4 h-4 shrink-0" />
                <span>Payroll details are read-only. For any queries, contact the HR department.</span>
              </div>

              <div className="flex items-end justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-400">Last Salary Slip</span>
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded">Paid</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-800">₹ 45,000</h2>
                  <span className="text-[11px] text-slate-400">July 2026</span>
                </div>

                <div className="text-right text-xs space-y-1">
                  <div>
                    <span className="text-slate-400 mr-2">Net Pay:</span>
                    <span className="font-bold text-slate-800">₹ 45,000</span>
                  </div>
                  <div>
                    <span className="text-slate-400 mr-2">Paid On:</span>
                    <span className="font-semibold text-slate-800">05 Aug 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="#payslip" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
              View Payslip <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Motivational Footer */}
        <div className="bg-blue-50/60 border border-blue-100 rounded-xl py-3 text-center">
          <p className="text-xs font-semibold text-blue-600">
            "Stay focused, stay consistent, and success will follow."
          </p>
        </div>
      </main>
    </div>
  );
}

/* Helper Components */

function NavItem({ icon, label }) {
  return (
    <button className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-xs font-semibold w-full transition">
      {icon}
      <span>{label}</span>
    </button>
  );
}

function QuickActionCard({ icon, iconBg, title, desc, btnText, btnColor }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between h-44">
      <div>
        <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center mb-3 shadow-sm`}>
          {icon}
        </div>
        <h4 className="font-bold text-slate-800 text-sm mb-1">{title}</h4>
        <p className="text-[11px] text-slate-400 leading-snug">{desc}</p>
      </div>
      <button className={`flex items-center gap-1 text-xs font-bold ${btnColor} py-1 px-2 rounded-lg w-fit transition`}>
        {btnText} <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

function ActivityItem({ icon, title, time }) {
  return (
    <div className="flex items-start gap-3 text-xs">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-slate-800">{title}</p>
        <p className="text-[11px] text-slate-400">{time}</p>
      </div>
    </div>
  );
}

function DayCard({ day, date, status, active, isHalfDay }) {
  return (
    <div
      className={`border rounded-xl p-2 flex flex-col items-center justify-center ${
        active ? 'border-blue-500 bg-blue-50/30' : 'border-slate-200 bg-white'
      }`}
    >
      <span className="text-[10px] text-slate-400 font-medium">{day}</span>
      <span className={`text-sm font-bold my-0.5 ${active ? 'text-blue-600' : 'text-slate-800'}`}>{date}</span>
      <span
        className={`text-[9px] font-bold px-1 rounded ${
          status === 'Present'
            ? 'text-emerald-600 bg-emerald-50'
            : isHalfDay
            ? 'text-amber-600 bg-amber-50'
            : 'text-slate-400'
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function LeaveStatCard({ title, count, sub, bg, text }) {
  return (
    <div className={`${bg} rounded-xl p-2.5 text-center border border-slate-100`}>
      <span className="text-[9px] font-semibold text-slate-500 block leading-tight mb-1">{title}</span>
      <span className={`text-xl font-black ${text}`}>{count}</span>
      <span className="text-[10px] text-slate-400 ml-1">{sub}</span>
    </div>
  );
}