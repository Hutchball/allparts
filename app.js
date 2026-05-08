// All Parts Ltd — app.js

const PACKAGES = [
  {"customer":"Royal Seaforth Grain Terminal","equipment":"BB1 BEND","shaft_imperial":"2 3/4\"","shaft_mm":69.85,"shaft_type":"imperial","pulley_dia":"18\"","bearing":"22216 E","bore_mm":80.0,"od_mm":140.0,"width_mm":33.0,"c_kn":290.0,"c0_kn":355.0,"housing":"SN 22516E","taper_lock":"H316","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"BB1 DRIVE","shaft_imperial":"4\"","shaft_mm":101.6,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22222 E","bore_mm":110.0,"od_mm":200.0,"width_mm":53.0,"c_kn":620.0,"c0_kn":800.0,"housing":"SN 22522E","taper_lock":"H322","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"BB1 SNUB","shaft_imperial":"2 3/4\"","shaft_mm":69.85,"shaft_type":"imperial","pulley_dia":"14\"","bearing":"22216 E","bore_mm":80.0,"od_mm":140.0,"width_mm":33.0,"c_kn":290.0,"c0_kn":355.0,"housing":"SN 22516E","taper_lock":"H316","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"BB1 TAIL","shaft_imperial":"2 1/2\"","shaft_mm":63.5,"shaft_type":"imperial","pulley_dia":"18\"","bearing":"22215 E","bore_mm":75.0,"od_mm":130.0,"width_mm":31.0,"c_kn":242.0,"c0_kn":290.0,"housing":"SN 22515E","taper_lock":"HE315","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"BB2 DRIVE","shaft_imperial":"4\"","shaft_mm":101.6,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22222 E","bore_mm":110.0,"od_mm":200.0,"width_mm":53.0,"c_kn":620.0,"c0_kn":800.0,"housing":"SN 22522E","taper_lock":"H322","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"BB3 DRIVE","shaft_imperial":"4\"","shaft_mm":101.6,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22222 E","bore_mm":110.0,"od_mm":200.0,"width_mm":53.0,"c_kn":620.0,"c0_kn":800.0,"housing":"SN 22522E","taper_lock":"H322","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"ELV 1 BOOT","shaft_imperial":"3 1/2\"","shaft_mm":88.9,"shaft_type":"imperial","pulley_dia":"48\"","bearing":"22220 E","bore_mm":100.0,"od_mm":180.0,"width_mm":46.0,"c_kn":510.0,"c0_kn":640.0,"housing":"SNL520-617","taper_lock":"HE320","seal":"TSN520L","grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":"Full kit confirmed"},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"ELV 2 BOOT","shaft_imperial":"3 1/2\"","shaft_mm":88.9,"shaft_type":"imperial","pulley_dia":"48\"","bearing":"22220 E","bore_mm":100.0,"od_mm":180.0,"width_mm":46.0,"c_kn":510.0,"c0_kn":640.0,"housing":"SNL520-617","taper_lock":"HE320","seal":"TSN520L","grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":"Full kit confirmed"},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"ELV 3 BOOT","shaft_imperial":"3 1/2\"","shaft_mm":88.9,"shaft_type":"imperial","pulley_dia":"48\"","bearing":"22220 E","bore_mm":100.0,"od_mm":180.0,"width_mm":46.0,"c_kn":510.0,"c0_kn":640.0,"housing":"SNL520-617","taper_lock":"HE320","seal":"TSN520L","grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":"Full kit confirmed"},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"ELV 4 BOOT","shaft_imperial":"3 1/2\"","shaft_mm":88.9,"shaft_type":"imperial","pulley_dia":"48\"","bearing":"22220 E","bore_mm":100.0,"od_mm":180.0,"width_mm":46.0,"c_kn":510.0,"c0_kn":640.0,"housing":"SNL520-617","taper_lock":"HE320","seal":"TSN520L","grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":"Full kit confirmed"},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"MC2 GTU","shaft_imperial":"2 1/2\"","shaft_mm":63.5,"shaft_type":"imperial","pulley_dia":"16\"","bearing":"22215 E","bore_mm":75.0,"od_mm":130.0,"width_mm":31.0,"c_kn":242.0,"c0_kn":290.0,"housing":"SN515-612","taper_lock":"HE315","seal":"TSN515L","grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":"Full kit confirmed"},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB1 DRIVE","shaft_imperial":"3 1/4\"","shaft_mm":82.55,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22218 E","bore_mm":90.0,"od_mm":160.0,"width_mm":40.0,"c_kn":400.0,"c0_kn":490.0,"housing":"SN 22518E","taper_lock":"H318","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB1 SNUB","shaft_imperial":"2 1/4\"","shaft_mm":57.15,"shaft_type":"imperial","pulley_dia":"16\"","bearing":"22213 E","bore_mm":65.0,"od_mm":120.0,"width_mm":31.0,"c_kn":224.0,"c0_kn":260.0,"housing":"SN 22513E","taper_lock":"H313","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB1 TAIL","shaft_imperial":"2 1/2\"","shaft_mm":63.5,"shaft_type":"imperial","pulley_dia":"18\"","bearing":"22213 E","bore_mm":65.0,"od_mm":120.0,"width_mm":31.0,"c_kn":224.0,"c0_kn":260.0,"housing":"SN 22513E","taper_lock":"H313","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB2 DRIVE","shaft_imperial":"3 1/4\"","shaft_mm":82.55,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22218 E","bore_mm":90.0,"od_mm":160.0,"width_mm":40.0,"c_kn":400.0,"c0_kn":490.0,"housing":"SN 22518E","taper_lock":"H318","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB2 SNUB","shaft_imperial":"2 1/4\"","shaft_mm":57.15,"shaft_type":"imperial","pulley_dia":"16\"","bearing":"22213 E","bore_mm":65.0,"od_mm":120.0,"width_mm":31.0,"c_kn":224.0,"c0_kn":260.0,"housing":"SN 22513E","taper_lock":"H313","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB2 TAIL","shaft_imperial":"2 1/2\"","shaft_mm":63.5,"shaft_type":"imperial","pulley_dia":"18\"","bearing":"22215 E","bore_mm":75.0,"od_mm":130.0,"width_mm":31.0,"c_kn":242.0,"c0_kn":290.0,"housing":"SN 22513E","taper_lock":"HE315","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":"Now 22215/HE315"},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB3 DRIVE","shaft_imperial":"3 1/4\"","shaft_mm":82.55,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22218 E","bore_mm":90.0,"od_mm":160.0,"width_mm":40.0,"c_kn":400.0,"c0_kn":490.0,"housing":"SN 22518E","taper_lock":"H318","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB3 SNUB","shaft_imperial":"2\"","shaft_mm":50.8,"shaft_type":"imperial","pulley_dia":"16\"","bearing":"22211 E","bore_mm":55.0,"od_mm":100.0,"width_mm":25.0,"c_kn":156.0,"c0_kn":176.0,"housing":"SN 22511E","taper_lock":"H311","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB4 DRIVE","shaft_imperial":"3 1/4\"","shaft_mm":82.55,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22218 E","bore_mm":90.0,"od_mm":160.0,"width_mm":40.0,"c_kn":400.0,"c0_kn":490.0,"housing":"SN 22518E","taper_lock":"H318","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB4 SNUB","shaft_imperial":"2\"","shaft_mm":50.8,"shaft_type":"imperial","pulley_dia":"16\"","bearing":"22211 E","bore_mm":55.0,"od_mm":100.0,"width_mm":25.0,"c_kn":156.0,"c0_kn":176.0,"housing":"SN 22511E","taper_lock":"H311","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB5 DRIVE","shaft_imperial":"3 1/2\"","shaft_mm":88.9,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22220 E","bore_mm":100.0,"od_mm":180.0,"width_mm":46.0,"c_kn":510.0,"c0_kn":640.0,"housing":"SN 22520E","taper_lock":"HE320","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB5 SNUB","shaft_imperial":"2 1/4\"","shaft_mm":57.15,"shaft_type":"imperial","pulley_dia":"16\"","bearing":"22213 E","bore_mm":65.0,"od_mm":120.0,"width_mm":31.0,"c_kn":224.0,"c0_kn":260.0,"housing":"SN 22513E","taper_lock":"H313","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB5 TAIL","shaft_imperial":"2 1/2\"","shaft_mm":63.5,"shaft_type":"imperial","pulley_dia":"18\"","bearing":"22213 E","bore_mm":65.0,"od_mm":120.0,"width_mm":31.0,"c_kn":224.0,"c0_kn":260.0,"housing":"SN 22513E","taper_lock":"H313","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB6 DRIVE","shaft_imperial":"3 1/2\"","shaft_mm":88.9,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22220 E","bore_mm":100.0,"od_mm":180.0,"width_mm":46.0,"c_kn":510.0,"c0_kn":640.0,"housing":"SN 22520E","taper_lock":"HE320","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB6 TAIL","shaft_imperial":"2 1/2\"","shaft_mm":63.5,"shaft_type":"imperial","pulley_dia":"18\"","bearing":"22215 E","bore_mm":75.0,"od_mm":130.0,"width_mm":31.0,"c_kn":242.0,"c0_kn":290.0,"housing":"SN 22513E","taper_lock":"HE315","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":"SN22215E HE315"},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB7 DRIVE","shaft_imperial":"3 1/2\"","shaft_mm":88.9,"shaft_type":"imperial","pulley_dia":"24\"","bearing":"22220 E","bore_mm":100.0,"od_mm":180.0,"width_mm":46.0,"c_kn":510.0,"c0_kn":640.0,"housing":"SN 22520E","taper_lock":"HE320","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB8 GTU","shaft_imperial":"3\"","shaft_mm":76.2,"shaft_type":"imperial","pulley_dia":"18\"","bearing":"22217 E","bore_mm":85.0,"od_mm":150.0,"width_mm":36.0,"c_kn":340.0,"c0_kn":415.0,"housing":null,"taper_lock":"HE317","seal":"722517B","grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":""},
  {"customer":"Royal Seaforth Grain Terminal","equipment":"RB9 GTU","shaft_imperial":"3\"","shaft_mm":76.2,"shaft_type":"imperial","pulley_dia":"18\"","bearing":"22217 E","bore_mm":85.0,"od_mm":150.0,"width_mm":36.0,"c_kn":340.0,"c0_kn":415.0,"housing":null,"taper_lock":"HE317","seal":null,"grease_type":"SKF LGEP2","includes_gun":1,"includes_spanner":1,"includes_bolts":1,"notes":"H317T/L"}
];

