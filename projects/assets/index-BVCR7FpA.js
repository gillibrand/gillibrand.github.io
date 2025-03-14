(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();let g;function N(){if(g!==void 0)return g;const t=document.createElement("div");return Object.assign(t.style,{position:"absolute",inset:"-200px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(t),g=t.offsetWidth-t.clientWidth,document.body.removeChild(t),g}let A=!1;function T(){A||(document.documentElement.style.setProperty("--scrollbar-width",`${N()}px`),A=!0)}function R(){T(),document.documentElement.classList.add("modal-open")}function D(){document.documentElement.classList.remove("modal-open")}const W=window.matchMedia("(prefers-reduced-motion: reduce)");function h(){return W.matches}const z=document.querySelectorAll("button:has(> .photo)");z.forEach(t=>{const e=t.querySelector("img");t.addEventListener("click",()=>{X(e)})});function F(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}async function H(t){const e=t.closest("figure"),n=e==null?void 0:e.querySelector("figcaption"),i=`
    <dialog class="lightbox">
      <img class="lightbox__photo photo" src="${t.currentSrc}"
      height="${t.getAttribute("height")}"
      width="${t.getAttribute("width")}"
      alt="${t.alt}">
      <p class="lightbox__text opacity-0">${(n==null?void 0:n.textContent)||""}</p>
    </dialog>`,o=F(i),s=o.querySelector(".lightbox__photo");return new Promise(r=>{s.addEventListener("load",()=>{r(o)}),s.addEventListener("error",a=>{throw new Error("img not loaded. Skipping "+t.currentSrc)})})}async function X(t){R();const e=await H(t),n=e.querySelector(".lightbox__photo"),i=e.querySelector(".lightbox__text");e.addEventListener("click",l=>{l.target.nodeName!=="P"&&(l.preventDefault(),p())}),Y(e,p),e.addEventListener("cancel",l=>{l.preventDefault(),p()}),e.addEventListener("keydown",l=>{l.key===" "&&(l.preventDefault(),p())}),document.body.appendChild(e),e.showModal(),setTimeout(()=>e.classList.add("is-open"));const o=t.parentNode;o.style.visibility="hidden";const s=t.getBoundingClientRect(),r=n.getBoundingClientRect(),a=s.height/r.height,c=s.width/r.width,u=s.y-r.y,b=s.x-r.x,m={easing:"ease",duration:400},S=`translateY(${u}px) translateX(${b}px) scale(${c}, ${a})`,k="translate(0, 0) scale(1) ";let f;h()||(f=n.animate({transform:[S,k]},m)),i.classList.remove("opacity-0");async function p(){var l;f==null||f.cancel(),i.classList.add("opacity-0"),n.style.borderWidth=`${10/a}px`,e.classList.remove("is-open"),h()||await n.animate({transform:[k,S]},m).finished,o.style.visibility="",e.close(),(l=e.parentElement)==null||l.removeChild(e),D()}}function Y(t,e){let i=0,o=0;t.addEventListener("touchstart",s=>{i=s.touches[0].clientY,o=i}),t.addEventListener("touchmove",s=>{o=s.touches[0].clientY}),t.addEventListener("touchend",s=>{const r=o-i;Math.abs(r)>50&&(s.preventDefault(),e()),i=0,o=0})}const j="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m3%2014v-12l11%206z'%20fill='%23fff'/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%23fff'%3e%3cpath%20d='m3%202h3v12h-3z'/%3e%3cpath%20d='m9%202h3v12h-3z'/%3e%3c/g%3e%3c/svg%3e",G="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%23fff'%3e%3cpath%20d='m7%2013v-10l-5%205z'/%3e%3cpath%20d='m14%2013v-10l-5%205z'/%3e%3c/g%3e%3c/svg%3e",V=document.querySelectorAll(".vidplayer");function _(t){const e=document.createElement("img");return e.src=t,e}function E(t,e,n){t.innerHTML="",t.textContent=e,t.appendChild(n)}V.forEach(t=>{const e=t.querySelector(".vidplayer__video"),n=t.querySelector(".vidplayer__button"),i=t.querySelector(".vidplayer__overlay");function o(){i&&(i.style.display="none"),E(n,"Pause ",_(U))}function s(){E(n,"Play ",_(j))}function r(){E(n,"Replay ",_(G))}function a(){e.paused?e.play():e.pause()}n.addEventListener("click",a),e.addEventListener("click",c=>{c.preventDefault(),a()}),e.addEventListener("play",o),e.addEventListener("pause",s),e.addEventListener("ended",r),s()});const C=document.getElementById("hamburger"),B=document.getElementById("sidebar"),L=document.getElementById("navunderlay");function x(){return document.body.classList.contains("nav-open")}function K(){x()?y():J()}const v={easing:"ease",duration:200};function J(){x()||(document.body.classList.add("nav-open"),C.setAttribute("aria-expanded",String(!0)),!h()&&(B.animate({transform:["translateX(-100%)","translateX(0)"]},v),L.animate({opacity:["0","1"]},v)))}async function y(){if(x()){if(!h()){const t=B.animate({transform:["translateX(0)","translateX(-100%)"]},v);L.animate({opacity:["1","0"]},v),await t.finished}document.body.classList.remove("nav-open"),C.setAttribute("aria-expanded",String(!1))}}C.addEventListener("click",K);document.body.addEventListener("keydown",t=>{t.key==="Escape"&&y()});L.addEventListener("click",y);const w=document.getElementById("navmenu");function I(t){if(t){if(t.nodeName!=="A"){const e=t.parentElement,n=e==null?void 0:e.id;t=document.querySelector(`[data-to="${n}"]`)}w.querySelectorAll(".is-selected").forEach(e=>e.classList.remove("is-selected")),t.classList.add("is-selected"),"scrollIntoViewIfNeeded"in t&&t.scrollIntoViewIfNeeded()}}function Q(){const t=[];document.querySelectorAll("main section[id]").forEach(e=>{const n=e.id,i=e.querySelector("h1,h2,h3,h4");if(!i)return;const o=i.dataset.alt||i.textContent,s=["navmenu__entry"];(i.nodeName==="H2"||i.nodeName==="H1")&&s.push("navmenu__entry--group"),t.push(`<li><a class="${s.join(" ")}" data-to="${n}" href="#${n}">
        <span>${o}</span>
        </a></li>`)}),w.innerHTML=t.join(""),w.addEventListener("click",e=>{const n=e.target;if(n.nodeName!=="A")return;e.preventDefault();const i=n.dataset.to==="me"?"center":"start",o=document.getElementById(n.dataset.to);o==null||o.scrollIntoView({behavior:h()?"auto":"smooth",block:i}),y()})}function Z(){function t(s,r){s.forEach(a=>{if(a.isIntersecting){const b=a.target.parentElement.id,m=document.querySelector(`[data-to="${b}"]`);I(m)}})}const e=new IntersectionObserver(t,{root:null,rootMargin:"0px 0px -80% 0px",threshold:0}),i=Array.from(document.querySelectorAll("section[id]")).map(s=>s.querySelector("h1,h2,h3")),o=document.documentElement.scrollTop;for(const s of i.reverse())if(s.offsetTop<o){I(s);break}i.forEach(s=>{e.observe(s)})}Q();Z();function ee(t){const e=t.dataset.compare;if(!e)return;const n=document.getElementById(e);if(!n)return;function i(){n.classList.toggle("compare--checked",t.checked)}i(),t.addEventListener("click",i);function o(){t.checked=!t.checked,i()}n.addEventListener("click",o)}document.querySelectorAll(".toggle__checkbox").forEach(ee);function te(){const t=document.querySelector("footer");if(!t){console.warn("Footer element not found.");return}new IntersectionObserver(n=>{const i=n[0];t.classList.toggle("is-end",i.isIntersecting)},{threshold:.99}).observe(t)}te();function P(t,...e){return t.reduce((n,i,o)=>n+i+(e[o]??""),"")}const ne=P`
  :host {
    /* host element takes not space on page */
    position: absolute;
  }

  .CourseClear {
    --cc-bg-color: var(--cc-custom-bg-color, #f3d41a);
    --cc-color: var(--cc-custom-color, #2c2b55);

    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    height: auto;
    max-width: unset;
    width: auto;
    max-height: unset;
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    box-sizing: border-box;

    &::backdrop {
      transition: background-color 200ms;
      background-color: rgba(0 0 0 / 0);
    }

    &.is-curtains-finished::backdrop {
      background-color: rgba(0 0 0 / 0.75);
    }
  }

  .CourseClear__content {
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    padding: 1rem;
    display: grid;
    place-items: center;
    z-index: 1;
    overflow: clip;

    color: var(--cc-color);
    box-shadow: 0 0.2rem 1rem rgba(0 0 0 / 0);

    .is-wave-finished > & {
      background-color: var(--cc-bg-color);
      transition: box-shadow ease 1s;
      box-shadow: 0 0.25rem 1rem rgba(0 0 0 / 0.2);
    }

    & > * {
      grid-area: 1 / 1;
    }
  }

  @keyframes bounce {
    0% {
      opacity: 0;
      translate: 0 100%;
    }
    8% {
      translate: 0 -40%;
    }
    10% {
      opacity: 1;
      translate: 0 -50%;
    }
    12% {
      translate: 0 -40%;
    }
    20% {
      translate: 0 0;
    }
    28% {
      translate: 0 -20%;
    }
    30% {
      translate: 0 -25%;
    }
    32% {
      translate: 0 -20%;
    }
    40% {
      translate: 0 0;
    }
    50% {
      translate: 0 0;
      opacity: 1;
    }
    80% {
      translate: 0 0;
      opacity: 1;
    }

    100% {
      translate: -150% 0;
      opacity: 0;
    }
  }

  .CourseClear__greeting {
    font-size: min(10vw, 5rem);
    font-family: "Super Mario Maker 2", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

    opacity: 0;
    translate: 0 100%;
    text-align: center;

    .CourseClear.is-curtains-finished & {
      animation: bounce 2000ms ease-in-out forwards;
    }
  }

  .CourseClear__children {
    opacity: 0;
    translate: 100% 0;
    transition: all 300ms 1800ms ease-out;

    .CourseClear.is-curtains-finished & {
      opacity: 1;
      translate: 0 0;
    }
  }

  .CourseClear__bar {
    position: fixed;
    top: 0;
    background-color: var(--cc-bg-color);
    height: 100dvh;
  }

  .CourseClear__curtain {
    position: fixed;
    background-color: var(--cc-bg-color);
    height: 50vh;
    inset-inline: 0;
    scale: 1 0;

    transition: scale 300ms ease;

    &.CourseClear__curtain--top {
      top: 0;
      transform-origin: top;
    }

    &.CourseClear__curtain--bottom {
      bottom: 0;
      transform-origin: bottom;
    }

    &.is-shrink {
      scale: 1 1;
    }
  }
`;function q(t,e){return Object.assign(e,{cancel:t})}const oe=[{scale:"1 1"},{scale:"1 0.65"},{scale:"1 0.37"},{scale:"1 0.45"},{scale:"1 0.53"},{scale:"1 0.57"},{scale:"1 0.54"},{scale:"1 0.5"},{scale:"1 0.47"},{scale:"1 0.50"}];function O(t){let e=!1;return(...n)=>{e||(e=!0,t(...n))}}class M extends HTMLElement{constructor(){super(),this._greetingEl=null,this._childrenEl=null,this._rootEl=null,this.attachShadow({mode:"open"})}connectedCallback(){this._render(),this.open&&this._closeOrRunAnimations()}disconnectedCallback(){this._cancelActive()}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open")}get greeting(){return this.getAttribute("greeting")||"Course Clear!"}set greeting(e){this.setAttribute("greeting",e)}get closeOnEscape(){return this.hasAttribute("close-on-esc")}set closeOnEscape(e){e?this.setAttribute("close-on-esc",""):this.removeAttribute("close-on-esc")}static get observedAttributes(){return["open"]}attributeChangedCallback(e){if(this._rootEl)switch(e){case"open":this._closeOrRunAnimations();return}}_getBarCount(){return window.innerWidth>768?22:11}_animateWave(){this._rootEl.classList.remove("is-wave-finished");const e=[],n=this._getBarCount();for(let r=0;r<n;r++){const a=document.createElement("div");a.className="CourseClear__bar",a.style.insetInlineStart=`calc(100% / ${n}  * ${r})`,a.style.width=`calc(100% / ${n} + 1px)`,this._rootEl.appendChild(a),e.push(a)}const i=[];let o;const s=O(r=>{var a;clearInterval(o),i.forEach(c=>c.finish()),e.forEach(c=>{var u;return(u=c.parentNode)==null?void 0:u.removeChild(c)}),r&&((a=this._rootEl)==null||a.classList.add("is-wave-finished"))});return q(s,new Promise(r=>{let a=0;o=setInterval(()=>{const c=e[a++];if(!c){clearInterval(o);return}const u=c.animate(oe,{easing:"ease-out",duration:1e3,fill:"forwards"});i.push(u),a>=n&&u.finished.finally(()=>{s(!0),r()})},30)}))}_animateCurtains(){this._rootEl.classList.remove("is-wave-finished","is-curtains-finished");const e=document.createElement("div");e.className="CourseClear__curtain CourseClear__curtain--top";const n=document.createElement("div");n.className="CourseClear__curtain CourseClear__curtain--bottom",this._rootEl.appendChild(e),this._rootEl.appendChild(n);let i=requestAnimationFrame(()=>{i=requestAnimationFrame(()=>{e.classList.add("is-shrink"),n.classList.add("is-shrink")})});const o=O(()=>{[e,n].forEach(s=>{var r;return(r=s.parentNode)==null?void 0:r.removeChild(s)}),cancelAnimationFrame(i)});return q(o,new Promise(s=>{n.addEventListener("transitionend",()=>{o(),this._rootEl.classList.add("is-curtains-finished"),s()})}))}_closeOrRunAnimations(){if(!this._rootEl)return;if(this.open){this._rootEl.style.display="",this._rootEl.showModal(),this._animateAll();return}const e=()=>{this._rootEl.style.display="none",this._rootEl.classList.remove("is-curtains-finished","is-wave-finished"),this._rootEl.close()};this._active?(this._cancelActive(),e()):(this._rootEl.classList.remove("is-curtains-finished"),this._rootEl.animate([{opacity:1},{opacity:0}],{duration:200}).finished.then(e))}async _animateAll(){this._cancelActive(),this._rootEl.style.display="",this._greetingEl.textContent=this.greeting,this._greetingEl.style.display="",this._rootEl.classList.remove("is-curtains-finished","is-wave-finished"),this._active=this._animateCurtains(),await this._active,this._active=this._animateWave(),await this._active,this._active=void 0}_cancelActive(){this._active&&this._active.cancel(),this._active=void 0}_render(){this.shadowRoot.innerHTML=P`<style>
        ${ne}
      </style>
      <dialog class="CourseClear" id="_rootEl" style="display: none">
        <div class="CourseClear__content">
          <div class="CourseClear__greeting" id="_greetingEl"></div>
          <div class="CourseClear__children" id="_childrenEl">
            <slot />
          </div>
        </div>
      </dialog>`,this.shadowRoot.querySelectorAll("[id]").forEach(e=>{this[e.id]=e}),this._childrenEl.addEventListener("transitionend",()=>{this._greetingEl.style.display="none"}),this._rootEl.addEventListener("cancel",e=>{e.preventDefault(),this.closeOnEscape&&(this.open=!1)})}}customElements.define("course-clear",M);function $(t){return document.getElementById(t)}let d;function se(){if(d)return d;d=new M,d.closeOnEscape=!0;const t=document.getElementById("cc-details-template").content.cloneNode(!0);return t.querySelector("#cc-close-button").addEventListener("click",()=>{d.open=!1}),t.querySelector("#cc-replay-button").addEventListener("click",()=>{d.open=!1,setTimeout(()=>d.open=!0,300)}),d.appendChild(t),document.body.appendChild(d),d}function ie(t){const e=se();e.greeting=t;const n=document.querySelector(".color-radio > input:checked"),i=n.value;e.style.setProperty("--cc-custom-bg-color",`var(${i})`);const o=n.dataset.color;o?e.style.setProperty("--cc-custom-color",o):e.style.removeProperty("--cc-custom-color"),e.open=!0}function re(){const t=$("cc-form"),e=$("cc-greeting"),i=new URLSearchParams(location.search.slice(1)).get("hi");i&&(e.value=i),t.addEventListener("submit",o=>{o.preventDefault();const s=e.value;ie(s)})}re();
