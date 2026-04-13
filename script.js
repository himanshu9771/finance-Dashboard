// ═══════════════════════════════════════════
// MOCK DATA
// ═══════════════════════════════════════════
const MOCK_TRANSACTIONS = [
  {id:1,description:"Monthly Salary",category:"salary",type:"income",amount:85000,date:"2025-01-31"},
  {id:2,description:"Grocery Shopping",category:"food",type:"expense",amount:3200,date:"2025-01-28"},
  {id:3,description:"Netflix",category:"entertainment",type:"expense",amount:649,date:"2025-01-27"},
  {id:4,description:"Electricity Bill",category:"utilities",type:"expense",amount:1850,date:"2025-01-25"},
  {id:5,description:"Freelance Project",category:"freelance",type:"income",amount:22000,date:"2025-01-22"},
  {id:6,description:"Uber Rides",category:"transport",type:"expense",amount:1240,date:"2025-01-20"},
  {id:7,description:"Restaurant Dinner",category:"food",type:"expense",amount:2100,date:"2025-01-18"},
  {id:8,description:"Amazon Shopping",category:"shopping",type:"expense",amount:4500,date:"2025-01-15"},
  {id:9,description:"Doctor Visit",category:"health",type:"expense",amount:800,date:"2025-01-12"},
  {id:10,description:"Mutual Fund SIP",category:"investment",type:"expense",amount:10000,date:"2025-01-10"},
  {id:11,description:"Internet Bill",category:"utilities",type:"expense",amount:999,date:"2025-01-08"},
  {id:12,description:"Coffee Shop",category:"food",type:"expense",amount:450,date:"2025-01-06"},
  {id:13,description:"Monthly Salary",category:"salary",type:"income",amount:85000,date:"2024-12-31"},
  {id:14,description:"Year End Bonus",category:"salary",type:"income",amount:15000,date:"2024-12-28"},
  {id:15,description:"Christmas Shopping",category:"shopping",type:"expense",amount:8500,date:"2024-12-24"},
  {id:16,description:"Restaurant",category:"food",type:"expense",amount:2800,date:"2024-12-22"},
  {id:17,description:"Flight Tickets",category:"transport",type:"expense",amount:12000,date:"2024-12-20"},
  {id:18,description:"Electricity Bill",category:"utilities",type:"expense",amount:2100,date:"2024-12-18"},
  {id:19,description:"Freelance Project",category:"freelance",type:"income",amount:18000,date:"2024-12-15"},
  {id:20,description:"Grocery",category:"food",type:"expense",amount:3500,date:"2024-12-14"},
  {id:21,description:"Netflix",category:"entertainment",type:"expense",amount:649,date:"2024-12-12"},
  {id:22,description:"Spotify",category:"entertainment",type:"expense",amount:119,date:"2024-12-10"},
  {id:23,description:"Medicine",category:"health",type:"expense",amount:350,date:"2024-12-08"},
  {id:24,description:"Mutual Fund SIP",category:"investment",type:"expense",amount:10000,date:"2024-12-05"},
  {id:25,description:"Monthly Salary",category:"salary",type:"income",amount:85000,date:"2024-11-30"},
  {id:26,description:"Grocery Shopping",category:"food",type:"expense",amount:2900,date:"2024-11-28"},
  {id:27,description:"Gym Membership",category:"health",type:"expense",amount:1500,date:"2024-11-25"},
  {id:28,description:"Freelance Design",category:"freelance",type:"income",amount:14000,date:"2024-11-22"},
  {id:29,description:"Mobile Bill",category:"utilities",type:"expense",amount:599,date:"2024-11-20"},
  {id:30,description:"Clothes Shopping",category:"shopping",type:"expense",amount:3800,date:"2024-11-18"},
  {id:31,description:"Restaurant",category:"food",type:"expense",amount:1900,date:"2024-11-15"},
  {id:32,description:"Auto Rickshaw",category:"transport",type:"expense",amount:620,date:"2024-11-12"},
  {id:33,description:"Electricity",category:"utilities",type:"expense",amount:1750,date:"2024-11-10"},
  {id:34,description:"Netflix",category:"entertainment",type:"expense",amount:649,date:"2024-11-08"},
  {id:35,description:"Mutual Fund SIP",category:"investment",type:"expense",amount:10000,date:"2024-11-05"},
  {id:36,description:"Monthly Salary",category:"salary",type:"income",amount:85000,date:"2024-10-31"},
  {id:37,description:"Freelance Work",category:"freelance",type:"income",amount:20000,date:"2024-10-28"},
  {id:38,description:"Grocery",category:"food",type:"expense",amount:3100,date:"2024-10-25"},
  {id:39,description:"Fuel",category:"transport",type:"expense",amount:2800,date:"2024-10-20"},
  {id:40,description:"Netflix",category:"entertainment",type:"expense",amount:649,date:"2024-10-18"},
  {id:41,description:"Book Store",category:"shopping",type:"expense",amount:1200,date:"2024-10-15"},
  {id:42,description:"Electricity",category:"utilities",type:"expense",amount:1900,date:"2024-10-12"},
  {id:43,description:"Medical Checkup",category:"health",type:"expense",amount:1200,date:"2024-10-10"},
  {id:44,description:"Mutual Fund SIP",category:"investment",type:"expense",amount:10000,date:"2024-10-05"},
  {id:45,description:"Monthly Salary",category:"salary",type:"income",amount:85000,date:"2024-09-30"},
  {id:46,description:"Freelance",category:"freelance",type:"income",amount:16000,date:"2024-09-25"},
  {id:47,description:"Grocery",category:"food",type:"expense",amount:2700,date:"2024-09-22"},
  {id:48,description:"Restaurant",category:"food",type:"expense",amount:2200,date:"2024-09-18"},
  {id:49,description:"Shopping Mall",category:"shopping",type:"expense",amount:5200,date:"2024-09-15"},
  {id:50,description:"Electricity",category:"utilities",type:"expense",amount:1600,date:"2024-09-10"},
  {id:51,description:"Uber",category:"transport",type:"expense",amount:980,date:"2024-09-08"},
  {id:52,description:"Netflix",category:"entertainment",type:"expense",amount:649,date:"2024-09-06"},
  {id:53,description:"Mutual Fund SIP",category:"investment",type:"expense",amount:10000,date:"2024-09-03"},
  {id:54,description:"Monthly Salary",category:"salary",type:"income",amount:85000,date:"2024-08-31"},
  {id:55,description:"Freelance Project",category:"freelance",type:"income",amount:25000,date:"2024-08-28"},
  {id:56,description:"Grocery",category:"food",type:"expense",amount:3300,date:"2024-08-25"},
  {id:57,description:"Phone Purchase",category:"shopping",type:"expense",amount:28000,date:"2024-08-20"},
  {id:58,description:"Electricity",category:"utilities",type:"expense",amount:2200,date:"2024-08-15"},
  {id:59,description:"Restaurant",category:"food",type:"expense",amount:1800,date:"2024-08-12"},
  {id:60,description:"Mutual Fund SIP",category:"investment",type:"expense",amount:10000,date:"2024-08-05"},
];

