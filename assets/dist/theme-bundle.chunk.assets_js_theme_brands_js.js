"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_brands_js"],{

/***/ "./assets/js/theme/autoimex/autoimex_AZbrands.js":
/*!*******************************************************!*\
  !*** ./assets/js/theme/autoimex/autoimex_AZbrands.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AZBrands)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");






var AZBrands = /*#__PURE__*/function () {
  function AZBrands() {}
  var _proto = AZBrands.prototype;
  _proto.loaded = function loaded(limit) {
    var $brands = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-brands-list]');
    if ($brands.length > 0) {
      var $atozBrands = jquery__WEBPACK_IMPORTED_MODULE_4___default()(document.getElementById($brands.data('azbrands')));
      if ($atozBrands.length > 0) {
        this.generateAtoZBrands($atozBrands);
        this.updateAtoZBrands($brands, $atozBrands);
      }
      var url = $brands.data('brands-list-next');
      console.log(url);
      if (url) {
        this.loadMoreBrands($brands, url, true, limit);
      }
    }
  };
  _proto.generateAtoZBrands = function generateAtoZBrands($atozBrands) {
    var azBrandsTableID = $atozBrands.attr('id') + "Table";
    var $atozBrandsTable = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#" + azBrandsTableID);
    $atozBrandsTable.append('<li data-letter=""><a href="#">All</a></li>');
    var ch = '#';
    $atozBrands.append("<div class=\"azBrands-group\" data-letter=\"" + ch + "\" id=\"azBrands-code-123\"><h3 class=\"azBrands-group-title\">" + ch + "</h3><ul class=\"brandList\"></ul></div>");
    $atozBrandsTable.append("<li data-letter=\"" + ch + "\"><a href=\"#azBrands-code-123\" data-target=\"azBrands-code-123\">" + ch + "</a></li>");
    for (var i = 97; i < 123; i++) {
      var _ch = '#';
      if (i < 123) {
        _ch = String.fromCharCode(i);
      }
      $atozBrands.append("<div class=\"azBrands-group\" data-letter=\"" + _ch + "\" id=\"azBrands-code-" + i + "\"><h3 class=\"azBrands-group-title\">" + _ch + "</h3><ul class=\"brandList\"></ul></div>");
      $atozBrandsTable.append("<li data-letter=\"" + _ch + "\"><a href=\"#azBrands-code-" + i + "\" data-target=\"azBrands-code-" + i + "\">" + _ch + "</a></li>");
    }
    $atozBrands.addClass('active-all');
    $atozBrands.children().addClass('is-active');
    $atozBrandsTable.children(':first').addClass('is-active');
    $atozBrandsTable.on('click', 'a', function (event) {
      event.preventDefault();
      var $a = jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.target);
      $atozBrandsTable.children('li').removeClass('is-active');
      $a.parent().addClass('is-active');
      var target = $a.data('target');
      if (target) {
        $atozBrands.children('.azBrands-group').removeClass('is-active');
        $atozBrands.children("#" + target).addClass('is-active');
        $atozBrands.removeClass('active-all');
      } else {
        $atozBrands.children('.azBrands-group').addClass('is-active');
        $atozBrands.addClass('active-all');
      }
    });
  };
  _proto.updateAtoZBrands = function updateAtoZBrands($brands, $atozBrands) {
    var $atozBrandsTable = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#" + $atozBrands.attr('id') + "Table");
    $brands.children('.brand').each(function (i, el) {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_4___default()(el);
      var code = String($el.data('brand-code'));
      var letter = code.charAt(0).toLowerCase();
      var $group = $atozBrands.children("[data-letter=" + letter + "]");
      if ($group.length === 0) {
        $group = $atozBrands.children(':first');
      }
      var $li = $atozBrandsTable.children("[data-letter=" + letter + "]");
      if ($li.length === 0) {
        $li = $atozBrandsTable.children(':last');
      }
      var $brandList = $group.find('.brandList');
      var $elIns;
      $brandList.children('.brand').each(function (j, el2) {
        var $el2 = jquery__WEBPACK_IMPORTED_MODULE_4___default()(el2);
        var code2 = $el2.data('brand-code');
        if (code < code2) {
          $elIns = $el2;
        } else {
          return false;
        }
      });
      if ($elIns) {
        $el.insertAfter($elIns);
      } else {
        $el.appendTo($brandList);
      }
    });
    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#azBrands .azBrands-group ul').each(function (e) {
        var check = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find("li").length;
        if (check === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).prev(".azBrands-group-title").addClass("not_valued");
        }
      });
      $atozBrands.children().each(function () {
        var temp = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find(".azBrands-group-title.not_valued").text().trim();
        $atozBrandsTable.children().each(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('a').text().trim() == temp) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('a').addClass('disable');
          }
        });
      });
    }, 3000);
  };
  _proto.loadMoreBrands = function loadMoreBrands($brands, url, recursive, limit) {
    var _this = this;
    console.log(limit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.getPage(url, {
      template: 'autoimex/brands-list',
      config: {
        brands: {
          limit: limit
        }
      }
    }, function (err, resp) {
      var $brandsList = jquery__WEBPACK_IMPORTED_MODULE_4___default()(resp).find('[data-brands-list]');
      $brands.append($brandsList.children());
      var $atozBrands = jquery__WEBPACK_IMPORTED_MODULE_4___default()(document.getElementById($brands.data('azbrands')));
      if ($atozBrands.length > 0) {
        _this.updateAtoZBrands($brands, $atozBrands);
      }
      var nextUrl = $brandsList.data('brands-list-next');
      if (nextUrl && recursive) {
        _this.loadMoreBrands($brands, nextUrl, recursive, limit);
      }
    });
  };
  return AZBrands;
}();


