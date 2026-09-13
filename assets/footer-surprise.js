(() => {
  const trigger = document.querySelector('[data-footer-surprise]');
  const layer = document.querySelector('[data-footer-surprise-layer]');
  if (!trigger || !layer) return;
  const footer = trigger.closest('footer');
  const delights = document.createElement('div');
  delights.className = 'footer-delights';
  trigger.textContent = 'surprise <3';
  const song = document.createElement('button');
  song.className = 'footer-song';
  song.type = 'button';
  song.textContent = 'ur fav song ♫';
  song.setAttribute('aria-haspopup', 'dialog');
  footer.insertBefore(delights, trigger);
  delights.append(trigger, song);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const timers = new Set();
  let background = [];
  let previousOverflow = '';
  let active = false;
  const later = (fn, ms) => {
    const id = setTimeout(() => { timers.delete(id); fn(); }, ms);
    timers.add(id);
  };
  const close = () => {
    if (!active) return;
    active = false;
    timers.forEach(clearTimeout);
    timers.clear();
    layer.classList.remove('is-open');
    layer.setAttribute('aria-hidden', 'true');
    layer.replaceChildren();
    background.forEach(([node, inert]) => { node.inert = inert; });
    document.body.style.overflow = previousOverflow;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus({ preventScroll: true });
  };
  const open = () => {
    if (active) return;
    active = true;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    background = [...document.body.children].filter(node => node !== layer).map(node => [node, node.inert]);
    background.forEach(([node]) => { node.inert = true; });
    layer.setAttribute('role', 'dialog');
    layer.setAttribute('aria-modal', 'true');
    layer.setAttribute('aria-label', 'A little love for Habi');
    layer.setAttribute('aria-hidden', 'false');
    layer.innerHTML = `<button type="button" class="surprise-close" aria-label="Close surprise">×</button>
      <div class="surprise-stars" aria-hidden="true"></div>
      <div class="surprise-art" aria-hidden="true"><div class="surprise-halo"></div><div class="surprise-orbit"></div><div class="surprise-orbit second"></div><div class="surprise-gem"><div class="surprise-heart"></div><div class="surprise-face"><i></i><i></i><b></b></div></div><div class="surprise-rays"></div></div>
      <div class="surprise-letter"><p class="surprise-message" aria-label="i love you so much"><span aria-hidden="true" class="surprise-typed"></span><span class="surprise-caret" aria-hidden="true"></span></p><p class="surprise-signature">every little bit of you.</p></div>`;
    const heart = layer.querySelector('.surprise-heart');
    // A single continuous silhouette keeps the glossy lighting free of lobe seams.
    heart.style.clipPath = `polygon(${Array.from({ length: 160 }, (_, i) => {
      const t = i / 160 * Math.PI * 2;
      return `${50 + 3 * 16 * Math.sin(t) ** 3}% ${46 - 3 * (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t))}%`;
    }).join(',')})`;
    const stars = layer.querySelector('.surprise-stars');
    for (let i = 0; i < 48; i++) {
      const star = document.createElement('i');
      star.style.cssText = `--x:${Math.random()*100}%;--y:${Math.random()*100}%;--delay:${Math.random()*4}s;--s:${i % 7 === 0 ? 7 : 2}px`;
      stars.append(star);
    }
    const rays = layer.querySelector('.surprise-rays');
    for (let i = 0; i < 28; i++) {
      const ray = document.createElement('i');
      ray.style.cssText = `--a:${i*360/28}deg;--delay:${4.7+Math.random()*.5}s;--length:${90+Math.random()*140}px`;
      rays.append(ray);
    }
    if (!reduced.matches) {
      for (let i = 0; i < 48; i++) {
        const piece = document.createElement('img');
        piece.className = 'surprise-petal';
        piece.alt = '';
        piece.setAttribute('aria-hidden', 'true');
        piece.src = `https://emojicdn.elk.sh/${encodeURIComponent(i % 2 ? '❤️' : '🤍')}?style=apple`;
        const angle = i * Math.PI * 2 / 48;
        const distance = 150 + Math.random() * Math.min(innerWidth, innerHeight) * .48;
        piece.style.cssText = `--dx:${Math.cos(angle)*distance}px;--dy:${Math.sin(angle)*distance}px;--spin:${Math.random()*100-50}deg;--delay:${5.2+Math.random()*2.5}s;--s:${18+Math.random()*18}px`;
        stars.append(piece);
      }
    }
    const typed = layer.querySelector('.surprise-typed');
    const message = layer.querySelector('.surprise-message');
    const verbs = ['love', 'adore', 'cherish', 'treasure'];
    const letters = (text, done) => {
      let i = 0;
      const tick = () => {
        typed.textContent = text.slice(0, ++i);
        if (i < text.length) later(tick, 90);
        else { message.setAttribute('aria-label', text); if (done) later(done, 2700); }
      };
      tick();
    };
    const cycle = index => {
      // Keep the sentence in place; only the affectionate verb gets rewritten.
      const verb = verbs[index % verbs.length];
      let current = verbs[(index - 1) % verbs.length];
      const erase = () => {
        current = current.slice(0, -1);
        typed.textContent = `i ${current} you so much`;
        if (current) later(erase, 100);
        else {
          let i = 0;
          const write = () => {
            typed.textContent = `i ${verb.slice(0, ++i)} you so much`;
            if (i < verb.length) later(write, 150);
            else { message.setAttribute('aria-label', typed.textContent); later(() => cycle(index+1), 3000); }
          };
          later(write, 200);
        }
      };
      erase();
    };
    layer.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    const closeButton = layer.querySelector('.surprise-close');
    closeButton.addEventListener('click', close);
    closeButton.focus();
    if (reduced.matches) typed.textContent = 'i love you so much';
    else later(() => letters('i love you so much', () => cycle(1)), 5600);
  };
  const openSong = () => {
    const songLayer = document.createElement('div');
    songLayer.className = 'song-layer';
    songLayer.setAttribute('role', 'dialog');
    songLayer.setAttribute('aria-modal', 'true');
    songLayer.setAttribute('aria-label', 'Your favourite song');
    songLayer.innerHTML = `<div class="song-card"><button type="button" class="song-close" aria-label="Close song">×</button><p>for Habi ♡</p><a class="song-link" href="https://www.youtube.com/watch?v=nvr4lPoKqzI" target="_blank" rel="noopener noreferrer"><img src="https://i.ytimg.com/vi/nvr4lPoKqzI/hqdefault.jpg" alt="Fairuz — Kifak Inta lyric video"><span>Fairuz — Kifak Inta</span><small>Open on YouTube ↗</small></a></div>`;
    const closeSong = () => { songLayer.remove(); song.focus(); };
    songLayer.querySelector('.song-close').addEventListener('click', closeSong);
    songLayer.addEventListener('click', event => { if (event.target === songLayer) closeSong(); });
    songLayer.addEventListener('keydown', event => { if (event.key === 'Escape') closeSong(); });
    document.body.append(songLayer);
    songLayer.querySelector('.song-close').focus();
  };
  trigger.addEventListener('click', open);
  song.addEventListener('click', openSong);
  layer.addEventListener('click', event => { if (event.target === layer) close(); });
  layer.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') { event.preventDefault(); layer.querySelector('.surprise-close').focus(); }
  });
  reduced.addEventListener('change', () => { if (active) { close(); open(); } });
})();
