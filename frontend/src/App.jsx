import React, { useState, useRef } from 'react';
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
  ArrowRight,
  Edit2,
  CheckCircle2,
  Info,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  X,
  Save,
  Camera,
  Eye,
  EyeOff,
  Lock,
  Download,
  Briefcase,
  CreditCard,
  FileCheck,
  ShieldAlert,
  LogIn,
  Clock,
  PlusCircle,
  Calendar
} from 'lucide-react';

export default function DayflowDashboard() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fileInputRef = useRef(null);

  // Security Password
  const [currentAccountPassword, setCurrentAccountPassword] = useState('password123');

  // Attendance State
  const [attendanceStatus, setAttendanceStatus] = useState('not-checked-in');
  const [checkInTime, setCheckInTime] = useState('--:-- --');
  const [checkOutTime, setCheckOutTime] = useState('--:-- --');
  const [totalWorkHours, setTotalWorkHours] = useState('00h 00m');
  const [checkInTimestamp, setCheckInTimestamp] = useState(null);

  // Leave Management State
  const [leaveStats, setLeaveStats] = useState({
    total: 18,
    used: 6,
    pending: 1,
    remaining: 12
  });

  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      type: 'Sick Leave',
      startDate: '2026-08-25',
      endDate: '2026-08-26',
      days: 2,
      remarks: 'Viral fever and doctor consultation',
      appliedOn: '20 Aug 2026',
      status: 'Pending'
    },
    {
      id: 2,
      type: 'Paid Leave',
      startDate: '2026-07-10',
      endDate: '2026-07-12',
      days: 3,
      remarks: 'Family trip to Puri',
      appliedOn: '01 Jul 2026',
      status: 'Approved'
    }
  ]);

  // Leave Form State
  const [leaveForm, setLeaveForm] = useState({
    type: 'Paid',
    startDate: '',
    endDate: '',
    remarks: ''
  });

  // User Profile Data
  const [userProfile, setUserProfile] = useState({
    name: 'Surajeet Patra',
    email: 'surajeet@example.com',
    phone: '+91 98765 43210',
    dob: '15 Aug 2000',
    gender: 'Male',
    address: 'Plot 42, Tech Park Residency, Bhubaneswar, Odisha',
    emergencyContact: '+91 91234 56789 (Father)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    empId: 'EMP00123',
    department: 'Engineering',
    designation: 'Frontend Developer',
    doj: '01 Jan 2024',
    manager: 'Rohit Sharma',
    employmentType: 'Full-time (Permanent)',
    workLocation: 'Smart Office / Hybrid',
    salary: {
      ctc: '₹ 6,00,000 / annum',
      basic: '₹ 25,000',
      hra: '₹ 12,000',
      specialAllowance: '₹ 8,000',
      pfDeduction: '₹ 1,800',
      professionalTax: '₹ 200',
      netSalary: '₹ 45,000 / month'
    },
    documents: [
      { id: 1, name: 'National ID (Aadhaar / Passport)', type: 'PDF', date: '02 Jan 2024', status: 'Verified' },
      { id: 2, name: 'PAN Card Copy', type: 'PDF', date: '02 Jan 2024', status: 'Verified' },
      { id: 3, name: 'Appointment & Offer Letter', type: 'PDF', date: '01 Jan 2024', status: 'Verified' },
      { id: 4, name: 'Degree & Educational Certificates', type: 'PDF', date: '03 Jan 2024', status: 'Verified' }
    ]
  });

  const [editFormData, setEditFormData] = useState({
    phone: userProfile.phone,
    address: userProfile.address,
    emergencyContact: userProfile.emergencyContact,
    avatar: userProfile.avatar
  });

  // Check In Handler
  const handleCheckIn = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    setCheckInTime(timeString);
    setCheckInTimestamp(now);
    setAttendanceStatus('checked-in');
  };

  // Check Out Handler
  const handleCheckOut = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    setCheckOutTime(timeString);
    setAttendanceStatus('checked-out');

    if (checkInTimestamp) {
      const diffMs = now - checkInTimestamp;
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      setTotalWorkHours(`${String(diffHrs).padStart(2, '0')}h ${String(diffMins).padStart(2, '0')}m`);
    } else {
      setTotalWorkHours('08h 30m');
    }
  };

  // Handle Leave Submission
  const handleApplyLeave = (e) => {
    e.preventDefault();
    if (!leaveForm.startDate || !leaveForm.endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    const start = new Date(leaveForm.startDate);
    const end = new Date(leaveForm.endDate);

    if (end < start) {
      alert('End date cannot be earlier than start date.');
      return;
    }

    const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    const newRequest = {
      id: Date.now(),
      type: `${leaveForm.type} Leave`,
      startDate: leaveForm.startDate,
      endDate: leaveForm.endDate,
      days: diffDays,
      remarks: leaveForm.remarks || 'No remarks provided',
      appliedOn: 'Today',
      status: 'Pending'
    };

    setLeaveRequests([newRequest, ...leaveRequests]);
    setLeaveStats((prev) => ({ ...prev, pending: prev.pending + 1 }));
    setShowLeaveModal(false);
    setLeaveForm({ type: 'Paid', startDate: '', endDate: '', remarks: '' });
    alert(`Leave request for ${diffDays} day(s) submitted successfully!`);
  };

  const handleOpenPopup = () => {
    setEditFormData({
      phone: userProfile.phone,
      address: userProfile.address,
      emergencyContact: userProfile.emergencyContact,
      avatar: userProfile.avatar
    });
    setShowEditPopup(true);
    setIsMobileMenuOpen(false);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditFormData((prev) => ({ ...prev, avatar: imageUrl }));
    }
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUserProfile((prev) => ({
      ...prev,
      phone: editFormData.phone,
      address: editFormData.address,
      emergencyContact: editFormData.emergencyContact,
      avatar: editFormData.avatar
    }));
    setShowEditPopup(false);
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      alert('Logged out successfully!');
      setCurrentPage('dashboard');
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-800 font-sans relative">
      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 fixed h-full z-40 select-none transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between px-3 py-4 mb-4">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavigate('dashboard')}
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-200">
                <span className="text-xl">👥</span>
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight text-slate-900 tracking-tight">Dayflow</h1>
                <p className="text-[11px] font-semibold text-slate-400 tracking-wider">HRMS</p>
              </div>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Section */}
          <div 
            onClick={() => handleNavigate('dashboard')}
            className={`rounded-xl px-4 py-2.5 flex items-center gap-3 font-medium text-sm mb-6 cursor-pointer transition ${
              currentPage === 'dashboard' 
                ? 'bg-blue-50 text-blue-600 font-semibold' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </div>

          {/* Main Navigation */}
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2">Main</p>
          <nav className="space-y-1 mb-6">
            <NavItem 
              icon={<User className="w-4 h-4" />} 
              label="Profile (3.3.1)" 
              active={currentPage === 'profile'} 
              onClick={() => handleNavigate('profile')} 
            />
            <NavItem 
              icon={<CalendarCheck className="w-4 h-4" />} 
              label="Attendance" 
              active={currentPage === 'attendance'} 
              onClick={() => handleNavigate('attendance')} 
            />
            <NavItem 
              icon={<FileText className="w-4 h-4" />} 
              label="Leave Requests" 
              active={currentPage === 'leaves'} 
              onClick={() => handleNavigate('leaves')} 
            />
            <NavItem 
              icon={<DollarSign className="w-4 h-4" />} 
              label="Payroll" 
              active={currentPage === 'payroll'} 
              onClick={() => handleNavigate('payroll')} 
            />
          </nav>

          {/* Account Navigation */}
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2">Account</p>
          <nav className="space-y-1">
            <NavItem 
              icon={<KeyRound className="w-4 h-4" />} 
              label="Change Password" 
              active={currentPage === 'password'} 
              onClick={() => handleNavigate('password')} 
            />
            <NavItem 
              icon={<Settings className="w-4 h-4" />} 
              label="Settings" 
              active={currentPage === 'settings'} 
              onClick={() => handleNavigate('settings')} 
            />
          </nav>
        </div>

        {/* Bottom Sidebar */}
        <div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl w-full transition mb-4 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>

          <p className="text-[11px] text-center text-slate-400 font-medium">© 2026 Dayflow HRMS</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 w-full max-w-full overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-200 mb-6 sm:mb-8">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3 ml-auto">
            {/* Quick Header Check-in / Check-out Button */}
            {attendanceStatus === 'not-checked-in' && (
              <button
                onClick={handleCheckIn}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm shadow-emerald-200 transition cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" /> Check In
              </button>
            )}

            {attendanceStatus === 'checked-in' && (
              <button
                onClick={handleCheckOut}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm shadow-rose-200 transition animate-pulse cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" /> Check Out
              </button>
            )}

            {attendanceStatus === 'checked-out' && (
              <span className="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Completed
              </span>
            )}

            <button
              onClick={() => setShowLeaveModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" /> Apply Leave
            </button>

            <div 
              className="relative cursor-pointer ml-2"
              onClick={() => alert("You have 3 notifications")}
            >
              <Bell className="w-5 h-5 text-slate-500 hover:text-slate-700 transition" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                3
              </span>
            </div>

            <div 
              onClick={() => handleNavigate('profile')}
              className="flex items-center gap-2 sm:gap-3 border-l pl-3 sm:pl-4 border-slate-200 cursor-pointer"
              title="View full profile"
            >
              <img
                src={userProfile.avatar}
                alt="Profile"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-blue-500/20"
              />
              <div className="text-right leading-tight hidden sm:block">
                <h4 className="text-sm font-semibold text-slate-800">{userProfile.name}</h4>
                <p className="text-[11px] text-slate-400">{userProfile.designation}</p>
              </div>
            </div>
          </div>
        </header>

        {/* 1. DASHBOARD VIEW */}
        {currentPage === 'dashboard' && (
          <>
            {/* Greeting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  Good morning, {userProfile.name.split(' ')[0]}! <span>👋</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Here's what's happening with your work today.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-xs w-fit">
                <CalendarCheck className="w-4 h-4 text-slate-400" />
                <span>Saturday, 22 August 2026</span>
              </div>
            </div>

            {/* Quick Access Cards */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-sm font-bold text-slate-800 mb-3">Quick Access</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <QuickActionCard
                  icon={<User className="w-5 h-5 text-white" />}
                  iconBg="bg-blue-600"
                  title="Profile (3.3.1)"
                  desc="View personal, job, salary structure & documents"
                  btnText="View Profile"
                  btnColor="text-blue-600 hover:bg-blue-50"
                  onClick={() => handleNavigate('profile')}
                />
                <QuickActionCard
                  icon={<CalendarCheck className="w-5 h-5 text-white" />}
                  iconBg="bg-emerald-500"
                  title="Attendance"
                  desc="Track your attendance and working hours"
                  btnText="View Attendance"
                  btnColor="text-emerald-600 hover:bg-emerald-50"
                  onClick={() => handleNavigate('attendance')}
                />
                <QuickActionCard
                  icon={<FileText className="w-5 h-5 text-white" />}
                  iconBg="bg-amber-500"
                  title="Leave Requests"
                  desc="Apply for leave and track requests"
                  btnText="Apply Leave"
                  btnColor="text-amber-600 hover:bg-amber-50"
                  onClick={() => setShowLeaveModal(true)}
                />
                <QuickActionCard
                  icon={<LogOut className="w-5 h-5 text-white" />}
                  iconBg="bg-rose-500"
                  title="Logout"
                  desc="Sign out from your account securely"
                  btnText="Logout"
                  btnColor="text-rose-600 hover:bg-rose-50"
                  onClick={handleLogout}
                />
              </div>
            </div>

            {/* Row 1: Profile Summary & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6">
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">Profile Summary</h3>
                  <button 
                    onClick={() => handleNavigate('profile')}
                    className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    Full Profile <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <img
                      src={userProfile.avatar}
                      alt={userProfile.name}
                      className="w-20 h-20 rounded-full object-cover mb-3 ring-2 ring-slate-100 shadow-sm"
                    />
                    <button 
                      onClick={handleOpenPopup}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition cursor-pointer"
                    >
                      <Edit2 className="w-3 h-3" /> Edit (3.3.2)
                    </button>
                  </div>

                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-y-3 text-xs">
                    <div>
                      <span className="text-slate-400 block mb-0.5">Employee ID</span>
                      <span className="font-semibold text-slate-800">{userProfile.empId}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">Full Name</span>
                      <span className="font-semibold text-slate-800">{userProfile.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">Email</span>
                      <span className="font-semibold text-slate-800 break-all">{userProfile.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">Phone</span>
                      <span className="font-semibold text-slate-800">{userProfile.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">Department</span>
                      <span className="font-semibold text-slate-800">{userProfile.department}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">Designation</span>
                      <span className="font-semibold text-slate-800">{userProfile.designation}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">Recent Activity</h3>
                    <button onClick={() => handleNavigate('attendance')} className="text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer">View All</button>
                  </div>

                  <div className="space-y-3.5">
                    <ActivityItem
                      icon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      title={attendanceStatus === 'checked-in' ? `Checked in at ${checkInTime}` : 'Attendance ready'}
                      time={attendanceStatus === 'checked-in' ? 'Today, Live' : 'Today, 09:15 AM'}
                    />
                    <ActivityItem
                      icon={<FileText className="w-4 h-4 text-amber-500" />}
                      title={`Leave request for ${leaveRequests[0]?.type || 'Leave'} is ${leaveRequests[0]?.status}`}
                      time={leaveRequests[0]?.appliedOn || 'Today'}
                    />
                    <ActivityItem
                      icon={<Info className="w-4 h-4 text-blue-500" />}
                      title="Profile information verified"
                      time="Recently updated"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Attendance Overview & Leave Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6">
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">Weekly Attendance</h3>
                    <p className="text-[11px] text-slate-400">August 2026 • Week 4</p>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-100 transition">
                    This Week <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="overflow-x-auto pb-3 mb-5">
                  <div className="flex justify-between items-center min-w-[340px] px-2">
                    <RoundDayItem day="Mon" date="17" status="present" />
                    <RoundDayItem day="Tue" date="18" status="present" />
                    <RoundDayItem day="Wed" date="19" status="half" />
                    <RoundDayItem day="Thu" date="20" status="present" />
                    <RoundDayItem day="Fri" date="21" status="present" />
                    <RoundDayItem 
                      day="Sat" 
                      date="22" 
                      status={attendanceStatus === 'not-checked-in' ? 'today-pending' : 'present'} 
                      isToday 
                    />
                    <RoundDayItem day="Sun" date="23" status="weekend" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-100 pt-4 gap-4 text-xs">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="#f1f5f9" strokeWidth="4" fill="transparent" />
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke={attendanceStatus === 'checked-out' ? '#10b981' : '#2563eb'}
                          strokeWidth="4"
                          strokeDasharray="125.6"
                          strokeDashoffset={125.6 - (125.6 * (attendanceStatus === 'checked-out' ? 100 : attendanceStatus === 'checked-in' ? 45 : 0)) / 100}
                          strokeLinecap="round"
                          fill="transparent"
                          className="transition-all duration-700 ease-out"
                        />
                      </svg>
                      <span className="absolute text-[10px] font-black text-slate-700">
                        {attendanceStatus === 'checked-out' ? '100%' : attendanceStatus === 'checked-in' ? '45%' : '0%'}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] font-medium">Daily Target (09 hrs)</span>
                      <span className="font-bold text-slate-800 text-sm">{totalWorkHours}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-left">
                      <span className="text-slate-400 block text-[10px]">Check-in</span>
                      <span className="font-bold text-slate-700 text-xs">{checkInTime}</span>
                    </div>
                    <div className="text-left">
                      <span className="text-slate-400 block text-[10px]">Check-out</span>
                      <span className="font-bold text-slate-700 text-xs">{checkOutTime}</span>
                    </div>
                    <button 
                      onClick={() => handleNavigate('attendance')}
                      className="text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full flex items-center gap-1 transition cursor-pointer"
                    >
                      Logs <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Leave Summary Card */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">Leave Summary</h3>
                    <button 
                      onClick={() => setShowLeaveModal(true)} 
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <PlusCircle className="w-3.5 h-3.5" /> Apply
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    <LeaveStatCard title="Total" count={leaveStats.total} sub="days" bg="bg-blue-50/60" text="text-blue-600" />
                    <LeaveStatCard title="Used" count={leaveStats.used} sub="days" bg="bg-slate-50" text="text-slate-800" />
                    <LeaveStatCard title="Pending" count={leaveStats.pending} sub="day" bg="bg-amber-50/60" text="text-amber-600" />
                    <LeaveStatCard title="Remaining" count={leaveStats.remaining} sub="days" bg="bg-emerald-50/60" text="text-emerald-600" />
                  </div>

                  {leaveRequests.length > 0 && (
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-slate-800">{leaveRequests[0].type}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          leaveRequests[0].status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {leaveRequests[0].status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px]">{leaveRequests[0].startDate} to {leaveRequests[0].endDate} ({leaveRequests[0].days} days)</p>
                      <p className="text-slate-500 text-[11px] truncate mt-0.5">{leaveRequests[0].remarks}</p>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => handleNavigate('leaves')}
                  className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline pt-2 cursor-pointer"
                >
                  View All Leave History <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Row 3: Alerts & Payroll Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-8">
              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
                <h3 className="font-bold text-slate-800 mb-4 text-sm sm:text-base">Alerts</h3>
                <div className="space-y-3 text-xs">
                  <div className="bg-amber-50/70 border border-amber-100 p-3 rounded-xl flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800">Pending Leave Request</h4>
                      <p className="text-slate-500">Your leave request for {leaveRequests[0]?.startDate || 'upcoming date'} is pending approval.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50/70 border border-blue-100 p-3 rounded-xl flex items-start gap-3">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800">Attendance Reminder</h4>
                      <p className="text-slate-500">
                        {attendanceStatus === 'not-checked-in' 
                          ? "Don't forget to mark your check-in today." 
                          : "Check-in recorded! Remember to check out before leaving."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800">Profile Update</h4>
                      <p className="text-slate-500">Your profile is up to date.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">Payroll Overview</h3>
                    <button 
                      onClick={() => handleNavigate('payroll')}
                      className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      View Payslip History <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="bg-blue-50/50 border border-blue-100 text-blue-600 rounded-xl p-2.5 flex items-center gap-2 text-xs font-medium mb-4">
                    <Info className="w-4 h-4 shrink-0" />
                    <span>Payroll details are read-only. For any queries, contact HR.</span>
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

                <button 
                  onClick={() => handleNavigate('payroll')}
                  className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  View Payslip <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </>
        )}

        {/* 2. LEAVE REQUESTS SCREEN */}
        {currentPage === 'leaves' && (
          <LeaveManagementView 
            leaveStats={leaveStats}
            leaveRequests={leaveRequests}
            onOpenApplyModal={() => setShowLeaveModal(true)}
            onBack={() => handleNavigate('dashboard')}
          />
        )}

        {/* 3. ATTENDANCE MANAGEMENT TAB VIEW */}
        {currentPage === 'attendance' && (
          <AttendanceTrackingView 
            status={attendanceStatus}
            checkInTime={checkInTime}
            checkOutTime={checkOutTime}
            totalHours={totalWorkHours}
            onCheckIn={handleCheckIn}
            onCheckOut={handleCheckOut}
            onBack={() => handleNavigate('dashboard')}
          />
        )}

        {/* 4. PROFILE MANAGEMENT (3.3.1 & 3.3.2) */}
        {currentPage === 'profile' && (
          <FullProfileManagementView 
            userProfile={userProfile}
            onOpenEditPopup={handleOpenPopup}
            onBack={() => handleNavigate('dashboard')}
          />
        )}

        {/* 5. CHANGE PASSWORD VIEW */}
        {currentPage === 'password' && (
          <ChangePasswordView 
            currentActualPassword={currentAccountPassword} 
            onPasswordUpdated={(newPass) => {
              setCurrentAccountPassword(newPass);
              setCurrentPage('dashboard');
            }} 
            onBack={() => handleNavigate('dashboard')} 
          />
        )}

        {/* Generic Sub-views */}
        {currentPage !== 'dashboard' && currentPage !== 'profile' && currentPage !== 'password' && currentPage !== 'attendance' && currentPage !== 'leaves' && (
          <GenericPageView 
            title={currentPage.toUpperCase()} 
            desc={`Management console for ${currentPage}.`}
            onBack={() => handleNavigate('dashboard')} 
          />
        )}

        {/* Footer */}
        <div className="bg-blue-50/60 border border-blue-100 rounded-xl py-3 text-center mt-6">
          <p className="text-xs font-semibold text-blue-600">
            "Stay focused, stay consistent, and success will follow."
          </p>
        </div>
      </main>

      {/* ===================== APPLY FOR LEAVE MODAL ===================== */}
      {showLeaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-3 sm:p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in">
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Apply for Leave</h3>
                  <p className="text-[11px] text-slate-400">Submit a new leave request to HR</p>
                </div>
              </div>
              <button 
                onClick={() => setShowLeaveModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleApplyLeave} className="p-6 space-y-4">
              {/* 1. Leave Type (Paid, Sick, Unpaid) */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Leave Type</label>
                <select
                  value={leaveForm.type}
                  onChange={(e) => setLeaveForm({ ...leaveForm, type: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800 bg-white"
                  required
                >
                  <option value="Paid">Paid Leave (Casual / Vacation)</option>
                  <option value="Sick">Sick Leave (Medical)</option>
                  <option value="Unpaid">Unpaid Leave (Loss of Pay)</option>
                </select>
              </div>

              {/* 2. Date Range */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-600 mb-1.5">Start Date</label>
                  <input
                    type="date"
                    value={leaveForm.startDate}
                    onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-600 mb-1.5">End Date</label>
                  <input
                    type="date"
                    value={leaveForm.endDate}
                    onChange={(e) => setLeaveForm({ ...leaveForm, endDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium"
                    required
                  />
                </div>
              </div>

              {/* 3. Remarks */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Remarks / Reason</label>
                <textarea
                  rows={3}
                  value={leaveForm.remarks}
                  onChange={(e) => setLeaveForm({ ...leaveForm, remarks: e.target.value })}
                  placeholder="Provide reason for leave (e.g. Doctor appointment, family function...)"
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800 resize-none"
                  required
                />
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowLeaveModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 transition cursor-pointer"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== 3.3.2 EDIT PROFILE MODAL ===================== */}
      {showEditPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-3 sm:p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center px-4 sm:px-6 py-3.5 border-b border-slate-100 bg-slate-50/50 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Edit Profile (3.3.2)</h3>
                  <p className="text-[10px] text-slate-400">Employees can only update address, phone & profile picture</p>
                </div>
              </div>
              <button 
                onClick={handleClosePopup}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="p-4 sm:p-6 space-y-4 overflow-y-auto">
              <div className="flex items-center gap-3 sm:gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="relative group shrink-0">
                  <img
                    src={editFormData.avatar}
                    alt="Preview"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-blue-500 shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition cursor-pointer"
                  >
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                <div className="flex-1">
                  <h4 className="text-xs font-bold text-slate-800">Profile Picture</h4>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    className="mt-1 flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold shadow-xs cursor-pointer"
                  >
                    <Camera className="w-3 h-3 text-blue-600" /> Upload New Photo
                  </button>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Phone Number (Editable)</label>
                  <input
                    type="text"
                    value={editFormData.phone}
                    onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-blue-200 bg-blue-50/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Residential Address (Editable)</label>
                  <textarea
                    rows={2}
                    value={editFormData.address}
                    onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
                    className="w-full px-3 py-2 border border-blue-200 bg-blue-50/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Emergency Contact (Editable)</label>
                  <input
                    type="text"
                    value={editFormData.emergencyContact}
                    onChange={(e) => setEditFormData({ ...editFormData, emergencyContact: e.target.value })}
                    className="w-full px-3 py-2 border border-blue-200 bg-blue-50/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 flex items-center gap-2 text-amber-700 text-[11px] font-medium mb-3">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>Name, Email, Job Details & Salary are restricted and can only be altered by HR.</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------------- LEAVE MANAGEMENT VIEW ----------------- */

function LeaveManagementView({ leaveStats, leaveRequests, onOpenApplyModal, onBack }) {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" /> Leave Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">Apply for paid, sick, or unpaid leave and track status in real-time.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenApplyModal}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-200 transition cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" /> Apply for Leave
          </button>
          <button
            onClick={onBack}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold transition cursor-pointer"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Leave Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <LeaveStatCard title="Total Leaves" count={leaveStats.total} sub="days" bg="bg-blue-50/60" text="text-blue-600" />
        <LeaveStatCard title="Used Leaves" count={leaveStats.used} sub="days" bg="bg-slate-50" text="text-slate-800" />
        <LeaveStatCard title="Pending Approvals" count={leaveStats.pending} sub="requests" bg="bg-amber-50/60" text="text-amber-600" />
        <LeaveStatCard title="Remaining Balance" count={leaveStats.remaining} sub="days" bg="bg-emerald-50/60" text="text-emerald-600" />
      </div>

      {/* Leave History Table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <h3 className="font-bold text-slate-800 text-sm mb-4">Leave Application Records</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                <th className="pb-3">Leave Type</th>
                <th className="pb-3">Duration</th>
                <th className="pb-3">Days</th>
                <th className="pb-3">Remarks / Reason</th>
                <th className="pb-3">Applied Date</th>
                <th className="pb-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leaveRequests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-3.5 font-bold text-slate-800">{req.type}</td>
                  <td className="py-3.5 text-slate-600">{req.startDate} to {req.endDate}</td>
                  <td className="py-3.5 font-semibold text-slate-800">{req.days} Day(s)</td>
                  <td className="py-3.5 text-slate-500 max-w-xs truncate">{req.remarks}</td>
                  <td className="py-3.5 text-slate-400">{req.appliedOn}</td>
                  <td className="py-3.5 text-right">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      req.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ----------------- ROUND DAY ITEM ----------------- */

function RoundDayItem({ day, date, status, isToday }) {
  let circleBg = "bg-slate-50 text-slate-400 border border-slate-100";
  let dotColor = "bg-transparent";

  if (status === 'present') {
    circleBg = "bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs";
    dotColor = "bg-emerald-500";
  } else if (status === 'half') {
    circleBg = "bg-amber-50 text-amber-600 border border-amber-200 shadow-xs";
    dotColor = "bg-amber-500";
  } else if (status === 'today-pending') {
    circleBg = "bg-blue-50 text-blue-600 border-2 border-blue-500 shadow-sm";
    dotColor = "bg-blue-500";
  } else if (status === 'weekend') {
    circleBg = "bg-slate-100/70 text-slate-400 border border-slate-200";
  }

  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="text-[11px] font-semibold text-slate-400">{day}</span>
      <div className={`w-10 h-10 rounded-full flex flex-col items-center justify-center font-bold text-xs transition ${circleBg} ${isToday ? 'ring-2 ring-blue-500/20' : ''}`}>
        <span>{date}</span>
      </div>
      <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
    </div>
  );
}

/* ----------------- ATTENDANCE TRACKING VIEW ----------------- */

function AttendanceTrackingView({ status, checkInTime, checkOutTime, totalHours, onCheckIn, onCheckOut, onBack }) {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" /> Attendance Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">Mark your daily check-in, check-out and monitor shift durations.</p>
        </div>

        <div className="flex items-center gap-3">
          {status === 'not-checked-in' && (
            <button
              onClick={onCheckIn}
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-200 transition cursor-pointer"
            >
              <LogIn className="w-4 h-4" /> Check In Now
            </button>
          )}

          {status === 'checked-in' && (
            <button
              onClick={onCheckOut}
              className="flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md shadow-rose-200 transition animate-pulse cursor-pointer"
            >
              <LogOut className="w-4 h-4" /> Check Out Now
            </button>
          )}

          {status === 'checked-out' && (
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold">
              ✓ Day Completed
            </span>
          )}

          <button
            onClick={onBack}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold transition cursor-pointer"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <span className="text-[11px] font-semibold text-slate-400 block mb-1">Check-in Time</span>
          <h3 className="text-xl font-bold text-slate-800">{checkInTime}</h3>
          <span className="text-[10px] text-emerald-600 font-semibold">{status !== 'not-checked-in' ? 'Recorded' : 'Awaiting punch'}</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <span className="text-[11px] font-semibold text-slate-400 block mb-1">Check-out Time</span>
          <h3 className="text-xl font-bold text-slate-800">{checkOutTime}</h3>
          <span className="text-[10px] text-slate-400 font-semibold">{status === 'checked-out' ? 'Recorded' : 'Pending punch'}</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <span className="text-[11px] font-semibold text-slate-400 block mb-1">Effective Working Hours</span>
          <h3 className="text-xl font-black text-blue-600">{totalHours}</h3>
          <span className="text-[10px] text-slate-400 font-semibold">Target: 08h 30m</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------- 3.3.1 VIEW PROFILE FULL COMPONENT ----------------- */

function FullProfileManagementView({ userProfile, onOpenEditPopup, onBack }) {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-24 h-24 rounded-2xl object-cover ring-4 ring-blue-50 shadow-md"
          />
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="text-xl font-bold text-slate-900">{userProfile.name}</h2>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-blue-100">
                {userProfile.empId}
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">{userProfile.designation} • {userProfile.department}</p>
            <p className="text-[11px] text-slate-400 mt-1">Reporting to: <span className="font-semibold text-slate-700">{userProfile.manager}</span></p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEditPopup}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-200 transition cursor-pointer"
          >
            <Edit2 className="w-3.5 h-3.5" /> Edit Profile (3.3.2)
          </button>
          <button
            onClick={onBack}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold transition cursor-pointer"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="flex border-b border-slate-200 space-x-2 overflow-x-auto pb-1">
        <TabButton active={activeTab === 'personal'} onClick={() => setActiveTab('personal')} icon={<User className="w-4 h-4" />} label="Personal Details" />
        <TabButton active={activeTab === 'job'} onClick={() => setActiveTab('job')} icon={<Briefcase className="w-4 h-4" />} label="Job Details" />
        <TabButton active={activeTab === 'salary'} onClick={() => setActiveTab('salary')} icon={<CreditCard className="w-4 h-4" />} label="Salary Structure" />
        <TabButton active={activeTab === 'documents'} onClick={() => setActiveTab('documents')} icon={<FileCheck className="w-4 h-4" />} label="Documents" />
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <InfoItem label="Full Name" value={userProfile.name} />
            <InfoItem label="Email Address" value={userProfile.email} />
            <InfoItem label="Mobile Number" value={userProfile.phone} highlight />
            <InfoItem label="Date of Birth" value={userProfile.dob} />
            <InfoItem label="Gender" value={userProfile.gender} />
            <InfoItem label="Emergency Contact" value={userProfile.emergencyContact} highlight />
            <div className="sm:col-span-2 lg:col-span-3">
              <InfoItem label="Residential Address" value={userProfile.address} highlight />
            </div>
          </div>
        )}

        {activeTab === 'job' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <InfoItem label="Employee ID" value={userProfile.empId} />
            <InfoItem label="Department" value={userProfile.department} />
            <InfoItem label="Designation" value={userProfile.designation} />
            <InfoItem label="Date of Joining" value={userProfile.doj} />
            <InfoItem label="Employment Type" value={userProfile.employmentType} />
            <InfoItem label="Work Location" value={userProfile.workLocation} />
            <InfoItem label="Reporting Manager" value={userProfile.manager} />
            <InfoItem label="Employment Status" value="Active (Permanent)" isBadge />
          </div>
        )}

        {activeTab === 'salary' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2.5">
              <h4 className="font-bold text-slate-700 pb-2 border-b border-slate-200">Earnings</h4>
              <div className="flex justify-between"><span className="text-slate-500">Basic Pay</span><span className="font-semibold text-slate-800">{userProfile.salary.basic}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">HRA</span><span className="font-semibold text-slate-800">{userProfile.salary.hra}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Special Allowance</span><span className="font-semibold text-slate-800">{userProfile.salary.specialAllowance}</span></div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2.5">
              <h4 className="font-bold text-slate-700 pb-2 border-b border-slate-200">Monthly Deductions</h4>
              <div className="flex justify-between"><span className="text-slate-500">PF</span><span className="font-semibold text-rose-600">- {userProfile.salary.pfDeduction}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Professional Tax</span><span className="font-semibold text-rose-600">- {userProfile.salary.professionalTax}</span></div>
              <div className="flex justify-between pt-2 border-t border-slate-200"><span className="font-bold text-slate-800">Net Take-Home</span><span className="font-black text-emerald-600 text-sm">{userProfile.salary.netSalary}</span></div>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="space-y-3">
            {userProfile.documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">{doc.type}</div>
                  <div>
                    <p className="font-semibold text-slate-800 text-xs">{doc.name}</p>
                    <p className="text-[10px] text-slate-400">Uploaded {doc.date} • <span className="text-emerald-600 font-semibold">{doc.status}</span></p>
                  </div>
                </div>
                <button onClick={() => alert(`Downloading ${doc.name}...`)} className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold shadow-xs transition cursor-pointer">
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ----------------- CHANGE PASSWORD VIEW ----------------- */

function ChangePasswordView({ currentActualPassword, onPasswordUpdated, onBack }) {
  const [passData, setPassData] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (passData.oldPassword !== currentActualPassword) {
      setErrorMsg('Current password is incorrect! (Default: password123)');
      return;
    }
    if (passData.newPassword.length < 6) {
      setErrorMsg('New password must be at least 6 characters long.');
      return;
    }
    if (passData.newPassword !== passData.confirmPassword) {
      setErrorMsg('New password and Confirm password do not match.');
      return;
    }

    setSuccessMsg('Password changed successfully! Redirecting...');
    setTimeout(() => {
      onPasswordUpdated(passData.newPassword);
    }, 1200);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-xs max-w-2xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><Lock className="w-5 h-5" /></div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Change Password</h2>
            <p className="text-xs text-slate-400">Ensure your account uses a secure password</p>
          </div>
        </div>
        <button onClick={onBack} className="px-3 py-1.5 bg-blue-50 text-blue-600 font-semibold text-xs rounded-xl hover:bg-blue-100 transition cursor-pointer">← Back</button>
      </div>

      {errorMsg && <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-xs font-semibold">{errorMsg}</div>}
      {successMsg && <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold">{successMsg}</div>}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Current Password</label>
          <div className="relative">
            <input type={showOld ? 'text' : 'password'} value={passData.oldPassword} onChange={(e) => setPassData({ ...passData, oldPassword: e.target.value })} className="w-full text-xs px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" required />
            <button type="button" onClick={() => setShowOld(!showOld)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer">{showOld ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">New Password</label>
          <div className="relative">
            <input type={showNew ? 'text' : 'password'} value={passData.newPassword} onChange={(e) => setPassData({ ...passData, newPassword: e.target.value })} className="w-full text-xs px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" required />
            <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer">{showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Confirm New Password</label>
          <div className="relative">
            <input type={showConfirm ? 'text' : 'password'} value={passData.confirmPassword} onChange={(e) => setPassData({ ...passData, confirmPassword: e.target.value })} className="w-full text-xs px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" required />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer">{showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />} </button>
          </div>
        </div>

        <div className="pt-2">
          <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-200 transition cursor-pointer">
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}

/* ----------------- SUB & HELPER COMPONENTS ----------------- */

function GenericPageView({ title, desc, onBack }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">{title}</h2>
          <p className="text-xs text-slate-400 mt-1">{desc}</p>
        </div>
        <button onClick={onBack} className="px-3 py-1.5 bg-blue-50 text-blue-600 font-semibold text-xs rounded-xl hover:bg-blue-100 transition cursor-pointer">← Back to Dashboard</button>
      </div>
      <div className="py-12 text-center text-slate-400 text-xs">Section under active development</div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold w-full transition cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function QuickActionCard({ icon, iconBg, title, desc, btnText, btnColor, onClick }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col justify-between h-40">
      <div>
        <div className={`w-8 h-8 rounded-xl ${iconBg} flex items-center justify-center mb-2.5 shadow-xs`}>{icon}</div>
        <h4 className="font-bold text-slate-800 text-sm mb-0.5">{title}</h4>
        <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">{desc}</p>
      </div>
      <button onClick={onClick} className={`flex items-center gap-1 text-xs font-bold ${btnColor} py-1 px-2 rounded-lg w-fit transition cursor-pointer`}>
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
        <p className="font-semibold text-slate-800 leading-tight">{title}</p>
        <p className="text-[10px] text-slate-400">{time}</p>
      </div>
    </div>
  );
}

function LeaveStatCard({ title, count, sub, bg, text }) {
  return (
    <div className={`${bg} rounded-2xl p-2 sm:p-2.5 text-center border border-slate-100`}>
      <span className="text-[9px] font-semibold text-slate-500 block leading-tight mb-0.5">{title}</span>
      <span className={`text-base sm:text-xl font-black ${text}`}>{count}</span>
      <span className="text-[10px] text-slate-400 ml-1">{sub}</span>
    </div>
  );
}

function InfoItem({ label, value, highlight, isBadge }) {
  return (
    <div>
      <span className="text-slate-400 block mb-1 text-[11px] font-medium">{label}</span>
      {isBadge ? <span className="bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded text-[10px]">{value}</span> : <span className={`font-semibold ${highlight ? 'text-blue-700 font-bold' : 'text-slate-800'}`}>{value}</span>}
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${active ? 'bg-blue-600 text-white shadow-sm shadow-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}