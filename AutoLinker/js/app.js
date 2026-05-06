// ── AutoLinker Shared JS ──────────────────────────────

// Toast notifications
function showToast(msg, type = '') {
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

// Email typo checker
const commonDomains = ['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','live.com','me.com','protonmail.com'];
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, (_,i) => Array.from({length: n+1}, (_,j) => i===0?j:j===0?i:0));
  for (let i=1;i<=m;i++) for (let j=1;j<=n;j++)
    dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}
function suggestEmail(email) {
  if (!email.includes('@')) return null;
  const [user, domain] = email.split('@');
  if (!domain) return null;
  let best = null, bestDist = 99;
  for (const d of commonDomains) {
    const dist = levenshtein(domain.toLowerCase(), d);
    if (dist < bestDist && dist > 0 && dist <= 2) { best = d; bestDist = dist; }
  }
  return best ? `${user}@${best}` : null;
}
function initEmailChecker(inputId, hintId) {
  const input = document.getElementById(inputId);
  const hint = document.getElementById(hintId);
  if (!input || !hint) return;
  input.addEventListener('blur', () => {
    const suggestion = suggestEmail(input.value.trim());
    if (suggestion) {
      hint.innerHTML = `Did you mean <strong style="cursor:pointer;color:var(--blue);" onclick="document.getElementById('${inputId}').value='${suggestion}';document.getElementById('${hintId}').textContent=''">${suggestion}</strong>?`;
    } else {
      hint.textContent = '';
    }
  });
}

// Section switcher for dashboards
function showSection(id) {
  document.querySelectorAll('.section-view').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  const nav = document.querySelector(`[data-sec="${id}"]`);
  if (nav) nav.classList.add('active');
  const titleEl = document.getElementById('page-title');
  if (titleEl && nav) titleEl.textContent = nav.querySelector('span')?.textContent || '';
}

// Modal helpers
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// Sign out
function signOut() {
  window.location.href = '../login.html';
}
function signOutRoot() {
  window.location.href = 'login.html';
}

// Format date
function timeAgo(dateStr) {
  const d = new Date(dateStr), now = new Date();
  const diff = Math.floor((now - d) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff/60) + 'm ago';
  if (diff < 86400) return Math.floor(diff/3600) + 'h ago';
  return Math.floor(diff/86400) + 'd ago';
}

// Fake post submit
function submitPost(inputId, feedId) {
  const inp = document.getElementById(inputId);
  const feed = document.getElementById(feedId);
  if (!inp || !feed || !inp.value.trim()) return;
  const text = inp.value.trim();
  inp.value = '';
  const post = document.createElement('div');
  post.className = 'feed-post';
  post.innerHTML = `
    <div class="post-header">
      <div class="p-avatar" style="background:var(--blue);width:38px;height:38px;">ME</div>
      <div class="post-meta">
        <div class="post-author">You</div>
        <div class="post-org">Just now</div>
      </div>
    </div>
    <div class="post-body">${text}</div>
    <div class="post-actions">
      <span class="post-action">👍 Like</span>
      <span class="post-action">💬 Comment</span>
      <span class="post-action">↗ Share</span>
    </div>`;
  feed.prepend(post);
  showToast('Post shared!', 'success');
}