// ---- Helpers ----

const POSITIONS = ['DRIVE', 'SNUB', 'TAIL', 'BOOT', 'BEND', 'GTU'];

function getBelt(equipment) {
  const parts = equipment.toUpperCase().split(' ');
  if (POSITIONS.includes(parts[parts.length - 1])) return parts.slice(0, -1).join(' ');
  return equipment.toUpperCase();
}

function isComplete(pkg) {
  return !!(pkg.bearing && pkg.taper_lock && (pkg.housing || pkg.seal));
}

// ---- Card renderer ----

function partItem(eq, type, label, displayLabel, value, extra) {
  return `
    <div class="part-item">
      <button class="part-add-btn" onclick="addPartFromCard('${eq}','${type}','${label}',this)" title="Add to basket">+</button>
      <div class="part-label">${displayLabel}</div>
      <div class="part-value">${value}</div>
      ${extra ? `<div class="part-included">${extra}</div>` : ''}
    </div>`;
}

function renderCard(p) {
  const complete = isComplete(p);
  const eq = p.equipment;
  return `
    <div class="result-card${!complete ? ' result-card-incomplete' : ''}">
      <div class="result-header">
        <div>
          <div class="result-title">${eq}</div>
          <div class="result-customer">${p.customer}</div>
        </div>
        <div class="result-shaft">${p.shaft_type === 'imperial' ? p.shaft_imperial : p.shaft_mm + 'mm'} shaft</div>
      </div>
      ${!complete ? '<p class="incomplete-notice">⚠ Kit data incomplete — contact us for confirmed parts list</p>' : ''}
      <div class="parts-grid">
        ${p.bearing  ? partItem(eq,'bearing',  `Bearing — SKF ${p.bearing}`,       'Bearing',           `SKF ${p.bearing}`,      '✓ Included in All Parts') : ''}
        ${p.bearing  ? `<div class="part-item"><div class="part-label">Bore × OD × Width</div><div class="part-value">${p.bore_mm}×${p.od_mm}×${p.width_mm} mm</div></div>` : ''}
        ${p.housing  ? partItem(eq,'housing',  `Plummer Block — SKF ${p.housing}`, 'Plummer Block',     `SKF ${p.housing}`,      '✓ Included in All Parts') : ''}
        ${p.taper_lock ? partItem(eq,'taper_lock',`Taper Lock — SKF ${p.taper_lock}`,'Taper Lock',     `SKF ${p.taper_lock}`,   '✓ Included in All Parts') : ''}
        ${p.seal     ? partItem(eq,'seal',     `Seal — ${p.seal}`,                 'Seal',              p.seal,                  '✓ Included in All Parts') : ''}
        ${p.grease_type ? partItem(eq,'grease',`Grease — ${p.grease_type}`,        'Grease',            p.grease_type,           '✓ Included in All Parts') : ''}
        ${p.includes_gun     ? partItem(eq,'gun',    'Grease Gun',    'Grease Gun',    'Standard',     '✓ Included in All Parts') : ''}
        ${p.includes_spanner ? partItem(eq,'spanner','C Spanner',     'C Spanner',     'Correct size', '✓ Included in All Parts') : ''}
        ${p.includes_bolts   ? partItem(eq,'bolts',  'Holding Down Bolts','Holding Down Bolts','Correct grade','✓ Included in All Parts') : ''}
        ${p.notes ? `<div class="part-item" style="grid-column:1/-1"><div class="part-label">Notes</div><div class="part-value" style="font-weight:500;color:var(--muted)">${p.notes}</div></div>` : ''}
      </div>
      <div class="card-actions">
        <button class="card-btn card-btn-secondary" onclick="addSet('${eq}',1,this)">Buy one</button>
        <button class="card-btn card-btn-secondary" onclick="addSet('${eq}',2,this)">Buy pair</button>
        <button class="card-btn card-btn-primary"   onclick="addAllParts('${eq}',this)">Buy All Parts ★</button>
      </div>
    </div>`;
}