/***/ }),

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brands)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _autoimex_autoimex_AZbrands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autoimex/autoimex_AZbrands */ "./assets/js/theme/autoimex/autoimex_AZbrands.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);
  function Brands() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    // Brands list A to Z
    if (this.context.themeSettings.autoimex_brandlayout === 'aztable') {
      var azbrands = new _autoimex_autoimex_AZbrands__WEBPACK_IMPORTED_MODULE_6__["default"]();
      azbrands.loaded(this.context.themeSettings.brandpage_brands_per_page);
    }
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZHNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUN3QjtBQUFBLElBRzFCRSxRQUFRO0VBQUEsU0FBQUEsU0FBQTtFQUFBLElBQUFDLE1BQUEsR0FBQUQsUUFBQSxDQUFBRSxTQUFBO0VBQUFELE1BQUEsQ0FDekJFLE1BQU0sR0FBTixTQUFBQSxPQUFPQyxLQUFLLEVBQUU7SUFDVixJQUFNQyxPQUFPLEdBQUdQLDZDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDdkMsSUFBSU8sT0FBTyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3BCLElBQU1DLFdBQVcsR0FBR1QsNkNBQUMsQ0FBQ1UsUUFBUSxDQUFDQyxjQUFjLENBQUNKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7TUFDeEUsSUFBSUgsV0FBVyxDQUFDRCxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLElBQUksQ0FBQ0ssa0JBQWtCLENBQUNKLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUNLLGdCQUFnQixDQUFDUCxPQUFPLEVBQUVFLFdBQVcsQ0FBQztNQUMvQztNQUNBLElBQU1NLEdBQUcsR0FBR1IsT0FBTyxDQUFDSyxJQUFJLENBQUMsa0JBQWtCLENBQUM7TUFDNUNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7TUFDaEIsSUFBSUEsR0FBRyxFQUFFO1FBQ0wsSUFBSSxDQUFDRyxjQUFjLENBQUNYLE9BQU8sRUFBRVEsR0FBRyxFQUFFLElBQUksRUFBRVQsS0FBSyxDQUFDO01BQ2xEO0lBQ0o7RUFDSixDQUFDO0VBQUFILE1BQUEsQ0FFRFUsa0JBQWtCLEdBQWxCLFNBQUFBLG1CQUFtQkosV0FBVyxFQUFFO0lBQzVCLElBQU1VLGVBQWUsR0FBTVYsV0FBVyxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQU87SUFDeEQsSUFBTUMs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QSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQTVFLE1BQUEsR0FBQXdFLE1BQUEsQ0FBQXZFLFNBQUE7RUFBQUQsTUFBQSxDQUMxQjZFLE9BQU8sR0FBUCxTQUFBQSxRQUFBLEVBQVU7SUFDVDtJQUNNLElBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNDLGFBQWEsQ0FBQ0Msb0JBQW9CLEtBQUssU0FBUyxFQUFFO01BQy9ELElBQU1DLFFBQVEsR0FBRyxJQUFJbEYsbUVBQVEsQ0FBQyxDQUFDO01BQy9Ca0YsUUFBUSxDQUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQzRFLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDRyx5QkFBeUIsQ0FBQztJQUN6RTtFQUNQLENBQUM7RUFBQSxPQUFBVixNQUFBO0FBQUEsRUFQa0NGLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvYXV0b2ltZXgvYXV0b2ltZXhfQVpicmFuZHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFaQnJhbmRzIHtcbiAgICBsb2FkZWQobGltaXQpIHtcbiAgICAgICAgY29uc3QgJGJyYW5kcyA9ICQoJ1tkYXRhLWJyYW5kcy1saXN0XScpO1xuICAgICAgICBpZiAoJGJyYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYXRvekJyYW5kcyA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJGJyYW5kcy5kYXRhKCdhemJyYW5kcycpKSk7XG4gICAgICAgICAgICBpZiAoJGF0b3pCcmFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBdG9aQnJhbmRzKCRhdG96QnJhbmRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF0b1pCcmFuZHMoJGJyYW5kcywgJGF0b3pCcmFuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXJsID0gJGJyYW5kcy5kYXRhKCdicmFuZHMtbGlzdC1uZXh0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmVCcmFuZHMoJGJyYW5kcywgdXJsLCB0cnVlLCBsaW1pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUF0b1pCcmFuZHMoJGF0b3pCcmFuZHMpIHtcbiAgICAgICAgY29uc3QgYXpCcmFuZHNUYWJsZUlEID0gYCR7JGF0b3pCcmFuZHMuYXR0cignaWQnKX1UYWJsZWA7XG4gICAgICAgIGNvbnN0ICRhdG96QnJhbmRzVGFibGUgPSAkKGAjJHthekJyYW5kc1RhYmxlSUR9YCk7XG5cbiAgICAgICAgJGF0b3pCcmFuZHNUYWJsZS5hcHBlbmQoJzxsaSBkYXRhLWxldHRlcj1cIlwiPjxhIGhyZWY9XCIjXCI+QWxsPC9hPjwvbGk+Jyk7XG4gICAgICAgIHZhciBjaCA9ICcjJztcbiAgICAgICAgJGF0b3pCcmFuZHMuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiYXpCcmFuZHMtZ3JvdXBcIiBkYXRhLWxldHRlcj1cIiR7Y2h9XCIgaWQ9XCJhekJyYW5kcy1jb2RlLTEyM1wiPjxoMyBjbGFzcz1cImF6QnJhbmRzLWdyb3VwLXRpdGxlXCI+JHtjaH08L2gzPjx1bCBjbGFzcz1cImJyYW5kTGlzdFwiPjwvdWw+PC9kaXY+YCk7XG4gICAgICAgICRhdG96QnJhbmRzVGFibGUuYXBwZW5kKGA8bGkgZGF0YS1sZXR0ZXI9XCIke2NofVwiPjxhIGhyZWY9XCIjYXpCcmFuZHMtY29kZS0xMjNcIiBkYXRhLXRhcmdldD1cImF6QnJhbmRzLWNvZGUtMTIzXCI+JHtjaH08L2E+PC9saT5gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gOTc7IGkgPCAxMjM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoID0gJyMnO1xuICAgICAgICAgICAgaWYgKGkgPCAxMjMpIHtcbiAgICAgICAgICAgICAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkYXRvekJyYW5kcy5hcHBlbmQoYDxkaXYgY2xhc3M9XCJhekJyYW5kcy1ncm91cFwiIGRhdGEtbGV0dGVyPVwiJHtjaH1cIiBpZD1cImF6QnJhbmRzLWNvZGUtJHtpfVwiPjxoMyBjbGFzcz1cImF6QnJhbmRzLWdyb3VwLXRpdGxlXCI+JHtjaH08L2gzPjx1bCBjbGFzcz1cImJyYW5kTGlzdFwiPjwvdWw+PC9kaXY+YCk7XG4gICAgICAgICAgICAkYXRvekJyYW5kc1RhYmxlLmFwcGVuZChgPGxpIGRhdGEtbGV0dGVyPVwiJHtjaH1cIj48YSBocmVmPVwiI2F6QnJhbmRzLWNvZGUtJHtpfVwiIGRhdGEtdGFyZ2V0PVwiYXpCcmFuZHMtY29kZS0ke2l9XCI+JHtjaH08L2E+PC9saT5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhdG96QnJhbmRzLmFkZENsYXNzKCdhY3RpdmUtYWxsJyk7XG4gICAgICAgICRhdG96QnJhbmRzLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkYXRvekJyYW5kc1RhYmxlLmNoaWxkcmVuKCc6Zmlyc3QnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgJGF0b3pCcmFuZHNUYWJsZS5vbignY2xpY2snLCAnYScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgICAgICRhdG96QnJhbmRzVGFibGUuY2hpbGRyZW4oJ2xpJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJGEucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkYS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAkYXRvekJyYW5kcy5jaGlsZHJlbignLmF6QnJhbmRzLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRhdG96QnJhbmRzLmNoaWxkcmVuKGAjJHt0YXJnZXR9YCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRhdG96QnJhbmRzLnJlbW92ZUNsYXNzKCdhY3RpdmUtYWxsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRhdG96QnJhbmRzLmNoaWxkcmVuKCcuYXpCcmFuZHMtZ3JvdXAnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJGF0b3pCcmFuZHMuYWRkQ2xhc3MoJ2FjdGl2ZS1hbGwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXRvWkJyYW5kcygkYnJhbmRzLCAkYXRvekJyYW5kcykge1xuICAgICAgICBjb25zdCAkYXRvekJyYW5kc1RhYmxlID0gJChgIyR7JGF0b3pCcmFuZHMuYXR0cignaWQnKX1UYWJsZWApO1xuICAgICAgICAkYnJhbmRzLmNoaWxkcmVuKCcuYnJhbmQnKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gU3RyaW5nKCRlbC5kYXRhKCdicmFuZC1jb2RlJykpO1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gY29kZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbGV0ICRncm91cCA9ICRhdG96QnJhbmRzLmNoaWxkcmVuKGBbZGF0YS1sZXR0ZXI9JHtsZXR0ZXJ9XWApO1xuICAgICAgICAgICAgaWYgKCRncm91cC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkZ3JvdXAgPSAkYXRvekJyYW5kcy5jaGlsZHJlbignOmZpcnN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCAkbGkgPSAkYXRvekJyYW5kc1RhYmxlLmNoaWxkcmVuKGBbZGF0YS1sZXR0ZXI9JHtsZXR0ZXJ9XWApO1xuICAgICAgICAgICAgaWYgKCRsaS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkbGkgPSAkYXRvekJyYW5kc1RhYmxlLmNoaWxkcmVuKCc6bGFzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkYnJhbmRMaXN0ID0gJGdyb3VwLmZpbmQoJy5icmFuZExpc3QnKTtcblxuICAgICAgICAgICAgbGV0ICRlbElucztcbiAgICAgICAgICAgICRicmFuZExpc3QuY2hpbGRyZW4oJy5icmFuZCcpLmVhY2goKGosIGVsMikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbDIgPSAkKGVsMik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZTIgPSAkZWwyLmRhdGEoJ2JyYW5kLWNvZGUnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb2RlIDwgY29kZTIpIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsSW5zID0gJGVsMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoJGVsSW5zKSB7XG4gICAgICAgICAgICAgICAgJGVsLmluc2VydEFmdGVyKCRlbElucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC5hcHBlbmRUbygkYnJhbmRMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICQoJyNhekJyYW5kcyAuYXpCcmFuZHMtZ3JvdXAgdWwnKS5lYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9ICgkKHRoaXMpLmZpbmQoXCJsaVwiKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2KFwiLmF6QnJhbmRzLWdyb3VwLXRpdGxlXCIpLmFkZENsYXNzKFwibm90X3ZhbHVlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGF0b3pCcmFuZHMuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSAkKHRoaXMpLmZpbmQoXCIuYXpCcmFuZHMtZ3JvdXAtdGl0bGUubm90X3ZhbHVlZFwiKS50ZXh0KCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICRhdG96QnJhbmRzVGFibGUuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAkKHRoaXMpLmZpbmQoJ2EnKS50ZXh0KCkudHJpbSgpID09IHRlbXApe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGxvYWRNb3JlQnJhbmRzKCRicmFuZHMsIHVybCwgcmVjdXJzaXZlLCBsaW1pdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhsaW1pdCk7XG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdhdXRvaW1leC9icmFuZHMtbGlzdCcsXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBicmFuZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYnJhbmRzTGlzdCA9ICQocmVzcCkuZmluZCgnW2RhdGEtYnJhbmRzLWxpc3RdJyk7XG4gICAgICAgICAgICAkYnJhbmRzLmFwcGVuZCgkYnJhbmRzTGlzdC5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgY29uc3QgJGF0b3pCcmFuZHMgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCRicmFuZHMuZGF0YSgnYXpicmFuZHMnKSkpO1xuICAgICAgICAgICAgaWYgKCRhdG96QnJhbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF0b1pCcmFuZHMoJGJyYW5kcywgJGF0b3pCcmFuZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXh0VXJsID0gJGJyYW5kc0xpc3QuZGF0YSgnYnJhbmRzLWxpc3QtbmV4dCcpO1xuICAgICAgICAgICAgaWYgKG5leHRVcmwgJiYgcmVjdXJzaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTW9yZUJyYW5kcygkYnJhbmRzLCBuZXh0VXJsLCByZWN1cnNpdmUsIGxpbWl0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBBWkJyYW5kcyBmcm9tICcuL2F1dG9pbWV4L2F1dG9pbWV4X0FaYnJhbmRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmRzIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuXHRvblJlYWR5KCkge1xuXHRcdC8vIEJyYW5kcyBsaXN0IEEgdG8gWlxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuYXV0b2ltZXhfYnJhbmRsYXlvdXQgPT09ICdhenRhYmxlJykge1xuICAgICAgICAgICAgY29uc3QgYXpicmFuZHMgPSBuZXcgQVpCcmFuZHMoKTtcbiAgICAgICAgICAgIGF6YnJhbmRzLmxvYWRlZCh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5icmFuZHBhZ2VfYnJhbmRzX3Blcl9wYWdlKTtcbiAgICAgICAgfVxuXHR9XG59XG4iXSwibmFtZXMiOlsiJCIsInV0aWxzIiwiQVpCcmFuZHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJsb2FkZWQiLCJsaW1pdCIsIiRicmFuZHMiLCJsZW5ndGgiLCIkYXRvekJyYW5kcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhIiwiZ2VuZXJhdGVBdG9aQnJhbmRzIiwidXBkYXRlQXRvWkJyYW5kcyIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkTW9yZUJyYW5kcyIsImF6QnJhbmRzVGFibGVJRCIsImF0dHIiLCIkYXRvekJyYW5kc1RhYmxlIiwiYXBwZW5kIiwiY2giLCJpIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYWRkQ2xhc3MiLCJjaGlsZHJlbiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRhIiwidGFyZ2V0IiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJlYWNoIiwiZWwiLCIkZWwiLCJjb2RlIiwibGV0dGVyIiwiY2hhckF0IiwidG9Mb3dlckNhc2UiLCIkZ3JvdXAiLCIkbGkiLCIkYnJhbmRMaXN0IiwiZmluZCIsIiRlbElucyIsImoiLCJlbDIiLCIkZWwyIiwiY29kZTIiLCJpbnNlcnRBZnRlciIsImFwcGVuZFRvIiwic2V0VGltZW91dCIsImUiLCJjaGVjayIsInByZXYiLCJ0ZW1wIiwidGV4dCIsInRyaW0iLCJyZWN1cnNpdmUiLCJfdGhpcyIsImFwaSIsImdldFBhZ2UiLCJ0ZW1wbGF0ZSIsImNvbmZpZyIsImJyYW5kcyIsImVyciIsInJlc3AiLCIkYnJhbmRzTGlzdCIsIm5leHRVcmwiLCJkZWZhdWx0IiwiUGFnZU1hbmFnZXIiLCJob29rcyIsIkJyYW5kcyIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvblJlYWR5IiwiY29udGV4dCIsInRoZW1lU2V0dGluZ3MiLCJhdXRvaW1leF9icmFuZGxheW91dCIsImF6YnJhbmRzIiwiYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZSJdLCJzb3VyY2VSb290IjoiIn0=