// ═══════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════
let transactions = JSON.parse(localStorage.getItem('finova_txns')) || [...MOCK_TRANSACTIONS];
let currentRole = localStorage.getItem('finova_role') || 'viewer';
let isLoggedIn = localStorage.getItem('finova_logged_in') === 'true';
let currentPage = 1;
const PER_PAGE = 10;
let sortCol = 'date';
let sortDir = 'desc';
let editingId = null;
let trendPeriod = 12;
let charts = {};

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Auth Check
  if(isLoggedIn) {
      showApp();
      applyRole(currentRole);
      renderAll();
      setTrendPeriod(12, null);
  } else {
      showLoginScreen();
  }
  
  document.getElementById('fDate').value = new Date().toISOString().split('T')[0];
  updateThemeUI();
});

function showLoginScreen() {
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('sidebar').style.display = 'none';
}

function showApp() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('mainApp').style.display = 'flex';
    document.getElementById('sidebar').style.display = 'flex';
    setCurrentMonth();
    populateFilters();
}

function setCurrentMonth() {
  const now = new Date();
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('currentMonth').textContent = months[now.getMonth()] + ' ' + now.getFullYear();
}

function renderAll() {
  renderStatCards();
  renderRecentTransactions();
  renderTransactions();
  renderInsights();
  updateBadge();
  initCharts();
}

function saveToStorage() {
  localStorage.setItem('finova_txns', JSON.stringify(transactions));
  localStorage.setItem('finova_role', currentRole);
  localStorage.setItem('finova_logged_in', isLoggedIn);
}

// ═══════════════════════════════════════════
// AUTH SYSTEM
// ═══════════════════════════════════════════

function handleLogin() {
    const role = document.getElementById('loginRole').value;
    isLoggedIn = true;
    currentRole = role;
    saveToStorage();
    
    showApp();
    applyRole(role);
    renderAll();
    reinitCharts();
    
    showToast(`Welcome! Logged in as ${role === 'admin' ? 'Admin' : 'Viewer'}`, 'success');
}

