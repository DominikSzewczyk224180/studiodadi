document.addEventListener('DOMContentLoaded',()=>{
  const preloader=document.querySelector('.preloader');
  window.addEventListener('load',()=>{setTimeout(()=>preloader.classList.add('hidden'),1500)});
  setTimeout(()=>preloader.classList.add('hidden'),3000);
  const navbar=document.querySelector('.navbar');
  window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.pageYOffset>80)});
  const hamburger=document.querySelector('.hamburger'),mobileMenu=document.querySelector('.mobile-menu');
  hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');mobileMenu.classList.toggle('active');document.body.style.overflow=mobileMenu.classList.contains('active')?'hidden':''});
  document.querySelectorAll('.mobile-menu-links a').forEach(l=>{l.addEventListener('click',()=>{hamburger.classList.remove('active');mobileMenu.classList.remove('active');document.body.style.overflow=''})});
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t){window.scrollTo({top:t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-80,behavior:'smooth'})}})});
  const revealElements=document.querySelectorAll('.reveal');
  const revealOnScroll=()=>{revealElements.forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight-120)el.classList.add('active')})};
  window.addEventListener('scroll',revealOnScroll);revealOnScroll();
  const p=document.querySelector('.particles');for(let i=0;i<25;i++){const d=document.createElement('div');d.className='particle';d.style.left=Math.random()*100+'%';d.style.width=d.style.height=(Math.random()*3+1)+'px';d.style.animationDelay=Math.random()*8+'s';d.style.animationDuration=(Math.random()*6+6)+'s';p.appendChild(d)}
  const track=document.querySelector('.testimonial-track'),dots=document.querySelectorAll('.testimonial-dot');let cur=0;const total=document.querySelectorAll('.testimonial-card').length;
  function goTo(i){cur=i;track.style.transform=`translateX(-${cur*100}%)`;dots.forEach((d,j)=>d.classList.toggle('active',j===cur))}
  dots.forEach((d,i)=>d.addEventListener('click',()=>goTo(i)));setInterval(()=>goTo((cur+1)%total),5000);
  const counters=document.querySelectorAll('.counter');let done=false;
  function animC(){if(done)return;counters.forEach(c=>{const t=parseInt(c.dataset.target),s=c.dataset.suffix||'',st=t/(2000/16);let v=0;const tm=setInterval(()=>{v+=st;if(v>=t){v=t;clearInterval(tm)}c.textContent=Math.floor(v)+s},16)});done=true}
  const ab=document.querySelector('.about');if(ab)new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting)animC()})},{threshold:.3}).observe(ab);
  const hc=document.querySelector('.hero-content');
  if(hc){window.addEventListener('scroll',()=>{const s=window.pageYOffset;if(s<window.innerHeight){hc.style.opacity=1-(s/window.innerHeight)*.6}})};
  const bt=document.querySelector('.footer-back-top');if(bt)bt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],today=days[new Date().getDay()];
  document.querySelectorAll('.hours-item').forEach(item=>{if(item.dataset.day===today){item.style.background='rgba(201,169,110,0.06)';item.style.padding='10px 8px';item.style.borderRadius='4px';const t=item.querySelector('.hours-time');if(t)t.classList.add('today')}});
  (function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v18.0";fjs.parentNode.insertBefore(js,fjs)}(document,'script','facebook-jssdk'));
});
