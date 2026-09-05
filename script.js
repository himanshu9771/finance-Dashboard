/* ═════════════════════════════════════════════════════════════════════
   FINOVA PRO - WORKSPACE LOGIC & ENGINE
   ═════════════════════════════════════════════════════════════════════ */

// ── Default Mock Datasets ──
const MOCK_TRANSACTIONS = [
  { id: 1, description: "Monthly Salary", category: "salary", type: "income", amount: 85000, date: "2025-01-31" },
  { id: 2, description: "Grocery Supermarket", category: "food", type: "expense", amount: 3400, date: "2025-01-28" },
  { id: 3, description: "Netflix 4K Ultra", category: "entertainment", type: "expense", amount: 649, date: "2025-01-27" },
  { id: 4, description: "Electricity & Utility Bill", category: "utilities", type: "expense", amount: 1850, date: "2025-01-25" },
  { id: 5, description: "Freelance UI Design Project", category: "freelance", type: "income", amount: 24000, date: "2025-01-22" },
  { id: 6, description: "Uber Rides", category: "transport", type: "expense", amount: 1240, date: "2025-01-20" },
  { id: 7, description: "Gourmet Dinner Party", category: "food", type: "expense", amount: 2800, date: "2025-01-18" },
  { id: 8, description: "Electronics & Tech Accessories", category: "shopping", type: "expense", amount: 4500, date: "2025-01-15" },
  { id: 9, description: "General Health Checkup", category: "health", type: "expense", amount: 1200, date: "2025-01-12" },
  { id: 10, description: "Mutual Fund SIP Investment", category: "investment", type: "expense", amount: 10000, date: "2025-01-10" },
  { id: 11, description: "High-Speed Fiber Internet", category: "utilities", type: "expense", amount: 999, date: "2025-01-08" },
  { id: 12, description: "Coffee & Bakery", category: "food", type: "expense", amount: 450, date: "2025-01-06" },
  { id: 13, description: "Monthly Salary", category: "salary", type: "income", amount: 85000, date: "2024-12-31" },
  { id: 14, description: "Performance Bonus", category: "salary", type: "income", amount: 15000, date: "2024-12-28" },
  { id: 15, description: "Holiday Shopping", category: "shopping", type: "expense", amount: 8500, date: "2024-12-24" },
  { id: 16, description: "Fine Dining Restaurant", category: "food", type: "expense", amount: 3100, date: "2024-12-22" },
  { id: 17, description: "Flight Tickets", category: "transport", type: "expense", amount: 11500, date: "2024-12-20" },
  { id: 18, description: "Electricity Bill", category: "utilities", type: "expense", amount: 2100, date: "2024-12-18" },
  { id: 19, description: "Freelance Project", category: "freelance", type: "income", amount: 18000, date: "2024-12-15" },
  { id: 20, description: "Organic Grocery Store", category: "food", type: "expense", amount: 3500, date: "2024-12-14" },
  { id: 21, description: "Spotify Family", category: "entertainment", type: "expense", amount: 179, date: "2024-12-10" }
];

const DEFAULT_CATEGORIES = {
  food: { name: "Food & Dining", icon: "🍔", color: "#10b981" },
  transport: { name: "Transport & Travel", icon: "🚗", color: "#06b6d4" },
  shopping: { name: "Shopping", icon: "🛍️", color: "#8b5cf6" },
  utilities: { name: "Utilities & Bills", icon: "⚡", color: "#f59e0b" },
  health: { name: "Health & Fitness", icon: "💊", color: "#f43f5e" },
  entertainment: { name: "Entertainment", icon: "🎬", color: "#6366f1" },
  salary: { name: "Salary", icon: "💼", color: "#10b981" },
  freelance: { name: "Freelance Work", icon: "💻", color: "#06b6d4" },
  investment: { name: "Investments", icon: "📈", color: "#8b5cf6" },
  other: { name: "Other", icon: "📦", color: "#64748b" }
};

const DEFAULT_GOALS = [
  { id: 1, title: "Emergency Vault", target: 100000, current: 65000, icon: "🛡️" },
  { id: 2, title: "Tech Gear Upgrade", target: 50000, current: 28000, icon: "💻" },
  { id: 3, title: "Summer Vacation", target: 80000, current: 35000, icon: "✈️" }
];

