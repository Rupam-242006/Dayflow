// ==========================================
// HRMS APPLICATION STATE & DATABASE
// ==========================================
const AppState = {
  profile: {
    name: "Rahul Sharma",
    role: "HR Manager (Admin)",
    email: "rahul.hr@company.com",
    empId: "EMP ID: HR-2049",
    phone: "+91 98765 43210"
  },
  quickAttendance: [
    { day: "01", status: "present" },
    { day: "02", status: "absent" },
    { day: "03", status: "half-day" },
    { day: "04", status: "present" },
    { day: "05", status: "present" },
    { day: "06", status: "present" },
    { day: "07", status: "present" },
    { day: "08", status: "half-day" },
    { day: "09", status: "present" },
    { day: "10", status: "present" }
  ],
  messages: [
    { id: 1, sender: "Priya Verma", text: "Please review my leave application for next Monday.", time: "10m ago", read: false },
    { id: 2, sender: "IT Support", text: "System maintenance scheduled for 11:00 PM tonight.", time: "2h ago", read: false },
    { id: 3, sender: "Aman Gupta", text: "Salary slip for September received accurately.", time: "Yesterday", read: false }
  ],
  notifications: [
    { id: 1, title: "Payroll Audit Complete", desc: "All salary deductions matched with tax registers.", time: "10m ago", read: false },
    { id: 2, title: "New Leave Application", desc: "Priya Verma requested Casual Leave.", time: "1h ago", read: false },
    { id: 3, title: "Attendance Locked", desc: "Attendance logs verified for payroll processing.", time: "1d ago", read: false }
  ],
  activities: [
    { type: 'approved', title: 'Admin audited and verified 100% Payroll accuracy', time: '10:30 AM Today', icon: 'fa-solid fa-shield-halved' },
    { type: 'leave', title: 'Leave applied by Priya Verma', time: 'Yesterday', icon: 'fa-regular fa-clock' },
    { type: 'approved', title: 'Salary structure updated for Aman Gupta', time: '2 days ago', icon: 'fa-solid fa-file-invoice-dollar' }
  ],
  // Complete Employee Directory with individual Attendance & Salary Details
  employees: [
    { 
      id: 1, 
      name: "Rahul Sharma", 
      email: "rahul@company.com", 
      phone: "+91 98765 43210",
      empCode: "HR-2049",
      role: "HR Manager", 
      dept: "Human Resources", 
      status: "Active", 
      joinDate: "12 Jan 2022",
      attendance: [
        { day: '01', status: 'present' }, { day: '02', status: 'present' }, { day: '03', status: 'present' },
        { day: '04', status: 'present' }, { day: '05', status: 'present' }, { day: '06', status: 'present' },
        { day: '07', status: 'present' }, { day: '08', status: 'present' }, { day: '09', status: 'present' },
        { day: '10', status: 'present' }
      ],
      salary: { basePay: 75000, allowances: 15000, deductions: 10000 }
    },
    { 
      id: 2, 
      name: "Priya Verma", 
      email: "priya.v@company.com", 
      phone: "+91 98111 22334",
      empCode: "UI-1082",
      role: "UI/UX Designer", 
      dept: "Design", 
      status: "Active", 
      joinDate: "05 Mar 2023",
      attendance: [
        { day: '01', status: 'present' }, { day: '02', status: 'absent' }, { day: '03', status: 'present' },
        { day: '04', status: 'present' }, { day: '05', status: 'present' }, { day: '06', status: 'half-day' },
        { day: '07', status: 'present' }, { day: '08', status: 'present' }, { day: '09', status: 'present' },
        { day: '10', status: 'present' }
      ],
      salary: { basePay: 55000, allowances: 10000, deductions: 7500 }
    },
    { 
      id: 3, 
      name: "Aman Gupta", 
      email: "aman.g@company.com", 
      phone: "+91 97222 33445",
      empCode: "DEV-3011",
      role: "Backend Developer", 
      dept: "Engineering", 
      status: "Active", 
      joinDate: "18 Jun 2021",
      attendance: [
        { day: '01', status: 'present' }, { day: '02', status: 'present' }, { day: '03', status: 'absent' },
        { day: '04', status: 'present' }, { day: '05', status: 'present' }, { day: '06', status: 'present' },
        { day: '07', status: 'present' }, { day: '08', status: 'half-day' }, { day: '09', status: 'present' },
        { day: '10', status: 'present' }
      ],
      salary: { basePay: 85000, allowances: 20000, deductions: 14000 }
    },
    { 
      id: 4, 
      name: "Sneha Patel", 
      email: "sneha.p@company.com", 
      phone: "+91 96333 44556",
      empCode: "QA-4090",
      role: "QA Engineer", 
      dept: "QA Team", 
      status: "Active", 
      joinDate: "10 Oct 2023",
      attendance: [
        { day: '01', status: 'present' }, { day: '02', status: 'present' }, { day: '03', status: 'present' },
        { day: '04', status: 'half-day' }, { day: '05', status: 'present' }, { day: '06', status: 'present' },
        { day: '07', status: 'present' }, { day: '08', status: 'present' }, { day: '09', status: 'absent' },
        { day: '10', status: 'present' }
      ],
      salary: { basePay: 45000, allowances: 8000, deductions: 5500 }
    }
  ],
  attendanceSheet: [
    { id: 1, name: "Rahul Sharma", dept: "Human Resources", inTime: "09:00 AM", outTime: "06:00 PM", status: "Present" },
    { id: 2, name: "Priya Verma", dept: "Design", inTime: "09:30 AM", outTime: "06:30 PM", status: "Present" },
    { id: 3, name: "Aman Gupta", dept: "Engineering", inTime: "--", outTime: "--", status: "Absent" },
    { id: 4, name: "Sneha Patel", dept: "QA Team", inTime: "10:15 AM", outTime: "02:30 PM", status: "Half Day" }
  ],
  documents: [
    { id: 1, title: "Company Leave Policy 2026", size: "2.4 MB", type: "PDF", date: "Jan 2026" },
    { id: 2, title: "Rahul_Salary_Slip_Sept.pdf", size: "680 KB", type: "PDF", date: "Oct 2026" },
    { id: 3, title: "Code of Conduct v4.1", size: "1.2 MB", type: "PDF", date: "Aug 2026" },
    { id: 4, title: "Health Insurance Guide", size: "3.1 MB", type: "PDF", date: "Feb 2026" }
  ],
  leaves: [
    { id: 1, name: "Priya Verma", type: "Casual Leave", from: "28 Oct 2026", to: "29 Oct 2026", reason: "Family Function", status: "Pending" },
    { id: 2, name: "Aman Gupta", type: "Sick Leave", from: "24 Oct 2026", to: "24 Oct 2026", reason: "Viral Fever", status: "Approved" }
  ],
  tickets: [
    { id: "T-101", subject: "Salary calculation discrepancy check", status: "Resolved", priority: "High" },
    { id: "T-102", subject: "New workstation monitor request", status: "In Progress", priority: "Medium" }
  ]
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  startLiveClockAndDate();
  renderAllModules();
  bindAppEvents();
});

