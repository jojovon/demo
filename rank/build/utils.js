define([],function(){function t(t){if($$.isArray(t)&&t.length>0)for(var e in t)$$(t[e].element).on(t[e].event,t[e].handler)}function e(t){var e=$$(t).parents(".page-content");$$(t).removeClass("fixed-bottom"),n(e[0])||$$(t).addClass("fixed-bottom")}function n(t){return t.scrollHeight>t.clientHeight}function o(){var t=document.documentElement.clientHeight;document.body.style.height=t+"px"}function i(t){var e=$$(t).html(),n=Template7.compile(e),o=n();$$(".toolbar").html('<div class="toolbar-inner">'+o+"</div>"),mainView.showToolbar()}return{bindEvents:t,setButtonPosition:e,resetBodyHeight:o,fixedButton:i}});