function handleLogout() {
    isLoggedIn = false;
    // Optionally clear role on logout: currentRole = 'viewer';
    saveToStorage();
    
    // Reset UI
    document.getElementById('loginRole').value = 'viewer';
    showLoginScreen();
    
    // Destroy charts to prevent errors
    Object.values(charts).forEach(c => { try { c.destroy(); } catch(e){} });
    charts = {};
    
    showToast('Logged out successfully', 'info');
}

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
const pageTitles = { dashboard: 'Dashboard', transactions: 'Transactions', insights: 'Insights', settings: 'Settings', admin: 'Admin Panel' };

function navigate(page) {
  if(!isLoggedIn) return;

  // Prevent viewer from accessing admin page
  if(page === 'admin' && currentRole !== 'admin') {
      showToast('Access Denied: Admin only', 'error');
      return;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  
  const pageEl = document.getElementById('page-' + page);
  const navEl = document.querySelector('[data-page="' + page + '"]');
  
  if(pageEl) pageEl.classList.add('active');
  if(navEl) navEl.classList.add('active');
  
  document.getElementById('topbarTitle').textContent = pageTitles[page] || 'Dashboard';
  closeSidebar();
  
  if (page === 'insights') renderInsights();
  if (page === 'transactions') { currentPage = 1; renderTransactions(); }
}

// ═══════════════════════════════════════════
// ROLE & SETTINGS
// ═══════════════════════════════════════════
function applyRole(role) {
  currentRole = role;
  document.body.classList.remove('role-viewer', 'role-admin');
  document.body.classList.add('role-' + role);
  
  // Update UI Badges
  const badge = document.getElementById('roleBadge');
  badge.textContent = role === 'admin' ? '⚡ Admin' : '👁 Viewer';
  badge.className = 'role-badge ' + (role === 'admin' ? 'admin' : '');
  
  document.getElementById('sidebarRole').textContent = role === 'admin' ? 'Administrator' : 'Viewer';
  
  // Update Settings Page
  const settingsDisplay = document.getElementById('settingsRoleDisplay');
  if(settingsDisplay) {
      settingsDisplay.textContent = role === 'admin' ? '⚡ Admin' : '👁 Viewer';
      settingsDisplay.className = 'role-badge ' + (role === 'admin' ? 'admin' : '');
  }
  
  // Force navigation if on Admin page and switching to viewer
  if(role === 'viewer') {
      const adminPage = document.getElementById('page-admin');
      if(adminPage && adminPage.classList.contains('active')) {
          navigate('dashboard');
      }
  }
  
  renderTransactions(); // Re-render table to show/hide actions
}

function saveProfileSettings() {
    const name = document.getElementById('settingsName').value;
    document.getElementById('sidebarName').textContent = name;
    document.getElementById('greetingHeader').textContent = `Good morning, ${name} ✦`;
    showToast('Profile updated successfully', 'success');
}

function resetAllData() {
    if(confirm('Are you sure you want to reset all data? This cannot be undone.')) {
        localStorage.removeItem('finova_txns');
        transactions = [...MOCK_TRANSACTIONS];
        saveToStorage();
        renderAll();
        reinitCharts();
        showToast('Data has been reset to default', 'info');
    }
}

// ═══════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════
function toggleTheme() {
  const cur = document.body.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  document.querySelector('.icon-btn[onclick="toggleTheme()"]').textContent = theme === 'dark' ? '☀' : '☾';
  updateThemeUI();
  reinitCharts();
}

function updateThemeUI() {
    const theme = document.body.getAttribute('data-theme') || 'dark';
    const btnDark = document.getElementById('btnThemeDark');
    const btnLight = document.getElementById('btnThemeLight');
    
    if(btnDark && btnLight) {
        if(theme === 'dark') {
            btnDark.classList.add('active');
            btnLight.classList.remove('active');
        } else {
            btnDark.classList.remove('active');
            btnLight.classList.add('active');
        }
    }
}

// ═══════════════════════════════════════════
// SIDEBAR (mobile)
// ═══════════════════════════════════════════
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

// ═══════════════════════════════════════════
// COMPUTED VALUES
// ═══════════════════════════════════════════
function fmt(n) { return '₹' + Math.abs(n).toLocaleString('en-IN', {minimumFractionDigits: 0, maximumFractionDigits: 0}); }

function getMonthTxns(monthOffset = 0) {
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth() - monthOffset, 1);
  return transactions.filter(t => {
    const d = new Date(t.date);
    return d.getFullYear() === target.getFullYear() && d.getMonth() === target.getMonth();
  });
}

function sumType(txns, type) { return txns.filter(t => t.type === type).reduce((a, t) => a + t.amount, 0); }

