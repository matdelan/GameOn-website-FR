(()=>{var e={189:e=>{e.exports=function(e){console.log(e)}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}(()=>{"use strict";const e=document.querySelector(".bground");function t(){e.style.display="block"}function a(){e.style.display="none"}function r(e){return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e)}function o(e){return e.length>1}function i(e){return""!==e&&(!isNaN(e)||"0"===e)}function l(e){let t=!1;for(let n=0;n<e.childElementCount;n++)if("INPUT"==e.children[n].tagName&&e.children[n].checked){t=!0;break}return console.log("radio : "+t),t}function u(e){if(null!==e){let t=new Date(e),n=new Date,a=new Date;if(n.setFullYear(n.getFullYear()-18),a.setFullYear(n.getFullYear()-80),t<n&&t>a)return!0}return!1}function c(e,t){let n,a;switch(e.id){case"last":case"first":n="Veuillez entrer 2 caractères ou plus.";break;case"email":n="Veuillez entrer un mail valide.";break;case"birthdate":n="Vous devez avoir entre 18 et 80 ans pour vous inscrire.";break;case"quantity":n="Veuillez entrer une quantité.";break;case"checkbox1":n="Vous devez acceptez les conditions d'utilisation.";break;case"formRadio":n="Vous devez choisir une option."}a="formRadio"==e.id?e:e.parentElement,t?""!==a.attributes[1].value&&(a.setAttribute("data-error",""),a.setAttribute("data-error-visible","false")):""==a.attributes[1].value&&(a.setAttribute("data-error",n),a.setAttribute("data-error-visible","true"))}n(189);const s=document.querySelectorAll(".modal-btn"),d=(document.querySelector(".modal-body"),document.querySelector(".close")),m=document.querySelector(".validationForm"),v=(document.querySelectorAll(".formData"),document.querySelector("form")),f=document.getElementById("first"),b=document.getElementById("last"),y=document.getElementById("email"),E=document.getElementById("birthdate"),g=document.getElementById("quantity"),h=document.getElementById("checkbox1"),k=(document.getElementById("checkbox2"),document.getElementById("formRadio")),p=(document.getElementById("fermer"),document.getElementById("menu"));s.forEach((e=>e.addEventListener("click",t))),d.addEventListener("click",a),m.addEventListener("click",a),f.addEventListener("focusout",(function(){c(f,o(f.value))})),b.addEventListener("focusout",(function(){c(b,o(b.value))})),y.addEventListener("focusout",(function(){c(y,r(y.value))})),E.addEventListener("focusout",(function(){c(E,u(E.value))})),g.addEventListener("focusout",(function(){c(g,i(g.value))})),h.addEventListener("change",(function(){c(h,h.checked)})),k.addEventListener("change",(function(){c(k,l(k))})),p.addEventListener("click",(function(){var e;"topnav"===(e=document.getElementById("myTopnav")).className?e.className+=" responsive":e.className="topnav"})),v.addEventListener("submit",(e=>{var t;e.preventDefault(),t=v,o(first.value)&&o(last.value)&&i(quantity.value)&&r(email.value)&&checkbox1.checked&&u(birthdate.value)&&l(formRadio)?(console.log("Check Ok"),t.classList.toggle("invisible"),t.nextElementSibling.classList.toggle("invisible")):(console.log("Erreur de validation : firt /"+o(first.value)+"/ last /"+o(last.value)+"/ Quantity /"+i(quantity.value)+"/ email /"+r(email.value)+"/ birthdate /"+u(birthdate.value)+"/ Radio /"+l(formRadio)),c(first,o(first.value)),c(last,o(last.value)),c(formRadio,l(formRadio)),c(email,r(email.value)),c(quantity,i(quantity.value)),c(checkbox1,checkbox1.checked),c(birthdate,u(birthdate.value)))}))})()})();