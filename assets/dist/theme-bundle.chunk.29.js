"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[29],{8338:(e,t,i)=>{i.d(t,{g_:()=>h,iR:()=>v,kI:()=>f});var r=i(8403),o=i.n(r),n=i(8929),a=i.n(n),s=i(4721),c=i.n(s),l=(i(5728),i(228),i(6203),i(4043),i(2462),i(2003),i(3440),i(2826),i(9693),i(7522),i(9358),i(97)),d=i(3609),u=i(5825),p=["input","select","textarea"];function v(e,t){void 0===t&&(t={});var i=u(e),r=i.find(p.join(", ")),n=t.formFieldClass,s=void 0===n?"form-field":n;return r.each((function(e,t){!function(e,t){var i,r=u(e),n=r.parent("."+t),s=r.prop("tagName").toLowerCase(),l=t+"--"+s;if("input"===s){var d=r.prop("type");c()(["radio","checkbox","submit"],d)?l=t+"--"+a()(d):i=""+l+o()(d)}n.addClass(l).addClass(i)}(t,s)})),i}function h(e){var t,i,r={type:"hidden",name:"FormFieldIsText"+(t=e,i=t.prop("name").match(/(\[.*\])/),i&&0!==i.length?i[0]:""),value:"1"};e.after(u("<input />",r))}var f={setEmailValidation:function(e,t){t&&e.add({selector:t,validate:function(e,t){e(d.Z.email(t))},errorMessage:"You must enter a valid email."})},setPasswordValidation:function(e,t,i,r,o){var n=u(t),a=[{selector:t,validate:function(e,t){var i=t.length;if(o)return e(!0);e(i)},errorMessage:"You must enter a password."},{selector:t,validate:function(e,t){var i=t.match(new RegExp(r.alpha))&&t.match(new RegExp(r.numeric))&&t.length>=r.minlength;if(o&&0===t.length)return e(!0);e(i)},errorMessage:r.error},{selector:i,validate:function(e,t){var i=t.length;if(o)return e(!0);e(i)},errorMessage:"You must enter a password."},{selector:i,validate:function(e,t){e(t===n.val())},errorMessage:"Your passwords do not match."}];e.add(a)},setMinMaxPriceValidation:function(e,t){var i=t.errorSelector,r=t.fieldsetSelector,o=t.formSelector,n=t.maxPriceSelector,a=t.minPriceSelector;e.configure({form:o,preventSubmit:!0,successClass:"_"}),e.add({errorMessage:"Min price must be less than max. price.",selector:a,validate:"min-max:"+a+":"+n}),e.add({errorMessage:"Min price must be less than max. price.",selector:n,validate:"min-max:"+a+":"+n}),e.add({errorMessage:"Max. price is required.",selector:n,validate:"presence"}),e.add({errorMessage:"Min. price is required.",selector:a,validate:"presence"}),e.add({errorMessage:"Input must be greater than 0.",selector:[a,n],validate:"min-number:0"}),e.setMessageOptions({selector:[a,n],parent:r,errorSpan:i})},setStateCountryValidation:function(e,t){t&&e.add({selector:t,validate:"presence",errorMessage:"The 'State/Province' field cannot be blank."})},cleanUpStateValidation:function(e){var t=u('[data-type="'+e.data("fieldType")+'"]');Object.keys(l.Z.classes).forEach((function(e){t.hasClass(l.Z.classes[e])&&t.removeClass(l.Z.classes[e])}))}}},3609:(e,t,i)=>{i.d(t,{Z:()=>r}),i(4043),i(7409);const r={email:function(e){return/^.+@.+\..+/.test(e)},password:function(e){return this.notEmpty(e)},notEmpty:function(e){return e.length>0}}},6029:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m}),i(7195),i(5728),i(228),i(5399),i(1517),i(1013);var r=i(9230),o=(i(4043),i(1514),i(5825)),n=i.n(o),a=i(97),s=i(8350),c=i(3609),l=function(){function e(e){this.validator=(0,a.Z)({submit:e.find('input[type="submit"]')}),this.$reviewsContent=n()(".productView-description"),this.$collapsible=n()("[data-collapsible]",this.$reviewsContent),this.$reviewsContent2=n()(".vertical-tabs #tab-reviews"),this.initLinkBind(),this.injectPaginationLink(),this.collapseReviews()}var t=e.prototype;return t.initLinkBind=function(){var e=this;n()(".autoimex_reviewLink > a").on("click",(function(e){e.preventDefault()})),n()(".autoimex_reviewLink").on("click",(function(){n()(window).width()>=1025||(n()(".productView-description #tab-reviews .toggleLink").addClass("is-open"),n()(".productView-description #tab-reviews .toggle-content").addClass("is-open")),n()("html, body").animate({scrollTop:e.$reviewsContent.offset().top-n()(".header .autoimex_middleHeader").height()},700);var t=2;n()(".tab").each((function(e){-1!=n()(this).text().search("Product Reviews")&&(t=e+1)})),n()(".productView-description .tabs li:nth-child("+t+")").hasClass("is-active")||(n()(".productView-description .tabs li:nth-child("+t+") a").trigger("click"),n()(".productView-description #tab-reviews .toggle-content").addClass("is-open"),n()(".productView-description #tab-reviews .toggleLink").addClass("is-open"),n()(".productView-description #tab-description .toggle-content").removeClass("is-open"),n()(".productView-description #tab-description .toggleLink ").removeClass("is-open"))})),n()(".autoimex_reviewLink_vertical").on("click",(function(){n()("html, body").animate({scrollTop:e.$reviewsContent2.offset().top-n()(".header .autoimex_middleHeader").height()},700),n()(".vertical-tabs #tab-reviews .toggle-content").addClass("is-open"),n()(".vertical-tabs #tab-reviews .toggleLink").addClass("is-open")}))},t.collapseReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")&&(n()("html, body").animate({scrollTop:this.$reviewsContent.offset().top-56},700),n()(".productView-description .tabs li:nth-child(2)").hasClass("is-active")||(n()(".productView-description .tabs li:nth-child(2) a").trigger("click"),n()(".productView-description #tab-reviews .toggle-content").addClass("is-open")))},t.injectPaginationLink=function(){var e=n()(".pagination-item--next .pagination-link",this.$reviewsContent),t=n()(".pagination-item--previous .pagination-link",this.$reviewsContent);e.length&&e.attr("href",e.attr("href")+" #product-reviews"),t.length&&t.attr("href",t.attr("href")+" #product-reviews")},t.registerValidation=function(e){return this.context=e,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:this.context.reviewRating},{selector:'[name="revtitle"]',validate:"min-length:2",errorMessage:this.context.reviewSubject},{selector:'[name="revtext"]',validate:"min-length:2",errorMessage:this.context.reviewComment},{selector:'[name="email"]',validate:function(e,t){e(c.Z.email(t))},errorMessage:this.context.reviewEmail}]),this.validator},t.validate=function(){return this.validator.performCheck()},e}(),d=i(1863),u=i(5825),p=function(){function e(e){this.$player=e.find("[data-video-player]"),this.$videos=e.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var t=e.prototype;return t.selectNewVideo=function(e){e.preventDefault();var t=u(e.currentTarget);this.currentVideo={id:t.data("videoId"),$selectedThumb:t},this.setMainVideo(),this.setActiveThumb()},t.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},t.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},t.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},e}(),v=i(8338),h=i(5825);function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}var m=function(e){var t,i;function r(t){var i;return(i=e.call(this,t)||this).url=window.location.href,i.$reviewLink=h('[data-reveal-id="modal-review-form"]'),i}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,f(t,i);var o=r.prototype;return o.onReady=function(){var e,t,i=this;h(document).on("close.fndtn.reveal",(function(){-1!==i.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)})),(0,s.ZP)(),this.productDetails=new d.Z(h(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),u("[data-"+(t="video-gallery")+"]").each((function(e,i){var r=u(i);r.data(t)instanceof p||r.data(t,new p(r))})),this.sidebar_mobile(),this.category_sidebar(),this.carouselLeftSidebar();var r=(0,v.iR)(".writeReview-form"),o=new l(r);h("body").on("click",'[data-reveal-id="modal-review-form"]',(function(){e=o.registerValidation(i.context)})),r.on("submit",(function(){return!!e&&(e.performCheck(),e.areAll("valid"))})),this.productReviewHandler()},o.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},o.category_sidebar=function(){h(".all-categories-list").length>0&&h(".all-categories-list .icon-dropdown").on("click",(function(){var e=h(this).parent();e.siblings().removeClass("is-clicked"),e.toggleClass("is-clicked"),e.siblings().find("> .dropdown-category-list").slideUp("slow"),e.find("> .dropdown-category-list").slideToggle("slow")}))},o.sidebar_mobile=function(){h(".page-sidebar").length>0&&(h(".page-sidebar").clone().appendTo(h("#sidebar-mobile .autoimex_MobileContent")),h(".autoimex_sidebar-mobile").on("click",(function(e){h("body").addClass("autoimex_open-Sidebar")})),h("#sidebar-mobile .autoimex_close").on("click",(function(e){h("body").removeClass("autoimex_open-Sidebar")})),h(".bg-mobile").on("click",(function(e){h("body").hasClass("autoimex_open-Sidebar")&&h("body").removeClass("autoimex_open-Sidebar")})))},o.carouselLeftSidebar=function(){h(".sidebarBlock .productCarousel").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,autoplay:!0,autoplaySpeed:2e3,mobileFirst:!0,nextArrow:'<svg class="slick-next slick-arrow"><use xlink:href="#slick-arrow-next1"></use></svg>',prevArrow:'<svg class="slick-prev slick-arrow"><use xlink:href="#slick-arrow-prev1"></use></svg>',responsive:[{breakpoint:1025,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0}}]})},r}(r.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.29.js.map