// ═══════════════════════════════════════════
// STAT CARDS
// ═══════════════════════════════════════════
function renderStatCards() {
  const allIncome = sumType(transactions, 'income');
  const allExpense = sumType(transactions, 'expense');
  const balance = allIncome - allExpense;
  const savingsRate = allIncome > 0 ? Math.round(((allIncome - allExpense) / allIncome) * 100) : 0;

  document.getElementById('statBalance').textContent = fmt(balance);
  document.getElementById('statIncome').textContent = fmt(allIncome);
  document.getElementById('statExpense').textContent = fmt(allExpense);
  document.getElementById('statSavings').textContent = savingsRate + '%';
}

// ═══════════════════════════════════════════
// RECENT TRANSACTIONS
// ═══════════════════════════════════════════
const CAT_ICONS = {food:'🍱',transport:'🚗',shopping:'🛍',utilities:'⚡',health:'🏥',entertainment:'🎬',salary:'💼',freelance:'💻',investment:'📈',other:'📦'};
const CAT_COLORS = {food:'#f9b84a',transport:'#4facfe',shopping:'#a78bfa',utilities:'#2dd4bf',health:'#22d3a0',entertainment:'#ff7c5c',salary:'#22d3a0',freelance:'#7c6bff',investment:'#4facfe',other:'#8b90a8'};

