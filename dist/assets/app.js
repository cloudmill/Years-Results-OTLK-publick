(()=>{var e,t={222:(e,t,r)=>{"use strict";var n=r(592),a=r(638);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}a(window).on("load",(function(){var e;(e=a("[data-slider-id]")).length&&e.each((function(){var e,t,r=a(this),o=r.data("slider-id"),c=r.data("slider-prev"),l=r.data("slider-next"),d=a('[data-slider-button="'.concat(c,'"]')),u=a('[data-slider-button="'.concat(l,'"]')),f=a("[data-slider-buttons]");if(f.length&&r.find(".swiper-slide").length<+f.data("slider-buttons")&&f.addClass("hidden"),r[0].hasAttribute("data-thumbs-slider")){var v=a('[data-thumbs-id="'.concat(o,'"]'));e=new n.Z(v[0],{direction:"vertical",slidesPerView:"auto",on:{init:function(e){e.el.querySelectorAll("[data-thumb]").forEach((function(e,r){e.onclick=function(){t.slideTo(r)}}))}}})}var m={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:s({},1280,{spaceBetween:40})};switch(o){case 2:m=i(i({},m),{},{loop:!0});break;case 11:case"m11":m={pagination:{el:'[data-swiper-pagination="'.concat(o,'"]'),type:"bullets"},on:{slideChange:function(t){var r=t.realIndex,n=e.el.querySelectorAll("[data-thumb]");e.el.querySelector("[data-thumb].active").classList.remove("active"),n[r].classList.add("active"),e.slideTo(r)}}}}t=new n.Z(r[0],m),d.on("click",(function(){t.slidePrev()})),u.on("click",(function(){t.slideNext()}))}))}));r(490);var c=r(638);c((function(){c(".select__select").each((function(){var e=c(this),t=e.closest(".select-wrapper"),r=getComputedStyle(t[0]),n=c(this).data("select-placeholder");"static"===r.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var r="scroll.select2";c(e.target).parents().off(r),c(window).off(r);var n=t.find(".select2-dropdown");n.hide();var a=setTimeout((function(){n.slideDown({duration:500}),clearTimeout(a)}),0)})),e.on("select2:closing",(function(r){r.preventDefault();var a=t.find(".select2-dropdown"),o=setTimeout((function(){t.css("z-index","");var r=t.find(".select2");r.addClass("closing"),r.removeClass("select2-container--open"),a.slideUp(500,(function(){var r=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(r)}),300)})),clearTimeout(o)}),0)}))}))}));var l=r(412),d=r(371),u=r(369),f=r(383),v=r(638);(0,f.ScrollMagicPluginGsap)(l,d.Q3,u.b_),d.Q3.defaultOverwrite=!1,v((function(){var e=new l.Controller({refreshInterval:1}),t=new u.b_,r=document.querySelector(".main-scenes__numbers-box");t.add(d.Q3.to(r,{width:"39%",ease:"linear",immediateRender:!1}));var n=document.querySelectorAll(".scene-card");n.forEach((function(e,r){t.add(d.Q3.fromTo(e,{ease:"linear",scaleX:"0.75",immediateRender:!1},{y:"0%",ease:"linear",scaleX:"1",immediateRender:!1}));var a=document.querySelectorAll(".scene-card__inner ");if(r){for(var o=[],i=[],s=[],c=0;c<r;c++){o.push(n[c]);var l=String(Number(.91+2*c/100));i.push(l),s.push(a[c])}t.add(d.Q3.to(o[r-1],{scaleX:i[r-1],ease:"linear",immediateRender:!1,duration:.4}),"<0.12");var u=Number(.18-.04*r),f="linear-gradient(0deg, rgba(0, 0, 0, ".concat(u,") 0%, rgba(0, 0, 0, ").concat(u,") 100%), linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.60) 100%)");t.add(d.Q3.to(s[r-1],{background:f,ease:"linear",immediateRender:!1,duration:.01}),">")}}));window.innerHeight;var a=document.querySelectorAll(".main-scenes");new l.Scene({triggerElement:a,triggerHook:0,duration:5*window.innerHeight}).setPin(a,{pushFollowers:!0}).setTween(t).addTo(e)}));r(645),r(746),r(563);var m=r(638);document.addEventListener("DOMContentLoaded",(function(){m("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Только кириллица",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru")}));var p,h;r(818);p=document.querySelectorAll("[data-quiz-btn]"),h=1,p.forEach((function(e){e.addEventListener("click",(function(){if(e.classList.add("active"),h<3){var t=document.querySelector('[data-question="'.concat(h,'"]')),r=document.querySelector('[data-question="'.concat(h+1,'"]'));t.classList.add("filled"),r.classList.remove("hidden"),h++,console.log(h)}else 3===h&&p.forEach((function(e){e.classList.add("disabled")}))}))}))},746:(e,t,r)=>{var n=r(638);document.querySelector("[data-footer-up]").addEventListener("click",(function(){return n("html, body").animate({scrollTop:0},"slow"),!1}))},818:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-burgeer-btn]");e.addEventListener("click",(function(){e.classList.toggle("active")}))}))},645:(e,t,r)=>{var n=r(638),a=document.querySelectorAll("[data-star]");a.forEach((function(e){e.addEventListener("mouseenter",(function(){e.classList.add("hovered");for(var t=e.dataset.star,r=1;r<=t;r++)a[r-1].classList.add("hovered")})),e.addEventListener("mouseleave",(function(){n("[data-star]").removeClass("hovered")})),e.addEventListener("click",(function(){var t=e.dataset.star;n("[data-star]").removeClass("active");for(var r=1;r<=t;r++)a[r-1].classList.add("active")}))}))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,s,c]=r,l=0;if(i.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var d=c(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[183,532],(()=>n(222)));a=n.O(a)})();