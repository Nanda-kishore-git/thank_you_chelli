// ---------- ambient petals ----------
const petalSymbols = ['🌸','🌷','💮','✿'];
const petalLayer = document.getElementById('petalLayer');
const PETAL_COUNT = 16;
for(let i=0;i<PETAL_COUNT;i++){
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = petalSymbols[Math.floor(Math.random()*petalSymbols.length)];
  p.style.left = Math.random()*100 + 'vw';
  const duration = 12 + Math.random()*10;
  p.style.animationDuration = duration + 's';
  p.style.animationDelay = (Math.random()*-duration) + 's';
  p.style.setProperty('--drift-x', (Math.random()*120 - 60) + 'px');
  p.style.fontSize = (0.9 + Math.random()*0.9) + 'rem';
  petalLayer.appendChild(p);
}

// ---------- scroll reveal ----------
const revealEls = document.querySelectorAll(
  '.frame-wrap, .photo-section h2, .letter-line, .sign-off, .finale-section h2, .seal-btn'
);
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      if(entry.target.id === 'sealBtn'){
        setTimeout(()=> entry.target.classList.add('pulsing'), 900);
      }
    }
  });
}, { threshold:0.3 });
revealEls.forEach(el=> io.observe(el));

// stagger letter lines slightly via transition-delay set in JS for nicer cascade
document.querySelectorAll('.letter-line').forEach((el, i)=>{
  el.style.transitionDelay = (i*0.05) + 's';
});

// ---------- heart / firework burst ----------
const sealBtn = document.getElementById('sealBtn');
const burstLayer = document.getElementById('burstLayer');
const finaleMsg = document.getElementById('finaleMsg');
const heartEmojis = ['💖','💕','💗','💛','💙','✨'];

function launchBurst(){
  const rect = sealBtn.getBoundingClientRect();
  const originX = rect.left + rect.width/2;
  const originY = rect.top + rect.height/2;

  const COUNT = 28;
  for(let i=0;i<COUNT;i++){
    const piece = document.createElement('span');
    piece.className = 'heart-piece';
    piece.textContent = heartEmojis[Math.floor(Math.random()*heartEmojis.length)];
    piece.style.left = originX + 'px';
    piece.style.top = originY + 'px';
    burstLayer.appendChild(piece);

    const angle = (Math.PI * 2 * i) / COUNT + (Math.random()*0.4 - 0.2);
    const distance = 140 + Math.random()*160;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 60; // bias upward
    const rotate = (Math.random()*360 - 180);
    const scale = 0.8 + Math.random()*0.9;
    const duration = 1100 + Math.random()*700;

    piece.animate([
      { transform:'translate(-50%,-50%) translate(0,0) scale(0) rotate(0deg)', opacity:0 },
      { transform:`translate(-50%,-50%) translate(${dx*0.3}px, ${dy*0.3}px) scale(${scale}) rotate(${rotate*0.4}deg)`, opacity:1, offset:0.25 },
      { transform:`translate(-50%,-50%) translate(${dx}px, ${dy+160}px) scale(${scale*0.8}) rotate(${rotate}deg)`, opacity:0 }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)',
      fill:'forwards'
    });

    setTimeout(()=> piece.remove(), duration + 50);
  }
}

sealBtn.addEventListener('click', ()=>{
  launchBurst();
  sealBtn.classList.remove('pulsing');
  finaleMsg.classList.add('show');
});