const DEFAULT_BUDGETS = {
  food: 12000,
  shopping: 10000,
  transport: 6000,
  utilities: 5000,
  entertainment: 4000
};

const DEFAULT_SUBSCRIPTIONS = [
  { id: 1, name: "Netflix 4K Premium", cost: 649, day: 15, active: true },
  { id: 2, name: "Spotify Family Plan", cost: 179, day: 10, active: true },
  { id: 3, name: "Gym & Fitness Club", cost: 1500, day: 1, active: true },
  { id: 4, name: "iCloud 2TB Storage", cost: 219, day: 22, active: true }
];

// ── Application State ──
let transactions = JSON.parse(localStorage.getItem('finova_pro_txns')) || [...MOCK_TRANSACTIONS];
let goals = JSON.parse(localStorage.getItem('finova_pro_goals')) || [...DEFAULT_GOALS];
let budgets = JSON.parse(localStorage.getItem('finova_pro_budgets')) || { ...DEFAULT_BUDGETS };
let subscriptions = JSON.parse(localStorage.getItem('finova_pro_subs')) || [...DEFAULT_SUBSCRIPTIONS];

let currency = localStorage.getItem('finova_pro_currency') || 'INR';
let theme = localStorage.getItem('finova_pro_theme') || 'dark';
let userName = localStorage.getItem('finova_pro_name') || 'Alex Kumar';

let currentPage = 1;
const PER_PAGE = 8;
let sortCol = 'date';
let sortDir = 'desc';
let editingTxnId = null;
let trendPeriod = 12;
let chartInstances = {};

// Currency Map
const CURRENCY_SYMBOLS = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£"
};

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(theme);
  initUI();
  renderAllViews();
});

function initUI() {
  document.getElementById('currencySelector').value = currency;
  document.getElementById('settingCurrency').value = currency;
  document.getElementById('settingName').value = userName;
  document.getElementById('sidebarName').textContent = userName;
  document.getElementById('greetingHeader').textContent = `Welcome back, ${userName.split(' ')[0]} ✦`;
  document.getElementById('txDate').value = new Date().toISOString().split('T')[0];

  populateCategoryDropdowns();
}

function saveState() {
  localStorage.setItem('finova_pro_txns', JSON.stringify(transactions));
  localStorage.setItem('finova_pro_goals', JSON.stringify(goals));
  localStorage.setItem('finova_pro_budgets', JSON.stringify(budgets));
  localStorage.setItem('finova_pro_subs', JSON.stringify(subscriptions));
  localStorage.setItem('finova_pro_currency', currency);
  localStorage.setItem('finova_pro_theme', theme);
  localStorage.setItem('finova_pro_name', userName);
}

// ── Navigation & Views ──
function navigate(pageId) {
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-page') === pageId);
  });

  document.querySelectorAll('.page-view').forEach(page => {
    page.classList.remove('active');
  });

  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  const titles = {
    'dashboard': 'Dashboard Overview',
    'transactions': 'Transaction Manager',
    'budgets-goals': 'Savings Goals & Budgets',
    'subscriptions': 'Recurring Subscriptions',
    'analytics': 'AI Analytics & Health',
    'settings': 'Preferences & Backup'
  };
  document.getElementById('pageTitle').textContent = titles[pageId] || 'Workspace';

  toggleSidebar(false);
  renderAllViews();
}

function toggleSidebar(open) {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (open) {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  } else {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }
}

