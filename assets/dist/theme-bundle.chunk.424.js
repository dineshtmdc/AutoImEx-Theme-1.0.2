"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[424],{8424:(a,t,e)=>{e.r(t),e.d(t,{default:()=>o}),e(5399),e(1517),e(1013);var r=e(9230),n=e(2557),d=e(5825),i=e.n(d),s=(e(5728),e(228),e(6869),e(8436),function(){function a(){}var t=a.prototype;return t.loaded=function(a){var t=i()("[data-brands-list]");if(t.length>0){var e=i()(document.getElementById(t.data("azbrands")));e.length>0&&(this.generateAtoZBrands(e),this.updateAtoZBrands(t,e));var r=t.data("brands-list-next");console.log(r),r&&this.loadMoreBrands(t,r,!0,a)}},t.generateAtoZBrands=function(a){var t=a.attr("id")+"Table",e=i()("#"+t);e.append('<li data-letter=""><a href="#">All</a></li>'),a.append('<div class="azBrands-group" data-letter="#" id="azBrands-code-123"><h3 class="azBrands-group-title">#</h3><ul class="brandList"></ul></div>'),e.append('<li data-letter="#"><a href="#azBrands-code-123" data-target="azBrands-code-123">#</a></li>');for(var r=97;r<123;r++){var n="#";r<123&&(n=String.fromCharCode(r)),a.append('<div class="azBrands-group" data-letter="'+n+'" id="azBrands-code-'+r+'"><h3 class="azBrands-group-title">'+n+'</h3><ul class="brandList"></ul></div>'),e.append('<li data-letter="'+n+'"><a href="#azBrands-code-'+r+'" data-target="azBrands-code-'+r+'">'+n+"</a></li>")}a.addClass("active-all"),a.children().addClass("is-active"),e.children(":first").addClass("is-active"),e.on("click","a",(function(t){t.preventDefault();var r=i()(t.target);e.children("li").removeClass("is-active"),r.parent().addClass("is-active");var n=r.data("target");n?(a.children(".azBrands-group").removeClass("is-active"),a.children("#"+n).addClass("is-active"),a.removeClass("active-all")):(a.children(".azBrands-group").addClass("is-active"),a.addClass("active-all"))}))},t.updateAtoZBrands=function(a,t){var e=i()("#"+t.attr("id")+"Table");a.children(".brand").each((function(a,r){var n=i()(r),d=String(n.data("brand-code")),s=d.charAt(0).toLowerCase(),l=t.children("[data-letter="+s+"]");0===l.length&&(l=t.children(":first"));var o=e.children("[data-letter="+s+"]");0===o.length&&(o=e.children(":last"));var c,u=l.find(".brandList");u.children(".brand").each((function(a,t){var e=i()(t),r=e.data("brand-code");if(!(d<r))return!1;c=e})),c?n.insertAfter(c):n.appendTo(u)})),setTimeout((function(){i()("#azBrands .azBrands-group ul").each((function(a){0===i()(this).find("li").length&&i()(this).prev(".azBrands-group-title").addClass("not_valued")})),t.children().each((function(){var a=i()(this).find(".azBrands-group-title.not_valued").text().trim();e.children().each((function(){i()(this).find("a").text().trim()==a&&i()(this).find("a").addClass("disable")}))}))}),3e3)},t.loadMoreBrands=function(a,t,e,r){var d=this;console.log(r),n.ZP.api.getPage(t,{template:"autoimex/brands-list",config:{brands:{limit:r}}},(function(t,n){var s=i()(n).find("[data-brands-list]");a.append(s.children());var l=i()(document.getElementById(a.data("azbrands")));l.length>0&&d.updateAtoZBrands(a,l);var o=s.data("brands-list-next");o&&e&&d.loadMoreBrands(a,o,e,r)}))},a}());function l(a,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,t){return a.__proto__=t,a},l(a,t)}var o=function(a){var t,e;function r(){return a.apply(this,arguments)||this}return e=a,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,l(t,e),r.prototype.onReady=function(){"aztable"===this.context.themeSettings.autoimex_brandlayout&&(new s).loaded(this.context.themeSettings.brandpage_brands_per_page)},r}(r.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.424.js.map