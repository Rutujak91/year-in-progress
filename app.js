// ── Storage ───────────────────────────────────────────────────────────────
const store = {
  get(k, fb = null) {
    try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : fb; }
    catch { return fb; }
  },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  setRaw(k, v) { localStorage.setItem(k, v); },
  getRaw(k) {
    const v = localStorage.getItem(k);
    if (v === null) return null;
    try { const p = JSON.parse(v); if (typeof p === 'string') return p; } catch {}
    return v;
  },
  remove(k) { localStorage.removeItem(k); }
};

// ── Quotes ────────────────────────────────────────────────────────────────
const QUOTES = [
  { text: "Reputation is built in drops and lost in buckets.", author: "Kevin Plank" },
  { text: "It takes 20 years to build a reputation and five minutes to ruin it.", author: "Warren Buffett" },
  { text: "The way to gain a good reputation is to endeavour to be what you desire to appear.", author: "Socrates" },
  { text: "Character is like a tree and reputation like its shadow.", author: "Abraham Lincoln" },
  { text: "Be more concerned with your character than your reputation.", author: "John Wooden" },
  { text: "Your reputation is what people say about you. Your character is who you are.", author: "Joel Osteen" },
  { text: "A good reputation is more valuable than money.", author: "Publilius Syrus" },
  { text: "The reputation of a thousand years may be determined by the conduct of one hour.", author: "Japanese Proverb" },
  { text: "It takes many good deeds to build a good reputation, and only one bad one to lose it.", author: "Benjamin Franklin" },
  { text: "Associate yourself with people of good quality, for it is better to be alone than in bad company.", author: "Booker T. Washington" },
  { text: "Earn your confidence — reputations are not given, they are built.", author: "Unknown" },
  { text: "You can't build a reputation on what you are going to do.", author: "Henry Ford" },
];

function getDailyQuote() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  return QUOTES[dayOfYear % QUOTES.length];
}

// ── Category colors (cycling palette) ────────────────────────────────────
const COLOR_PALETTE = [
  '#22c55e', '#8b5cf6', '#f59e0b', '#3b82f6',
  '#ec4899', '#14b8a6', '#f97316', '#6366f1'
];

// ── Default categories ────────────────────────────────────────────────────
const DEFAULT_CATEGORIES = [
  { key: 'fitness',   label: 'Physical Fitness', icon: '💪', color: '#22c55e' },
  { key: 'spiritual', label: 'Spiritual',         icon: '🧘', color: '#8b5cf6' },
  { key: 'financial', label: 'Financial',         icon: '💰', color: '#f59e0b' },
];

function getCategories() {
  return store.get('categories', DEFAULT_CATEGORIES);
}

function saveCategories(cats) {
  store.set('categories', cats);
}

// ── Emoji picker options ──────────────────────────────────────────────────
const EMOJI_OPTIONS = [
  '💪','🧘','💰','🏃','📚','🎯','🧠','❤️',
  '🌱','🍎','💤','🎨','🎵','✍️','🧘','🏋️',
  '🤸','🚴','🧗','🏊','🥗','💊','🧪','🔬',
  '💼','📈','🏦','🤝','🌍','🙏','⭐','🔥',
  '🎓','🧩','🛠️','🎭','🌿','🧡','💙','💜',
];

// ── Date / time helpers ───────────────────────────────────────────────────
const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_FULL  = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS_SHORT   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DAYS_LABEL   = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

function dateKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function weekDays() {
  const today = dateKey();
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    days.push({ key: dateKey(d), label: DAYS_SHORT[d.getDay()], isToday: dateKey(d) === today });
  }
  return days;
}

