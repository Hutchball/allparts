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
  if (POSITIONS.includes(parts[parts.length - 1])) {
    return parts.slice(0, -1).join(' ');
  }
  return equipment.toUpperCase();
}

function isComplete(pkg) {
  return !!(pkg.bearing && pkg.taper_lock && (pkg.housing || pkg.seal));
}

function renderCard(p) {
  const complete = isComplete(p);
  return `
    <div class="result-card${!complete ? ' result-card-incomplete' : ''}">
      <div class="result-header">
        <div>
          <div class="result-title">${p.equipment}</div>
          <div class="result-customer">${p.customer}</div>
        </div>
        <div class="result-shaft">${p.shaft_type === 'imperial' ? p.shaft_imperial : p.shaft_mm + 'mm'} shaft</div>
      </div>
      ${!complete ? '<p class="incomplete-notice">⚠ Kit data incomplete — contact us for confirmed parts list</p>' : ''}
      <div class="parts-grid">
        ${p.bearing ? `<div class="part-item"><div class="part-label">Bearing</div><div class="part-value">SKF ${p.bearing}</div><div class="part-included">✓ Included</div></div>` : ''}
        ${p.bearing ? `<div class="part-item"><div class="part-label">Bore × OD × Width</div><div class="part-value">${p.bore_mm}×${p.od_mm}×${p.width_mm} mm</div></div>` : ''}
        ${p.housing ? `<div class="part-item"><div class="part-label">Plummer Block</div><div class="part-value">SKF ${p.housing}</div><div class="part-included">✓ Included</div></div>` : ''}
        ${p.taper_lock ? `<div class="part-item"><div class="part-label">Taper Lock</div><div class="part-value">SKF ${p.taper_lock}</div><div class="part-included">✓ Included</div></div>` : ''}
        ${p.seal ? `<div class="part-item"><div class="part-label">Seal</div><div class="part-value">${p.seal}</div><div class="part-included">✓ Included</div></div>` : ''}
        ${p.grease_type ? `<div class="part-item"><div class="part-label">Grease</div><div class="part-value">${p.grease_type}</div><div class="part-included">✓ Included</div></div>` : ''}
        ${p.includes_gun ? `<div class="part-item"><div class="part-label">Grease Gun</div><div class="part-value">Standard</div><div class="part-included">✓ Included</div></div>` : ''}
        ${p.includes_spanner ? `<div class="part-item"><div class="part-label">C Spanner</div><div class="part-value">Correct size</div><div class="part-included">✓ Included</div></div>` : ''}
        ${p.includes_bolts ? `<div class="part-item"><div class="part-label">Holding Down Bolts</div><div class="part-value">Correct grade</div><div class="part-included">✓ Included</div></div>` : ''}
        ${p.notes ? `<div class="part-item" style="grid-column:1/-1"><div class="part-label">Notes</div><div class="part-value" style="font-weight:500;color:var(--muted)">${p.notes}</div></div>` : ''}
      </div>
    </div>
  `;
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
    (p.housing && p.housing.toLowerCase().includes(q))
  );

  if (!matches.length) {
    results.innerHTML = `<p class="no-results">No package found for "<strong>${q}</strong>". <a href="#contact">Contact us</a> and we'll build one.</p>`;
    return;
  }

  results.innerHTML = matches.map(renderCard).join('');
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

  const sortedBelts = Object.keys(beltComplete).sort();
  dropdown.innerHTML = sortedBelts.map(belt => {
    const complete = beltComplete[belt];
    return `<div class="belt-option${!complete ? ' is-incomplete' : ''}" onclick="selectBelt('${belt}')">
      <span>${belt}</span>
      ${!complete ? '<span class="belt-incomplete-tag">incomplete</span>' : ''}
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
  const arrow = document.getElementById('beltBtnArrow');
  if (arrow) arrow.textContent = '▴';
}

function closeBeltDropdown() {
  document.getElementById('beltDropdown').style.display = 'none';
  const arrow = document.getElementById('beltBtnArrow');
  if (arrow) arrow.textContent = '▾';
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
    ${matches.map(renderCard).join('')}
  `;

  results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- Init ----

document.addEventListener('DOMContentLoaded', () => {
  buildBreadcrumb();
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
});