function renderRecentTransactions() {
  const recent = [...transactions].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,6);
  const container = document.getElementById('recentTxns');
  if (!recent.length) { container.innerHTML = '<div class="empty-state"><div class="icon">◫</div><p>No transactions yet</p></div>'; return; }
  container.innerHTML = recent.map(t => `
    <div class="recent-txn-item">
      <div class="txn-avatar" style="background:${CAT_COLORS[t.category]}22;color:${CAT_COLORS[t.category]};">${CAT_ICONS[t.category]||'📦'}</div>
      <div class="txn-meta">
        <div class="txn-name">${t.description}</div>
        <div class="txn-date-cat">${formatDate(t.date)} · ${capitalize(t.category)}</div>
      </div>
      <div class="txn-amt ${t.type==='income'?'txn-income':'txn-expense'}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════
// TRANSACTIONS TABLE
// ═══════════════════════════════════════════
function populateFilters() {
  const cats = [...new Set(transactions.map(t => t.category))].sort();
  const catSel = document.getElementById('filterCat');
  catSel.innerHTML = '<option value="">All categories</option>' + cats.map(c => `<option value="${c}">${capitalize(c)}</option>`).join('');

  const months = [...new Set(transactions.map(t => t.date.slice(0,7)))].sort().reverse();
  const monthSel = document.getElementById('filterMonth');
  monthSel.innerHTML = '<option value="">All months</option>' + months.map(m => `<option value="${m}">${formatMonthYear(m)}</option>`).join('');
}

function getFilteredTxns() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const type = document.getElementById('filterType').value;
  const cat = document.getElementById('filterCat').value;
  const month = document.getElementById('filterMonth').value;

  return [...transactions]
    .filter(t => {
      if (search && !t.description.toLowerCase().includes(search) && !t.category.toLowerCase().includes(search)) return false;
      if (type && t.type !== type) return false;
      if (cat && t.category !== cat) return false;
      if (month && !t.date.startsWith(month)) return false;
      return true;
    })
    .sort((a, b) => {
      let va = a[sortCol], vb = b[sortCol];
      if (sortCol === 'amount') { va = +va; vb = +vb; }
      if (va < vb) return sortDir === 'asc' ? -1 : 1;
      if (va > vb) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
}

function renderTransactions() {
  const filtered = getFilteredTxns();
  const total = filtered.length;
  const pages = Math.ceil(total / PER_PAGE);
  if (currentPage > pages) currentPage = 1;
  const slice = filtered.slice((currentPage-1)*PER_PAGE, currentPage*PER_PAGE);
  const isAdmin = currentRole === 'admin';

  const tbody = document.getElementById('txnTableBody');
  const empty = document.getElementById('emptyState');

  if (!slice.length) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    tbody.innerHTML = slice.map(t => `
      <tr>
        <td style="color:var(--text2);font-size:12.5px;">${formatDate(t.date)}</td>
        <td style="font-weight:500;">${t.description}</td>
        <td><span class="txn-cat cat-${t.category}">${CAT_ICONS[t.category]||''} ${capitalize(t.category)}</span></td>
        <td><span class="type-badge type-${t.type}">${t.type === 'income' ? '↑' : '↓'} ${capitalize(t.type)}</span></td>
        <td class="txn-amount txn-${t.type} text-right">${t.type==='income'?'+':'-'}${fmt(t.amount)}</td>
        ${isAdmin ? `<td><div class="txn-actions"><button class="action-btn" onclick="editTxn(${t.id})" title="Edit">✎</button><button class="action-btn del" onclick="deleteTxn(${t.id})" title="Delete">✕</button></div></td>` : ''}
      </tr>
    `).join('');
  }

  document.querySelectorAll('.sort-icon').forEach(el => {
    const col = el.getAttribute('data-col');
    el.closest('th').classList.toggle('sorted', col === sortCol);
    el.textContent = col === sortCol ? (sortDir === 'asc' ? '▲' : '▼') : '▼';
  });

  document.getElementById('paginationInfo').textContent = total ? `Showing ${(currentPage-1)*PER_PAGE+1}–${Math.min(currentPage*PER_PAGE,total)} of ${total}` : 'No results';
  const pageBtns = document.getElementById('pageButtons');
  let btns = `<button class="page-btn" onclick="changePage(${currentPage-1})" ${currentPage===1?'disabled':''}>‹</button>`;
  for (let i = 1; i <= pages; i++) {
    if (pages > 7 && i > 2 && i < pages - 1 && Math.abs(i - currentPage) > 1) { if (i === 3 || i === pages-2) btns += '<span style="padding:0 4px;color:var(--text3)">…</span>'; continue; }
    btns += `<button class="page-btn ${i===currentPage?'active':''}" onclick="changePage(${i})">${i}</button>`;
  }
  btns += `<button class="page-btn" onclick="changePage(${currentPage+1})" ${currentPage===pages||!pages?'disabled':''}>›</button>`;
  pageBtns.innerHTML = btns;

  updateBadge();
}

function changePage(p) { if (p < 1 || p > Math.ceil(getFilteredTxns().length/PER_PAGE)) return; currentPage = p; renderTransactions(); }
function sortBy(col) { if (sortCol === col) sortDir = sortDir === 'asc' ? 'desc' : 'asc'; else { sortCol = col; sortDir = 'desc'; } currentPage = 1; renderTransactions(); }
function clearFilters() { document.getElementById('searchInput').value=''; document.getElementById('filterType').value=''; document.getElementById('filterCat').value=''; document.getElementById('filterMonth').value=''; currentPage=1; renderTransactions(); }
function updateBadge() { document.getElementById('txnBadge').textContent = transactions.length; }

// ═══════════════════════════════════════════
// INSIGHTS
// ═══════════════════════════════════════════
function renderInsights() {
  const expenses = transactions.filter(t => t.type === 'expense');
  const catTotals = {};
  expenses.forEach(t => { catTotals[t.category] = (catTotals[t.category]||0) + t.amount; });
  const topCat = Object.entries(catTotals).sort((a,b)=>b[1]-a[1])[0];

  const thisMonth = getMonthTxns(0);
  const lastMonth = getMonthTxns(1);
  const thisExp = sumType(thisMonth, 'expense');
  const lastExp = sumType(lastMonth, 'expense');
  const thisInc = sumType(thisMonth, 'income');
  const lastInc = sumType(lastMonth, 'income');
  const totalInc = sumType(transactions, 'income');
  const totalExp = sumType(transactions, 'expense');
  const savings = totalInc - totalExp;
  const savingsRate = totalInc > 0 ? Math.round((savings/totalInc)*100) : 0;
  const avgMonthlyExp = totalExp / 6;
  const expChange = lastExp > 0 ? Math.round(((thisExp - lastExp)/lastExp)*100) : 0;

  document.getElementById('insightCards').innerHTML = `
    <div class="insight-card">
      <div class="insight-icon" style="background:${(topCat?CAT_COLORS[topCat[0]]:'var(--amber)')}22;font-size:22px;">${topCat?CAT_ICONS[topCat[0]]:'?'}</div>
      <div class="insight-body">
        <div class="insight-label">Top Spending Category</div>
        <div class="insight-value">${topCat?capitalize(topCat[0]):'—'}</div>
        <div class="insight-desc">${topCat?fmt(topCat[1])+' total spent':''}</div>
      </div>
    </div>
    <div class="insight-card">
      <div class="insight-icon" style="background:var(--${expChange>0?'red':'green'}-bg);font-size:22px;">${expChange>0?'📈':'📉'}</div>
      <div class="insight-body">
        <div class="insight-label">Monthly Expense Change</div>
        <div class="insight-value" style="color:var(--${expChange>0?'red':'green'})">${expChange>0?'+':''}${expChange}%</div>
        <div class="insight-desc">Compared to last month</div>
      </div>
    </div>
    <div class="insight-card">
      <div class="insight-icon" style="background:var(--accent-glow);font-size:22px;">💰</div>
      <div class="insight-body">
        <div class="insight-label">Savings Rate</div>
        <div class="insight-value" style="color:var(--accent2)">${savingsRate}%</div>
        <div class="insight-desc">${fmt(savings)} saved overall</div>
      </div>
    </div>
  `;

  document.getElementById('monthComparison').innerHTML = `
    <div class="month-card">
      <div class="month-name">This Month</div>
      <div class="month-amount">${fmt(thisExp)}</div>
      <div class="month-change" style="color:var(--text2)">Income: ${fmt(thisInc)}</div>
    </div>
    <div class="month-card">
      <div class="month-name">Last Month</div>
      <div class="month-amount">${fmt(lastExp)}</div>
      <div class="month-change" style="color:var(--text2)">Income: ${fmt(lastInc)}</div>
    </div>
  `;

  const sortedCats = Object.entries(catTotals).sort((a,b)=>b[1]-a[1]);
  const maxCat = sortedCats[0]?.[1] || 1;
  const catColors = ['#7c6bff','#22d3a0','#f9b84a','#ff5f7e','#4facfe','#ff7c5c','#2dd4bf','#a78bfa','#f43f5e','#8b90a8'];
  document.getElementById('catProgress').innerHTML = sortedCats.slice(0,8).map((c,i) => `
    <div class="progress-row">
      <div class="progress-label">${capitalize(c[0])}</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${Math.round((c[1]/maxCat)*100)}%;background:${catColors[i%catColors.length]};"></div></div>
      <div class="progress-val">${fmt(c[1])}</div>
    </div>
  `).join('');

  const avgTxnVal = expenses.length ? Math.round(totalExp/expenses.length) : 0;
  const months = [...new Set(transactions.map(t => t.date.slice(0,7)))].length;
  document.getElementById('healthMetrics').innerHTML = `
    <div class="metric-row"><div class="metric-key">Total Transactions</div><div class="metric-val">${transactions.length}</div></div>
    <div class="metric-row"><div class="metric-key">Avg Monthly Expenses</div><div class="metric-val">${fmt(Math.round(avgMonthlyExp))}</div></div>
    <div class="metric-row"><div class="metric-key">Avg Transaction Value</div><div class="metric-val">${fmt(avgTxnVal)}</div></div>
    <div class="metric-row"><div class="metric-key">Total Income</div><div class="metric-val" style="color:var(--green)">${fmt(totalInc)}</div></div>
    <div class="metric-row"><div class="metric-key">Total Expenses</div><div class="metric-val" style="color:var(--red)">${fmt(totalExp)}</div></div>
    <div class="metric-row"><div class="metric-key">Net Savings</div><div class="metric-val" style="color:var(--accent2)">${fmt(savings)}</div></div>
    <div class="metric-row"><div class="metric-key">Data Period</div><div class="metric-val">${months} month${months!==1?'s':''}</div></div>
  `;

  renderMonthlyBarChart();
}

// ═══════════════════════════════════════════
// CHARTS
// ═══════════════════════════════════════════
function getChartColors() {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  return {
    gridColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    textColor: isDark ? '#8b90a8' : '#4b5280',
    tooltipBg: isDark ? '#1a1e28' : '#ffffff',
    tooltipBorder: isDark ? '#2a2f3e' : '#dde0ee',
    tooltipText: isDark ? '#e8eaf2' : '#111827',
  };
}

Chart.defaults.font.family = 'DM Sans, sans-serif';

function initCharts() {
  renderBalanceTrendChart();
  renderDonutChart();
  renderIncomeExpenseChart();
}

function reinitCharts() {
  Object.values(charts).forEach(c => { try { c.destroy(); } catch(e){} });
  charts = {};
  initCharts();
  renderMonthlyBarChart();
}

function setTrendPeriod(months, btn) {
  trendPeriod = months;
  document.querySelectorAll('.trend-btn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  renderBalanceTrendChart();
}

function renderBalanceTrendChart() {
  const c = getChartColors();
  const now = new Date();
  const labels = [], balances = [];

  const allMonths = [];
  for (let i = trendPeriod - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    allMonths.push({ key: `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`, label: d.toLocaleDateString('en-IN', {month:'short',year:'2-digit'}) });
  }

  const monthNet = {};
  transactions.forEach(t => {
    const key = t.date.slice(0,7);
    monthNet[key] = (monthNet[key]||0) + (t.type==='income'?t.amount:-t.amount);
  });

  let cumBalance = 0;
  allMonths.forEach(m => {
    cumBalance += (monthNet[m.key]||0);
    labels.push(m.label);
    balances.push(cumBalance);
  });

  if (charts.balanceTrend) charts.balanceTrend.destroy();
  const ctx = document.getElementById('balanceTrendChart').getContext('2d');
  const grad = ctx.createLinearGradient(0,0,0,280);
  grad.addColorStop(0,'rgba(124,107,255,0.25)');
  grad.addColorStop(1,'rgba(124,107,255,0)');

  charts.balanceTrend = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets: [{ label:'Balance', data: balances, borderColor:'#7c6bff', backgroundColor: grad, borderWidth:2.5, tension:0.4, pointRadius:4, pointBackgroundColor:'#7c6bff', pointBorderColor:'var(--surface)', pointBorderWidth:2, fill:true }] },
    options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false}, tooltip:{ backgroundColor:c.tooltipBg, borderColor:c.tooltipBorder, borderWidth:1, titleColor:c.tooltipText, bodyColor:c.textColor, padding:12, callbacks:{ label: ctx => ' ' + fmt(ctx.raw) } } }, scales:{ x:{ grid:{color:c.gridColor}, ticks:{color:c.textColor,font:{size:11}} }, y:{ grid:{color:c.gridColor}, ticks:{color:c.textColor,font:{size:11}, callback: v => '₹'+Math.abs(v/1000).toFixed(0)+'k'} } } }
  });
}

function renderDonutChart() {
  const c = getChartColors();
  const expenses = transactions.filter(t => t.type === 'expense');
  const catTotals = {};
  expenses.forEach(t => { catTotals[t.category] = (catTotals[t.category]||0) + t.amount; });
  const sorted = Object.entries(catTotals).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const colors = ['#7c6bff','#22d3a0','#f9b84a','#ff5f7e','#4facfe','#ff7c5c'];

  if (charts.donut) charts.donut.destroy();
  charts.donut = new Chart(document.getElementById('spendDonutChart').getContext('2d'), {
    type: 'doughnut',
    data: { labels: sorted.map(s=>capitalize(s[0])), datasets:[{ data: sorted.map(s=>s[1]), backgroundColor: colors, borderWidth:0, hoverOffset:8 }] },
    options: { responsive:true, maintainAspectRatio:true, cutout:'72%', plugins:{ legend:{display:false}, tooltip:{ backgroundColor:c.tooltipBg, borderColor:c.tooltipBorder, borderWidth:1, titleColor:c.tooltipText, bodyColor:c.textColor, padding:10, callbacks:{ label: ctx => ' '+fmt(ctx.raw) } } } }
  });

  const total = sorted.reduce((a,s)=>a+s[1],0);
  document.getElementById('donutLegend').innerHTML = sorted.map((s,i)=>`
    <div class="legend-item">
      <div class="legend-label"><div class="legend-dot" style="background:${colors[i]};"></div>${capitalize(s[0])}</div>
      <div class="legend-val">${Math.round((s[1]/total)*100)}%</div>
    </div>
  `).join('');
}

function renderIncomeExpenseChart() {
  const c = getChartColors();
  const now = new Date();
  const labels=[], incomes=[], expenses=[];
  for (let i=5;i>=0;i--) {
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    const monthly = transactions.filter(t=>t.date.startsWith(key));
    labels.push(d.toLocaleDateString('en-IN',{month:'short'}));
    incomes.push(sumType(monthly,'income'));
    expenses.push(sumType(monthly,'expense'));
  }
  if (charts.incomeExpense) charts.incomeExpense.destroy();
  charts.incomeExpense = new Chart(document.getElementById('incomeExpenseChart').getContext('2d'), {
    type:'bar',
    data:{ labels, datasets:[
      { label:'Income', data:incomes, backgroundColor:'rgba(34,211,160,0.8)', borderRadius:6, borderSkipped:false },
      { label:'Expenses', data:expenses, backgroundColor:'rgba(255,95,126,0.8)', borderRadius:6, borderSkipped:false }
    ]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{labels:{color:c.textColor,usePointStyle:true,pointStyle:'circle',font:{size:11}}}, tooltip:{ backgroundColor:c.tooltipBg, borderColor:c.tooltipBorder, borderWidth:1, titleColor:c.tooltipText, bodyColor:c.textColor, padding:12, callbacks:{ label: ctx=>' '+fmt(ctx.raw) } } }, scales:{ x:{grid:{color:c.gridColor},ticks:{color:c.textColor,font:{size:11}}}, y:{grid:{color:c.gridColor},ticks:{color:c.textColor,font:{size:11},callback:v=>'₹'+Math.abs(v/1000).toFixed(0)+'k'}} } }
  });
}

function renderMonthlyBarChart() {
  const c = getChartColors();
  const now = new Date();
  const labels=[], data=[];
  for (let i=5;i>=0;i--) {
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    const monthly = transactions.filter(t=>t.date.startsWith(key));
    labels.push(d.toLocaleDateString('en-IN',{month:'short'}));
    data.push(sumType(monthly,'expense'));
  }
  if (charts.monthly) charts.monthly.destroy();
  const el = document.getElementById('monthlyBarChart');
  if (!el) return;
  charts.monthly = new Chart(el.getContext('2d'), {
    type:'bar',
    data:{ labels, datasets:[{ label:'Expenses', data, backgroundColor: data.map((_,i)=>i===data.length-1?'rgba(124,107,255,0.85)':'rgba(124,107,255,0.35)'), borderRadius:6, borderSkipped:false }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false}, tooltip:{ backgroundColor:c.tooltipBg, borderColor:c.tooltipBorder, borderWidth:1, titleColor:c.tooltipText, bodyColor:c.textColor, padding:12, callbacks:{ label: ctx=>' '+fmt(ctx.raw) } } }, scales:{ x:{grid:{color:c.gridColor},ticks:{color:c.textColor,font:{size:11}}}, y:{grid:{color:c.gridColor},ticks:{color:c.textColor,font:{size:11},callback:v=>'₹'+Math.abs(v/1000).toFixed(0)+'k'}} } }
  });
}

// ═══════════════════════════════════════════
// MODAL / CRUD
// ═══════════════════════════════════════════
function openModal(id = null) {
  if(currentRole !== 'admin') {
      showToast('Admin access required', 'error');
      return;
  }
  editingId = id;
  const modal = document.getElementById('modalOverlay');
  document.getElementById('modalTitle').textContent = id ? 'Edit Transaction' : 'Add Transaction';
  document.getElementById('saveBtn').textContent = id ? 'Save Changes' : 'Save Transaction';
  if (id) {
    const t = transactions.find(x => x.id === id);
    if (t) {
      document.getElementById('fDesc').value = t.description;
      document.getElementById('fAmount').value = t.amount;
      document.getElementById('fType').value = t.type;
      document.getElementById('fCat').value = t.category;
      document.getElementById('fDate').value = t.date;
    }
  } else {
    document.getElementById('fDesc').value = '';
    document.getElementById('fAmount').value = '';
    document.getElementById('fType').value = 'expense';
    document.getElementById('fCat').value = 'food';
    document.getElementById('fDate').value = new Date().toISOString().split('T')[0];
  }
  modal.classList.add('open');
}

function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); editingId = null; }
function closeModalOnBg(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }

function saveTransaction() {
  const desc = document.getElementById('fDesc').value.trim();
  const amount = parseFloat(document.getElementById('fAmount').value);
  const type = document.getElementById('fType').value;
  const category = document.getElementById('fCat').value;
  const date = document.getElementById('fDate').value;

  if (!desc) { showToast('Please enter a description','error'); return; }
  if (!amount || amount <= 0) { showToast('Please enter a valid amount','error'); return; }
  if (!date) { showToast('Please select a date','error'); return; }

  if (editingId) {
    const idx = transactions.findIndex(t => t.id === editingId);
    if (idx !== -1) transactions[idx] = { ...transactions[idx], description:desc, amount, type, category, date };
    showToast('Transaction updated ✓','success');
  } else {
    const newId = Math.max(0, ...transactions.map(t=>t.id)) + 1;
    transactions.unshift({ id:newId, description:desc, amount, type, category, date });
    showToast('Transaction added ✓','success');
  }

  saveToStorage();
  populateFilters();
  renderAll();
  closeModal();
}

function editTxn(id) { openModal(id); }

function deleteTxn(id) {
  if(currentRole !== 'admin') return;
  if (!confirm('Delete this transaction?')) return;
  transactions = transactions.filter(t => t.id !== id);
  saveToStorage();
  populateFilters();
  renderAll();
  showToast('Transaction deleted','info');
}

// ═══════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════
function exportCSV() {
  const filtered = getFilteredTxns();
  const rows = [['Date','Description','Category','Type','Amount']];
  filtered.forEach(t => rows.push([t.date, t.description, t.category, t.type, t.amount]));
  const csv = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'finova-transactions.csv';
  a.click();
  showToast('Exported ' + filtered.length + ' transactions','success');
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
const TOAST_ICONS = { success:'✓', error:'✕', info:'ℹ' };
const TOAST_COLORS = { success:'var(--green)', error:'var(--red)', info:'var(--accent2)' };

function showToast(msg, type='info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span style="color:${TOAST_COLORS[type]};font-size:15px;">${TOAST_ICONS[type]}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('closing'); setTimeout(() => toast.remove(), 300); }, 2800);
}

// ═══════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function formatDate(d) { return new Date(d + 'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}); }
function formatMonthYear(key) { const [y,m] = key.split('-'); return new Date(+y,+m-1).toLocaleDateString('en-IN',{month:'long',year:'numeric'}); }