function calcStreak(log) {
  let streak = 0;
  const d = new Date();
  for (let i = 0; i < 365; i++) {
    if (log[dateKey(d)] === 'on') { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return streak;
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

// ── Year heatmap builder ──────────────────────────────────────────────────
function buildYearHeatmap(log) {
  const now = new Date();
  const year = now.getFullYear();
  const todayStr = dateKey();
  const jan1 = new Date(year, 0, 1);
  const startSunday = new Date(jan1);
  startSunday.setDate(jan1.getDate() - jan1.getDay());

  const weeks = [];
  const cursor = new Date(startSunday);
  while (true) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const c = new Date(cursor);
      week.push({ key: dateKey(c), date: new Date(c), inYear: c.getFullYear() === year, isFuture: c > now });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
    if (cursor.getFullYear() > year) break;
  }

  const monthPositions = {};
  weeks.forEach((week, wi) => {
    week.forEach(cell => {
      if (!cell.inYear) return;
      const m = cell.date.getMonth();
      if (cell.date.getDate() <= 7 && !(m in monthPositions)) monthPositions[m] = wi;
    });
  });

  const totalWeeks = weeks.length;
  let monthLabelHTML = `<div class="month-labels" style="grid-template-columns:repeat(${totalWeeks},13px);gap:3px;">`;
  let lastCol = 0;
  for (let m = 0; m < 12; m++) {
    const col = monthPositions[m];
    if (col === undefined) continue;
    const span = col - lastCol;
    if (span > 0) monthLabelHTML += `<div style="grid-column:span ${span}"></div>`;
    monthLabelHTML += `<div style="grid-column:span 1">${MONTHS_SHORT[m]}</div>`;
    lastCol = col + 1;
  }
  monthLabelHTML += '</div>';

  let weekColsHTML = '';
  for (const week of weeks) {
    weekColsHTML += '<div class="week-col">';
    for (const cell of week) {
      if (!cell.inYear) { weekColsHTML += '<div class="hm-cell" style="background:transparent"></div>'; continue; }
      if (cell.isFuture) { weekColsHTML += '<div class="hm-cell future"></div>'; continue; }
      const status = log[cell.key] || 'none';
      const cls = status === 'on' ? 'on' : status === 'off' ? 'off' : '';
      const todayCls = cell.key === todayStr ? ' today' : '';
      const d = cell.date;
      const tip = `${MONTHS_SHORT[d.getMonth()]} ${d.getDate()} — ${status === 'on' ? '🔥 On track' : status === 'off' ? '😔 Off track' : 'No check-in'}`;
      weekColsHTML += `<div class="hm-cell ${cls}${todayCls}" data-tip="${tip}"></div>`;
    }
    weekColsHTML += '</div>';
  }

  const all = Object.values(log);
  return {
    monthLabelHTML, weekColsHTML,
    onCount: all.filter(v => v === 'on').length,
    offCount: all.filter(v => v === 'off').length,
    streak: calcStreak(log)
  };
}

function renderHistory() {
  const cats = getCategories();
  let html = '';
  for (const cat of cats) {
    const log = store.get(`log-${cat.key}`, {});
    const { monthLabelHTML, weekColsHTML, onCount, offCount, streak } = buildYearHeatmap(log);
    html += `
      <div class="heatmap-section">
        <div class="heatmap-title">
          <span>${cat.icon}</span>
          <span style="color:${cat.color}">${cat.label}</span>
        </div>
        <div class="heatmap-stats">
          <div class="hstat">🔥 On track: <b class="fire">${onCount}</b></div>
          <div class="hstat">😔 Off track: <b class="think">${offCount}</b></div>
          <div class="hstat">Best streak: <b class="streak">${streak}d</b></div>
        </div>
        <div class="heatmap-wrap">
          <div class="heatmap-inner">
            ${monthLabelHTML}
            <div class="heatmap-rows">
              <div class="day-labels">${DAYS_LABEL.map(l => `<span>${l}</span>`).join('')}</div>
              <div class="week-cols">${weekColsHTML}</div>
            </div>
          </div>
        </div>
      </div>`;
  }
  document.getElementById('heatmapContent').innerHTML = html;
}

// ── Manage Goals modal ────────────────────────────────────────────────────
let draftCats = []; // working copy while modal is open
let activeEmojiTarget = null; // which row's emoji btn is being picked

function openManageModal() {
  draftCats = getCategories().map(c => ({ ...c }));
  renderCatList();
  document.getElementById('manageModal').classList.remove('hidden');
}

function renderCatList() {
  const list = document.getElementById('catList');
  list.innerHTML = draftCats.map((cat, i) => `
    <div class="cat-row" data-idx="${i}">
      <button class="cat-emoji-btn" data-idx="${i}" title="Change icon">${cat.icon}</button>
      <input class="cat-name-input" data-idx="${i}" value="${cat.label}" placeholder="Category name" maxlength="30" />
      <div class="cat-color-dot" style="background:${cat.color}"></div>
      <button class="cat-delete-btn" data-idx="${i}" title="Remove category">✕</button>
    </div>`).join('');

  // Name input changes
  list.querySelectorAll('.cat-name-input').forEach(inp => {
    inp.addEventListener('input', () => {
      draftCats[parseInt(inp.dataset.idx)].label = inp.value;
    });
  });

  // Emoji btn
  list.querySelectorAll('.cat-emoji-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeEmojiTarget = parseInt(btn.dataset.idx);
      showEmojiPicker(btn);
    });
  });

  // Delete btn
  list.querySelectorAll('.cat-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      if (draftCats.length <= 1) { alert('You need at least one category.'); return; }
      draftCats.splice(idx, 1);
      renderCatList();
    });
  });
}