function startLiveClockAndDate() {
  const update = () => {
    const now = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const dateElem = document.getElementById('currentDate');
    if (dateElem) dateElem.textContent = now.toLocaleDateString('en-GB', options);
  };
  update();
  setInterval(update, 60000);
}

function renderAllModules() {
  renderProfileCard();
  renderQuickAttendance();
  renderActivities();
  renderEmployeesPayrollTable();
  renderAttendanceSheet();
  renderDocuments();
  renderLeavesTable();
  renderTickets();
  renderMessages();
  renderNotifications();
}

// Net Pay helper
function calculateNetPay(base, allowances, deductions) {
  return (Number(base) + Number(allowances)) - Number(deductions);
}

// ==========================================
// EMPLOYEE DIRECTORY & DEDICATED PROFILE MODAL
// ==========================================
function renderEmployeesPayrollTable(list = AppState.employees) {
  const tbody = document.getElementById("employeesTableBody");
  let totalGross = 0;
  let totalDeductions = 0;
  let totalNet = 0;

  tbody.innerHTML = list.map(emp => {
    const base = emp.salary ? emp.salary.basePay : 50000;
    const allow = emp.salary ? emp.salary.allowances : 10000;
    const deduct = emp.salary ? emp.salary.deductions : 5000;
    const net = calculateNetPay(base, allow, deduct);

    totalGross += (base + allow);
    totalDeductions += deduct;
    totalNet += net;

    return `
      <tr class="emp-row-clickable" data-emp-id="${emp.id}">
        <td>
          <strong>${emp.name}</strong><br>
          <small style="color:var(--text-light)">${emp.email}</small>
        </td>
        <td>
          <strong>${emp.dept}</strong><br>
          <small style="color:var(--text-muted)">${emp.role}</small>
        </td>
        <td>₹${base.toLocaleString('en-IN')}</td>
        <td style="color:var(--success-color);">+₹${allow.toLocaleString('en-IN')}</td>
        <td style="color:var(--danger-color);">-₹${deduct.toLocaleString('en-IN')}</td>
        <td><strong>₹${net.toLocaleString('en-IN')}</strong></td>
        <td><span class="status-pill ${emp.status.toLowerCase()}">${emp.status}</span></td>
        <td>
          <button class="btn-table-action" data-action="view-emp" data-id="${emp.id}" title="View Full Employee Profile & Update Salary">
            <i class="fa-regular fa-eye" style="color:var(--primary-color)"></i> View Profile
          </button>
          <button class="btn-table-action" data-action="delete-emp" data-id="${emp.id}" title="Delete Record" style="margin-left:4px;">
            <i class="fa-regular fa-trash-can" style="color:var(--danger-color)"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  document.getElementById("statTotalPayroll").textContent = `₹${totalGross.toLocaleString('en-IN')} / mo`;
  document.getElementById("statTotalDeductions").textContent = `₹${totalDeductions.toLocaleString('en-IN')} / mo`;
  document.getElementById("statTotalNet").textContent = `₹${totalNet.toLocaleString('en-IN')} / mo`;
  document.getElementById("totalMonthlyDisbursed").textContent = `₹${(totalNet / 100000).toFixed(2)}L`;
}

// OPEN DEDICATED EMPLOYEE MODAL (Shows Attendance, Salary Breakdown, and Update Form)
function openEmployeeDetailsModal(empId) {
  const emp = AppState.employees.find(e => e.id === empId);
  if (!emp) return;

  const base = emp.salary ? emp.salary.basePay : 50000;
  const allow = emp.salary ? emp.salary.allowances : 10000;
  const deduct = emp.salary ? emp.salary.deductions : 5000;
  const net = calculateNetPay(base, allow, deduct);

  // Generate Attendance HTML for this employee
  const attData = emp.attendance || AppState.quickAttendance;
  const attHtml = attData.map(item => {
    let iconClass = item.status === 'present' ? 'fa-check' : (item.status === 'absent' ? 'fa-xmark' : 'fa-adjust');
    return `
      <div class="day-box">
        <span class="day-number">${item.day}</span>
        <div class="status-indicator ${item.status}">
          <i class="fa-solid ${iconClass}"></i>
        </div>
      </div>
    `;
  }).join('');

  // Attendance summary count
  const presentDays = attData.filter(a => a.status === 'present').length;
  const absentDays = attData.filter(a => a.status === 'absent').length;
  const halfDays = attData.filter(a => a.status === 'half-day').length;

  openGenericModal(`Employee Overview: ${emp.name}`, `
    <div class="emp-profile-modal-grid">
      
      <!-- Top Header Card -->
      <div class="emp-header-badge">
        <div class="avatar-emp">${emp.name.charAt(0)}</div>
        <div style="flex:1;">
          <h3 style="font-size:18px;">${emp.name}</h3>
          <p style="color:var(--text-muted); font-size:13px;">${emp.role} &bull; <strong>${emp.dept}</strong></p>
        </div>
        <span class="status-pill active">${emp.status}</span>
      </div>

      <!-- Quick Info Grid -->
      <div class="emp-details-grid">
        <div><span>EMAIL ADDRESS</span><strong>${emp.email}</strong></div>
        <div><span>PHONE NUMBER</span><strong>${emp.phone || '+91 98765 00000'}</strong></div>
        <div><span>EMPLOYEE CODE</span><strong>${emp.empCode || 'EMP-' + emp.id}</strong></div>
        <div><span>JOINING DATE</span><strong>${emp.joinDate}</strong></div>
      </div>

      <!-- Attendance Breakdown Section -->
      <div>
        <div class="modal-section-title">
          <i class="fa-regular fa-calendar-check" style="color:var(--primary-color);"></i> Monthly Attendance Record (Quick 10 Days)
        </div>
        <div class="days-tracker">${attHtml}</div>
        <div style="display:flex; justify-content:space-between; font-size:12.5px; color:var(--text-muted); background:#f8fafc; padding:8px 12px; border-radius:6px;">
          <span><strong>Present:</strong> ${presentDays} days</span>
          <span><strong>Absent:</strong> ${absentDays} days</span>
          <span><strong>Half Days:</strong> ${halfDays} days</span>
        </div>
      </div>

      <!-- Salary Structure & Update Section -->
      <div>
        <div class="modal-section-title">
          <i class="fa-solid fa-file-invoice-dollar" style="color:var(--primary-color);"></i> Salary Structure & Payroll Update
        </div>

        <div class="salary-edit-box">
          <div class="salary-inputs-row">
            <div class="form-group" style="margin-bottom:0;">
              <label>Base Pay (₹)</label>
              <input type="number" id="modalInpBase" value="${base}" />
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <label>Allowances (₹)</label>
              <input type="number" id="modalInpAllow" value="${allow}" />
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <label>Deductions (₹)</label>
              <input type="number" id="modalInpDeduct" value="${deduct}" />
            </div>
          </div>

          <div class="salary-summary-pill" style="margin: 12px 0;">
            <div>
              <span style="font-size:11px; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Calculated Net Take-Home</span>
              <h3 id="modalLiveNet" style="color:var(--primary-color);">₹${net.toLocaleString('en-IN')}</h3>
            </div>
            <button class="btn-primary" id="btnUpdateEmpSalary" style="padding:8px 16px;">
              <i class="fa-solid fa-floppy-disk"></i> Update Salary
            </button>
          </div>
        </div>
      </div>

    </div>
  `);

  // Live calculation on modal inputs
  const bInput = document.getElementById("modalInpBase");
  const aInput = document.getElementById("modalInpAllow");
  const dInput = document.getElementById("modalInpDeduct");
  const liveNet = document.getElementById("modalLiveNet");

  const recalcModalNet = () => {
    const updatedNet = calculateNetPay(bInput.value || 0, aInput.value || 0, dInput.value || 0);
    liveNet.textContent = `₹${updatedNet.toLocaleString('en-IN')}`;
  };

  bInput.addEventListener("input", recalcModalNet);
  aInput.addEventListener("input", recalcModalNet);
  dInput.addEventListener("input", recalcModalNet);

  // Update Salary Action
  document.getElementById("btnUpdateEmpSalary").addEventListener("click", () => {
    emp.salary = {
      basePay: Number(bInput.value) || 0,
      allowances: Number(aInput.value) || 0,
      deductions: Number(dInput.value) || 0
    };

    AppState.activities.unshift({
      type: 'approved',
      title: `Salary structure updated for ${emp.name}`,
      time: 'Just now',
      icon: 'fa-solid fa-file-invoice-dollar'
    });

    renderEmployeesPayrollTable();
    renderActivities();
    closeGenericModal();
    showToast(`Salary details for ${emp.name} updated successfully!`);
  });
}

// Payroll Audit
function runPayrollAccuracyAudit() {
  let isAllValid = true;
  AppState.employees.forEach(emp => {
    const s = emp.salary;
    if (!s || (s.basePay + s.allowances - s.deductions) !== calculateNetPay(s.basePay, s.allowances, s.deductions)) {
      isAllValid = false;
    }
  });

  if (isAllValid) {
    document.getElementById("auditStatusBadge").innerHTML = `<i class="fa-solid fa-circle-check"></i> 100% Verified`;
    document.getElementById("payrollAccuracyRate").textContent = "100%";
    showToast("Audit Complete: 100% Payroll accuracy verified!");
  } else {
    showToast("Discrepancy detected in payroll records!");
  }
}

// ==========================================
// PROFILE MODULE
// ==========================================
function renderProfileCard() {
  document.getElementById("employeeName").textContent = AppState.profile.name;
  document.getElementById("employeeRole").textContent = AppState.profile.role;
  document.getElementById("employeeEmail").textContent = AppState.profile.email;
  document.getElementById("employeeID").textContent = AppState.profile.empId;
  document.getElementById("employeePhone").textContent = AppState.profile.phone;
  document.getElementById("topAvatarInitial").textContent = AppState.profile.name.charAt(0).toUpperCase();
}

function openProfileEditModal() {
  openGenericModal("Edit Profile Details", `
    <div class="form-group">
      <label>Full Name</label>
      <input type="text" id="inpEditName" value="${AppState.profile.name}" />
    </div>
    <div class="form-group">
      <label>Job Designation</label>
      <input type="text" id="inpEditRole" value="${AppState.profile.role}" />
    </div>
    <div class="form-group">
      <label>Email Address</label>
      <input type="email" id="inpEditEmail" value="${AppState.profile.email}" />
    </div>
    <div class="form-group">
      <label>Phone Number</label>
      <input type="text" id="inpEditPhone" value="${AppState.profile.phone}" />
    </div>
    <div class="form-group">
      <label>Employee ID</label>
      <input type="text" id="inpEditEmpId" value="${AppState.profile.empId}" />
    </div>
    <button class="btn-primary" id="btnSaveProfileData" style="width:100%">Update Profile</button>
  `);

  document.getElementById("btnSaveProfileData").addEventListener("click", () => {
    const name = document.getElementById("inpEditName").value.trim();
    const role = document.getElementById("inpEditRole").value.trim();
    const email = document.getElementById("inpEditEmail").value.trim();
    const phone = document.getElementById("inpEditPhone").value.trim();
    const empId = document.getElementById("inpEditEmpId").value.trim();

    if (!name || !email) return showToast("Name and Email are required!");

    AppState.profile = { name, role, email, phone, empId };
    renderProfileCard();
    closeGenericModal();
    showToast("Profile updated successfully!");
  });
}

// ==========================================
// MESSAGES & NOTIFICATIONS
// ==========================================
function renderMessages() {
  const container = document.getElementById("msgListContainer");
  const countEl = document.getElementById("msgCount");
  const dotEl = document.getElementById("msgDot");

  const unreadCount = AppState.messages.filter(m => !m.read).length;
  countEl.textContent = unreadCount;
  if (unreadCount === 0) dotEl.classList.add("hidden");
  else dotEl.classList.remove("hidden");

  container.innerHTML = AppState.messages.map(m => `
    <div class="panel-item ${m.read ? '' : 'unread'}" onclick="markSingleMessageRead(${m.id})">
      <div class="panel-item-icon"><i class="fa-regular fa-user"></i></div>
      <div class="panel-item-content">
        <h5>${m.sender}</h5>
        <p>${m.text}</p>
        <small>${m.time}</small>
      </div>
    </div>
  `).join('');
}

function renderNotifications() {
  const container = document.getElementById("notifListContainer");
  const countEl = document.getElementById("notifCount");
  const dotEl = document.getElementById("notifDot");

  const unreadCount = AppState.notifications.filter(n => !n.read).length;
  countEl.textContent = unreadCount;
  if (unreadCount === 0) dotEl.classList.add("hidden");
  else dotEl.classList.remove("hidden");

  container.innerHTML = AppState.notifications.map(n => `
    <div class="panel-item ${n.read ? '' : 'unread'}" onclick="markSingleNotifRead(${n.id})">
      <div class="panel-item-icon"><i class="fa-solid fa-bell"></i></div>
      <div class="panel-item-content">
        <h5>${n.title}</h5>
        <p>${n.desc}</p>
        <small>${n.time}</small>
      </div>
    </div>
  `).join('');
}

function markSingleMessageRead(id) {
  const msg = AppState.messages.find(m => m.id === id);
  if (msg) msg.read = true;
  renderMessages();
}

function markSingleNotifRead(id) {
  const notif = AppState.notifications.find(n => n.id === id);
  if (notif) notif.read = true;
  renderNotifications();
}

// ==========================================
// SEARCH & AUTOCOMPLETE
// ==========================================
function setupGlobalSearch() {
  const searchInput = document.getElementById("globalSearch");
  const clearBtn = document.getElementById("clearSearchBtn");
  const dropdown = document.getElementById("searchDropdown");

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (val.length > 0) {
      clearBtn.style.display = "block";
      performLiveSearch(val);
    } else {
      clearBtn.style.display = "none";
      dropdown.style.display = "none";
    }
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    dropdown.style.display = "none";
  });
}

function performLiveSearch(term) {
  const dropdown = document.getElementById("searchDropdown");
  const results = [];

  AppState.employees.forEach(emp => {
    if (emp.name.toLowerCase().includes(term) || emp.dept.toLowerCase().includes(term) || emp.role.toLowerCase().includes(term)) {
      results.push({ title: `${emp.name} (${emp.dept})`, cat: 'Employee / Payroll', view: 'employees', empId: emp.id });
    }
  });

  AppState.documents.forEach(doc => {
    if (doc.title.toLowerCase().includes(term)) {
      results.push({ title: doc.title, cat: 'Document', view: 'documents' });
    }
  });

  AppState.tickets.forEach(ticket => {
    if (ticket.subject.toLowerCase().includes(term)) {
      results.push({ title: ticket.subject, cat: 'Support Ticket', view: 'help' });
    }
  });

  if (results.length === 0) {
    dropdown.innerHTML = `<div style="padding:14px; font-size:13px; color:var(--text-muted); text-align:center;">No matching results found</div>`;
  } else {
    dropdown.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="handleSearchResultClick('${r.view}', ${r.empId || null})">
        <span class="item-title">${r.title}</span>
        <span class="item-cat">${r.cat}</span>
      </div>
    `).join('');
  }
  dropdown.style.display = "block";
}

