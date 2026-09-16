import './style.css'

type Product = {
  name: string
  category: string
  price: number
  color: string
  accent: string
  tag?: string
}

const products: Product[] = [
  { name: 'Valley Heavyweight Hoodie', category: 'Hoodies', price: 72, color: '#5662dc', accent: '#aeb6ff', tag: 'Best seller' },
  { name: 'After Dark Graphic Tee', category: 'Tees', price: 34, color: '#24262d', accent: '#747b8d', tag: 'New' },
  { name: 'Grove Utility Cargo', category: 'Bottoms', price: 64, color: '#748768', accent: '#bdcea8' },
  { name: 'Core Logo Beanie', category: 'Accessories', price: 26, color: '#be6d52', accent: '#ffc2a9' },
  { name: 'Valley Zip-Up', category: 'Hoodies', price: 68, color: '#7949b6', accent: '#d9aeff' },
  { name: 'Offline Mesh Jersey', category: 'Tees', price: 46, color: '#287e8b', accent: '#9cebf3', tag: 'Limited' },
]

const productArt = (product: Product) => `
  <svg viewBox="0 0 320 260" role="img" aria-label="${product.name}">
    <defs>
      <linearGradient id="g-${product.name.replaceAll(' ', '-')}" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="${product.accent}"/>
        <stop offset="1" stop-color="${product.color}"/>
      </linearGradient>
    </defs>
    <circle cx="255" cy="58" r="62" fill="${product.accent}" opacity=".2"/>
    <path d="M86 69 130 43h60l44 26 35 77-42 19-18-41v108H111V124l-18 41-42-19 35-77Z"
      fill="url(#g-${product.name.replaceAll(' ', '-')})" stroke="rgba(255,255,255,.25)" stroke-width="2"/>
    <path d="M132 44c3 28 53 28 57 0" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="8"/>
    <path d="M137 138h47" stroke="rgba(255,255,255,.7)" stroke-width="7" stroke-linecap="round"/>
    <text x="160" y="116" text-anchor="middle" fill="white" font-size="23" font-weight="900">GV</text>
  </svg>`

const productCards = products.map((product, index) => `
  <article class="product-card" data-category="${product.category}">
    <div class="product-art">
      ${product.tag ? `<span class="tag">${product.tag}</span>` : ''}
      <button class="heart" aria-label="Save ${product.name}">♡</button>
      ${productArt(product)}
    </div>
    <div class="product-info">
      <div>
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
      </div>
      <button class="add-button" data-product="${index}" aria-label="Add ${product.name} to cart">+</button>
    </div>
    <p class="price">$${product.price.toFixed(2)}</p>
  </article>`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <aside class="server-rail" aria-label="Store shortcuts">
    <a class="server-logo active" href="#" aria-label="Grove Valley home">
      <img id="gorilla-logo" src="/gorilla-dance.gif" alt="Dancing Grove Valley gorilla"/>
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
      <button>Join the club</button>
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
          <div class="hoodie">${productArt(products[0])}</div>
          <span class="status-pill"><i></i> 2,481 wearing now</span>
        </div>
      </section>

      <section class="collection" id="collection">
        <div class="collection-heading">
          <div><span class="eyebrow">THE LATEST</span><h2 id="collection-title">New arrivals</h2></div>
          <span id="item-count">${products.length} items</span>
        </div>
        <div class="product-grid">${productCards}</div>
        <div class="empty-state" hidden>No products found. Try another search.</div>
      </section>
    </div>

    <div class="toast" role="status" aria-live="polite">Added to your bag</div>
  </main>
`

const logo = document.querySelector<HTMLImageElement>('#gorilla-logo')!
logo.addEventListener('load', () => logo.parentElement?.classList.add('has-logo'))
logo.addEventListener('error', () => logo.remove())

let cartCount = 0
const cartLabel = document.querySelector<HTMLElement>('#cart-count')!
const toast = document.querySelector<HTMLElement>('.toast')!
let toastTimer = 0

document.querySelectorAll<HTMLButtonElement>('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1
    cartLabel.textContent = String(cartCount)
    button.textContent = '✓'
    button.classList.add('added')
    toast.classList.add('show')
    window.clearTimeout(toastTimer)
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 1800)
    window.setTimeout(() => {
      button.textContent = '+'
      button.classList.remove('added')
    }, 1000)
  })
})

const applyFilters = () => {
  const selected = document.querySelector<HTMLButtonElement>('.nav-item.selected')?.dataset.filter ?? 'All'
  const query = document.querySelector<HTMLInputElement>('.search input')!.value.trim().toLowerCase()
  let visible = 0

  document.querySelectorAll<HTMLElement>('.product-card').forEach((card) => {
    const categoryMatches = selected === 'All' || card.dataset.category === selected
    const searchMatches = card.textContent?.toLowerCase().includes(query)
    card.hidden = !(categoryMatches && searchMatches)
    if (!card.hidden) visible += 1
  })

  document.querySelector('#item-count')!.textContent = `${visible} item${visible === 1 ? '' : 's'}`
  document.querySelector<HTMLElement>('.empty-state')!.hidden = visible !== 0
}

document.querySelectorAll<HTMLButtonElement>('.nav-item').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.nav-item.selected')?.classList.remove('selected')
    button.classList.add('selected')
    const label = button.textContent?.trim().replace('#', '') ?? 'new-arrivals'
    document.querySelector('#channel-title')!.textContent = label
    document.querySelector('#collection-title')!.textContent = button.dataset.filter === 'All' ? 'New arrivals' : button.dataset.filter!
    applyFilters()
    document.querySelector('.shop-sidebar')?.classList.remove('open')
  })
})

document.querySelector<HTMLInputElement>('.search input')!.addEventListener('input', applyFilters)
document.querySelector<HTMLButtonElement>('.mobile-menu')!.addEventListener('click', () => {
  document.querySelector('.shop-sidebar')?.classList.toggle('open')
})