function showEmojiPicker(anchorBtn) {
  const picker = document.getElementById('emojiPicker');
  picker.innerHTML = EMOJI_OPTIONS.map(e =>
    `<button class="ep-btn" data-emoji="${e}">${e}</button>`
  ).join('');

  picker.querySelectorAll('.ep-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      draftCats[activeEmojiTarget].icon = btn.dataset.emoji;
      picker.classList.add('hidden');
      renderCatList();
    });
  });

  // Position near the button
  const rect = anchorBtn.getBoundingClientRect();
  picker.style.top = `${rect.bottom + 6}px`;
  picker.style.left = `${Math.min(rect.left, window.innerWidth - 250)}px`;
  picker.classList.remove('hidden');
}

function addNewCategory() {
  if (draftCats.length >= 6) { alert('Maximum 6 categories allowed.'); return; }
  const colorIdx = draftCats.length % COLOR_PALETTE.length;
  const newKey = 'custom_' + Date.now();
  draftCats.push({ key: newKey, label: '', icon: '⭐', color: COLOR_PALETTE[colorIdx] });
  renderCatList();
  // Focus the new input
  setTimeout(() => {
    const inputs = document.querySelectorAll('.cat-name-input');
    inputs[inputs.length - 1]?.focus();
  }, 50);
}

function saveManageModal() {
  // Validate — no empty names
  for (const cat of draftCats) {
    if (!cat.label.trim()) {
      alert('Please give each category a name.'); return;
    }
  }
  // Ensure keys are stable (don't change existing keys)
  saveCategories(draftCats.map(c => ({ ...c, label: c.label.trim() })));
  document.getElementById('manageModal').classList.add('hidden');
  document.getElementById('emojiPicker').classList.add('hidden');
  render();
}


// ── Day cycle (click to cycle: none → on → off → none) ───────────────────
function cycleDayStatus(dotEl) {
  const cat     = dotEl.dataset.cat;
  const date    = dotEl.dataset.date;
  const current = dotEl.dataset.status; // 'on' | 'off' | 'none'

  const log = store.get('log-' + cat, {});
  if (current === 'none') {
    log[date] = 'on';
  } else if (current === 'on') {
    log[date] = 'off';
  } else {
    delete log[date];
  }
  store.set('log-' + cat, log);
  render();
}

