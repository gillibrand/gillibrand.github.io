(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();let p;function M(){if(p!==void 0)return p;const t=document.createElement("div");return Object.assign(t.style,{position:"absolute",inset:"-200px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t),p}let A=!1;function N(){A||(document.documentElement.style.setProperty("--scrollbar-width",`${M()}px`),A=!0)}function T(){N(),document.documentElement.classList.add("modal-open")}function D(){document.documentElement.classList.remove("modal-open")}const R=window.matchMedia("(prefers-reduced-motion: reduce)");function h(){return R.matches}const W=document.querySelectorAll("button:has(> .photo)");W.forEach(t=>{const e=t.querySelector("img");t.addEventListener("click",()=>{H(e)})});function z(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}async function F(t){const e=t.closest("figure"),n=e==null?void 0:e.querySelector("figcaption"),s=`
    <dialog class="lightbox">
      <img class="lightbox__photo photo" src="${t.currentSrc}"
      height="${t.getAttribute("height")}"
      width="${t.getAttribute("width")}"
      alt="${t.alt}">
      <p class="lightbox__text opacity-0">${(n==null?void 0:n.textContent)||""}</p>
    </dialog>`,i=z(s),o=i.querySelector(".lightbox__photo");return new Promise(r=>{o.addEventListener("load",()=>{r(i)}),o.addEventListener("error",a=>{throw new Error("img not loaded. Skipping "+t.currentSrc)})})}async function H(t){T();const e=await F(t),n=e.querySelector(".lightbox__photo"),s=e.querySelector(".lightbox__text");e.addEventListener("click",l=>{l.target.nodeName!=="P"&&(l.preventDefault(),f())}),X(e,f),e.addEventListener("cancel",l=>{l.preventDefault(),f()}),e.addEventListener("keydown",l=>{l.key===" "&&(l.preventDefault(),f())}),document.body.appendChild(e),e.showModal(),setTimeout(()=>e.classList.add("is-open"));const i=t.parentNode;i.style.visibility="hidden";const o=t.getBoundingClientRect(),r=n.getBoundingClientRect(),a=o.height/r.height,c=o.width/r.width,u=o.y-r.y,b=o.x-r.x,m={easing:"ease",duration:400},S=`translateY(${u}px) translateX(${b}px) scale(${c}, ${a})`,k="translate(0, 0) scale(1) ";let g;h()||(g=n.animate({transform:[S,k]},m)),s.classList.remove("opacity-0");async function f(){var l;g==null||g.cancel(),s.classList.add("opacity-0"),n.style.borderWidth=`${10/a}px`,e.classList.remove("is-open"),h()||await n.animate({transform:[k,S]},m).finished,i.style.visibility="",e.close(),(l=e.parentElement)==null||l.removeChild(e),D()}}function X(t,e){let s=0,i=0;t.addEventListener("touchstart",o=>{s=o.touches[0].clientY,i=s}),t.addEventListener("touchmove",o=>{i=o.touches[0].clientY}),t.addEventListener("touchend",o=>{const r=i-s;Math.abs(r)>50&&(o.preventDefault(),e()),s=0,i=0})}const Y="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m3%2014v-12l11%206z'%20fill='%23fff'/%3e%3c/svg%3e",j="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%23fff'%3e%3cpath%20d='m3%202h3v12h-3z'/%3e%3cpath%20d='m9%202h3v12h-3z'/%3e%3c/g%3e%3c/svg%3e",G="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%23fff'%3e%3cpath%20d='m7%2013v-10l-5%205z'/%3e%3cpath%20d='m14%2013v-10l-5%205z'/%3e%3c/g%3e%3c/svg%3e",U=document.querySelectorAll(".vidplayer");function _(t){const e=document.createElement("img");return e.src=t,e}function E(t,e,n){t.innerHTML="",t.textContent=e,t.appendChild(n)}U.forEach(t=>{const e=t.querySelector(".vidplayer__video"),n=t.querySelector(".vidplayer__button"),s=t.querySelector(".vidplayer__overlay");function i(){s&&(s.style.display="none"),E(n,"Pause ",_(j))}function o(){E(n,"Play ",_(Y))}function r(){E(n,"Replay ",_(G))}function a(){e.paused?e.play():e.pause()}n.addEventListener("click",a),e.addEventListener("click",c=>{c.preventDefault(),a()}),e.addEventListener("play",i),e.addEventListener("pause",o),e.addEventListener("ended",r),o()});const C=document.getElementById("hamburger"),B=document.getElementById("sidebar"),L=document.getElementById("navunderlay");function x(){return document.body.classList.contains("nav-open")}function V(){x()?y():K()}const v={easing:"ease",duration:200};function K(){x()||(document.body.classList.add("nav-open"),C.setAttribute("aria-expanded",String(!0)),!h()&&(B.animate({transform:["translateX(-100%)","translateX(0)"]},v),L.animate({opacity:["0","1"]},v)))}async function y(){if(x()){if(!h()){const t=B.animate({transform:["translateX(0)","translateX(-100%)"]},v);L.animate({opacity:["1","0"]},v),await t.finished}document.body.classList.remove("nav-open"),C.setAttribute("aria-expanded",String(!1))}}C.addEventListener("click",V);document.body.addEventListener("keydown",t=>{t.key==="Escape"&&y()});L.addEventListener("click",y);const w=document.getElementById("navmenu");function I(t){if(t){if(t.nodeName!=="A"){const e=t.parentElement,n=e==null?void 0:e.id;t=document.querySelector(`[data-to="${n}"]`)}w.querySelectorAll(".is-selected").forEach(e=>e.classList.remove("is-selected")),t.classList.add("is-selected"),"scrollIntoViewIfNeeded"in t&&t.scrollIntoViewIfNeeded()}}function J(){const t=[];document.querySelectorAll("main section[id]").forEach(e=>{const n=e.id,s=e.querySelector("h1,h2,h3,h4");if(!s)return;const i=s.dataset.alt||s.textContent,o=["navmenu__entry"];(s.nodeName==="H2"||s.nodeName==="H1")&&o.push("navmenu__entry--group"),t.push(`<li><a class="${o.join(" ")}" data-to="${n}" href="#${n}">
        <span>${i}</span>
        </a></li>`)}),w.innerHTML=t.join(""),w.addEventListener("click",e=>{const n=e.target;if(n.nodeName!=="A")return;e.preventDefault();const s=n.dataset.to==="me"?"center":"start",i=document.getElementById(n.dataset.to);i==null||i.scrollIntoView({behavior:h()?"auto":"smooth",block:s}),y()})}function Q(){function t(o,r){o.forEach(a=>{if(a.isIntersecting){const b=a.target.parentElement.id,m=document.querySelector(`[data-to="${b}"]`);I(m)}})}const e=new IntersectionObserver(t,{root:null,rootMargin:"0px 0px -80% 0px",threshold:0}),s=Array.from(document.querySelectorAll("section[id]")).map(o=>o.querySelector("h1,h2,h3")),i=document.documentElement.scrollTop;for(const o of s.reverse())if(o.offsetTop<i){I(o);break}s.forEach(o=>{e.observe(o)})}J();Q();function Z(t){const e=t.dataset.compare;if(!e)return;const n=document.getElementById(e);if(!n)return;function s(){n.classList.toggle("compare--checked",t.checked)}s(),t.addEventListener("click",s);function i(){t.checked=!t.checked,s()}n.addEventListener("click",i)}document.querySelectorAll(".toggle__checkbox").forEach(Z);function ee(){const t=document.querySelector("footer");if(!t){console.warn("Footer element not found.");return}new IntersectionObserver(n=>{const s=n[0];t.classList.toggle("is-end",s.isIntersecting)},{threshold:.99}).observe(t)}ee();function P(t,...e){return t.reduce((n,s,i)=>n+s+(e[i]??""),"")}const te=P`
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
      background-color: rgb(0 0 0 / 0.75);
      backdrop-filter: blur(10px);
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
`,ne=new Event("closed",{bubbles:!0,composed:!0}),ie=new CustomEvent("opened",{bubbles:!0,composed:!0});function O(t,e){return Object.assign(e,{cancel:t})}const oe=[{scale:"1 1"},{scale:"1 0.65"},{scale:"1 0.37"},{scale:"1 0.45"},{scale:"1 0.53"},{scale:"1 0.57"},{scale:"1 0.54"},{scale:"1 0.5"},{scale:"1 0.47"},{scale:"1 0.50"}];function q(t){let e=!1;return(...n)=>{e||(e=!0,t(...n))}}class se extends HTMLElement{constructor(){super(),this._greetingEl=null,this._childrenEl=null,this._dialogEl=null,this.attachShadow({mode:"open"})}connectedCallback(){this._render(),this.open&&this._closeOrRunAnimations()}disconnectedCallback(){this._cancelActive()}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open")}get greeting(){var e;return((e=this.getAttribute("greeting"))==null?void 0:e.trim())||"Course Clear!"}set greeting(e){this.setAttribute("greeting",e)}get closeOnEscape(){return this.hasAttribute("close-on-esc")}set closeOnEscape(e){e?this.setAttribute("close-on-esc",""):this.removeAttribute("close-on-esc")}get closeOnOutside(){return this.hasAttribute("close-on-outside")}set closeOnOutside(e){e?this.setAttribute("close-on-outside",""):this.removeAttribute("close-on-outside")}static get observedAttributes(){return["open"]}attributeChangedCallback(e){if(this._dialogEl)switch(e){case"open":this._closeOrRunAnimations();return}}_getBarCount(){return window.innerWidth>768?22:11}_animateWave(){this._dialogEl.classList.remove("is-wave-finished");const e=[],n=this._getBarCount();for(let r=0;r<n;r++){const a=document.createElement("div");a.className="CourseClear__bar",a.style.insetInlineStart=`calc(100% / ${n}  * ${r})`,a.style.width=`calc(100% / ${n} + 1px)`,this._dialogEl.appendChild(a),e.push(a)}const s=[];let i;const o=q(r=>{var a;clearInterval(i),s.forEach(c=>c.finish()),e.forEach(c=>{var u;return(u=c.parentNode)==null?void 0:u.removeChild(c)}),r&&((a=this._dialogEl)==null||a.classList.add("is-wave-finished"))});return O(o,new Promise(r=>{let a=0;i=setInterval(()=>{const c=e[a++];if(!c){clearInterval(i);return}const u=c.animate(oe,{easing:"ease-out",duration:1e3,fill:"forwards"});s.push(u),a>=n&&u.finished.finally(()=>{o(!0),r()})},30)}))}_animateCurtains(){this._dialogEl.classList.remove("is-wave-finished","is-curtains-finished");const e=document.createElement("div");e.className="CourseClear__curtain CourseClear__curtain--top";const n=document.createElement("div");n.className="CourseClear__curtain CourseClear__curtain--bottom",this._dialogEl.appendChild(e),this._dialogEl.appendChild(n);let s=requestAnimationFrame(()=>{s=requestAnimationFrame(()=>{e.classList.add("is-shrink"),n.classList.add("is-shrink")})});const i=q(()=>{[e,n].forEach(o=>{var r;return(r=o.parentNode)==null?void 0:r.removeChild(o)}),cancelAnimationFrame(s)});return O(i,new Promise(o=>{n.addEventListener("transitionend",()=>{i(),this._dialogEl.classList.add("is-curtains-finished"),o()})}))}async _closeOrRunAnimations(){if(!this._dialogEl)return;if(this.open){this._dialogEl.style.display="",this._dialogEl.showModal(),await this._animateAll(),this._dialogEl.dispatchEvent(ie);return}const e=()=>{this._dialogEl.style.display="none",this._dialogEl.classList.remove("is-curtains-finished","is-wave-finished"),this._dialogEl.close()};this._active?(this._cancelActive(),e()):(this._dialogEl.classList.remove("is-curtains-finished"),this._dialogEl.animate([{opacity:1},{opacity:0}],{duration:200}).finished.then(e))}async _animateAll(){this._cancelActive(),this._dialogEl.style.display="",this._greetingEl.textContent=this.greeting,this._greetingEl.style.display="",this._dialogEl.classList.remove("is-curtains-finished","is-wave-finished"),this._active=this._animateCurtains(),await this._active,this._active=this._animateWave(),await this._active,this._active=void 0}_cancelActive(){this._active&&this._active.cancel(),this._active=void 0}_render(){this.shadowRoot.innerHTML=P`<dialog class="CourseClear" id="_dialogEl" style="display: none">
      <style>
        ${te}
      </style>
      <div class="CourseClear__content">
        <div class="CourseClear__greeting" id="_greetingEl"></div>
        <div class="CourseClear__children" id="_childrenEl">
          <slot />
        </div>
      </div>
    </dialog>`,this.shadowRoot.querySelectorAll("[id]").forEach(e=>{this[e.id]=e}),this._childrenEl.addEventListener("transitionend",()=>{this._greetingEl.style.display="none"}),this._dialogEl.addEventListener("cancel",e=>{e.preventDefault(),this.closeOnEscape&&(this.open=!1)}),this._dialogEl.addEventListener("close",()=>{this._dialogEl.dispatchEvent(ne)}),this._dialogEl.addEventListener("click",e=>{!this._active&&this.closeOnOutside&&e.target.nodeName==="DIALOG"&&(this.open=!1)})}}customElements.define("course-clear",se);function $(t){return document.getElementById(t)}let d;function re(){return d||(d=document.getElementById("cc-dialog"),d.style.display="",d.querySelector("#cc-close-button").addEventListener("click",()=>{d.open=!1}),d.querySelector("#cc-replay-button").addEventListener("click",()=>{d.open=!1,setTimeout(()=>d.open=!0,300)}),d)}function ae(t){const e=re();e.greeting=t;const n=document.querySelector(".color-radio > input:checked"),s=n.value;e.style.setProperty("--cc-custom-bg-color",`var(${s})`);const i=n.dataset.color;i?e.style.setProperty("--cc-custom-color",i):e.style.removeProperty("--cc-custom-color"),e.open=!0}function ce(){const t=$("cc-form"),e=$("cc-greeting"),s=new URLSearchParams(location.search.slice(1)).get("hi");s&&(e.value=s),t.addEventListener("submit",i=>{i.preventDefault();const o=e.value;ae(o)})}ce();