// ---- Search ----

function doSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const results = document.getElementById('results');
  resetBeltBtn();
  if (!q) { results.innerHTML = ''; return; }

  const matches = PACKAGES.filter(p =>
    p.equipment.toLowerCase().includes(q) ||
    p.customer.toLowerCase().includes(q) ||
    (p.bearing && p.bearing.toLowerCase().includes(q)) ||
    (p.housing  && p.housing.toLowerCase().includes(q))
  );

  results.innerHTML = matches.length
    ? matches.map(renderCard).join('')
    : `<p class="no-results">No package found for "<strong>${q}</strong>". <a href="#contact">Contact us</a> and we'll build one.</p>`;
}

// ---- Breadcrumb / Belt Browse ----

function buildBreadcrumb() {
  const beltComplete = {};
  PACKAGES.forEach(p => {
    const belt = getBelt(p.equipment);
    if (!(belt in beltComplete)) beltComplete[belt] = true;
    if (!isComplete(p)) beltComplete[belt] = false;
  });

  const dropdown = document.getElementById('beltDropdown');
  if (!dropdown) return;

  dropdown.innerHTML = Object.keys(beltComplete).sort().map(belt => {
    const ok = beltComplete[belt];
    return `<div class="belt-option${ok ? '' : ' is-incomplete'}" onclick="selectBelt('${belt}')">
      <span>${belt}</span>${ok ? '' : '<span class="belt-incomplete-tag">incomplete</span>'}
    </div>`;
  }).join('');

  document.addEventListener('click', e => {
    const wrap = document.getElementById('beltSelectWrap');
    if (wrap && !wrap.contains(e.target)) closeBeltDropdown();
  });
}