function handleSearchResultClick(view, empId) {
  document.getElementById("searchDropdown").style.display = "none";
  document.getElementById("globalSearch").value = "";
  document.getElementById("clearSearchBtn").style.display = "none";
  switchView(view);
  if (empId) {
    setTimeout(() => openEmployeeDetailsModal(empId), 150);
  }
}

// ==========================================
// QUICK ATTENDANCE & ACTIVITIES
// ==========================================
function renderQuickAttendance() {
  const container = document.getElementById("attendanceGrid");
  container.innerHTML = AppState.quickAttendance.map(item => {
    let icon = item.status === 'present' ? 'fa-check' : (item.status === 'absent' ? 'fa-xmark' : 'fa-adjust');
    return `
      <div class="day-box">
        <span class="day-number">${item.day}</span>
        <div class="status-indicator ${item.status}">
          <i class="fa-solid ${icon}"></i>
        </div>
      </div>
    `;
  }).join('');
}

function renderActivities() {
  const container = document.getElementById("activityTimeline");
  container.innerHTML = AppState.activities.map(act => `
    <div class="activity-item ${act.type}">
      <div class="activity-icon-wrap"><i class="${act.icon}"></i></div>
      <div class="activity-info">
        <p>${act.title}</p>
        <span>${act.time}</span>
      </div>
    </div>
  `).join('');
}

