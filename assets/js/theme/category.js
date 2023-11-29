import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import Countdown from './autoimex/autoimex_countdown';



export default class Category extends CatalogPage {
    onReady() {
        compareProducts(this.context.urls);
        
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        if($(window).outerWidth() <= 1024){
            this.sidebar_mobile();
        }
        
        this.category_sidebar();
        this.carouselLeftSidebar();

        $( window ).resize(function() {
            if($(window).outerWidth() <= 1024){
                if ($('.page-sidebar').length > 0) {
                    $('.page-sidebar').appendTo($("#sidebar-mobile .autoimex_MobileContent"));

                    $('.autoimex_sidebar-mobile').on('click', function(e) {
                        $('body').addClass('autoimex_open-Sidebar');
                    });

                    $('#sidebar-mobile .autoimex_close').on('click', function(ev) {
                        $('body').removeClass('autoimex_open-Sidebar');
                    });

                    $('.bg-mobile').on('click', function(ev) {
                        if ($('body').hasClass('autoimex_open-Sidebar')) {
                            $('body').removeClass('autoimex_open-Sidebar');
                        }
                    });
                }
            }
            else{
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
        Countdown(product_id);


    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            if($(window).outerWidth() <= 1024){
                this.sidebar_mobile();
            }

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }

    category_sidebar() {
        if ($('.all-categories-list').length > 0) {
            $('.all-categories-list .icon-dropdown').on('click', function() {
                var $this = $(this).parent();
                $this.siblings().removeClass('is-clicked');
                $this.toggleClass('is-clicked');
                $this.siblings().find("> .dropdown-category-list").slideUp( "slow" );
                $this.find("> .dropdown-category-list").slideToggle( "slow" );
           });
        }
    }

    sidebar_mobile() {
        if ($('.page-sidebar').length > 0) {
            $('.page-sidebar').appendTo($("#sidebar-mobile .autoimex_MobileContent"));

            $('.autoimex_sidebar-mobile').on('click', function(e) {
                $('body').addClass('autoimex_open-Sidebar');
            });

            $('#sidebar-mobile .autoimex_close').on('click', function(ev) {
                $('body').removeClass('autoimex_open-Sidebar');
            });

            $('.bg-mobile').on('click', function(ev) {
                if ($('body').hasClass('autoimex_open-Sidebar')) {
                    $('body').removeClass('autoimex_open-Sidebar');
                }
            });
        }
    }

    carouselLeftSidebar() {
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
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: true
                    }
                }
            ]
        });
    }

   


}