// ── Formatting Utilities ──
function formatCurrency(amount) {
  const symbol = CURRENCY_SYMBOLS[currency] || "₹";
  return `${symbol}${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  saveState();
  reinitCharts();
}

function applyTheme(th) {
  document.documentElement.setAttribute('data-theme', th);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = th === 'dark' ? '☀️' : '🌙';
}

function changeCurrency(curr) {
  currency = curr;
  document.getElementById('currencySelector').value = curr;
  document.getElementById('settingCurrency').value = curr;
  saveState();
  renderAllViews();
  showToast(`Currency updated to ${curr}`, 'success');
}

// ── Master Render Engine ──
function renderAllViews() {
  renderStatCards();
  renderRecentTxns();
  renderTransactions();
  renderGoals();
  renderBudgets();
  renderSubscriptions();
  renderAIAdvisor();
  updateBadge();
  initCharts();
}

function updateBadge() {
  document.getElementById('txnBadge').textContent = transactions.length;
}

// ── Dashboard Calculations ──
function renderStatCards() {
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach(t => {
    if (t.type === 'income') totalIncome += Number(t.amount);
    if (t.type === 'expense') totalExpense += Number(t.amount);
  });

  const netBalance = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? Math.max(0, ((totalIncome - totalExpense) / totalIncome) * 100) : 0;

  document.getElementById('statBalance').textContent = formatCurrency(netBalance);
  document.getElementById('statIncome').textContent = formatCurrency(totalIncome);
  document.getElementById('statExpense').textContent = formatCurrency(totalExpense);
  document.getElementById('statSavings').textContent = `${savingsRate.toFixed(1)}%`;
}

function renderRecentTxns() {
  const container = document.getElementById('recentTxnList');
  if (!container) return;

  const recent = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  if (recent.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text-muted);">No recent transactions</div>`;
    return;
  }

  container.innerHTML = recent.map(t => {
    const cat = DEFAULT_CATEGORIES[t.category] || { icon: "📦", name: t.category };
    const isIncome = t.type === 'income';
    return `
      <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 0; border-bottom:1px solid var(--border);">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:36px; height:36px; border-radius:var(--radius-md); background:var(--surface-input); display:flex; align-items:center; justify-content:center; font-size:16px;">
            ${cat.icon}
          </div>
          <div>
            <div style="font-weight:700; font-size:13px;">${t.description}</div>
            <div style="font-size:11px; color:var(--text-muted);">${t.date}</div>
          </div>
        </div>
        <div class="amount-cell ${isIncome ? 'amount-income' : 'amount-expense'}">
          ${isIncome ? '+' : '-'}${formatCurrency(t.amount)}
        </div>
      </div>
    `;
  }).join('');
}

// ── Transaction Management ──
function populateCategoryDropdowns() {
  const txCat = document.getElementById('txCategory');
  const filterCat = document.getElementById('filterCategory');
  const budgetCat = document.getElementById('budgetCategorySelect');

  const optionsHTML = Object.keys(DEFAULT_CATEGORIES).map(key => {
    const c = DEFAULT_CATEGORIES[key];
    return `<option value="${key}">${c.icon} ${c.name}</option>`;
  }).join('');

  if (txCat) txCat.innerHTML = optionsHTML;
  if (budgetCat) budgetCat.innerHTML = optionsHTML;
  if (filterCat) filterCat.innerHTML = `<option value="">All Categories</option>` + optionsHTML;
}

