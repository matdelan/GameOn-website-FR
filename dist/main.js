(()=>{var e={189:e=>{e.exports=function(e){console.log(e)}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}(()=>{"use strict";function e(e){e.style.display="none"}function t(e){return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e)}function a(e){return e.length>1}function i(e){return""!==e&&(!isNaN(e)||"0"===e)}function r(e){let t=!1;for(let n=0;n<e.childElementCount;n++)if("INPUT"==e.children[n].tagName&&e.children[n].checked){t=!0;break}return t}function o(e){if(null!==e){let t=new Date(e),n=new Date,a=new Date;if(n.setFullYear(n.getFullYear()-18),a.setFullYear(n.getFullYear()-80),t<n&&t>a)return!0}return!1}function u(e,t){let n="";switch(e.id){case"last":case"first":n="Veuillez entrer 2 caractères ou plus.";break;case"email":n="Veuillez entrer un mail valide.";break;case"birthdate":n="Vous devez avoir entre 18 et 80 ans pour vous inscrire.";break;case"quantity":n="Veuillez entrer une quantité.";break;case"checkbox1":n="Vous devez acceptez les conditions d'utilisation.";break;case"formRadio":n="Vous devez choisir une option."}let a=e.parentElement;"formRadio"==e.id&&(a=e),t?a.getAttribute("data-error-visible")&&(a.setAttribute("data-error",""),a.setAttribute("data-error-visible","false")):""==a.attributes[1].value&&(a.setAttribute("data-error",n),a.setAttribute("data-error-visible","true"))}function l(e){this.bool=e}n(189);const c=document.querySelectorAll(".modal-btn"),s=document.querySelector(".close"),d=document.querySelector(".validationForm__btn"),v=document.querySelector("form"),f=document.querySelector(".bground"),m=document.getElementById("first"),b=document.getElementById("last"),h=document.getElementById("email"),y=document.getElementById("birthdate"),E=document.getElementById("quantity"),g=document.getElementById("checkbox1"),k=document.getElementById("formRadio"),p=document.getElementById("nav");c.forEach((e=>e.addEventListener("click",(function(){f.style.display="block"})))),s.addEventListener("click",(function(){e(f)})),d.addEventListener("click",(function(){e(f)})),m.addEventListener("focusout",(function(){u(m,a(m.value))})),b.addEventListener("focusout",(function(){u(b,a(b.value))})),h.addEventListener("focusout",(function(){u(h,t(h.value))})),y.addEventListener("focusout",(function(){u(y,o(y.value))})),E.addEventListener("focusout",(function(){u(E,i(E.value))})),g.addEventListener("change",(function(){u(g,g.checked)})),k.addEventListener("change",(function(){u(k,r(k))})),p.addEventListener("click",(function(){var e;"topnav"===(e=document.getElementById("myTopnav")).className?e.className+=" responsive":e.className="topnav"})),v.addEventListener("submit",(e=>{e.preventDefault(),function(e){if(a(first.value)&&a(last.value)&&i(quantity.value)&&t(email.value)&&checkbox1.checked&&o(birthdate.value)&&r(formRadio))e.classList.toggle("invisible"),e.nextElementSibling.classList.toggle("invisible");else{let e={};e.first=new l(a(first.value)),e.last=new l(a(last.value)),e.quantity=new l(i(quantity.value)),e.email=new l(t(email.value)),e.birthdate=new l(o(birthdate.value)),e.radio=new l(r(formRadio)),e.condition=new l(checkbox1.checked),console.table(e),u(first,a(first.value)),u(last,a(last.value)),u(formRadio,r(formRadio)),u(email,t(email.value)),u(quantity,i(quantity.value)),u(checkbox1,checkbox1.checked),u(birthdate,o(birthdate.value))}}(v)}))})()})();