import React, { useState, useRef, useEffect } from 'react';
import {
    LayoutDashboard,
    Users,
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
    XCircle,
    Info,
    AlertTriangle,
    HelpCircle,
    ChevronDown,
    X,
    Save,
    Camera,
    Search,
    UserPlus,
    Trash2,
    Check,
    Briefcase,
    CreditCard,
    Building,
    ShieldCheck,
    Eye,
    PlusCircle,
    MessageSquareText,
    SlidersHorizontal
} from 'lucide-react';

export default function DayflowAdminHRApp() {
    const [currentTab, setCurrentTab] = useState('employees'); // 'employees' | 'leaves' | 'attendance' | 'payroll'
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');

    // Modals State
    const [showEditEmpModal, setShowEditEmpModal] = useState(false);
    const [showPayrollModal, setShowPayrollModal] = useState(false);
    const [showLeaveRemarkModal, setShowLeaveRemarkModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedLeaveReq, setSelectedLeaveReq] = useState(null);
    const [adminRemarkText, setAdminRemarkText] = useState('');
    const [leaveActionType, setLeaveActionType] = useState('Approved');

    // 1. Central Employees Database
    const [employees, setEmployees] = useState([
        {
            id: 'EMP00123',
            name: 'Surajeet Patra',
            email: 'surajeet@example.com',
            phone: '+91 98765 43210',
            department: 'Engineering',
            designation: 'Frontend Developer',
            status: 'Active',
            doj: '01 Jan 2024',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
            checkIn: '09:15 AM',
            checkOut: '--:--',
            attendanceToday: 'Present',
            salary: {
                ctc: '₹ 6,00,000',
                basic: 25000,
                hra: 12000,
                special: 8000,
                pf: 1800,
                pt: 200,
                netPay: 43000
            }
        },
        {
            id: 'EMP00124',
            name: 'Ananya Sharma',
            email: 'ananya@example.com',
            phone: '+91 98111 22334',
            department: 'Design',
            designation: 'UI/UX Designer',
            status: 'Active',
            doj: '15 Feb 2024',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
            checkIn: '09:05 AM',
            checkOut: '06:00 PM',
            attendanceToday: 'Present',
            salary: {
                ctc: '₹ 5,50,000',
                basic: 22000,
                hra: 10000,
                special: 7000,
                pf: 1800,
                pt: 200,
                netPay: 37000
            }
        },
        {
            id: 'EMP00125',
            name: 'Rohan Verma',
            email: 'rohan@example.com',
            phone: '+91 97222 33445',
            department: 'Engineering',
            designation: 'Backend Developer',
            status: 'On Leave',
            doj: '10 Nov 2023',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
            checkIn: '--:--',
            checkOut: '--:--',
            attendanceToday: 'On Leave',
            salary: {
                ctc: '₹ 7,00,000',
                basic: 30000,
                hra: 14000,
                special: 9000,
                pf: 1800,
                pt: 200,
                netPay: 51000
            }
        },
        {
            id: 'EMP00126',
            name: 'Pooja Nair',
            email: 'pooja@example.com',
            phone: '+91 96333 44556',
            department: 'Human Resources',
            designation: 'HR Executive',
            status: 'Active',
            doj: '05 Mar 2024',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
            checkIn: '09:30 AM',
            checkOut: '--:--',
            attendanceToday: 'Present',
            salary: {
                ctc: '₹ 4,80,000',
                basic: 19000,
                hra: 9000,
                special: 6000,
                pf: 1800,
                pt: 200,
                netPay: 32000
            }
        }
    ]);

    // 2. Central Leave Database
    const [leaveApplications, setLeaveApplications] = useState([
        {
            id: 1,
            empId: 'EMP00123',
            empName: 'Surajeet Patra',
            type: 'Sick Leave',
            dates: '25 Aug 2026 - 26 Aug 2026',
            days: 2,
            reason: 'Viral fever and doctor consultation',
            appliedOn: '20 Aug 2026',
            status: 'Pending',
            adminRemark: ''
        },
        {
            id: 2,
            empId: 'EMP00125',
            empName: 'Rohan Verma',
            type: 'Paid Leave',
            dates: '22 Aug 2026 - 23 Aug 2026',
            days: 2,
            reason: 'Attending family function out of station',
            appliedOn: '18 Aug 2026',
            status: 'Approved',
            adminRemark: 'Approved as per leave balance'
        },
        {
            id: 3,
            empId: 'EMP00124',
            empName: 'Ananya Sharma',
            type: 'Unpaid Leave',
            dates: '01 Sep 2026 - 02 Sep 2026',
            days: 2,
            reason: 'Personal urgent commitments',
            appliedOn: '21 Aug 2026',
            status: 'Pending',
            adminRemark: ''
        }
    ]);

    // Active switched employee for preview
    const [activeEmployeeProfile, setActiveEmployeeProfile] = useState(employees[0]);

    // Handle Full Admin Employee Edit
    const handleSaveEmployeeEdit = (e) => {
        e.preventDefault();
        setEmployees((prev) =>
            prev.map((emp) => (emp.id === selectedEmployee.id ? selectedEmployee : emp))
        );
        if (activeEmployeeProfile.id === selectedEmployee.id) {
            setActiveEmployeeProfile(selectedEmployee);
        }
        setShowEditEmpModal(false);
        alert('Employee profile updated across all records!');
    };

    // Handle 3.6.2 Admin Payroll Structure Update
    const handleSaveSalaryStructure = (e) => {
        e.preventDefault();
        const basic = Number(selectedEmployee.salary.basic) || 0;
        const hra = Number(selectedEmployee.salary.hra) || 0;
        const special = Number(selectedEmployee.salary.special) || 0;
        const pf = Number(selectedEmployee.salary.pf) || 0;
        const pt = Number(selectedEmployee.salary.pt) || 0;
        const calculatedNet = basic + hra + special - (pf + pt);

        const updatedEmp = {
            ...selectedEmployee,
            salary: {
                ...selectedEmployee.salary,
                basic,
                hra,
                special,
                pf,
                pt,
                netPay: calculatedNet
            }
        };

        setEmployees((prev) =>
            prev.map((emp) => (emp.id === updatedEmp.id ? updatedEmp : emp))
        );
        setShowPayrollModal(false);
        alert(`Salary Structure updated! New Net Take-Home: ₹ ${calculatedNet.toLocaleString()}`);
    };

    // Open Leave Remark Modal
    const initiateLeaveAction = (app, actionType) => {
        setSelectedLeaveReq(app);
        setLeaveActionType(actionType);
        setAdminRemarkText(actionType === 'Approved' ? 'Approved by HR' : 'Rejected due to project deadlines');
        setShowLeaveRemarkModal(true);
    };

    // Confirm Leave Action with Comments
    const submitLeaveDecision = (e) => {
        e.preventDefault();
        setLeaveApplications((prev) =>
            prev.map((app) =>
                app.id === selectedLeaveReq.id
                    ? { ...app, status: leaveActionType, adminRemark: adminRemarkText }
                    : app
            )
        );
        setShowLeaveRemarkModal(false);
        alert(`Leave request has been marked as ${leaveActionType} with remarks.`);
    };

    // Filtered List
    const filteredEmployees = employees.filter((emp) => {
        const matchesSearch =
            emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            emp.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            emp.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDept = selectedDept === 'All' || emp.department === selectedDept;
        return matchesSearch && matchesDept;
    });

    return (
        <div className="dayflow-shell flex min-h-screen bg-transparent text-slate-800 font-sans relative">
            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-30 lg:hidden"
                />
            )}

            {/* Admin Sidebar */}
            <aside
                className={`w-64 bg-slate-900 text-white flex flex-col justify-between p-4 fixed h-full z-40 select-none transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <div>
                    {/* Admin Header */}
                    <div className="flex items-center justify-between px-3 py-4 mb-4 border-b border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
                                <Building className="w-5 h-5" />
                            </div>
                            <div>
                                <h1 className="font-bold text-lg leading-tight tracking-tight text-white">Dayflow HR</h1>
                                <span className="text-[10px] bg-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded-md border border-blue-500/30">
                                    ADMIN / HR CONSOLE
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="lg:hidden p-1 text-slate-400 hover:text-white rounded-lg cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Admin Tabs */}
                    <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase px-3 mb-2">Management</p>
                    <nav className="space-y-1.5">
                        <AdminNavItem
                            icon={<Users className="w-4 h-4" />}
                            label="Employee Directory"
                            badge={employees.length}
                            active={currentTab === 'employees'}
                            onClick={() => { setCurrentTab('employees'); setIsMobileMenuOpen(false); }}
                        />
                        <AdminNavItem
                            icon={<FileText className="w-4 h-4" />}
                            label="Leave Approvals"
                            badge={leaveApplications.filter((l) => l.status === 'Pending').length}
                            badgeColor="bg-amber-500"
                            active={currentTab === 'leaves'}
                            onClick={() => { setCurrentTab('leaves'); setIsMobileMenuOpen(false); }}
                        />
                        <AdminNavItem
                            icon={<CalendarCheck className="w-4 h-4" />}
                            label="Attendance (All)"
                            active={currentTab === 'attendance'}
                            onClick={() => { setCurrentTab('attendance'); setIsMobileMenuOpen(false); }}
                        />
                        <AdminNavItem
                            icon={<DollarSign className="w-4 h-4" />}
                            label="3.6.2 Payroll Control"
                            active={currentTab === 'payroll'}
                            onClick={() => { setCurrentTab('payroll'); setIsMobileMenuOpen(false); }}
                        />
                    </nav>
                </div>

                {/* Bottom Profile Preview */}
                <div className="border-t border-slate-800 pt-4">
                    <div className="flex items-center gap-3 px-3 py-2 bg-slate-800/60 rounded-xl mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                            HR
                        </div>
                        <div className="text-xs">
                            <p className="font-semibold text-white">HR SuperAdmin</p>
                            <p className="text-[10px] text-slate-400">admin@dayflow.com</p>
                        </div>
                    </div>

                    <button
                        onClick={() => alert('Logged out from Admin Session')}
                        className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-red-400 hover:bg-red-500/10 rounded-xl w-full transition cursor-pointer"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Admin Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Admin Workspace */}
            <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 w-full max-w-full overflow-hidden">
                {/* Top Header */}
                <header className="flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-200 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition cursor-pointer"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                                {currentTab === 'employees' && 'Employee Directory & Record Management'}
                                {currentTab === 'leaves' && 'Employee Leave Approvals (Admin/HR)'}
                                {currentTab === 'attendance' && 'Company-Wide Live Attendance Records'}
                                {currentTab === 'payroll' && '3.6.2 Admin Payroll Control & Structure'}
                            </h2>
                            <p className="text-xs text-slate-400">Centralized HR control console with real-time updates</p>
                        </div>
                    </div>
                </header>

                {/* ================= 1. EMPLOYEE DIRECTORY & SWITCHING TAB ================= */}
                {currentTab === 'employees' && (
                    <div className="space-y-6">
                        {/* Active Selected Employee Card (Profile Switching Mode) */}
                        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                                <img
                                    src={activeEmployeeProfile.avatar}
                                    alt={activeEmployeeProfile.name}
                                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white/20 shadow-lg"
                                />
                                <div>
                                    <div className="flex items-center justify-center sm:justify-start gap-2">
                                        <span className="text-[10px] font-bold bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded border border-blue-400/30">
                                            CURRENTLY VIEWING EMPLOYEE
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold mt-1">{activeEmployeeProfile.name} ({activeEmployeeProfile.id})</h2>
                                    <p className="text-xs text-blue-200 mt-0.5">{activeEmployeeProfile.designation} • {activeEmployeeProfile.department}</p>
                                    <p className="text-xs text-slate-300 mt-1">
                                        📞 {activeEmployeeProfile.phone} | ✉️ {activeEmployeeProfile.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => {
                                        setSelectedEmployee(activeEmployeeProfile);
                                        setShowEditEmpModal(true);
                                    }}
                                    className="flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 hover:bg-slate-100 rounded-xl text-xs font-bold shadow-md transition cursor-pointer"
                                >
                                    <Edit2 className="w-3.5 h-3.5" /> Edit Full Details
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedEmployee(activeEmployeeProfile);
                                        setShowPayrollModal(true);
                                    }}
                                    className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition cursor-pointer"
                                >
                                    <DollarSign className="w-3.5 h-3.5" /> Edit Salary Structure
                                </button>
                            </div>
                        </div>

                        {/* Filter and Search */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                            <div className="relative w-full sm:w-80">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                                <input
                                    type="text"
                                    placeholder="Search by name, EMP ID, or email..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full text-xs pl-9 pr-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <select
                                    value={selectedDept}
                                    onChange={(e) => setSelectedDept(e.target.value)}
                                    className="text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium text-slate-700"
                                >
                                    <option value="All">All Departments</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Design">Design</option>
                                    <option value="Human Resources">Human Resources</option>
                                </select>
                            </div>
                        </div>

                        {/* Directory Table with Switch Action */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                            <h3 className="font-bold text-slate-800 text-sm mb-4">Click row to Switch Profile or Edit Details</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead>
                                        <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                                            <th className="pb-3">Employee</th>
                                            <th className="pb-3">Department & Role</th>
                                            <th className="pb-3">Annual CTC</th>
                                            <th className="pb-3">Monthly Net</th>
                                            <th className="pb-3">Status</th>
                                            <th className="pb-3 text-right">Admin Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {filteredEmployees.map((emp) => (
                                            <tr
                                                key={emp.id}
                                                className={`hover:bg-blue-50/40 transition cursor-pointer ${activeEmployeeProfile.id === emp.id ? 'bg-blue-50/70 font-semibold' : ''
                                                    }`}
                                            >
                                                <td className="py-3.5" onClick={() => setActiveEmployeeProfile(emp)}>
                                                    <div className="flex items-center gap-3">
                                                        <img src={emp.avatar} alt={emp.name} className="w-9 h-9 rounded-full object-cover ring-1 ring-slate-200" />
                                                        <div>
                                                            <p className="font-bold text-slate-800">{emp.name}</p>
                                                            <p className="text-[10px] text-slate-400 font-semibold">{emp.id}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3.5" onClick={() => setActiveEmployeeProfile(emp)}>
                                                    <p className="font-semibold text-slate-800">{emp.designation}</p>
                                                    <p className="text-[10px] text-slate-400">{emp.department}</p>
                                                </td>
                                                <td className="py-3.5 font-bold text-slate-800" onClick={() => setActiveEmployeeProfile(emp)}>
                                                    {emp.salary.ctc}
                                                </td>
                                                <td className="py-3.5 font-black text-emerald-600" onClick={() => setActiveEmployeeProfile(emp)}>
                                                    ₹ {emp.salary.netPay.toLocaleString()}
                                                </td>
                                                <td className="py-3.5" onClick={() => setActiveEmployeeProfile(emp)}>
                                                    <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${emp.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                                                        }`}>
                                                        {emp.status}
                                                    </span>
                                                </td>
                                                <td className="py-3.5 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedEmployee(emp);
                                                                setShowEditEmpModal(true);
                                                            }}
                                                            className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition cursor-pointer"
                                                            title="Edit All Details"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedEmployee(emp);
                                                                setShowPayrollModal(true);
                                                            }}
                                                            className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition cursor-pointer"
                                                            title="Edit Salary Structure"
                                                        >
                                                            <DollarSign className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= 2. LEAVE APPROVALS WITH REMARKS TAB ================= */}
                {currentTab === 'leaves' && (
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                        <div className="flex justify-between items-center pb-2">
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm">Employee Leave Requests & Decision Console</h3>
                                <p className="text-xs text-slate-400">Decisions and comments immediately reflect in employee records.</p>
                            </div>
                            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                                {leaveApplications.filter((l) => l.status === 'Pending').length} Pending Requests
                            </span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                                        <th className="pb-3">Employee</th>
                                        <th className="pb-3">Leave Type</th>
                                        <th className="pb-3">Duration</th>
                                        <th className="pb-3">Reason</th>
                                        <th className="pb-3">Admin Remarks</th>
                                        <th className="pb-3">Status</th>
                                        <th className="pb-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {leaveApplications.map((app) => (
                                        <tr key={app.id} className="hover:bg-slate-50/60 transition">
                                            <td className="py-3.5">
                                                <p className="font-bold text-slate-800">{app.empName}</p>
                                                <p className="text-[10px] text-slate-400">{app.empId}</p>
                                            </td>
                                            <td className="py-3.5 font-bold text-slate-700">{app.type}</td>
                                            <td className="py-3.5 text-slate-600">
                                                <p>{app.dates}</p>
                                                <span className="text-[10px] text-slate-400 font-semibold">{app.days} Day(s)</span>
                                            </td>
                                            <td className="py-3.5 text-slate-500 max-w-xs">{app.reason}</td>
                                            <td className="py-3.5 text-slate-600 italic">
                                                {app.adminRemark ? `"${app.adminRemark}"` : <span className="text-slate-400">None</span>}
                                            </td>
                                            <td className="py-3.5">
                                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${app.status === 'Approved'
                                                        ? 'bg-emerald-100 text-emerald-700'
                                                        : app.status === 'Rejected'
                                                            ? 'bg-rose-100 text-rose-700'
                                                            : 'bg-amber-100 text-amber-700'
                                                    }`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td className="py-3.5 text-right">
                                                {app.status === 'Pending' ? (
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => initiateLeaveAction(app, 'Approved')}
                                                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer"
                                                        >
                                                            Approve
                                                        </button>
                                                        <button
                                                            onClick={() => initiateLeaveAction(app, 'Rejected')}
                                                            className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer"
                                                        >
                                                            Reject
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => initiateLeaveAction(app, app.status)}
                                                        className="text-xs text-blue-600 hover:underline font-semibold"
                                                    >
                                                        Edit Remark
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ================= 3. LIVE ATTENDANCE RECORDS TAB ================= */}
                {currentTab === 'attendance' && (
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                        <div className="flex justify-between items-center pb-2">
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm">Company Attendance Log (Today)</h3>
                                <p className="text-xs text-slate-400">View real-time check-in and check-out logs of all employees.</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                    {employees.filter((e) => e.attendanceToday === 'Present').length} Present
                                </span>
                                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                                    {employees.filter((e) => e.attendanceToday === 'On Leave').length} On Leave
                                </span>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                                        <th className="pb-3">Employee</th>
                                        <th className="pb-3">Department</th>
                                        <th className="pb-3">Check-in Time</th>
                                        <th className="pb-3">Check-out Time</th>
                                        <th className="pb-3 text-right">Attendance Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {employees.map((emp) => (
                                        <tr key={emp.id} className="hover:bg-slate-50/60 transition">
                                            <td className="py-3.5 font-bold text-slate-800">
                                                {emp.name} ({emp.id})
                                            </td>
                                            <td className="py-3.5 text-slate-600">{emp.department}</td>
                                            <td className="py-3.5 font-bold text-slate-700">{emp.checkIn}</td>
                                            <td className="py-3.5 font-bold text-slate-700">{emp.checkOut}</td>
                                            <td className="py-3.5 text-right">
                                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${emp.attendanceToday === 'Present'
                                                        ? 'bg-emerald-100 text-emerald-700'
                                                        : 'bg-rose-100 text-rose-700'
                                                    }`}>
                                                    {emp.attendanceToday}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ================= 4. 3.6.2 ADMIN PAYROLL CONTROL TAB ================= */}
                {currentTab === 'payroll' && (
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b">
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm">3.6.2 Admin Payroll Control & Salary Structure</h3>
                                <p className="text-xs text-slate-400">View, update, and guarantee monthly payroll accuracy for all employees.</p>
                            </div>
                            <button
                                onClick={() => alert('Monthly payroll locked and verified for August 2026!')}
                                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                            >
                                ✓ Verify & Disburse Payroll
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                                        <th className="pb-3">Employee</th>
                                        <th className="pb-3">Basic Pay</th>
                                        <th className="pb-3">HRA</th>
                                        <th className="pb-3">Special Allow.</th>
                                        <th className="pb-3">PF Deduct.</th>
                                        <th className="pb-3">Net Take-Home</th>
                                        <th className="pb-3 text-right">Structure Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {employees.map((emp) => (
                                        <tr key={emp.id} className="hover:bg-slate-50/60 transition">
                                            <td className="py-3.5">
                                                <p className="font-bold text-slate-800">{emp.name}</p>
                                                <p className="text-[10px] text-slate-400">{emp.designation}</p>
                                            </td>
                                            <td className="py-3.5 font-semibold text-slate-700">₹ {emp.salary.basic.toLocaleString()}</td>
                                            <td className="py-3.5 font-semibold text-slate-700">₹ {emp.salary.hra.toLocaleString()}</td>
                                            <td className="py-3.5 font-semibold text-slate-700">₹ {emp.salary.special.toLocaleString()}</td>
                                            <td className="py-3.5 font-semibold text-rose-600">- ₹ {emp.salary.pf.toLocaleString()}</td>
                                            <td className="py-3.5 font-black text-emerald-600 text-sm">
                                                ₹ {emp.salary.netPay.toLocaleString()}
                                            </td>
                                            <td className="py-3.5 text-right">
                                                <button
                                                    onClick={() => {
                                                        setSelectedEmployee(emp);
                                                        setShowPayrollModal(true);
                                                    }}
                                                    className="flex items-center gap-1 ml-auto px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-xs font-bold transition cursor-pointer"
                                                >
                                                    <SlidersHorizontal className="w-3.5 h-3.5" /> Edit Structure
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>

            {/* ===================== MODAL 1: FULL ADMIN EMPLOYEE EDIT ===================== */}
            {showEditEmpModal && selectedEmployee && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-3 sm:p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="text-sm font-bold text-slate-800">Admin Edit: {selectedEmployee.name}</h3>
                            <button onClick={() => setShowEditEmpModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveEmployeeEdit} className="p-6 space-y-4 text-xs">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={selectedEmployee.name}
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-xl"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={selectedEmployee.email}
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, email: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-xl"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">Phone</label>
                                    <input
                                        type="text"
                                        value={selectedEmployee.phone}
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, phone: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-xl"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">Department</label>
                                    <select
                                        value={selectedEmployee.department}
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, department: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-xl bg-white"
                                    >
                                        <option value="Engineering">Engineering</option>
                                        <option value="Design">Design</option>
                                        <option value="Human Resources">Human Resources</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">Designation</label>
                                    <input
                                        type="text"
                                        value={selectedEmployee.designation}
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, designation: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-xl"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">Status</label>
                                    <select
                                        value={selectedEmployee.status}
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, status: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-xl bg-white"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="On Leave">On Leave</option>
                                        <option value="Deactivated">Deactivated</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-3 border-t">
                                <button type="button" onClick={() => setShowEditEmpModal(false)} className="px-4 py-2 text-slate-600">Cancel</button>
                                <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-bold rounded-xl shadow-md">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ===================== MODAL 2: 3.6.2 SALARY STRUCTURE UPDATE ===================== */}
            {showPayrollModal && selectedEmployee && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-3 sm:p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                            <div>
                                <h3 className="text-sm font-bold text-slate-800">3.6.2 Update Salary Structure</h3>
                                <p className="text-[11px] text-slate-400">Employee: {selectedEmployee.name}</p>
                            </div>
                            <button onClick={() => setShowPayrollModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveSalaryStructure} className="p-6 space-y-3 text-xs">
                            <div>
                                <label className="block font-semibold text-slate-600 mb-1">Annual CTC</label>
                                <input
                                    type="text"
                                    value={selectedEmployee.salary.ctc}
                                    onChange={(e) => setSelectedEmployee({
                                        ...selectedEmployee,
                                        salary: { ...selectedEmployee.salary, ctc: e.target.value }
                                    })}
                                    className="w-full px-3 py-2 border rounded-xl"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">Basic Monthly (₹)</label>
                                    <input
                                        type="number"
                                        value={selectedEmployee.salary.basic}
                                        onChange={(e) => setSelectedEmployee({
                                            ...selectedEmployee,
                                            salary: { ...selectedEmployee.salary, basic: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border rounded-xl"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">HRA (₹)</label>
                                    <input
                                        type="number"
                                        value={selectedEmployee.salary.hra}
                                        onChange={(e) => setSelectedEmployee({
                                            ...selectedEmployee,
                                            salary: { ...selectedEmployee.salary, hra: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border rounded-xl"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">Special Allowance (₹)</label>
                                    <input
                                        type="number"
                                        value={selectedEmployee.salary.special}
                                        onChange={(e) => setSelectedEmployee({
                                            ...selectedEmployee,
                                            salary: { ...selectedEmployee.salary, special: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border rounded-xl"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-slate-600 mb-1">PF Deduction (₹)</label>
                                    <input
                                        type="number"
                                        value={selectedEmployee.salary.pf}
                                        onChange={(e) => setSelectedEmployee({
                                            ...selectedEmployee,
                                            salary: { ...selectedEmployee.salary, pf: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border rounded-xl"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-3 border-t">
                                <button type="button" onClick={() => setShowPayrollModal(false)} className="px-4 py-2 text-slate-600">Cancel</button>
                                <button type="submit" className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md">
                                    Update & Recalculate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ===================== MODAL 3: LEAVE APPROVAL & ADMIN COMMENTS ===================== */}
            {showLeaveRemarkModal && selectedLeaveReq && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-3 sm:p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="text-sm font-bold text-slate-800">
                                {leaveActionType} Leave Request
                            </h3>
                            <button onClick={() => setShowLeaveRemarkModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={submitLeaveDecision} className="p-6 space-y-4 text-xs">
                            <div className="bg-slate-50 p-3 rounded-xl border">
                                <p className="font-bold text-slate-800">{selectedLeaveReq.empName} ({selectedLeaveReq.empId})</p>
                                <p className="text-slate-500">{selectedLeaveReq.type} • {selectedLeaveReq.dates}</p>
                                <p className="text-slate-400 italic mt-1">Reason: "{selectedLeaveReq.reason}"</p>
                            </div>

                            <div>
                                <label className="block font-semibold text-slate-700 mb-1.5">Admin Comments / Remarks</label>
                                <textarea
                                    rows={3}
                                    value={adminRemarkText}
                                    onChange={(e) => setAdminRemarkText(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 font-medium resize-none"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2 border-t">
                                <button type="button" onClick={() => setShowLeaveRemarkModal(false)} className="px-4 py-2 text-slate-600">Cancel</button>
                                <button
                                    type="submit"
                                    className={`px-5 py-2 text-white font-bold rounded-xl shadow-md ${leaveActionType === 'Approved' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700'
                                        }`}
                                >
                                    Confirm {leaveActionType}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

/* Helper Nav Item */
function AdminNavItem({ icon, label, active, onClick, badge, badgeColor = 'bg-blue-600' }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold w-full transition cursor-pointer ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
        >
            <div className="flex items-center gap-3">
                {icon}
                <span>{label}</span>
            </div>
            {badge !== undefined && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${badgeColor}`}>
                    {badge}
                </span>
            )}
        </button>
    );
}