function toggleBeltDropdown() {
  const dd = document.getElementById('beltDropdown');
  dd.style.display === 'none' ? openBeltDropdown() : closeBeltDropdown();
}
function openBeltDropdown() {
  document.getElementById('beltDropdown').style.display = 'block';
  const a = document.getElementById('beltBtnArrow'); if (a) a.textContent = '▴';
}
function closeBeltDropdown() {
  document.getElementById('beltDropdown').style.display = 'none';
  const a = document.getElementById('beltBtnArrow'); if (a) a.textContent = '▾';
}
function resetBeltBtn() {
  const btn = document.getElementById('beltBtn');
  if (btn) btn.innerHTML = 'Select belt <span id="beltBtnArrow">▾</span>';
}

function selectBelt(belt) {
  closeBeltDropdown();
  const btn = document.getElementById('beltBtn');
  if (btn) btn.innerHTML = `${belt} <span id="beltBtnArrow">▾</span>`;
  document.getElementById('searchInput').value = '';

  const matches = PACKAGES.filter(p => getBelt(p.equipment) === belt);
  const hasIncomplete = matches.some(p => !isComplete(p));
  const results = document.getElementById('results');

  results.innerHTML = `
    <div class="belt-results-header">
      <span class="belt-results-title">${belt} — ${matches.length} position${matches.length !== 1 ? 's' : ''}</span>
      ${hasIncomplete ? '<span class="belt-incomplete-badge">data incomplete</span>' : ''}
    </div>
    ${matches.map(renderCard).join('')}`;

  results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- Basket ----

let basketItems = [];
let _nextId = 0;

function addToBasket({ equipment, label, type, qty = 1 }) {
  const existing = basketItems.find(i => i.equipment === equipment && i.label === label);
  if (existing) { existing.qty += qty; }
  else { basketItems.push({ id: ++_nextId, equipment, label, type, qty }); }
  updateBasketBtn();
  renderBasket();
}

function removeFromBasket(id) {
  basketItems = basketItems.filter(i => i.id !== id);
  updateBasketBtn();
  renderBasket();
}

function changeQty(id, delta) {
  const item = basketItems.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) basketItems = basketItems.filter(i => i.id !== id);
  updateBasketBtn();
  renderBasket();
}

