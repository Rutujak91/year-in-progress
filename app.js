
// ── Storage ───────────────────────────────────────────────────────────────
const LS={
  get(k,fb=null){try{const v=localStorage.getItem(k);return v!==null?JSON.parse(v):fb;}catch{return fb;}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch{}},
  raw(k){return localStorage.getItem(k);},
  setRaw(k,v){localStorage.setItem(k,v);},
};

// ── Icons ─────────────────────────────────────────────────────────────────
const I={
  heart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  briefcase:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  chevdown:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevright:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevleft:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6M9 6V4h6v2"/></svg>`,
  eye:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeoff:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  flame:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`,
  pencil:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  x:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  bookopen:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  checkcircle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  grip:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="5" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="19" r="1"/></svg>`,
  reset:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.95"/></svg>`,
  circle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`,
  playcircle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,
};

// ── Constants ─────────────────────────────────────────────────────────────
const DAYS=['M','T','W','T','F','S','S'];
const MS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DL=['','Mon','','Wed','','Fri',''];
const DQ={text:"You can't build a reputation on what you are going to do.",author:"Henry Ford"};
const PRESETS={
  reading:{name:'Reading List',emoji:'📚',labels:{active:'Reading',completed:'Completed',upcoming:'Up Next'}},
  painting:{name:'Paintings',emoji:'🎨',labels:{active:'In Progress',completed:'Completed',upcoming:'Planned'}},
  todos:{name:"To-Do's",emoji:'✅',labels:{active:'Doing',completed:'Done',upcoming:'Planned'}},
  movies:{name:'Watch List',emoji:'🎬',labels:{active:'Watching',completed:'Watched',upcoming:'Up Next'}},
  courses:{name:'Courses',emoji:'🎓',labels:{active:'Learning',completed:'Completed',upcoming:'Queued'}},
};
const DG=[
  {id:'1',name:'Physical Fitness',emoji:'💪',expanded:true,hidden:false,activities:[{id:'a1',name:'Gym',weekLog:{}},{id:'a2',name:'10k Steps',weekLog:{}},{id:'a3',name:'Strength Train',weekLog:{}}]},
  {id:'2',name:'Mindfulness',emoji:'🧘',expanded:false,hidden:false,activities:[{id:'a4',name:'Be Present',weekLog:{}},{id:'a5',name:'Meditate',weekLog:{}}]},
];

// ── State ─────────────────────────────────────────────────────────────────
const ST={
  mode:LS.raw('dashboard-default-mode')||LS.raw('dashboard-mode')||'personal',
  defaultMode:LS.raw('dashboard-default-mode')||'personal',
  addingGoal:false,newGoalName:'',addingActTo:null,newActName:'',showHidden:false,
  trackMonth:mKey(new Date()),trackAdding:false,trackNewTitle:'',trackNewSub:'',
  configuring:false,cfgName:'',cfgEmoji:'',cfgLabels:null,
  kanbanAddTo:null,kanbanTitle:'',kanbanDrag:null,
  qEditing:false,qDraft:null,
  nameEditing:false,
  skipNamePrompt:false,
  histExpanded:false,histMonths:{},
};

// ── Helpers ───────────────────────────────────────────────────────────────
function greet(){const h=new Date().getHours();return h<12?'Good morning':h<17?'Good afternoon':'Good evening';}
function getUserName(){return LS.raw('dashboard-username')||'';}
function mKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;}
function fmtM(k){const[y,m]=k.split('-');return new Date(+y,+m-1).toLocaleDateString('en-US',{month:'long',year:'numeric'});}
function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function e(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function svg(ic,cls='',style=''){return `<span class="${cls}" style="display:inline-flex;align-items:center;${style}">${I[ic]}</span>`;}

function weekDates(){
  const n=new Date(),day=n.getDay(),mon=new Date(n);
  mon.setDate(n.getDate()-((day+6)%7));
  return Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;});
}
function localKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function streak(act){let s=0,t=new Date();for(let i=0;i<365;i++){const d=new Date(t);d.setDate(t.getDate()-i);if(act.weekLog[localKey(d)])s++;else break;}return s;}
function onTrack(cat){
  const vis=cat.activities.filter(a=>!a.hidden);if(!vis.length)return false;
  const wd=weekDates(),td=new Date().getDay(),el=td===0?7:td;
  return vis.every(a=>wd.slice(0,el).filter(d=>a.weekLog[d]).length>=Math.floor(el*0.5));
}

function ns(k){return `${k}-${ST.mode}`;}
function getG(){return LS.get(ns('dashboard-goals'),DG);}
function setG(g){LS.set(ns('dashboard-goals'),g);}
function getIt(){return LS.get(ns('dashboard-tracked-items'),[]);}
function setIt(i){LS.set(ns('dashboard-tracked-items'),i);}
function getCfg(){return LS.get(ns('dashboard-list-config'),PRESETS.reading);}
function setCfg(c){LS.set(ns('dashboard-list-config'),c);}
function getQ(){return LS.get(ns('dashboard-quote'),DQ);}
function setQ(q){LS.set(ns('dashboard-quote'),q);}
function getK(){return LS.get(ns('dashboard-kanban'),[]);}
function setK(t){LS.set(ns('dashboard-kanban'),t);}
function getKH(){return LS.get(ns('dashboard-kanban-history'),[]);}
function setKH(h){LS.set(ns('dashboard-kanban-history'),h);}

// ── Heatmap ───────────────────────────────────────────────────────────────
function yearGrid(yr){
  const j=new Date(yr,0,1),d31=new Date(yr,11,31),rows=Array.from({length:7},()=>[]);
  const st=new Date(j);st.setDate(st.getDate()-(((st.getDay()+6)%7)));
  const cur=new Date(st);
  while(cur<=d31||(cur.getDay()!==1&&cur>d31)){
    const dw=(cur.getDay()+6)%7;
    rows[dw].push((cur>=j&&cur<=d31)?cur.toISOString().split('T')[0]:null);
    cur.setDate(cur.getDate()+1);if(cur>d31&&cur.getDay()===1)break;
  }
  const mx=Math.max(...rows.map(r=>r.length));rows.forEach(r=>{while(r.length<mx)r.push(null);});return rows;
}
function mPos(yr){
  return Array.from({length:12},(_,m)=>{
    const f=new Date(yr,m,1),j=new Date(yr,0,1),doy=Math.floor((f-j)/86400000),dow=(j.getDay()+6)%7;
    return{label:MS[m],col:Math.floor((doy+dow)/7)};
  });
}
function bestStreak(log,yr){let b=0,c=0,d=new Date(yr,0,1),en=new Date(yr,11,31);while(d<=en){const k=d.toISOString().split('T')[0];if(log[k]){c++;if(c>b)b=c;}else c=0;d.setDate(d.getDate()+1);}return b;}
function stats(log,yr){let on=0,off=0,d=new Date(yr,0,1),en=new Date().getFullYear()===yr?new Date():new Date(yr,11,31);while(d<=en){const k=d.toISOString().split('T')[0];if(log[k])on++;else off++;d.setDate(d.getDate()+1);}return{on,off};}
function mergeLogs(acts){const m={};acts.forEach(a=>Object.entries(a.weekLog).forEach(([d,v])=>{if(v)m[d]=true;}));return m;}
function buildHeatmap(log,yr){
  const rows=yearGrid(yr),t=today(),tw=rows[0].length,mp=mPos(yr);
  let h='<div style="display:flex;margin-left:2rem;margin-bottom:4px;">';
  mp.forEach((p,i)=>{const nc=i<11?mp[i+1].col:tw;const sp=nc-p.col;h+=`<span style="font-size:9px;color:hsla(220,10%,45%,.6);font-weight:500;width:${sp*12}px;min-width:${sp*12}px;">${p.label}</span>`;});
  h+='</div>';
  rows.forEach((row,ri)=>{
    h+=`<div style="display:flex;align-items:center;"><span style="font-size:9px;color:hsla(220,10%,45%,.5);width:2rem;text-align:right;padding-right:.5rem;flex-shrink:0;">${DL[ri]}</span><div style="display:flex;gap:2px;">`;
    row.forEach(date=>{
      if(!date){h+='<div style="width:10px;height:10px;"></div>';return;}
      const bg=date>t?'hsla(220,15%,92%,.2)':log[date]?'hsl(145,45%,48%)':'hsla(220,15%,92%,.4)';
      h+=`<div style="width:10px;height:10px;border-radius:2px;background:${bg};" title="${date}${log[date]?' ✓':''}"></div>`;
    });
    h+='</div></div>';
  });
  return h;
}

// ── Render sections ───────────────────────────────────────────────────────
function renderYP(){
  const n=new Date(),yr=n.getFullYear();
  const pct=Math.round((n-new Date(yr,0,1))/(new Date(yr+1,0,1)-new Date(yr,0,1))*100);
  const rem=Math.ceil((new Date(yr+1,0,1)-n)/864e5);
  return `<div class="year-bar"><div class="year-meta"><span class="year-label">${yr}</span><span class="year-pct">${pct}%</span></div><div class="year-track"><div class="year-fill" style="width:${pct}%"></div></div><p class="year-days">${rem} days remaining</p></div>`;
}

function renderQ(){
  const q=ST.qDraft||getQ();
  if(ST.qEditing)return `<div class="quote-edit"><textarea id="qText" placeholder="Your favorite quote...">${e(q.text)}</textarea><input id="qAuthor" value="${e(q.author||'')}" placeholder="Author"/><button id="qSave" class="q-save">${svg('check')} Save</button></div>`;
  const sq=getQ();
  return `<div id="qView" class="quote-view"><p class="quote-text">"${e(sq.text)}"</p>${sq.author?`<p class="quote-author">— ${e(sq.author)}</p>`:''}<div class="q-pencil">${svg('pencil')}</div></div>`;
}

function renderGoals(){
  const goals=getG(),wd=weekDates(),t=today();
  const hc=goals.filter(c=>c.hidden).length+goals.reduce((s,c)=>s+c.activities.filter(a=>a.hidden).length,0);
  const vis=ST.showHidden?goals:goals.filter(c=>!c.hidden);
  const cards=vis.map(cat=>{
    const ot=onTrack(cat),ih=cat.hidden;
    let body='';
    if(cat.expanded){
      const dh=`<div class="day-hdr-row"><div class="day-hdr-spacer"></div><div class="day-hdrs">${DAYS.map((d,i)=>`<span class="day-hdr-cell${wd[i]===t?' today':''}">${d}</span>`).join('')}</div><div class="day-hdr-actions"></div></div>`;
      const acts=cat.activities.map(act=>{
        const st=streak(act),dc=wd.filter(d=>act.weekLog[d]).length,ah=act.hidden;
        const cells=wd.map(date=>{const done=act.weekLog[date];return `<div class="day-cell-wrap"><button class="day-cell${done?' done':''}" data-cat="${e(cat.id)}" data-act="${e(act.id)}" data-date="${date}" ${ah?'disabled':''}>${done?svg('check'):''}</button></div>`;}).join('');
        return `<div class="act-row"><div class="act-info"><span class="act-name${ah?' blurred':''}">${e(act.name)}</span>${!ah&&st>0?`<span class="act-streak">${svg('flame')}${st}</span>`:''}<span class="act-count">${dc}/7</span></div><div class="act-days">${cells}</div><div class="act-actions"><button class="act-icon-btn" data-ah="${e(cat.id)}" data-aid="${e(act.id)}">${ah?svg('eyeoff'):svg('eye')}</button><button class="act-icon-btn del" data-ad="${e(cat.id)}" data-aid="${e(act.id)}">${svg('trash')}</button></div></div>`;
      }).join('');
      const addA=ST.addingActTo===cat.id?`<div class="add-act-row"><input id="aActInp" class="add-act-inp" placeholder="Activity name..." value="${e(ST.newActName)}" autofocus/><button class="xs-btn aas" data-cat="${e(cat.id)}">Add</button><button class="xs-btn muted" id="aac">Cancel</button></div>`:`<button class="add-act-btn oaa" data-cat="${e(cat.id)}">${svg('plus')} Add Activity</button>`;
      body=`<div class="goal-body">${dh}<div class="space-y-05">${acts}</div>${addA}</div>`;
    }
    return `<div class="goal-card${ih?' is-hidden':''}"><div class="goal-card-hdr gc" data-cat="${e(cat.id)}"><div class="goal-hdr-left">${cat.expanded?svg('chevdown'):svg('chevright')}<span class="goal-emoji">${cat.emoji}</span><span class="goal-name">${e(cat.name)}</span>${!ih?`<span class="status-pill ${ot?'on':'off'}">${ot?'On Track':'Off Track'}</span>`:`<span class="status-pill hidden-lbl">Hidden</span>`}</div><div class="goal-hdr-right"><button class="icon-btn ch" data-cat="${e(cat.id)}">${ih?svg('eyeoff'):svg('eye')}</button><button class="icon-btn del cd" data-cat="${e(cat.id)}">${svg('trash')}</button></div></div>${body}</div>`;
  }).join('');
  return `<div><div class="section-hdr"><span class="section-title">Goals</span><div style="display:flex;align-items:center;gap:.75rem;">${hc>0?`<button id="tgh" class="hidden-btn${ST.showHidden?' active':''}">${ST.showHidden?svg('eye'):svg('eyeoff')} ${hc} hidden</button>`:''}<button id="oag" class="link-btn">${svg('plus')} Add Goal</button></div></div>${ST.addingGoal?`<div class="add-row"><input id="ngi" class="add-inp" placeholder="Goal category name..." value="${e(ST.newGoalName)}" autofocus/><button id="ags" class="xs-btn">Add</button><button id="agc" class="xs-btn muted">Cancel</button></div>`:''}<div>${cards}</div></div>`;
}

function renderTrack(){
  const cfg=getCfg(),items=getIt(),mi=items.filter(b=>b.month===ST.trackMonth);
  const so=['active','completed','upcoming'],si={active:'bookopen',completed:'checkcircle',upcoming:'clock'},sc={active:'active',completed:'completed',upcoming:'upcoming'};
  let cp='';
  if(ST.configuring){
    const cl=ST.cfgLabels||cfg.labels;
    cp=`<div class="cfg-panel"><div class="cfg-panel-hdr"><span class="cfg-panel-title">Customize List</span><button id="cpc" class="close-btn">${svg('x')}</button></div><div class="preset-chips">${Object.entries(PRESETS).map(([k,p])=>`<button class="preset-chip${cfg.name===p.name?' active':''} pc" data-p="${k}">${p.emoji} ${p.name}</button>`).join('')}</div><div class="custom-sep"><div class="custom-label">Or customize</div><div class="custom-row"><input id="cei" class="emoji-inp" maxlength="2" value="${e(ST.cfgEmoji||cfg.emoji)}"/><input id="cni" class="lbl-inp" placeholder="List name..." value="${e(ST.cfgName||cfg.name)}"/></div><div class="labels-grid">${so.map(s=>`<input class="lbl-inp clbl" data-s="${s}" value="${e(cl[s])}"/>`).join('')}</div><button id="scc" class="xs-btn">Save Custom</button></div></div>`;
  }
  const ih=mi.length===0&&!ST.trackAdding?`<p class="track-empty">Nothing here yet</p>`:mi.map(it=>`<div class="track-item"><div class="t-icon ${sc[it.status]}">${svg(si[it.status])}</div><div class="t-info"><div class="t-title">${e(it.title)}</div>${it.subtitle?`<div class="t-sub">${e(it.subtitle)}</div>`:''}</div><select class="t-select tss" data-id="${it.id}">${so.map(s=>`<option value="${s}"${it.status===s?' selected':''}>${e(cfg.labels[s])}</option>`).join('')}</select><button class="t-del tdel" data-id="${it.id}">${svg('trash')}</button></div>`).join('');
  return `<div><div class="track-hdr"><div class="track-title"><span class="track-emoji">${e(cfg.emoji)}</span><span class="section-title">${e(cfg.name)}</span></div><div style="display:flex;align-items:center;gap:.5rem;"><button id="ocfg" class="cfg-btn">${svg('settings')}</button>${!ST.trackAdding&&!ST.configuring?`<button id="oai" class="link-btn">${svg('plus')} Add</button>`:''}</div></div>${cp}<div class="month-nav"><button id="pm" class="month-nav-btn">${svg('chevleft')}</button><span class="month-label">${fmtM(ST.trackMonth)}</span><button id="nm" class="month-nav-btn">${svg('chevright')}</button></div><div>${ih}</div>${ST.trackAdding?`<div class="add-form"><input id="ntt" class="form-inp" placeholder="Title..." autofocus/><input id="nts" class="form-inp" placeholder="Subtitle (optional)"/><div class="form-btns"><button id="ais" class="xs-btn">Add</button><button id="aic" class="xs-btn muted">Cancel</button></div></div>`:''}</div>`;
}

function renderKanban(){
  const tasks=getK(),cols=[{id:'todo',name:'To Do'},{id:'inprog',name:'In Progress'},{id:'done',name:'Done'}];
  const ch=cols.map(col=>{
    const ct=tasks.filter(t=>t.column===col.name);
    const th=ct.map(t=>`<div class="k-task${ST.kanbanDrag===t.id?' dragging':''}" draggable="true" data-tid="${t.id}"><div class="k-grip">${svg('grip')}</div><p class="k-text${col.name==='Done'?' done-txt':''}">${e(t.title)}</p><button class="k-del kdel" data-id="${t.id}">${svg('trash')}</button></div>`).join('');
    const af=ST.kanbanAddTo===col.name?`<div class="k-add-form"><input id="kinp" class="k-inp" placeholder="Task title..." value="${e(ST.kanbanTitle)}" autofocus/><div class="k-form-btns"><button class="xs-btn ks" data-col="${e(col.name)}">Add</button><button id="kc" class="xs-btn muted">Cancel</button></div></div>`:'';
    return `<div class="k-col ${col.id} kcol" data-col="${e(col.name)}"><div class="k-col-hdr"><div class="k-col-title"><span class="k-col-name">${col.name}</span><span class="k-col-count">${ct.length}</span></div><button class="k-add-btn kadd" data-col="${e(col.name)}">${svg('plus')}</button></div><div>${th}${af}</div></div>`;
  }).join('');
  return `<div><div class="kanban-hdr"><span class="section-title">📋 Task Board</span>${tasks.length>0?`<button id="kr" class="reset-btn">${svg('reset')} Reset</button>`:''}</div><div class="kanban-grid">${ch}</div></div>`;
}

function renderHistory(){
  const yr=new Date().getFullYear(),isPro=ST.mode==='professional';
  if(isPro){
    const snaps=getKH();
    const ci={['To Do']:'circle',['In Progress']:'playcircle',['Done']:'checkcircle'};
    const cc={['To Do']:'color:var(--streak)',['In Progress']:'color:var(--primary)',['Done']:'color:var(--accent)'};
    let body='';
    if(ST.histExpanded){
      body=snaps.length===0?'<p class="hist-no-data">No archived boards yet. Use the Reset button to archive your tasks.</p>':snaps.map((sn,idx)=>{
        const key=`${sn.month}-${idx}`,isOpen=!!ST.histMonths[key];
        const dl=new Date(sn.archivedAt).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
        const dc=sn.tasks.filter(t=>t.column==='Done').length;
        return `<div class="hist-month"><button class="hist-month-btn hmt" data-key="${key}"><span class="hist-month-name">Archived ${e(dl)}</span><div class="hist-month-meta"><span class="hist-stat">${dc}/${sn.tasks.length} done</span>${isOpen?svg('chevdown'):svg('chevright')}</div></button>${isOpen?`<div class="hist-body">${['To Do','In Progress','Done'].map(col=>{const ct=sn.tasks.filter(t=>t.column===col);if(!ct.length)return'';return`<div><div class="hist-col-label"><span style="${cc[col]}">${svg(ci[col])}</span><span class="hist-col-name">${col}</span><span class="hist-col-count">(${ct.length})</span></div><div>${ct.map(t=>`<p class="hist-task${col==='Done'?' done-txt':''}">${e(t.title)}</p>`).join('')}</div></div>`;}).join('')}</div>`:''}</div>`;
      }).join('');
    }
    return `<div><button id="ht" class="hist-toggle">${ST.histExpanded?svg('chevdown'):svg('chevright')} View History</button>${ST.histExpanded?`<div>${body}</div>`:''}</div>`;
  }
  const goals=getG();
  let body='';
  if(ST.histExpanded){
    if(!goals.length){body='<p class="hist-no-data">No goals yet. Add goals to see your year in review.</p>';}
    else{body=`<div class="yr-review">${goals.map(cat=>{const log=mergeLogs(cat.activities),st=stats(log,yr),bs=bestStreak(log,yr);return`<div class="yr-cat"><div class="yr-cat-hdr"><span>${cat.emoji}</span><span class="yr-cat-name">${e(cat.name)}</span></div><div class="yr-stats">${svg('flame')} On track: <strong style="color:var(--accent)">${st.on}</strong>&nbsp;&nbsp;😔 Off track: <strong>${st.off}</strong>&nbsp;&nbsp;Best streak: <strong style="color:var(--accent)">${bs}d</strong></div><div class="yr-hm-scroll"><div style="display:inline-block;">${buildHeatmap(log,yr)}</div></div></div>`;}).join('')}<div class="yr-legend"><div class="leg-item"><div class="leg-dot" style="background:var(--accent)"></div>${svg('flame')} On track</div><div class="leg-item"><div class="leg-dot" style="background:hsla(220,15%,92%,.4)"></div>😔 Off track</div><div class="leg-item"><div class="leg-dot" style="background:hsla(220,15%,92%,.2)"></div>No check-in</div></div></div>`;}
  }
  return `<div><button id="ht" class="hist-toggle">${ST.histExpanded?svg('chevdown'):svg('chevright')} Your Year in Review</button>${ST.histExpanded?body:''}</div>`;
}

// ── Main render ───────────────────────────────────────────────────────────
function render(){
  // First time — show welcome screen
  if(!getUserName()&&!ST.skipNamePrompt){
    document.getElementById('app').innerHTML=`
    <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;">
      <div style="background:var(--card);border-radius:1.25rem;padding:2.5rem 2rem;width:100%;max-width:360px;display:flex;flex-direction:column;align-items:center;gap:1rem;box-shadow:0 8px 32px rgba(0,0,0,.1);">
        <h1 style="font-size:2rem;font-weight:800;letter-spacing:-.03em;color:var(--fg);margin-bottom:.25rem;">Welcome</h1>
        <p style="font-size:.9375rem;color:var(--muted-fg);margin-bottom:.5rem;">What's your name?</p>
        <input id="welcomeNameInp"
          placeholder="Enter your name"
          style="width:100%;font-size:1rem;font-weight:400;text-align:center;
            background:hsla(220,15%,92%,.5);border:none;border-radius:.85rem;
            padding:.9rem 1rem;color:var(--fg);outline:none;"/>
        <button id="welcomeNameSave"
          style="width:100%;font-size:1rem;font-weight:700;
            background:var(--primary);color:#fff;border:none;
            border-radius:.85rem;padding:.9rem 1rem;
            cursor:pointer;margin-top:.25rem;">
          Continue
        </button>
      </div>
    </div>`;
    const save=()=>{
      const v=document.getElementById('welcomeNameInp')?.value.trim();
      if(!v)return;
      LS.setRaw('dashboard-username',v);
      render();
    };
    document.getElementById('welcomeNameInp').addEventListener('keydown',e=>{if(e.key==='Enter')save();});
    document.getElementById('welcomeNameSave').addEventListener('click',save);
    setTimeout(()=>document.getElementById('welcomeNameInp')?.focus(),0);
    return;
  }
  const isPro=ST.mode==='professional',def=ST.defaultMode;
  document.getElementById('app').innerHTML=`
  <div class="mode-wrap"><div class="mode-pill">
    <div class="tip-wrap">
      <button id="mp" class="mode-btn${ST.mode==='personal'?' active':''}">${svg('heart')} Personal</button>
      ${ST.mode==='personal'?`<div class="tip-box" id="tipP"><span style="font-size:13px;">${def==='personal'?'⭐':'☆'}</span>${def==='personal'?'Default view':'Set as default'}</div>`:''}
    </div>
    <div class="tip-wrap">
      <button id="mpr" class="mode-btn${ST.mode==='professional'?' active':''}">${svg('briefcase')} Professional</button>
      ${ST.mode==='professional'?`<div class="tip-box" id="tipPr"><span style="font-size:13px;">${def==='professional'?'⭐':'☆'}</span>${def==='professional'?'Default view':'Set as default'}</div>`:''}
    </div>
  </div></div>

  <div class="header space-y-5">
    ${ST.nameEditing
      ? `<div style="display:flex;align-items:center;justify-content:center;gap:.5rem;margin-bottom:1.25rem;">
          <span style="font-size:clamp(1.5rem,3vw,1.875rem);font-weight:700;letter-spacing:-.025em;">${greet()},</span>
          <input id="nameInp" value="${e(getUserName())}" placeholder="Your name"
            style="font-size:clamp(1.5rem,3vw,1.875rem);font-weight:700;letter-spacing:-.025em;
              background:transparent;border:none;border-bottom:2px solid var(--primary);
              color:var(--primary);outline:none;width:${Math.max((getUserName()||'').length,8)}ch;padding:0 .1rem;" autofocus/>
          <button id="nameSave" style="font-size:.75rem;font-weight:600;background:var(--primary);color:#fff;border:none;border-radius:.5rem;padding:.25rem .65rem;cursor:pointer;">Save</button>
          <button id="nameCancel" style="font-size:.75rem;color:var(--muted-fg);background:none;border:none;cursor:pointer;">Cancel</button>
        </div>`
      : `<h1 class="greeting" id="greetingEl" title="Click to edit your name" style="cursor:pointer;margin-bottom:1.25rem;">
          ${greet()}${getUserName()?`, ${e(getUserName())}`:''} <span style="font-size:.8rem;font-weight:400;opacity:.25;">${svg('pencil')}</span>
        </h1>`
    }
    ${renderYP()}
    ${renderQ()}
  </div>

  ${isPro?renderKanban():`<div class="two-col">${renderGoals()}${renderTrack()}</div>`}
  ${renderHistory()}`;
  bind();
}

// ── Event binding ─────────────────────────────────────────────────────────
function bind(){
  const $=id=>document.getElementById(id);
  const on=(id,ev,fn)=>{const el=$(id);if(el)el.addEventListener(ev,fn);};
  const all=(sel,ev,fn)=>document.querySelectorAll(sel).forEach(el=>el.addEventListener(ev,fn));

  on('greetingEl','click',()=>{ST.nameEditing=true;render();setTimeout(()=>{const el=document.getElementById('nameInp');if(el){el.focus();el.select();}},0);});
  on('nameSave','click',()=>{const v=document.getElementById('nameInp')?.value.trim();if(v)LS.setRaw('dashboard-username',v);ST.nameEditing=false;render();});
  on('nameCancel','click',()=>{ST.nameEditing=false;render();});
  on('nameInp','keydown',e=>{
    if(e.key==='Enter'){const v=e.target.value.trim();if(v){LS.setRaw('dashboard-username',v);ST.nameEditing=false;render();}}
    if(e.key==='Escape'){ST.nameEditing=false;render();}
  });
  on('nameInp','blur',e=>{
    // Auto-save on blur if first time (no existing name)
    if(!getUserName()){const v=e.target.value.trim();if(v){LS.setRaw('dashboard-username',v);ST.nameEditing=false;render();}}
  });
  on('nameInp','input',e=>{
    // Dynamically resize input width as user types
    e.target.style.width=Math.max(e.target.value.length||9,5)+'ch';
  });

  on('mp','click',()=>{ST.mode='personal';LS.setRaw('dashboard-mode','personal');render();});
  on('mpr','click',()=>{ST.mode='professional';LS.setRaw('dashboard-mode','professional');render();});
  on('tipP','click',e=>{e.stopPropagation();ST.defaultMode='personal';LS.setRaw('dashboard-default-mode','personal');LS.setRaw('dashboard-mode','personal');render();});
  on('tipPr','click',e=>{e.stopPropagation();ST.defaultMode='professional';LS.setRaw('dashboard-default-mode','professional');LS.setRaw('dashboard-mode','professional');render();});

  on('qView','click',()=>{ST.qEditing=true;ST.qDraft={...getQ()};render();setTimeout(()=>$('qText')?.focus(),0);});
  on('qSave','click',()=>{const t=$('qText')?.value.trim(),a=$('qAuthor')?.value.trim();if(t)setQ({text:t,author:a||''});ST.qEditing=false;ST.qDraft=null;render();});

  on('oag','click',()=>{ST.addingGoal=true;render();setTimeout(()=>$('ngi')?.focus(),0);});
  on('ags','click',()=>{const v=$('ngi')?.value.trim();if(!v)return;const g=getG();g.push({id:Date.now().toString(),name:v,emoji:'🎯',activities:[],expanded:true,hidden:false});setG(g);ST.addingGoal=false;render();});
  on('agc','click',()=>{ST.addingGoal=false;render();});
  on('ngi','keydown',e=>{if(e.key==='Enter')$('ags')?.click();});
  on('tgh','click',()=>{ST.showHidden=!ST.showHidden;render();});

  all('.gc','click',e=>{const id=e.currentTarget.dataset.cat;setG(getG().map(c=>c.id===id?{...c,expanded:!c.expanded}:c));render();});
  all('.ch','click',e=>{e.stopPropagation();const id=e.currentTarget.dataset.cat;setG(getG().map(c=>c.id===id?{...c,hidden:!c.hidden}:c));render();});
  all('.cd','click',e=>{e.stopPropagation();const id=e.currentTarget.dataset.cat;setG(getG().filter(c=>c.id!==id));render();});
  all('.day-cell','click',e=>{const{cat,act,date}=e.currentTarget.dataset;setG(getG().map(c=>c.id===cat?{...c,activities:c.activities.map(a=>a.id===act?{...a,weekLog:{...a.weekLog,[date]:!a.weekLog[date]}}:a)}:c));render();});
  all('.act-icon-btn[data-ah]','click',e=>{e.stopPropagation();const{ah:cat,aid:act}=e.currentTarget.dataset;setG(getG().map(c=>c.id===cat?{...c,activities:c.activities.map(a=>a.id===act?{...a,hidden:!a.hidden}:a)}:c));render();});
  all('.act-icon-btn[data-ad]','click',e=>{e.stopPropagation();const{ad:cat,aid:act}=e.currentTarget.dataset;setG(getG().map(c=>c.id===cat?{...c,activities:c.activities.filter(a=>a.id!==act)}:c));render();});
  all('.oaa','click',e=>{ST.addingActTo=e.currentTarget.dataset.cat;ST.newActName='';render();setTimeout(()=>$('aActInp')?.focus(),0);});
  all('.aas','click',e=>{const v=$('aActInp')?.value.trim();if(!v)return;const cat=e.currentTarget.dataset.cat;setG(getG().map(c=>c.id===cat?{...c,activities:[...c.activities,{id:Date.now().toString(),name:v,weekLog:{}}]}:c));ST.addingActTo=null;render();});
  on('aac','click',()=>{ST.addingActTo=null;render();});
  on('aActInp','keydown',e=>{if(e.key==='Enter')document.querySelector('.aas')?.click();});

  on('ocfg','click',()=>{const c=getCfg();ST.configuring=!ST.configuring;ST.cfgName=c.name;ST.cfgEmoji=c.emoji;ST.cfgLabels={...c.labels};render();});
  on('cpc','click',()=>{ST.configuring=false;render();});
  all('.pc','click',e=>{setCfg(PRESETS[e.currentTarget.dataset.p]);ST.configuring=false;render();});
  on('scc','click',()=>{const lbls={};document.querySelectorAll('.clbl').forEach(el=>{lbls[el.dataset.s]=el.value||el.dataset.s;});setCfg({name:$('cni')?.value.trim()||'My List',emoji:$('cei')?.value||'📋',labels:lbls});ST.configuring=false;render();});
  on('pm','click',()=>{const[y,m]=ST.trackMonth.split('-').map(Number);ST.trackMonth=mKey(new Date(y,m-2));render();});
  on('nm','click',()=>{const[y,m]=ST.trackMonth.split('-').map(Number);ST.trackMonth=mKey(new Date(y,m));render();});
  on('oai','click',()=>{ST.trackAdding=true;render();setTimeout(()=>$('ntt')?.focus(),0);});
  on('ais','click',()=>{const t=$('ntt')?.value.trim();if(!t)return;const s=$('nts')?.value.trim()||'';const it=getIt();it.push({id:Date.now().toString(),title:t,subtitle:s,status:'active',month:ST.trackMonth});setIt(it);ST.trackAdding=false;render();});
  on('aic','click',()=>{ST.trackAdding=false;render();});
  on('ntt','keydown',e=>{if(e.key==='Enter')$('ais')?.click();});
  on('nts','keydown',e=>{if(e.key==='Enter')$('ais')?.click();});
  all('.tss','change',e=>{const id=e.currentTarget.dataset.id;setIt(getIt().map(b=>b.id===id?{...b,status:e.currentTarget.value}:b));render();});
  all('.tdel','click',e=>{setIt(getIt().filter(b=>b.id!==e.currentTarget.dataset.id));render();});

  all('.kadd','click',e=>{ST.kanbanAddTo=e.currentTarget.dataset.col;ST.kanbanTitle='';render();setTimeout(()=>$('kinp')?.focus(),0);});
  all('.ks','click',e=>{const v=$('kinp')?.value.trim();if(!v)return;const tasks=getK();tasks.push({id:Date.now().toString(),title:v,column:e.currentTarget.dataset.col});setK(tasks);ST.kanbanAddTo=null;render();});
  on('kc','click',()=>{ST.kanbanAddTo=null;render();});
  on('kinp','keydown',e=>{if(e.key==='Enter')document.querySelector('.ks')?.click();if(e.key==='Escape'){ST.kanbanAddTo=null;render();}});
  all('.kdel','click',e=>{setK(getK().filter(t=>t.id!==e.currentTarget.dataset.id));render();});
  on('kr','click',()=>{const tasks=getK();if(!tasks.length)return;if(!confirm('Archive all tasks and clear the board?'))return;const h=getKH();h.unshift({month:mKey(new Date()),archivedAt:new Date().toISOString(),tasks:[...tasks]});setKH(h);setK([]);render();});
  all('.k-task','dragstart',e=>{ST.kanbanDrag=e.currentTarget.dataset.tid;});
  all('.kcol','dragover',e=>e.preventDefault());
  all('.kcol','drop',e=>{if(!ST.kanbanDrag)return;const col=e.currentTarget.dataset.col;setK(getK().map(t=>t.id===ST.kanbanDrag?{...t,column:col}:t));ST.kanbanDrag=null;render();});

  on('ht','click',()=>{ST.histExpanded=!ST.histExpanded;render();});
  all('.hmt','click',e=>{const k=e.currentTarget.dataset.key;ST.histMonths[k]=!ST.histMonths[k];render();});
}

render();
