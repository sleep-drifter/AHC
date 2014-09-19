!function($){$.rebox=function(e,t){this.settings=$.extend(!0,{},$.rebox.defaults,t),this.$el=e,this.$box=null,this.$items=null,this.idx=0,this.enable()},$.rebox.defaults={theme:"rebox",selector:null,prev:"&larr;",next:"&rarr;",loading:"Loading...",close:"&times;",speed:400,zIndex:1e3,cycle:!0,captionAttr:"title",template:"image",templates:{image:function(e,t,n){return $('<img src="'+e.attr("href")+'" class="'+t.theme+'-content" />').load(n)}}},$.rebox.setDefaults=function(e){$.rebox.defaults=$.extend(!0,{},$.rebox.defaults,e)},$.rebox.lookup={i:0},$.extend($.rebox.prototype,{enable:function(){var e=this;return e.$el.on("click.rebox",e.settings.selector,function(t){t.preventDefault(),e.open(this)})},open:function(e){var t=this;return t.$items=null===t.settings.selector?t.$el:t.$el.find(t.settings.selector),isNaN(e)&&(e=t.$items.index(e)),t.$box=$('<div class="'+t.settings.theme+'" style="display:none;"><a href="#" class="'+t.settings.theme+"-close "+t.settings.theme+'-button">'+t.settings.close+'</a><a href="#" class="'+t.settings.theme+"-prev "+t.settings.theme+'-button">'+t.settings.prev+'</a><a href="#" class="'+t.settings.theme+"-next "+t.settings.theme+'-button">'+t.settings.next+'</a><div class="'+t.settings.theme+'-contents"></div><div class="'+t.settings.theme+'-caption"><p></p></div></div>').appendTo("body").css("zIndex",t.settings.zIndex).fadeIn(t.settings.speed).on("click.rebox","."+t.settings.theme+"-close",function(e){e.preventDefault(),t.close()}).on("click.rebox","."+t.settings.theme+"-next",function(e){e.preventDefault(),t.next()}).on("click.rebox","."+t.settings.theme+"-prev",function(e){e.preventDefault(),t.prev()}),$(document).on("swipeLeft.rebox",function(e){t.next()}).on("swipeRight.rebox",function(e){t.prev()}).on("keydown.rebox",function(e){e.preventDefault();var n=window.event?event.keyCode:e.keyCode;switch(n){case 27:t.close();break;case 37:t.prev();break;case 39:t.next()}}),t.$el.trigger("rebox:open",[t]),t.goto(e),t.$el},close:function(){var e=this;return e.$box&&e.$box.length&&e.$box.fadeOut(e.settings.speed,function(t){e.$box.remove(),e.$box=null,e.$el.trigger("rebox:close",[e])}),$(document).off(".rebox"),e.$el},"goto":function(e){var t=this,n=$(t.$items[e]),s=n.attr(t.settings.captionAttr),o=t.$box.children("."+t.settings.theme+"-caption")[s?"show":"hide"]().children("p").text(s),i=t.$box.children("."+t.settings.theme+"-contents"),r=null;return n.length&&(t.idx=e,i.html('<div class="'+t.settings.theme+"-loading "+t.settings.theme+'-button">'+t.settings.loading+"</div>"),r=t.settings.templates[n.data("rebox-template")||t.settings.template](n,t.settings,function(e){i.empty().append($(this))}),1!=t.$items.length&&t.settings.cycle||(t.$box.children("."+t.settings.theme+"-prev")[0>=e?"hide":"show"](),t.$box.children("."+t.settings.theme+"-next")[e>=t.$items.length-1?"hide":"show"]()),t.$el.trigger("rebox:goto",[t,e,n,r])),t.$el},prev:function(){var e=this;return e.goto(0===e.idx?e.$items.length-1:e.idx-1)},next:function(){var e=this;return e.goto(e.idx===e.$items.length-1?0:e.idx+1)},disable:function(){var e=this;return e.close().off(".rebox").trigger("rebox:disable",[e])},destroy:function(){var e=this;return e.disable().removeData("rebox").trigger("rebox:destroy")},option:function(e,t){var n=this;return void 0!==t?(n.settings[e]=t,n.disable().enable()):n.settings[e]}}),$.fn.rebox=function(e){e=e||{};var t=Array.prototype.slice.call(arguments);if("string"==typeof e){if("option"==e&&"string"==typeof t[1]&&2===t.length){var n=$.rebox.lookup[$(this).data("rebox")];return n[e].apply(n,t.slice(1))}return this.each(function(){var n=$.rebox.lookup[$(this).data("rebox")];n[e].apply(n,t.slice(1))})}return this.each(function(){var t=$(this);$.rebox.lookup[++$.rebox.lookup.i]=new $.rebox(t,e),t.data("rebox",$.rebox.lookup.i)})}}(window.jQuery||window.Zepto||window.$);