function updateBasketBtn() {
  const total = basketItems.reduce((s, i) => s + i.qty, 0);
  const count = document.getElementById('basketCount');
  if (!count) return;
  count.textContent = total;
  count.style.display = total > 0 ? 'flex' : 'none';
  const btn = document.getElementById('basketBtn');
  if (btn) btn.classList.toggle('has-items', total > 0);
}

function renderBasket() {
  const itemsEl  = document.getElementById('basketItems');
  const footerEl = document.getElementById('basketFooter');
  if (!itemsEl) return;

  if (!basketItems.length) {
    itemsEl.innerHTML  = '<p class="basket-empty">Your basket is empty.<br>Find equipment above and add parts.</p>';
    footerEl.innerHTML = '';
    return;
  }

  itemsEl.innerHTML = basketItems.map(item => `
    <div class="basket-item">
      <div class="basket-item-info">
        <div class="basket-item-label" title="${item.label}">${item.label}</div>
        <div class="basket-item-eq">${item.equipment}</div>
      </div>
      <div class="basket-item-qty">
        <button onclick="changeQty(${item.id},-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${item.id},1)">+</button>
      </div>
      <button class="basket-item-remove" onclick="removeFromBasket(${item.id})" title="Remove">✕</button>
    </div>`).join('');

  const total = basketItems.reduce((s, i) => s + i.qty, 0);
  footerEl.innerHTML = `
    <div class="basket-total">${total} item${total !== 1 ? 's' : ''} in basket</div>
    <button class="btn btn-primary basket-enquire-btn" onclick="enquireBasket()">Enquire about basket →</button>
    <button class="basket-clear-btn" onclick="clearBasket()">Empty basket</button>`;
}

function clearBasket() {
  basketItems = [];
  updateBasketBtn();
  renderBasket();
}

function toggleBasket() {
  const panel   = document.getElementById('basketPanel');
  const overlay = document.getElementById('basketOverlay');
  if (!panel) return;
  const opening = !panel.classList.contains('open');
  panel.classList.toggle('open', opening);
  overlay.classList.toggle('open', opening);
  document.body.style.overflow = opening ? 'hidden' : '';
}