function renderAttendanceSheet() {
  const tbody = document.getElementById("attendanceSheetBody");
  tbody.innerHTML = AppState.attendanceSheet.map(item => `
    <tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.dept}</td>
      <td>${item.inTime}</td>
      <td>${item.outTime}</td>
      <td><span class="status-pill ${item.status.toLowerCase().replace(' ', '-')}">${item.status}</span></td>
      <td>
        <button class="btn-table-action" data-action="toggle-attendance" data-id="${item.id}">Change Status</button>
      </td>
    </tr>
  `).join('');
}

function renderDocuments(list = AppState.documents) {
  const container = document.getElementById("documentsContainer");
  container.innerHTML = list.map(doc => `
    <div class="doc-card">
      <div class="doc-top">
        <div class="doc-icon"><i class="fa-regular fa-file-pdf"></i></div>
        <div class="doc-info">
          <h4>${doc.title}</h4>
          <span>${doc.size} &bull; ${doc.date}</span>
        </div>
      </div>
      <button class="btn-secondary btn-doc-download" data-title="${doc.title}">
        <i class="fa-solid fa-download"></i> Download
      </button>
    </div>
  `).join('');
}

function renderLeavesTable() {
  const tbody = document.getElementById("leaveTableBody");
  tbody.innerHTML = AppState.leaves.map(l => `
    <tr>
      <td><strong>${l.name}</strong></td>
      <td>${l.type}</td>
      <td>${l.from}</td>
      <td>${l.to}</td>
      <td>${l.reason}</td>
      <td><span class="status-pill ${l.status.toLowerCase()}">${l.status}</span></td>
      <td>
        ${l.status === 'Pending' ? `
          <button class="btn-table-action" data-action="approve-leave" data-id="${l.id}" style="color:var(--success-color); margin-right:4px;">Approve</button>
          <button class="btn-table-action" data-action="reject-leave" data-id="${l.id}" style="color:var(--danger-color)">Reject</button>
        ` : '<em>Completed</em>'}
      </td>
    </tr>
  `).join('');
}

