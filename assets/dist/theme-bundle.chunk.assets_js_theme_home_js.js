"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/theme/autoimex/autoimex_countdown.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/autoimex/autoimex_countdown.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(product_id) {
  var repeat = true;
  var showCountDay = true;
  var showDate = false;
  var product_Description_content = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.countdownValue_' + product_id).first();
  var result = product_Description_content.text().trim();
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.countdownValue_' + product_id).remove();
  if (result !== null && jquery__WEBPACK_IMPORTED_MODULE_4___default()("#countDownDate_" + product_id).length === 1) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#countDownDate_' + product_id).show();
    var endDateTime = result; //y,m,d,h:i:s

    // Set the date we're counting down to
    var countDownDate = new Date(endDateTime).getTime();
    var endDate = new Date(endDateTime);

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date

      if (countDownDate < now && repeat) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.productView-countDown').remove();
        return;
        // var days = Math.floor((now - countDownDate) / (1000 * 60 * 60 * 24)) + 1;
        // countDownDate += (1000 * 60 * 60 * 24) * days;
      }

      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);
      var strCountDown = "<span class='block-time'>" + showTime(hours) + "<span class='block-label'>hours</span></span><span class='block-time'>" + showTime(minutes) + "<span class='block-label'>mins</span></span><span class='block-time'>" + showTime(seconds) + "<span class='block-label'>secs</span></span>";
      if (showCountDay) {
        strCountDown = "<span class='block-time'>" + showDateFormat(days) + "<span class='block-label'>days</span></span>" + strCountDown;
      }
      if (showDate) {
        strCountDown += "<span class='block-date'>" + endDate.toDateString() + "</span>";
      }

      // Output the result in an element with id="demo"
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".countDownDate").html(strCountDown);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.productView-countDown').removeClass('hide');

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        var strCountDown = "<span class='block-time'>" + showTime(0) + "<span class='block-label'>hours</span></span><span class='block-time'>" + showTime(0) + "<span class='block-label'>minutes</span></span><span class='block-time'>" + showTime(0) + "<span class='block-label'>seconds</span></span>";
        if (showCountDay) {
          strCountDown = "<span class='block-time'>" + showDateFormat(0) + "<span class='block-label'>days</span></span>" + strCountDown;
        }
        if (showDate) {
          strCountDown += "<span class='block-date'>" + endDate.toDateString() + "</span>";
        }
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".countDownDate").html(strCountDown);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.productView-countDown').removeClass('hide');
      }
    }, 1000);
  }
  function showTime(t) {
    if (t < 10) {
      return "<span class='num'>0</span><span class='num'>" + t + "</span>";
    }
    return "<span class='num'>" + parseInt(t / 10) + "</span><span class='num'>" + t % 10 + "</span>";
  }
  function showDateFormat(t) {
    if (t < 10) {
      return "<span class='num'>0</span><span class='num'>" + t + "</span>";
    }
    if (t > 100) {
      return showDateFormat(parseInt(t / 10)) + "<span class='num'>" + t % 10 + "</span>";
    }
    return "<span class='num'>" + parseInt(t / 10) + "</span><span class='num'>" + t % 10 + "</span>";
  }
}

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _autoimex_autoimex_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./autoimex/autoimex_countdown */ "./assets/js/theme/autoimex/autoimex_countdown.js");





