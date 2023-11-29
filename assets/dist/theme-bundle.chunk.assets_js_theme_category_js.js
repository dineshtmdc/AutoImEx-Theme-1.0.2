"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _autoimex_autoimex_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./autoimex/autoimex_countdown */ "./assets/js/theme/autoimex/autoimex_countdown.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    if ($(window).outerWidth() <= 1024) {
      this.sidebar_mobile();
    }
    this.category_sidebar();
    this.carouselLeftSidebar();
    $(window).resize(function () {
      if ($(window).outerWidth() <= 1024) {
        if ($('.page-sidebar').length > 0) {
          $('.page-sidebar').appendTo($("#sidebar-mobile .autoimex_MobileContent"));
          $('.autoimex_sidebar-mobile').on('click', function (e) {
            $('body').addClass('autoimex_open-Sidebar');
          });
          $('#sidebar-mobile .autoimex_close').on('click', function (ev) {
            $('body').removeClass('autoimex_open-Sidebar');
          });
          $('.bg-mobile').on('click', function (ev) {
            if ($('body').hasClass('autoimex_open-Sidebar')) {
              $('body').removeClass('autoimex_open-Sidebar');
            }
          });
        }
      } else {
        if ($('.page-sidebar').length > 0) {
          $('.page-sidebar').prependTo($(".page > .autoimex_container"));
          if ($('body').hasClass('autoimex_open-Sidebar')) {
            $('body').removeClass('autoimex_open-Sidebar');
          }
        }
      }
    });

    //Countdown time product detail
    var product_id = $('[data-product-id]').val();
    (0,_autoimex_autoimex_countdown__WEBPACK_IMPORTED_MODULE_9__["default"])(product_id);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_8__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      if ($(window).outerWidth() <= 1024) {
        _this.sidebar_mobile();
      }
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  _proto.category_sidebar = function category_sidebar() {
    if ($('.all-categories-list').length > 0) {
      $('.all-categories-list .icon-dropdown').on('click', function () {
        var $this = $(this).parent();
        $this.siblings().removeClass('is-clicked');
        $this.toggleClass('is-clicked');
        $this.siblings().find("> .dropdown-category-list").slideUp("slow");
        $this.find("> .dropdown-category-list").slideToggle("slow");
      });
    }
  };
  _proto.sidebar_mobile = function sidebar_mobile() {
    if ($('.page-sidebar').length > 0) {
      $('.page-sidebar').appendTo($("#sidebar-mobile .autoimex_MobileContent"));
      $('.autoimex_sidebar-mobile').on('click', function (e) {
        $('body').addClass('autoimex_open-Sidebar');
      });
      $('#sidebar-mobile .autoimex_close').on('click', function (ev) {
        $('body').removeClass('autoimex_open-Sidebar');
      });
      $('.bg-mobile').on('click', function (ev) {
        if ($('body').hasClass('autoimex_open-Sidebar')) {
          $('body').removeClass('autoimex_open-Sidebar');
        }
      });
    }
  };
  _proto.carouselLeftSidebar = function carouselLeftSidebar() {
    $('.sidebarBlock .productCarousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      mobileFirst: true,
      nextArrow: '<svg class="slick-next slick-arrow"><use xlink:href="#slick-arrow-next1"></use></svg>',
      prevArrow: '<svg class="slick-prev slick-arrow"><use xlink:href="#slick-arrow-prev1"></use></svg>',
      responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      }]
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_6__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ0U7QUFBQSxJQUlqQ0ssUUFBUSwwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFFBQUEsRUFBQUMsWUFBQTtFQUFBLFNBQUFELFNBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBTCxRQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN6QkUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOVixvRUFBZSxDQUFDLElBQUksQ0FBQ1csT0FBTyxDQUFDQyxJQUFJLENBQUM7SUFFbEMsSUFBSUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ3BEbkIsNkRBQUssQ0FBQ29CLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNGLGNBQWMsQ0FBQztJQUNyRDtJQUVBLElBQUdILENBQUMsQ0FBQ00sTUFBTSxDQUFDLENBQUNDLFVBQVUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDO01BQzlCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDekI7SUFFQSxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRTFCVixDQUFDLENBQUVNLE1BQU8sQ0FBQyxDQUFDSyxNQUFNLENBQUMsWUFBVztNQUMxQixJQUFHWCxDQUFDLENBQUNNLE1BQU0sQ0FB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LENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQS9ELFFBQUE7QUFBQSxFQWxKaUNKLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gJy4vYXV0b2ltZXgvYXV0b2ltZXhfY291bnRkb3duJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPD0gMTAyNCl7XG4gICAgICAgICAgICB0aGlzLnNpZGViYXJfbW9iaWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlfc2lkZWJhcigpO1xuICAgICAgICB0aGlzLmNhcm91c2VsTGVmdFNpZGViYXIoKTtcblxuICAgICAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZigkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDw9IDEwMjQpe1xuICAgICAgICAgICAgICAgIGlmICgkKCcucGFnZS1zaWRlYmFyJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykuYXBwZW5kVG8oJChcIiNzaWRlYmFyLW1vYmlsZSAuYXV0b2ltZXhfTW9iaWxlQ29udGVudFwiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmF1dG9pbWV4X3NpZGViYXItbW9iaWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdhdXRvaW1leF9vcGVuLVNpZGViYXInKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnI3NpZGViYXItbW9iaWxlIC5hdXRvaW1leF9jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2F1dG9pbWV4X29wZW4tU2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuYmctbW9iaWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2F1dG9pbWV4X29wZW4tU2lkZWJhcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhdXRvaW1leF9vcGVuLVNpZGViYXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnBhZ2Utc2lkZWJhcicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2Utc2lkZWJhcicpLnByZXBlbmRUbygkKFwiLnBhZ2UgPiAuYXV0b2ltZXhfY29udGFpbmVyXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnYXV0b2ltZXhfb3Blbi1TaWRlYmFyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYXV0b2ltZXhfb3Blbi1TaWRlYmFyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICBcbiAgICAgICAgLy9Db3VudGRvd24gdGltZSBwcm9kdWN0IGRldGFpbFxuICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQoJ1tkYXRhLXByb2R1Y3QtaWRdJykudmFsKCk7XG4gICAgICAgIENvdW50ZG93bihwcm9kdWN0X2lkKTtcblxuXG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPD0gMTAyNCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyX21vYmlsZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2F0ZWdvcnlfc2lkZWJhcigpIHtcbiAgICAgICAgaWYgKCQoJy5hbGwtY2F0ZWdvcmllcy1saXN0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QgLmljb24tZHJvcGRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgICAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVVcCggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVRvZ2dsZSggXCJzbG93XCIgKTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaWRlYmFyX21vYmlsZSgpIHtcbiAgICAgICAgaWYgKCQoJy5wYWdlLXNpZGViYXInKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykuYXBwZW5kVG8oJChcIiNzaWRlYmFyLW1vYmlsZSAuYXV0b2ltZXhfTW9iaWxlQ29udGVudFwiKSk7XG5cbiAgICAgICAgICAgICQoJy5hdXRvaW1leF9zaWRlYmFyLW1vYmlsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2F1dG9pbWV4X29wZW4tU2lkZWJhcicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJyNzaWRlYmFyLW1vYmlsZSAuYXV0b2ltZXhfY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihldikge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYXV0b2ltZXhfb3Blbi1TaWRlYmFyJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmJnLW1vYmlsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnYXV0b2ltZXhfb3Blbi1TaWRlYmFyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhdXRvaW1leF9vcGVuLVNpZGViYXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhcm91c2VsTGVmdFNpZGViYXIoKSB7XG4gICAgICAgICQoJy5zaWRlYmFyQmxvY2sgLnByb2R1Y3RDYXJvdXNlbCcpLnNsaWNrKHtcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPHN2ZyBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stYXJyb3dcIj48dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2stYXJyb3ctbmV4dDFcIj48L3VzZT48L3N2Zz4nLFxuICAgICAgICAgICAgcHJldkFycm93OiAnPHN2ZyBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stYXJyb3dcIj48dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2stYXJyb3ctcHJldjFcIj48L3VzZT48L3N2Zz4nLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgIFxuXG5cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsIkNvdW50ZG93biIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjb250ZXh0IiwidXJscyIsIiQiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsIm9uIiwid2luZG93Iiwib3V0ZXJXaWR0aCIsInNpZGViYXJfbW9iaWxlIiwiY2F0ZWdvcnlfc2lkZWJhciIsImNhcm91c2VsTGVmdFNpZGViYXIiLCJyZXNpemUiLCJhcHBlbmRUbyIsImUiLCJhZGRDbGFzcyIsImV2IiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsInByZXBlbmRUbyIsInByb2R1Y3RfaWQiLCJ2YWwiLCJfdGhpcyIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIiR0aGlzIiwicGFyZW50Iiwic2libGluZ3MiLCJ0b2dnbGVDbGFzcyIsImZpbmQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJzbGljayIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkb3RzIiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwibW9iaWxlRmlyc3QiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=