function renderTransactions() {
  const tbody = document.getElementById('txnTableBody');
  if (!tbody) return;

  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const filterType = document.getElementById('filterType')?.value || '';
  const filterCat = document.getElementById('filterCategory')?.value || '';

  let filtered = transactions.filter(t => {
    const matchesSearch = t.description.toLowerCase().includes(search) || t.amount.toString().includes(search);
    const matchesType = !filterType || t.type === filterType;
    const matchesCat = !filterCat || t.category === filterCat;
    return matchesSearch && matchesType && matchesCat;
  });

  filtered.sort((a, b) => {
    let valA = a[sortCol];
    let valB = b[sortCol];
    if (sortCol === 'amount') { valA = Number(valA); valB = Number(valB); }
    if (valA < valB) return sortDir === 'asc' ? -1 : 1;
    if (valA > valB) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const total = filtered.length;
  const startIdx = (currentPage - 1) * PER_PAGE;
  const pageData = filtered.slice(startIdx, startIdx + PER_PAGE);

  document.getElementById('paginationInfo').textContent = `Showing ${pageData.length ? startIdx + 1 : 0} to ${Math.min(startIdx + PER_PAGE, total)} of ${total} entries`;

  if (pageData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">No transactions match your search.</td></tr>`;
    renderPaginationBtns(0);
    return;
  }

  tbody.innerHTML = pageData.map(t => {
    const cat = DEFAULT_CATEGORIES[t.category] || { icon: "📦", name: t.category };
    const isIncome = t.type === 'income';
    return `
      <tr>
        <td style="font-family:var(--font-mono); font-size:12px;">${t.date}</td>
        <td style="font-weight:700;">${t.description}</td>
        <td><span class="category-tag">${cat.icon} ${cat.name}</span></td>
        <td><span class="category-tag" style="background:${isIncome ? 'var(--primary-light)' : 'var(--rose-light)'}; color:${isIncome ? 'var(--primary)' : 'var(--rose)'};">${t.type.toUpperCase()}</span></td>
        <td class="amount-cell ${isIncome ? 'amount-income' : 'amount-expense'}">${isIncome ? '+' : '-'}${formatCurrency(t.amount)}</td>
        <td style="text-align:center;">
          <div style="display:flex; justify-content:center; gap:6px;">
            <button class="icon-btn" style="width:30px; height:30px; font-size:12px;" onclick="openTxnModal(${t.id})">✏️</button>
            <button class="icon-btn" style="width:30px; height:30px; font-size:12px; color:var(--rose);" onclick="deleteTransaction(${t.id})">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  renderPaginationBtns(Math.ceil(total / PER_PAGE));
}

function renderPaginationBtns(totalPages) {
  const container = document.getElementById('paginationBtns');
  if (!container) return;

  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `<div class="page-num ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</div>`;
  }
  container.innerHTML = html;
}

function changePage(page) {
  currentPage = page;
  renderTransactions();
}

function sortBy(col) {
  if (sortCol === col) {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    sortCol = col;
    sortDir = 'desc';
  }
  renderTransactions();
}

function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterType').value = '';
  document.getElementById('filterCategory').value = '';
  renderTransactions();
}

function openTxnModal(id = null) {
  editingTxnId = id;
  const modal = document.getElementById('txnModal');
  const title = document.getElementById('txnModalTitle');

  if (id) {
    const t = transactions.find(x => x.id === id);
    if (t) {
      title.textContent = 'Edit Transaction';
      document.getElementById('txDesc').value = t.description;
      document.getElementById('txAmount').value = t.amount;
      document.getElementById('txType').value = t.type;
      document.getElementById('txCategory').value = t.category;
      document.getElementById('txDate').value = t.date;
    }
  } else {
    title.textContent = 'Add Transaction';
    document.getElementById('txDesc').value = '';
    document.getElementById('txAmount').value = '';
    document.getElementById('txDate').value = new Date().toISOString().split('T')[0];
  }
  modal.classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function saveTransaction() {
  const desc = document.getElementById('txDesc').value.trim();
  const amount = parseFloat(document.getElementById('txAmount').value);
  const type = document.getElementById('txType').value;
  const category = document.getElementById('txCategory').value;
  const date = document.getElementById('txDate').value;

  if (!desc || isNaN(amount) || amount <= 0 || !date) {
    showToast('Please enter a valid description, amount, and date.', 'error');
    return;
  }

  if (editingTxnId) {
    const index = transactions.findIndex(t => t.id === editingTxnId);
    if (index !== -1) {
      transactions[index] = { id: editingTxnId, description: desc, amount, type, category, date };
    }
  } else {
    const newId = transactions.length ? Math.max(...transactions.map(t => t.id)) + 1 : 1;
    transactions.unshift({ id: newId, description: desc, amount, type, category, date });
  }

  saveState();
  closeModal('txnModal');
  renderAllViews();
  reinitCharts();
  showToast('Transaction saved successfully!', 'success');
}

function deleteTransaction(id) {
  if (confirm('Are you sure you want to delete this transaction?')) {
    transactions = transactions.filter(t => t.id !== id);
    saveState();
    renderAllViews();
    reinitCharts();
    showToast('Transaction deleted.', 'success');
  }
}

// ── Savings Goals Engine ──
function renderGoals() {
  const container = document.getElementById('goalsGrid');
  if (!container) return;

  container.innerHTML = goals.map(g => {
    const percent = Math.min(100, Math.round((g.current / g.target) * 100));
    return `
      <div class="goal-card">
        <div class="goal-header">
          <div class="goal-title">${g.icon} ${g.title}</div>
          <span class="category-tag" style="color:var(--primary);">${percent}%</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-fill primary" style="width: ${percent}%;"></div>
        </div>
        <div class="goal-meta">
          <span>Saved: ${formatCurrency(g.current)}</span>
          <span>Target: ${formatCurrency(g.target)}</span>
        </div>
        <div class="goal-actions">
          <button class="btn btn-ghost" style="flex:1; padding:6px; font-size:12px;" onclick="depositGoal(${g.id})">＋ Deposit</button>
          <button class="icon-btn" style="width:32px; height:32px; font-size:12px; color:var(--rose);" onclick="deleteGoal(${g.id})">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

function openGoalModal() {
  document.getElementById('goalTitle').value = '';
  document.getElementById('goalTarget').value = '';
  document.getElementById('goalCurrent').value = '';
  document.getElementById('goalModal').classList.add('active');
}

function saveGoal() {
  const title = document.getElementById('goalTitle').value.trim();
  const target = parseFloat(document.getElementById('goalTarget').value);
  const current = parseFloat(document.getElementById('goalCurrent').value) || 0;

  if (!title || isNaN(target) || target <= 0) {
    showToast('Please enter a goal title and target amount.', 'error');
    return;
  }

  const newGoal = {
    id: goals.length ? Math.max(...goals.map(g => g.id)) + 1 : 1,
    title,
    target,
    current,
    icon: "🎯"
  };

  goals.push(newGoal);
  saveState();
  closeModal('goalModal');
  renderGoals();
  showToast('New Savings Goal created!', 'success');
}

function depositGoal(id) {
  const amountStr = prompt('Enter deposit amount into this goal:');
  const amount = parseFloat(amountStr);
  if (!isNaN(amount) && amount > 0) {
    const goal = goals.find(g => g.id === id);
    if (goal) {
      goal.current += amount;
      saveState();
      renderGoals();
      showToast(`Deposited ${formatCurrency(amount)} into ${goal.title}`, 'success');
    }
  }
}

function deleteGoal(id) {
  if (confirm('Delete this goal?')) {
    goals = goals.filter(g => g.id !== id);
    saveState();
    renderGoals();
    showToast('Goal removed.', 'success');
  }
}

// ── Category Budgets Engine ──
function renderBudgets() {
  const container = document.getElementById('budgetsGrid');
  if (!container) return;

  const currentMonthExpenses = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    currentMonthExpenses[t.category] = (currentMonthExpenses[t.category] || 0) + Number(t.amount);
  });

  container.innerHTML = Object.keys(budgets).map(catKey => {
    const limit = budgets[catKey];
    const spent = currentMonthExpenses[catKey] || 0;
    const percent = Math.min(100, Math.round((spent / limit) * 100));
    const cat = DEFAULT_CATEGORIES[catKey] || { icon: "📦", name: catKey };

    let fillClass = "primary";
    if (percent > 90) fillClass = "rose";
    else if (percent > 75) fillClass = "amber";

    return `
      <div class="budget-card">
        <div class="goal-header">
          <div class="goal-title">${cat.icon} ${cat.name}</div>
          <span style="font-weight:700; font-size:12px; color:${percent > 90 ? 'var(--rose)' : 'var(--text-secondary)'};">${percent}% Spent</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-fill ${fillClass}" style="width: ${percent}%;"></div>
        </div>
        <div class="goal-meta">
          <span>Spent: ${formatCurrency(spent)}</span>
          <span>Limit: ${formatCurrency(limit)}</span>
        </div>
      </div>
    `;
  }).join('');
}

function openBudgetModal() {
  document.getElementById('budgetModal').classList.add('active');
}

function saveBudgetLimit() {
  const cat = document.getElementById('budgetCategorySelect').value;
  const limit = parseFloat(document.getElementById('budgetLimitInput').value);

  if (isNaN(limit) || limit <= 0) {
    showToast('Please enter a valid monthly limit.', 'error');
    return;
  }

  budgets[cat] = limit;
  saveState();
  closeModal('budgetModal');
  renderBudgets();
  renderAIAdvisor();
  showToast('Category budget limit updated!', 'success');
}

// ── Subscriptions Engine ──
function renderSubscriptions() {
  const container = document.getElementById('subsGrid');
  if (!container) return;

  let totalMonthlyCost = 0;
  subscriptions.forEach(s => {
    if (s.active) totalMonthlyCost += Number(s.cost);
  });

  document.getElementById('totalSubCost').textContent = formatCurrency(totalMonthlyCost);

  const today = new Date().getDate();

  container.innerHTML = subscriptions.map(s => {
    const daysLeft = s.day >= today ? s.day - today : 30 - (today - s.day);
    return `
      <div class="sub-card">
        <div class="goal-header">
          <div class="goal-title">🔄 ${s.name}</div>
          <span class="category-tag" style="background:var(--secondary-light); color:var(--secondary);">${daysLeft}d left</span>
        </div>
        <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; margin: 8px 0;">
          ${formatCurrency(s.cost)} <span style="font-size:11px; color:var(--text-muted);">/ mo</span>
        </div>
        <div class="goal-meta">
          <span>Renews on day ${s.day}</span>
          <button class="icon-btn" style="width:28px; height:28px; font-size:11px; color:var(--rose);" onclick="deleteSubscription(${s.id})">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

function openSubModal() {
  document.getElementById('subName').value = '';
  document.getElementById('subCost').value = '';
  document.getElementById('subDay').value = '';
  document.getElementById('subModal').classList.add('active');
}

function saveSubscription() {
  const name = document.getElementById('subName').value.trim();
  const cost = parseFloat(document.getElementById('subCost').value);
  const day = parseInt(document.getElementById('subDay').value);

  if (!name || isNaN(cost) || cost <= 0 || isNaN(day) || day < 1 || day > 31) {
    showToast('Please enter valid subscription details.', 'error');
    return;
  }

  subscriptions.push({
    id: subscriptions.length ? Math.max(...subscriptions.map(s => s.id)) + 1 : 1,
    name,
    cost,
    day,
    active: true
  });

  saveState();
  closeModal('subModal');
  renderSubscriptions();
  showToast('Subscription added!', 'success');
}

function deleteSubscription(id) {
  subscriptions = subscriptions.filter(s => s.id !== id);
  saveState();
  renderSubscriptions();
  showToast('Subscription removed.', 'success');
}

// ── AI Financial Health Engine ──
function renderAIAdvisor() {
  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    if (t.type === 'income') income += Number(t.amount);
    if (t.type === 'expense') expense += Number(t.amount);
  });

  const savingsRate = income > 0 ? ((income - expense) / income) * 100 : 0;

  let score = 70;
  if (savingsRate > 30) score += 20;
  else if (savingsRate > 15) score += 10;
  else score -= 15;

  let advisorMsg = "Your spending velocity is well controlled. Keep maintaining your savings buffer!";
  if (score > 85) {
    advisorMsg = "Outstanding financial health! Your savings rate is strong and your budget limits are intact.";
  } else if (score < 60) {
    advisorMsg = "Caution: Expense velocity is high this month relative to income. Consider capping dining out & discretionary shopping.";
  }

  const scoreEl = document.getElementById('healthScoreVal');
  const textEl = document.getElementById('aiAdvisorText');

  if (scoreEl) scoreEl.textContent = `${Math.min(100, Math.max(0, score))} / 100`;
  if (textEl) textEl.textContent = advisorMsg;

  renderCategoryVelocityList();
}

function renderCategoryVelocityList() {
  const container = document.getElementById('categoryProgressList');
  if (!container) return;

  const expenses = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    expenses[t.category] = (expenses[t.category] || 0) + Number(t.amount);
  });

  const totalExpense = Object.values(expenses).reduce((a, b) => a + b, 0) || 1;

  container.innerHTML = Object.keys(expenses).map(catKey => {
    const spent = expenses[catKey];
    const pct = Math.round((spent / totalExpense) * 100);
    const cat = DEFAULT_CATEGORIES[catKey] || { icon: "📦", name: catKey };

    return `
      <div>
        <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:700; margin-bottom:4px;">
          <span>${cat.icon} ${cat.name}</span>
          <span style="font-family:var(--font-mono);">${formatCurrency(spent)} (${pct}%)</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-fill primary" style="width:${pct}%;"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Chart.js Visual Engine ──
function initCharts() {
  reinitCharts();
}

function reinitCharts() {
  Object.values(chartInstances).forEach(chart => chart && chart.destroy());
  chartInstances = {};

  initBalanceTrendChart();
  initCategoryDonutChart();
  initCashflowBarChart();
  initAnalyticsBarChart();
}

function setTrendPeriod(months, btn) {
  trendPeriod = months;
  if (btn) {
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.replace('btn-primary', 'btn-ghost'));
    btn.classList.replace('btn-ghost', 'btn-primary');
  }
  initBalanceTrendChart();
}

function initBalanceTrendChart() {
  const ctx = document.getElementById('balanceTrendChart')?.getContext('2d');
  if (!ctx) return;

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].slice(0, trendPeriod);
  const dataPoints = labels.map((_, i) => 45000 + i * 8500 + Math.sin(i) * 4000);

  chartInstances.balance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Net Balance',
        data: dataPoints,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.12)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#10b981'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });
}

function initCategoryDonutChart() {
  const ctx = document.getElementById('categoryDonutChart')?.getContext('2d');
  if (!ctx) return;

  const catSums = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    catSums[t.category] = (catSums[t.category] || 0) + Number(t.amount);
  });

  const labels = Object.keys(catSums).map(k => DEFAULT_CATEGORIES[k]?.name || k);
  const data = Object.values(catSums);

  chartInstances.donut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data: data.length ? data : [1],
        backgroundColor: ['#10b981', '#6366f1', '#8b5cf6', '#06b6d4', '#f59e0b', '#f43f5e'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 12 } } }
    }
  });
}

function initCashflowBarChart() {
  const ctx = document.getElementById('cashflowBarChart')?.getContext('2d');
  if (!ctx) return;

  chartInstances.cashflow = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Oct', 'Nov', 'Dec', 'Jan'],
      datasets: [
        { label: 'Income', data: [105000, 99000, 118000, 109000], backgroundColor: '#10b981', borderRadius: 6 },
        { label: 'Expense', data: [48000, 52000, 61000, 53000], backgroundColor: '#f43f5e', borderRadius: 6 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });
}

function initAnalyticsBarChart() {
  const ctx = document.getElementById('analyticsBarChart')?.getContext('2d');
  if (!ctx) return;

  chartInstances.analytics = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        { label: 'Net Cashflow Growth', data: [120000, 185000, 210000, 260000], backgroundColor: '#6366f1', borderRadius: 8 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });
}

// ── Preferences & Data Backup ──
function saveUserSettings() {
  const newName = document.getElementById('settingName').value.trim();
  if (newName) {
    userName = newName;
    document.getElementById('sidebarName').textContent = userName;
    document.getElementById('greetingHeader').textContent = `Welcome back, ${userName.split(' ')[0]} ✦`;
    saveState();
    showToast('Profile settings saved!', 'success');
  }
}

function exportCSV() {
  if (!transactions.length) {
    showToast('No transactions to export.', 'error');
    return;
  }
  const headers = ['ID', 'Date', 'Description', 'Category', 'Type', 'Amount'];
  const rows = transactions.map(t => [t.id, t.date, `"${t.description}"`, t.category, t.type, t.amount]);
  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `finova_pro_transactions_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Transactions exported as CSV!', 'success');
}

function exportJSONBackup() {
  const backupData = {
    transactions,
    goals,
    budgets,
    subscriptions,
    currency,
    theme,
    userName,
    version: "2.0"
  };
  const jsonStr = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `finova_pro_backup_${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast('JSON backup exported!', 'success');
}

function importJSONBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.transactions) transactions = data.transactions;
      if (data.goals) goals = data.goals;
      if (data.budgets) budgets = data.budgets;
      if (data.subscriptions) subscriptions = data.subscriptions;
      if (data.currency) currency = data.currency;
      if (data.userName) userName = data.userName;

      saveState();
      initUI();
      renderAllViews();
      reinitCharts();
      showToast('Backup restored successfully!', 'success');
    } catch (err) {
      showToast('Invalid backup file format.', 'error');
    }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (confirm('Are you sure you want to reset all data? This will restore initial demo transactions.')) {
    transactions = [...MOCK_TRANSACTIONS];
    goals = [...DEFAULT_GOALS];
    budgets = { ...DEFAULT_BUDGETS };
    subscriptions = [...DEFAULT_SUBSCRIPTIONS];
    saveState();
    renderAllViews();
    reinitCharts();
    showToast('All application data reset.', 'success');
  }
}

// ── Toast System ──
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : '⚠️'}</span> ${message}`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}