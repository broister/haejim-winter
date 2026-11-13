(function () {
  if (window.__hjw) return; window.__hjw = true;

  /* ---------- 설정 ---------- */
  var SEASON_END = new Date('2027-01-04T00:00:00+09:00'); // 이 날짜가 지나면 자동으로 사라짐
  var BASE = window.HJW_BASE || 'https://broister.github.io/haejim-winter/'; // mp3 6개를 올린 폴더
  var FILES = window.HJW_FILES || [
    'haejim-winter-01.mp3', 'haejim-winter-02.mp3', 'haejim-winter-03.mp3',
    'haejim-winter-04.mp3', 'haejim-winter-05.mp3', 'haejim-winter-06.mp3'
  ];
  var TITLES = ['우리만의 시작', '따뜻한 당신', '겨울 저녁, 쇼윈도 앞에서',
                '콧노래가 나오는 날', '창가의 오후', '해져도, 여기에'];
  var LIST = '해짐의 겨울';
  var LOGO = '.hj-logo'; // 트리를 올릴 로고
  var SNOW = true; // 눈 내리는 효과 (끄려면 false)
  var SNOW_PAGES = ['/', '/index.html', '/about.html', '/process.html']; // 눈이 내리는 페이지 (메인·스토리)
  var JMARK = 'data:image/png;base64,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'; // LP 가운데 J 서브마크
  /* -------------------------- */

  if (new Date() > SEASON_END) return;

  var css = ''
  + '.hjw{position:fixed;left:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:900;display:flex;align-items:center;font-family:inherit;-webkit-tap-highlight-color:transparent}'
  + '.hjw button{appearance:none;-webkit-appearance:none;border:0;margin:0;padding:0;background:none;color:inherit;font:inherit;cursor:pointer}'
  + '.hjw-disc{position:relative;z-index:2;width:56px;height:56px;border-radius:50%;flex:none;filter:drop-shadow(0 4px 10px rgba(0,0,0,.28))}'
  + '.hjw-vinyl{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 20deg,rgba(255,255,255,.16),transparent 12% 48%,rgba(255,255,255,.11) 54%,transparent 62% 100%),repeating-radial-gradient(circle at 50% 50%,#161513 0 1.5px,#262421 1.5px 3px);animation:hjw-spin 3.6s linear infinite;animation-play-state:paused}'
  + '.hjw-label{position:absolute;left:50%;top:50%;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;background:#f4f0e8;background-image:url('+JMARK+');background-repeat:no-repeat;background-position:center;background-size:14px 14px}'
  + '.hjw-snow{position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:890}'
  + '.hjw-arm{position:absolute;right:1px;top:-5px;width:3px;height:27px;border-radius:2px;background:#cfc8b8;box-shadow:0 0 0 1px rgba(0,0,0,.25);transform-origin:50% 2px;transform:rotate(-24deg);transition:transform .5s ease}'
  + '.hjw-arm:before{content:"";position:absolute;left:-3px;top:-3px;width:9px;height:9px;border-radius:50%;background:#8d8676;box-shadow:0 0 0 1px rgba(0,0,0,.25)}'
  + '.hjw.is-playing .hjw-vinyl{animation-play-state:running}'
  + '.hjw.is-playing .hjw-arm{transform:rotate(20deg)}'
  + '.hjw-disc:focus-visible{outline:2px solid #d8342a;outline-offset:3px}'
  + '.hjw-panel{display:flex;align-items:center;height:44px;margin-left:-28px;padding-left:38px;border-radius:0 22px 22px 0;background:#1c1b19;color:#f4f0e8;max-width:0;opacity:0;overflow:hidden;white-space:nowrap;transition:max-width .45s ease,opacity .3s ease;box-shadow:0 4px 10px rgba(0,0,0,.2)}'
  + '.hjw.is-open .hjw-panel{max-width:270px;opacity:1}'
  + '.hjw-meta{display:flex;flex-direction:column;justify-content:center;min-width:0;padding-right:6px}'
  + '.hjw-list{font:500 9px/1.3 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.14em;color:#b9b2a3}'
  + '.hjw-title{font-size:13px;line-height:1.35;overflow:hidden;text-overflow:ellipsis;max-width:150px}'
  + '.hjw-nav{width:32px;height:44px;flex:none;font-size:20px;line-height:44px;color:#f4f0e8;opacity:.75}'
  + '.hjw-nav:hover,.hjw-nav:focus-visible{opacity:1}'
  + '.hjw-nav:last-child{margin-right:6px}'
  + '@keyframes hjw-spin{to{transform:rotate(360deg)}}'
  + LOGO + '{position:relative}'
  + '.hjw-tree{position:absolute;left:-3px;bottom:calc(100% - 7px);width:18px;height:22px;pointer-events:none;line-height:0}'
  + '.hjw-tree svg{display:block;width:100%;height:100%;overflow:visible}'
  + '.hjw-tw{animation:hjw-tw 2.4s ease-in-out infinite}.hjw-tw:nth-of-type(2n){animation-delay:.8s}.hjw-tw:nth-of-type(3n){animation-delay:1.6s}'
  + '@keyframes hjw-tw{50%{opacity:.35}}'
  + '@media (prefers-reduced-motion:reduce){.hjw-vinyl,.hjw-tw{animation:none}.hjw-arm,.hjw-panel{transition:none}}'
  + '@media print{.hjw,.hjw-tree,.hjw-snow{display:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- 트리 장식 (로고 자체는 건드리지 않고 위에 얹기만 함) ---------- */
  var logo = document.querySelector(LOGO);
  if (logo) {
    var tree = document.createElement('span');
    tree.className = 'hjw-tree'; tree.setAttribute('aria-hidden', 'true');
    tree.innerHTML = '<svg viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="14" y="34" width="4" height="6" fill="#7a4a21"/>'
      + '<polygon points="16,19 29,35 3,35" fill="#0a8c47"/>'
      + '<polygon points="16,12 26,26 6,26" fill="#0c9a4f"/>'
      + '<polygon points="16,6 23,17 9,17" fill="#10ad5a"/>'
      + '<path d="M16 0l1.5 3.6L21 5l-3.5 1.4L16 10l-1.5-3.6L11 5l3.5-1.4z" fill="#ffc400"/>'
      + '<g stroke="#f4f0e8" stroke-width="1.3" stroke-linecap="round"><path d="M14.6 20.1l2.8 2.8m0-2.8l-2.8 2.8"/><path d="M21.6 29.1l2.8 2.8m0-2.8l-2.8 2.8"/></g>'
      + '<circle class="hjw-tw" cx="13" cy="14" r="1.9" fill="#ff2d2d"/>'
      + '<circle class="hjw-tw" cx="20" cy="15" r="1.7" fill="#2f6bff"/>'
      + '<circle class="hjw-tw" cx="10.5" cy="23" r="1.9" fill="#ffc400"/>'
      + '<circle class="hjw-tw" cx="21.5" cy="23" r="1.8" fill="#ff4fa3"/>'
      + '<circle class="hjw-tw" cx="8" cy="32" r="1.9" fill="#2f6bff"/>'
      + '<circle class="hjw-tw" cx="15" cy="31" r="2" fill="#ff2d2d"/>'
      + '</svg>';
    logo.appendChild(tree);
  }

  /* ---------- 눈 내리는 효과 (클릭을 막지 않고, 움직임 줄이기 설정이면 꺼짐) ---------- */
  if (SNOW && SNOW_PAGES.indexOf(location.pathname) > -1 && !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    var cv = document.createElement('canvas');
    cv.className = 'hjw-snow'; cv.setAttribute('aria-hidden', 'true'); document.body.appendChild(cv);
    var ctx = cv.getContext('2d'), W = 0, H = 0, flakes = [], raf = 0;
    var mk = function (any) {
      return { x: Math.random() * W, y: any ? Math.random() * H : -8, r: 1 + Math.random() * 2.4,
               v: .35 + Math.random() * .8, a: Math.random() * 6.28, w: .3 + Math.random() * .7 };
    };
    var size = function () {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var want = Math.round(Math.min(90, Math.max(28, W * H / 16000)));
      while (flakes.length < want) flakes.push(mk(true));
      flakes.length = want;
    };
    var tick = function () {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.y += f.v; f.a += .012; f.x += Math.sin(f.a) * f.w * .4;
        if (f.y > H + 8) { flakes[i] = mk(false); continue; }
        // 밝은 배경에서도 보이도록 옅은 그림자를 먼저 그림
        ctx.beginPath(); ctx.arc(f.x, f.y + .6, f.r + .9, 0, 6.283); ctx.fillStyle = 'rgba(110,100,85,.16)'; ctx.fill();
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 6.283); ctx.fillStyle = 'rgba(255,255,255,.95)'; ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    size(); window.addEventListener('resize', size);
    document.addEventListener('visibilitychange', function () {
      cancelAnimationFrame(raf); if (!document.hidden) raf = requestAnimationFrame(tick);
    });
    raf = requestAnimationFrame(tick);
  }

  /* ---------- 턴테이블 플레이어 ---------- */
  var n = FILES.length, idx = 0, pendingT = 0, unloading = false, lastSave = 0;
  var root = document.createElement('div');
  root.className = 'hjw'; root.setAttribute('role', 'region'); root.setAttribute('aria-label', LIST + ' 음악');
  root.innerHTML = '<button type="button" class="hjw-disc" aria-pressed="false"><span class="hjw-vinyl"><span class="hjw-label"></span></span><span class="hjw-arm"></span></button>'
    + '<div class="hjw-panel"><div class="hjw-meta"><span class="hjw-list"></span><span class="hjw-title"></span></div>'
    + '<button type="button" class="hjw-nav hjw-prev" aria-label="이전 곡">‹</button><button type="button" class="hjw-nav hjw-next" aria-label="다음 곡">›</button></div>';
  document.body.appendChild(root);
  var disc = root.querySelector('.hjw-disc'), elList = root.querySelector('.hjw-list'), elTitle = root.querySelector('.hjw-title');
  var audio = new Audio(); audio.preload = 'none';

  function url(f) { return /^https?:/.test(f) ? f : BASE + f; }
  function save() {
    try { sessionStorage.setItem('hjw', JSON.stringify({ i: idx, t: audio.currentTime || 0, p: !audio.paused })); } catch (e) {}
  }
  function label() {
    elList.textContent = LIST + ' · ' + (idx + 1) + '/' + n;
    elTitle.textContent = TITLES[idx] || '';
    disc.setAttribute('aria-label', (audio.paused ? '음악 재생: ' : '음악 일시정지: ') + (TITLES[idx] || LIST));
  }
  function load(i, t) {
    idx = (i % n + n) % n; pendingT = t || 0;
    audio.src = url(FILES[idx]); label();
  }
  function play() {
    var p = audio.play();
    if (p && p.catch) p.catch(function () {
      // 브라우저가 자동재생을 막으면, 화면을 처음 누를 때 이어서 재생
      var once = function (ev) {
        document.removeEventListener('pointerdown', once, true);
        if (root.contains(ev.target)) return;
        audio.play().catch(function () {});
      };
      document.addEventListener('pointerdown', once, true);
    });
  }

  audio.addEventListener('loadedmetadata', function () {
    if (pendingT > 0 && pendingT < audio.duration - 1) { try { audio.currentTime = pendingT; } catch (e) {} }
    pendingT = 0;
  });
  audio.addEventListener('play', function () {
    root.classList.add('is-playing', 'is-open'); disc.setAttribute('aria-pressed', 'true'); label(); save();
  });
  audio.addEventListener('pause', function () {
    if (unloading) return;
    setTimeout(function () {
      if (!audio.paused) return;
      root.classList.remove('is-playing', 'is-open'); disc.setAttribute('aria-pressed', 'false'); label(); save();
    }, 350);
  });
  audio.addEventListener('ended', function () { load(idx + 1); play(); });
  audio.addEventListener('timeupdate', function () {
    var now = Date.now(); if (now - lastSave > 2000) { lastSave = now; save(); }
  });
  audio.addEventListener('error', function () { root.classList.remove('is-playing'); });
  window.addEventListener('pagehide', function () { unloading = true; save(); });

  disc.addEventListener('click', function () { if (audio.paused) play(); else audio.pause(); });
  root.querySelector('.hjw-prev').addEventListener('click', function () { load(idx - 1); play(); });
  root.querySelector('.hjw-next').addEventListener('click', function () { load(idx + 1); play(); });

  // 다른 페이지로 넘어가도 듣던 곡·위치에서 이어 재생
  var s = null;
  try { s = JSON.parse(sessionStorage.getItem('hjw') || 'null'); } catch (e) {}
  if (s && typeof s.i === 'number') { load(s.i, s.t); if (s.p) play(); } else { load(0); }
})();