function enquireBasket() {
  const lines = basketItems.map(i => `• ${i.label} ×${i.qty}  (${i.equipment})`).join('\n');
  const notesEl = document.getElementById('notes');
  if (notesEl) notesEl.value = lines;
  toggleBasket();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// ---- Add helpers ----

function addPartFromCard(equipment, type, label, el) {
  addToBasket({ equipment, label, type });
  flyToBasket(el);
}

function addSet(equipment, qty, el) {
  const p = PACKAGES.find(x => x.equipment === equipment);
  if (!p) return;
  const greaseQty = qty === 1 ? 5 : 10;
  if (p.bearing)        addToBasket({ equipment, label: `Bearing — SKF ${p.bearing}`,       type: 'bearing',    qty });
  if (p.housing)        addToBasket({ equipment, label: `Plummer Block — SKF ${p.housing}`, type: 'housing',    qty });
  if (p.taper_lock)     addToBasket({ equipment, label: `Taper Lock — SKF ${p.taper_lock}`, type: 'taper_lock', qty });
  if (p.seal)           addToBasket({ equipment, label: `Seal — ${p.seal}`,                 type: 'seal',       qty });
  if (p.grease_type)    addToBasket({ equipment, label: `Grease — ${p.grease_type}`,        type: 'grease',     qty: greaseQty });
  if (p.includes_gun)   addToBasket({ equipment, label: 'Grease Gun',                       type: 'gun',        qty: 1 });
  if (p.includes_bolts) addToBasket({ equipment, label: 'Holding Down Bolts (pair)',        type: 'bolts',      qty: 1 });
  flyToBasket(el);
}

function addAllParts(equipment, el) {
  const p = PACKAGES.find(x => x.equipment === equipment);
  if (!p) return;
  if (p.bearing)    addToBasket({ equipment, label: `Bearing — SKF ${p.bearing}`,       type: 'bearing',    qty: 2 });
  if (p.housing)    addToBasket({ equipment, label: `Plummer Block — SKF ${p.housing}`, type: 'housing',    qty: 2 });
  if (p.taper_lock) addToBasket({ equipment, label: `Taper Lock — SKF ${p.taper_lock}`, type: 'taper_lock', qty: 2 });
  if (p.seal)       addToBasket({ equipment, label: `Seal Pack — ${p.seal}`,             type: 'seal',       qty: 1 });
                    addToBasket({ equipment, label: `Grease — ${p.grease_type || 'SKF LGEP2'}`, type: 'grease', qty: 10 });
                    addToBasket({ equipment, label: 'Grease Gun',                        type: 'gun',        qty: 1 });
                    addToBasket({ equipment, label: 'Holding Down Bolts (pair)',         type: 'bolts',      qty: 1 });
                    addToBasket({ equipment, label: 'Washers (small pack)',              type: 'washer',     qty: 1 });
                    addToBasket({ equipment, label: 'Nuts (pair)',                       type: 'nut',        qty: 1 });
  flyToBasket(el);
}

// ---- Animation ----

function flyToBasket(sourceEl) {
  const btn = document.getElementById('basketBtn');
  if (!btn || !sourceEl) return;

  const src = sourceEl.getBoundingClientRect();
  const dst = btn.getBoundingClientRect();

  const dot = document.createElement('div');
  dot.style.cssText = [
    'position:fixed',
    `left:${src.left + src.width  / 2}px`,
    `top:${src.top  + src.height / 2}px`,
    'width:22px','height:22px',
    'background:#16a34a',
    'border-radius:50%',
    'z-index:9999',
    'pointer-events:none',
    'transform:translate(-50%,-50%)',
  ].join(';');
  document.body.appendChild(dot);

  dot.getBoundingClientRect(); // force reflow
  dot.style.transition = [
    'left 0.52s cubic-bezier(0.4,0,0.2,1)',
    'top 0.52s cubic-bezier(0.4,0,0.2,1)',
    'opacity 0.2s 0.35s',
    'transform 0.52s',
  ].join(',');
  dot.style.left      = `${dst.left + dst.width  / 2}px`;
  dot.style.top       = `${dst.top  + dst.height / 2}px`;
  dot.style.opacity   = '0';
  dot.style.transform = 'translate(-50%,-50%) scale(0.15)';

  setTimeout(() => {
    dot.remove();
    btn.classList.add('basket-bounce');
    setTimeout(() => btn.classList.remove('basket-bounce'), 450);
  }, 560);
}

// ---- Init ----

document.addEventListener('DOMContentLoaded', () => {
  buildBreadcrumb();
  renderBasket();
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
});