function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    this.sidebar_mobile();
    this.category_sidebar();
    this.carouselLeftSidebar();

    //Countdown time product detail
    var product_id = jquery__WEBPACK_IMPORTED_MODULE_5___default()('[data-product-id]').val();
    (0,_autoimex_autoimex_countdown__WEBPACK_IMPORTED_MODULE_8__["default"])(product_id);
  };
  _proto.category_sidebar = function category_sidebar() {
    if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('.all-categories-list').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('.all-categories-list .icon-dropdown').on('click', function () {
        var $this = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).parent();
        $this.siblings().removeClass('is-clicked');
        $this.toggleClass('is-clicked');
        $this.siblings().find("> .dropdown-category-list").slideUp("slow");
        $this.find("> .dropdown-category-list").slideToggle("slow");
      });
    }
  };
  _proto.sidebar_mobile = function sidebar_mobile() {
    if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('.page-sidebar').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('.page-sidebar').clone().appendTo(jquery__WEBPACK_IMPORTED_MODULE_5___default()("#sidebar-mobile .autoimex_MobileContent"));
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('.autoimex_sidebar-mobile').on('click', function (e) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').addClass('autoimex_open-Sidebar');
      });
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#sidebar-mobile .autoimex_close').on('click', function (ev) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').removeClass('autoimex_open-Sidebar');
      });
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('.bg-mobile').on('click', function (ev) {
        if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').hasClass('autoimex_open-Sidebar')) {
          jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').removeClass('autoimex_open-Sidebar');
        }
      });
    }
  };
  _proto.carouselLeftSidebar = function carouselLeftSidebar() {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('.sidebarBlock .productCarousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
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
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_6__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUV2Qiw2QkFBZSxvQ0FBU0MsVUFBVSxFQUFDO0VBRS9CLElBQUlDLE1BQU0sR0FBRyxJQUFJO0VBQ2pCLElBQUlDLFlBQVksR0FBRyxJQUFJO0VBQ3ZCLElBQUlDLFFBQVEsR0FBRyxLQUFLO0VBQ3BCLElBQUlDLDJCQUEyQixHQUFHTCw2Q0FBQyxDQUFDLGtCQUFrQixHQUFDQyxVQUFVLENBQUMsQ0FBQ0ssS0FBSyxDQUFDLENBQUM7RUFDMUUsSUFBSUMsTUFBTSxHQUFHRiwyQkFBMkIsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDdERULDZDQUFDLENBQUMsa0JBQWtCLEdBQUNDLFVBQVUsQ0FBQyxDQUFDUyxNQUFNLENBQUMsQ0FBQztFQUd6QyxJQUFHSCxNQUFNLEtBQUssSUFBSSxJQUFJUCw2Q0FBQyxDQUFDLGlCQUFpQixHQUFDQyxVQUFVLENBQUMsQ0FBQ1UsTUFBTSxLQUFLLENBQUMsRUFBRTtJQUVoRVgsNkNBQUMsQ0FBQyxpQkFBaUIsR0FBQ0MsVUFBVSxDQUFDLENBQUNXLElBQUksQ0FBQyxDQUFDO0lBRXRDLElBQUlDLFdBQVcsR0FBR04sTUFBTSxDQUFDOztJQUV6QjtJQUNBLElBQUlPLGFBQWEsR0FBRyxJQUFJQyxJQUFJLENBQUNGLFdBQVcsQ0FBQyxDQUFDRyxPQUFPLENBQUMsQ0FBQztJQUNuRCxJQUFJQyxPQUFPLEdBQUcsSUFBSUYsSUFBSSxDQUFDRixXQUFXLENBQUM7O0lBRW5DO0lBQ0EsSUFBSUssQ0FBQyxHQUFHQyxXQUFXLENBQUMsWUFBVztNQUUzQjtNQUNBLElBQUlDLEdBQUcsR0FBRyxJQUFJTCxJQUFJLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQzs7TUFFOUI7O01BR0EsSUFBR0YsYUFBYSxHQUFHTSxHQUFHLElB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LENBQUMsQ0FBQ2lDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztNQUNsRCxDQUFDLENBQUM7TUFFRmpDLDZDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNvRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVNZLEVBQUUsRUFBRTtRQUNyQyxJQUFJaEUsNkNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2lFLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1VBQzdDakUsNkNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2lDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztRQUNsRDtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUFBWSxNQUFBLENBRURLLG1CQUFtQixHQUFuQixTQUFBQSxvQkFBQSxFQUFzQjtJQUNsQmxELDZDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQ2tFLEtBQUssQ0FBQztNQUN0Q0MsUUFBUSxFQUFFLElBQUk7TUFDZEMsWUFBWSxFQUFFLENBQUM7TUFDZkMsY0FBYyxFQUFFLENBQUM7TUFDakJDLElBQUksRUFBRSxLQUFLO01BQ1hDLE1BQU0sRUFBRSxJQUFJO01BQ1o7TUFDQTtNQUNBQyxXQUFXLEVBQUUsSUFBSTtNQUNqQkMsU0FBUyxFQUFFLHVGQUF1RjtNQUNsR0MsU0FBUyxFQUFFLHVGQUF1RjtNQUNsR0MsVUFBVSxFQUFFLENBQ1I7UUFDSUMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLFFBQVEsRUFBRTtVQUNOVCxZQUFZLEVBQUUsQ0FBQztVQUNmQyxjQUFjLEVBQUUsQ0FBQztVQUNqQkMsSUFBSSxFQUFFLElBQUk7VUFDVkMsTUFBTSxFQUFFO1FBQ1o7TUFDSixDQUFDO0lBRVQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUEvQixJQUFBO0FBQUEsRUExRTZCSCxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2F1dG9pbWV4L2F1dG9pbWV4X2NvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9kdWN0X2lkKXtcclxuXHJcbiAgICB2YXIgcmVwZWF0ID0gdHJ1ZTtcclxuICAgIHZhciBzaG93Q291bnREYXkgPSB0cnVlO1xyXG4gICAgdmFyIHNob3dEYXRlID0gZmFsc2U7XHJcbiAgICB2YXIgcHJvZHVjdF9EZXNjcmlwdGlvbl9jb250ZW50ID0gJCgnLmNvdW50ZG93blZhbHVlXycrcHJvZHVjdF9pZCkuZmlyc3QoKTtcclxuICAgIHZhciByZXN1bHQgPSBwcm9kdWN0X0Rlc2NyaXB0aW9uX2NvbnRlbnQudGV4dCgpLnRyaW0oKTtcclxuICAgICQoJy5jb3VudGRvd25WYWx1ZV8nK3Byb2R1Y3RfaWQpLnJlbW92ZSgpO1xyXG5cclxuXHJcbiAgICBpZihyZXN1bHQgIT09IG51bGwgJiYgJChcIiNjb3VudERvd25EYXRlX1wiK3Byb2R1Y3RfaWQpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoJyNjb3VudERvd25EYXRlXycrcHJvZHVjdF9pZCkuc2hvdygpO1xyXG5cclxuICAgICAgICB2YXIgZW5kRGF0ZVRpbWUgPSByZXN1bHQ7Ly95LG0sZCxoOmk6c1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIGRhdGUgd2UncmUgY291bnRpbmcgZG93biB0b1xyXG4gICAgICAgIHZhciBjb3VudERvd25EYXRlID0gbmV3IERhdGUoZW5kRGF0ZVRpbWUpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVUaW1lKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjb3VudCBkb3duIGV2ZXJ5IDEgc2Vjb25kXHJcbiAgICAgICAgdmFyIHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0b2RheXMgZGF0ZSBhbmQgdGltZVxyXG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIG5vdyBhbiB0aGUgY291bnQgZG93biBkYXRlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY291bnREb3duRGF0ZSA8IG5vdyAmJiByZXBlYXQpe1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LWNvdW50RG93bicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGRheXMgPSBNYXRoLmZsb29yKChub3cgLSBjb3VudERvd25EYXRlKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgLy8gY291bnREb3duRGF0ZSArPSAoMTAwMCAqIDYwICogNjAgKiAyNCkgKiBkYXlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG4gICAgICAgICAgICAvLyBUaW1lIGNhbGN1bGF0aW9ucyBmb3IgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcclxuICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB2YXIgc3RyQ291bnREb3duID0gXCI8c3BhbiBjbGFzcz0nYmxvY2stdGltZSc+XCIrc2hvd1RpbWUoaG91cnMpICsgXCI8c3BhbiBjbGFzcz0nYmxvY2stbGFiZWwnPmhvdXJzPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nYmxvY2stdGltZSc+XCIgKyBzaG93VGltZShtaW51dGVzKSArIFwiPHNwYW4gY2xhc3M9J2Jsb2NrLWxhYmVsJz5taW5zPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nYmxvY2stdGltZSc+XCIgKyBzaG93VGltZShzZWNvbmRzKSArIFwiPHNwYW4gY2xhc3M9J2Jsb2NrLWxhYmVsJz5zZWNzPC9zcGFuPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgaWYoc2hvd0NvdW50RGF5KXtcclxuICAgICAgICAgICAgICAgIHN0ckNvdW50RG93biA9IFwiPHNwYW4gY2xhc3M9J2Jsb2NrLXRpbWUnPlwiK3Nob3dEYXRlRm9ybWF0KGRheXMpICsgXCI8c3BhbiBjbGFzcz0nYmxvY2stbGFiZWwnPmRheXM8L3NwYW4+PC9zcGFuPlwiICsgc3RyQ291bnREb3duO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHNob3dEYXRlKXtcclxuICAgICAgICAgICAgICAgIHN0ckNvdW50RG93biArPSBcIjxzcGFuIGNsYXNzPSdibG9jay1kYXRlJz5cIiArIGVuZERhdGUudG9EYXRlU3RyaW5nKCkgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gT3V0cHV0IHRoZSByZXN1bHQgaW4gYW4gZWxlbWVudCB3aXRoIGlkPVwiZGVtb1wiXHJcbiAgICAgICAgICAgICQoXCIuY291bnREb3duRGF0ZVwiKS5odG1sKHN0ckNvdW50RG93bik7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1jb3VudERvd24nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGNvdW50IGRvd24gaXMgb3Zlciwgd3JpdGUgc29tZSB0ZXh0IFxyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ckNvdW50RG93biA9IFwiPHNwYW4gY2xhc3M9J2Jsb2NrLXRpbWUnPlwiK3Nob3dUaW1lKDApICsgXCI8c3BhbiBjbGFzcz0nYmxvY2stbGFiZWwnPmhvdXJzPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nYmxvY2stdGltZSc+XCIgKyBzaG93VGltZSgwKSArIFwiPHNwYW4gY2xhc3M9J2Jsb2NrLWxhYmVsJz5taW51dGVzPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nYmxvY2stdGltZSc+XCIgKyBzaG93VGltZSgwKSArIFwiPHNwYW4gY2xhc3M9J2Jsb2NrLWxhYmVsJz5zZWNvbmRzPC9zcGFuPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIGlmKHNob3dDb3VudERheSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duID0gXCI8c3BhbiBjbGFzcz0nYmxvY2stdGltZSc+XCIrc2hvd0RhdGVGb3JtYXQoMCkgKyBcIjxzcGFuIGNsYXNzPSdibG9jay1sYWJlbCc+ZGF5czwvc3Bhbj48L3NwYW4+XCIgKyBzdHJDb3VudERvd247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihzaG93RGF0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duICs9IFwiPHNwYW4gY2xhc3M9J2Jsb2NrLWRhdGUnPlwiICsgZW5kRGF0ZS50b0RhdGVTdHJpbmcoKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChcIi5jb3VudERvd25EYXRlXCIpLmh0bWwoc3RyQ291bnREb3duKTtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1jb3VudERvd24nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1RpbWUodCl7XHJcbiAgICAgICAgaWYodCA8IDEwKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J251bSc+MDwvc3Bhbj48c3BhbiBjbGFzcz0nbnVtJz5cIit0K1wiPC9zcGFuPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nbnVtJz5cIitwYXJzZUludCh0LzEwKStcIjwvc3Bhbj48c3BhbiBjbGFzcz0nbnVtJz5cIisodCUxMCkrXCI8L3NwYW4+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0RhdGVGb3JtYXQodCl7XHJcbiAgICAgICAgaWYodCA8IDEwKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J251bSc+MDwvc3Bhbj48c3BhbiBjbGFzcz0nbnVtJz5cIit0K1wiPC9zcGFuPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0ID4gMTAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3dEYXRlRm9ybWF0KHBhcnNlSW50KHQvMTApKStcIjxzcGFuIGNsYXNzPSdudW0nPlwiKyh0JTEwKStcIjwvc3Bhbj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J251bSc+XCIrcGFyc2VJbnQodC8xMCkrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIrKHQlMTApK1wiPC9zcGFuPlwiO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi9hdXRvaW1leC9hdXRvaW1leF9jb3VudGRvd24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zaWRlYmFyX21vYmlsZSgpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlfc2lkZWJhcigpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxMZWZ0U2lkZWJhcigpO1xyXG4gICAgICAgICBcclxuICAgICAgICAvL0NvdW50ZG93biB0aW1lIHByb2R1Y3QgZGV0YWlsXHJcbiAgICAgICAgdmFyIHByb2R1Y3RfaWQgPSAkKCdbZGF0YS1wcm9kdWN0LWlkXScpLnZhbCgpO1xyXG4gICAgICAgIENvdW50ZG93bihwcm9kdWN0X2lkKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgY2F0ZWdvcnlfc2lkZWJhcigpIHtcclxuICAgICAgICBpZiAoJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQoJy5hbGwtY2F0ZWdvcmllcy1saXN0IC5pY29uLWRyb3Bkb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVVcCggXCJzbG93XCIgKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVG9nZ2xlKCBcInNsb3dcIiApO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaWRlYmFyX21vYmlsZSgpIHtcclxuICAgICAgICBpZiAoJCgnLnBhZ2Utc2lkZWJhcicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJCgnLnBhZ2Utc2lkZWJhcicpLmNsb25lKCkuYXBwZW5kVG8oJChcIiNzaWRlYmFyLW1vYmlsZSAuYXV0b2ltZXhfTW9iaWxlQ29udGVudFwiKSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuYXV0b2ltZXhfc2lkZWJhci1tb2JpbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2F1dG9pbWV4X29wZW4tU2lkZWJhcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJyNzaWRlYmFyLW1vYmlsZSAuYXV0b2ltZXhfY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhdXRvaW1leF9vcGVuLVNpZGViYXInKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuYmctbW9iaWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2F1dG9pbWV4X29wZW4tU2lkZWJhcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhdXRvaW1leF9vcGVuLVNpZGViYXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhcm91c2VsTGVmdFNpZGViYXIoKSB7XHJcbiAgICAgICAgJCgnLnNpZGViYXJCbG9jayAucHJvZHVjdENhcm91c2VsJykuc2xpY2soe1xyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8c3ZnIGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1hcnJvd1wiPjx1c2UgeGxpbms6aHJlZj1cIiNzbGljay1hcnJvdy1uZXh0MVwiPjwvdXNlPjwvc3ZnPicsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxzdmcgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLWFycm93XCI+PHVzZSB4bGluazpocmVmPVwiI3NsaWNrLWFycm93LXByZXYxXCI+PC91c2U+PC9zdmc+JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyIkIiwicHJvZHVjdF9pZCIsInJlcGVhdCIsInNob3dDb3VudERheSIsInNob3dEYXRlIiwicHJvZHVjdF9EZXNjcmlwdGlvbl9jb250ZW50IiwiZmlyc3QiLCJyZXN1bHQiLCJ0ZXh0IiwidHJpbSIsInJlbW92ZSIsImxlbmd0aCIsInNob3ciLCJlbmREYXRlVGltZSIsImNvdW50RG93bkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsImVuZERhdGUiLCJ4Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic3RyQ291bnREb3duIiwic2hvd1RpbWUiLCJzaG93RGF0ZUZvcm1hdCIsInRvRGF0ZVN0cmluZyIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImNsZWFySW50ZXJ2YWwiLCJ0IiwicGFyc2VJbnQiLCJQYWdlTWFuYWdlciIsInV0aWxzIiwiQ291bnRkb3duIiwiSG9tZSIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5Iiwic2lkZWJhcl9tb2JpbGUiLCJjYXRlZ29yeV9zaWRlYmFyIiwiY2Fyb3VzZWxMZWZ0U2lkZWJhciIsInZhbCIsIm9uIiwiJHRoaXMiLCJwYXJlbnQiLCJzaWJsaW5ncyIsInRvZ2dsZUNsYXNzIiwiZmluZCIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImNsb25lIiwiYXBwZW5kVG8iLCJlIiwiYWRkQ2xhc3MiLCJldiIsImhhc0NsYXNzIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZG90cyIsImFycm93cyIsIm1vYmlsZUZpcnN0IiwibmV4dEFycm93IiwicHJldkFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9