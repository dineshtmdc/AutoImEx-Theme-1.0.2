"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _autoimex_autoimex_countdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./autoimex/autoimex_countdown */ "./assets/js/theme/autoimex/autoimex_countdown.js");





function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);
  function Brand() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context.urls);
    if (jquery__WEBPACK_IMPORTED_MODULE_7___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    this.sidebar_mobile();
    this.category_sidebar();
    this.carouselLeftSidebar();

    //Countdown time product detail
    var product_id = jquery__WEBPACK_IMPORTED_MODULE_7___default()('[data-product-id]').val();
    (0,_autoimex_autoimex_countdown__WEBPACK_IMPORTED_MODULE_10__["default"])(product_id);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_9__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  _proto.category_sidebar = function category_sidebar() {
    if (jquery__WEBPACK_IMPORTED_MODULE_7___default()('.all-categories-list').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.all-categories-list .icon-dropdown').on('click', function () {
        var $this = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).parent();
        $this.siblings().removeClass('is-clicked');
        $this.toggleClass('is-clicked');
        $this.siblings().find("> .dropdown-category-list").slideUp("slow");
        $this.find("> .dropdown-category-list").slideToggle("slow");
      });
    }
  };
  _proto.sidebar_mobile = function sidebar_mobile() {
    if (jquery__WEBPACK_IMPORTED_MODULE_7___default()('.page-sidebar').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.page-sidebar').clone().appendTo(jquery__WEBPACK_IMPORTED_MODULE_7___default()("#sidebar-mobile .autoimex_MobileContent"));
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.autoimex_sidebar-mobile').on('click', function (e) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('body').addClass('autoimex_open-Sidebar');
      });
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('#sidebar-mobile .autoimex_close').on('click', function (ev) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('body').removeClass('autoimex_open-Sidebar');
      });
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.bg-mobile').on('click', function (ev) {
        if (jquery__WEBPACK_IMPORTED_MODULE_7___default()('body').hasClass('autoimex_open-Sidebar')) {
          jquery__WEBPACK_IMPORTED_MODULE_7___default()('body').removeClass('autoimex_open-Sidebar');
        }
      });
    }
  };
  _proto.carouselLeftSidebar = function carouselLeftSidebar() {
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('.sidebarBlock .productCarousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
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
  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_6__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDYjtBQUNpQztBQUNKO0FBQ0U7QUFBQSxJQUdqQ00sS0FBSywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLEtBQUEsRUFBQUMsWUFBQTtFQUFBLFNBQUFELE1BQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBTCxLQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN0QkUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOVixvRUFBZSxDQUFDLElBQUksQ0FBQ1csT0FBTyxDQUFDQyxJQUFJLENBQUM7SUFFbEMsSUFBSWIsNkNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDYyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwRG5CLDZEQUFLLENBQUNvQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDRixjQUFjLENBQUM7SUFDckQ7SUFFQSxJQUFJLENBQUNHLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUM7O0lBRTFCO0lBQ0EsSUFBSUMsVUFBVSxHQUFHdEIsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDdUIsR0FBRyxDQUFDLENBQUM7SUFDN0NwQix5RUFBUyxDQUFDbUIsVUFBVSxDQUFDO0VBQ3pCLENBQUM7RUFBQWIsTUFBQSxDQUVETSxpQkFBaUIsR0FBakIsU0FBQUEsa0JBQUEsRUFBb0I7SUFDaEIsSUFBTVMsd0JBQXdCLEdBQUd4Qiw2Q0FBQyxDQUFDLDRCQUE0QixDQUFDO0lBQ2hFLElBQU15Qix1QkFBdUIsR0FBR3pCLDZDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFDOUQsSUFBTTBCLGVBQWUsR0FBRyxJQUFJLENBQUNkLE9BQU8sQ0FBQ2Usb0JBQW9CO0lBQ3pELElBQU1DLGNBQWMsR0FBRztNQUNuQkMsUUFBUSxFQUFFO1FBQ05DLGNBQWMsRUFBRSx1QkFBdUI7UUFDdkNDLE9BQU8sRUFBRTtNQUNiLENBQUM7TUFDREMsTUFBTSxFQUFFO1FBQ0pDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxLQUFLLEVBQUU7VUFDSEMsUUFBUSxFQUFFO1lBQ05DLEtBQUssRUFBRVY7VUFDWDtRQUNKO01BQ0osQ0FBQztNQUNEVyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSXBDLDhEQUFhLENBQUMwQixjQUFjLEVBQUUsVUFBQ1csT0FBTyxFQUFLO01BQ2hFZix3QkFBd0IsQ0FBQ2dCLElBQUksQ0FBQ0QsT0FBTyxDQUFDVCxjQUFjLENBQUM7TUFDckRMLHVCQUF1QixDQUFDZSxJQUFJLENBQUNELE9BQU8sQ0FBQ1IsT0FBTyxDQUFDO01BRTdDL0IsNkNBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ3lDLE9BQU8sQ0FBQztRQUNwQkMsU0FBUyxFQUFFO01BQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWpDLE1BQUEsQ0FFRFcsZ0JBQWdCLEdBQWhCLFNBQUFBLGlCQUFBLEVBQW1CO0lBQ2YsSUFBSXBCLDZDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ2MsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN0Q2QsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDa0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO1FBQzVELElBQUl5QixLQUFLLEdBQUczQyw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEMsTUFBTSxDQUFDLENBQUM7UUFDNUJELEtBQUssQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUMxQ0gsS0FBSyxDQUFDSSxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQy9CSixLQUFLLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxPQUFPLENBQUUsTUFBTyxDQUFDO1FBQ3BFTixLQUFLLENBQUNLLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxXQUFXLENBQUUsTUFBTyxDQUFDO01BQ2xFLENBQUMsQ0FBQztJQUNMO0VBQ0osQ0FBQztFQUFBekMsTUFBQSxDQUVEVSxjQUFjLEdBQWQsU0FBQUEsZUFBQSxFQUFpQjtJQUNiLElBQUluQiw2Q0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDYyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQy9CZCw2Q0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDbUQsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDcEQsNkNBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO01BRWpGQSw2Q0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNrQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVNtQyxDQUFDLEVBQUU7UUFDbERyRCw2Q0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDc0QsUUFBUSxDQUFDLHVCQUF1QixDQUFDO01BQy9DLENBQUMsQ0FBQztNQUVGdEQsNkNBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDa0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTcUMsRUFBRSxFQUFFO1FBQzFEdkQsNkNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzhDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztNQUNsRCxDQUFDLENBQUM7TUFFRjlDLDZDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNrQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVNxQyxFQUFFLEVBQUU7UUFDckMsSUFBSXZELDZDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN3RCxRQUFRLENBQUMsdUJBQXVCLENBQUMsRUFBRTtVQUM3Q3hELDZDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM4QyxXQUFXLENBQUMsdUJBQXVCLENBQUM7UUFDbEQ7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFBQXJDLE1BQUEsQ0FDRFksbUJBQW1CLEdBQW5CLFNBQUFBLG9CQUFBLEVBQXNCO0lBQ2xCckIsNkNBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDeUQsS0FBSyxDQUFDO01BQ3RDQyxRQUFRLEVBQUUsSUFBSTtNQUNkQyxZQUFZLEVBQUUsQ0FBQztNQUNmQyxjQUFjLEVBQUUsQ0FBQztNQUNqQkMsSUFBSSxFQUFFLEtBQUs7TUFDWEMsTUFBTSxFQUFFLElBQUk7TUFDWkMsUUFBUSxFQUFFLElBQUk7TUFDZEMsYUFBYSxFQUFFLElBQUk7TUFDbkJDLFdBQVcsRUFBRSxJQUFJO01BQ2pCQyxTQUFTLEVBQUUsdUZBQXVGO01BQ2xHQyxTQUFTLEVBQUUsdUZBQXVGO01BQ2xHQyxVQUFVLEVBQUUsQ0FDUjtRQUNJQyxVQUFVLEVBQUUsSUFBSTtRQUNoQkMsUUFBUSxFQUFFO1VBQ05YLFlBQVksRUFBRSxDQUFDO1VBQ2ZDLGNBQWMsRUFBRSxDQUFDO1VBQ2pCQyxJQUFJLEVBQUUsSUFBSTtVQUNWQyxNQUFNLEVBQUU7UUFDWjtNQUNKLENBQUM7SUFFVCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQTFELEtBQUE7QUFBQSxFQXpHOEJMLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IENvdW50ZG93biBmcm9tICcuL2F1dG9pbWV4L2F1dG9pbWV4X2NvdW50ZG93bic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaWRlYmFyX21vYmlsZSgpO1xuICAgICAgICB0aGlzLmNhdGVnb3J5X3NpZGViYXIoKTtcbiAgICAgICAgdGhpcy5jYXJvdXNlbExlZnRTaWRlYmFyKCk7XG5cbiAgICAgICAgLy9Db3VudGRvd24gdGltZSBwcm9kdWN0IGRldGFpbFxuICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQoJ1tkYXRhLXByb2R1Y3QtaWRdJykudmFsKCk7XG4gICAgICAgIENvdW50ZG93bihwcm9kdWN0X2lkKTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5icmFuZFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnYnJhbmQvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnYnJhbmQvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2F0ZWdvcnlfc2lkZWJhcigpIHtcbiAgICAgICAgaWYgKCQoJy5hbGwtY2F0ZWdvcmllcy1saXN0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QgLmljb24tZHJvcGRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgICAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVVcCggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVRvZ2dsZSggXCJzbG93XCIgKTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaWRlYmFyX21vYmlsZSgpIHtcbiAgICAgICAgaWYgKCQoJy5wYWdlLXNpZGViYXInKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykuY2xvbmUoKS5hcHBlbmRUbygkKFwiI3NpZGViYXItbW9iaWxlIC5hdXRvaW1leF9Nb2JpbGVDb250ZW50XCIpKTtcblxuICAgICAgICAgICAgJCgnLmF1dG9pbWV4X3NpZGViYXItbW9iaWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYXV0b2ltZXhfb3Blbi1TaWRlYmFyJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3NpZGViYXItbW9iaWxlIC5hdXRvaW1leF9jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhdXRvaW1leF9vcGVuLVNpZGViYXInKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuYmctbW9iaWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdhdXRvaW1leF9vcGVuLVNpZGViYXInKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2F1dG9pbWV4X29wZW4tU2lkZWJhcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhcm91c2VsTGVmdFNpZGViYXIoKSB7XG4gICAgICAgICQoJy5zaWRlYmFyQmxvY2sgLnByb2R1Y3RDYXJvdXNlbCcpLnNsaWNrKHtcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPHN2ZyBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stYXJyb3dcIj48dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2stYXJyb3ctbmV4dDFcIj48L3VzZT48L3N2Zz4nLFxuICAgICAgICAgICAgcHJldkFycm93OiAnPHN2ZyBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stYXJyb3dcIj48dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2stYXJyb3ctcHJldjFcIj48L3VzZT48L3N2Zz4nLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCIkIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsIkNvdW50ZG93biIsIkJyYW5kIiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjb250ZXh0IiwidXJscyIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCJzaWRlYmFyX21vYmlsZSIsImNhdGVnb3J5X3NpZGViYXIiLCJjYXJvdXNlbExlZnRTaWRlYmFyIiwicHJvZHVjdF9pZCIsInZhbCIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiYnJhbmRQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwiY29uZmlnIiwic2hvcF9ieV9icmFuZCIsImJyYW5kIiwicHJvZHVjdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIiR0aGlzIiwicGFyZW50Iiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiZmluZCIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImNsb25lIiwiYXBwZW5kVG8iLCJlIiwiYWRkQ2xhc3MiLCJldiIsImhhc0NsYXNzIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZG90cyIsImFycm93cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsIm1vYmlsZUZpcnN0IiwibmV4dEFycm93IiwicHJldkFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9