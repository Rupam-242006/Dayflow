import React, { useState } from 'react';
import {
    Users,
    ShieldCheck,
    CalendarCheck,
    FileText,
    DollarSign,
    ArrowRight,
    CheckCircle2,
    Zap,
    Lock,
    Building,
    Star,
    ChevronRight,
    Clock,
    Sparkles,
    BarChart3,
    Globe2,
    Smile,
    Laptop
} from 'lucide-react';

export default function DayflowLandingPage() {
    const [activeTab, setActiveTab] = useState('employee');

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

            {/* ===================== 1. NAVIGATION BAR ===================== */}
            <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                    {/* Brand Logo */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
                            <Building className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="font-black text-xl tracking-tight text-slate-900">Dayflow</span>
                            <span className="text-[11px] font-bold text-blue-600 ml-1.5 px-2 py-0.5 bg-blue-50 rounded-full border border-blue-100">
                                HRMS
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                        <a href="#features" className="hover:text-blue-600 transition">Features</a>
                        <a href="#modules" className="hover:text-blue-600 transition">Modules</a>
                        <a href="#security" className="hover:text-blue-600 transition">Security</a>
                        <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
                    </nav>

                    {/* Action CTAs */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => alert("Redirecting to Employee / Admin Login...")}
                            className="hidden sm:inline-flex text-xs font-bold text-slate-700 hover:text-slate-900 px-4 py-2 rounded-xl transition"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => alert("Launching Live Dayflow HR Demo...")}
                            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition cursor-pointer"
                        >
                            Launch Demo <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ===================== 2. HERO SECTION ===================== */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">

                {/* Subtle Background Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full pointer-events-none" />

                {/* Release Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-6 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Next-Gen Enterprise HR Management System 2026</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight">
                    Smarter workforce management, <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        seamless from Check-In to Payroll.
                    </span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                    Empower employees with self-service profiles, track real-time attendance shifts, approve leaves with 1-click, and automate payroll compliance with zero friction.
                </p>

                {/* Hero CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => alert("Launching Employee Dashboard...")}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-bold shadow-lg shadow-blue-500/25 transition cursor-pointer"
                    >
                        <Laptop className="w-4 h-4" /> Employee Portal
                    </button>
                    <button
                        onClick={() => alert("Launching HR SuperAdmin Console...")}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-sm font-bold shadow-lg shadow-slate-900/20 transition cursor-pointer"
                    >
                        <ShieldCheck className="w-4 h-4 text-blue-400" /> Admin HR Console
                    </button>
                </div>

                {/* Social Proof Tags */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% RBAC Role Security
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 3.6.2 Payroll Compliant
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 1-Click Leave Decision Engine
                    </div>
                </div>

                {/* ===================== HERO DASHBOARD PREVIEW MOCKUP ===================== */}
                <div className="mt-14 max-w-5xl mx-auto rounded-3xl p-3 bg-slate-900/5 ring-1 ring-slate-900/10 shadow-2xl">
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden text-left p-6 sm:p-8">

                        {/* Mock Top Bar */}
                        <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-rose-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                <span className="text-xs font-mono text-slate-400 ml-2">https://dayflow-hrms.internal/dashboard</span>
                            </div>
                            <span className="bg-emerald-50 text-emerald-600 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                                System Live
                            </span>
                        </div>

                        {/* Mock Grid Widgets */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                                <span className="text-[11px] font-bold text-blue-600 uppercase">Today's Shift</span>
                                <h4 className="text-xl font-black text-slate-800 mt-1">08h 30m Logged</h4>
                                <p className="text-xs text-slate-500 mt-0.5">Punch-in recorded at 09:15 AM</p>
                            </div>

                            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                                <span className="text-[11px] font-bold text-emerald-600 uppercase">Leave Balance</span>
                                <h4 className="text-xl font-black text-slate-800 mt-1">12 Days Available</h4>
                                <p className="text-xs text-slate-500 mt-0.5">Sick, Paid, and Unpaid categories</p>
                            </div>

                            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                                <span className="text-[11px] font-bold text-purple-600 uppercase">August Payroll</span>
                                <h4 className="text-xl font-black text-slate-800 mt-1">₹ 45,000 In-Hand</h4>
                                <p className="text-xs text-slate-500 mt-0.5">Auto-calculated CTC with PF & Taxes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== 3. CORE MODULES (FEATURES) ===================== */}
            <section id="modules" className="py-20 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Engineered For Modern Teams</h2>
                        <h3 className="text-3xl sm:text-4xl font-black text-slate-900">Complete Suite of HR Capabilities</h3>
                        <p className="mt-3 text-sm sm:text-base text-slate-500">Everything needed to run high-performing distributed teams without spreadsheet chaos.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            icon={<Users className="w-6 h-6 text-blue-600" />}
                            iconBg="bg-blue-50"
                            title="Employee Profile Management"
                            spec="Spec 3.3.1 & 3.3.2"
                            desc="Full visibility into Job roles, Salary structures, Documents with restricted employee address & phone editing permissions."
                        />
                        <FeatureCard
                            icon={<Clock className="w-6 h-6 text-emerald-600" />}
                            iconBg="bg-emerald-50"
                            title="Live Shift & Attendance"
                            spec="Real-Time Tracking"
                            desc="Accurate check-in / check-out timestamps with automated percentage calculations based on 9-hour work day targets."
                        />
                        <FeatureCard
                            icon={<FileText className="w-6 h-6 text-amber-600" />}
                            iconBg="bg-amber-50"
                            title="Leave Workflow Engine"
                            spec="1-Click Approvals"
                            desc="Apply for Sick, Paid, or Unpaid leaves with instant remark comments from HR reflecting directly across employee records."
                        />
                        <FeatureCard
                            icon={<DollarSign className="w-6 h-6 text-purple-600" />}
                            iconBg="bg-purple-50"
                            title="Admin Payroll Control"
                            spec="Spec 3.6.2 Compliance"
                            desc="View, edit, and ensure monthly payroll accuracy with automated Basic, HRA, PF deductions, and take-home recalculations."
                        />
                    </div>
                </div>
            </section>

            {/* ===================== 4. ROLE-BASED EXPERIENCE (TABS) ===================== */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left relative overflow-hidden">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">Dual-Engine Architecture</span>
                            <h3 className="text-2xl sm:text-4xl font-black mt-2 leading-tight">
                                Designed for both Employees and HR Administrators.
                            </h3>
                            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                                Dayflow separates operations with granular permission boundaries—providing intuitive self-service for staff and exhaustive control consoles for management.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <button
                                    onClick={() => setActiveTab('employee')}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeTab === 'employee' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                                        }`}
                                >
                                    Employee View
                                </button>
                                <button
                                    onClick={() => setActiveTab('admin')}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeTab === 'admin' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                                        }`}
                                >
                                    Admin Console (3.6.2)
                                </button>
                            </div>
                        </div>

                        {/* Preview Box */}
                        <div className="w-full lg:w-96 bg-slate-800/80 border border-slate-700 rounded-2xl p-5 text-xs text-slate-300 space-y-3 text-left">
                            {activeTab === 'employee' ? (
                                <>
                                    <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                                        <span className="font-bold text-white">Employee Self-Service</span>
                                        <span className="text-[10px] text-blue-400 font-bold">Standard Role</span>
                                    </div>
                                    <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> View Salary & Verified Documents</p>
                                    <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Check-in & Track Live Shift Times</p>
                                    <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Apply for Paid/Sick Leaves</p>
                                    <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Edit Address, Phone & Avatar</p>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                                        <span className="font-bold text-white">HR SuperAdmin Console</span>
                                        <span className="text-[10px] text-amber-400 font-bold">Master Role</span>
                                    </div>
                                    <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Switch & Edit Any Employee Record</p>
                                    <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Approve / Reject Leaves with Remarks</p>
                                    <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> View Company-Wide Daily Attendance</p>
                                    <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 3.6.2 Salary Structure & Recalculation</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== 5. FOOTER ===================== */}
            <footer className="bg-white border-t border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                            👥
                        </div>
                        <span className="font-bold text-slate-800 text-sm">Dayflow Enterprise HRMS</span>
                    </div>

                    <p className="text-xs text-slate-400 font-medium">
                        © 2026 Dayflow Technologies Inc. All rights reserved. Built for modern workspaces.
                    </p>

                    <div className="flex items-center gap-5 text-xs font-semibold text-slate-500">
                        <a href="#privacy" className="hover:text-blue-600 transition">Privacy Policy</a>
                        <a href="#terms" className="hover:text-blue-600 transition">Terms of Service</a>
                        <a href="#support" className="hover:text-blue-600 transition">Contact HR</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

/* ----------------- SUB-COMPONENTS ----------------- */

function FeatureCard({ icon, iconBg, title, spec, desc }) {
    return (
        <div className="bg-slate-50/60 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
            <div>
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4 shadow-xs`}>
                    {icon}
                </div>
                <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">{spec}</span>
                <h4 className="font-bold text-slate-800 text-base mt-1 mb-2">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function Check({ className }) {
    return <CheckCircle2 className={className} />;
}