function renderTickets() {
  const container = document.getElementById("ticketsContainer");
  container.innerHTML = AppState.tickets.map(t => `
    <div class="ticket-item">
      <div>
        <h4 style="font-size:14px;">${t.subject}</h4>
        <small style="color:var(--text-light)">ID: ${t.id} &bull; Priority: ${t.priority}</small>
      </div>
      <span class="status-pill ${t.status.toLowerCase().replace(' ', '-')}">${t.status}</span>
    </div>
  `).join('');
}

// ==========================================
// ROUTER & MODAL CONTROLLERS
// ==========================================
function switchView(viewName) {
  document.querySelectorAll(".app-view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add("active");

  const targetNavBtn = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  if (targetNavBtn) targetNavBtn.classList.add("active");
}

function openGenericModal(title, html) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBody").innerHTML = html;
  document.getElementById("genericModal").classList.add("open");
}

function closeGenericModal() {
  document.getElementById("genericModal").classList.remove("open");
}

function showToast(msg) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--success-color)"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ==========================================
// BIND ALL APPLICATION EVENTS
// ==========================================
function bindAppEvents() {
  setupGlobalSearch();

  // Navigation
  document.querySelectorAll(".nav-item[data-view]").forEach(btn => {
    btn.addEventListener("click", () => switchView(btn.getAttribute("data-view")));
  });

  document.querySelectorAll(".quick-btn[data-route]").forEach(btn => {
    btn.addEventListener("click", () => switchView(btn.getAttribute("data-route")));
  });

  // Profile Edit
  document.getElementById("btnEditProfile").addEventListener("click", openProfileEditModal);
  document.getElementById("btnQuickProfile").addEventListener("click", openProfileEditModal);
  document.getElementById("topProfileBtn").addEventListener("click", openProfileEditModal);

  // Admin Payroll Audit
  document.getElementById("btnAuditPayroll").addEventListener("click", runPayrollAccuracyAudit);

  // Messages Popover Toggle
  const msgBtn = document.getElementById("msgToggleBtn");
  const msgPanel = document.getElementById("msgPanel");
  msgBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("notifPanel").classList.remove("open");
    msgPanel.classList.toggle("open");
  });

  // Notifications Popover Toggle
  const notifBtn = document.getElementById("notifToggleBtn");
  const notifPanel = document.getElementById("notifPanel");
  notifBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    msgPanel.classList.remove("open");
    notifPanel.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".popover-wrapper") && !e.target.closest(".search-container")) {
      msgPanel.classList.remove("open");
      notifPanel.classList.remove("open");
      document.getElementById("searchDropdown").style.display = "none";
    }
  });

  document.getElementById("markMsgsRead").addEventListener("click", () => {
    AppState.messages.forEach(m => m.read = true);
    renderMessages();
    showToast("All messages marked as read");
  });

  document.getElementById("markNotifsRead").addEventListener("click", () => {
    AppState.notifications.forEach(n => n.read = true);
    renderNotifications();
    showToast("All notifications marked as read");
  });

  // Add Employee with Salary Setup
  document.getElementById("btnOpenAddEmp").addEventListener("click", () => {
    openGenericModal("Add New Employee (With Payroll Setup)", `
      <div class="form-group">
        <label>Employee Name</label>
        <input type="text" id="inpEmpName" placeholder="e.g. Vikas Sharma" />
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="inpEmpEmail" placeholder="vikas@company.com" />
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input type="text" id="inpEmpPhone" placeholder="+91 98765 11223" />
      </div>
      <div class="form-group">
        <label>Department</label>
        <input type="text" id="inpEmpDept" placeholder="Engineering" />
      </div>
      <div class="form-group">
        <label>Role</label>
        <input type="text" id="inpEmpRole" placeholder="Frontend Developer" />
      </div>
      <div class="form-group">
        <label>Base Pay (₹)</label>
        <input type="number" id="inpEmpBase" placeholder="60000" />
      </div>
      <button class="btn-primary" id="btnSaveEmp" style="width:100%">Register & Assign Payroll</button>
    `);

    document.getElementById("btnSaveEmp").addEventListener("click", () => {
      const name = document.getElementById("inpEmpName").value.trim();
      const email = document.getElementById("inpEmpEmail").value.trim();
      const phone = document.getElementById("inpEmpPhone").value.trim() || "+91 98000 00000";
      const dept = document.getElementById("inpEmpDept").value.trim() || "General";
      const role = document.getElementById("inpEmpRole").value.trim() || "Associate";
      const basePay = Number(document.getElementById("inpEmpBase").value) || 50000;

      if (!name || !email) return showToast("Name and Email required!");

      AppState.employees.push({
        id: Date.now(),
        name,
        email,
        phone,
        empCode: "EMP-" + Math.floor(1000 + Math.random() * 9000),
        dept,
        role,
        status: "Active",
        joinDate: "Today",
        attendance: [
          { day: '01', status: 'present' }, { day: '02', status: 'present' }, { day: '03', status: 'present' },
          { day: '04', status: 'present' }, { day: '05', status: 'present' }, { day: '06', status: 'present' },
          { day: '07', status: 'present' }, { day: '08', status: 'present' }, { day: '09', status: 'present' },
          { day: '10', status: 'present' }
        ],
        salary: {
          basePay: basePay,
          allowances: Math.round(basePay * 0.15),
          deductions: Math.round(basePay * 0.10)
        }
      });

      renderEmployeesPayrollTable();
      closeGenericModal();
      showToast(`Employee ${name} registered with payroll structure!`);
    });
  });

  // Mark All Present
  document.getElementById("btnMarkAllPresent").addEventListener("click", () => {
    AppState.attendanceSheet.forEach(item => {
      item.status = "Present";
      item.inTime = "09:00 AM";
      item.outTime = "06:00 PM";
    });
    renderAttendanceSheet();
    showToast("All employees marked Present");
  });

  // Upload Doc
  document.getElementById("btnUploadDoc").addEventListener("click", () => {
    const title = prompt("Enter Document Title (e.g. October_Payroll_Summary.pdf):");
    if (title && title.trim()) {
      AppState.documents.push({ id: Date.now(), title: title.trim(), size: "1.2 MB", type: "PDF", date: "Just Now" });
      renderDocuments();
      showToast("Document uploaded!");
    }
  });

  // Apply Leave
  document.getElementById("btnApplyLeaveModal").addEventListener("click", () => {
    openGenericModal("Apply For Leave", `
      <div class="form-group">
        <label>Leave Type</label>
        <select id="inpLeaveType">
          <option>Casual Leave</option>
          <option>Sick Leave</option>
          <option>Earned Leave</option>
        </select>
      </div>
      <div class="form-group">
        <label>Reason</label>
        <textarea id="inpLeaveReason" rows="2" placeholder="State reason for leave..."></textarea>
      </div>
      <button class="btn-primary" id="btnSubmitLeave" style="width:100%">Submit Leave</button>
    `);

    document.getElementById("btnSubmitLeave").addEventListener("click", () => {
      const type = document.getElementById("inpLeaveType").value;
      const reason = document.getElementById("inpLeaveReason").value.trim() || "Personal Reason";

      AppState.leaves.push({ id: Date.now(), name: AppState.profile.name, type, from: "Upcoming", to: "Upcoming", reason, status: "Pending" });
      renderLeavesTable();
      closeGenericModal();
      showToast("Leave application submitted!");
    });
  });

  // Support Ticket
  document.getElementById("btnOpenTicketModal").addEventListener("click", () => {
    openGenericModal("Raise Support Ticket", `
      <div class="form-group">
        <label>Issue Subject</label>
        <input type="text" id="inpTicketSub" placeholder="Describe the issue" />
      </div>
      <div class="form-group">
        <label>Priority</label>
        <select id="inpTicketPrio">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <button class="btn-primary" id="btnSubmitTicket" style="width:100%">Create Ticket</button>
    `);

    document.getElementById("btnSubmitTicket").addEventListener("click", () => {
      const sub = document.getElementById("inpTicketSub").value.trim();
      const prio = document.getElementById("inpTicketPrio").value;
      if (!sub) return showToast("Subject is required!");

      AppState.tickets.unshift({ id: "T-" + Math.floor(100 + Math.random() * 900), subject: sub, status: "In Progress", priority: prio });
      renderTickets();
      closeGenericModal();
      showToast("Support ticket created!");
    });
  });

  // Logout Handlers
  const logoutModal = document.getElementById("logoutModal");
  const openLogout = () => logoutModal.classList.add("open");
  const closeLogout = () => logoutModal.classList.remove("open");

  document.getElementById("sidebarLogout").addEventListener("click", openLogout);
  document.getElementById("btnQuickLogout").addEventListener("click", openLogout);
  document.getElementById("btnCancelLogout").addEventListener("click", closeLogout);
  document.getElementById("btnModalClose").addEventListener("click", closeGenericModal);

  document.getElementById("btnConfirmLogout").addEventListener("click", () => {
    closeLogout();
    document.body.innerHTML = `
      <div style="height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#f4f6fa; font-family:'Plus Jakarta Sans', sans-serif;">
        <div style="background:#fff; padding:40px; border-radius:16px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.08); max-width:380px;">
          <i class="fa-solid fa-circle-check" style="font-size:48px; color:#10b981; margin-bottom:16px;"></i>
          <h2>Logged Out</h2>
          <p style="color:#64748b; margin:10px 0 24px;">You have successfully signed out of the HR portal.</p>
          <button onclick="location.reload()" style="background:#3b82f6; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; width:100%;">Sign In Again</button>
        </div>
      </div>
    `;
  });

  // Global Delegated Clicks (Row Click, View Profile, Delete, Toggle Attendance, Leaves)
  document.addEventListener("click", (e) => {
    // Click on Table Row or View Profile Button
    const viewBtn = e.target.closest('[data-action="view-emp"]');
    const empRow = e.target.closest('.emp-row-clickable');

    if (viewBtn) {
      const id = parseInt(viewBtn.getAttribute("data-id"));
      openEmployeeDetailsModal(id);
      return;
    } else if (empRow && !e.target.closest('button')) {
      const id = parseInt(empRow.getAttribute("data-emp-id"));
      openEmployeeDetailsModal(id);
      return;
    }

    // Delete Employee
    const delBtn = e.target.closest('[data-action="delete-emp"]');
    if (delBtn) {
      const id = parseInt(delBtn.getAttribute("data-id"));
      AppState.employees = AppState.employees.filter(emp => emp.id !== id);
      renderEmployeesPayrollTable();
      showToast("Employee deleted from payroll dictionary!");
      return;
    }

    // Toggle Attendance
    const attBtn = e.target.closest('[data-action="toggle-attendance"]');
    if (attBtn) {
      const id = parseInt(attBtn.getAttribute("data-id"));
      const record = AppState.attendanceSheet.find(a => a.id === id);
      if (record) {
        if (record.status === "Present") {
          record.status = "Absent"; record.inTime = "--"; record.outTime = "--";
        } else if (record.status === "Absent") {
          record.status = "Half Day"; record.inTime = "10:00 AM"; record.outTime = "02:30 PM";
        } else {
          record.status = "Present"; record.inTime = "09:00 AM"; record.outTime = "06:00 PM";
        }
        renderAttendanceSheet();
        showToast(`Attendance updated to ${record.status}`);
      }
      return;
    }

    // Approve Leave
    const appLeave = e.target.closest('[data-action="approve-leave"]');
    if (appLeave) {
      const id = parseInt(appLeave.getAttribute("data-id"));
      const req = AppState.leaves.find(l => l.id === id);
      if (req) { req.status = "Approved"; renderLeavesTable(); showToast("Leave Approved"); }
      return;
    }

    // Reject Leave
    const rejLeave = e.target.closest('[data-action="reject-leave"]');
    if (rejLeave) {
      const id = parseInt(rejLeave.getAttribute("data-id"));
      const req = AppState.leaves.find(l => l.id === id);
      if (req) { req.status = "Rejected"; renderLeavesTable(); showToast("Leave Rejected"); }
      return;
    }

    // Download Doc
    const downloadBtn = e.target.closest('.btn-doc-download');
    if (downloadBtn) {
      showToast(`Downloading: ${downloadBtn.getAttribute("data-title")}`);
    }
  });
}