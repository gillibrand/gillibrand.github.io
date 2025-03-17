(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();let p;function T(){if(p!==void 0)return p;const t=document.createElement("div");return Object.assign(t.style,{position:"absolute",inset:"-200px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t),p}let O=!1;function D(){O||(document.documentElement.style.setProperty("--scrollbar-width",`${T()}px`),O=!0)}function R(){D(),document.documentElement.classList.add("modal-open")}function W(){document.documentElement.classList.remove("modal-open")}const H=window.matchMedia("(prefers-reduced-motion: reduce)");function h(){return H.matches}const z=document.querySelectorAll("button:has(> .photo)");z.forEach(t=>{const e=t.querySelector("img");t.addEventListener("click",()=>{X(e)})});function F(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}async function G(t){const e=t.closest("figure"),i=e==null?void 0:e.querySelector("figcaption"),n=`
    <dialog class="lightbox">
      <img class="lightbox__photo photo" src="${t.currentSrc}"
      height="${t.getAttribute("height")}"
      width="${t.getAttribute("width")}"
      alt="${t.alt}">
      <p class="lightbox__text opacity-0">${(i==null?void 0:i.textContent)||""}</p>
    </dialog>`,o=F(n),s=o.querySelector(".lightbox__photo");return new Promise(r=>{s.addEventListener("load",()=>{r(o)}),s.addEventListener("error",a=>{throw new Error("img not loaded. Skipping "+t.currentSrc)})})}async function X(t){R();const e=await G(t),i=e.querySelector(".lightbox__photo"),n=e.querySelector(".lightbox__text");e.addEventListener("click",d=>{d.target.nodeName!=="P"&&(d.preventDefault(),f())}),Y(e,f),e.addEventListener("cancel",d=>{d.preventDefault(),f()}),e.addEventListener("keydown",d=>{d.key===" "&&(d.preventDefault(),f())}),document.body.appendChild(e),e.showModal(),setTimeout(()=>e.classList.add("is-open"));const o=t.parentNode;o.style.visibility="hidden";const s=t.getBoundingClientRect(),r=i.getBoundingClientRect(),a=s.height/r.height,c=s.width/r.width,u=s.y-r.y,_=s.x-r.x,m={easing:"ease",duration:400},A=`translateY(${u}px) translateX(${_}px) scale(${c}, ${a})`,I="translate(0, 0) scale(1) ";let g;h()||(g=i.animate({transform:[A,I]},m)),n.classList.remove("opacity-0");async function f(){var d;g==null||g.cancel(),n.classList.add("opacity-0"),i.style.borderWidth=`${10/a}px`,e.classList.remove("is-open"),h()||await i.animate({transform:[I,A]},m).finished,o.style.visibility="",e.close(),(d=e.parentElement)==null||d.removeChild(e),W()}}function Y(t,e){let n=0,o=0;t.addEventListener("touchstart",s=>{n=s.touches[0].clientY,o=n}),t.addEventListener("touchmove",s=>{o=s.touches[0].clientY}),t.addEventListener("touchend",s=>{const r=o-n;Math.abs(r)>50&&(s.preventDefault(),e()),n=0,o=0})}const j="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m3%2014v-12l11%206z'%20fill='%23fff'/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%23fff'%3e%3cpath%20d='m3%202h3v12h-3z'/%3e%3cpath%20d='m9%202h3v12h-3z'/%3e%3c/g%3e%3c/svg%3e",V="data:image/svg+xml,%3csvg%20fill='none'%20height='16'%20viewBox='0%200%2016%2016'%20width='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%23fff'%3e%3cpath%20d='m7%2013v-10l-5%205z'/%3e%3cpath%20d='m14%2013v-10l-5%205z'/%3e%3c/g%3e%3c/svg%3e",K=document.querySelectorAll(".vidplayer");function E(t){const e=document.createElement("img");return e.src=t,e}function w(t,e,i){t.innerHTML="",t.textContent=e,t.appendChild(i)}K.forEach(t=>{const e=t.querySelector(".vidplayer__video"),i=t.querySelector(".vidplayer__button"),n=t.querySelector(".vidplayer__overlay");function o(){n&&(n.style.display="none"),w(i,"Pause ",E(U))}function s(){w(i,"Play ",E(j))}function r(){w(i,"Replay ",E(V))}function a(){e.paused?e.play():e.pause()}i.addEventListener("click",a),e.addEventListener("click",c=>{c.preventDefault(),a()}),e.addEventListener("play",o),e.addEventListener("pause",s),e.addEventListener("ended",r),s()});const x=document.getElementById("hamburger"),M=document.getElementById("sidebar"),S=document.getElementById("navunderlay");function k(){return document.body.classList.contains("nav-open")}function J(){k()?b():Q()}const v={easing:"ease",duration:200};function Q(){k()||(document.body.classList.add("nav-open"),x.setAttribute("aria-expanded",String(!0)),!h()&&(M.animate({transform:["translateX(-100%)","translateX(0)"]},v),S.animate({opacity:["0","1"]},v)))}async function b(){if(k()){if(!h()){const t=M.animate({transform:["translateX(0)","translateX(-100%)"]},v);S.animate({opacity:["1","0"]},v),await t.finished}document.body.classList.remove("nav-open"),x.setAttribute("aria-expanded",String(!1))}}x.addEventListener("click",J);document.body.addEventListener("keydown",t=>{t.key==="Escape"&&b()});S.addEventListener("click",b);const L=document.getElementById("navmenu");function q(t){if(t){if(t.nodeName!=="A"){const e=t.parentElement,i=e==null?void 0:e.id;t=document.querySelector(`[data-to="${i}"]`)}L.querySelectorAll(".is-selected").forEach(e=>e.classList.remove("is-selected")),t.classList.add("is-selected"),"scrollIntoViewIfNeeded"in t&&t.scrollIntoViewIfNeeded()}}function Z(){const t=[];document.querySelectorAll("main section[id]").forEach(e=>{const i=e.id,n=e.querySelector("h1,h2,h3,h4");if(!n)return;const o=n.dataset.alt||n.textContent,s=["navmenu__entry"];(n.nodeName==="H2"||n.nodeName==="H1")&&s.push("navmenu__entry--group"),t.push(`<li><a class="${s.join(" ")}" data-to="${i}" href="#${i}">
        <span>${o}</span>
        </a></li>`)}),L.innerHTML=t.join(""),L.addEventListener("click",e=>{const i=e.target;if(i.nodeName!=="A")return;e.preventDefault();const n=i.dataset.to==="me"?"center":"start",o=document.getElementById(i.dataset.to);o==null||o.scrollIntoView({behavior:h()?"auto":"smooth",block:n}),b()})}function ee(){function t(s,r){s.forEach(a=>{if(a.isIntersecting){const _=a.target.parentElement.id,m=document.querySelector(`[data-to="${_}"]`);q(m)}})}const e=new IntersectionObserver(t,{root:null,rootMargin:"0px 0px -80% 0px",threshold:0}),n=Array.from(document.querySelectorAll("section[id]")).map(s=>s.querySelector("h1,h2,h3")),o=document.documentElement.scrollTop;for(const s of n.reverse())if(s.offsetTop<o){q(s);break}n.forEach(s=>{e.observe(s)})}Z();ee();function te(t){const e=t.dataset.compare;if(!e)return;const i=document.getElementById(e);if(!i)return;function n(){i.classList.toggle("compare--checked",t.checked)}n(),t.addEventListener("click",n);function o(){t.checked=!t.checked,n()}i.addEventListener("click",o)}document.querySelectorAll(".toggle__checkbox").forEach(te);function ne(){const t=document.querySelector("footer");if(!t){console.warn("Footer element not found.");return}new IntersectionObserver(i=>{const n=i[0];t.classList.toggle("is-end",n.isIntersecting)},{threshold:.99}).observe(t)}ne();function N(t,...e){return t.reduce((i,n,o)=>i+n+(e[o]??""),"")}const ie=N`
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
    min-height: 50%;
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
`,oe=new Event("closed",{bubbles:!0,composed:!0}),se=new CustomEvent("opened",{bubbles:!0,composed:!0});function $(t,e){return Object.assign(e,{cancel:t})}const re=[{scale:"1 1"},{scale:"1 0.65"},{scale:"1 0.37"},{scale:"1 0.45"},{scale:"1 0.53"},{scale:"1 0.57"},{scale:"1 0.54"},{scale:"1 0.5"},{scale:"1 0.47"},{scale:"1 0.50"}];function B(t){let e=!1;return(...i)=>{e||(e=!0,t(...i))}}class ae extends HTMLElement{constructor(){super(),this._greetingEl=null,this._childrenEl=null,this._dialogEl=null,this.attachShadow({mode:"open"})}connectedCallback(){this._render(),this.open&&this._closeOrRunAnimations()}disconnectedCallback(){this._cancelActive()}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open")}get greeting(){var e;return((e=this.getAttribute("greeting"))==null?void 0:e.trim())||"Course Clear!"}set greeting(e){this.setAttribute("greeting",e)}get closeOnEscape(){return this.hasAttribute("close-on-esc")}set closeOnEscape(e){e?this.setAttribute("close-on-esc",""):this.removeAttribute("close-on-esc")}get closeOnOutside(){return this.hasAttribute("close-on-outside")}set closeOnOutside(e){e?this.setAttribute("close-on-outside",""):this.removeAttribute("close-on-outside")}static get observedAttributes(){return["open"]}attributeChangedCallback(e){if(this._dialogEl)switch(e){case"open":this._closeOrRunAnimations();return}}_getBarCount(){return window.innerWidth>768?22:11}_animateWave(){this._dialogEl.classList.remove("is-wave-finished");const e=[],i=this._getBarCount();for(let r=0;r<i;r++){const a=document.createElement("div");a.className="CourseClear__bar",a.style.insetInlineStart=`calc(100% / ${i}  * ${r})`,a.style.width=`calc(100% / ${i} + 1px)`,this._dialogEl.appendChild(a),e.push(a)}const n=[];let o;const s=B(r=>{var a;clearInterval(o),n.forEach(c=>c.finish()),e.forEach(c=>{var u;return(u=c.parentNode)==null?void 0:u.removeChild(c)}),r&&((a=this._dialogEl)==null||a.classList.add("is-wave-finished"))});return $(s,new Promise(r=>{let a=0;o=setInterval(()=>{const c=e[a++];if(!c){clearInterval(o);return}const u=c.animate(re,{easing:"ease-out",duration:1e3,fill:"forwards"});n.push(u),a>=i&&u.finished.finally(()=>{s(!0),r()})},30)}))}_animateCurtains(){this._dialogEl.classList.remove("is-wave-finished","is-curtains-finished");const e=document.createElement("div");e.className="CourseClear__curtain CourseClear__curtain--top";const i=document.createElement("div");i.className="CourseClear__curtain CourseClear__curtain--bottom",this._dialogEl.appendChild(e),this._dialogEl.appendChild(i);let n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{e.classList.add("is-shrink"),i.classList.add("is-shrink")})});const o=B(()=>{[e,i].forEach(s=>{var r;return(r=s.parentNode)==null?void 0:r.removeChild(s)}),cancelAnimationFrame(n)});return $(o,new Promise(s=>{i.addEventListener("transitionend",()=>{o(),this._dialogEl.classList.add("is-curtains-finished"),s()})}))}async _closeOrRunAnimations(){if(!this._dialogEl)return;if(this.open){this._dialogEl.style.display="",this._dialogEl.showModal(),await this._animateAll(),this._dialogEl.dispatchEvent(se);return}const e=()=>{this._dialogEl.style.display="none",this._dialogEl.classList.remove("is-curtains-finished","is-wave-finished"),this._dialogEl.close()};this._active?(this._cancelActive(),e()):(this._dialogEl.classList.remove("is-curtains-finished"),this._dialogEl.animate([{opacity:1},{opacity:0}],{duration:200}).finished.then(e))}async _animateAll(){this._cancelActive(),this._dialogEl.style.display="",this._greetingEl.textContent=this.greeting,this._greetingEl.style.display="",this._dialogEl.classList.remove("is-curtains-finished","is-wave-finished"),this._active=this._animateCurtains(),await this._active,this._active=this._animateWave(),await this._active,this._active=void 0}_cancelActive(){this._active&&this._active.cancel(),this._active=void 0}_render(){this.shadowRoot.innerHTML=N`<dialog class="CourseClear" id="_dialogEl" style="display: none">
      <style>
        ${ie}
      </style>
      <div class="CourseClear__content">
        <div class="CourseClear__greeting" id="_greetingEl"></div>
        <div class="CourseClear__children" id="_childrenEl">
          <slot />
        </div>
      </div>
    </dialog>`,this.shadowRoot.querySelectorAll("[id]").forEach(e=>{this[e.id]=e}),this._childrenEl.addEventListener("transitionend",()=>{this._greetingEl.style.display="none"}),this._dialogEl.addEventListener("cancel",e=>{e.preventDefault(),this.closeOnEscape&&(this.open=!1)}),this._dialogEl.addEventListener("close",()=>{this._dialogEl.dispatchEvent(oe)}),this._dialogEl.addEventListener("click",e=>{!this._active&&this.closeOnOutside&&e.target.nodeName==="DIALOG"&&(this.open=!1)})}}customElements.define("course-clear",ae);function y(t){return document.getElementById(t)}let l,C=!1;function ce(){return l||(l=document.getElementById("cc-dialog"),l.style.display="",l.querySelector("#cc-close-button").addEventListener("click",()=>{l.open=!1}),l.querySelector("#cc-replay-button").addEventListener("click",()=>{l.open=!1,setTimeout(()=>l.open=!0,300)}),l.querySelector("a[href='#course-clear']").addEventListener("click",n=>{var o;n.preventDefault(),C=!0,l.open=!1,(o=y("course-clear"))==null||o.scrollIntoView(!0)}),l.addEventListener("closed",()=>{if(C){C=!1;const n=y("cc-greeting");n&&(n.focus(),n.select())}}),l)}function P(t){const e=ce();e.greeting=t;const i=document.querySelector(".color-radio > input:checked"),n=i.value;e.style.setProperty("--cc-custom-bg-color",`var(${n})`);const o=i.dataset.color;o?e.style.setProperty("--cc-custom-color",o):e.style.removeProperty("--cc-custom-color"),e.open=!0}function le(){const t=y("cc-greeting"),e="clearCourse.didGreeting",i=new URLSearchParams(location.search.slice(1));let n=(i.get("t")||i.get("hi")||"").trim();i.has("hi")&&(n=n.replace(/^(hello|hi) /i,""),n="Hello "+n);const o=(localStorage.getItem(e)||"").trim();let s=n||o;t.value=s||"Hello World!",y("cc-form").addEventListener("submit",a=>{a.preventDefault();const c=t.value;P(c)}),n&&n!==localStorage.getItem(e)&&(localStorage.setItem(e,n),P(n))}le();
