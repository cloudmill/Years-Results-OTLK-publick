(()=>{var e,t={936:(e,t,a)=>{"use strict";a(711);var n=a(592),r=a(638);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}r(window).on("load",(function(){var e;(e=r("[data-slider-id]")).length&&e.each((function(){var e,t,a=r(this),i=a.data("slider-id"),d=a.data("slider-prev"),s=a.data("slider-next"),l=r('[data-slider-button="'.concat(d,'"]')),u=r('[data-slider-button="'.concat(s,'"]')),m=r("[data-slider-buttons]");if(m.length&&a.find(".swiper-slide").length<+m.data("slider-buttons")&&m.addClass("hidden"),a[0].hasAttribute("data-thumbs-slider")){var f=r('[data-thumbs-id="'.concat(i,'"]'));e=new n.Z(f[0],{direction:"vertical",slidesPerView:"auto",on:{init:function(e){e.el.querySelectorAll("[data-thumb]").forEach((function(e,a){e.onclick=function(){t.slideTo(a)}}))}}})}var v={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:c({},1280,{spaceBetween:40})};switch(i){case 2:v=o(o({},v),{},{loop:!0});break;case 11:case"m11":v={pagination:{el:'[data-swiper-pagination="'.concat(i,'"]'),type:"bullets"},on:{slideChange:function(t){var a=t.realIndex,n=e.el.querySelectorAll("[data-thumb]");e.el.querySelector("[data-thumb].active").classList.remove("active"),n[a].classList.add("active"),e.slideTo(a)}}}}t=new n.Z(a[0],v),l.on("click",(function(){t.slidePrev()})),u.on("click",(function(){t.slideNext()}))}))}));a(490);var d=a(638);d((function(){d(".select__select").each((function(){var e=d(this),t=e.closest(".select-wrapper"),a=getComputedStyle(t[0]),n=d(this).data("select-placeholder");"static"===a.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var a="scroll.select2";d(e.target).parents().off(a),d(window).off(a);var n=t.find(".select2-dropdown");n.hide();var r=setTimeout((function(){n.slideDown({duration:500}),clearTimeout(r)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var r=t.find(".select2-dropdown"),i=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),r.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(i)}),0)}))}))}));var s=a(412),l=a(371),u=a(369),m=a(383),f=a(638);(0,m.ScrollMagicPluginGsap)(s,l.Q3,u.b_),l.Q3.defaultOverwrite=!1,f((function(){var e=new s.Controller({refreshInterval:1});if(window.screen.width>1024){var t=document.querySelector(".main-scenes__numbers-box"),a=new u.b_,n=document.querySelector(".main-wrapper");a.add(l.Q3.fromTo(".main-hero",1,{y:"0",ease:"linear",immediateRender:!1},{y:"-100%",zIndex:1,ease:"linear",immediateRender:!1})),a.add(l.Q3.fromTo(".main-section__bg",1,{opacity:"0",ease:"linear",immediateRender:!1},{opacity:"1",ease:"linear",immediateRender:!1}),"<"),a.add(l.Q3.fromTo(t,1,{width:"130%",top:"120%",ease:"linear",immediateRender:!1},{width:"90%",top:"50%",ease:"linear",immediateRender:!1}),"<"),a.add(l.Q3.fromTo(t,.5,{width:"90%",ease:"linear",immediateRender:!1},{width:"39%",ease:"linear",immediateRender:!1}));var r=document.querySelector(".main-scenes_cards"),i=r.querySelectorAll(".scene-card");i.forEach((function(e,t){a.add(l.Q3.fromTo(e,1,{ease:"linear",scale:"0.75",immediateRender:!1},{y:"0%",ease:"linear",scale:"1",immediateRender:!1}));var n=r.querySelectorAll(".scene-card__inner-black");if(t){for(var o=[],c=[],d=[],s=[],u=0;u<t;u++){o.push(i[u]);var m=(100-5*(t-u))/100,f=Number(.02+.04*(t-u));c.push(m),d.push(n[u]),s.push(f)}s.reverse;for(var v=0;v<c.length;v++){var h=v?"<":"<80%";a.add(l.Q3.to(o[v],{scaleX:c[v],ease:"linear",immediateRender:!1,duration:.2}),h),a.add(l.Q3.to(d[v],{opacity:s[v],ease:"linear",immediateRender:!1,duration:.2}),"<")}}})),new s.Scene({triggerElement:n,triggerHook:0,duration:5*window.innerHeight+window.innerHeight/2}).setPin(n).setTween(a).addTo(e);document.querySelector(".quiz-scene");var o=document.querySelectorAll(".main-rate__question"),c=document.querySelectorAll(".main-rate__question-inner"),d=document.querySelector(".main-rate"),m=new u.b_;o.forEach((function(e,t){if(m.add(l.Q3.fromTo(e,1,{ease:"linear",immediateRender:!1},{y:"0%",ease:"linear",immediateRender:!1})),t){for(var a=[],n=[],r=[],i=0;i<t;i++){a.push(o[i]);var d=(100-5*(t-i))/100;n.push(d),r.push(c[i])}for(var s=0;s<n.length;s++){var u=s?"<":"<80%";m.add(l.Q3.to(a[s],{scaleX:n[s],ease:"linear",immediateRender:!1,duration:.2}),u)}}})),new s.Scene({triggerElement:d,triggerHook:0,duration:3*window.innerHeight}).setPin(d).setTween(m).addTo(e)}else{var f=document.querySelector(".main-scenes__numbers-box"),v=new u.b_,h=document.querySelector(".main-wrapper");v.add(l.Q3.fromTo(".main-hero",.5,{y:"0",ease:"linear",immediateRender:!1},{y:"-100%",zIndex:1,ease:"linear",immediateRender:!1})),v.add(l.Q3.fromTo(".main-section__bg",.5,{opacity:"0",ease:"linear",immediateRender:!1},{opacity:"1",ease:"linear",immediateRender:!1}),"<"),v.add(l.Q3.fromTo(f,.5,{width:"130%",top:"110%",ease:"linear",immediateRender:!1},{width:"90%",top:"50%",ease:"linear",immediateRender:!1}),"<"),v.add(l.Q3.fromTo(f,.5,{width:"90%",ease:"linear",immediateRender:!1},{width:"39%",ease:"linear",immediateRender:!1})),new s.Scene({triggerElement:h,triggerHook:0,duration:window.innerHeight+window.innerHeight/2}).setPin(h).setTween(v).addTo(e);document.querySelector(".main-section")}}));a(645),a(746),a(563);var v=a(638);document.addEventListener("DOMContentLoaded",(function(){v("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Только кириллица",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru")}));a(818),a(209);var h=a(638);document.addEventListener("DOMContentLoaded",(function(){var e,t;e=document.querySelectorAll("[data-quiz-btn]"),document.querySelector(".main-rate__form"),e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.quizBtn;h('[data-quiz-btn="'.concat(t,'"]')).removeClass("active"),e.classList.add("active")}))})),h(".form-send__close").on("click",(function(){h(".form-send").fadeOut(500)})),h(".form-send__bg").on("click",(function(){h(".form-send").fadeOut(500)})),t=document.querySelectorAll(".scene-card__content-tooltip"),window.screen.width<1024&&window.addEventListener("click",(function(e){e.target.closest(".scene-card__content-tooltip")?t.forEach((function(e){e.classList.toggle("active")})):t.forEach((function(e){e.classList.remove("active")}))})),function(){var e=document.querySelector("[data-scroll]");if(window.screen.width>1024){var t=window.innerHeight+window.innerHeight/2;e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:t,left:0,behavior:"smooth",duration:2e3}),console.log(t)}))}else{var a=window.innerHeight+window.innerHeight/2;e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:a,left:0,behavior:"smooth",duration:2e3}),console.log(a)}))}var n=document.querySelectorAll("[data-anchor]"),r=document.querySelector(".header-burger"),i=document.querySelector(".header-inner__menu"),o=document.querySelector(".header__logo"),c=document.querySelector("[data-header-chat]");function d(){r.classList.remove("active"),i.classList.remove("active")}o.addEventListener("click",(function(){d()})),c.addEventListener("click",(function(){d()})),window.screen.width>768?n.forEach((function(e){e.addEventListener("click",(function(){var t,a=e.dataset.anchor;switch(a){case"1":t=window.innerHeight*(+a+1)+window.innerHeight/4;break;case"2":t=window.innerHeight*(+a+1)+window.innerHeight/5;break;case"3":case"4":t=window.innerHeight*(+a+.7)+window.innerHeight/5;break;case"5":t=window.innerHeight*(+a+.3)+window.innerHeight/5}window.scrollTo({top:t,behavior:"smooth"}),setTimeout((function(){r.classList.remove("active"),d()}),0)}))})):n.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.anchor,a=document.querySelector('[data-anchor-card="'.concat(t,'"]')).getBoundingClientRect().top,n=window.pageYOffset;window.scrollTo({top:+n+a-85,behavior:"smooth"}),d()}))}))}(),window.addEventListener("pageshow",(function(){document.querySelectorAll("video").forEach((function(e){e.load()}))}))}))},711:(e,t,a)=>{var n=a(638);n((function(){var e,t,a,r,i,o,c;e=n("[data-click=ajax]"),a=n(t="[data-container=validate]").length,n(document).on("click",t,(function(){var r=0;n(t).each((function(e,t){n(t).find("[data-btn].active").length&&r++})),r===a&&(e.removeAttr("data-inactive"),window.validateState.click=!0)})),r=n("[data-click=ajax]"),i=n(".form-send"),o=i.find("[data-success]"),c={elem:i.find("[data-error]"),status:i.find("[data-error-status]"),text:i.find("[data-error-text]")},n("[data-submit=ajax]").on("submit",(function(e){if(e.preventDefault(),!r.attr("data-inactive")){var t={};n("[data-get-field]").each((function(e,a){var r=n(a);try{t[r.data("get-field")]=window.getData[r.data("func")](r)}catch(e){return void console.log(e.message)}})),r.attr("data-inactive",!0),n.ajax({type:"POST",url:"/local/templates/client/include/ajax/forms/customer_survey.php",data:t,success:function(e){r.removeAttr("data-inactive"),i.fadeIn(500),e.success?(o.removeAttr("data-disable"),c.elem.attr("data-disable",!0)):(o.attr("data-disable",!0),c.elem.removeAttr("data-disable"),c.status.text("Ошибка"),c.text.text(e.message))}})}})),n("[data-click=rate]").on("click",(function(){var e={UF_RATE:window.getData.rate(n(this).closest("[data-func=rate]")),UF_LOGIN:n("[data-get-field=UF_LOGIN]").val()};n.ajax({type:"POST",url:"/local/templates/client/include/ajax/forms/rate.php",data:e,success:function(e){}})})),function(){var e=n("[data-click=ajax]");n("[data-change=validate]").on("change",(function(){var t={},a=n(this),r=a.attr("name"),i=a.val();n("[data-change=validate]").each((function(e,a){var r=n(a),i=r.val();i&&(t[r.attr("name")]=i)})),i?t[r]=i:t.hasOwnProperty(r)&&delete t[r],Object.keys(t).length?e.removeAttr("data-inactive"):e.attr("data-inactive",!0)}))}()})),window.validateState={click:!1},window.getData={rate:function(e){var t=0;if(e.find("[data-rate].active").each((function(){t++})),!t)throw new Error("empty rate");return t},active:function(e){return e.find("[data-btn].active").text()},inputValue:function(e){return e.val()}}},746:(e,t,a)=>{var n=a(638);document.querySelector("[data-footer-up]").addEventListener("click",(function(){return n("html, body").animate({scrollTop:0},"slow"),!1}))},818:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-burgeer-btn]"),t=document.querySelector(".header-inner__menu");window.screen.width>1024?e.addEventListener("click",(function(){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})):t.addEventListener("click",(function(){t.classList.contains("active")?(e.classList.remove("active"),t.classList.remove("active")):(e.classList.add("active"),t.classList.add("active"))}))}))},209:(e,t,a)=>{var n=a(638);document.querySelector(".header__logo").addEventListener("click",(function(e){return e.preventDefault(),n("html, body").animate({scrollTop:0},"slow"),!1}))},645:(e,t,a)=>{var n=a(638),r=document.querySelectorAll("[data-star]");r.forEach((function(e){e.addEventListener("mouseenter",(function(){e.classList.add("hovered");for(var t=e.dataset.star,a=1;a<=t;a++)r[a-1].classList.add("hovered")})),e.addEventListener("mouseleave",(function(){n("[data-star]").removeClass("hovered")})),e.addEventListener("click",(function(){var t=e.dataset.star;n("[data-star]").removeClass("active");for(var a=1;a<=t;a++)r[a-1].classList.add("active")}))}))}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,r,i)=>{if(!a){var o=1/0;for(l=0;l<e.length;l++){for(var[a,r,i]=e[l],c=!0,d=0;d<a.length;d++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](a[d])))?a.splice(d--,1):(c=!1,i<o&&(o=i));if(c){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[a,r,i]},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[o,c,d]=a,s=0;if(o.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(d)var l=d(n)}for(t&&t(a);s<o.length;s++)i=o[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[183,532],(()=>n(936)));r=n.O(r)})();