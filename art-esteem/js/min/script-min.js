function slideSwitch(){var e=$("div.active-ss"),a=e.next(),n=$("#fourth"),i=$("#first");n.hasClass("active-ss")===!0?(e.removeClass("active-ss"),i.addClass("active-ss")):(e.removeClass("active-ss"),a.addClass("active-ss"))}$(document).ready(function(){function e(e){$.fn.fullpage.moveTo(4,e)}function a(e){$.fn.fullpage.moveTo(5,e)}var n=$("#mainNav li a"),i=$("nav h1"),s=$("#sub-menu-programs"),t=$("#sub-menu-programs li.sub-menu"),o=$("#sub-menu-OMP"),l=$("#sub-menu-OMP li.sub-menu");n.addClass("whiteTitle"),i.addClass("whiteTitle"),$("#fullpage").fullpage({verticalCentered:!0,resize:!1,scrollingSpeed:700,css3:!0,anchors:["nav-1","nav-2","nav-3","nav-4","nav-5","nav-6","nav-7","nav-8","nav-9","nav-10","nav-11","nav-12","nav-13"],menu:"#mainNav",slidesNavigation:!1,autoScrolling:!0,onLeave:function(e,a,t){"1"==e&&"down"==t&&(i.removeClass("whiteTitle"),n.removeClass("whiteTitle")),"4"==e&&s.removeClass("slideDown"),"5"==e&&o.removeClass("slideDown")},afterLoad:function(e,a){"1"==a&&(i.addClass("whiteTitle"),n.addClass("whiteTitle")),"4"==a&&s.addClass("slideDown"),"5"==a&&o.addClass("slideDown")}}),t.on("click",function(a){a=$(this);var n=a.data("index");e(n)}),l.on("click",function(e){e=$(this);var n=e.data("index");a(n)}),$("#recommendations").owlCarousel({items:4,singleItem:!0,itemsScaleUp:!1,slideSpeed:400,paginationSpeed:800,rewindSpeed:1e3,autoPlay:3500,stopOnHover:!0,navigation:!0,navigationText:["<",">"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0}),$("#artwork").owlCarousel({items:4,singleItem:!0,itemsScaleUp:!1,slideSpeed:400,paginationSpeed:800,rewindSpeed:1e3,autoPlay:3500,stopOnHover:!0,navigation:!0,navigationText:["<",">"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0}),$("#photos").owlCarousel({items:4,singleItem:!0,itemsScaleUp:!1,slideSpeed:400,paginationSpeed:800,rewindSpeed:1e3,autoPlay:3500,stopOnHover:!0,navigation:!0,navigationText:["<",">"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0}),$("#ie_warning_button").on("click",function(){$("#ie_warning").fadeOut("slow")}),$(".button-center").wrap("<div class='link-wrapper'></div>")}),$(function(){setInterval(slideSwitch,4e3)});