// ── Main render ───────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  const name = store.getRaw('user-name');
  const now = new Date();
  const year = now.getFullYear();
  const start = new Date(year, 0, 1);
  const end   = new Date(year + 1, 0, 1);
  const pct   = Math.round((now - start) / (end - start) * 100);
  const daysLeft  = Math.ceil((end - now) / 86400000);
  const month     = MONTHS_FULL[now.getMonth()];
  const themeKey  = `theme-${year}-${now.getMonth()}`;
  const theme     = store.getRaw(themeKey);
  const today     = dateKey();
  const cats      = getCategories();

  // Goal cards
  let goalCardsHTML = '';
  for (const cat of cats) {
    const log = store.get(`log-${cat.key}`, {});
    const todayStatus = log[today] || null;
    const streak = calcStreak(log);
    const days   = weekDays();

    const onActive  = todayStatus === 'on'  ? ' active-on'  : '';
    const offActive = todayStatus === 'off' ? ' active-off' : '';

    const stripHTML = days.map(day => {
      const s = log[day.key] || 'none';
      const inner = s === 'on' ? '🔥' : s === 'off' ? '😔' : '';
      return `
        <div class="day-cell">
          <div class="day-dot ${s}${day.isToday ? ' today' : ''} clickable-day"
               data-cat="${cat.key}" data-date="${day.key}" data-status="${s}"
               title="Edit ${day.label}">${inner}</div>
          <div class="day-name${day.isToday ? ' today-label' : ''}">${day.label}</div>
        </div>`;
    }).join('');

    goalCardsHTML += `
      <div class="goal-card">
        <div class="goal-header">
          <span class="icon">${cat.icon}</span>
          <h3 style="color:${cat.color}">${cat.label}</h3>
          <span class="streak${streak === 0 ? ' zero' : ''}">${streak > 0 ? '🔥 ' + streak + 'd' : '–'}</span>
        </div>
        <div>
          <div class="checkin-label" style="margin-bottom:0.55rem">How's today?</div>
          <div class="checkin-btns">
            <button class="btn-emoji-bare${onActive}" data-cat="${cat.key}" data-status="on">
              <span class="emoji-glyph">🔥</span>
              <span class="emoji-sub">On track</span>
            </button>
            <div class="btn-divider"></div>
            <button class="btn-emoji-bare${offActive}" data-cat="${cat.key}" data-status="off">
              <span class="emoji-glyph">😔</span>
              <span class="emoji-sub">Off track</span>
            </button>
          </div>
          ${todayStatus ? `<div class="undo-row" style="margin-top:0.5rem"><button class="undo-btn" data-cat="${cat.key}">Undo</button></div>` : ''}
        </div>
        <div>
          <div class="week-label">This week</div>
          <div class="week-strip">${stripHTML}</div>
        </div>
      </div>`;
  }

  app.innerHTML = `
    <div style="text-align:center">
      <h1>${getGreeting()}${name ? ', ' + name : ''}</h1>
      ${!name ? `<form class="name-form" id="nameForm">
        <input id="nameInput" placeholder="Enter your name" />
        <button type="submit">Save</button>
      </form>` : ''}
    </div>

    <div class="year-bar">
      <div class="meta"><span>${year}</span><span class="pct">${pct}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="days-left">${daysLeft} days remaining</div>
    </div>

    <div class="quote-block">
      <div class="quote-text">"${getDailyQuote().text}"</div>
      <div class="quote-author">— ${getDailyQuote().author}</div>
    </div>

    <div class="theme-card">
      <div class="label">${month}'s Theme</div>
      ${theme
        ? `<div class="value" id="themeValue">${theme}</div>`
        : `<form class="theme-form" id="themeForm">
            <input id="themeInput" placeholder="e.g. Discipline &amp; Focus" />
            <button type="submit">Set</button>
          </form>`}
    </div>

    <div class="goals-section-header">
      <span class="goals-section-title">Goal Tracking</span>
      <button class="btn-manage" id="openManage">✏️ Edit categories</button>
    </div>

    <div class="goals-grid">${goalCardsHTML}</div>

    <div class="history-row">
      <button class="btn-history" id="openHistory">📅 View full year history</button>
    </div>

    <div class="bottom-row">
      ${name ? `<button class="change-name" id="changeName">Change name</button>` : ''}
    </div>`;

  // ── Page events ───────────────────────────────────────────────────────
  document.getElementById('nameForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const v = document.getElementById('nameInput').value.trim();
    if (v) { store.setRaw('user-name', v); render(); }
  });
  document.getElementById('changeName')?.addEventListener('click', () => { store.remove('user-name'); render(); });

  document.getElementById('themeForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const v = document.getElementById('themeInput').value.trim();
    if (v) { store.setRaw(themeKey, v); render(); }
  });
  document.getElementById('themeValue')?.addEventListener('click', () => {
    document.getElementById('themeValue').outerHTML = `<form class="theme-form" id="themeForm"><input id="themeInput" value="${theme}" /><button type="submit">Set</button></form>`;
    document.getElementById('themeInput').focus();
    document.getElementById('themeForm').addEventListener('submit', e => {
      e.preventDefault();
      const v = document.getElementById('themeInput').value.trim();
      if (v) { store.setRaw(themeKey, v); render(); }
    });
  });

  document.querySelectorAll('.btn-emoji-bare').forEach(btn => {
    btn.addEventListener('click', () => {
      const log = store.get(`log-${btn.dataset.cat}`, {});
      log[today] = btn.dataset.status;
      store.set(`log-${btn.dataset.cat}`, log);
      render();
    });
  });

  document.querySelectorAll('.undo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const log = store.get(`log-${btn.dataset.cat}`, {});
      delete log[today];
      store.set(`log-${btn.dataset.cat}`, log);
      render();
    });
  });

  // Clickable week dots — open day popover
  document.querySelectorAll('.clickable-day').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      cycleDayStatus(dot);
    });
  });

  document.getElementById('openHistory')?.addEventListener('click', () => {
    renderHistory();
    document.getElementById('historyModal').classList.remove('hidden');
  });

  document.getElementById('openManage')?.addEventListener('click', openManageModal);
}

// ── Modal close / save wiring (once, outside render) ─────────────────────
document.getElementById('closeHistory').addEventListener('click', () => {
  document.getElementById('historyModal').classList.add('hidden');
});
document.getElementById('historyModal').addEventListener('click', e => {
  if (e.target === document.getElementById('historyModal'))
    document.getElementById('historyModal').classList.add('hidden');
});

document.getElementById('closeManage').addEventListener('click', () => {
  document.getElementById('manageModal').classList.add('hidden');
  document.getElementById('emojiPicker').classList.add('hidden');
});
document.getElementById('cancelManage').addEventListener('click', () => {
  document.getElementById('manageModal').classList.add('hidden');
  document.getElementById('emojiPicker').classList.add('hidden');
});
document.getElementById('manageModal').addEventListener('click', e => {
  if (e.target === document.getElementById('manageModal')) {
    document.getElementById('manageModal').classList.add('hidden');
    document.getElementById('emojiPicker').classList.add('hidden');
  }
});
document.getElementById('saveManage').addEventListener('click', saveManageModal);
document.getElementById('addCatBtn').addEventListener('click', addNewCategory);

// Close emoji picker on outside click
document.addEventListener('click', e => {
  const picker = document.getElementById('emojiPicker');
  if (!picker.classList.contains('hidden') && !picker.contains(e.target) && !e.target.classList.contains('cat-emoji-btn')) {
    picker.classList.add('hidden');
  }
});

render();
