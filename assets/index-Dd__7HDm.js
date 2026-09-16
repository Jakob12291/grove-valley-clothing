(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/grove-valley-clothing/`,t=[{name:`Valley Heavyweight Hoodie`,category:`Hoodies`,price:72,color:`#5662dc`,accent:`#aeb6ff`,tag:`Best seller`},{name:`After Dark Graphic Tee`,category:`Tees`,price:34,color:`#24262d`,accent:`#747b8d`,tag:`New`},{name:`Grove Utility Cargo`,category:`Bottoms`,price:64,color:`#748768`,accent:`#bdcea8`},{name:`Core Logo Beanie`,category:`Accessories`,price:26,color:`#be6d52`,accent:`#ffc2a9`},{name:`Valley Zip-Up`,category:`Hoodies`,price:68,color:`#7949b6`,accent:`#d9aeff`},{name:`Offline Mesh Jersey`,category:`Tees`,price:46,color:`#287e8b`,accent:`#9cebf3`,tag:`Limited`}],n=e=>`
  <svg viewBox="0 0 320 260" role="img" aria-label="${e.name}">
    <defs>
      <linearGradient id="g-${e.name.replaceAll(` `,`-`)}" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="${e.accent}"/>
        <stop offset="1" stop-color="${e.color}"/>
      </linearGradient>
    </defs>
    <circle cx="255" cy="58" r="62" fill="${e.accent}" opacity=".2"/>
    <path d="M86 69 130 43h60l44 26 35 77-42 19-18-41v108H111V124l-18 41-42-19 35-77Z"
      fill="url(#g-${e.name.replaceAll(` `,`-`)})" stroke="rgba(255,255,255,.25)" stroke-width="2"/>
    <path d="M132 44c3 28 53 28 57 0" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="8"/>
    <path d="M137 138h47" stroke="rgba(255,255,255,.7)" stroke-width="7" stroke-linecap="round"/>
    <text x="160" y="116" text-anchor="middle" fill="white" font-size="23" font-weight="900">GV</text>
  </svg>`,r=t.map((e,t)=>`
  <article class="product-card" data-category="${e.category}">
    <div class="product-art">
      ${e.tag?`<span class="tag">${e.tag}</span>`:``}
      <button class="heart" aria-label="Save ${e.name}">♡</button>
      ${n(e)}
    </div>
    <div class="product-info">
      <div>
        <p class="product-category">${e.category}</p>
        <h3>${e.name}</h3>
      </div>
      <button class="add-button" data-product="${t}" aria-label="Add ${e.name} to cart">+</button>
    </div>
    <p class="price">$${e.price.toFixed(2)}</p>
  </article>`).join(``);document.querySelector(`#app`).innerHTML=`
  <aside class="server-rail" aria-label="Store shortcuts">
    <a class="server-logo active" href="#" aria-label="Grove Valley home">
      <video id="gorilla-logo" src="${e}gorilla-dance.mp4" aria-label="Dancing Grove Valley gorilla" autoplay muted loop playsinline></video>
      <span class="logo-fallback">GV</span>
    </a>
    <span class="rail-line"></span>
    <button class="server-icon" aria-label="New drops">✦</button>
    <button class="server-icon" aria-label="Popular items">⌁</button>
    <button class="server-icon" aria-label="Sale items">%</button>
    <span class="rail-spacer"></span>
    <button class="server-icon help" aria-label="Help">?</button>
  </aside>

  <aside class="shop-sidebar">
    <div class="brand">
      <span class="online-dot"></span>
      <div><strong>GROVE VALLEY</strong><small>OFFICIAL STORE</small></div>
      <span>⌄</span>
    </div>
    <div class="search"><span>⌕</span><input type="search" placeholder="Search the shop" aria-label="Search products"/></div>
    <p class="section-label">SHOP</p>
    <nav>
      <button class="nav-item selected" data-filter="All"><span>#</span> new-arrivals</button>
      <button class="nav-item" data-filter="Hoodies"><span>#</span> hoodies</button>
      <button class="nav-item" data-filter="Tees"><span>#</span> tees</button>
      <button class="nav-item" data-filter="Bottoms"><span>#</span> bottoms</button>
      <button class="nav-item" data-filter="Accessories"><span>#</span> accessories</button>
    </nav>
    <div class="sidebar-card">
      <span class="spark">✦</span>
      <strong>Grove Rewards</strong>
      <p>Earn points on every drop.</p>
      <button id="join-club">Join the club</button>
    </div>
    <div class="profile">
      <div class="avatar">G</div>
      <div><strong>guest</strong><small>#0001</small></div>
      <span>⚙</span>
    </div>
  </aside>

  <main>
    <header>
      <button class="mobile-menu" aria-label="Open menu">☰</button>
      <div><span>#</span><strong id="channel-title">new-arrivals</strong><i></i><p>Fresh fits just landed. Don't sleep.</p></div>
      <div class="header-actions">
        <button aria-label="Notifications">♧</button>
        <button class="cart-button" aria-label="Shopping cart">Bag <b id="cart-count">0</b></button>
      </div>
    </header>

    <div class="content">
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">DROP 001 · LIVE NOW</span>
          <h1>Wear your<br/><em>own server.</em></h1>
          <p>Built for late nights, loud chats, and staying comfortably online.</p>
          <a href="#collection">Shop the drop <span>→</span></a>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="orbit one">✦</div><div class="orbit two">+</div>
          <div class="hoodie">${n(t[0])}</div>
          <span class="status-pill"><i></i> 2,481 wearing now</span>
        </div>
      </section>

      <section class="collection" id="collection">
        <div class="collection-heading">
          <div><span class="eyebrow">THE LATEST</span><h2 id="collection-title">New arrivals</h2></div>
          <span id="item-count">${t.length} items</span>
        </div>
        <div class="product-grid">${r}</div>
        <div class="empty-state" hidden>No products found. Try another search.</div>
      </section>
    </div>

    <div class="gorilla-takeover" hidden>
      <div class="party-word one">GROVE</div>
      <div class="party-word two">VALLEY</div>
      <video src="${e}gorilla-dance.mp4" playsinline preload="metadata"></video>
      <button class="close-party" aria-label="Close dancing gorilla">×</button>
    </div>
    <div class="toast" role="status" aria-live="polite">Added to your bag</div>
  </main>
`;var i=document.querySelector(`#gorilla-logo`);i.addEventListener(`loadeddata`,()=>i.parentElement?.classList.add(`has-logo`)),i.addEventListener(`error`,()=>i.remove());var a=0,o=document.querySelector(`#cart-count`),s=document.querySelector(`.toast`),c=0;document.querySelectorAll(`.add-button`).forEach(e=>{e.addEventListener(`click`,()=>{a+=1,o.textContent=String(a),e.textContent=`✓`,e.classList.add(`added`),s.classList.add(`show`),window.clearTimeout(c),c=window.setTimeout(()=>s.classList.remove(`show`),1800),window.setTimeout(()=>{e.textContent=`+`,e.classList.remove(`added`)},1e3)})});var l=()=>{let e=document.querySelector(`.nav-item.selected`)?.dataset.filter??`All`,t=document.querySelector(`.search input`).value.trim().toLowerCase(),n=0;document.querySelectorAll(`.product-card`).forEach(r=>{let i=e===`All`||r.dataset.category===e,a=r.textContent?.toLowerCase().includes(t);r.hidden=!(i&&a),r.hidden||(n+=1)}),document.querySelector(`#item-count`).textContent=`${n} item${n===1?``:`s`}`,document.querySelector(`.empty-state`).hidden=n!==0};document.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelector(`.nav-item.selected`)?.classList.remove(`selected`),e.classList.add(`selected`);let t=e.textContent?.trim().replace(`#`,``)??`new-arrivals`;document.querySelector(`#channel-title`).textContent=t,document.querySelector(`#collection-title`).textContent=e.dataset.filter===`All`?`New arrivals`:e.dataset.filter,l(),document.querySelector(`.shop-sidebar`)?.classList.remove(`open`)})}),document.querySelector(`.search input`).addEventListener(`input`,l),document.querySelector(`.mobile-menu`).addEventListener(`click`,()=>{document.querySelector(`.shop-sidebar`)?.classList.toggle(`open`)});var u=document.querySelector(`.gorilla-takeover`),d=u.querySelector(`video`),f=()=>{d.pause(),d.currentTime=0,u.hidden=!0};document.querySelector(`#join-club`).addEventListener(`click`,()=>{u.hidden=!1,d.currentTime=0,d.muted=!1,d.volume=1,d.play()}),d.addEventListener(`ended`,f),document.querySelector(`.close-party`).addEventListener(`click`,f),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&!u.hidden&&f()});