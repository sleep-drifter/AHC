function slideSwitch(){var e=$("div.active-ss"),a=e.next(),n=$("#fourth"),i=$("#first"),s=1e3;n.hasClass("active-ss")===!0?(e.removeClass("active-ss"),i.addClass("active-ss"),e.fadeOut(),i.fadeIn()):(e.removeClass("active-ss"),a.addClass("active-ss"),e.fadeOut(),a.fadeIn())}$(document).ready(function(){$("#fullpage").fullpage({verticalCentered:!0,resize:!1,scrollingSpeed:700,css3:!0,anchors:["nav-1","nav-2","nav-3","nav-4","nav-5","nav-6","nav-7","nav-8","nav-9","nav-10"],menu:"#mainNav"}),$("#recommendations").owlCarousel({items:4,singleItem:!0,itemsScaleUp:!1,slideSpeed:400,paginationSpeed:800,rewindSpeed:1e3,autoPlay:3500,stopOnHover:!0,navigation:!0,navigationText:["<",">"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0}),$("#artwork").owlCarousel({items:4,singleItem:!0,itemsScaleUp:!1,slideSpeed:400,paginationSpeed:800,rewindSpeed:1e3,autoPlay:3500,stopOnHover:!0,navigation:!0,navigationText:["<",">"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0}),$("#photos").owlCarousel({items:4,singleItem:!0,itemsScaleUp:!1,slideSpeed:400,paginationSpeed:800,rewindSpeed:1e3,autoPlay:3500,stopOnHover:!0,navigation:!0,navigationText:["<",">"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0}),$("#ie_warning_button").on("click",function(){$("#ie_warning").fadeOut("slow")}),$(".button-center").wrap("<div class='link-wrapper'></div>")}),$(function(){setInterval(slideSwitch,3e3)});