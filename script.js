
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'})}));
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n,p=el.dataset.p||'',s=el.dataset.s||'';el.textContent=p+n+s;});
