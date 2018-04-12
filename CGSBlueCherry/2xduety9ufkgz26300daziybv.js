/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function(a,b,c){"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=c:(a[b]=c,"function"==typeof define&&define.amd&&define(b,[],function(){return c}))}(this,"jRespond",function(a,b,c){"use strict";return function(a){var b=[],d=[],e=a,f="",g="",i=0,j=100,k=500,l=k,m=function(){var a=0;return a="number"!=typeof window.innerWidth?0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth},n=function(a){if(a.length===c)o(a);else for(var b=0;b<a.length;b++)o(a[b])},o=function(a){var e=a.breakpoint,h=a.enter||c;b.push(a),d.push(!1),r(e)&&(h!==c&&h.call(null,{entering:f,exiting:g}),d[b.length-1]=!0)},p=function(){for(var a=[],e=[],h=0;h<b.length;h++){var i=b[h].breakpoint,j=b[h].enter||c,k=b[h].exit||c;"*"===i?(j!==c&&a.push(j),k!==c&&e.push(k)):r(i)?(j===c||d[h]||a.push(j),d[h]=!0):(k!==c&&d[h]&&e.push(k),d[h]=!1)}for(var l={entering:f,exiting:g},m=0;m<e.length;m++)e[m].call(null,l);for(var n=0;n<a.length;n++)a[n].call(null,l)},q=function(a){for(var b=!1,c=0;c<e.length;c++)if(a>=e[c].enter&&a<=e[c].exit){b=!0;break}b&&f!==e[c].label?(g=f,f=e[c].label,p()):b||""===f||(f="",p())},r=function(a){if("object"==typeof a){if(a.join().indexOf(f)>=0)return!0}else{if("*"===a)return!0;if("string"==typeof a&&f===a)return!0}},s=function(){var a=m();a!==i?(l=j,q(a)):l=k,i=a,setTimeout(s,l)};return s(),{addFunc:function(a){n(a)},getBreakpoint:function(){return f}}}}(this,this.document));;
/**
 * Swiper 3.0.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 6, 2015
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var t;return e(this).each(function(){var e=new Swiper(this,a);t||(t=e)}),t}}window.Swiper=function(e,t){function r(){return"horizontal"===h.params.direction}function s(){h.autoplayTimeoutId=setTimeout(function(){h.params.loop?(h.fixLoop(),h._slideNext()):h.isEnd?t.autoplayStopOnLast?h.stopAutoplay():h._slideTo(0):h._slideNext()},h.params.autoplay)}function i(e,a){var t=f(e.target);if(!t.is(a))if("string"==typeof a)t=t.parents(a);else if(a.nodeType){var r;return t.parents().each(function(e,t){t===a&&(r=a)}),r?a:void 0}return 0===t.length?void 0:t[0]}function n(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){h.onResize(),h.params.onObserverUpdate&&h.params.onObserverUpdate(h,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),h.observers.push(r)}function o(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(h.container.parents(".swiper-slide").length>0&&0===h.container.parents(".swiper-slide-active").length)return;for(var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,n=window.innerHeight,o=h.container.offset(),l=[[o.left,o.top],[o.left+h.width,o.top],[o.left,o.top+h.height],[o.left+h.width,o.top+h.height]],d=0;d<l.length;d++){var p=l[d];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+n&&(t=!0)}if(!t)return}r()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),39===a&&h.slideNext(),37===a&&h.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&h.slideNext(),38===a&&h.slidePrev())}}function l(e){e.originalEvent&&(e=e.originalEvent);var a=h._wheelEvent,t=0;if(e.detail)t=-e.detail;else if("mousewheel"===a)if(h.params.mousewheelForceToAxis)if(r()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=e.wheelDelta;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(h.params.mousewheelForceToAxis)if(r()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY;if(h.params.freeMode){var s=h.getWrapperTranslate()+t;if(s>0&&(s=0),s<h.maxTranslate()&&(s=h.maxTranslate()),h.setWrapperTransition(0),h.setWrapperTranslate(s),h.updateProgress(),h.updateActiveIndex(),0===s||s===h.maxTranslate())return}else(new Date).getTime()-h._lastWheelScrollTime>60&&(0>t?h.slideNext():h.slidePrev()),h._lastWheelScrollTime=(new Date).getTime();return h.params.autoplay&&h.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function d(e,a){e=f(e);var t,s,i,n,o;t=e.attr("data-swiper-parallax"),s=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),s||i||!t?(s=s?s:"0",i=i?i:"0"):r()?(s=t,i="0"):(i=t,s="0"),s=s.indexOf("%")>=0?parseInt(s,10)*a+"%":s*a+"px",i=i.indexOf("%")>=0?parseInt(i,10)*a+"%":i*a+"px",n=s,o=i,e.transform("translate3d("+n+", "+o+",0px)")}var p={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,keyboardControl:!1,mousewheelControl:!1,mousewheelForceToAxis:!1,hashnav:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,runCallbacksOnInit:!0};t=t||{};for(var u in p)if("undefined"==typeof t[u])t[u]=p[u];else if("object"==typeof t[u])for(var c in p[u])"undefined"==typeof t[u][c]&&(t[u][c]=p[u][c]);var h=this;h.params=t;var f;if(f="undefined"==typeof a?window.Dom7||window.Zepto||window.jQuery:a,f&&(h.container=f(e),0!==h.container.length)){if(h.container.length>1)return void h.container.each(function(){new Swiper(this,t)});h.container[0].swiper=h,h.container.data("swiper",h),h.container.addClass("swiper-container-"+h.params.direction),h.params.freeMode&&h.container.addClass("swiper-container-free-mode"),(h.params.parallax||h.params.watchSlidesVisibility)&&(h.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(h.params.effect)>=0&&(h.support.transforms3d?(h.params.watchSlidesProgress=!0,h.container.addClass("swiper-container-3d")):h.params.effect="slide"),"slide"!==h.params.effect&&h.container.addClass("swiper-container-"+h.params.effect),"cube"===h.params.effect&&(h.params.resistanceRatio=0,h.params.slidesPerView=1,h.params.slidesPerColumn=1,h.params.slidesPerGroup=1,h.params.centeredSlides=!1,h.params.spaceBetween=0),"fade"===h.params.effect&&(h.params.watchSlidesProgress=!0,h.params.spaceBetween=0),h.params.grabCursor&&h.support.touch&&(h.params.grabCursor=!1),h.wrapper=h.container.children("."+h.params.wrapperClass),h.params.pagination&&(h.paginationContainer=f(h.params.pagination),h.params.paginationClickable&&h.paginationContainer.addClass("swiper-pagination-clickable")),h.rtl=r()&&("rtl"===h.container[0].dir.toLowerCase()||"rtl"===h.container.css("direction")),h.rtl&&h.container.addClass("swiper-container-rtl"),h.rtl&&(h.wrongRTL="-webkit-box"===h.wrapper.css("display")),h.translate=0,h.progress=0,h.velocity=0,h.lockSwipeToNext=function(){h.params.allowSwipeToNext=!1},h.lockSwipeToPrev=function(){h.params.allowSwipeToPrev=!1},h.lockSwipes=function(){h.params.allowSwipeToNext=h.params.allowSwipeToPrev=!1},h.unlockSwipeToNext=function(){h.params.allowSwipeToNext=!0},h.unlockSwipeToPrev=function(){h.params.allowSwipeToPrev=!0},h.unlockSwipes=function(){h.params.allowSwipeToNext=h.params.allowSwipeToPrev=!0},h.params.slidesPerColumn>1&&h.container.addClass("swiper-container-multirow"),h.params.grabCursor&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grab",h.container[0].style.cursor="-moz-grab",h.container[0].style.cursor="grab"),h.imagesToLoad=[],h.imagesLoaded=0,h.loadImage=function(e,a,t,r){function s(){r&&r()}var i;e.complete&&t?s():a?(i=new Image,i.onload=s,i.onerror=s,i.src=a):s()},h.preloadImages=function(){function e(){"undefined"!=typeof h&&null!==h&&(void 0!==h.imagesLoaded&&h.imagesLoaded++,h.imagesLoaded===h.imagesToLoad.length&&(h.params.updateOnImagesReady&&h.update(),h.params.onImagesReady&&h.params.onImagesReady(h)))}h.imagesToLoad=h.container.find("img");for(var a=0;a<h.imagesToLoad.length;a++)h.loadImage(h.imagesToLoad[a],h.imagesToLoad[a].currentSrc||h.imagesToLoad[a].getAttribute("src"),!0,e)},h.autoplayTimeoutId=void 0,h.autoplaying=!1,h.autoplayPaused=!1,h.startAutoplay=function(){return"undefined"!=typeof h.autoplayTimeoutId?!1:h.params.autoplay?h.autoplaying?!1:(h.autoplaying=!0,h.params.onAutoplayStart&&h.params.onAutoplayStart(h),void s()):!1},h.stopAutoplay=function(){h.autoplayTimeoutId&&(h.autoplayTimeoutId&&clearTimeout(h.autoplayTimeoutId),h.autoplaying=!1,h.autoplayTimeoutId=void 0,h.params.onAutoplayStop&&h.params.onAutoplayStop(h))},h.pauseAutoplay=function(e){h.autoplayPaused||(h.autoplayTimeoutId&&clearTimeout(h.autoplayTimeoutId),h.autoplayPaused=!0,0===e?(h.autoplayPaused=!1,s()):h.wrapper.transitionEnd(function(){h.autoplayPaused=!1,h.autoplaying?s():h.stopAutoplay()}))},h.minTranslate=function(){return-h.snapGrid[0]},h.maxTranslate=function(){return-h.snapGrid[h.snapGrid.length-1]},h.updateContainerSize=function(){h.width=h.container[0].clientWidth,h.height=h.container[0].clientHeight,h.size=r()?h.width:h.height},h.updateSlidesSize=function(){h.slides=h.wrapper.children("."+h.params.slideClass),h.snapGrid=[],h.slidesGrid=[],h.slidesSizesGrid=[];var e,a=h.params.spaceBetween,t=0,s=0,i=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*h.size),h.virtualWidth=-a,h.slides.css(h.rtl?{marginLeft:"",marginTop:""}:{marginRight:"",marginBottom:""});var n;h.params.slidesPerColumn>1&&(n=Math.floor(h.slides.length/h.params.slidesPerColumn)===h.slides.length/h.params.slidesPerColumn?h.slides.length:Math.ceil(h.slides.length/h.params.slidesPerColumn)*h.params.slidesPerColumn);var o;for(e=0;e<h.slides.length;e++){o=0;var l=h.slides.eq(e);if(h.params.slidesPerColumn>1){var d,p,u,c,f=h.params.slidesPerColumn;"column"===h.params.slidesPerColumnFill?(p=Math.floor(e/f),u=e-p*f,d=p+u*n/f,l.css({"-webkit-box-ordinal-group":d,"-moz-box-ordinal-group":d,"-ms-flex-order":d,"-webkit-order":d,order:d})):(c=n/f,u=Math.floor(e/c),p=e-u*c),l.css({"margin-top":0!==u&&h.params.spaceBetween&&h.params.spaceBetween+"px"}).attr("data-swiper-column",p).attr("data-swiper-row",u)}"none"!==l.css("display")&&("auto"===h.params.slidesPerView?o=r()?l.outerWidth(!0):l.outerHeight(!0):(o=(h.size-(h.params.slidesPerView-1)*a)/h.params.slidesPerView,r()?h.slides[e].style.width=o+"px":h.slides[e].style.height=o+"px"),h.slides[e].swiperSlideSize=o,h.slidesSizesGrid.push(o),h.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-h.size/2-a),Math.abs(t)<.001&&(t=0),i%h.params.slidesPerGroup===0&&h.snapGrid.push(t),h.slidesGrid.push(t)):(i%h.params.slidesPerGroup===0&&h.snapGrid.push(t),h.slidesGrid.push(t),t=t+o+a),h.virtualWidth+=o+a,s=o,i++)}h.virtualWidth=Math.max(h.virtualWidth,h.size);var m;if(h.rtl&&h.wrongRTL&&("slide"===h.params.effect||"coverflow"===h.params.effect)&&h.wrapper.css({width:h.virtualWidth+h.params.spaceBetween+"px"}),h.params.slidesPerColumn>1&&(h.virtualWidth=(o+h.params.spaceBetween)*n,h.virtualWidth=Math.ceil(h.virtualWidth/h.params.slidesPerColumn)-h.params.spaceBetween,h.wrapper.css({width:h.virtualWidth+h.params.spaceBetween+"px"}),h.params.centeredSlides)){for(m=[],e=0;e<h.snapGrid.length;e++)h.snapGrid[e]<h.virtualWidth+h.snapGrid[0]&&m.push(h.snapGrid[e]);h.snapGrid=m}if(!h.params.centeredSlides){for(m=[],e=0;e<h.snapGrid.length;e++)h.snapGrid[e]<=h.virtualWidth-h.size&&m.push(h.snapGrid[e]);h.snapGrid=m,Math.floor(h.virtualWidth-h.size)>Math.floor(h.snapGrid[h.snapGrid.length-1])&&h.snapGrid.push(h.virtualWidth-h.size)}0===h.snapGrid.length&&(h.snapGrid=[0]),0!==h.params.spaceBetween&&h.slides.css(r()?h.rtl?{marginLeft:a+"px"}:{marginRight:a+"px"}:{marginBottom:a+"px"}),h.params.watchSlidesProgress&&h.updateSlidesOffset()},h.updateSlidesOffset=function(){for(var e=0;e<h.slides.length;e++)h.slides[e].swiperSlideOffset=r()?h.slides[e].offsetLeft:h.slides[e].offsetTop},h.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=h.translate||0),0!==h.slides.length){"undefined"==typeof h.slides[0].swiperSlideOffset&&h.updateSlidesOffset();var a=h.params.centeredSlides?-e+h.size/2:-e;h.rtl&&(a=h.params.centeredSlides?e-h.size/2:e);{h.container[0].getBoundingClientRect(),r()?"left":"top",r()?"right":"bottom"}h.slides.removeClass(h.params.slideVisibleClass);for(var t=0;t<h.slides.length;t++){var s=h.slides[t],i=h.params.centeredSlides===!0?s.swiperSlideSize/2:0,n=(a-s.swiperSlideOffset-i)/(s.swiperSlideSize+h.params.spaceBetween);if(h.params.watchSlidesVisibility){var o=-(a-s.swiperSlideOffset-i),l=o+h.slidesSizesGrid[t],d=o>=0&&o<h.size||l>0&&l<=h.size||0>=o&&l>=h.size;d&&h.slides.eq(t).addClass(h.params.slideVisibleClass)}s.progress=h.rtl?-n:n}}},h.updateProgress=function(e){"undefined"==typeof e&&(e=h.translate||0);var a=h.maxTranslate()-h.minTranslate();0===a?(h.progress=0,h.isBeginning=h.isEnd=!0):(h.progress=(e-h.minTranslate())/a,h.isBeginning=h.progress<=0,h.isEnd=h.progress>=1),h.isBeginning&&h.params.onReachBeginning&&h.params.onReachBeginning(h),h.isEnd&&h.params.onReachEnd&&h.params.onReachEnd(h),h.params.watchSlidesProgress&&h.updateSlidesProgress(e),h.params.onProgress&&h.params.onProgress(h,h.progress)},h.updateActiveIndex=function(){var e,a,t,r=h.rtl?h.translate:-h.translate;for(a=0;a<h.slidesGrid.length;a++)"undefined"!=typeof h.slidesGrid[a+1]?r>=h.slidesGrid[a]&&r<h.slidesGrid[a+1]-(h.slidesGrid[a+1]-h.slidesGrid[a])/2?e=a:r>=h.slidesGrid[a]&&r<h.slidesGrid[a+1]&&(e=a+1):r>=h.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/h.params.slidesPerGroup),t>=h.snapGrid.length&&(t=h.snapGrid.length-1),e!==h.activeIndex&&(h.snapIndex=t,h.previousIndex=h.activeIndex,h.activeIndex=e,h.updateClasses())},h.updateClasses=function(){h.slides.removeClass(h.params.slideActiveClass+" "+h.params.slideNextClass+" "+h.params.slidePrevClass);var e=h.slides.eq(h.activeIndex);if(e.addClass(h.params.slideActiveClass),e.next("."+h.params.slideClass).addClass(h.params.slideNextClass),e.prev("."+h.params.slideClass).addClass(h.params.slidePrevClass),h.bullets&&h.bullets.length>0){h.bullets.removeClass(h.params.bulletActiveClass);var a;h.params.loop?(a=h.activeIndex-h.loopedSlides,a>h.slides.length-1-2*h.loopedSlides&&(a-=h.slides.length-2*h.loopedSlides)):a="undefined"!=typeof h.snapIndex?h.snapIndex:h.activeIndex||0,h.bullets.eq(a).addClass(h.params.bulletActiveClass)}h.params.loop||(h.params.prevButton&&(h.isBeginning?f(h.params.prevButton).addClass(h.params.buttonDisabledClass):f(h.params.prevButton).removeClass(h.params.buttonDisabledClass)),h.params.nextButton&&(h.isEnd?f(h.params.nextButton).addClass(h.params.buttonDisabledClass):f(h.params.nextButton).removeClass(h.params.buttonDisabledClass)))},h.updatePagination=function(){if(h.params.pagination&&h.paginationContainer&&h.paginationContainer.length>0){for(var e="",a=h.params.loop?h.slides.length-2*h.loopedSlides:h.snapGrid.length,t=0;a>t;t++)e+=h.params.paginationBulletRender?h.params.paginationBulletRender(t,h.params.bulletClass):'<span class="'+h.params.bulletClass+'"></span>';h.paginationContainer.html(e),h.bullets=h.paginationContainer.find("."+h.params.bulletClass)}},h.update=function(e){function a(){r=Math.min(Math.max(h.translate,h.maxTranslate()),h.minTranslate()),h.setWrapperTranslate(r),h.updateActiveIndex(),h.updateClasses()}if(h.updateContainerSize(),h.updateSlidesSize(),h.updateProgress(),h.updatePagination(),h.updateClasses(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),e){var t,r;h.params.freeMode?a():(t="auto"===h.params.slidesPerView&&h.isEnd&&!h.params.centeredSlides?h.slideTo(h.slides.length-1,0,!1,!0):h.slideTo(h.activeIndex,0,!1,!0),t||a())}},h.onResize=function(){if(h.updateContainerSize(),h.updateSlidesSize(),h.updateProgress(),("auto"===h.params.slidesPerView||h.params.freeMode)&&h.updatePagination(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),h.params.freeMode){var e=Math.min(Math.max(h.translate,h.maxTranslate()),h.minTranslate());h.setWrapperTranslate(e),h.updateActiveIndex(),h.updateClasses()}else h.updateClasses(),"auto"===h.params.slidesPerView&&h.isEnd&&!h.params.centeredSlides?h.slideTo(h.slides.length-1,0,!1,!0):h.slideTo(h.activeIndex,0,!1,!0)};var m=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?m=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(m=["MSPointerDown","MSPointerMove","MSPointerUp"]),h.touchEvents={start:h.support.touch||!h.params.simulateTouch?"touchstart":m[0],move:h.support.touch||!h.params.simulateTouch?"touchmove":m[1],end:h.support.touch||!h.params.simulateTouch?"touchend":m[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===h.params.touchEventsTarget?h.container:h.wrapper).addClass("swiper-wp8-"+h.params.direction),h.events=function(e){var a=e?"off":"on",r=e?"removeEventListener":"addEventListener",s="container"===h.params.touchEventsTarget?h.container[0]:h.wrapper[0],i=h.support.touch?s:document,n=h.params.nested?!0:!1;h.browser.ie?(s[r](h.touchEvents.start,h.onTouchStart,!1),i[r](h.touchEvents.move,h.onTouchMove,n),i[r](h.touchEvents.end,h.onTouchEnd,!1)):(h.support.touch&&(s[r](h.touchEvents.start,h.onTouchStart,!1),s[r](h.touchEvents.move,h.onTouchMove,n),s[r](h.touchEvents.end,h.onTouchEnd,!1)),!t.simulateTouch||h.device.ios||h.device.android||(s[r]("mousedown",h.onTouchStart,!1),i[r]("mousemove",h.onTouchMove,n),i[r]("mouseup",h.onTouchEnd,!1))),window[r]("resize",h.onResize),h.params.nextButton&&f(h.params.nextButton)[a]("click",h.onClickNext),h.params.prevButton&&f(h.params.prevButton)[a]("click",h.onClickPrev),h.params.pagination&&h.params.paginationClickable&&f(h.paginationContainer)[a]("click","."+h.params.bulletClass,h.onClickIndex),(h.params.preventClicks||h.params.preventClicksPropagation)&&s[r]("click",h.preventClicks,!0)},h.attachEvents=function(){h.events()},h.detachEvents=function(){h.events(!0)},h.allowClick=!0,h.preventClicks=function(e){h.allowClick||(h.params.preventClicks&&e.preventDefault(),h.params.preventClicksPropagation&&(e.stopPropagation(),e.stopImmediatePropagation()))},h.onClickNext=function(e){e.preventDefault(),h.slideNext()},h.onClickPrev=function(e){e.preventDefault(),h.slidePrev()},h.onClickIndex=function(e){e.preventDefault();var a=f(this).index()*h.params.slidesPerGroup;h.params.loop&&(a+=h.loopedSlides),h.slideTo(a)},h.updateClickedSlide=function(e){var a=i(e,"."+h.params.slideClass);if(!a)return h.clickedSlide=void 0,void(h.clickedIndex=void 0);if(h.clickedSlide=a,h.clickedIndex=f(a).index(),h.params.slideToClickedSlide&&void 0!==h.clickedIndex&&h.clickedIndex!==h.activeIndex){var t,r=h.clickedIndex;if(h.params.loop)if(t=f(h.clickedSlide).attr("data-swiper-slide-index"),r>h.slides.length-h.params.slidesPerView)h.fixLoop(),r=h.wrapper.children("."+h.params.slideClass+'[data-swiper-slide-index="'+t+'"]').eq(0).index(),setTimeout(function(){h.slideTo(r)},0);else if(r<h.params.slidesPerView-1){h.fixLoop();var s=h.wrapper.children("."+h.params.slideClass+'[data-swiper-slide-index="'+t+'"]');r=s.eq(s.length-1).index(),setTimeout(function(){h.slideTo(r)},0)}else h.slideTo(r);else h.slideTo(r)}};var g,v,w,T,b,x,y,S,C,M="input, select, textarea, button",E=Date.now(),P=[];h.animating=!1,h.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var z;if(h.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),z="touchstart"===e.type,z||!("which"in e)||3!==e.which){if(h.params.noSwiping&&i(e,"."+h.params.noSwipingClass))return void(h.allowClick=!0);if(!h.params.swipeHandler||i(e,h.params.swipeHandler)){if(g=!0,v=!1,T=void 0,h.touches.startX=h.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,h.touches.startY=h.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,w=Date.now(),h.allowClick=!0,h.updateContainerSize(),h.swipeDirection=void 0,h.params.threshold>0&&(y=!1),"touchstart"!==e.type){var a=!0;f(e.target).is(M)&&(a=!1),document.activeElement&&f(document.activeElement).is(M)&&document.activeElement.blur(),a&&e.preventDefault()}h.params.onTouchStart&&h.params.onTouchStart(h,e)}}},h.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(z&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(h.params.onlyExternal)return v=!0,void(h.allowClick=!1);if(z&&document.activeElement&&e.target===document.activeElement&&f(e.target).is(M))return v=!0,void(h.allowClick=!1);if(h.params.onTouchMove&&h.params.onTouchMove(h,e),h.allowClick=!1,!(e.targetTouches&&e.targetTouches.length>1)){if(h.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,h.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof T){var a=180*Math.atan2(Math.abs(h.touches.currentY-h.touches.startY),Math.abs(h.touches.currentX-h.touches.startX))/Math.PI;T=r()?a>h.params.touchAngle:90-a>h.params.touchAngle}if(T&&h.params.onTouchMoveOpposite&&h.params.onTouchMoveOpposite(h,e),g){if(T)return void(g=!1);h.params.onSliderMove&&h.params.onSliderMove(h,e),e.preventDefault(),h.params.touchMoveStopPropagation&&!h.params.nested&&e.stopPropagation(),v||(t.loop&&h.fixLoop(),x="cube"===h.params.effect?(h.rtl?-h.translate:h.translate)||0:h.getWrapperTranslate(),h.setWrapperTransition(0),h.animating&&h.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),h.params.autoplay&&h.autoplaying&&(h.params.autoplayDisableOnInteraction?h.stopAutoplay():h.pauseAutoplay()),C=!1,h.params.grabCursor&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grabbing",h.container[0].style.cursor="-moz-grabbin",h.container[0].style.cursor="grabbing")),v=!0;var s=h.touches.diff=r()?h.touches.currentX-h.touches.startX:h.touches.currentY-h.touches.startY;s*=h.params.touchRatio,h.rtl&&(s=-s),h.swipeDirection=s>0?"prev":"next",b=s+x;var i=!0;if(s>0&&b>h.minTranslate()?(i=!1,h.params.resistance&&(b=h.minTranslate()-1+Math.pow(-h.minTranslate()+x+s,h.params.resistanceRatio))):0>s&&b<h.maxTranslate()&&(i=!1,h.params.resistance&&(b=h.maxTranslate()+1-Math.pow(h.maxTranslate()-x-s,h.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!h.params.allowSwipeToNext&&"next"===h.swipeDirection&&x>b&&(b=x),!h.params.allowSwipeToPrev&&"prev"===h.swipeDirection&&b>x&&(b=x),h.params.followFinger){if(h.params.threshold>0){if(!(Math.abs(s)>h.params.threshold||y))return void(b=x);if(!y)return y=!0,h.touches.startX=h.touches.currentX,h.touches.startY=h.touches.currentY,b=x,void(h.touches.diff=r()?h.touches.currentX-h.touches.startX:h.touches.currentY-h.touches.startY)}(h.params.freeMode||h.params.watchSlidesProgress)&&h.updateActiveIndex(),h.params.freeMode&&(0===P.length&&P.push({position:h.touches[r()?"startX":"startY"],time:w}),P.push({position:h.touches[r()?"currentX":"currentY"],time:(new Date).getTime()})),h.updateProgress(b),h.setWrapperTranslate(b)}}}}},h.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),h.params.onTouchEnd&&h.params.onTouchEnd(h,e),g){h.params.grabCursor&&v&&g&&(h.container[0].style.cursor="move",h.container[0].style.cursor="-webkit-grab",h.container[0].style.cursor="-moz-grab",h.container[0].style.cursor="grab");var a=Date.now(),t=a-w;if(h.allowClick&&(h.updateClickedSlide(e),h.params.onTap&&h.params.onTap(h,e),300>t&&a-E>300&&(S&&clearTimeout(S),S=setTimeout(function(){h&&(h.params.paginationHide&&h.paginationContainer.length>0&&!f(e.target).hasClass(h.params.bulletClass)&&h.paginationContainer.toggleClass(h.params.paginationHiddenClass),h.params.onClick&&h.params.onClick(h,e))},300)),300>t&&300>a-E&&(S&&clearTimeout(S),h.params.onDoubleTap&&h.params.onDoubleTap(h,e))),E=Date.now(),setTimeout(function(){h&&h.allowClick&&(h.allowClick=!0)},0),!g||!v||!h.swipeDirection||0===h.touches.diff||b===x)return void(g=v=!1);g=v=!1;var r;if(r=h.params.followFinger?h.rtl?h.translate:-h.translate:-b,h.params.freeMode){if(r<-h.minTranslate())return void h.slideTo(h.activeIndex);if(r>-h.maxTranslate())return void h.slideTo(h.slides.length-1);if(h.params.freeModeMomentum){if(P.length>1){var s=P.pop(),i=P.pop(),n=s.position-i.position,o=s.time-i.time;h.velocity=n/o,h.velocity=h.velocity/2,Math.abs(h.velocity)<.02&&(h.velocity=0),(o>150||(new Date).getTime()-s.time>300)&&(h.velocity=0)}else h.velocity=0;P.length=0;var l=1e3*h.params.freeModeMomentumRatio,d=h.velocity*l,p=h.translate+d;h.rtl&&(p=-p);var u,c=!1,m=20*Math.abs(h.velocity)*h.params.freeModeMomentumBounceRatio;p<h.maxTranslate()&&(h.params.freeModeMomentumBounce?(p+h.maxTranslate()<-m&&(p=h.maxTranslate()-m),u=h.maxTranslate(),c=!0,C=!0):p=h.maxTranslate()),p>h.minTranslate()&&(h.params.freeModeMomentumBounce?(p-h.minTranslate()>m&&(p=h.minTranslate()+m),u=h.minTranslate(),c=!0,C=!0):p=h.minTranslate()),0!==h.velocity&&(l=Math.abs(h.rtl?(-p-h.translate)/h.velocity:(p-h.translate)/h.velocity)),h.params.freeModeMomentumBounce&&c?(h.updateProgress(u),h.setWrapperTransition(l),h.setWrapperTranslate(p),h.onTransitionStart(),h.animating=!0,h.wrapper.transitionEnd(function(){C&&(h.params.onMomentumBounce&&h.params.onMomentumBounce(h),h.setWrapperTransition(h.params.speed),h.setWrapperTranslate(u),h.wrapper.transitionEnd(function(){h.onTransitionEnd()}))})):h.velocity?(h.updateProgress(p),h.setWrapperTransition(l),h.setWrapperTranslate(p),h.onTransitionStart(),h.animating||(h.animating=!0,h.wrapper.transitionEnd(function(){h.onTransitionEnd()}))):h.updateProgress(p),h.updateActiveIndex()}return void((!h.params.freeModeMomentum||t>=h.params.longSwipesMs)&&(h.updateProgress(),h.updateActiveIndex()))}var T,y=0,M=h.slidesSizesGrid[0];for(T=0;T<h.slidesGrid.length;T+=h.params.slidesPerGroup)"undefined"!=typeof h.slidesGrid[T+h.params.slidesPerGroup]?r>=h.slidesGrid[T]&&r<h.slidesGrid[T+h.params.slidesPerGroup]&&(y=T,M=h.slidesGrid[T+h.params.slidesPerGroup]-h.slidesGrid[T]):r>=h.slidesGrid[T]&&(y=T,M=h.slidesGrid[h.slidesGrid.length-1]-h.slidesGrid[h.slidesGrid.length-2]);var z=(r-h.slidesGrid[y])/M;if(t>h.params.longSwipesMs){if(!h.params.longSwipes)return void h.slideTo(h.activeIndex);"next"===h.swipeDirection&&h.slideTo(z>=h.params.longSwipesRatio?y+h.params.slidesPerGroup:y),"prev"===h.swipeDirection&&h.slideTo(z>1-h.params.longSwipesRatio?y+h.params.slidesPerGroup:y)}else{if(!h.params.shortSwipes)return void h.slideTo(h.activeIndex);"next"===h.swipeDirection&&h.slideTo(y+h.params.slidesPerGroup),"prev"===h.swipeDirection&&h.slideTo(y)}}},h._slideTo=function(e,a){return h.slideTo(e,a,!0,!0)},h.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),h.snapIndex=Math.floor(e/h.params.slidesPerGroup),h.snapIndex>=h.snapGrid.length&&(h.snapIndex=h.snapGrid.length-1);var i=-h.snapGrid[h.snapIndex];h.params.autoplay&&h.autoplaying&&(s||!h.params.autoplayDisableOnInteraction?h.pauseAutoplay(a):h.stopAutoplay()),h.updateProgress(i);for(var n=0;n<h.slidesGrid.length;n++)-i>=h.slidesGrid[n]&&(e=n);if("undefined"==typeof a&&(a=h.params.speed),h.previousIndex=h.activeIndex||0,h.activeIndex=e,i===h.translate)return h.updateClasses(),!1;h.onTransitionStart(t);r()?i:0,r()?0:i;return 0===a?(h.setWrapperTransition(0),h.setWrapperTranslate(i),h.onTransitionEnd(t)):(h.setWrapperTransition(a),h.setWrapperTranslate(i),h.animating||(h.animating=!0,h.wrapper.transitionEnd(function(){h.onTransitionEnd(t)}))),h.updateClasses(),!0},h.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),h.lazy&&h.lazy.onTransitionStart(),e&&(h.params.onTransitionStart&&h.params.onTransitionStart(h),h.params.onSlideChangeStart&&h.activeIndex!==h.previousIndex&&h.params.onSlideChangeStart(h))},h.onTransitionEnd=function(e){h.animating=!1,h.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),h.lazy&&h.lazy.onTransitionEnd(),e&&(h.params.onTransitionEnd&&h.params.onTransitionEnd(h),h.params.onSlideChangeEnd&&h.activeIndex!==h.previousIndex&&h.params.onSlideChangeEnd(h))},h.slideNext=function(e,a,t){if(h.params.loop){if(h.animating)return!1;h.fixLoop();{h.container[0].clientLeft}return h.slideTo(h.activeIndex+h.params.slidesPerGroup,a,e,t)}return h.slideTo(h.activeIndex+h.params.slidesPerGroup,a,e,t)},h._slideNext=function(e){return h.slideNext(!0,e,!0)},h.slidePrev=function(e,a,t){if(h.params.loop){if(h.animating)return!1;h.fixLoop();{h.container[0].clientLeft}return h.slideTo(h.activeIndex-1,a,e,t)}return h.slideTo(h.activeIndex-1,a,e,t)},h._slidePrev=function(e){return h.slidePrev(!0,e,!0)},h.slideReset=function(e,a){return h.slideTo(h.activeIndex,a,e)},h.setWrapperTransition=function(e,a){h.wrapper.transition(e),h.params.onSetTransition&&h.params.onSetTransition(h,e),"slide"!==h.params.effect&&h.effects[h.params.effect]&&h.effects[h.params.effect].setTransition(e),h.params.parallax&&h.parallax&&h.parallax.setTransition(e),h.params.scrollbar&&h.scrollbar&&h.scrollbar.setTransition(e),h.params.control&&h.controller&&h.controller.setTransition(e,a)},h.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;r()?s=h.rtl?-e:e:i=e,h.wrapper.transform(h.support.transforms3d?"translate3d("+s+"px, "+i+"px, "+n+"px)":"translate("+s+"px, "+i+"px)"),h.translate=r()?s:i,a&&h.updateActiveIndex(),"slide"!==h.params.effect&&h.effects[h.params.effect]&&h.effects[h.params.effect].setTranslate(h.translate),h.params.parallax&&h.parallax&&h.parallax.setTranslate(h.translate),h.params.scrollbar&&h.scrollbar&&h.scrollbar.setTranslate(h.translate),h.params.control&&h.controller&&h.controller.setTranslate(h.translate,t),h.params.hashnav&&h.hashnav&&h.hashnav.setHash(),h.params.onSetTranslate&&h.params.onSetTranslate(h,h.translate)},h.getTranslate=function(e,a){var t,r,s,i;return"undefined"==typeof a&&(a="x"),s=window.getComputedStyle(e,null),window.WebKitCSSMatrix?i=new WebKitCSSMatrix("none"===s.webkitTransform?"":s.webkitTransform):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?i.m41:parseFloat(16===t.length?t[12]:t[4])),"y"===a&&(r=window.WebKitCSSMatrix?i.m42:parseFloat(16===t.length?t[13]:t[5])),h.rtl&&r&&(r=-r),r||0},h.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=r()?"x":"y"),h.getTranslate(h.wrapper[0],e)},h.observers=[],h.initObservers=function(){if(h.params.observeParents)for(var e=h.container.parents(),a=0;a<e.length;a++)n(e[a]);n(h.container[0],{childList:!1}),n(h.wrapper[0],{attributes:!1})},h.disconnectObservers=function(){for(var e=0;e<h.observers.length;e++)h.observers[e].disconnect();h.observers=[]},h.createLoop=function(){h.wrapper.children("."+h.params.slideClass+"."+h.params.slideDuplicateClass).remove();var e=h.wrapper.children("."+h.params.slideClass);h.loopedSlides=parseInt(h.params.loopedSlides||h.params.slidesPerView,10),h.loopedSlides=h.loopedSlides+h.params.loopAdditionalSlides,h.loopedSlides>e.length&&(h.loopedSlides=e.length);var a,t=[],r=[];for(e.each(function(a,s){var i=f(this);a<h.loopedSlides&&r.push(s),a<e.length&&a>=e.length-h.loopedSlides&&t.push(s),i.attr("data-swiper-slide-index",a)}),a=0;a<r.length;a++)h.wrapper.append(f(r[a].cloneNode(!0)).addClass(h.params.slideDuplicateClass));for(a=t.length-1;a>=0;a--)h.wrapper.prepend(f(t[a].cloneNode(!0)).addClass(h.params.slideDuplicateClass))},h.destroyLoop=function(){h.wrapper.children("."+h.params.slideClass+"."+h.params.slideDuplicateClass).remove()},h.fixLoop=function(){var e;h.activeIndex<h.loopedSlides?(e=h.slides.length-3*h.loopedSlides+h.activeIndex,e+=h.loopedSlides,h.slideTo(e,0,!1,!0)):("auto"===h.params.slidesPerView&&h.activeIndex>=2*h.loopedSlides||h.activeIndex>h.slides.length-2*h.params.slidesPerView)&&(e=-h.slides.length+h.activeIndex+h.loopedSlides,e+=h.loopedSlides,h.slideTo(e,0,!1,!0))},h.appendSlide=function(e){if(h.params.loop&&h.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&h.wrapper.append(e[a]);
else h.wrapper.append(e);h.params.loop&&h.createLoop(),h.params.observer&&h.support.observer||h.update(!0)},h.prependSlide=function(e){h.params.loop&&h.destroyLoop();var a=h.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&h.wrapper.prepend(e[t]);a=h.activeIndex+e.length}else h.wrapper.prepend(e);h.params.loop&&h.createLoop(),h.params.observer&&h.support.observer||h.update(!0),h.slideTo(a,0,!1)},h.removeSlide=function(e){h.params.loop&&h.destroyLoop();var a,t=h.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],h.slides[a]&&h.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,h.slides[a]&&h.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);h.params.observer&&h.support.observer||h.update(!0),h.slideTo(t,0,!1)},h.removeAllSlides=function(){for(var e=[],a=0;a<h.slides.length;a++)e.push(a);h.removeSlide(e)},h.effects={fade:{setTranslate:function(){for(var e=0;e<h.slides.length;e++){var a=h.slides.eq(e),t=a[0].swiperSlideOffset,s=-t-h.translate,i=0;r()||(i=s,s=0);var n=h.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:n}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){h.slides.transition(e)}},cube:{setTranslate:function(){var e,a=0;h.params.cube.shadow&&(r()?(e=h.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=f('<div class="swiper-cube-shadow"></div>'),h.wrapper.append(e)),e.css({height:h.width+"px"})):(e=h.container.find(".swiper-cube-shadow"),0===e.length&&(e=f('<div class="swiper-cube-shadow"></div>'),h.container.append(e))));for(var t=0;t<h.slides.length;t++){var s=h.slides.eq(t),i=90*t,n=Math.floor(i/360);h.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(s[0].progress,1),-1),l=0,d=0,p=0;t%4===0?(l=4*-n*h.size,p=0):(t-1)%4===0?(l=0,p=4*-n*h.size):(t-2)%4===0?(l=h.size+4*n*h.size,p=h.size):(t-3)%4===0&&(l=-h.size,p=3*h.size+4*h.size*n),h.rtl&&(l=-l),r()||(d=l,l=0);var u="rotateX("+(r()?0:-i)+"deg) rotateY("+(r()?i:0)+"deg) translate3d("+l+"px, "+d+"px, "+p+"px)";if(1>=o&&o>-1&&(a=90*t+90*o,h.rtl&&(a=90*-t-90*o)),s.transform(u),h.params.cube.slideShadows){var c=s.find(r()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),m=s.find(r()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===c.length&&(c=f('<div class="swiper-slide-shadow-'+(r()?"left":"top")+'"></div>'),s.append(c)),0===m.length&&(m=f('<div class="swiper-slide-shadow-'+(r()?"right":"bottom")+'"></div>'),s.append(m));{s[0].progress}c.length&&(c[0].style.opacity=-s[0].progress),m.length&&(m[0].style.opacity=s[0].progress)}}if(h.wrapper.css({"-webkit-transform-origin":"50% 50% -"+h.size/2+"px","-moz-transform-origin":"50% 50% -"+h.size/2+"px","-ms-transform-origin":"50% 50% -"+h.size/2+"px","transform-origin":"50% 50% -"+h.size/2+"px"}),h.params.cube.shadow)if(r())e.transform("translate3d(0px, "+(h.width/2+h.params.cube.shadowOffset)+"px, "+-h.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+h.params.cube.shadowScale+")");else{var g=Math.abs(a)-90*Math.floor(Math.abs(a)/90),v=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),w=h.params.cube.shadowScale,T=h.params.cube.shadowScale/v,b=h.params.cube.shadowOffset;e.transform("scale3d("+w+", 1, "+T+") translate3d(0px, "+(h.height/2+b)+"px, "+-h.height/2/T+"px) rotateX(-90deg)")}var x=h.isSafari||h.isUiWebView?-h.size/2:0;h.wrapper.transform("translate3d(0px,0,"+x+"px) rotateX("+(r()?0:a)+"deg) rotateY("+(r()?-a:0)+"deg)")},setTransition:function(e){h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),h.params.cube.shadow&&!r()&&h.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=h.translate,a=r()?-e+h.width/2:-e+h.height/2,t=r()?h.params.coverflow.rotate:-h.params.coverflow.rotate,s=h.params.coverflow.depth,i=0,n=h.slides.length;n>i;i++){var o=h.slides.eq(i),l=h.slidesSizesGrid[i],d=o[0].swiperSlideOffset,p=(a-d-l/2)/l*h.params.coverflow.modifier,u=r()?t*p:0,c=r()?0:t*p,m=-s*Math.abs(p),g=r()?0:h.params.coverflow.stretch*p,v=r()?h.params.coverflow.stretch*p:0;Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var w="translate3d("+v+"px,"+g+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(w),o[0].style.zIndex=-Math.abs(Math.round(p))+1,h.params.coverflow.slideShadows){var T=o.find(r()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),b=o.find(r()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===T.length&&(T=f('<div class="swiper-slide-shadow-'+(r()?"left":"top")+'"></div>'),o.append(T)),0===b.length&&(b=f('<div class="swiper-slide-shadow-'+(r()?"right":"bottom")+'"></div>'),o.append(b)),T.length&&(T[0].style.opacity=p>0?p:0),b.length&&(b[0].style.opacity=-p>0?-p:0)}}if(window.navigator.pointerEnabled||window.navigator.msPointerEnabled){var x=h.wrapper.style;x.perspectiveOrigin=a+"px 50%"}},setTransition:function(e){h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},h.lazy={initialImageLoaded:!1,loadImageInSlide:function(e){if("undefined"!=typeof e&&0!==h.slides.length){var a=h.slides.eq(e),t=a.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");0!==t.length&&t.each(function(){var e=f(this);e.addClass("swiper-lazy-loading");var t=e.attr("data-src");h.loadImage(e[0],t,!1,function(){e.attr("src",t),e.removeAttr("data-src"),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),a.find(".swiper-lazy-preloader, .preloader").remove(),h.params.onLazyImageLoaded&&h.params.onLazyImageLoaded(h,a[0],e[0])}),h.params.onLazyImageLoad&&h.params.onLazyImageLoad(h,a[0],e[0])})}},load:function(){if(h.params.watchSlidesVisibility)h.wrapper.children("."+h.params.slideVisibleClass).each(function(){h.lazy.loadImageInSlide(f(this).index())});else if(h.params.slidesPerView>1)for(var e=h.activeIndex;e<h.activeIndex+h.params.slidesPerView;e++)h.slides[e]&&h.lazy.loadImageInSlide(e);else h.lazy.loadImageInSlide(h.activeIndex);if(h.params.lazyLoadingInPrevNext){var a=h.wrapper.children("."+h.params.slideNextClass);a.length>0&&h.lazy.loadImageInSlide(a.index());var t=h.wrapper.children("."+h.params.slidePrevClass);t.length>0&&h.loadImageInSlide(t.index())}},onTransitionStart:function(){h.params.lazyLoading&&(h.params.lazyLoadingOnTransitionStart||!h.params.lazyLoadingOnTransitionStart&&!h.lazy.initialImageLoaded)&&(h.lazy.initialImageLoaded=!0,h.lazy.load())},onTransitionEnd:function(){h.params.lazyLoading&&!h.params.lazyLoadingOnTransitionStart&&h.lazy.load()}},h.scrollbar={set:function(){if(h.params.scrollbar){var e=h.scrollbar;e.track=f(h.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=f('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=r()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=h.size/h.virtualWidth,e.moveDivider=e.divider*(e.trackSize/h.size),e.dragSize=e.trackSize*e.divider,r()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.track[0].style.display=e.divider>=1?"none":"",h.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(h.params.scrollbar){var e,a=h.scrollbar,t=(h.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*h.progress,h.rtl&&r()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),r()?(a.drag.transform("translate3d("+e+"px, 0, 0)"),a.drag[0].style.width=t+"px"):(a.drag.transform("translate3d(0px, "+e+"px, 0)"),a.drag[0].style.height=t+"px"),h.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){h.params.scrollbar&&h.scrollbar.drag.transition(e)}},h.controller={setTranslate:function(e,a){var t,r,s=h.params.control;if(h.isArray(s))for(var i=0;i<s.length;i++)s[i]!==a&&s[i]instanceof Swiper&&(e=s[i].rtl&&"horizontal"===s[i].params.direction?-h.translate:h.translate,t=(s[i].maxTranslate()-s[i].minTranslate())/(h.maxTranslate()-h.minTranslate()),r=(e-h.minTranslate())*t+s[i].minTranslate(),h.params.controlInverse&&(r=s[i].maxTranslate()-r),s[i].updateProgress(r),s[i].setWrapperTranslate(r,!1,h),s[i].updateActiveIndex());else s instanceof Swiper&&a!==s&&(e=s.rtl&&"horizontal"===s.params.direction?-h.translate:h.translate,t=(s.maxTranslate()-s.minTranslate())/(h.maxTranslate()-h.minTranslate()),r=(e-h.minTranslate())*t+s.minTranslate(),h.params.controlInverse&&(r=s.maxTranslate()-r),s.updateProgress(r),s.setWrapperTranslate(r,!1,h),s.updateActiveIndex())},setTransition:function(e,a){var t=h.params.control;if(h.isArray(t))for(var r=0;r<t.length;r++)t[r]!==a&&t[r]instanceof Swiper&&t[r].setWrapperTransition(e,h);else t instanceof Swiper&&a!==t&&t.setWrapperTransition(e,h)}},h.hashnav={init:function(){if(h.params.hashnav){h.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=h.slides.length;r>t;t++){var s=h.slides.eq(t),i=s.attr("data-hash");if(i===e&&!s.hasClass(h.params.slideDuplicateClass)){var n=s.index();h.slideTo(n,a,h.params.runCallbacksOnInit,!0)}}}},setHash:function(){h.hashnav.initialized&&h.params.hashnav&&(document.location.hash=h.slides.eq(h.activeIndex).attr("data-hash")||"")}},h.disableKeyboardControl=function(){f(document).off("keydown",o)},h.enableKeyboardControl=function(){f(document).on("keydown",o)},h._wheelEvent=!1,h._lastWheelScrollTime=(new Date).getTime(),h.params.mousewheelControl){if(void 0!==document.onmousewheel&&(h._wheelEvent="mousewheel"),!h._wheelEvent)try{new WheelEvent("wheel"),h._wheelEvent="wheel"}catch(I){}h._wheelEvent||(h._wheelEvent="DOMMouseScroll")}return h.disableMousewheelControl=function(){return h._wheelEvent?(h.container.off(h._wheelEvent,l),!0):!1},h.enableMousewheelControl=function(){return h._wheelEvent?(h.container.on(h._wheelEvent,l),!0):!1},h.parallax={setTranslate:function(){h.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,h.progress)}),h.slides.each(function(){var e=f(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);d(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=h.params.speed),h.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=f(this),t=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(t=0),a.transition(t)})}},h.init=function(){h.params.loop&&h.createLoop(),h.updateContainerSize(),h.updateSlidesSize(),h.updatePagination(),h.params.scrollbar&&h.scrollbar&&h.scrollbar.set(),"slide"!==h.params.effect&&h.effects[h.params.effect]&&(h.params.loop||h.updateProgress(),h.effects[h.params.effect].setTranslate()),h.params.loop?h.slideTo(h.params.initialSlide+h.loopedSlides,0,h.params.runCallbacksOnInit):(h.slideTo(h.params.initialSlide,0,h.params.runCallbacksOnInit),0===h.params.initialSlide&&(h.parallax&&h.params.parallax&&h.parallax.setTranslate(),h.lazy&&h.params.lazyLoading&&h.lazy.load())),h.attachEvents(),h.params.observer&&h.support.observer&&h.initObservers(),h.params.preloadImages&&!h.params.lazyLoading&&h.preloadImages(),h.params.autoplay&&h.startAutoplay(),h.params.keyboardControl&&h.enableKeyboardControl&&h.enableKeyboardControl(),h.params.mousewheelControl&&h.enableMousewheelControl&&h.enableMousewheelControl(),h.params.hashnav&&h.hashnav&&h.hashnav.init(),h.params.onInit&&h.params.onInit(h)},h.destroy=function(e){h.detachEvents(),h.disconnectObservers(),h.params.keyboardControl&&h.disableKeyboardControl&&h.disableKeyboardControl(),h.params.mousewheelControl&&h.disableMousewheelControl&&h.disableMousewheelControl(),h.params.onDestroy&&h.params.onDestroy(),e!==!1&&(h=null)},h.init(),h}},Swiper.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=(e.match(/(iPod)(.*OS\s([\d_]+))?/),!t&&e.match(/(iPhone\sOS)\s([\d_]+)/));return{ios:t||r||t,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="WebkitBox msFlexbox MsFlexbox WebkitFlex MozBox flex".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()}};for(var a=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],s=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var i,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,s=0;s<n.childNodes.length;s++)r.push(n.childNodes[s])}else for(i=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],s=0;s<i.length;s++)i[s]&&r.push(i[s])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(s=0;s<a.length;s++)r.push(a[s]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e)},data:function(e,a){if("undefined"==typeof a){if(this[0]){var t=this[0].getAttribute("data-"+e);return t?t:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var r=0;r<this.length;r++){var s=this[r];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,s){function i(e){var s=e.target;if(a(s).is(t))r.call(s,e);else for(var i=a(s).parents(),n=0;n<i.length;n++)a(i[n]).is(t)&&r.call(i[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],s=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,s);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:i}),this[n].addEventListener(l[o],i,s);return this},off:function(e,a,t,r){for(var s=e.split(" "),i=0;i<s.length;i++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(s[i],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(s[i],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function s(n){t(n),i.off(e,a,s,r)}var i=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),i.on(e,a,s,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(s){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,s=e.clientLeft||t.clientLeft||0,i=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+i-r,left:a.left+n-s}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},is:function(t){if(!this[0])return!1;var r,s;if("string"==typeof t){var i=this[0];if(i===document)return t===document;if(i===window)return t===window;if(i.matches)return i.matches(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t);if(i.mozMatchesSelector)return i.mozMatchesSelector(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);for(r=a(t),s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}return void 0},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a;s.firstChild;)this[t].appendChild(s.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a,r=s.childNodes.length-1;r>=0;r--)this[t].insertBefore(s.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].parentNode;s;)e?a(s).is(e)&&t.push(s):t.push(s),s=s.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].querySelectorAll(a),i=0;i<s.length;i++)t.push(s[i]);return new e(t)},children:function(t){for(var r=[],s=0;s<this.length;s++)for(var i=this[s].childNodes,n=0;n<i.length;n++)t?1===i[n].nodeType&&a(i[n]).is(t)&&r.push(i[n]):1===i[n].nodeType&&r.push(i[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var s=a(arguments[e]);for(t=0;t<s.length;t++)r[r.length]=s[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),t=["jQuery","Zepto","Dom7"],r=0;r<t.length;r++)window[t[r]]&&e(window[t[r]]);var s;s="undefined"==typeof a?window.Dom7||window.Zepto||window.jQuery:a,s&&("transitionEnd"in s.fn||(s.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this}),"transform"in s.fn||(s.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in s.fn||(s.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}))}(),"undefined"!=typeof module?module.exports=Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});
//# sourceMappingURL=maps/swiper.min.js.map;
// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('width', '')
              .css('position', '')
              .css('top', '');
            s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('width', s.stickyElement.width())
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i];
        if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
          s.stickyElement.css('width', $(s.getWidthFrom).width());
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName 
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom,
            responsiveWidth: o.responsiveWidth
          });
        });
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var unstickyElement = $(this);

          var removeIdx = -1;
          for (var i = 0; i < sticked.length; i++)
          {
            if (sticked[i].stickyElement.get(0) == unstickyElement.get(0))
            {
                removeIdx = i;
            }
          }
          if(removeIdx != -1)
          {
            sticked.splice(removeIdx,1);
            unstickyElement.unwrap();
            unstickyElement.removeAttr('style');
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }

  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);
;
/**
* jquery.matchHeight-min.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(c){var n=-1,f=-1,r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-h(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},h=function(a){return parseFloat(a)||0},p=function(a){var b={byRow:!0,remove:!1,property:"height"};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=function(a){a=
p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),g=c(a),k=[g],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=g.parents().filter(":hidden");m.each(function(){var a=c(this);a.data("style-cache",
a.attr("style"))});m.css("display","block");d.byRow&&(g.each(function(){var a=c(this),b="inline-block"===a.css("display")?"inline-block":"block";a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(g),g.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),f=0;d.byRow&&1>=e.length?e.css(d.property,
""):(e.each(function(){var a=c(this),b={display:"inline-block"===a.css("display")?"inline-block":"block"};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")}),e.each(function(){var a=c(this),b=0;"border-box"!==a.css("box-sizing")&&(b+=h(a.css("border-top-width"))+h(a.css("border-bottom-width")),b+=h(a.css("padding-top"))+h(a.css("padding-bottom")));a.css(d.property,f-b)}))});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&
c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-match-height")||b.attr("data-mh");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===
e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);;
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);aR=null};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if((I()||V())||(P()||aX())){if(I()||V()){bc=aF(bd,bb,l)}if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}else{if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.preventDefaultEvents===false){return}if(av.allowPageScroll===m){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
;
/*
 * jQuery - Easy Ticker plugin - v2.0
 * http://www.aakashweb.com/
 * Copyright 2014, Aakash Chakravarthy
 * Released under the MIT License.
 */

;(function ( $, window, document, undefined ) {

    var name = "easyTicker",
        defaults = {
			direction: 'up',
			easing: 'swing',
			speed: 'slow',
			interval: 7000,
			height: 'auto',
			visible: 0,
			mousePause: 1,
			controls: {
				up: '',
				down: '',
				toggle: '',
				playText: 'Play',
				stopText: 'Stop'
			}
        };

    // Constructor
    function EasyTicker( el, options ) {

		var s = this;

        s.opts = $.extend( {}, defaults, options );
        s.elem = $(el);
		s.targ = $(el).children(':first-child');
		s.timer = 0;
		s.mHover = 0;
		s.winFocus = 1;

		init();
		start();

		$([window, document]).off('focus.jqet').on('focus.jqet', function(){
			s.winFocus = 1;
		}).off('blur.jqet').on('blur.jqet', function(){
			s.winFocus = 0;
		});

		if( s.opts.mousePause == 1 ){
			s.elem.mouseenter(function(){
				s.timerTemp = s.timer;
				stop();
			}).mouseleave(function(){
				if( s.timerTemp !== 0 )
					start();
			});
		}

		$(s.opts.controls.up).on('click', function(e){
			e.preventDefault();
			moveDir('up');
		});

		$(s.opts.controls.down).on('click', function(e){
			e.preventDefault();
			moveDir('down');
		});

		$(s.opts.controls.toggle).on('click', function(e){
			e.preventDefault();
			if( s.timer == 0 ) start();
			else stop();
		});

		function init(){

			s.elem.children().css('margin', 0).children().css('margin', 0);

			s.elem.css({
				position : 'relative',
				height: s.opts.height,
				overflow : 'hidden'
			});

			s.targ.css({
				'position' : 'absolute',
				'margin' : 0
			});

			setInterval( function(){
				adjHeight();
			}, 100);

		} // Init Method

		function start(){
			s.timer = setInterval(function(){
				if( s.winFocus == 1 ){
					move( s.opts.direction );
				}
			}, s.opts.interval);

			$(s.opts.controls.toggle).addClass('et-run').html(s.opts.controls.stopText);

		} // Start method


		function stop(){
			clearInterval( s.timer );
			s.timer = 0;
			$(s.opts.controls.toggle).removeClass('et-run').html(s.opts.controls.playText);
		}// Stop


		function move( dir ){
			var sel, eq, appType;

			if( !s.elem.is(':visible') ) return;

			if( dir == 'up' ){
				sel = ':first-child';
				eq = '-=';
				appType = 'appendTo';
			}else{
				sel = ':last-child';
				eq = '+=';
				appType = 'prependTo';
			}

			var selChild = s.targ.children(sel);
			var height = selChild.outerHeight();

			s.targ.stop(true, true).animate({
				'top': eq + height + "px"
			}, s.opts.speed, s.opts.easing, function(){

				selChild.hide()[appType]( s.targ ).fadeIn();
				s.targ.css('top', 0);

				adjHeight();

			});
		}// Move

		function moveDir( dir ){
			stop();
			if( dir == 'up' ) move('up'); else move('down');
			// start();
		}

		function fullHeight(){
			var height = 0;
			var tempDisp = s.elem.css('display'); // Get the current el display value

			s.elem.css('display', 'block');

			s.targ.children().each(function(){
				height += $(this).outerHeight();
			});

			s.elem.css({
				'display' : tempDisp,
				'height' : height
			});
		}

		function visHeight( anim ){
			var wrapHeight = 0;
			s.targ.children(':lt(' + s.opts.visible + ')').each(function(){
				wrapHeight += $(this).outerHeight();
			});

			if( anim == 1 ){
				s.elem.stop(true, true).animate({height: wrapHeight}, s.opts.speed);
			}else{
				s.elem.css( 'height', wrapHeight);
			}
		}

		function adjHeight(){
			if( s.opts.height == 'auto' && s.opts.visible != 0 ){
				anim = arguments.callee.caller.name == 'init' ? 0 : 1;
				visHeight( anim );
			}else if( s.opts.height == 'auto' ){
				fullHeight();
			}
		}

		return {
			up: function(){ moveDir('up'); },
			down: function(){ moveDir('down'); },
			start: start,
			stop: stop,
			options: s.opts
		};

    }

    // Attach the object to the DOM
    $.fn[name] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, name)) {
                $.data(this, name, new EasyTicker( this, options ));
            }
        });
    };

})( jQuery, window, document );
;
jQuery(document).ready(function ($) {

    $('.menu-item-1529').find('a').removeAttr('href');
    // top banner
    if ($('.top-banner').length > 0) {
        $('.btn-banner').hide();
        if ($(".top-banner .swiper-slide").length >= 2) {
            var swiper = new Swiper('.top-banner', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                autoplayDisableOnInteractiongal: false,
                loop: true,
                autoplay: 5000,
                spaceBetween: 30,
                speed: 1000,
                effect: 'fade'
            });
            $('.btn-banner').show();
        }
    }
    ;
    // testimonial slider
    if ($('.testimonial-slider').length > 0) {
        var swiper = new Swiper('.testimonial-slider', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidePerView: 1
        });
    }
    ;
    // Careers Current openings
//    if ($('map').length > 0) {
//        $('map').imageMapResize();
//    };
    if ($('map').length > 0) {
        ImageMap('img[usemap]');
    };

    if ($('.accordion').length > 0) {
        $(".accordion").accordion({header: "h3", collapsible: true, active: false});
    }
    if ($('#asia_gallery').length > 0) {
        getgalleryImages(203);
    }
    if ($('#usagallery').length > 0) {
        getgalleryImages(204);
    }
    if ($('#romania_gallery').length > 0) {
        getgalleryImages(205);
    }
    if ($('#canada_gallery').length > 0) {
        getgalleryImages(206);
    }
    if ($('#israel_gallery').length > 0) {
        getgalleryImages(208);
    }
    if ($('#chile_gallery').length > 0) {
        getgalleryImages(207);
    }
    $('.jv-careersite-iframe').load(function(){
//        alert('loaded');
//        console.log('laod the iframe')
    });
        

    // sticky header
    if ($(".sticky-content").length > 0)
        $(".sticky-content").sticky({topSpacing: 0});

    // jump link scroll animation functionality
    var jumpMenuHeight = $(".jump-menu").height();
    $('.jump-menu a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - jumpMenuHeight
                }, 500);
                return false;
            }
        }
    });

    // call jRespond and add breakpoints
    var cgsBreakpoint = jRespond([
        {
            label: 'tablet-mobile',
            enter: 320,
            exit: 800
        }
    ]);

    var footerBreakpoint = jRespond([
        {
            label: 'mobile',
            enter: 320,
            exit: 640
        }
    ]);


    //=========================================== mobile off-canvas menu
    var $newdiv1 = $("<div id='mobile-menu' class='slidePanel' />"),
            $newdiv2 = $("<div class='slidePanelIn' />"),
            $newdiv3 = $("<a href='#' class='mobile-menu-button'><i class='fa fa-bars'></i></a>"),
            $newdiv4 = $("<div class='mobile-menu-overlay' />"),
            $newdiv5 = $(".dk-language").parent().html(),
            $cloneHeaderMenu = $(".main-header .tb-megamenu-nav").parent().html();

    $('.main-header').prepend($newdiv3);
    $("body").prepend($newdiv1);
    $("#page-wrapper").prepend($newdiv4);
    $newdiv1.append($newdiv2);
    $newdiv2.append($cloneHeaderMenu, $newdiv5);

    $("#mobile-menu .tb-megamenu-nav .caret").click(function (e) {
        e.stopPropagation();
        // return false;
        var $el = $(this);
        var items = $('.dropdown-toggle').next('div');
        if (!$el.parent('.dropdown-toggle').next('div').is(":visible")) {
            $el.parent('a').parent('li').siblings('li').children('.tb-megamenu-submenu').slideUp();
            $el.parents('.tb-megamenu-column').siblings('.tb-megamenu-column').children().children().children().children('.tb-megamenu-submenu').slideUp();
            $el.parent('a').parent('li').siblings('li').children('a').children('.caret').removeClass("active");
            $el.parents('.tb-megamenu-column').siblings('.tb-megamenu-column').children().children().children().children('a').children('.caret').removeClass("active");
        }
        if ($("#mobile-menu .language .dk-select-options").is(":visible")) {
            $("#mobile-menu .dk-language .caret").removeClass('active');
            $("#mobile-menu .language .dk-select-options").slideUp();
        }
        $el.toggleClass("active").parent('a').next('div.tb-megamenu-submenu').slideToggle();
        // $el.parents(".menu-item-has-children").toggleClass("active");
        return false;
    });

    $("#mobile-menu .tb-megamenu-nav li:eq(1) > .dropdown-toggle .caret").trigger('click');
    $('#mobile-menu .tb-megamenu-nav').find('li:not(:has(ul))').parent('ul').addClass('last-sub-menu');

    // click button then show main nav in mobile device
    $(".mobile-menu-button").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('overflow-x-hidden');
        if ($(this).hasClass('active')) {
            $('.mobile-menu-overlay').show();
            $("#page-wrapper, #header .main-header").animate({
                'left': '285px'
            }, 100);
            $("#mobile-menu").animate({
                'left': 0
            }, 100);
        }
        ;
        if (!$(this).hasClass('active')) {
            menuReset();
        }
        ;
    });

    $('.mobile-menu-overlay').click(function () {
        menuReset();
    });

    cgsBreakpoint.addFunc({
        breakpoint: 'tablet-mobile',
        enter: function () {
            $("#block-search-form").insertBefore('#mobile-menu .tb-megamenu-nav');
            $("#block-lang-dropdown-language").insertAfter('#mobile-menu .dk-language');
            // $('#mobile-menu .dk-selected').append("<span class='caret' />");
            if ($("#mobile-menu .dk-language .caret").hasClass('active')) {
                $("#mobile-menu .language ul").show();
            }
            // sticky header
            // $(".main-header").sticky({ topSpacing: 0 });
            if ($(".sticky-content").length > 0) {
                $(".sticky-content").unstick();
            }

            // Swipe support for menu.
            $("#mobile-menu, #page-wrapper").swipe({
                //Generic swipe handler for all directions
                swipeLeft: function (event, direction, distance, duration, fingerCount) {
                    if ($('.mobile-menu-button').hasClass('active')) {
                        menuReset();
                    }
                }
            });

            // news and resource pages collapse list
            $(".category-filter .block-content ul").hide();
            $(".category-filter h2").click(function () {
                $(this).toggleClass('active').parents('.category-filter').find('.block-content ul').slideToggle();
            })
        },
        exit: function () {
            menuReset();
            $("#block-search-form").insertAfter('.main-header #block-tb-megamenu-main-menu');
            $("#block-lang-dropdown-language").insertAfter('.middle-header #block-menu-menu-header-top-menu');
            // sticky header
            // $(".main-header").unstick();
            if ($(".sticky-content").length > 0)
                $(".sticky-content").sticky({topSpacing: 0});

            // news and resource pages collapse list click unbind
            $(".category-filter h2").unbind('click');
            $(".category-filter h2").removeClass('active');
            $(".category-filter .block-content ul").show();
        }
    });

    // mobile menu language dropdown
    $("#mobile-menu .dk-language .caret").click(function (e) {
        e.stopPropagation();
        $("#mobile-menu .tb-megamenu-nav li.level-1 > .dropdown-toggle .caret").removeClass('active');
        $("#mobile-menu .tb-megamenu-nav li.level-1").children('.tb-megamenu-submenu').slideUp();
        $(this).toggleClass('active');
        $("#mobile-menu .language .dk-select-options").slideToggle();
        return false;
    });


    // mobile menu language dropdown
    $(".triggermodal img").click(function (e) {

        var triggerid = ($(this).attr('id'));
        var modalidarr = triggerid.split('_');
        var btntrigger = '#modalclcik' + modalidarr[1];
        $('#views_slideshow_controls_text_employee_stories-panel_pane_1_1 .views-slideshow-controls-text-pause').trigger("click");
        $(btntrigger).trigger("click");
//        console.log(modalidarr[0]);
//        console.log(modalidarr[1]);

//        modalclcik
    });
    /*Image resize function*/
    function selectRegion(region) {
        document.querySelector("img").setAttribute('src', 'image-map-' + region + '.png');
    }

    /*  Get the image gallery images for Gallery*/
    function getgalleryImages(tid) {
        $.ajax({
            url: Drupal.settings.basePath + 'careers-gallery?tid=' + tid,
            contentType: 'application/json',
            dataType: 'json',
            success: function (result) {
                if ($('#asia_gallery').length > 0) {
                    $('#asia_gallery').imagesGrid({
                        images: result,
                        align: true,
                        async: false,
                        getViewAllText: function (imgsCount) {
                            return 'View all'
                        }
                    });
                }
                if ($('#usagallery').length > 0) {
                    $('#usagallery').imagesGrid({
                        images: result,
                        align: true,
                        async: false,
                        getViewAllText: function (imgsCount) {
                            return 'View all'
                        }
                    });
                }
                if ($('#canada_gallery').length > 0) {
                    $('#canada_gallery').imagesGrid({
                        images: result,
                        align: true,
                        async: false,
                        getViewAllText: function (imgsCount) {
                            return 'View all'
                        }
                    });
                }
                if ($('#israel_gallery').length > 0) {
                    $('#israel_gallery').imagesGrid({
                        images: result,
                        align: true,
                        async: false,
                        getViewAllText: function (imgsCount) {
                            return 'View all'
                        }
                    });
                }
                if ($('#chile_gallery').length > 0) {
                    $('#chile_gallery').imagesGrid({
                        images: result,
                        align: true,
                        async: false,
                        getViewAllText: function (imgsCount) {
                            return 'View all'
                        }
                    });
                }
                if ($('#romania_gallery').length > 0) {
                    $('#romania_gallery').imagesGrid({
                        images: result,
                        align: true,
                        async: false,
                        getViewAllText: function (imgsCount) {
                            return 'View all'
                        }
                    });
                }

            }
        });
    }


    function triggermodal(modalid) {
        alert(modalid);
    }
    function menuReset() {
        $('.mobile-menu-overlay').hide();
        $('.mobile-menu-button').removeClass('active');
        $('body').removeClass('overflow-x-hidden');
        $("#page-wrapper, #header .main-header").animate({
            'left': 0
        }, 100);
        $("#mobile-menu").animate({
            'left': '-285px'
        }, 100);
    }
    //================================  end mobile off-canvas menu

    // footer collapsed
    footerBreakpoint.addFunc({
        breakpoint: 'mobile',
        enter: function () {
            footerExpand();
            // overview magic box
            if ($(".magic-box").length > 0) {
                $('.magic-box .magic-box-content').hide();
                $(".magic-box .magic-box-cover").click(function () {
                    $el = $(this);
                    if (!$el.parents('.magic-box').find('.magic-box-content').is(":visible")) {
                        $(".magic-box-content").slideUp();
                    }
                    $el.parents('.magic-box').find('.magic-box-content').slideToggle();
                })
            }
        },
        exit: function () {
            footerReset();
            $(".magic-box .magic-box-cover").unbind('click');
            $('.magic-box .magic-box-content').show();
        }
    });
    $(".footer-main .menu .nolink").prepend('<span class="direction-arrow" />');
    $(".footer-main .menu .nolink").next('ul').addClass('first-level');
    $(".footer-main .menu .nolink").wrap('<span class="nolink" />');
    $(".footer-main .menu .nolink .nolink").removeClass('nolink');

    function footerExpand() {
        $(".footer-main .menu .nolink").next('ul.first-level').hide();
        $('.copyright .region-footer-copyright').hide();
        setTimeout(function () {
            $(".footer-main .menu .nolink").click(function (e) {
                e.preventDefault();
                $(this).toggleClass('active').next('ul.first-level').slideToggle();
            });
        }, 1000);
        $(".expand-copyright-menu").click(function (e) {
            e.preventDefault();
            $(this).toggleClass('active').next('.region-footer-copyright').slideToggle();
            $('html, body').animate({
                scrollTop: $(this).next("div").offset().top
            }, 500);
        });
    }

    function footerReset() {
        $(".footer-main .menu .nolink").removeClass('active').unbind('click');
        $(".footer-main .menu .nolink").next('ul.first-level').show();
        $(".expand-copyright-menu").removeClass('active').unbind('click');
        $('.copyright .region-footer-copyright').show();
    }


    // mega menu
    $('.full-width-mega-menu .tb-megamenu-row').addClass('container');
    // when submenu there, then not click first label menu item
    $(".main-header .tb-megamenu-nav > li > a.dropdown-toggle").bind('click', function (e) {
        // if($(this).hasClass("dropdown-toggle"))
        e.preventDefault();
    });

    function megaMenu() {
        var winWidth = $(window).width();
        $('.full-width-mega-menu').width(winWidth);
    }
    megaMenu();

    // colorbox
    function colorboxResize() {
        var height = '';
        var width = '';
        var win_width = $(window).width();
        var win_height = $(window).height();
        var cboxheight = $('#cboxLoadedContent').height();
        if (window.innerHeight > window.innerWidth) {
            height = cboxheight;
            width = win_width * .95;
        }
        else {
            height = win_height * .6;
            width = height * 1.77777778;
            if (width > win_width) {
                width = win_width * .75;
                height = width / 1.77777778;
            }
        }
        $('#colorbox').find('#cboxLoadedContent').css('overflow', 'hidden');
        $.colorbox.resize({width: width + 'px', height: (height + 40) + 'px'});
    }

    $(document).bind('cbox_complete', function () {
        colorboxResize();
    });

    $(window).resize(function () {
        colorboxResize();
        megaMenu();
    });

    if ($('.bio-content, .relatedPosts .featured-item-inner, .million-container, .where-we-are .adr').length > 0) {
        $('.bio-content, .relatedPosts .featured-item-inner, .million-container, .where-we-are .adr').matchHeight();
    }

    // $(document).ajaxSuccess(function(){
    //   if(jQuery('.blog-landing-container .continer-inner > div').length > 0){
    //     jQuery('.blog-landing-container .continer-inner > div').matchHeight();
    //   }
    // });

    if ($('.equal-height').length) {
        $('.equal-height > div').matchHeight();
    }
    $('.hero-block .text-box').hover(function () {
        $(this).parents('.hero-block').find('> a').toggleClass('hoverClass');
    });


    if ($(window).width() <= 800) {
        $('.node-type-blog .col-70').insertBefore('.col-30');
    }
    else {
        $('.node-type-blog .col-30').insertBefore('.col-70');
    }
    $(window).resize(function () {
        if ($(window).width() <= 800) {
            $('.node-type-blog .col-70').insertBefore('.col-30');
        }
        else {
            $('.node-type-blog .col-30').insertBefore('.col-70');
        }
    });


    var maxHeight = -1;
    $('div.ticker_item').each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });

    $('div.ticker_item').height(maxHeight);

    var dd = $('.banner-news-ticker').easyTicker({
        direction: 'up',
        easing: 'easeInOutBack',
        speed: 'slow',
        interval: 6000,
        height: 'auto',
        visible: 1,
        mousePause: 1,
        controls: {
            up: '.up'
        }
    }).data('easyTicker');

    $("a").filter(function () {
        return this.hostname && this.hostname.replace('www.', '') !== location.hostname.replace('www.', '');
    }).attr('target', '_blank');

});


;
jQuery(document).ready(function(){
//    var jsFolder = "https://amazingslider.com/wp-content/uploads/amazingslider/5/sliderengine/";
    var jsFolder = Drupal.settings.basePath + "sites/all/themes/cgs/amazing_slider/sliderengine/";
//    var jsFolder = "http://cgs1.dev.dd:8083/sites/all/themes/cgs/amazing_slider/sliderengine/";
    jQuery("#amazingslider-5").amazingslider({
        jsfolder:jsFolder,
        width:1024,
        height:576,
//        watermarkstyle:"text",
        loadimageondemand:false,
//        watermarktext:"",
        isresponsive:true,
        autoplayvideo:false,
//        watermarkimage:"",
        pauseonmouseover:false,
//        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        randomplay:false,
//        showwatermark:false,
//        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        slideinterval:5000,
//        watermarktarget:"_blank",
//        watermarkpositioncss:"display:block;position:absolute;top:4px;left:4px;",
//        watermarklink:"",
        transitiononfirstslide:false,
        loop:0,
        autoplay:true,
        navplayvideoimage:"play-32-32-0.png",
        navpreviewheight:60,
        timerheight:2,
//        skin:"Classic",
        textautohide:false,
        addgooglefonts:true,
        navshowplaypause:true,
        navshowplayvideo:false,
        navbuttonradius:0,
        navpreviewposition:"top",
        navpreviewarrowheight:8,
        showshadow:false,
        navfeaturedarrowimagewidth:16,
        navpreviewwidth:192,
        googlefonts:"Inder",
        textpositionmarginright:0,
        navcolor:"#999999",
        arrowwidth:32,
        navmargin:-32,
        texteffecteasing:"easeOutCubic",
        texteffect:"slide",
        navspacing:8,
        navarrowimage:"navarrows-28-28-0.png",
        navwidth:16,
        navheight:16,
        timeropacity:0.6,
        descriptioncss:"display:block; position:relative; font:14px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#333;",
        navpreviewbordercolor:"#ffffff",
        arrowstyle:"always",
        textpositionmargintop:24,
        navswitchonmouseover:false,
        playvideoimage:"playvideo-64-64-0.png",
        arrowimage:"arrows-32-32-3.png",
        textstyle:"dynamic",
        playvideoimageheight:64,
        navfonthighlightcolor:"#666666",
        showbackgroundimage:false,
        navpreviewborder:4,
        shadowcolor:"#aaaaaa",
        navbuttonshowbgimage:true,
        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",
        textbgcss:"display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#fff; opacity:0.7; filter:alpha(opacity=70);",
        navpreviewarrowwidth:16,
        playvideoimagewidth:64,
        bottomshadowimagewidth:110,
        showtimer:true,
        navshowpreview:true,
        navradius:0,
        navfeaturedarrowimage:"featuredarrow-16-8-0.png",
        navfeaturedarrowimageheight:8,
        navstyle:"bullets",
        textpositionmarginleft:0,
        navplaypauseimage:"navplaypause-28-28-0.png",
        backgroundimagetop:-10,
        timercolor:"#ffffff",
        navfontsize:12,
        navhighlightcolor:"#333333",
        navimage:"bullet-16-16-1.png",
        navbuttoncolor:"#999999",
        navshowarrow:true,
        textcss:"display:block; padding:8px 16px; text-align:left; ",
        titlecss:"display:block; position:relative; font: 16px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#000;",
        navshowbuttons:false,
        arrowhideonmouseleave:1000,
        navopacity:0.8,
        backgroundimagewidth:120,
        bordercolor:"#ffffff",
        arrowheight:32,
        arrowmargin:0,
        texteffectduration:1000,
        bottomshadowimage:"bottomshadow-110-95-1.png",
        border:0,
        timerposition:"bottom",
        navfontcolor:"#333333",
        bottomshadowimagetop:95,
        borderradius:0,
        navbuttonhighlightcolor:"#333333",
        textpositionstatic:"bottom",
        navshowfeaturedarrow:false,
        navbordercolor:"#ffffff",
        navpreviewarrowimage:"previewarrow-16-8-0.png",
        showbottomshadow:true,
        backgroundimage:"",
        navposition:"bottom",
        navborder:4,
        textpositiondynamic:"bottomleft",
        shadowsize:5,
        textpositionmarginbottom:24,
        blinds: {
            duration:2000,
            easing:"easeOutCubic",
            checked:true,
            slicecount:5
        },
        transition:"blinds"
    });
});;
/** Amazing Slider - Responsive jQuery Slider and Image Scroller
 * Copyright 2015 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://amazingslider.com
 * Version 5.2 
 */
(function ($) {
    $.fn.ashtml5lightbox = function (options) {
        var inst = this;
        inst.options = jQuery.extend({
            freelink: "http://html5box.com/",
            autoplay: true,
            html5player: true,
            responsive: true,
            nativehtml5controls: false,
            shownavigation: true,
            thumbwidth: 96,
            thumbheight: 72,
            thumbgap: 4,
            thumbtopmargin: 12,
            thumbbottommargin: 12,
            thumbborder: 1,
            thumbbordercolor: "transparent",
            thumbhighlightbordercolor: "#fff",
            thumbopacity: 1,
            navbuttonwidth: 32,
            overlaybgcolor: "#000",
            overlayopacity: 0.8,
            bgcolor: "#fff",
            bordersize: 8,
            borderradius: 0,
            bordermargin: 16,
            barautoheight: true,
            barheight: 48,
            loadingwidth: 64,
            loadingheight: 64,
            resizespeed: 400,
            fadespeed: 400,
            jsfolder: "",
            skinsfoldername: "",
            loadingimage: "lightbox-loading.gif",
            nextimage: "lightbox-next.png",
            previmage: "lightbox-prev.png",
            closeimage: "lightbox-close.png",
            playvideoimage: "lightbox-playvideo.png",
            titlebgimage: "lightbox-titlebg.png",
            navarrowsprevimage: "lightbox-navprev.png",
            navarrowsnextimage: "lightbox-navnext.png",
            showtitle: true,
            titlestyle: "bottom",
            titleinsidecss: "{color:#fff; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
            titlebottomcss: "{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
            showdescription: true,
            descriptioninsidecss: "{color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
            descriptionbottomcss: "{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
            errorwidth: 280,
            errorheight: 48,
            errorcss: "{text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;}",
            supportesckey: true,
            supportarrowkeys: true,
            version: "3.3",
            stamp: false,
            freemark: "hmtamgli5cboxh.iclolms",
            watermark: "",
            watermarklink: ""
        }, options);
        if (typeof html5lightbox_options != "undefined" && html5lightbox_options)
            jQuery.extend(inst.options, html5lightbox_options);
        if ($("div#html5lightbox_options").length)
            $.each($("div#html5lightbox_options").data(), function (key, value) {
                inst.options[key.toLowerCase()] = value
            });
        inst.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
//        inst.options.skinsfolder =
//                inst.options.skinsfoldername;
//        if (inst.options.skinsfolder.length > 0 && inst.options.skinsfolder[inst.options.skinsfolder.length - 1] != "/")
//            inst.options.skinsfolder += "/";
//        if (inst.options.skinsfolder.charAt(0) != "/" && inst.options.skinsfolder.substring(0, 5) != "http:" && inst.options.skinsfolder.substring(0, 6) != "https:")
//            inst.options.skinsfolder = inst.options.jsfolder + inst.options.skinsfolder;
        var i;
        var l;
        var mk = inst.options.freemark;
        for (i = 1; i <= 5; i++)
            mk = mk.slice(0, i) + mk.slice(i + 1);
        l = mk.length;
        for (i = 0; i < 5; i++)
            mk = mk.slice(0,
                    l - 9 + i) + mk.slice(l - 8 + i);
        inst.options.freemark = mk;
        if (inst.options.htmlfolder.indexOf(inst.options.freemark) != -1)
            inst.options.stamp = false;
        inst.options.navheight = 0;
        inst.options.thumbgap += 2 * inst.options.thumbborder;
        inst.options.types = ["IMAGE", "FLASH", "VIDEO", "YOUTUBE", "VIMEO", "PDF", "MP3", "WEB", "FLV"];
        inst.elemArray = new Array;
        inst.options.curElem = -1;
        inst.options.flashInstalled = false;
        try {
            if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                inst.options.flashInstalled = true
        } catch (e) {
            if (navigator.mimeTypes["application/x-shockwave-flash"])
                inst.options.flashInstalled =
                        true
        }
        inst.options.html5VideoSupported = !!document.createElement("video").canPlayType;
        inst.options.isChrome = navigator.userAgent.match(/Chrome/i) != null;
        inst.options.isFirefox = navigator.userAgent.match(/Firefox/i) != null;
        inst.options.isOpera = navigator.userAgent.match(/Opera/i) != null || navigator.userAgent.match(/OPR\//i) != null;
        inst.options.isSafari = navigator.userAgent.match(/Safari/i) != null;
        inst.options.isIE = navigator.userAgent.match(/MSIE/i) != null && !inst.options.isOpera;
        inst.options.isIE9 = navigator.userAgent.match(/MSIE 9/i) !=
                null && !inst.options.isOpera;
        inst.options.isIE8 = navigator.userAgent.match(/MSIE 8/i) != null && !inst.options.isOpera;
        inst.options.isIE7 = navigator.userAgent.match(/MSIE 7/i) != null && !inst.options.isOpera;
        inst.options.isIE6 = navigator.userAgent.match(/MSIE 6/i) != null && !inst.options.isOpera;
        inst.options.isIE678 = inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8;
        inst.options.isIE6789 = inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8 || inst.options.isIE9;
        inst.options.isAndroid = navigator.userAgent.match(/Android/i) !=
                null;
        inst.options.isIPad = navigator.userAgent.match(/iPad/i) != null;
        inst.options.isIPhone = navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null;
        inst.options.isIOS = inst.options.isIPad || inst.options.isIPhone;
        inst.options.isMobile = inst.options.isAndroid || inst.options.isIPad || inst.options.isIPhone;
        inst.options.isIOSLess5 = inst.options.isIPad && inst.options.isIPhone && (navigator.userAgent.match(/OS 4/i) != null || navigator.userAgent.match(/OS 3/i) != null);
        inst.options.supportCSSPositionFixed = !inst.options.isIE6 && !inst.options.isIOSLess5;
        inst.options.resizeTimeout = -1;
        if (inst.options.isMobile)
            inst.options.autoplay = false;
        inst.init = function () {
            inst.showing = false;
            inst.readData();
            inst.createMarkup();
            inst.supportKeyboard()
        };
        var ELEM_TYPE = 0,
                ELEM_HREF = 1,
                ELEM_TITLE = 2,
                ELEM_GROUP = 3,
                ELEM_WIDTH = 4,
                ELEM_HEIGHT = 5,
                ELEM_HREF_WEBM = 6,
                ELEM_HREF_OGG = 7,
                ELEM_THUMBNAIL = 8,
                ELEM_DESCRIPTION = 9;
        inst.readData = function () {
            inst.each(function () {
                if (this.nodeName.toLowerCase() != "a" && this.nodeName.toLowerCase() != "area")
                    return;
                var $this = $(this);
                var fileType = inst.checkType($this.attr("href"));
                if (fileType < 0)
                    return;
                for (var i = 0; i < inst.elemArray.length; i++)
                    if ($this.attr("href") == inst.elemArray[i][ELEM_HREF])
                        return;
                inst.elemArray.push(new Array(fileType, $this.attr("href"), $this.attr("title"), $this.data("group"), $this.data("width"), $this.data("height"), $this.data("webm"), $this.data("ogg"), $this.data("thumbnail"), $this.data("description")))
            })
        };
        inst.createMarkup = function () {
            var fontRef = ("https:" == document.location.protocol ? "https" :
                    "http") + "://fonts.googleapis.com/css?family=Armata";
            var fontLink = document.createElement("link");
            fontLink.setAttribute("rel", "stylesheet");
            fontLink.setAttribute("type", "text/css");
            fontLink.setAttribute("href", fontRef);
            document.getElementsByTagName("head")[0].appendChild(fontLink);
            if (inst.options.titlestyle == "inside") {
                inst.options.titlecss = inst.options.titleinsidecss;
                inst.options.descriptioncss = inst.options.descriptioninsidecss
            } else if (inst.options.titlestyle == "bottom") {
                inst.options.titlecss = inst.options.titlebottomcss;
                inst.options.descriptioncss = inst.options.descriptionbottomcss
            }
            var styleCss = "#html5-text " + inst.options.titlecss;
            styleCss += ".html5-description " + inst.options.descriptioncss;
            styleCss += ".html5-error " + inst.options.errorcss;
            $("head").append("<style type='text/css'>" + styleCss + "</style>");
            inst.$lightbox = jQuery("<div id='html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;'>" + "<div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:" +
                    inst.options.overlaybgcolor + ";opacity:" + inst.options.overlayopacity + ";filter:alpha(opacity=" + Math.round(inst.options.overlayopacity * 100) + ");'></div>" + "<div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'>" + "<div id='html5-elem-box' style='display:block;position:relative;margin:0px auto;text-align:center;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;'>" + "<div id='html5-elem-wrap' style='display:block;position:relative;margin:0px auto;text-align:center;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;background-color:" +
                    inst.options.bgcolor + ";'>" + "<div id='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;background:url(\"" + inst.options.skinsfolder + inst.options.loadingimage + "\") no-repeat center center;'></div>" + "<div id='html5-error' class='html5-error' style='display:none;position:absolute;padding:" + inst.options.bordersize + "px;text-align:center;width:" + inst.options.errorwidth + "px;height:" + inst.options.errorheight + "px;'>" + "The requested content cannot be loaded.<br />Please try again later." +
                    "</div>" + "<div id='html5-image' style='display:none;position:absolute;top:0px;left:0px;padding:" + inst.options.bordersize + "px;text-align:center;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;'></div>" + "<div id='html5-next' style='display:none;cursor:pointer;position:absolute;right:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + inst.options.skinsfolder + inst.options.nextimage + "'></div>" + "<div id='html5-prev' style='display:none;cursor:pointer;position:absolute;left:" +
                    inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + inst.options.skinsfolder + inst.options.previmage + "'></div>" + "</div>" + "</div>" + "<div id='html5-watermark' style='display:none;position:absolute;left:" + String(inst.options.bordersize + 2) + "px;top:" + String(inst.options.bordersize + 2) + "px;'></div>" + "</div>" + "</div>");
            inst.$lightbox.css({
                position: inst.options.supportCSSPositionFixed ? "fixed" : "absolute"
            });
            inst.$lightbox.appendTo("body");
            inst.$lightboxBox = $("#html5-lightbox-box", inst.$lightbox);
            inst.$elem = $("#html5-elem-box", inst.$lightbox);
            inst.$elemWrap = $("#html5-elem-wrap", inst.$lightbox);
            inst.$loading = $("#html5-loading", inst.$lightbox);
            inst.$error = $("#html5-error", inst.$lightbox);
            inst.$image = $("#html5-image", inst.$lightbox);
            inst.$next = $("#html5-next", inst.$lightbox);
            inst.$prev = $("#html5-prev", inst.$lightbox);
            var elemText = "<div id='html5-elem-data-box' style='display:none;'><div id='html5-text' style='display:block;overflow:hidden;'></div></div>";
            inst.$elem.append(elemText);
            inst.$elemData =
                    $("#html5-elem-data-box", inst.$lightbox);
            inst.$text = $("#html5-text", inst.$lightbox);
            if (inst.options.borderradius > 0) {
                inst.$elem.css({
                    "border-radius": inst.options.borderradius + "px",
                    "-moz-border-radius": inst.options.borderradius + "px",
                    "-webkit-border-radius": inst.options.borderradius + "px"
                });
                if (inst.options.titlestyle == "inside")
                    inst.$elemWrap.css({
                        "border-radius": inst.options.borderradius + "px",
                        "-moz-border-radius": inst.options.borderradius + "px",
                        "-webkit-border-radius": inst.options.borderradius + "px"
                    });
                else {
                    inst.$elemWrap.css({
                        "border-top-left-radius": inst.options.borderradius + "px",
                        "-moz-top-left-border-radius": inst.options.borderradius + "px",
                        "-webkit-top-left-border-radius": inst.options.borderradius + "px",
                        "border-top-right-radius": inst.options.borderradius + "px",
                        "-moz-top-right-border-radius": inst.options.borderradius + "px",
                        "-webkit-top-right-border-radius": inst.options.borderradius + "px"
                    });
                    inst.$elemData.css({
                        "border-bottom-left-radius": inst.options.borderradius + "px",
                        "-moz-top-bottom-border-radius": inst.options.borderradius +
                                "px",
                        "-webkit-bottom-left-border-radius": inst.options.borderradius + "px",
                        "border-bottom-right-radius": inst.options.borderradius + "px",
                        "-moz-bottom-right-border-radius": inst.options.borderradius + "px",
                        "-webkit-bottom-right-border-radius": inst.options.borderradius + "px"
                    })
                }
            }
            if (inst.options.titlestyle == "inside") {
                inst.$elemData.css({
                    position: "absolute",
                    margin: inst.options.bordersize + "px",
                    bottom: 0,
                    left: 0,
                    "background-color": "#333",
                    "background-color": "rgba(51, 51, 51, 0.6)"
                });
                inst.$text.css({
                    padding: inst.options.bordersize +
                            "px " + 2 * inst.options.bordersize + "px"
                })
            } else {
                inst.$elemData.css({
                    position: "relative",
                    width: "100%",
                    height: inst.options.barautoheight ? "auto" : inst.options.barheight + "px",
                    "padding": "0 0 " + inst.options.bordersize + "px" + " 0",
                    "background-color": inst.options.bgcolor,
                    "text-align": "left"
                });
                inst.$text.css({
                    "margin": "0 " + inst.options.bordersize + "px"
                })
            }
            inst.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'><img src='" +
                    inst.options.skinsfolder + inst.options.closeimage + "'></div>");
            inst.$close = $("#html5-close", inst.$lightbox);
            inst.$watermark = $("#html5-watermark", inst.$lightbox);
            if (inst.options.stamp)
                inst.$watermark.html("<a href='" + inst.options.freelink + "' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:100px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>" +
                        inst.options.freemark + "</div></div></a>");
            else if (inst.options.watermark) {
                var html = "<img src='" + inst.options.watermark + "' style='border:none;' />";
                if (inst.options.watermarklink)
                    html = "<a href='" + inst.options.watermarklink + "' target='_blank'>" + html + "</a>";
                inst.$watermark.html(html)
            }
            $("#html5-lightbox-overlay", inst.$lightbox).click(inst.finish);
            inst.$close.click(inst.finish);
            inst.$next.click(function () {
                inst.gotoSlide(-1)
            });
            inst.$prev.click(function () {
                inst.gotoSlide(-2)
            });
            $(window).resize(function () {
                if (!inst.options.isMobile) {
                    clearTimeout(inst.options.resizeTimeout);
                    inst.options.resizeTimeout = setTimeout(function () {
                        inst.resizeWindow()
                    }, 500)
                }
            });
            $(window).scroll(function () {
                inst.scrollBox()
            });
            $(window).bind("orientationchange", function (e) {
                if (inst.options.isMobile)
                    inst.resizeWindow()
            });
            if (inst.options.isIPhone) {
                inst.options.windowInnerHeight = window.innerHeight;
                setInterval(function () {
                    if (inst.options.windowInnerHeight != window.innerHeight) {
                        inst.options.windowInnerHeight = window.innerHeight;
                        inst.resizeWindow()
                    }
                }, 500)
            }
            inst.enableSwipe()
        };
        inst.calcNextPrevElem = function () {
            inst.options.nextElem = -1;
            inst.options.prevElem = -1;
            var j, curGroup = inst.elemArray[inst.options.curElem][ELEM_GROUP];
            if (curGroup != undefined && curGroup != null) {
                for (j = inst.options.curElem + 1; j < inst.elemArray.length; j++)
                    if (inst.elemArray[j][ELEM_GROUP] == curGroup) {
                        inst.options.nextElem = j;
                        break
                    }
                if (inst.options.nextElem < 0)
                    for (j = 0; j < inst.options.curElem; j++)
                        if (inst.elemArray[j][ELEM_GROUP] == curGroup) {
                            inst.options.nextElem = j;
                            break
                        }
                if (inst.options.nextElem >= 0) {
                    for (j = inst.options.curElem - 1; j >= 0; j--)
                        if (inst.elemArray[j][ELEM_GROUP] == curGroup) {
                            inst.options.prevElem =
                                    j;
                            break
                        }
                    if (inst.options.prevElem < 0)
                        for (j = inst.elemArray.length - 1; j > inst.options.curElem; j--)
                            if (inst.elemArray[j][ELEM_GROUP] == curGroup) {
                                inst.options.prevElem = j;
                                break
                            }
                }
            }
        };
        inst.clickHandler = function () {
            if (inst.elemArray.length <= 0)
                return true;
            var $this = $(this);
            inst.hideObjects();
            for (var i = 0; i < inst.elemArray.length; i++)
                if (inst.elemArray[i][ELEM_HREF] == $this.attr("href"))
                    break;
            if (i == inst.elemArray.length)
                return true;
            inst.options.curElem = i;
            inst.options.nextElem = -1;
            inst.options.prevElem = -1;
            inst.calcNextPrevElem();
            inst.$next.hide();
            inst.$prev.hide();
            inst.reset();
            inst.$lightbox.show();
            if (!inst.options.supportCSSPositionFixed)
                inst.$lightbox.css("top", $(window).scrollTop());
            var boxW = inst.options.loadingwidth + 2 * inst.options.bordersize;
            var boxH = inst.options.loadingheight + 2 * inst.options.bordersize;
            var winH = window.innerHeight ? window.innerHeight : $(window).height();
            var boxT = Math.round(winH / 2 - boxH / 2);
            if (inst.options.titlestyle != "inside")
                boxT -= Math.round(inst.options.barheight / 2);
            inst.$lightboxBox.css({
                "margin-top": boxT,
                "width": boxW,
                "height": boxH
            });
            inst.$elemWrap.css({
                "width": boxW,
                "height": boxH
            });
            inst.loadCurElem();
            return false
        };
        inst.loadThumbnail = function (src, index) {
            var imgLoader = new Image;
            $(imgLoader).load(function () {
                var style;
                if (this.width / this.height <= inst.options.thumbwidth / inst.options.thumbheight)
                    style = "width:100%;";
                else
                    style = "height:100%;";
                $(".html5-nav-thumb").eq(index).html("<img style='" + style + "' src='" + src + "' />")
            });
            imgLoader.src = src
        };
        inst.showNavigation = function () {
            if (!inst.options.shownavigation)
                return;
            if (!inst.currentElem || !inst.currentElem[ELEM_GROUP])
                return;
            var i;
            var showNav = false;
            var group = inst.currentElem[ELEM_GROUP];
            for (i = 0; i < inst.elemArray.length; i++)
                if (group == inst.elemArray[i][ELEM_GROUP])
                    if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                        showNav = true;
                        break
                    }
            if (!showNav)
                return;
            inst.options.navheight = inst.options.thumbheight + inst.options.thumbtopmargin + inst.options.thumbbottommargin;
            if ($(".html5-nav").length > 0)
                return;
            $("body").append("<div class='html5-nav' style='display:block;position:fixed;bottom:0;left:0;width:100%;height:" +
                    inst.options.navheight + "px;z-index:9999999;'>" + "<div class='html5-nav-container' style='position:relative;margin:" + inst.options.thumbtopmargin + "px auto " + inst.options.thumbbottommargin + "px;'>" + "<div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:" + inst.options.navbuttonwidth + 'px;height:100%;left:0;top:0;background:url("' + inst.options.skinsfolder + inst.options.navarrowsprevimage + "\") no-repeat left center;'></div>" + "<div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'>" +
                    "<div class='html5-nav-list'></div>" + "</div>" + "<div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:" + inst.options.navbuttonwidth + 'px;height:100%;right:0;top:0;background:url("' + inst.options.skinsfolder + inst.options.navarrowsnextimage + "\") no-repeat right center;'></div>" + "</div>" + "</div>");
            var index = 0;
            for (i = 0; i < inst.elemArray.length; i++)
                if (group == inst.elemArray[i][ELEM_GROUP])
                    if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                        $(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='" +
                                index + "' style='float:left;overflow:hidden;cursor:pointer;opacity:" + inst.options.thumbopacity + ";margin: 0 " + inst.options.thumbgap / 2 + "px;width:" + inst.options.thumbwidth + "px;height:" + inst.options.thumbheight + "px;border:" + inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor + ";'></div>");
                        this.loadThumbnail(inst.elemArray[i][ELEM_THUMBNAIL], index);
                        index++
                    }
            $(".html5-nav-thumb").hover(function () {
                $(this).css({
                    opacity: 1
                });
                $(this).css({
                    border: inst.options.thumbborder + "px solid " + inst.options.thumbhighlightbordercolor
                })
            },
                    function () {
                        $(this).css({
                            opacity: inst.options.thumbopacity
                        });
                        $(this).css({
                            border: inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor
                        })
                    });
            $(".html5-nav-thumb").click(function () {
                var index = $(this).data("arrayindex");
                if (index >= 0)
                    inst.gotoSlide(index)
            });
            inst.options.totalwidth = index * (inst.options.thumbgap + inst.options.thumbwidth + 2 * inst.options.thumbborder);
            $(".html5-nav-list").css({
                display: "block",
                position: "relative",
                "margin-left": 0,
                width: inst.options.totalwidth + "px"
            }).append("<div style='clear:both;'></div>");
            var $navMask = $(".html5-nav-mask");
            var $navPrev = $(".html5-nav-prev");
            var $navNext = $(".html5-nav-next");
            $navPrev.click(function () {
                var $navList = $(".html5-nav-list");
                var $navNext = $(".html5-nav-next");
                var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
                var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                var marginLeft = parseInt($navList.css("margin-left")) + maskWidth;
                if (marginLeft >= 0) {
                    marginLeft = 0;
                    $(this).css({
                        "background-position": "center left"
                    })
                } else
                    $(this).css({
                        "background-position": "center right"
                    });
                if (marginLeft <= maskWidth - inst.options.totalwidth)
                    $navNext.css({
                        "background-position": "center left"
                    });
                else
                    $navNext.css({
                        "background-position": "center right"
                    });
                $navList.animate({
                    "margin-left": marginLeft
                })
            });
            $navNext.click(function () {
                var $navList = $(".html5-nav-list");
                var $navPrev = $(".html5-nav-prev");
                var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
                var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                var marginLeft = parseInt($navList.css("margin-left")) -
                        maskWidth;
                if (marginLeft <= maskWidth - inst.options.totalwidth) {
                    marginLeft = maskWidth - inst.options.totalwidth;
                    $(this).css({
                        "background-position": "center left"
                    })
                } else
                    $(this).css({
                        "background-position": "center right"
                    });
                if (marginLeft >= 0)
                    $navPrev.css({
                        "background-position": "center left"
                    });
                else
                    $navPrev.css({
                        "background-position": "center right"
                    });
                $navList.animate({
                    "margin-left": marginLeft
                })
            });
            var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
            if (inst.options.totalwidth <=
                    winWidth) {
                $navMask.css({
                    width: inst.options.totalwidth + "px"
                });
                $navPrev.hide();
                $navNext.hide()
            } else {
                $navMask.css({
                    width: winWidth - 2 * inst.options.navbuttonwidth + "px"
                });
                $navPrev.show();
                $navNext.show()
            }
        };
        inst.loadElem = function (elem) {
            inst.currentElem = elem;
            inst.showing = true;
            inst.showNavigation();
            inst.$elem.unbind("mouseenter").unbind("mouseleave").unbind("mousemove");
            inst.$loading.show();
            switch (elem[ELEM_TYPE]) {
                case 0:
                    var imgLoader = new Image;
                    $(imgLoader).load(function () {
                        inst.showImage(elem, imgLoader.width,
                                imgLoader.height)
                    });
                    $(imgLoader).error(function () {
                        inst.showError()
                    });
                    imgLoader.src = elem[ELEM_HREF];
                    break;
                case 1:
                    inst.showSWF(elem);
                    break;
                case 2:
                case 8:
                    inst.showVideo(elem);
                    break;
                case 3:
                case 4:
                    inst.showYoutubeVimeo(elem);
                    break;
                case 5:
                    inst.showPDF(elem);
                    break;
                case 6:
                    inst.showMP3(elem);
                    break;
                case 7:
                    inst.showWeb(elem);
                    break
            }
        };
        inst.loadCurElem = function () {
            inst.loadElem(inst.elemArray[inst.options.curElem])
        };
        inst.showError = function () {
            inst.$loading.hide();
            inst.resizeLightbox(inst.options.errorwidth, inst.options.errorheight,
                    true,
                    function () {
                        inst.$error.show();
                        inst.$elem.fadeIn(inst.options.fadespeed, function () {
                            inst.showData()
                        })
                    })
        };
        inst.calcTextWidth = function (objW) {
            return objW - 36
        };
        inst.showTitle = function (w, t, description) {
            if (inst.options.titlestyle == "inside")
                inst.$elemData.css({
                    width: w + "px"
                });
            var text = "";
            if (inst.options.showtitle && t && t.length > 0)
                text += t;
            if (inst.options.showdescription && description && description.length > 0)
                text += '<p class="html5-description">' + description + "</p>";
            inst.$text.html(text)
        }, inst.showImage = function (elem,
                imgW, imgH) {
            var elemW, elemH;
            if (elem[ELEM_WIDTH])
                elemW = elem[ELEM_WIDTH];
            else {
                elemW = imgW;
                elem[ELEM_WIDTH] = imgW
            }
            if (elem[ELEM_HEIGHT])
                elemH = elem[ELEM_HEIGHT];
            else {
                elemH = imgH;
                elem[ELEM_HEIGHT] = imgH
            }
            var sizeObj = inst.calcElemSize({
                w: elemW,
                h: elemH
            });
            inst.resizeLightbox(sizeObj.w, sizeObj.h, true, function () {
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.css({
                    width: sizeObj.w,
                    height: sizeObj.h
                }).show();
                inst.$image.html("<img src='" + elem[ELEM_HREF] + "' width='100%' height='100%' />");
                inst.$elem.fadeIn(inst.options.fadespeed, function () {
                    inst.showData()
                })
            })
        };
        inst.showSWF = function (elem) {
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : 960;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : 540;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            });
            dataW = sizeObj.w;
            dataH = sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function () {
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.css({
                    width: sizeObj.w,
                    height: sizeObj.h
                }).html("<div id='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show();
                inst.embedFlash($("#html5lightbox-swf"), elem[ELEM_HREF], "window", {
                    width: dataW,
                    height: dataH
                });
                inst.$elem.show();
                inst.showData()
            })
        };
        inst.showVideo = function (elem) {
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : 960;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : 540;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            });
            dataW = sizeObj.w;
            dataH = sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function () {
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.css({
                    width: sizeObj.w,
                    height: sizeObj.h
                }).html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;'></div>").show();
                var isHTML5 = false;
                if (inst.options.isIE6789 || elem[ELEM_TYPE] == 8)
                    isHTML5 = false;
                else if (inst.options.isMobile)
                    isHTML5 = true;
                else if ((inst.options.html5player || !inst.options.flashInstalled) && inst.options.html5VideoSupported)
                    if (!inst.options.isFirefox && !inst.options.isOpera || (inst.options.isFirefox || inst.options.isOpera) && (elem[ELEM_HREF_OGG] || elem[ELEM_HREF_WEBM]))
                        isHTML5 = true;
                if (isHTML5) {
                    var videoSrc = elem[ELEM_HREF];
                    if (inst.options.isFirefox || inst.options.isOpera || !videoSrc)
                        videoSrc = elem[ELEM_HREF_WEBM] ?
                                elem[ELEM_HREF_WEBM] : elem[ELEM_HREF_OGG];
                    inst.embedHTML5Video($("#html5lightbox-video"), videoSrc, inst.options.autoplay)
                } else {
                    var videoFile = elem[ELEM_HREF];
                    if (videoFile.charAt(0) != "/" && videoFile.substring(0, 5) != "http:" && videoFile.substring(0, 6) != "https:")
                        videoFile = inst.options.htmlfolder + videoFile;
                    inst.embedFlash($("#html5lightbox-video"), inst.options.jsfolder + "html5boxplayer.swf", "transparent", {
                        width: dataW,
                        height: dataH,
                        videofile: videoFile,
                        autoplay: inst.options.autoplay ? "1" : "0",
                        errorcss: ".html5box-error" +
                                inst.options.errorcss,
                        id: 0
                    })
                }
                inst.$elem.show();
                inst.showData()
            })
        };
        inst.getYoutubeParams = function (href) {
            var result = {};
            if (href.indexOf("?") < 0)
                return result;
            var params = href.substring(href.indexOf("?") + 1).split("&");
            for (var i = 0; i < params.length; i++) {
                var value = params[i].split("=");
                if (value && value.length == 2 && value[0].toLowerCase() != "v")
                    result[value[0].toLowerCase()] = value[1]
            }
            return result
        };
        inst.prepareYoutubeHref = function (href) {
            var youtubeId = "";
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/;
            var match = href.match(regExp);
            if (match && match[7] && match[7].length == 11)
                youtubeId = match[7];
            var protocol = window.location.protocol == "https:" ? "https:" : "http:";
            var result = protocol + "//www.youtube.com/embed/" + youtubeId;
            var params = this.getYoutubeParams(href);
            var first = true;
            for (var key in params) {
                if (first) {
                    result += "?";
                    first = false
                } else
                    result += "&";
                result += key + "=" + params[key]
            }
            return result
        };
        inst.showYoutubeVimeo = function (elem) {
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : 960;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] :
                    540;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            });
            dataW = sizeObj.w;
            dataH = sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function () {
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.css({
                    width: sizeObj.w,
                    height: sizeObj.h
                }).html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;'></div>").show();
                var href = elem[ELEM_HREF];
                if (elem[ELEM_TYPE] == 3)
                    href = inst.prepareYoutubeHref(href);
                if (inst.options.autoplay)
                    if (href.indexOf("?") < 0)
                        href += "?autoplay=1";
                    else
                        href +=
                                "&autoplay=1";
                if (elem[ELEM_TYPE] == 3)
                    if (href.indexOf("?") < 0)
                        href += "?wmode=transparent&rel=0";
                    else
                        href += "&wmode=transparent&rel=0";
                $("#html5lightbox-video").html("<iframe width='100%' height='100%' src='" + href + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                inst.$elem.show();
                inst.showData()
            })
        };
        inst.showPDF = function (elem) {
        };
        inst.showMP3 = function (elem) {
        };
        inst.showWeb = function (elem) {
            var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) :
                    $(window).width();
            var winH = window.innerHeight ? window.innerHeight : $(window).height();
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : winWidth;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : winH - inst.options.navheight;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            });
            dataW = sizeObj.w;
            dataH = sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function () {
                inst.$loading.hide();
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.css({
                    width: sizeObj.w,
                    height: sizeObj.h
                }).html("<div id='html5lightbox-web' style='display:block;width:100%;height:100%;'></div>").show();
                $("#html5lightbox-web").html("<iframe width='100%' height='100%' src='" + elem[ELEM_HREF] + "' frameborder='0'></iframe>");
                inst.$elem.show();
                inst.showData()
            })
        };
        inst.scrollBox = function () {
            if (!inst.options.supportCSSPositionFixed)
                inst.$lightbox.css("top", $(window).scrollTop())
        };
        inst.resizeWindow = function () {
            if (!inst.currentElem)
                return;
            if (!inst.options.responsive)
                return;
            var elemW = inst.currentElem[ELEM_WIDTH] ? inst.currentElem[ELEM_WIDTH] : 960;
            var elemH = inst.currentElem[ELEM_HEIGHT] ? inst.currentElem[ELEM_HEIGHT] :
                    540;
            var sizeObj = inst.calcElemSize({
                w: elemW,
                h: elemH
            });
            var winH = window.innerHeight ? window.innerHeight : $(window).height();
            var boxW = sizeObj.w + 2 * inst.options.bordersize;
            var boxH = sizeObj.h + 2 * inst.options.bordersize;
            var boxT = Math.round((winH - inst.options.navheight) / 2 - boxH / 2);
            if (inst.options.titlestyle != "inside")
                boxT -= Math.round(inst.options.barheight / 2);
            inst.$lightboxBox.css({
                "margin-top": boxT
            });
            inst.$lightboxBox.css({
                "width": boxW,
                "height": boxH
            });
            inst.$elemWrap.css({
                width: boxW,
                height: boxH
            });
            inst.$image.css({
                width: sizeObj.w,
                height: sizeObj.h
            });
            if ($(".html5-nav").length <= 0)
                return;
            $(".html5-nav-list").css({
                "margin-left": 0
            });
            var $navMask = $(".html5-nav-mask");
            var $navPrev = $(".html5-nav-prev");
            var $navNext = $(".html5-nav-next");
            var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
            if (inst.options.totalwidth <= winWidth) {
                $navMask.css({
                    width: inst.options.totalwidth + "px"
                });
                $navPrev.hide();
                $navNext.hide()
            } else {
                $navMask.css({
                    width: winWidth - 2 * inst.options.navbuttonwidth + "px"
                });
                $navPrev.show();
                $navNext.show()
            }
        };
        inst.calcElemSize = function (sizeObj) {
            var winH = window.innerHeight ? window.innerHeight : $(window).height();
            var h0 = winH - inst.options.navheight - 2 * inst.options.bordersize - 2 * inst.options.bordermargin;
            if (inst.options.titlestyle != "inside")
                h0 -= inst.options.barheight;
            if (sizeObj.h > h0) {
                sizeObj.w = Math.round(sizeObj.w * h0 / sizeObj.h);
                sizeObj.h = h0
            }
            var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
            var w0 = winWidth - 2 * inst.options.bordersize - 2 * inst.options.bordermargin;
            if (sizeObj.w > w0) {
                sizeObj.h = Math.round(sizeObj.h * w0 / sizeObj.w);
                sizeObj.w = w0
            }
            return sizeObj
        };
        inst.showData = function () {
            if (inst.$text.text().length > 0)
                inst.$elemData.show();
            if (inst.$text.text().length > 0 && inst.options.titlestyle != "inside")
                inst.$lightboxBox.css({
                    height: String(inst.$lightboxBox.height() + inst.options.barheight) + "px"
                })
        };
        inst.resizeLightbox = function (elemW, elemH, bAnimate, onFinish) {
            var winH = window.innerHeight ? window.innerHeight : $(window).height();
            var speed = bAnimate ? inst.options.resizespeed : 0;
            var boxW = elemW + 2 * inst.options.bordersize;
            var boxH = elemH + 2 * inst.options.bordersize;
            var boxT = Math.round((winH - inst.options.navheight) / 2 - boxH / 2);
            if (inst.options.titlestyle != "inside")
                boxT -= Math.round(inst.options.barheight / 2);
            if (boxW == inst.$elemWrap.width() && boxH == inst.$elemWrap.height())
                speed = 0;
            inst.$loading.hide();
            inst.$watermark.hide();
            inst.$elem.bind("mouseenter mousemove", function () {
                if (inst.options.prevElem >= 0 || inst.options.nextElem >= 0) {
                    inst.$next.fadeIn();
                    inst.$prev.fadeIn()
                }
            });
            inst.$elem.bind("mouseleave",
                    function () {
                        inst.$next.fadeOut();
                        inst.$prev.fadeOut()
                    });
            inst.$lightboxBox.css({
                "margin-top": boxT
            });
            inst.$lightboxBox.css({
                "width": boxW,
                "height": boxH
            });
            inst.$elemWrap.animate({
                width: boxW
            }, speed).animate({
                height: boxH
            }, speed, function () {
                inst.$loading.show();
                inst.$watermark.show();
                inst.$close.show();
                inst.$elem.css({
                    "background-color": inst.options.bgcolor
                });
                onFinish()
            })
        };
        inst.reset = function () {
            if (inst.options.stamp)
                inst.$watermark.hide();
            inst.showing = false;
            inst.$image.empty();
            inst.$text.empty();
            inst.$error.hide();
            inst.$loading.hide();
            inst.$image.hide();
            inst.$elemData.hide();
            inst.$close.hide();
            inst.$elem.css({
                "background-color": ""
            })
        };
        inst.resetNavigation = function () {
            inst.options.navheight = 0;
            $(".html5-nav").remove()
        };
        inst.finish = function () {
            inst.reset();
            inst.resetNavigation();
            inst.$lightbox.hide();
            inst.showObjects();
            if (inst.onLightboxClosed && typeof inst.onLightboxClosed == "function")
                inst.onLightboxClosed(inst.currentElem)
        };
        inst.pauseSlide = function () {
        };
        inst.playSlide = function () {
        };
        inst.gotoSlide = function (slide) {
            if (slide ==
                    -1) {
                if (inst.options.nextElem < 0)
                    return;
                inst.options.curElem = inst.options.nextElem
            } else if (slide == -2) {
                if (inst.options.prevElem < 0)
                    return;
                inst.options.curElem = inst.options.prevElem
            } else if (slide >= 0)
                inst.options.curElem = slide;
            inst.calcNextPrevElem();
            inst.reset();
            inst.loadCurElem()
        };
        inst.supportKeyboard = function () {
            $(document).keyup(function (e) {
                if (!inst.showing)
                    return;
                if (inst.options.supportesckey && e.keyCode == 27)
                    inst.finish();
                else if (inst.options.supportarrowkeys)
                    if (e.keyCode == 39)
                        inst.gotoSlide(-1);
                    else if (e.keyCode ==
                            37)
                        inst.gotoSlide(-2)
            })
        };
        inst.enableSwipe = function () {
            inst.$elem.touchSwipe({
                preventWebBrowser: true,
                swipeLeft: function () {
                    inst.gotoSlide(-1)
                },
                swipeRight: function () {
                    inst.gotoSlide(-2)
                }
            })
        };
        inst.hideObjects = function () {
            $("select, embed, object").css({
                "visibility": "hidden"
            })
        };
        inst.showObjects = function () {
            $("select, embed, object").css({
                "visibility": "visible"
            })
        };
        inst.embedHTML5Video = function ($container, src, autoplay) {
            $container.html("<div style='display:block;width:100%;height:100%;position:relative;'><video width='100%' height='100%'" +
                    (autoplay ? " autoplay" : "") + (inst.options.nativehtml5controls ? " controls='controls'" : "") + " src='" + src + "'></div>");
            if (!inst.options.nativehtml5controls) {
                $("video", $container).data("src", src);
                $("video", $container).asHTML5VideoControls(inst.options.skinsfolder, inst, false, false)
            }
        };
        inst.embedFlash = function ($container, src, wmode, flashVars) {
            if (inst.options.flashInstalled) {
                var htmlOptions = {
                    pluginspage: "http://www.adobe.com/go/getflashplayer",
                    quality: "high",
                    allowFullScreen: "true",
                    allowScriptAccess: "always",
                    type: "application/x-shockwave-flash"
                };
                htmlOptions.width = "100%";
                htmlOptions.height = "100%";
                htmlOptions.src = src;
                htmlOptions.flashVars = $.param(flashVars);
                htmlOptions.wmode = wmode;
                var htmlString = "";
                for (var key in htmlOptions)
                    htmlString += key + "=" + htmlOptions[key] + " ";
                $container.html("<embed " + htmlString + "/>")
            } else
                $container.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='https://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")
        };
        inst.checkType = function (href) {
            if (!href)
                return -1;
            if (href.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i))
                return 0;
            if (href.match(/[^\.]\.(swf)\s*$/i))
                return 1;
            if (href.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i))
                return 2;
            if (href.match(/\:\/\/.*(youtube\.com)/i) || href.match(/\:\/\/.*(youtu\.be)/i))
                return 3;
            if (href.match(/\:\/\/.*(vimeo\.com)/i))
                return 4;
            if (href.match(/[^\.]\.(pdf)\s*$/i))
                return 5;
            if (href.match(/[^\.]\.(mp3)\s*$/i))
                return 6;
            if (href.match(/[^\.]\.(flv)\s*$/i))
                return 8;
            return 7
        };
        inst.showLightbox =
                function (type, href, title, width, height, webm, ogg, thumbnail, description) {
                    inst.$next.hide();
                    inst.$prev.hide();
                    inst.reset();
                    inst.$lightbox.show();
                    if (!inst.options.supportCSSPositionFixed)
                        inst.$lightbox.css("top", $(window).scrollTop());
                    var winH = window.innerHeight ? window.innerHeight : $(window).height();
                    var boxW = inst.options.loadingwidth + 2 * inst.options.bordersize;
                    var boxH = inst.options.loadingheight + 2 * inst.options.bordersize;
                    var boxT = Math.round(winH / 2 - boxH / 2);
                    if (inst.options.titlestyle != "inside")
                        boxT -= Math.round(inst.options.barheight /
                                2);
                    inst.$lightboxBox.css({
                        "margin-top": boxT,
                        "width": boxW,
                        "height": boxH
                    });
                    inst.$elemWrap.css({
                        "width": boxW,
                        "height": boxH
                    });
                    inst.loadElem(new Array(type, href, title, null, width, height, webm, ogg, thumbnail, description))
                };
        inst.addItem = function (href, title, group, width, height, webm, ogg, thumbnail, description) {
            type = inst.checkType(href);
            inst.elemArray.push(new Array(type, href, title, group, width, height, webm, ogg, thumbnail, description))
        };
        inst.showItem = function (href) {
            if (inst.elemArray.length <= 0)
                return true;
            inst.hideObjects();
            for (var i = 0; i < inst.elemArray.length; i++)
                if (inst.elemArray[i][ELEM_HREF] == href)
                    break;
            if (i == inst.elemArray.length)
                return true;
            inst.options.curElem = i;
            inst.options.nextElem = -1;
            inst.options.prevElem = -1;
            inst.calcNextPrevElem();
            inst.$next.hide();
            inst.$prev.hide();
            inst.reset();
            inst.$lightbox.show();
            if (!inst.options.supportCSSPositionFixed)
                inst.$lightbox.css("top", $(window).scrollTop());
            var winH = window.innerHeight ? window.innerHeight : $(window).height();
            var boxW = inst.options.loadingwidth + 2 * inst.options.bordersize;
            var boxH = inst.options.loadingheight + 2 * inst.options.bordersize;
            var boxT = Math.round(winH / 2 - boxH / 2);
            if (inst.options.titlestyle != "inside")
                boxT -= Math.round(inst.options.barheight / 2);
            inst.$lightboxBox.css({
                "margin-top": boxT,
                "width": boxW,
                "height": boxH
            });
            inst.$elemWrap.css({
                "width": boxW,
                "height": boxH
            });
            inst.loadCurElem();
            return false
        };
        inst.init();
        return inst.unbind("click").click(inst.clickHandler)
    }
})(jQuery);
(function ($) {
    $.fn.asHTML5VideoControls = function (skinFolder, parentInst, hidecontrols, hideplaybutton) {
        var isTouch = "ontouchstart" in window;
        var eStart = isTouch ? "touchstart" : "mousedown";
        var eMove = isTouch ? "touchmove" : "mousemove";
        var eCancel = isTouch ? "touchcancel" : "mouseup";
        var eClick = isTouch ? "touchstart" : "click";
        var BUTTON_SIZE = 32;
        var BAR_HEIGHT = isTouch ? 48 : 36;
        var hideControlsTimerId = null;
        var hideVolumeBarTimeoutId = null;
        var sliderDragging = false;
        var isFullscreen = false;
        var userActive = true;
        var isIPhone = navigator.userAgent.match(/iPod/i) !=
                null || navigator.userAgent.match(/iPhone/i) != null;
        var isHd = $(this).data("ishd");
        var hd = $(this).data("hd");
        var src = $(this).data("src");
        var $videoObj = $(this);
        $videoObj.get(0).removeAttribute("controls");
        if (isIPhone) {
            var h = $videoObj.height() - BAR_HEIGHT;
            $videoObj.css({
                height: h
            })
        }
        var $videoPlay = $("<div class='html5boxVideoPlay'></div>");
        if (!isIPhone) {
            $videoObj.after($videoPlay);
            $videoPlay.css({
                position: "absolute",
                top: "50%",
                left: "50%",
                display: "block",
                cursor: "pointer",
                width: 64,
                height: 64,
                "margin-left": -32,
                "margin-top": -32,
//                "background-image": "url('" + skinFolder + "html5boxplayer_playvideo.png" + "')",
                "background-position": "center center",
                "background-repeat": "no-repeat"
            }).bind(eClick, function () {
                $videoObj.get(0).play()
            })
        }
        var $videoFullscreenBg = $("<div class='html5boxVideoFullscreenBg'></div>");
        var $videoControls = $("<div class='html5boxVideoControls'>" + "<div class='html5boxVideoControlsBg'></div>" + "<div class='html5boxPlayPause'>" + "<div class='html5boxPlay'></div>" + "<div class='html5boxPause'></div>" + "</div>" +
                "<div class='html5boxTimeCurrent'>--:--</div>" + "<div class='html5boxFullscreen'></div>" + "<div class='html5boxHD'></div>" + "<div class='html5boxVolume'>" + "<div class='html5boxVolumeButton'></div>" + "<div class='html5boxVolumeBar'>" + "<div class='html5boxVolumeBarBg'>" + "<div class='html5boxVolumeBarActive'></div>" + "</div>" + "</div>" + "</div>" + "<div class='html5boxTimeTotal'>--:--</div>" + "<div class='html5boxSeeker'>" + "<div class='html5boxSeekerBuffer'></div>" + "<div class='html5boxSeekerPlay'></div>" + "<div class='html5boxSeekerHandler'></div>" +
                "</div>" + "<div style='clear:both;'></div>" + "</div>");
        $videoObj.after($videoControls);
        $videoObj.after($videoFullscreenBg);
        $videoFullscreenBg.css({
            display: "none",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            "z-index": 2147483647
        });
        $videoControls.css({
            display: "block",
            position: "absolute",
            width: "100%",
            height: BAR_HEIGHT,
            left: 0,
            bottom: 0,
            right: 0,
            "max-width": "640px",
            margin: "0 auto"
        });
        var userActivate = function () {
            userActive = true
        };
        $videoObj.bind(eClick, function () {
            userActive = true
        }).hover(function () {
            userActive =
                    true
        }, function () {
            userActive = false
        });
        if (!hidecontrols)
            setInterval(function () {
                if (userActive) {
                    $videoControls.show();
                    userActive = false;
                    clearTimeout(hideControlsTimerId);
                    hideControlsTimerId = setTimeout(function () {
                        if (!$videoObj.get(0).paused)
                            $videoControls.fadeOut()
                    }, 5E3)
                }
            }, 250);
        $(".html5boxVideoControlsBg", $videoControls).css({
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            "background-color": "#000000",
            opacity: 0.7,
            filter: "alpha(opacity=70)"
        });
        $(".html5boxPlayPause", $videoControls).css({
            display: "block",
            position: "relative",
            width: BUTTON_SIZE + "px",
            height: BUTTON_SIZE + "px",
            margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
            "float": "left"
        });
        var $videoBtnPlay = $(".html5boxPlay", $videoControls);
        var $videoBtnPause = $(".html5boxPause", $videoControls);
        $videoBtnPlay.css({
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: BUTTON_SIZE + "px",
            height: BUTTON_SIZE + "px",
            cursor: "pointer",
//            "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
            "background-position": "top left"
        }).hover(function () {
            $(this).css({
                "background-position": "bottom left"
            })
        },
                function () {
                    $(this).css({
                        "background-position": "top left"
                    })
                }).bind(eClick, function () {
            $videoObj.get(0).play()
        });
        $videoBtnPause.css({
            display: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: BUTTON_SIZE + "px",
            height: BUTTON_SIZE + "px",
            cursor: "pointer",
//            "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
            "background-position": "top right"
        }).hover(function () {
            $(this).css({
                "background-position": "bottom right"
            })
        }, function () {
            $(this).css({
                "background-position": "top right"
            })
        }).bind(eClick, function () {
            $videoObj.get(0).pause()
        });
        var $videoTimeCurrent = $(".html5boxTimeCurrent", $videoControls);
        var $videoTimeTotal = $(".html5boxTimeTotal", $videoControls);
        var $videoSeeker = $(".html5boxSeeker", $videoControls);
        var $videoSeekerPlay = $(".html5boxSeekerPlay", $videoControls);
        var $videoSeekerBuffer = $(".html5boxSeekerBuffer", $videoControls);
        var $videoSeekerHandler = $(".html5boxSeekerHandler", $videoControls);
        $videoTimeCurrent.css({
            display: "block",
            position: "relative",
            "float": "left",
            "line-height": BAR_HEIGHT + "px",
            "font-weight": "normal",
            "font-size": "12px",
            margin: "0 8px",
            "font-family": "Arial, Helvetica, sans-serif",
            color: "#fff"
        });
        $videoTimeTotal.css({
            display: "block",
            position: "relative",
            "float": "right",
            "line-height": BAR_HEIGHT + "px",
            "font-weight": "normal",
            "font-size": "12px",
            margin: "0 8px",
            "font-family": "Arial, Helvetica, sans-serif",
            color: "#fff"
        });
        $videoSeeker.css({
            display: "block",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            height: "10px",
            "background-color": "#222",
            margin: Math.floor((BAR_HEIGHT - 10) / 2) + "px 4px"
        }).bind(eStart, function (e) {
            var e0 =
                    isTouch ? e.originalEvent.touches[0] : e;
            var pos = e0.pageX - $videoSeeker.offset().left;
            $videoSeekerPlay.css({
                width: pos
            });
            $videoObj.get(0).currentTime = pos * $videoObj.get(0).duration / $videoSeeker.width();
            $videoSeeker.bind(eMove, function (e) {
                var e0 = isTouch ? e.originalEvent.touches[0] : e;
                var pos = e0.pageX - $videoSeeker.offset().left;
                $videoSeekerPlay.css({
                    width: pos
                });
                $videoObj.get(0).currentTime = pos * $videoObj.get(0).duration / $videoSeeker.width()
            })
        }).bind(eCancel, function () {
            $videoSeeker.unbind(eMove)
        });
        $videoSeekerBuffer.css({
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            "background-color": "#444"
        });
        $videoSeekerPlay.css({
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            "background-color": "#fcc500"
        });
        if (!isIPhone && ($videoObj.get(0).requestFullscreen || $videoObj.get(0).webkitRequestFullScreen || $videoObj.get(0).mozRequestFullScreen || $videoObj.get(0).webkitEnterFullScreen || $videoObj.get(0).msRequestFullscreen)) {
            var switchScreen = function (fullscreen) {
                if (fullscreen) {
                    if ($videoObj.get(0).requestFullscreen)
                        $videoObj.get(0).requestFullscreen();
                    else if ($videoObj.get(0).webkitRequestFullScreen)
                        $videoObj.get(0).webkitRequestFullScreen();
                    else if ($videoObj.get(0).mozRequestFullScreen)
                        $videoObj.get(0).mozRequestFullScreen();
                    else if ($videoObj.get(0).webkitEnterFullScreen)
                        $videoObj.get(0).webkitEnterFullScreen();
                    if ($videoObj.get(0).msRequestFullscreen)
                        $videoObj.get(0).msRequestFullscreen()
                } else if (document.cancelFullScreen)
                    document.cancelFullScreen();
                else if (document.mozCancelFullScreen)
                    document.mozCancelFullScreen();
                else if (document.webkitCancelFullScreen)
                    document.webkitCancelFullScreen();
                else if (document.webkitExitFullscreen)
                    document.webkitExitFullscreen();
                else if (document.msExitFullscreen)
                    document.msExitFullscreen()
            };
            var switchScreenCSS = function (fullscreen) {
                $videoControls.css({
                    position: fullscreen ? "fixed" : "absolute"
                });
                var backgroundPosY = $videoFullscreen.css("background-position") ? $videoFullscreen.css("background-position").split(" ")[1] : $videoFullscreen.css("background-position-y");
                $videoFullscreen.css({
                    "background-position": (fullscreen ? "right" : "left") + " " + backgroundPosY
                });
                $videoFullscreenBg.css({
                    display: fullscreen ?
                            "block" : "none"
                });
                if (fullscreen) {
                    $(document).bind("mousemove", userActivate);
                    $videoControls.css({
                        "z-index": 2147483647
                    })
                } else {
                    $(document).unbind("mousemove", userActivate);
                    $videoControls.css({
                        "z-index": ""
                    })
                }
            };
            document.addEventListener("fullscreenchange", function () {
                isFullscreen = document.fullscreen;
                switchScreenCSS(document.fullscreen)
            }, false);
            document.addEventListener("mozfullscreenchange", function () {
                isFullscreen = document.mozFullScreen;
                switchScreenCSS(document.mozFullScreen)
            }, false);
            document.addEventListener("webkitfullscreenchange",
                    function () {
                        isFullscreen = document.webkitIsFullScreen;
                        switchScreenCSS(document.webkitIsFullScreen)
                    }, false);
            $videoObj.get(0).addEventListener("webkitbeginfullscreen", function () {
                isFullscreen = true
            }, false);
            $videoObj.get(0).addEventListener("webkitendfullscreen", function () {
                isFullscreen = false
            }, false);
            $("head").append("<style type='text/css'>video::-webkit-media-controls { display:none !important; }</style>");
            var $videoFullscreen = $(".html5boxFullscreen", $videoControls);
            $videoFullscreen.css({
                display: "block",
                position: "relative",
                "float": "right",
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                cursor: "pointer",
//                "background-image": "url('" + skinFolder + "html5boxplayer_fullscreen.png" + "')",
                "background-position": "left top"
            }).hover(function () {
                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                $(this).css({
                    "background-position": backgroundPosX + " bottom"
                })
            }, function () {
                var backgroundPosX =
                        $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                $(this).css({
                    "background-position": backgroundPosX + " top"
                })
            }).bind(eClick, function () {
                isFullscreen = !isFullscreen;
                switchScreen(isFullscreen)
            })
        }
        if (hd) {
            var $videoHD = $(".html5boxHD", $videoControls);
            $videoHD.css({
                display: "block",
                position: "relative",
                "float": "right",
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                cursor: "pointer",
                "background-image": "url('" +
                        skinFolder + "html5boxplayer_hd.png" + "')",
                "background-position": (isHd ? "right" : "left") + " center"
            }).bind(eClick, function () {
                isHd = !isHd;
                $(this).css({
                    "background-position": (isHd ? "right" : "left") + " center"
                });
                parentInst.isHd = isHd;
                var isPaused = $videoObj.get(0).isPaused;
                $videoObj.get(0).setAttribute("src", (isHd ? hd : src) + "#t=" + $videoObj.get(0).currentTime);
                if (!isPaused)
                    $videoObj.get(0).play();
                else if (!isIPhone)
                    $videoObj.get(0).pause()
            })
        }
        var volume = $videoObj.get(0).volume;
        $videoObj.get(0).volume = volume / 2 + 0.1;
        if ($videoObj.get(0).volume ===
                volume / 2 + 0.1) {
            $videoObj.get(0).volume = parentInst.html5Volume;
            var $videoVolume = $(".html5boxVolume", $videoControls);
            var $videoVolumeButton = $(".html5boxVolumeButton", $videoControls);
            var $videoVolumeBar = $(".html5boxVolumeBar", $videoControls);
            var $videoVolumeBarBg = $(".html5boxVolumeBarBg", $videoControls);
            var $videoVolumeBarActive = $(".html5boxVolumeBarActive", $videoControls);
            $videoVolume.css({
                display: "block",
                position: "relative",
                "float": "right",
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                margin: Math.floor((BAR_HEIGHT -
                        BUTTON_SIZE) / 2)
            }).hover(function () {
                clearTimeout(hideVolumeBarTimeoutId);
                var volume = $videoObj.get(0).volume;
                $videoVolumeBarActive.css({
                    height: Math.round(volume * 100) + "%"
                });
                $videoVolumeBar.show()
            }, function () {
                clearTimeout(hideVolumeBarTimeoutId);
                hideVolumeBarTimeoutId = setTimeout(function () {
                    $videoVolumeBar.hide()
                }, 1E3)
            });
            $videoVolumeButton.css({
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                cursor: "pointer",
//                "background-image": "url('" + skinFolder + "html5boxplayer_volume.png" +
//                        "')",
                "background-position": "top " + ($videoObj.get(0).volume > 0 ? "left" : "right")
            }).hover(function () {
                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                $(this).css({
                    "background-position": backgroundPosX + " bottom"
                })
            }, function () {
                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                $(this).css({
                    "background-position": backgroundPosX + " top"
                })
            }).bind(eClick,
                    function () {
                        var volume = $videoObj.get(0).volume;
                        if (volume > 0) {
                            volumeSaved = volume;
                            volume = 0
                        } else
                            volume = volumeSaved;
                        var backgroundPosY = $(this).css("background-position") ? $(this).css("background-position").split(" ")[1] : $(this).css("background-position-y");
                        $videoVolumeButton.css({
                            "background-position": (volume > 0 ? "left" : "right") + " " + backgroundPosY
                        });
                        $videoObj.get(0).volume = volume;
                        parentInst.html5Volume = volume;
                        $videoVolumeBarActive.css({
                            height: Math.round(volume * 100) + "%"
                        })
                    });
            $videoVolumeBar.css({
                display: "none",
                position: "absolute",
                left: 4,
                bottom: "100%",
                width: 24,
                height: 80,
                "margin-bottom": Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                "background-color": "#000000",
                opacity: 0.7,
                filter: "alpha(opacity=70)"
            });
            $videoVolumeBarBg.css({
                display: "block",
                position: "relative",
                width: 10,
                height: 68,
                margin: 7,
                cursor: "pointer",
                "background-color": "#222"
            });
            $videoVolumeBarActive.css({
                display: "block",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "background-color": "#fcc500"
            });
            $videoVolumeBarBg.bind(eStart, function (e) {
                var e0 =
                        isTouch ? e.originalEvent.touches[0] : e;
                var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                $videoVolumeBarActive.css({
                    height: Math.round(vol * 100) + "%"
                });
                $videoVolumeButton.css({
                    "background-position": "left " + (vol > 0 ? "top" : "bottom")
                });
                $videoObj.get(0).volume = vol;
                parentInst.html5Volume = vol;
                $videoVolumeBarBg.bind(eMove, function (e) {
                    var e0 = isTouch ? e.originalEvent.touches[0] : e;
                    var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                    vol =
                            vol > 1 ? 1 : vol < 0 ? 0 : vol;
                    $videoVolumeBarActive.css({
                        height: Math.round(vol * 100) + "%"
                    });
                    $videoVolumeButton.css({
                        "background-position": "left " + (vol > 0 ? "top" : "bottom")
                    });
                    $videoObj.get(0).volume = vol;
                    parentInst.html5Volume = vol
                })
            }).bind(eCancel, function () {
                $videoVolumeBarBg.unbind(eMove)
            })
        }
        var calcTimeFormat = function (seconds) {
            var h0 = Math.floor(seconds / 3600);
            var h = h0 < 10 ? "0" + h0 : h0;
            var m0 = Math.floor((seconds - h0 * 60) / 60);
            var m = m0 < 10 ? "0" + m0 : m0;
            var s0 = Math.floor(seconds - (h0 * 3600 + m0 * 60));
            var s = s0 < 10 ? "0" + s0 : s0;
            var r = m + ":" +
                    s;
            if (h0 > 0)
                r = h + ":" + r;
            return r
        };
        if (hideplaybutton)
            $videoPlay.hide();
        if (hidecontrols)
            $videoControls.hide();
        var onVideoPlay = function () {
            if (!hideplaybutton)
                $videoPlay.hide();
            if (!hidecontrols) {
                $videoBtnPlay.hide();
                $videoBtnPause.show()
            }
        };
        var onVideoPause = function () {
            if (!hideplaybutton)
                $videoPlay.show();
            if (!hidecontrols) {
                $videoControls.show();
                clearTimeout(hideControlsTimerId);
                $videoBtnPlay.show();
                $videoBtnPause.hide()
            }
        };
        var onVideoUpdate = function () {
            var curTime = $videoObj.get(0).currentTime;
            if (curTime) {
                $videoTimeCurrent.text(calcTimeFormat(curTime));
                var duration = $videoObj.get(0).duration;
                if (duration) {
                    $videoTimeTotal.text(calcTimeFormat(duration));
                    if (!sliderDragging) {
                        var sliderW = $videoSeeker.width();
                        var pos = Math.round(sliderW * curTime / duration);
                        $videoSeekerPlay.css({
                            width: pos
                        });
                        $videoSeekerHandler.css({
                            left: pos
                        })
                    }
                }
            }
        };
        var onVideoProgress = function () {
            if ($videoObj.get(0).buffered && $videoObj.get(0).buffered.length > 0 && !isNaN($videoObj.get(0).buffered.end(0)) && !isNaN($videoObj.get(0).duration)) {
                var sliderW = $videoSeeker.width();
                $videoSeekerBuffer.css({
                    width: Math.round(sliderW *
                            $videoObj.get(0).buffered.end(0) / $videoObj.get(0).duration)
                })
            }
        };
        try {
            $videoObj.bind("play", onVideoPlay);
            $videoObj.bind("pause", onVideoPause);
            $videoObj.bind("ended", onVideoPause);
            $videoObj.bind("timeupdate", onVideoUpdate);
            $videoObj.bind("progress", onVideoProgress)
        } catch (e) {
        }
    }
})(jQuery);

function ASliderTimer(interval, callback, updatecallback) {
    var timerInstance = this;
    timerInstance.timeout = interval;
    var updateinterval = 50;
    var updateTimerId = null;
    var runningTime = 0;
    var paused = false;
    var started = false;
    var startedandpaused = false;
    this.pause = function () {
        if (started) {
            paused = true;
            clearInterval(updateTimerId)
        }
    };
    this.resume = function (forceresume) {
        if (startedandpaused && !forceresume)
            return;
        startedandpaused = false;
        if (started && paused) {
            paused = false;
            updateTimerId = setInterval(function () {
                runningTime += updateinterval;
                if (runningTime > timerInstance.timeout) {
                    clearInterval(updateTimerId);
                    if (callback)
                        callback()
                }
                if (updatecallback)
                    updatecallback(runningTime / timerInstance.timeout)
            }, updateinterval)
        }
    };
    this.stop = function () {
        clearInterval(updateTimerId);
        if (updatecallback)
            updatecallback(-1);
        runningTime = 0;
        paused = false;
        started = false
    };
    this.start = function () {
        runningTime = 0;
        paused = false;
        started = true;
        updateTimerId = setInterval(function () {
            runningTime += updateinterval;
            if (runningTime > timerInstance.timeout) {
                clearInterval(updateTimerId);
                if (callback)
                    callback()
            }
            if (updatecallback)
                updatecallback(runningTime /
                        timerInstance.timeout)
        }, updateinterval)
    };
    this.startandpause = function () {
        runningTime = 0;
        paused = true;
        started = true;
        startedandpaused = true
    }
}
var ASPlatforms = {
    flashInstalled: function () {
        var flashInstalled = false;
        try {
            if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                flashInstalled = true
        } catch (e) {
            if (navigator.mimeTypes["application/x-shockwave-flash"])
                flashInstalled = true
        }
        return flashInstalled
    },
    html5VideoSupported: function () {
        return !!document.createElement("video").canPlayType
    },
    isChrome: function () {
        return navigator.userAgent.match(/Chrome/i) != null
    },
    isFirefox: function () {
        return navigator.userAgent.match(/Firefox/i) != null
    },
    isOpera: function () {
        return navigator.userAgent.match(/Opera/i) !=
                null || navigator.userAgent.match(/OPR\//i) != null
    },
    isSafari: function () {
        return navigator.userAgent.match(/Safari/i) != null
    },
    isAndroid: function () {
        return navigator.userAgent.match(/Android/i) != null
    },
    isIPad: function () {
        return navigator.userAgent.match(/iPad/i) != null
    },
    isIPhone: function () {
        return navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null
    },
    isIOS: function () {
        return this.isIPad() || this.isIPhone()
    },
    isMobile: function () {
        return this.isAndroid() || this.isIPad() || this.isIPhone()
    },
    isIE11: function () {
        return navigator.userAgent.match(/Trident\/7/) != null && navigator.userAgent.match(/rv:11/) != null
    },
    isIE: function () {
        return (navigator.userAgent.match(/MSIE/i) != null || this.isIE11()) && !this.isOpera()
    },
    isIE10: function () {
        return navigator.userAgent.match(/MSIE 10/i) != null && !this.isOpera()
    },
    isIE9: function () {
        return navigator.userAgent.match(/MSIE 9/i) != null && !this.isOpera()
    },
    isIE8: function () {
        return navigator.userAgent.match(/MSIE 8/i) != null && !this.isOpera()
    },
    isIE7: function () {
        return navigator.userAgent.match(/MSIE 7/i) !=
                null && !this.isOpera()
    },
    isIE6: function () {
        return navigator.userAgent.match(/MSIE 6/i) != null && !this.isOpera()
    },
    isIE678: function () {
        return this.isIE6() || this.isIE7() || this.isIE8()
    },
    isIE6789: function () {
        return this.isIE6() || this.isIE7() || this.isIE8() || this.isIE9()
    },
    isTouch: function () {
        return "ontouchstart" in window
    },
    css33dTransformSupported: function () {
        return !this.isIE() && !this.isOpera()
    },
    applyBrowserStyles: function (object, applyToValue) {
        var ret = {};
        for (var key in object) {
            ret[key] = object[key];
            ret["-webkit-" +
                    key] = applyToValue ? "-webkit-" + object[key] : object[key];
            ret["-moz-" + key] = applyToValue ? "-moz-" + object[key] : object[key];
            ret["-ms-" + key] = applyToValue ? "-ms-" + object[key] : object[key];
            ret["-o-" + key] = applyToValue ? "-o-" + object[key] : object[key]
        }
        return ret
    }
};
(function ($) {
    $.fn.amazingslider = function (options) {
        var ELEM_ID = 0,
                ELEM_SRC = 1,
                ELEM_TITLE = 2,
                ELEM_DESCRIPTION = 3,
                ELEM_LINK = 4,
                ELEM_TARGET = 5,
                ELEM_VIDEO = 6,
                ELEM_THUMBNAIL = 7,
                ELEM_LIGHTBOX = 8,
                ELEM_LIGHTBOXWIDTH = 9,
                ELEM_LIGHTBOXHEIGHT = 10,
                ELEM_WEBM = 11,
                ELEM_OGG = 12,
                ELEM_TEXTEFFECT = 13,
                ELEM_DURATION = 14,
                ELEM_BUTTON = 15;
        var TYPE_IMAGE = 1,
                TYPE_SWF = 2,
                TYPE_MP3 = 3,
                TYPE_PDF = 4,
                TYPE_VIDEO_FLASH = 5,
                TYPE_VIDEO_MP4 = 6,
                TYPE_VIDEO_OGG = 7,
                TYPE_VIDEO_WEBM = 8,
                TYPE_VIDEO_YOUTUBE = 9,
                TYPE_VIDEO_VIMEO = 10;
        var AmazingSlider = function (container, options,
                textoptions, id) {
            this.container = container;
            this.options = options;
            this.textoptions = textoptions;
            this.id = id;
            this.transitionTimeout = null;
            this.arrowTimeout = null;
            this.lightboxArray = [];
            this.elemArray = [];
            this.container.children().hide();
            this.container.css({
                "display": "block",
                "position": "relative"
            });
            $(".amazingslider-engine").css({
                "display": "none"
            });
            if (ASPlatforms.isMobile() && !this.options.navshowpreviewontouch)
                this.options.navshowpreview = false;
            this.initData(this.init)
        };
        AmazingSlider.prototype = {
            initData: function (onSuccess) {
                this.readTags();
                onSuccess(this)
            },
            readTags: function () {
                var instance = this;
                $(".amazingslider-slides", this.container).find("li").each(function () {
                    var img = $("img", $(this));
                    if (img.length > 0) {
                        var dataSrc = img.data("src") && img.data("src").length > 0 ? img.data("src") : "";
                        var src = img.attr("src") && img.attr("src").length > 0 ? img.attr("src") : dataSrc;
                        var title = img.attr("alt") && img.attr("alt").length > 0 ? img.attr("alt") : "";
                        var description = img.data("description") && img.data("description").length > 0 ? img.data("description") : "";
                        var link = img.parent() &&
                                img.parent().is("a") ? img.parent().attr("href") : "";
                        var target = img.parent() && img.parent().is("a") ? img.parent().attr("target") : "";
                        var lightbox = img.parent() && img.parent().is("a") ? img.parent().hasClass("html5lightbox") : false;
                        var lightboxwidth = img.parent() && lightbox ? img.parent().data("width") : 0;
                        var lightboxheight = img.parent() && lightbox ? img.parent().data("height") : 0;
                        var dataWebm = img.parent() && img.parent().is("a") ? img.parent().data("webm") : "";
                        var dataOgg = img.parent() && img.parent().is("a") ? img.parent().data("ogg") :
                                "";
                        var texteffect = img.data("texteffect") && img.data("texteffect").length > 0 ? img.data("texteffect") : "";
                        var duration = img.data("duration") ? img.data("duration") : 0;
                        var button = "";
                        if ($("button", $(this)).length > 0)
                            if ($("button", $(this)).parent().is("a"))
                                button = $("button", $(this)).parent().clone().wrapAll("<div/>").parent().html();
                            else
                                button = $("button", $(this)).clone().wrapAll("<div/>").parent().html();
                        var video = [];
                        if ($("video", $(this)).length > 0) {
                            var $video = $("video", $(this));
                            var videoSrc = $video.attr("src");
                            var videoType = instance.checkVideoType($video.attr("src"));
                            video.push({
                                href: videoSrc,
                                type: videoType
                            });
                            if (videoType == TYPE_VIDEO_MP4)
                                if ($video.data("webm") && $video.data("webm").length > 0)
                                    video.push({
                                        href: $video.data("webm"),
                                        type: TYPE_VIDEO_WEBM
                                    })
                        }
                        var elem = new Array(instance.elemArray.length, src, title, description, link, target, video, "", lightbox, lightboxwidth, lightboxheight, dataWebm, dataOgg, texteffect, duration, button);
                        instance.elemArray.push(elem);
                        if (lightbox)
                            instance.lightboxArray.push(elem)
                    }
                });
                $(".amazingslider-thumbnails",
                        this.container).find("li").each(function (index) {
                    var img = $("img", $(this));
                    if (img.length > 0 && instance.elemArray.length > index) {
                        var dataSrc = img.data("src") && img.data("src").length > 0 ? img.data("src") : "";
                        var src = img.attr("src") && img.attr("src").length > 0 ? img.attr("src") : dataSrc;
                        instance.elemArray[index][ELEM_THUMBNAIL] = src
                    }
                });
                if (this.options.shownumbering)
                    for (var i = 0; i < this.elemArray.length; i++) {
                        var prefix = this.options.numberingformat.replace("%NUM", i + 1).replace("%TOTAL", this.elemArray.length);
                        this.elemArray[i][ELEM_TITLE] =
                                prefix + this.elemArray[i][ELEM_TITLE]
                    }
            },
            init: function (instance) {
                if (instance.elemArray.length <= 0)
                    return;
                var i;
                var elemLength = instance.elemArray.length;
                if (instance.options.randomplay) {
                    for (i = elemLength - 1; i > 0; i--) {
                        if (i == 1 && Math.random() < 0.5)
                            break;
                        var index = Math.floor(Math.random() * i);
                        var temp = instance.elemArray[index];
                        instance.elemArray[index] = instance.elemArray[i];
                        instance.elemArray[i] = temp
                    }
                    for (i = 0; i < elemLength; i++)
                        instance.elemArray[i][ELEM_ID] = i
                }
                instance.isAnimating = false;
                instance.isPaused = !instance.options.autoplay;
                instance.videoPaused = false;
                instance.lightboxPaused = false;
                instance.initVideoApi();
                instance.createMarkup();
                instance.createStyle();
                instance.createNav();
                instance.createArrows();
                instance.createBottomShadow();
                instance.createBackgroundImage();
                instance.createText();
                instance.createSliderTimeout();
                instance.createWm();
                instance.createRibbon();
                instance.initHtml5Lightbox();
                instance.googleFontsCreated = false;
                instance.curElem = -1;
                instance.prevElem = -1;
                instance.nextElem = -1;
                instance.firstslide = true;
                instance.loopCount =
                        0;
                instance.pauseCarousel = false;
                instance.curImageMarginTop = 0;
                instance.curImageMarginLeft = 0;
                instance.curImageMaxWidth = 100;
                instance.prevtextstyle = "";
                instance.html5Volume = 1;
                var firstSlide = 0;
                var params = instance.getParams();
                var paramValue = parseInt(params["firstslideid"]);
                if (!isNaN(paramValue) && paramValue >= 1 && paramValue <= instance.elemArray.length)
                    firstSlide = paramValue - 1;
                instance.slideRun(firstSlide)
            },
            getParams: function () {
                var result = {};
                var params = window.location.search.substring(1).split("&");
                for (var i = 0; i <
                        params.length; i++) {
                    var value = params[i].split("=");
                    if (value && value.length == 2)
                        result[value[0].toLowerCase()] = unescape(value[1])
                }
                return result
            },
            initHtml5Lightbox: function () {
                var i;
                if (this.lightboxArray.length > 0) {
                    var lightboxskinfolder = this.options.skinsfoldername.length > 0 ? this.options.skinsfoldername + "/" : "";
                    this.html5Lightbox = $([]).ashtml5lightbox({
                        jsfolder: this.options.jsfolder,
                        skinsfoldername: lightboxskinfolder,
                        nativehtml5controls: this.options.nativehtml5controls,
                        barheight: this.options.lightboxbarheight,
                        responsive: this.options.lightboxresponsive,
                        showtitle: this.options.lightboxshowtitle,
                        showdescription: this.options.lightboxshowdescription,
                        shownavigation: this.options.lightboxshownavigation,
                        thumbwidth: this.options.lightboxthumbwidth,
                        thumbheight: this.options.lightboxthumbheight,
                        thumbtopmargin: this.options.lightboxthumbtopmargin,
                        thumbbottommargin: this.options.lightboxthumbbottommargin,
                        titlebottomcss: this.options.lightboxtitlebottomcss,
                        descriptionbottomcss: this.options.lightboxdescriptionbottomcss,
                        id: this.id
                    });
                    for (i = 0; i < this.lightboxArray.length; i++)
                        this.html5Lightbox.addItem(this.lightboxArray[i][ELEM_LINK], this.lightboxArray[i][ELEM_TITLE], "amazingslider" + this.id, this.lightboxArray[i][ELEM_LIGHTBOXWIDTH], this.lightboxArray[i][ELEM_LIGHTBOXHEIGHT], this.lightboxArray[i][ELEM_WEBM], this.lightboxArray[i][ELEM_OGG], this.lightboxArray[i][ELEM_THUMBNAIL], this.lightboxArray[i][ELEM_DESCRIPTION]);
                    var instance = this;
                    this.html5Lightbox.onLightboxClosed = function () {
                        if (instance.lightboxPaused) {
                            instance.lightboxPaused =
                                    false;
                            instance.isPaused = false;
                            instance.sliderTimeout.resume()
                        }
                    }
                }
            },
            createGoogleFonts: function () {
                this.googleFontsCreated = true;
                if (this.options.previewmode)
                    return;
                if (this.textoptions.addgooglefonts && this.textoptions.googlefonts && this.textoptions.googlefonts.length > 0) {
                    var fontRef = ("https:" == document.location.protocol ? "https" : "http") + "://fonts.googleapis.com/css?family=" + this.textoptions.googlefonts;
                    var fontLink = document.createElement("link");
                    fontLink.setAttribute("rel", "stylesheet");
                    fontLink.setAttribute("type",
                            "text/css");
                    fontLink.setAttribute("href", fontRef);
                    fontLink.setAttribute("data-creator", "amazingslidercreator" + this.id);
                    document.getElementsByTagName("head")[0].appendChild(fontLink)
                }
            },
            createRibbon: function () {
                if (!this.options.showribbon || this.options.ribbonimage.length <= 0)
                    return;
                $(".amazingslider-ribbon-" + this.id, this.container).html("<img src='" + this.options.skinsfolder + this.options.ribbonimage + "' style='border:none;' />")
            },
            createWm: function () {
                if (!this.options.showwatermark)
                    return;
                if (this.options.watermarkstyle ==
                        "text" && this.options.watermarktext.length <= 0)
                    return;
                if (this.options.watermarkstyle == "image" && this.options.watermarkimage.length <= 0)
                    return;
                var html = "";
                if (this.options.watermarklink) {
                    html += "<a href='" + this.options.watermarklink + "' style='" + this.options.watermarklinkcss + "'";
                    if (this.options.versionmark == "AMC" + "om")
                        html += " class='amazingslider-watermark-" + this.id + "'";
                    if (this.options.watermarktitle)
                        html += " title='" + this.options.watermarktitle + "'";
                    if (this.options.watermarktarget)
                        html += " target='" + this.options.watermarktarget +
                                "'";
                    html += ">"
                }
                if (this.options.watermarkstyle == "text")
                    html += this.options.watermarktext;
                else if (this.options.watermarkstyle == "image")
                    html += "<img src='" + this.options.skinsfolder + this.options.watermarkimage + "' style='border:none;' />";
                if (this.options.watermarklink)
                    html += "</a>";
                var stylecode = this.options.watermarkpositioncss;
                if (this.options.watermarkstyle == "text" && this.options.watermarktext.length > 0)
                    stylecode += this.options.watermarktextcss;
                if (this.options.watermarklink)
                    stylecode += "cursor:pointer;";
                $(".amazingslider-box-" +
                        this.id, this.container).append('<div style="' + stylecode + '">' + html + "</div>")
            },
            initVideoApi: function () {
                var i, j, videos;
                var initYoutube = false,
                        initVimeo = false;
                for (i = 0; i < this.elemArray.length; i++) {
                    videos = this.elemArray[i][ELEM_VIDEO];
                    for (j = 0; j < videos.length; j++)
                        if (videos[j].type == TYPE_VIDEO_YOUTUBE)
                            initYoutube = true;
                        else if (videos[j].type == TYPE_VIDEO_VIMEO)
                            initVimeo = true
                }
                if (initYoutube) {
                    var tag = document.createElement("script");
                    tag.src = ("https:" == document.location.protocol ? "https" : "http") + "://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName("script")[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                }
                if (initVimeo) {
                    var tag = document.createElement("script");
                    tag.src = this.options.jsfolder + "froogaloop2.min.js";
                    var firstScriptTag = document.getElementsByTagName("script")[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                }
            },
            createSliderTimeout: function () {
                var instance = this;
                this.sliderTimeout = new ASliderTimer(this.options.slideinterval, function () {
                    instance.slideRun(-1)
                }, this.options.showtimer ?
                        function (percent) {
                            instance.updateTimer(percent)
                        } : null);
                if (instance.options.pauseonmouseover)
                    $(".amazingslider-slider-" + this.id, this.container).hover(function () {
                        if (!instance.isPaused)
                            instance.sliderTimeout.pause()
                    }, function () {
                        if (!instance.isPaused)
                            instance.sliderTimeout.resume(false)
                    });
                if (instance.options.showtimer)
                    $(".amazingslider-timer-" + instance.id, instance.container).css({
                        display: "block",
                        position: "absolute",
                        left: "0px",
                        top: instance.options.timerposition == "bottom" ? "" : "0px",
                        bottom: instance.options.timerposition ==
                                "bottom" ? "0px" : "",
                        width: "0%",
                        height: instance.options.timerheight + "px",
                        "background-color": instance.options.timercolor,
                        opacity: instance.options.timeropacity,
                        filter: "alpha(opacity=" + Math.round(100 * instance.options.timeropacity) + ")"
                    })
            },
            updateTimer: function (percent) {
                w = Math.round(percent * 100);
                if (w > 100)
                    w = 100;
                if (w < 0)
                    w = 0;
                $(".amazingslider-timer-" + this.id, this.container).css({
                    width: w + "%"
                })
            },
            createMarkup: function () {
                this.$wrapper = jQuery("" + "<div class='amazingslider-wrapper-" + this.id + "'>" + "<div class='amazingslider-background-image-" +
                        this.id + "'></div>" + "<div class='amazingslider-slider-" + this.id + "'>" + "<div class='amazingslider-bottom-shadow-" + this.id + "'></div>" + "<div class='amazingslider-box-" + this.id + "'>" + "<div class='amazingslider-swipe-box-" + this.id + "'>" + "<div class='amazingslider-space-" + this.id + "'></div>" + "<div class='amazingslider-img-box-" + this.id + "'></div>" + "<div class='amazingslider-lightbox-play-" + this.id + "'></div>" + "</div>" + "<div class='amazingslider-text-box-" + this.id + "'></div>" + "</div>" + "<div class='amazingslider-play-" +
                        this.id + "'></div>" + "<div class='amazingslider-video-wrapper-" + this.id + "'></div>" + "<div class='amazingslider-ribbon-" + this.id + "'></div>" + "<div class='amazingslider-arrow-left-" + this.id + "'></div>" + "<div class='amazingslider-arrow-right-" + this.id + "'></div>" + "<div class='amazingslider-timer-" + this.id + "'></div>" + "</div>" + "<div class='amazingslider-nav-" + this.id + "'><div class='amazingslider-nav-container-" + this.id + "'></div></div>" + "</div>");
                this.$wrapper.appendTo(this.container);
                $(".amazingslider-slider-" +
                        this.id, this.container).data("sliderid", this.id);
                var instance = this;
                if (this.options.enabletouchswipe)
                    $(".amazingslider-swipe-box-" + this.id, this.container).touchSwipe({
                        preventWebBrowser: false,
                        swipeLeft: function () {
                            instance.slideRun(-1)
                        },
                        swipeRight: function () {
                            instance.slideRun(-2)
                        }
                    });
                $(".amazingslider-play-" + this.id, this.container).click(function () {
                    instance.playVideo(true)
                })
            },
            playVideo: function (autoplay) {
                var videos = this.elemArray[this.curElem][ELEM_VIDEO];
                if (videos.length <= 0)
                    return;
                $(".amazingslider-img-" +
                        this.id, this.container).empty();
                this.sliderTimeout.stop();
                this.videoPaused = true;
                var href = videos[0].href;
                var type = videos[0].type;
                if (type == TYPE_VIDEO_YOUTUBE)
                    this.playYoutubeVideo(href, autoplay);
                else if (type == TYPE_VIDEO_VIMEO)
                    this.playVimeoVideo(href, autoplay);
                else if (type == TYPE_VIDEO_MP4) {
                    var webmhref = videos.length > 1 ? videos[1].href : "";
                    this.playMp4Video(href, webmhref, autoplay)
                }
            },
            playMp4Video: function (href, webmhref, autoplay) {
                var $videoWrapper = $(".amazingslider-video-wrapper-" + this.id, this.container);
                $videoWrapper.css({
                    display: "block",
                    width: "100%",
                    height: "100%"
                });
                var isHTML5 = true;
                if (ASPlatforms.isIE6789())
                    isHTML5 = false;
                else if ((ASPlatforms.isFirefox() || ASPlatforms.isOpera()) && !webmhref)
                    isHTML5 = false;
                if (isHTML5) {
                    var videoSrc = ASPlatforms.isFirefox() || ASPlatforms.isOpera() ? webmhref : href;
                    this.embedHTML5Video($videoWrapper, videoSrc, autoplay)
                } else {
                    var videoFile = href;
                    if (videoFile.charAt(0) != "/" && videoFile.substring(0, 5) != "http:" && videoFile.substring(0, 6) != "https:")
                        videoFile = this.options.htmlfolder + videoFile;
                    this.embedFlash($videoWrapper, "100%", "100%", this.options.jsfolder + "html5boxplayer.swf", "transparent", {
                        width: "100%",
                        height: "100%",
                        hidecontrols: this.options.videohidecontrols ? "1" : "0",
                        hideplaybutton: this.options.videohideplaybutton ? "1" : "0",
                        videofile: videoFile,
                        hdfile: "",
                        ishd: "0",
                        autoplay: autoplay ? "1" : "0",
                        errorcss: ".amazingslider-error" + this.options.errorcss,
                        id: this.id
                    })
                }
            },
            embedHTML5Video: function ($container, src, autoPlay) {
                $container.html("<div class='amazingslider-video-container-" + this.id + "' style='position:relative;display:block;width:100%;height:100%;'><video style='width:100%;height:100%;' " +
                        (this.options.videohidecontrols ? "" : "controls ") + " ></div>");
                $("video", $container).get(0).setAttribute("src", src);
                if (autoPlay)
                    $("video", $container).get(0).play();
                if (!this.options.nativehtml5controls)
                    $("video", $container).asHTML5VideoControls(this.options.skinsfolder, this, this.options.videohidecontrols, this.options.videohideplaybutton);
                var instance = this;
                $("video", $container).unbind("ended").bind("ended", function () {
                    instance.videoPaused = false;
                    if (!instance.isPaused)
                        instance.slideRun(-1)
                })
            },
            embedFlash: function ($container,
                    w, h, src, wmode, flashVars) {
                if (ASPlatforms.flashInstalled()) {
                    var htmlOptions = {
                        pluginspage: "http://www.adobe.com/go/getflashplayer",
                        quality: "high",
                        allowFullScreen: "true",
                        allowScriptAccess: "always",
                        type: "application/x-shockwave-flash"
                    };
                    htmlOptions.width = w;
                    htmlOptions.height = h;
                    htmlOptions.src = src;
                    htmlOptions.wmode = wmode;
                    htmlOptions.flashVars = $.param(flashVars);
                    var htmlString = "";
                    for (var key in htmlOptions)
                        htmlString += key + "=" + htmlOptions[key] + " ";
                    $container.html("<embed " + htmlString + "/>")
                } else
                    $container.html("<div class='amazingslider-error-" +
                            this.id + "' style='display:block; position:absolute; text-align:center; width:" + this.options.width + "px; left:0px; top:" + Math.round(this.options.height / 2 - 10) + "px;'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='https://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div>")
            },
            playVimeoVideo: function (href, autoplay) {
                var $videoWrapper = $(".amazingslider-video-wrapper-" + this.id, this.container);
                $videoWrapper.css({
                    display: "block",
                    width: "100%",
                    height: "100%"
                });
                if (this.options.previewmode) {
                    $videoWrapper.html("<div class='amazingslider-error-" + this.id + "'>To view Vimeo video, publish the slider then open it in your web browser</div>");
                    return
                } else {
                    var src = href + (href.indexOf("?") < 0 ? "?" : "&") + "autoplay=" + (autoplay && !ASPlatforms.isAndroid() ? "1" : "0") + "&api=1&player_id=amazingslider_vimeo_" +
                            this.id;
                    $videoWrapper.html("<iframe id='amazingslider_vimeo_" + this.id + "' width='" + this.options.width + "' height='" + this.options.height + "' src='" + src + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                    var vimeoIframe = $("#amazingslider_vimeo_" + this.id)[0];
                    var vimeoPlayer = $f(vimeoIframe);
                    var instance = this;
                    vimeoPlayer.addEvent("ready", function () {
                        vimeoPlayer.addEvent("finish", function (id) {
                            instance.videoPaused = false;
                            if (!instance.isPaused)
                                instance.slideRun(-1)
                        })
                    })
                }
            },
            getYoutubeParams: function (href) {
                var result = {};
                if (href.indexOf("?") < 0)
                    return result;
                var params = href.substring(href.indexOf("?") + 1).split("&");
                for (var i = 0; i < params.length; i++) {
                    var value = params[i].split("=");
                    if (value && value.length == 2 && value[0].toLowerCase() != "v")
                        result[value[0].toLowerCase()] = value[1]
                }
                return result
            },
            playYoutubeVideo: function (href, autoplay) {
                var $videoWrapper = $(".amazingslider-video-wrapper-" + this.id, this.container);
                $videoWrapper.css({
                    display: "block",
                    width: "100%",
                    height: "100%"
                });
                if (this.options.previewmode) {
                    $videoWrapper.html("<div class='amazingslider-error-" +
                            this.id + "'>To view YouTube video, publish the slider then open it in your web browser</div>");
                    return
                }
                var instance = this;
                if (!ASYouTubeIframeAPIReady) {
                    ASYouTubeTimeout += 100;
                    if (ASYouTubeTimeout < 3E3) {
                        setTimeout(function () {
                            instance.playYoutubeVideo(href, autoplay)
                        }, 100);
                        return
                    }
                }
                if (ASYouTubeIframeAPIReady && !ASPlatforms.isIE6() && !ASPlatforms.isIE7() && !ASPlatforms.isIOS() && !ASPlatforms.isAndroid()) {
                    $videoWrapper.html("<div id='amazingslider-video-" + this.id + "' style='display:block;'></div>");
                    var params = this.getYoutubeParams(href);
                    params = $.extend({}, params, {
                        "html5": 1,
                        "autoplay": 1,
                        "rel": 0,
                        "autohide": 1,
                        "wmode": "transparent"
                    });
                    if (instance.options.videohidecontrols)
                        params = $.extend({}, params, {
                            "controls": 0,
                            "showinfo": 0
                        });
                    var id = href.match(/(\?v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/)[2];
                    new YT.Player("amazingslider-video-" + this.id, {
                        width: instance.options.width,
                        height: instance.options.height,
                        videoId: id,
                        playerVars: params,
                        events: {
                            "onReady": function (event) {
                                event.target.playVideo()
                            },
                            "onStateChange": function (event) {
                                if (event.data ==
                                        YT.PlayerState.ENDED) {
                                    instance.videoPaused = false;
                                    if (!instance.isPaused)
                                        instance.slideRun(-1)
                                }
                            }
                        }
                    })
                } else {
                    var src = href + (href.indexOf("?") < 0 ? "?" : "&") + "autoplay=1&wmode=transparent&rel=0&autohide=1";
                    if (instance.options.videohidecontrols)
                        src += "&controls=0&showinfo=0";
                    $videoWrapper.html("<iframe width='" + instance.options.width + "' height='" + instance.options.height + "' src='" + src + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
                }
            },
            checkVideoType: function (href) {
                if (!href)
                    return -1;
                if (href.match(/\.(flv)(.*)?$/i))
                    return TYPE_VIDEO_FLASH;
                if (href.match(/\.(mp4|m4v)(.*)?$/i))
                    return TYPE_VIDEO_MP4;
                if (href.match(/\.(ogv|ogg)(.*)?$/i))
                    return TYPE_VIDEO_OGG;
                if (href.match(/\.(webm)(.*)?$/i))
                    return TYPE_VIDEO_WEBM;
                if (href.match(/\:\/\/.*(youtube\.com)/i) || href.match(/\:\/\/.*(youtu\.be)/i))
                    return TYPE_VIDEO_YOUTUBE;
                if (href.match(/\:\/\/.*(vimeo\.com)/i))
                    return TYPE_VIDEO_VIMEO;
                return 0
            },
            showTexteffect: function (event) {
                var sliderid = $(this).data("sliderid");
                $(".amazingslider-text-box-" +
                        sliderid, this).fadeIn()
            },
            hideTexteffect: function (event) {
                var sliderid = $(this).data("sliderid");
                $(".amazingslider-text-box-" + sliderid, this).fadeOut()
            },
            createText: function () {
                if (!this.options.showtext || this.textoptions.textstyle == "none")
                    return;
                var instance = this;
                this.container.bind("amazingslider.switchtext", function (event, prev, cur) {
                    $("head").find("style").each(function () {
                        if ($(this).data("creator") == "amazingslidercreator" + instance.id && $(this).data("csstype") == "texteffect")
                            $(this).remove()
                    });
                    var textHeadCss =
                            "<style type='text/css' data-creator='amazingslidercreator" + instance.id + "' data-csstype='texteffect'>" + ".amazingslider-text-" + instance.id + " {" + instance.textoptions.textcss + "} " + ".amazingslider-text-bg-" + instance.id + " {" + instance.textoptions.textbgcss + "} " + ".amazingslider-title-" + instance.id + " {" + instance.textoptions.titlecss + "} " + ".amazingslider-description-" + instance.id + " {" + instance.textoptions.descriptioncss + "} " + ".amazingslider-button-" + instance.id + " {" + instance.textoptions.buttoncss + "} ";
                    if (instance.textoptions.texteffectresponsive)
                        textHeadCss +=
                                "@media (max-width: " + instance.textoptions.texteffectresponsivesize + "px) {" + ".amazingslider-title-" + instance.id + " {" + instance.textoptions.titlecssresponsive + "} " + ".amazingslider-description-" + instance.id + " {" + instance.textoptions.descriptioncssresponsive + "} " + ".amazingslider-button-" + instance.id + " {" + instance.textoptions.buttoncssresponsive + "} " + "} ";
                    textHeadCss += "</style>";
                    $("head").append(textHeadCss);
                    var $textBoxWrapper = $(".amazingslider-text-box-" + instance.id, instance.container);
                    $textBoxWrapper.html("<div class='amazingslider-text-wrapper-" +
                            instance.id + "'></div>");
                    $(".amazingslider-slider-" + instance.id, instance.container).unbind("mouseenter", instance.showTexteffect).unbind("mouseleave", instance.hideTexteffect);
                    var $textWrapper = $(".amazingslider-text-wrapper-" + instance.id, instance.container);
                    if (instance.textoptions.textstyle == "static") {
                        $textWrapper.html("<div class='amazingslider-text-" + instance.id + "'>" + "<div class='amazingslider-text-bg-" + instance.id + "'></div>" + "<div class='amazingslider-title-" + instance.id + "'></div>" + "<div class='amazingslider-description-" +
                                instance.id + "'></div>" + "<div class='amazingslider-button-" + instance.id + "'></div>" + "</div>");
                        if (!instance.textoptions.textautohide)
                            $textBoxWrapper.css({
                                display: "block"
                            });
                        else if (instance.prevtextstyle != "static")
                            $textBoxWrapper.css({
                                display: instance.textoptions.textautohide ? "none" : "block"
                            });
                        $textWrapper.css({
                            width: "100%",
                            height: "auto",
                            position: "absolute"
                        });
                        if (instance.textoptions.textautohide)
                            $(".amazingslider-slider-" + instance.id, instance.container).hover(instance.showTexteffect, instance.hideTexteffect);
                        switch (instance.textoptions.textpositionstatic) {
                            case "top":
                                $textWrapper.css({
                                    left: "0px",
                                    top: "0px",
                                    "margin-top": instance.textoptions.textpositionmarginstatic + "px"
                                });
                                break;
                            case "bottom":
                                $textWrapper.css({
                                    left: "0px",
                                    bottom: "0px",
                                    "margin-bottom": instance.textoptions.textpositionmarginstatic + "px"
                                });
                                break;
                            case "topoutside":
                                $textWrapper.css({
                                    left: "0px",
                                    bottom: "100%",
                                    "margin-bottom": instance.textoptions.textpositionmarginstatic + "px"
                                });
                                break;
                            case "bottomoutside":
                                $textWrapper.css({
                                    left: "0px",
                                    top: "100%",
                                    "margin-top": instance.textoptions.textpositionmarginstatic +
                                            "px"
                                });
                                break
                        }
                    } else {
                        $textWrapper.html("<div class='amazingslider-text-holding-" + instance.id + "' style='visibility:hidden;" + instance.textoptions.textcss + "'>" + "<div class='amazingslider-text-bg-" + instance.id + "'></div>" + "<div class='amazingslider-title-" + instance.id + "'></div>" + "<div class='amazingslider-description-" + instance.id + "'></div>" + "<div class='amazingslider-button-" + instance.id + "'></div>" + "</div>" + "<div class='amazingslider-text-" + instance.id + "' style='position:absolute;top:0%;left:0%;" + (ASPlatforms.isIE678() ?
                                "opacity:inherit;filter:inherit;" : "") + "'>" + "<div class='amazingslider-text-bg-" + instance.id + "'></div>" + "<div class='amazingslider-title-" + instance.id + "'></div>" + "<div class='amazingslider-description-" + instance.id + "'></div>" + "<div class='amazingslider-button-" + instance.id + "'></div>" + "</div>");
                        $textWrapper.css({
                            display: "none",
                            position: "absolute"
                        })
                    }
                    instance.prevtextstyle = instance.textoptions.textstyle;
                    var $textBg = $(".amazingslider-text-bg-" + instance.id, instance.container);
                    var $text = $(".amazingslider-text-" +
                            instance.id, instance.container);
                    var $title = $(".amazingslider-title-" + instance.id, instance.container);
                    var $description = $(".amazingslider-description-" + instance.id, instance.container);
                    var $button = $(".amazingslider-button-" + instance.id, instance.container);
                    if (instance.textoptions.textstyle == "static") {
                        $title.html(instance.elemArray[cur][ELEM_TITLE]);
                        if (instance.elemArray[cur][ELEM_DESCRIPTION].length > 0)
                            $description.html(instance.elemArray[cur][ELEM_DESCRIPTION]).css({
                                "display": "block"
                            });
                        else
                            $description.css({
                                "display": "none"
                            }).html("");
                        if (instance.elemArray[cur][ELEM_BUTTON].length > 0)
                            $button.html(instance.elemArray[cur][ELEM_BUTTON]).css({
                                "display": "block"
                            });
                        else
                            $button.css({
                                "display": "none"
                            }).html("");
                        if (!instance.elemArray[cur][ELEM_TITLE] && !instance.elemArray[cur][ELEM_DESCRIPTION] && !instance.elemArray[cur][ELEM_BUTTON])
                            $textBg.hide();
                        else
                            $textBg.show()
                    } else if (instance.textoptions.textstyle == "dynamic")
                        if (!instance.elemArray[cur][ELEM_TITLE] && !instance.elemArray[cur][ELEM_DESCRIPTION] && !instance.elemArray[cur][ELEM_BUTTON])
                            $textWrapper.fadeOut();
                        else
                            $textWrapper.fadeOut(function () {
                                $title.html(instance.elemArray[cur][ELEM_TITLE]);
                                if (instance.elemArray[cur][ELEM_DESCRIPTION].length > 0)
                                    $description.html(instance.elemArray[cur][ELEM_DESCRIPTION]).css({
                                        "display": "block"
                                    });
                                else
                                    $description.css({
                                        "display": "none"
                                    }).html("");
                                if (instance.elemArray[cur][ELEM_BUTTON].length > 0)
                                    $button.html(instance.elemArray[cur][ELEM_BUTTON]).css({
                                        "display": "block"
                                    });
                                else
                                    $button.css({
                                        "display": "none"
                                    }).html("");
                                var pos = "bottomleft";
                                var positions = instance.textoptions.textpositiondynamic;
                                if (positions) {
                                    positions = positions.split(",");
                                    pos = positions[Math.floor(Math.random() * positions.length)];
                                    pos = $.trim(pos.toLowerCase())
                                }
                                switch (pos) {
                                    case "topleft":
                                        $textWrapper.css({
                                            left: "0px",
                                            right: "",
                                            top: "0px",
                                            bottom: ""
                                        });
                                        $textWrapper.css({
                                            margin: instance.textoptions.textpositionmargintop + "px " + instance.textoptions.textpositionmarginleft + "px"
                                        });
                                        break;
                                    case "topright":
                                        $textWrapper.css({
                                            left: "",
                                            right: "0px",
                                            top: "0px",
                                            bottom: ""
                                        });
                                        $textWrapper.css({
                                            margin: instance.textoptions.textpositionmargintop + "px " +
                                                    instance.textoptions.textpositionmarginright + "px"
                                        });
                                        break;
                                    case "bottomleft":
                                        $textWrapper.css({
                                            left: "0px",
                                            right: "",
                                            top: "",
                                            bottom: "0px"
                                        });
                                        $textWrapper.css({
                                            margin: instance.textoptions.textpositionmarginbottom + "px " + instance.textoptions.textpositionmarginleft + "px"
                                        });
                                        break;
                                    case "bottomright":
                                        $textWrapper.css({
                                            left: "",
                                            right: "0px",
                                            top: "",
                                            bottom: "0px"
                                        });
                                        $textWrapper.css({
                                            margin: instance.textoptions.textpositionmarginbottom + "px " + instance.textoptions.textpositionmarginright + "px"
                                        });
                                        break;
                                    case "topcenter":
                                        $text.css({
                                            left: "0px",
                                            right: "0px"
                                        });
                                        $textWrapper.css({
                                            left: "0px",
                                            right: "0px",
                                            top: "0px",
                                            bottom: ""
                                        });
                                        $textWrapper.css({
                                            margin: instance.textoptions.textpositionmargintop + "px " + instance.textoptions.textpositionmarginleft + "px"
                                        });
                                        break;
                                    case "bottomcenter":
                                        $text.css({
                                            left: "0px",
                                            right: "0px"
                                        });
                                        $textWrapper.css({
                                            left: "0px",
                                            right: "0px",
                                            top: "",
                                            bottom: "0px"
                                        });
                                        $textWrapper.css({
                                            margin: instance.textoptions.textpositionmarginbottom + "px " + instance.textoptions.textpositionmarginleft + "px"
                                        });
                                        break;
                                    case "centercenter":
                                        $text.css({
                                            left: "0px",
                                            right: "0px"
                                        });
                                        $textWrapper.css({
                                            left: "0px",
                                            right: "0px",
                                            top: "50%",
                                            bottom: ""
                                        });
                                        var h = $textWrapper.height();
                                        $textWrapper.css({
                                            margin: "-" + h / 2 + "px 0px 0px"
                                        });
                                        break
                                }
                                var effect_dirs = ["left", "right", "top", "bottom"];
                                var effect = null;
                                var effects = instance.textoptions.texteffect;
                                if (effects) {
                                    effects = effects.split(",");
                                    effect = effects[Math.floor(Math.random() * effects.length)];
                                    effect = $.trim(effect.toLowerCase())
                                }
                                var $textBox = instance.textoptions.texteffectseparate ? $(".amazingslider-title-" + instance.id, instance.container) :
                                        $(".amazingslider-text-" + instance.id, instance.container);
                                switch (effect) {
                                    case "fade":
                                        $textBox.css({
                                            opacity: 0
                                        });
                                        $textBox.delay(instance.textoptions.texteffectdelay).fadeTo(instance.textoptions.texteffectduration, 1);
                                        break;
                                    case "slide":
                                        var effect_dir = instance.textoptions.texteffectslidedirection;
                                        if (effect_dir == "random")
                                            effect_dir = effect_dirs[Math.floor(Math.random() * effect_dirs.length)];
                                        if (effect_dir == "left") {
                                            $textBox.css({
                                                left: "-" + instance.textoptions.texteffectslidedistance + "px",
                                                opacity: 0
                                            });
                                            $textBox.delay(instance.textoptions.texteffectdelay).animate({
                                                left: "0px",
                                                opacity: 1
                                            }, instance.textoptions.texteffectduration, instance.textoptions.texteffecteasing)
                                        } else if (effect_dir == "right") {
                                            $textBox.css({
                                                left: instance.textoptions.texteffectslidedistance + "px",
                                                opacity: 0
                                            });
                                            $textBox.delay(instance.textoptions.texteffectdelay).animate({
                                                left: "0px",
                                                opacity: 1
                                            }, instance.textoptions.texteffectduration, instance.textoptions.texteffecteasing)
                                        } else if (effect_dir == "top") {
                                            $textBox.css({
                                                top: "-" + instance.textoptions.texteffectslidedistance + "px",
                                                opacity: 0
                                            });
                                            $textBox.delay(instance.textoptions.texteffectdelay).animate({
                                                top: "0px",
                                                opacity: 1
                                            }, instance.textoptions.texteffectduration, instance.textoptions.texteffecteasing)
                                        } else if (effect_dir == "bottom") {
                                            $textBox.css({
                                                top: instance.textoptions.texteffectslidedistance + "px",
                                                opacity: 0
                                            });
                                            $textBox.delay(instance.textoptions.texteffectdelay).animate({
                                                top: "0px",
                                                opacity: 1
                                            }, instance.textoptions.texteffectduration, instance.textoptions.texteffecteasing)
                                        }
                                        break;
                                    default:
                                        $textBox.delay(instance.textoptions.texteffectdelay).show()
                                }
                                if (instance.textoptions.texteffectseparate && instance.elemArray[cur][ELEM_DESCRIPTION].length >
                                        0) {
                                    var effect1 = null;
                                    var effects1 = instance.textoptions.texteffect1;
                                    if (effects1) {
                                        effects1 = effects1.split(",");
                                        effect1 = effects1[Math.floor(Math.random() * effects1.length)];
                                        effect1 = $.trim(effect1.toLowerCase())
                                    }
                                    var $textBox1 = $(".amazingslider-description-" + instance.id, instance.container);
                                    switch (effect1) {
                                        case "fade":
                                            $textBox1.css({
                                                opacity: 0
                                            });
                                            $textBox1.delay(instance.textoptions.texteffectdelay1).fadeTo(instance.textoptions.texteffectduration1, 1);
                                            break;
                                        case "slide":
                                            var effect_dir1 = instance.textoptions.texteffectslidedirection1;
                                            if (effect_dir1 == "random")
                                                effect_dir1 = effect_dirs[Math.floor(Math.random() * effect_dirs.length)];
                                            if (effect_dir1 == "left") {
                                                $textBox1.css({
                                                    left: "-" + instance.textoptions.texteffectslidedistance1 + "px",
                                                    opacity: 0
                                                });
                                                $textBox1.delay(instance.textoptions.texteffectdelay1).animate({
                                                    left: "0px",
                                                    opacity: 1
                                                }, instance.textoptions.texteffectduration1, instance.textoptions.texteffecteasing1)
                                            } else if (effect_dir1 == "right") {
                                                $textBox1.css({
                                                    left: instance.textoptions.texteffectslidedistance1 + "px",
                                                    opacity: 0
                                                });
                                                $textBox1.delay(instance.textoptions.texteffectdelay1).animate({
                                                    left: "0px",
                                                    opacity: 1
                                                }, instance.textoptions.texteffectduration1, instance.textoptions.texteffecteasing1)
                                            } else if (effect_dir1 == "top") {
                                                $textBox1.css({
                                                    top: "-" + instance.textoptions.texteffectslidedistance1 + "px",
                                                    opacity: 0
                                                });
                                                $textBox1.delay(instance.textoptions.texteffectdelay1).animate({
                                                    top: "0px",
                                                    opacity: 1
                                                }, instance.textoptions.texteffectduration1, instance.textoptions.texteffecteasing1)
                                            } else if (effect_dir1 == "bottom") {
                                                $textBox1.css({
                                                    top: instance.textoptions.texteffectslidedistance1 + "px",
                                                    opacity: 0
                                                });
                                                $textBox1.delay(instance.textoptions.texteffectdelay1).animate({
                                                    top: "0px",
                                                    opacity: 1
                                                }, instance.textoptions.texteffectduration1, instance.textoptions.texteffecteasing1)
                                            }
                                            break;
                                        default:
                                            $textBox1.delay(instance.textoptions.texteffectdelay).show()
                                    }
                                }
                                if (instance.textoptions.texteffectseparate && instance.elemArray[cur][ELEM_BUTTON].length > 0) {
                                    var effect2 = null;
                                    var effects2 = instance.textoptions.texteffect2;
                                    if (effects2) {
                                        effects2 = effects2.split(",");
                                        effect2 = effects2[Math.floor(Math.random() * effects2.length)];
                                        effect2 = $.trim(effect2.toLowerCase())
                                    }
                                    var $textBox2 = $(".amazingslider-button-" +
                                            instance.id, instance.container);
                                    switch (effect2) {
                                        case "fade":
                                            $textBox2.css({
                                                opacity: 0
                                            });
                                            $textBox2.delay(instance.textoptions.texteffectdelay2).fadeTo(instance.textoptions.texteffectduration2, 1);
                                            break;
                                        case "slide":
                                            var effect_dir2 = instance.textoptions.texteffectslidedirection2;
                                            if (effect_dir2 == "random")
                                                effect_dir2 = effect_dirs[Math.floor(Math.random() * effect_dirs.length)];
                                            if (effect_dir2 == "left") {
                                                $textBox2.css({
                                                    left: "-" + instance.textoptions.texteffectslidedistance2 + "px",
                                                    opacity: 0
                                                });
                                                $textBox2.delay(instance.textoptions.texteffectdelay2).animate({
                                                    left: "0px",
                                                    opacity: 1
                                                }, instance.textoptions.texteffectduration2, instance.textoptions.texteffecteasing2)
                                            } else if (effect_dir2 == "right") {
                                                $textBox2.css({
                                                    left: instance.textoptions.texteffectslidedistance2 + "px",
                                                    opacity: 0
                                                });
                                                $textBox2.delay(instance.textoptions.texteffectdelay2).animate({
                                                    left: "0px",
                                                    opacity: 1
                                                }, instance.textoptions.texteffectduration2, instance.textoptions.texteffecteasing2)
                                            } else if (effect_dir2 == "top") {
                                                $textBox2.css({
                                                    top: "-" + instance.textoptions.texteffectslidedistance2 + "px",
                                                    opacity: 0
                                                });
                                                $textBox2.delay(instance.textoptions.texteffectdelay2).animate({
                                                    top: "0px",
                                                    opacity: 1
                                                }, instance.textoptions.texteffectduration2, instance.textoptions.texteffecteasing2)
                                            } else if (effect_dir2 == "bottom") {
                                                $textBox2.css({
                                                    top: instance.textoptions.texteffectslidedistance2 + "px",
                                                    opacity: 0
                                                });
                                                $textBox2.delay(instance.textoptions.texteffectdelay2).animate({
                                                    top: "0px",
                                                    opacity: 1
                                                }, instance.textoptions.texteffectduration2, instance.textoptions.texteffecteasing2)
                                            }
                                            break;
                                        default:
                                            $textBox2.delay(instance.textoptions.texteffectdelay).show()
                                    }
                                }
                                $textWrapper.show()
                            });
                    if (!instance.googleFontsCreated)
                        instance.createGoogleFonts()
                })
            },
            resizeFullscreenImage: function ($imgElem) {
                if ($imgElem.data("originalwidth") <= 0 || $imgElem.data("originalheight") <= 0)
                    return;
                var imgRatio = $imgElem.data("originalheight") / $imgElem.data("originalwidth");
                var sliderRatio = this.options.height / this.options.width;
                this.curImageMarginTop = 0;
                this.curImageMarginLeft = 0;
                this.curImageMaxWidth = 100;
                if (sliderRatio < imgRatio)
                    if (this.options.scalemode == "fit") {
                        this.curImageMaxWidth = sliderRatio / imgRatio * 100;
                        this.curImageMarginLeft = 50 - this.curImageMaxWidth / 2
                    } else
                        this.curImageMarginTop = -1 * (imgRatio - sliderRatio) * 50;
                else if (this.options.scalemode == "fit")
                    this.curImageMarginTop = (sliderRatio - imgRatio) * 50;
                else {
                    this.curImageMarginLeft = -1 * (1 / imgRatio - 1 / sliderRatio) * 50;
                    this.curImageMaxWidth = 100 - 2 * this.curImageMarginLeft
                }
                if (Math.abs(this.curImageMarginLeft) > 0)
                    $imgElem.css({
                        "max-width": this.curImageMaxWidth + "%",
                        "width": this.curImageMaxWidth + "%",
                        "height": "100%",
                        "margin-left": this.curImageMarginLeft + "%",
                        "margin-top": 0
                    });
                else
                    $imgElem.css({
                        "max-width": this.curImageMaxWidth + "%",
                        "width": this.curImageMaxWidth +
                                "%",
                        "height": "auto",
                        "margin-left": 0,
                        "margin-top": this.curImageMarginTop + "%"
                    })
            },
            resizeSlider: function () {
                if (!this.container.parent() || !this.container.parent().width())
                    return;
                this.options.width = this.container.parent().width();
                if (this.options.isfullscreen) {
                    this.options.height = this.container.parent().height();
                    if ($(".amazingslider-img-elem-" + this.id).length > 0)
                        this.resizeFullscreenImage($(".amazingslider-img-elem-" + this.id))
                } else
                    this.options.height = Math.round(this.options.width * this.options.originalheight /
                            this.options.originalwidth);
                $(".amazingslider-space-" + this.id, this.container).css({
                    width: this.options.width,
                    height: this.options.height
                });
                this.container.css({
                    "width": this.options.width,
                    "height": this.options.navdirection == "horizontal" && this.options.navmultirows ? "auto" : this.options.height
                });
                if (this.options.navthumbnavigationstyle != "auto") {
                    var $nav = $(".amazingslider-nav-" + this.id, this.container);
                    var $navContainer = $(".amazingslider-nav-container-" + this.id, this.container);
                    var $bulletWrapper = $(".amazingslider-bullet-wrapper-" +
                            this.id, this.container);
                    var $carLeftArrow = $(".amazingslider-car-left-arrow-" + this.id, this.container);
                    var $carRightArrow = $(".amazingslider-car-right-arrow-" + this.id, this.container);
                    if (this.options.navmultirows) {
                        if (this.options.navdirection == "horizontal") {
                            var n = Math.floor($nav.width() / (this.options.navwidth + this.options.navspacing));
                            m = Math.floor(($nav.width() - n * this.options.navwidth - (n - 1) * this.options.navspacing) / 2) - 2;
                            $navContainer.css({
                                width: "100%",
                                "margin-left": m + "px"
                            })
                        }
                    } else if (this.options.navdirection ==
                            "vertical" && $bulletWrapper.height() > $navContainer.height() || this.options.navdirection == "horizontal" && $bulletWrapper.width() > $navContainer.width()) {
                        if (this.options.navthumbnavigationstyle != "arrowinside") {
                            $carLeftArrow.css({
                                display: "block"
                            });
                            $carRightArrow.css({
                                display: "block"
                            })
                        }
                        var l = 0;
                        if (this.options.navdirection == "vertical") {
                            l = isNaN(parseInt($bulletWrapper.css("margin-top"))) ? 0 : parseInt($bulletWrapper.css("margin-top"));
                            if (l <= $navContainer.height() - $bulletWrapper.height())
                                l = $navContainer.height() -
                                        $bulletWrapper.height();
                            if (l >= 0)
                                l = 0;
                            $bulletWrapper.css({
                                "margin-top": l
                            })
                        } else {
                            l = isNaN(parseInt($bulletWrapper.css("margin-left"))) ? 0 : parseInt($bulletWrapper.css("margin-left"));
                            if (l <= $navContainer.width() - $bulletWrapper.width())
                                l = $navContainer.width() - $bulletWrapper.width();
                            if (l >= 0)
                                l = 0;
                            $bulletWrapper.css({
                                "margin-left": l
                            })
                        }
                        this.updateCarouselLeftRightArrow(l)
                    } else {
                        $carLeftArrow.css({
                            display: "none"
                        });
                        $carRightArrow.css({
                            display: "none"
                        });
                        if (this.options.navdirection == "vertical")
                            $bulletWrapper.css({
                                "margin-top": 0
                            });
                        else
                            $bulletWrapper.css({
                                "margin-left": "auto"
                            })
                    }
                }
            },
            createStyle: function () {
                if (!this.options.isresponsive) {
                    $(".amazingslider-space-" + this.id, this.container).css({
                        width: this.options.width,
                        height: this.options.height
                    });
                    this.container.css({
                        "width": this.options.width,
                        "height": this.options.navdirection == "horizontal" && this.options.navmultirows ? "auto" : this.options.height
                    })
                } else {
                    this.options.originalwidth = this.options.width;
                    this.options.originalheight = this.options.height;
                    this.resizeSlider();
                    var instance = this;
                    $(window).resize(function () {
                        instance.resizeSlider()
                    })
                }
                var styleCss = ".amazingslider-wrapper-" + this.id + " {display:block;position:relative;width:100%;height:auto;}";
                styleCss += ".amazingslider-slider-" + this.id + " {display:block;position:relative;left:0px;top:0px;width:100%;height:auto;";
                if (this.options.showshadow) {
                    var b = "0px 0px " + this.options.shadowsize + "px " + this.options.shadowcolor;
                    styleCss += "box-shadow:" + b + ";-moz-box-shadow:" + b + ";-webkit-box-shadow:" + b + ";";
                    if (ASPlatforms.isIE678() || ASPlatforms.isIE9)
                        styleCss +=
                                "filter:progid:DXImageTransform.Microsoft.Shadow(color=" + this.options.shadowcolor + ",direction=135,strength=" + this.options.shadowsize + ");"
                }
                styleCss += "}";
                styleCss += ".amazingslider-box-" + this.id + " {display:block;position:relative;left:0px;top:0px;width:100%;height:auto;";
                if (this.options.border > 0)
                    styleCss += "margin-left:-" + this.options.border + "px;border-width:" + this.options.border + "px;border-style:solid;border-color:" + this.options.bordercolor + ";";
                styleCss += "}";
                styleCss += ".amazingslider-swipe-box-" + this.id +
                        " {display:block;position:relative;left:0px;top:0px;width:100%;height:auto;}";
                styleCss += ".amazingslider-space-" + this.id + " {display:block;position:relative;left:0px;top:0px;width:100%;height:auto;visibility:hidden;line-height:0px;font-size:0px;}";
                styleCss += ".amazingslider-img-box-" + this.id + " {display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;}";
                styleCss += ".amazingslider-lightbox-play-" + this.id + " {display:none;position:absolute;left:50%;top:50%;cursor:pointer;width:" + this.options.playvideoimagewidth +
                        "px;height:" + this.options.playvideoimageheight + "px;margin-top:" + "-" + Math.round(this.options.playvideoimageheight / 2) + "px;margin-left:" + "-" + Math.round(this.options.playvideoimagewidth / 2) + "px; background:url('" + this.options.skinsfolder + this.options.playvideoimage + "') no-repeat left top;}";
                styleCss += ".amazingslider-play-" + this.id + " {display:none;position:absolute;left:50%;top:50%;cursor:pointer;width:" + this.options.playvideoimagewidth + "px;height:" + this.options.playvideoimageheight + "px;margin-top:" + "-" +
                        Math.round(this.options.playvideoimageheight / 2) + "px;margin-left:" + "-" + Math.round(this.options.playvideoimagewidth / 2) + "px; background:url('" + this.options.skinsfolder + this.options.playvideoimage + "') no-repeat left top;}";
                styleCss += ".amazingslider-video-wrapper-" + this.id + " {display:none;position:absolute;left:0px;top:0px;background-color:#000;text-align:center;}";
                styleCss += ".amazingslider-error-" + this.id + " {display:block;position:relative;margin:0 auto;width:80%;top:50%;color:#fff;font:16px Arial,Tahoma,Helvetica,sans-serif;}";
                if (this.options.showribbon) {
                    styleCss += ".amazingslider-ribbon-" + this.id + " {display:block;position:absolute;";
                    switch (this.options.ribbonposition) {
                        case "topleft":
                            styleCss += "left:" + this.options.ribbonimagex + "px;top:" + this.options.ribbonimagey + "px;";
                            break;
                        case "topright":
                            styleCss += "right:" + this.options.ribbonimagex + "px;top:" + this.options.ribbonimagey + "px;";
                            break;
                        case "bottomleft":
                            styleCss += "left:" + this.options.ribbonimagex + "px;bottom:" + this.options.ribbonimagey + "px;";
                            break;
                        case "bottomright":
                            styleCss +=
                                    "right:" + this.options.ribbonimagex + "px;bottom:" + this.options.ribbonimagey + "px;";
                            break;
                        case "top":
                            styleCss += "width:100%;height:auto;margin:0 auto;top:" + this.options.ribbonimagey + "px;";
                        case "bottom":
                            styleCss += "width:100%;height:auto;text-align:center;bottom:" + this.options.ribbonimagey + "px;"
                    }
                    styleCss += "}"
                }
                styleCss += ".amazingslider-video-wrapper-" + this.id + " video {max-width:100%;height:auto;}";
                styleCss += ".amazingslider-video-wrapper-" + this.id + " iframe, " + ".amazingslider-video-wrapper-" + this.id + " object, " +
                        ".amazingslider-video-wrapper-" + this.id + " embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
                if (this.options.navstyle == "thumbnails" && this.options.navthumbstyle != "imageonly") {
                    styleCss += ".amazingslider-nav-thumbnail-tite-" + this.id + " {" + this.options.navthumbtitlecss + "}";
                    styleCss += ".amazingslider-nav-thumbnail-tite-" + this.id + ":hover {" + this.options.navthumbtitlehovercss + "}";
                    if (this.options.navthumbstyle == "imageandtitledescription" || this.options.navthumbstyle == "textonly")
                        styleCss += ".amazingslider-nav-thumbnail-description-" +
                                this.id + " {" + this.options.navthumbdescriptioncss + "}"
                }
                $("head").append("<style type='text/css' data-creator='amazingslidercreator" + this.id + "'>" + styleCss + "</style>");
                if (this.options.customcss && this.options.customcss.length > 0)
                    $("head").append("<style type='text/css' data-creator='amazingslidercreator" + this.id + "'>" + this.options.customcss + "</style>")
            },
            createBottomShadow: function () {
                if (!this.options.showbottomshadow)
                    return;
                var $shadow = $(".amazingslider-bottom-shadow-" + this.id, this.container);
                var l = (100 -
                        this.options.bottomshadowimagewidth) / 2;
                $shadow.css({
                    display: "block",
                    position: "absolute",
                    left: l + "%",
                    top: this.options.bottomshadowimagetop + "%",
                    width: this.options.bottomshadowimagewidth + "%",
                    height: "auto"
                });
                $shadow.html("<img src='" + this.options.skinsfolder + this.options.bottomshadowimage + "' style='display:block;position:relative;width:100%;height:auto;max-width:100%;' />")
            },
            createBackgroundImage: function () {
                if (!this.options.showbackgroundimage || !this.options.backgroundimage)
                    return;
                var $background = $(".amazingslider-background-image-" +
                        this.id, this.container);
                var l = (100 - this.options.backgroundimagewidth) / 2;
                $background.css({
                    display: "block",
                    position: "absolute",
                    left: l + "%",
                    top: this.options.backgroundimagetop + "%",
                    width: this.options.backgroundimagewidth + "%",
                    height: "auto"
                });
                $background.html("<img src='" + this.options.skinsfolder + this.options.backgroundimage + "' style='display:block;position:relative;width:100%;height:auto;' />")
            },
            createArrows: function () {
                if (this.options.arrowstyle == "none")
                    return;
                var instance = this;
                var $leftArrow = $(".amazingslider-arrow-left-" +
                        this.id, this.container);
                var $rightArrow = $(".amazingslider-arrow-right-" + this.id, this.container);
                $leftArrow.css({
                    overflow: "hidden",
                    position: "absolute",
                    cursor: "pointer",
                    width: this.options.arrowwidth + "px",
                    height: this.options.arrowheight + "px",
                    left: this.options.arrowmargin + "px",
                    top: this.options.arrowtop + "%",
                    "margin-top": "-" + this.options.arrowheight / 2 + "px",
                    background: "url('" + this.options.arrowimage + "') no-repeat left top"
                });
                if (ASPlatforms.isIE678())
                    $leftArrow.css({
                        opacity: "inherit",
                        filter: "inherit"
                    });
                $leftArrow.hover(function () {
                    $(this).css({
                        "background-position": "left bottom"
                    })
                },
                        function () {
                            $(this).css({
                                "background-position": "left top"
                            })
                        });
                $leftArrow.click(function () {
                    instance.slideRun(-2)
                });
                $rightArrow.css({
                    overflow: "hidden",
                    position: "absolute",
                    cursor: "pointer",
                    width: this.options.arrowwidth + "px",
                    height: this.options.arrowheight + "px",
                    right: this.options.arrowmargin + "px",
                    top: this.options.arrowtop + "%",
                    "margin-top": "-" + this.options.arrowheight / 2 + "px",
                    background: "url('" + this.options.arrowimage + "') no-repeat right top"
                });
                if (ASPlatforms.isIE678())
                    $rightArrow.css({
                        opacity: "inherit",
                        filter: "inherit"
                    });
                $rightArrow.hover(function () {
                    $(this).css({
                        "background-position": "right bottom"
                    })
                }, function () {
                    $(this).css({
                        "background-position": "right top"
                    })
                });
                $rightArrow.click(function () {
                    instance.slideRun(-1)
                });
                if (this.options.arrowstyle == "always") {
                    $leftArrow.css({
                        display: "block"
                    });
                    $rightArrow.css({
                        display: "block"
                    })
                } else {
                    $leftArrow.css({
                        display: "none"
                    });
                    $rightArrow.css({
                        display: "none"
                    });
                    $(".amazingslider-slider-" + this.id, this.container).hover(function () {
                        clearTimeout(instance.arrowTimeout);
                        if (ASPlatforms.isIE678()) {
                            $(".amazingslider-arrow-left-" +
                                    instance.id, instance.container).show();
                            $(".amazingslider-arrow-right-" + instance.id, instance.container).show()
                        } else {
                            $(".amazingslider-arrow-left-" + instance.id, instance.container).fadeIn();
                            $(".amazingslider-arrow-right-" + instance.id, instance.container).fadeIn()
                        }
                    }, function () {
                        instance.arrowTimeout = setTimeout(function () {
                            if (ASPlatforms.isIE678()) {
                                $(".amazingslider-arrow-left-" + instance.id, instance.container).hide();
                                $(".amazingslider-arrow-right-" + instance.id, instance.container).hide()
                            } else {
                                $(".amazingslider-arrow-left-" +
                                        instance.id, instance.container).fadeOut();
                                $(".amazingslider-arrow-right-" + instance.id, instance.container).fadeOut()
                            }
                        }, instance.options.arrowhideonmouseleave)
                    })
                }
            },
            carMoveLeft: function () {
                var $navContainer = $(".amazingslider-nav-container-" + this.id, this.container);
                var $bulletWrapper = $(".amazingslider-bullet-wrapper-" + this.id, this.container);
                if ($navContainer.width() >= $bulletWrapper.width())
                    return;
                if (this.options.navshowpreview)
                    $(".amazingslider-nav-preview-" + this.id, this.container).hide();
                var dist = $navContainer.width() +
                        this.options.navspacing;
                var l = (isNaN(parseInt($bulletWrapper.css("margin-left"))) ? 0 : parseInt($bulletWrapper.css("margin-left"))) - dist;
                if (l <= $navContainer.width() - $bulletWrapper.width())
                    l = $navContainer.width() - $bulletWrapper.width();
                if (l >= 0)
                    l = 0;
                $bulletWrapper.animate({
                    "margin-left": l
                }, {
                    queue: false,
                    duration: 500,
                    easing: "easeOutCirc"
                });
                if (this.options.navthumbnavigationstyle != "auto")
                    this.updateCarouselLeftRightArrow(l)
            },
            carMoveRight: function () {
                var $navContainer = $(".amazingslider-nav-container-" + this.id,
                        this.container);
                var $bulletWrapper = $(".amazingslider-bullet-wrapper-" + this.id, this.container);
                if ($navContainer.width() >= $bulletWrapper.width())
                    return;
                if (this.options.navshowpreview)
                    $(".amazingslider-nav-preview-" + this.id, this.container).hide();
                var dist = $navContainer.width() + this.options.navspacing;
                var l = (isNaN(parseInt($bulletWrapper.css("margin-left"))) ? 0 : parseInt($bulletWrapper.css("margin-left"))) + dist;
                if (l <= $navContainer.width() - $bulletWrapper.width())
                    l = $navContainer.width() - $bulletWrapper.width();
                if (l >= 0)
                    l = 0;
                $bulletWrapper.animate({
                    "margin-left": l
                }, {
                    queue: false,
                    duration: 500,
                    easing: "easeOutCirc"
                });
                if (this.options.navthumbnavigationstyle != "auto")
                    this.updateCarouselLeftRightArrow(l)
            },
            carMoveBottom: function () {
                var $navContainer = $(".amazingslider-nav-container-" + this.id, this.container);
                var $bulletWrapper = $(".amazingslider-bullet-wrapper-" + this.id, this.container);
                if ($navContainer.height() >= $bulletWrapper.height())
                    return;
                if (this.options.navshowpreview)
                    $(".amazingslider-nav-preview-" + this.id, this.container).hide();
                var dist = $navContainer.height() + this.options.navspacing;
                var l = (isNaN(parseInt($bulletWrapper.css("margin-top"))) ? 0 : parseInt($bulletWrapper.css("margin-top"))) + dist;
                if (l <= $navContainer.height() - $bulletWrapper.height())
                    l = $navContainer.height() - $bulletWrapper.height();
                if (l >= 0)
                    l = 0;
                $bulletWrapper.animate({
                    "margin-top": l
                }, {
                    queue: false,
                    duration: 500,
                    easing: "easeOutCirc"
                });
                if (this.options.navthumbnavigationstyle != "auto")
                    this.updateCarouselLeftRightArrow(l)
            },
            carMoveTop: function () {
                var $navContainer = $(".amazingslider-nav-container-" +
                        this.id, this.container);
                var $bulletWrapper = $(".amazingslider-bullet-wrapper-" + this.id, this.container);
                if ($navContainer.height() >= $bulletWrapper.height())
                    return;
                if (this.options.navshowpreview)
                    $(".amazingslider-nav-preview-" + this.id, this.container).hide();
                var dist = $navContainer.height() + this.options.navspacing;
                var l = (isNaN(parseInt($bulletWrapper.css("margin-top"))) ? 0 : parseInt($bulletWrapper.css("margin-top"))) - dist;
                if (l <= $navContainer.height() - $bulletWrapper.height())
                    l = $navContainer.height() - $bulletWrapper.height();
                if (l >= 0)
                    l = 0;
                $bulletWrapper.animate({
                    "margin-top": l
                }, {
                    queue: false,
                    duration: 500,
                    easing: "easeOutCirc"
                });
                if (this.options.navthumbnavigationstyle != "auto")
                    this.updateCarouselLeftRightArrow(l)
            },
            updateCarouselLeftRightArrow: function (l) {
                var $navContainer = $(".amazingslider-nav-container-" + this.id, this.container);
                var $bulletWrapper = $(".amazingslider-bullet-wrapper-" + this.id, this.container);
                if (this.options.navdirection == "vertical") {
                    if (l == 0) {
                        $(".amazingslider-car-left-arrow-" + this.id, this.container).css({
                            "background-position": "left bottom",
                            cursor: ""
                        });
                        $(".amazingslider-car-left-arrow-" + this.id, this.container).data("disabled", true)
                    } else {
                        $(".amazingslider-car-left-arrow-" + this.id, this.container).css({
                            "background-position": "left top",
                            cursor: "pointer"
                        });
                        $(".amazingslider-car-left-arrow-" + this.id, this.container).data("disabled", false)
                    }
                    if (l == $navContainer.height() - $bulletWrapper.height()) {
                        $(".amazingslider-car-right-arrow-" + this.id, this.container).css({
                            "background-position": "right bottom",
                            cursor: ""
                        });
                        $(".amazingslider-car-right-arrow-" + this.id,
                                this.container).data("disabled", true)
                    } else {
                        $(".amazingslider-car-right-arrow-" + this.id, this.container).css({
                            "background-position": "right top",
                            cursor: "pointer"
                        });
                        $(".amazingslider-car-right-arrow-" + this.id, this.container).data("disabled", false)
                    }
                } else {
                    if (l == 0) {
                        $(".amazingslider-car-left-arrow-" + this.id, this.container).css({
                            "background-position": "left bottom",
                            cursor: ""
                        });
                        $(".amazingslider-car-left-arrow-" + this.id, this.container).data("disabled", true)
                    } else {
                        $(".amazingslider-car-left-arrow-" + this.id, this.container).css({
                            "background-position": "left top",
                            cursor: "pointer"
                        });
                        $(".amazingslider-car-left-arrow-" + this.id, this.container).data("disabled", false)
                    }
                    if (l == $navContainer.width() - $bulletWrapper.width()) {
                        $(".amazingslider-car-right-arrow-" + this.id, this.container).css({
                            "background-position": "right bottom",
                            cursor: ""
                        });
                        $(".amazingslider-car-right-arrow-" + this.id, this.container).data("disabled", true)
                    } else {
                        $(".amazingslider-car-right-arrow-" + this.id, this.container).css({
                            "background-position": "right top",
                            cursor: "pointer"
                        });
                        $(".amazingslider-car-right-arrow-" +
                                this.id, this.container).data("disabled", false)
                    }
                }
            },
            createNav: function () {
                if (this.options.navstyle == "none" && !this.options.navshowbuttons)
                    return;
                var instance = this;
                var i;
                var $nav = $(".amazingslider-nav-" + this.id, this.container);
                var $navContainer = $(".amazingslider-nav-container-" + this.id, this.container);
                var $bulletWrapper = $("<div class='amazingslider-bullet-wrapper-" + this.id + "' style='display:block;position:relative;'></div>");
                $navContainer.css({
                    overflow: "hidden"
                });
                if (this.options.navstyle == "thumbnails") {
                    this.options.navimagewidth =
                            this.options.navwidth - this.options.navborder * 2;
                    this.options.navimageheight = this.options.navheight - this.options.navborder * 2;
                    if (this.options.navthumbstyle == "imageandtitle")
                        this.options.navheight += this.options.navthumbtitleheight;
                    else if (this.options.navthumbstyle == "imageandtitledescription" || this.options.navthumbstyle == "textonly")
                        this.options.navwidth += this.options.navthumbtitlewidth
                }
                if (this.options.navdirection == "vertical") {
                    var len = this.options.navstyle == "none" ? 0 : this.elemArray.length * this.options.navheight +
                            (this.elemArray.length - 1) * this.options.navspacing;
                    if (this.options.navshowbuttons) {
                        if (this.options.navshowarrow) {
                            len += len > 0 ? this.options.navspacing : 0;
                            len += 2 * this.options.navheight + this.options.navspacing
                        }
                        if (this.options.navshowplaypause && !this.options.navshowplaypausestandalone) {
                            len += len > 0 ? this.options.navspacing : 0;
                            len += this.options.navheight
                        }
                    }
                    $bulletWrapper.css({
                        height: len + "px",
                        width: "auto"
                    })
                } else if (this.options.navmultirows)
                    $bulletWrapper.css({
                        width: "100%",
                        height: "auto"
                    });
                else {
                    var len = this.options.navstyle ==
                            "none" ? 0 : this.elemArray.length * this.options.navwidth + (this.elemArray.length - 1) * this.options.navspacing;
                    if (this.options.navshowbuttons) {
                        if (this.options.navshowarrow) {
                            len += len > 0 ? this.options.navspacing : 0;
                            len += 2 * this.options.navwidth + this.options.navspacing
                        }
                        if (this.options.navshowplaypause && !this.options.navshowplaypausestandalone) {
                            len += len > 0 ? this.options.navspacing : 0;
                            len += this.options.navwidth
                        }
                    }
                    $bulletWrapper.css({
                        width: len + "px",
                        height: "auto"
                    })
                }
                $navContainer.append($bulletWrapper);
                var bulletPos = 0;
                var bulletSize =
                        this.options.navdirection == "vertical" ? this.options.navwidth : this.options.navheight;
                if (this.options.navstyle == "thumbnails" && this.options.navshowfeaturedarrow) {
                    bulletSize += this.options.navdirection == "vertical" ? this.options.navfeaturedarrowimagewidth : this.options.navfeaturedarrowimageheight;
                    bulletPos = this.options.navdirection == "vertical" ? this.options.navfeaturedarrowimagewidth : this.options.navfeaturedarrowimageheight
                }
                var navmarginX = "navmarginx" in this.options ? this.options.navmarginx : this.options.navmargin;
                var navmarginY = "navmarginy" in this.options ? this.options.navmarginy : this.options.navmargin;
                $nav.css({
                    display: "block",
                    position: this.options.navdirection == "horizontal" && this.options.navmultirows ? "relative" : "absolute",
                    height: "auto"
                });
                switch (this.options.navposition) {
                    case "top":
                        $bulletWrapper.css({
                            "margin-left": "auto",
                            "margin-right": "auto",
                            "height": bulletSize + "px"
                        });
                        $nav.css({
                            "width": "100%",
                            top: "0%",
                            left: "0px",
                            "margin-top": navmarginY + "px"
                        });
                        break;
                    case "topleft":
                        $bulletWrapper.css({
                            "height": bulletSize +
                                    "px"
                        });
                        $nav.css({
                            "max-width": "100%",
                            top: "0px",
                            left: "0px",
                            "margin-top": navmarginY + "px",
                            "margin-left": navmarginX + "px"
                        });
                        break;
                    case "topright":
                        $bulletWrapper.css({
                            "height": bulletSize + "px"
                        });
                        $nav.css({
                            "max-width": "100%",
                            top: "0px",
                            right: "0px",
                            "margin-top": navmarginY + "px",
                            "margin-right": navmarginX + "px"
                        });
                        break;
                    case "bottom":
                        $bulletWrapper.css({
                            "margin-left": "auto",
                            "margin-right": "auto",
                            "margin-top": bulletPos + "px"
                        });
                        $nav.css({
                            "width": "100%",
                            top: "100%",
                            left: "0px",
                            "margin-top": String(navmarginY - bulletPos) +
                                    "px"
                        });
                        break;
                    case "bottomleft":
                        $bulletWrapper.css({
                            "margin-top": bulletPos + "px"
                        });
                        $nav.css({
                            "max-width": "100%",
                            bottom: "0px",
                            left: "0px",
                            "margin-bottom": navmarginY + "px",
                            "margin-top": String(navmarginY - bulletPos) + "px",
                            "margin-left": navmarginX + "px"
                        });
                        break;
                    case "bottomright":
                        $bulletWrapper.css({
                            "margin-top": bulletPos + "px"
                        });
                        $nav.css({
                            "max-width": "100%",
                            bottom: "0px",
                            right: "0px",
                            "margin-bottom": navmarginY + "px",
                            "margin-top": String(navmarginY - bulletPos) + "px",
                            "margin-right": navmarginX + "px"
                        });
                        break;
                    case "left":
                        $bulletWrapper.css({
                            "width": bulletSize +
                                    "px"
                        });
                        $nav.css({
                            "height": "100%",
                            width: bulletSize + "px",
                            top: "0%",
                            left: "0%",
                            "margin-left": navmarginX + "px"
                        });
                        $navContainer.css({
                            display: "block",
                            position: "absolute",
                            top: "0px",
                            bottom: "0px",
                            left: "0px",
                            right: "0px",
                            height: "auto"
                        });
                        break;
                    case "right":
                        $bulletWrapper.css({
                            "margin-left": bulletPos + "px"
                        });
                        $nav.css({
                            "height": "100%",
                            width: bulletSize + "px",
                            top: "0%",
                            left: "100%",
                            "margin-left": String(navmarginX - bulletPos) + "px"
                        });
                        $navContainer.css({
                            display: "block",
                            position: "absolute",
                            top: "0px",
                            bottom: "0px",
                            left: "0px",
                            right: "0px",
                            height: "auto"
                        });
                        break
                }
                if (this.options.navstyle != "none") {
                    var $bullet;
                    for (i = 0; i < this.elemArray.length; i++) {
                        $bullet = this.createNavBullet(i);
                        $bulletWrapper.append($bullet)
                    }
                    if (this.options.navmultirows)
                        $bulletWrapper.append('<div style="clear:both;"></div>');
                    $nav.mouseenter(function () {
                        instance.pauseCarousel = true
                    });
                    $nav.mouseleave(function () {
                        instance.pauseCarousel = false
                    });
                    if (instance.options.navthumbnavigationstyle == "auto")
                        $nav.mousemove(function (e) {
                            if (instance.options.navdirection == "vertical") {
                                if ($nav.height() >=
                                        $bulletWrapper.height())
                                    return;
                                var d = e.pageY - $nav.offset().top;
                                if (d < 10)
                                    d = 0;
                                if (d > $nav.height() - 10)
                                    d = $nav.height();
                                var r = d / $nav.height();
                                var l = ($nav.height() - $bulletWrapper.height()) * r;
                                $bulletWrapper.animate({
                                    "margin-top": l
                                }, {
                                    queue: false,
                                    duration: 20,
                                    easing: "easeOutCubic"
                                })
                            } else {
                                if ($nav.width() >= $bulletWrapper.width())
                                    return;
                                var d = e.pageX - $nav.offset().left;
                                if (d < 10)
                                    d = 0;
                                if (d > $nav.width() - 10)
                                    d = $nav.width();
                                var r = d / $nav.width();
                                var l = ($nav.width() - $bulletWrapper.width()) * r;
                                $bulletWrapper.animate({
                                    "margin-left": l
                                }, {
                                    queue: false,
                                    duration: 20,
                                    easing: "easeOutCubic"
                                })
                            }
                        });
                    else {
                        var m = 0;
                        if (instance.options.navthumbnavigationstyle == "arrow") {
                            m = instance.options.navthumbnavigationarrowimagewidth + instance.options.navspacing;
                            if (instance.options.navdirection == "horizontal")
                                if (instance.options.navmultirows) {
                                    var n = Math.floor($nav.width() / (instance.options.navwidth + instance.options.navspacing));
                                    m = Math.floor(($nav.width() - n * instance.options.navwidth - (n - 1) * instance.options.navspacing) / 2);
                                    $navContainer.css({
                                        width: "100%",
                                        "margin-left": m +
                                                "px"
                                    })
                                } else {
                                    var n = Math.floor(($nav.width() - 2 * m + instance.options.navspacing) / (instance.options.navwidth + instance.options.navspacing));
                                    m = Math.floor(($nav.width() - n * instance.options.navwidth - (n - 1) * instance.options.navspacing) / 2);
                                    $navContainer.css({
                                        "margin-left": m + "px",
                                        "margin-right": m + "px"
                                    })
                                }
                            else
                                $navContainer.css({
                                    "margin-top": m + "px",
                                    "margin-bottom": m + "px"
                                })
                        } else if (instance.options.navdirection == "horizontal")
                            $navContainer.css({
                                "margin-left": "0px",
                                "margin-right": "0px"
                            });
                        else
                            $navContainer.css({
                                "margin-top": "0px",
                                "margin-bottom": "0px"
                            });
                        var $carLeftArrow = $("<div class='amazingslider-car-left-arrow-" + instance.id + "' style='display:none;'></div>");
                        var $carRightArrow = $("<div class='amazingslider-car-right-arrow-" + instance.id + "' style='display:none;'></div>");
                        $nav.append($carLeftArrow);
                        $nav.append($carRightArrow);
                        $carLeftArrow.css({
                            overflow: "hidden",
                            position: "absolute",
                            cursor: "pointer",
                            display: "none",
                            width: instance.options.navthumbnavigationarrowimagewidth + "px",
                            height: instance.options.navthumbnavigationarrowimageheight +
                                    "px",
                            background: "url('" + instance.options.skinsfolder + instance.options.navthumbnavigationarrowimage + "') no-repeat left top"
                        });
                        $carRightArrow.css({
                            overflow: "hidden",
                            position: "absolute",
                            cursor: "pointer",
                            display: "none",
                            width: instance.options.navthumbnavigationarrowimagewidth + "px",
                            height: instance.options.navthumbnavigationarrowimageheight + "px",
                            background: "url('" + instance.options.skinsfolder + instance.options.navthumbnavigationarrowimage + "') no-repeat right top"
                        });
                        var p = instance.options.navdirection == "vertical" ?
                                instance.options.navwidth / 2 - instance.options.navthumbnavigationarrowimagewidth / 2 : instance.options.navheight / 2 - instance.options.navthumbnavigationarrowimageheight / 2;
                        if (instance.options.navposition == "bottomleft" || instance.options.navposition == "bottomright" || instance.options.navposition == "bottom" || instance.options.navposition == "right")
                            p += bulletPos;
                        if (instance.options.navdirection == "vertical") {
                            $carLeftArrow.css({
                                top: instance.options.navthumbnavigationstyle == "arrowoutside" ? "-" + instance.options.navthumbnavigationarrowimageheight +
                                        "px" : "0px",
                                left: "0px",
                                "margin-left": p + "px"
                            });
                            $carRightArrow.css({
                                bottom: instance.options.navthumbnavigationstyle == "arrowoutside" ? "-" + instance.options.navthumbnavigationarrowimageheight + "px" : "0px",
                                left: "0px",
                                "margin-left": p + "px"
                            })
                        } else {
                            $carLeftArrow.css({
                                left: instance.options.navthumbnavigationstyle == "arrowoutside" ? "-" + instance.options.navthumbnavigationarrowimagewidth + "px" : "0px",
                                top: "0px",
                                "margin-top": p + "px"
                            });
                            $carRightArrow.css({
                                right: instance.options.navthumbnavigationstyle == "arrowoutside" ? "-" +
                                        instance.options.navthumbnavigationarrowimagewidth + "px" : "0px",
                                top: "0px",
                                "margin-top": p + "px"
                            })
                        }
                        if (ASPlatforms.isIE678())
                            $carLeftArrow.css({
                                opacity: "inherit",
                                filter: "inherit"
                            });
                        $carLeftArrow.hover(function () {
                            if (!$(this).data("disabled"))
                                $(this).css({
                                    "background-position": "left center"
                                })
                        }, function () {
                            if (!$(this).data("disabled"))
                                $(this).css({
                                    "background-position": "left top"
                                })
                        });
                        $carLeftArrow.click(function () {
                            if (instance.options.navdirection == "vertical")
                                instance.carMoveBottom();
                            else
                                instance.carMoveRight()
                        });
                        if (ASPlatforms.isIE678())
                            $carRightArrow.css({
                                opacity: "inherit",
                                filter: "inherit"
                            });
                        $carRightArrow.hover(function () {
                            if (!$(this).data("disabled"))
                                $(this).css({
                                    "background-position": "right center"
                                })
                        }, function () {
                            if (!$(this).data("disabled"))
                                $(this).css({
                                    "background-position": "right top"
                                })
                        });
                        $carRightArrow.click(function () {
                            if (instance.options.navdirection == "vertical")
                                instance.carMoveTop();
                            else
                                instance.carMoveLeft()
                        });
                        if (instance.options.navdirection == "vertical" && $bulletWrapper.height() > $navContainer.height() ||
                                instance.options.navdirection == "horizontal" && $bulletWrapper.width() > $navContainer.width()) {
                            $carLeftArrow.css({
                                display: "block",
                                "background-position": "left bottom",
                                cursor: ""
                            });
                            $carLeftArrow.data("disabled", true);
                            $carRightArrow.css({
                                display: "block"
                            })
                        }
                        if (instance.options.navthumbnavigationstyle == "arrowinside") {
                            $carLeftArrow.hide();
                            $carRightArrow.hide();
                            $nav.hover(function () {
                                if (instance.options.navdirection == "vertical" && $bulletWrapper.height() > $navContainer.height() || instance.options.navdirection == "horizontal" &&
                                        $bulletWrapper.width() > $navContainer.width()) {
                                    $carLeftArrow.fadeIn();
                                    $carRightArrow.fadeIn()
                                }
                            }, function () {
                                $carLeftArrow.fadeOut();
                                $carRightArrow.fadeOut()
                            })
                        }
                    }
                    if (instance.options.navdirection == "vertical")
                        $nav.touchSwipe({
                            preventWebBrowser: true,
                            swipeTop: function (data) {
                                instance.carMoveTop()
                            },
                            swipeBottom: function () {
                                instance.carMoveBottom()
                            }
                        });
                    else
                        $nav.touchSwipe({
                            preventWebBrowser: false,
                            swipeLeft: function (data) {
                                instance.carMoveLeft()
                            },
                            swipeRight: function () {
                                instance.carMoveRight()
                            }
                        });
                    this.container.bind("amazingslider.switch",
                            function (event, prev, cur) {
                                $(".amazingslider-bullet-" + instance.id + "-" + prev, instance.container)["bulletNormal" + instance.id]();
                                $(".amazingslider-bullet-" + instance.id + "-" + cur, instance.container)["bulletSelected" + instance.id]()
                            });
                    if (this.options.navshowpreview) {
                        var $preview = $("<div class='amazingslider-nav-preview-" + this.id + "' style='display:none;position:absolute;width:" + this.options.navpreviewwidth + "px;height:" + this.options.navpreviewheight + "px;background-color:" + this.options.navpreviewbordercolor + ";padding:" +
                                instance.options.navpreviewborder + "px;'></div>");
                        var $previewArrow = $("<div class='amazingslider-nav-preview-arrow-" + this.id + "' style='display:block;position:absolute;width:" + this.options.navpreviewarrowwidth + "px;height:" + this.options.navpreviewarrowheight + "px;" + 'background:url("' + this.options.skinsfolder + this.options.navpreviewarrowimage + "\") no-repeat center center;' ></div>");
                        switch (this.options.navpreviewposition) {
                            case "bottom":
                                $previewArrow.css({
                                    left: "50%",
                                    bottom: "100%",
                                    "margin-left": "-" + Math.round(this.options.navpreviewarrowwidth /
                                            2) + "px"
                                });
                                break;
                            case "top":
                                $previewArrow.css({
                                    left: "50%",
                                    top: "100%",
                                    "margin-left": "-" + Math.round(this.options.navpreviewarrowwidth / 2) + "px"
                                });
                                break;
                            case "left":
                                $previewArrow.css({
                                    top: "50%",
                                    left: "100%",
                                    "margin-top": "-" + Math.round(this.options.navpreviewarrowheight / 2) + "px"
                                });
                                break;
                            case "right":
                                $previewArrow.css({
                                    top: "50%",
                                    right: "100%",
                                    "margin-top": "-" + Math.round(this.options.navpreviewarrowheight / 2) + "px"
                                });
                                break
                        }
                        var $previewImages = $("<div class='amazingslider-nav-preview-images-" + this.id + "' style='display:block;position:relative;width:100%;height:100%;overflow:hidden;' />");
                        $preview.append($previewArrow);
                        $preview.append($previewImages);
                        if (this.options.navshowplayvideo) {
                            var $previewPlay = $("<div class='amazingslider-nav-preview-play-" + this.id + "' style='display:none;position:absolute;left:0;top:0;width:100%;height:100%;" + 'background:url("' + this.options.skinsfolder + this.options.navplayvideoimage + '") no-repeat center center;' + "' ></div>");
                            $preview.append($previewPlay)
                        }
                        $(".amazingslider-wrapper-" + this.id, this.container).append($preview)
                    }
                    if (this.options.navshowfeaturedarrow)
                        $bulletWrapper.append("<div class='amazingslider-nav-featuredarrow-" +
                                this.id + "' style='display:none;position:absolute;width:" + this.options.navfeaturedarrowimagewidth + "px;" + "height:" + this.options.navfeaturedarrowimageheight + "px;" + 'background:url("' + this.options.skinsfolder + this.options.navfeaturedarrowimage + "\") no-repeat center center;'></div>")
                }
                if (this.options.navshowbuttons) {
                    var floatDir = this.options.navdirection == "vertical" ? "top" : "left";
                    var spacing = this.options.navstyle == "none" ? 0 : this.options.navspacing;
                    if (this.options.navshowarrow) {
                        var $navLeft = $("<div class='amazingslider-nav-left-" +
                                this.id + "' style='position:relative;float:" + floatDir + ";margin-" + floatDir + ":" + spacing + "px;width:" + this.options.navwidth + "px;height:" + this.options.navheight + "px;cursor:pointer;'></div>");
                        $bulletWrapper.append($navLeft);
                        if (this.options.navbuttonradius)
                            $navLeft.css(ASPlatforms.applyBrowserStyles({
                                "border-radius": this.options.navbuttonradius + "px"
                            }));
                        if (this.options.navbuttoncolor)
                            $navLeft.css({
                                "background-color": this.options.navbuttoncolor
                            });
                        if (this.options.navarrowimage)
                            $navLeft.css({
                                "background-image": "url('" +
                                        this.options.skinsfolder + this.options.navarrowimage + "')",
                                "background-repeat": "no-repeat",
                                "background-position": "left top"
                            });
                        $navLeft.hover(function () {
                            if (instance.options.navbuttonhighlightcolor)
                                $(this).css({
                                    "background-color": instance.options.navbuttonhighlightcolor
                                });
                            if (instance.options.navarrowimage)
                                $(this).css({
                                    "background-position": "left bottom"
                                })
                        }, function () {
                            if (instance.options.navbuttoncolor)
                                $(this).css({
                                    "background-color": instance.options.navbuttoncolor
                                });
                            if (instance.options.navarrowimage)
                                $(this).css({
                                    "background-position": "left top"
                                })
                        });
                        $navLeft.click(function () {
                            instance.slideRun(-2)
                        });
                        spacing = this.options.navspacing
                    }
                    if (this.options.navshowplaypause) {
                        var $navPlay, $navPause;
                        if (this.options.navshowplaypausestandalone) {
                            $navPlay = $("<div class='amazingslider-nav-play-" + this.id + "' style='position:absolute;width:" + this.options.navshowplaypausestandalonewidth + "px;height:" + this.options.navshowplaypausestandaloneheight + "px;'></div>");
                            this.$wrapper.append($navPlay);
                            $navPause = $("<div class='amazingslider-nav-pause-" + this.id + "' style='position:absolute;width:" +
                                    this.options.navshowplaypausestandalonewidth + "px;height:" + this.options.navshowplaypausestandaloneheight + "px;'></div>");
                            this.$wrapper.append($navPause);
                            switch (this.options.navshowplaypausestandaloneposition) {
                                case "topleft":
                                    $navPlay.css({
                                        top: 0,
                                        left: 0,
                                        "margin-left": this.options.navshowplaypausestandalonemarginx + "px",
                                        "margin-top": this.options.navshowplaypausestandalonemarginy + "px"
                                    });
                                    $navPause.css({
                                        top: 0,
                                        left: 0,
                                        "margin-left": this.options.navshowplaypausestandalonemarginx + "px",
                                        "margin-top": this.options.navshowplaypausestandalonemarginy +
                                                "px"
                                    });
                                    break;
                                case "topright":
                                    $navPlay.css({
                                        top: 0,
                                        right: 0,
                                        "margin-right": this.options.navshowplaypausestandalonemarginx + "px",
                                        "margin-top": this.options.navshowplaypausestandalonemarginy + "px"
                                    });
                                    $navPause.css({
                                        top: 0,
                                        right: 0,
                                        "margin-right": this.options.navshowplaypausestandalonemarginx + "px",
                                        "margin-top": this.options.navshowplaypausestandalonemarginy + "px"
                                    });
                                    break;
                                case "bottomleft":
                                    $navPlay.css({
                                        bottom: 0,
                                        left: 0,
                                        "margin-left": this.options.navshowplaypausestandalonemarginx + "px",
                                        "margin-bottom": this.options.navshowplaypausestandalonemarginy +
                                                "px"
                                    });
                                    $navPause.css({
                                        bottom: 0,
                                        left: 0,
                                        "margin-left": this.options.navshowplaypausestandalonemarginx + "px",
                                        "margin-bottom": this.options.navshowplaypausestandalonemarginy + "px"
                                    });
                                    break;
                                case "bottomright":
                                    $navPlay.css({
                                        bottom: 0,
                                        right: 0,
                                        "margin-right": this.options.navshowplaypausestandalonemarginx + "px",
                                        "margin-bottom": this.options.navshowplaypausestandalonemarginy + "px"
                                    });
                                    $navPause.css({
                                        bottom: 0,
                                        right: 0,
                                        "margin-right": this.options.navshowplaypausestandalonemarginx + "px",
                                        "margin-bottom": this.options.navshowplaypausestandalonemarginy +
                                                "px"
                                    });
                                    break;
                                case "center":
                                    $navPlay.css({
                                        top: "50%",
                                        left: "50%",
                                        "margin-left": "-" + Math.round(this.options.navshowplaypausestandalonewidth / 2) + "px",
                                        "margin-top": "-" + Math.round(this.options.navshowplaypausestandaloneheight / 2) + "px"
                                    });
                                    $navPause.css({
                                        top: "50%",
                                        left: "50%",
                                        "margin-left": "-" + Math.round(this.options.navshowplaypausestandalonewidth / 2) + "px",
                                        "margin-top": "-" + Math.round(this.options.navshowplaypausestandaloneheight / 2) + "px"
                                    });
                                    break
                            }
                        } else {
                            $navPlay = $("<div class='amazingslider-nav-play-" + this.id + "' style='position:relative;float:" +
                                    floatDir + ";margin-" + floatDir + ":" + spacing + "px;width:" + this.options.navwidth + "px;height:" + this.options.navheight + "px;cursor:pointer;'></div>");
                            $bulletWrapper.append($navPlay);
                            $navPause = $("<div class='amazingslider-nav-pause-" + this.id + "' style='position:relative;float:" + floatDir + ";margin-" + floatDir + ":" + spacing + "px;width:" + this.options.navwidth + "px;height:" + this.options.navheight + "px;cursor:pointer;'></div>");
                            $bulletWrapper.append($navPause)
                        }
                        if (this.options.navbuttonradius)
                            $navPlay.css(ASPlatforms.applyBrowserStyles({
                                "border-radius": this.options.navbuttonradius +
                                        "px"
                            }));
                        if (this.options.navbuttoncolor)
                            $navPlay.css({
                                "background-color": this.options.navbuttoncolor
                            });
                        if (this.options.navarrowimage)
                            $navPlay.css({
                                "background-image": "url('" + this.options.skinsfolder + this.options.navplaypauseimage + "')",
                                "background-repeat": "no-repeat",
                                "background-position": "left top"
                            });
                        $navPlay.hover(function () {
                            if (instance.options.navbuttonhighlightcolor)
                                $(this).css({
                                    "background-color": instance.options.navbuttonhighlightcolor
                                });
                            if (instance.options.navarrowimage)
                                $(this).css({
                                    "background-position": "left bottom"
                                })
                        },
                                function () {
                                    if (instance.options.navbuttoncolor)
                                        $(this).css({
                                            "background-color": instance.options.navbuttoncolor
                                        });
                                    if (instance.options.navarrowimage)
                                        $(this).css({
                                            "background-position": "left top"
                                        })
                                });
                        $navPlay.click(function () {
                            instance.isPaused = false;
                            instance.loopCount = 0;
                            if (!instance.videoPaused)
                                instance.sliderTimeout.start();
                            $(this).css({
                                display: "none"
                            });
                            $(".amazingslider-nav-pause-" + instance.id, instance.container).css({
                                display: "block"
                            })
                        });
                        if (this.options.navbuttonradius)
                            $navPause.css(ASPlatforms.applyBrowserStyles({
                                "border-radius": this.options.navbuttonradius +
                                        "px"
                            }));
                        if (this.options.navbuttoncolor)
                            $navPause.css({
                                "background-color": this.options.navbuttoncolor
                            });
                        if (this.options.navarrowimage)
                            $navPause.css({
                                "background-image": "url('" + this.options.skinsfolder + this.options.navplaypauseimage + "')",
                                "background-repeat": "no-repeat",
                                "background-position": "right top"
                            });
                        $navPause.hover(function () {
                            if (instance.options.navbuttonhighlightcolor)
                                $(this).css({
                                    "background-color": instance.options.navbuttonhighlightcolor
                                });
                            if (instance.options.navarrowimage)
                                $(this).css({
                                    "background-position": "right bottom"
                                })
                        },
                                function () {
                                    if (instance.options.navbuttoncolor)
                                        $(this).css({
                                            "background-color": instance.options.navbuttoncolor
                                        });
                                    if (instance.options.navarrowimage)
                                        $(this).css({
                                            "background-position": "right top"
                                        })
                                });
                        $navPause.click(function () {
                            instance.isPaused = true;
                            instance.sliderTimeout.stop();
                            $(this).css({
                                display: "none"
                            });
                            $(".amazingslider-nav-play-" + instance.id, instance.container).css({
                                display: "block"
                            })
                        });
                        if (this.options.navshowplaypausestandalone && this.options.navshowplaypausestandaloneautohide) {
                            $navPlay.css({
                                display: "none"
                            });
                            $navPause.css({
                                display: "none"
                            });
                            this.$wrapper.hover(function () {
                                if (instance.isPaused) {
                                    $navPlay.fadeIn();
                                    $navPause.css({
                                        display: "none"
                                    })
                                } else {
                                    $navPlay.css({
                                        display: "none"
                                    });
                                    $navPause.fadeIn()
                                }
                            }, function () {
                                $navPlay.fadeOut();
                                $navPause.fadeOut()
                            })
                        } else {
                            $navPlay.css({
                                display: instance.isPaused ? "block" : "none"
                            });
                            $navPause.css({
                                display: instance.isPaused ? "none" : "block"
                            })
                        }
                    }
                    if (this.options.navshowarrow) {
                        var $navRight = $("<div class='amazingslider-nav-right-" + this.id + "' style='position:relative;float:" + floatDir +
                                ";margin-" + floatDir + ":" + spacing + "px;width:" + this.options.navwidth + "px;height:" + this.options.navheight + "px;cursor:pointer;'></div>");
                        $bulletWrapper.append($navRight);
                        if (this.options.navbuttonradius)
                            $navRight.css(ASPlatforms.applyBrowserStyles({
                                "border-radius": this.options.navbuttonradius + "px"
                            }));
                        if (this.options.navbuttoncolor)
                            $navRight.css({
                                "background-color": this.options.navbuttoncolor
                            });
                        if (this.options.navarrowimage)
                            $navRight.css({
                                "background-image": "url('" + this.options.skinsfolder + this.options.navarrowimage +
                                        "')",
                                "background-repeat": "no-repeat",
                                "background-position": "right top"
                            });
                        $navRight.hover(function () {
                            if (instance.options.navbuttonhighlightcolor)
                                $(this).css({
                                    "background-color": instance.options.navbuttonhighlightcolor
                                });
                            if (instance.options.navarrowimage)
                                $(this).css({
                                    "background-position": "right bottom"
                                })
                        }, function () {
                            if (instance.options.navbuttoncolor)
                                $(this).css({
                                    "background-color": instance.options.navbuttoncolor
                                });
                            if (instance.options.navarrowimage)
                                $(this).css({
                                    "background-position": "right top"
                                })
                        });
                        $navRight.click(function () {
                            instance.slideRun(-1)
                        })
                    }
                }
            },
            createNavBullet: function (index) {
                var instance = this;
                var f = this.options.navdirection == "vertical" ? "top" : "left";
                var marginF = this.options.navdirection == "vertical" ? "bottom" : "right";
                var spacing = index == this.elemArray.length - 1 ? 0 : this.options.navspacing;
                var w = this.options.navstyle == "thumbnails" ? this.options.navwidth - this.options.navborder * 2 : this.options.navwidth;
                var h = this.options.navstyle == "thumbnails" ? this.options.navheight - this.options.navborder * 2 : this.options.navheight;
                var b = this.options.navdirection == "horizontal" && this.options.navmultirows ? "margin-bottom:" + this.options.navrowspacing + "px;" : "";
                var $bullet = $("<div class='amazingslider-bullet-" + this.id + "-" + index + "' style='position:relative;float:" + f + ";" + b + "margin-" + marginF + ":" + spacing + "px;width:" + w + "px;height:" + h + "px;cursor:pointer;'></div>");
                $bullet.data("index", index);
                $bullet.hover(function () {
                    if ($(this).data("index") != instance.curElem)
                        $(this)["bulletHighlight" + instance.id]();
                    var bulletIndex = $(this).data("index");
                    if (instance.options.navswitchonmouseover)
                        if (bulletIndex != instance.curElem)
                            instance.slideRun(bulletIndex);
                    if (instance.options.navshowpreview) {
                        var $preview = $(".amazingslider-nav-preview-" + instance.id, instance.container);
                        var $previewImages = $(".amazingslider-nav-preview-images-" + instance.id, $preview);
                        if (instance.options.navshowplayvideo) {
                            var $previewPlay = $(".amazingslider-nav-preview-play-" + instance.id, $preview);
                            if (instance.elemArray[bulletIndex][ELEM_VIDEO].length > 0 || instance.elemArray[bulletIndex][ELEM_LINK] &&
                                    instance.elemArray[bulletIndex][ELEM_LIGHTBOX] && instance.checkVideoType(instance.elemArray[bulletIndex][ELEM_LINK]) > 0)
                                $previewPlay.show();
                            else
                                $previewPlay.hide()
                        }
                        var $nav = $(".amazingslider-nav-" + instance.id, instance.container);
                        var $bulletWrapper = $(".amazingslider-bullet-wrapper-" + instance.id, instance.container);
                        var pos = $(this).position();
                        var navPos = $nav.position();
                        var bulletWrapperPos = $bulletWrapper.position();
                        pos.left += navPos.left + bulletWrapperPos.left;
                        pos.left += isNaN(parseInt($bulletWrapper.css("margin-left"))) ?
                                0 : parseInt($bulletWrapper.css("margin-left"));
                        pos.left += isNaN(parseInt($nav.css("margin-left"))) ? 0 : parseInt($nav.css("margin-left"));
                        pos.top += navPos.top + bulletWrapperPos.top;
                        pos.top += isNaN(parseInt($bulletWrapper.css("margin-top"))) ? 0 : parseInt($bulletWrapper.css("margin-top"));
                        pos.top += isNaN(parseInt($nav.css("margin-top"))) ? 0 : parseInt($nav.css("margin-top"));
                        if (instance.options.navdirection == "vertical") {
                            var $navContainer = $(".amazingslider-nav-container-" + instance.id, instance.container);
                            pos.top +=
                                    isNaN(parseInt($navContainer.css("margin-top"))) ? 0 : parseInt($navContainer.css("margin-top"))
                        }
                        var t, l = pos.left + instance.options.navwidth / 2 - instance.options.navpreviewwidth / 2 - instance.options.navpreviewborder;
                        var lv, tv = pos.top + instance.options.navheight / 2 - instance.options.navpreviewheight / 2 - instance.options.navpreviewborder;
                        var p = {};
                        switch (instance.options.navpreviewposition) {
                            case "bottom":
                                t = pos.top + instance.options.navheight + instance.options.navpreviewarrowheight;
                                p = {
                                    left: l + "px",
                                    top: t + "px"
                                };
                                break;
                            case "top":
                                t =
                                        pos.top - instance.options.navpreviewheight - 2 * instance.options.navpreviewborder - instance.options.navpreviewarrowheight;
                                p = {
                                    left: l + "px",
                                    top: t + "px"
                                };
                                break;
                            case "left":
                                lv = pos.left - instance.options.navpreviewwidth - 2 * instance.options.navpreviewborder - instance.options.navpreviewarrowwidth;
                                p = {
                                    left: lv + "px",
                                    top: tv + "px"
                                };
                                break;
                            case "right":
                                lv = pos.left + instance.options.navwidth + instance.options.navpreviewarrowwidth;
                                p = {
                                    left: lv + "px",
                                    top: tv + "px"
                                };
                                break
                        }
                        var imgLoader = new Image;
                        $(imgLoader).load(function () {
                            var style;
                            if (this.width / this.height <= instance.options.navpreviewwidth / instance.options.navpreviewheight)
                                style = "width:" + instance.options.navpreviewwidth + "px;max-width:" + instance.options.navpreviewwidth + "px;height:auto;margin-top:-" + Math.floor(this.height / this.width * instance.options.navpreviewwidth / 2 - instance.options.navpreviewheight / 2) + "px;";
                            else
                                style = "width:auto;max-width:none;height:" + instance.options.navpreviewheight + "px;margin-left:-" + Math.floor(this.width / this.height * instance.options.navpreviewheight /
                                        2 - instance.options.navpreviewwidth / 2) + "px;";
                            var $prevImg = $(".amazingslider-nav-preview-img-" + instance.id, $previewImages);
                            if (instance.options.navdirection == "vertical") {
                                var $curImg = $("<div class='amazingslider-nav-preview-img-" + instance.id + "' style='display:block;position:absolute;overflow:hidden;width:" + instance.options.navpreviewwidth + "px;height:" + instance.options.navpreviewheight + "px;left:0px;top:" + instance.options.navpreviewheight + "px;'><img src='" + instance.elemArray[bulletIndex][ELEM_THUMBNAIL] +
                                        "' style='display:block;position:absolute;left:0px;top:0px;" + style + "' /></div>");
                                $previewImages.append($curImg);
                                if ($prevImg.length > 0)
                                    $prevImg.animate({
                                        top: "-" + instance.options.navpreviewheight + "px"
                                    }, function () {
                                        $prevImg.remove()
                                    });
                                if ($preview.is(":visible")) {
                                    $curImg.animate({
                                        top: "0px"
                                    });
                                    $preview.stop(true, true).animate(p)
                                } else {
                                    $curImg.css({
                                        top: "0px"
                                    });
                                    $preview.stop(true, true).css(p).fadeIn()
                                }
                            } else {
                                var $curImg = $("<div class='amazingslider-nav-preview-img-" + instance.id + "' style='display:block;position:absolute;overflow:hidden;width:" +
                                        instance.options.navpreviewwidth + "px;height:" + instance.options.navpreviewheight + "px;left:" + instance.options.navpreviewheight + "px;top:0px;'><img src='" + instance.elemArray[bulletIndex][ELEM_THUMBNAIL] + "' style='display:block;position:absolute;left:0px;top:0px;" + style + "' /></div>");
                                $previewImages.append($curImg);
                                if ($prevImg.length > 0)
                                    $prevImg.animate({
                                        left: "-" + instance.options.navpreviewwidth + "px"
                                    }, function () {
                                        $prevImg.remove()
                                    });
                                if ($preview.is(":visible")) {
                                    $curImg.animate({
                                        left: "0px"
                                    });
                                    $preview.stop(true,
                                            true).animate(p)
                                } else {
                                    $curImg.css({
                                        left: "0px"
                                    });
                                    $preview.stop(true, true).css(p).fadeIn()
                                }
                            }
                        });
                        imgLoader.src = instance.elemArray[bulletIndex][ELEM_THUMBNAIL]
                    }
                }, function () {
                    if ($(this).data("index") != instance.curElem)
                        $(this)["bulletNormal" + instance.id]();
                    if (instance.options.navshowpreview) {
                        var $preview = $(".amazingslider-nav-preview-" + instance.id, instance.container);
                        $preview.delay(500).fadeOut()
                    }
                });
                $bullet.click(function () {
                    instance.slideRun($(this).data("index"), instance.options.playvideoonclickthumb)
                });
                if (this.options.navstyle == "bullets") {
                    $bullet.css({
                        background: "url('" + this.options.navimage + "') no-repeat left top"
                    });
                    $.fn["bulletNormal" + this.id] = function () {
                        $(this).css({
                            "background-position": "left top"
                        })
                    };
                    $.fn["bulletHighlight" + this.id] = $.fn["bulletSelected" + this.id] = function () {
                        $(this).css({
                            "background-position": "left bottom"
                        })
                    }
                } else if (this.options.navstyle == "numbering") {
                    $bullet.text(index + 1);
                    $bullet.css({
                        "background-color": this.options.navcolor,
                        color: this.options.navfontcolor,
                        "font-size": this.options.navfontsize,
                        "font-family": this.options.navfont,
                        "text-align": "center",
                        "line-height": this.options.navheight + "px"
                    });
                    $bullet.css(ASPlatforms.applyBrowserStyles({
                        "border-radius": this.options.navradius + "px"
                    }));
                    if (this.options.navbuttonshowbgimage && this.options.navbuttonbgimage)
                        $bullet.css({
                            background: "url('" + this.options.skinsfolder + this.options.navbuttonbgimage + "') no-repeat center top"
                        });
                    $.fn["bulletNormal" + this.id] = function () {
                        $(this).css({
                            "background-color": instance.options.navcolor,
                            "color": instance.options.navfontcolor
                        });
                        if (instance.options.navbuttonshowbgimage && instance.options.navbuttonbgimage)
                            $(this).css({
                                "background-position": "center top"
                            })
                    };
                    $.fn["bulletHighlight" + this.id] = $.fn["bulletSelected" + this.id] = function () {
                        $(this).css({
                            "background-color": instance.options.navhighlightcolor,
                            "color": instance.options.navfonthighlightcolor
                        });
                        if (instance.options.navbuttonshowbgimage && instance.options.navbuttonbgimage)
                            $(this).css({
                                "background-position": "center bottom"
                            })
                    }
                } else if (this.options.navstyle == "thumbnails") {
                    $bullet.css({
                        padding: this.options.navborder +
                                "px",
                        "background-color": this.options.navbordercolor
                    });
                    $bullet.css({
                        opacity: this.options.navopacity,
                        filter: "alpha(opacity=" + Math.round(100 * this.options.navopacity) + ")"
                    });
                    var imgLoader = new Image;
                    var instance = this;
                    $(imgLoader).load(function () {
                        if (instance.options.navthumbstyle != "textonly") {
                            var style;
                            if (this.width / this.height <= instance.options.navimagewidth / instance.options.navimageheight)
                                style = "max-width:none !important;width:100%;height:auto;margin-top:-" + Math.floor(this.height / this.width * instance.options.navimagewidth /
                                        2 - instance.options.navimageheight / 2) + "px";
                            else
                                style = "max-width:none !important;width:auto;height:100%;margin-left:-" + Math.floor(this.width / this.height * instance.options.navimageheight / 2 - instance.options.navimagewidth / 2) + "px";
                            $bullet.append("<div class='amazingslider-bullet-image-" + instance.id + "' style='display:block;position:absolute;width:" + instance.options.navimagewidth + "px;height:" + instance.options.navimageheight + "px;overflow:hidden;'><img src='" + instance.elemArray[index][ELEM_THUMBNAIL] + "' style='" +
                                    style + "' /></div>");
                            if (instance.options.navshowplayvideo && (instance.elemArray[index][ELEM_VIDEO].length > 0 || instance.elemArray[index][ELEM_LINK] && instance.elemArray[index][ELEM_LIGHTBOX] && instance.checkVideoType(instance.elemArray[index][ELEM_LINK]) > 0))
                                $bullet.append("<div style='display:block;position:absolute;margin-left:0;margin-top:0;width:" + instance.options.navimagewidth + "px;height:" + instance.options.navimageheight + "px;" + 'background:url("' + instance.options.skinsfolder + instance.options.navplayvideoimage +
                                        '") no-repeat center center;' + "' ></div>")
                        }
                        if (instance.options.navthumbstyle != "imageonly") {
                            var thumbtitle = "<div class='amazingslider-bullet-text-" + instance.id + "' style='display:block;position:absolute;overflow:hidden;";
                            if (instance.options.navthumbstyle == "imageandtitle")
                                thumbtitle += "margin-left:0px;margin-top:" + instance.options.navimageheight + "px;width:" + instance.options.navimagewidth + "px;height:" + instance.options.navthumbtitleheight + "px;";
                            else if (instance.options.navthumbstyle == "imageandtitledescription")
                                thumbtitle +=
                                        "margin-left:" + instance.options.navimagewidth + "px;margin-top:0px;width:" + instance.options.navthumbtitlewidth + "px;height:" + instance.options.navimageheight + "px;";
                            else if (instance.options.navthumbstyle == "textonly")
                                thumbtitle += "margin-left:0px;margin-top:0px;width:" + String(instance.options.navthumbtitlewidth + instance.options.navimagewidth) + "px;height:" + instance.options.navimageheight + "px;";
                            thumbtitle += "'><div class='amazingslider-nav-thumbnail-tite-" + instance.id + "'>" + instance.elemArray[index][ELEM_TITLE] +
                                    "</div>";
                            if (instance.options.navthumbstyle == "imageandtitledescription" || instance.options.navthumbstyle == "textonly")
                                thumbtitle += "<div class='amazingslider-nav-thumbnail-description-" + instance.id + "'>" + instance.elemArray[index][ELEM_DESCRIPTION] + "</div>";
                            thumbtitle += "</div>";
                            $bullet.append(thumbtitle)
                        }
                    });
                    imgLoader.src = this.elemArray[index][ELEM_THUMBNAIL];
                    $.fn["bulletNormal" + this.id] = function () {
                        $(this).css({
                            opacity: instance.options.navopacity,
                            filter: "alpha(opacity=" + Math.round(100 * instance.options.navopacity) +
                                    ")"
                        });
                        if (instance.options.navbordercolor)
                            $(this).css({
                                "background-color": instance.options.navbordercolor
                            })
                    };
                    $.fn["bulletHighlight" + this.id] = function () {
                        $(this).css({
                            opacity: 1,
                            filter: "alpha(opacity=100)"
                        });
                        if (instance.options.navborderhighlightcolor)
                            $(this).css({
                                "background-color": instance.options.navborderhighlightcolor
                            })
                    };
                    $.fn["bulletSelected" + this.id] = function () {
                        $(this).css({
                            opacity: 1,
                            filter: "alpha(opacity=100)"
                        });
                        if (instance.options.navborderhighlightcolor)
                            $(this).css({
                                "background-color": instance.options.navborderhighlightcolor
                            });
                        var pos = $(this).position();
                        var $navContainer = $(".amazingslider-nav-container-" + instance.id, instance.container);
                        var $bulletWrapper = $(".amazingslider-bullet-wrapper-" + instance.id, instance.container);
                        if (instance.options.navdirection == "horizontal") {
                            var t, l = pos.left + instance.options.navwidth / 2 - instance.options.navfeaturedarrowimagewidth / 2;
                            if (instance.options.navposition == "top" || instance.options.navposition == "topleft" || instance.options.navposition == "topright")
                                t = pos.top + instance.options.navheight;
                            else
                                t =
                                        pos.top - instance.options.navfeaturedarrowimageheight;
                            if (instance.options.navshowfeaturedarrow) {
                                var $featuredarrow = $(".amazingslider-nav-featuredarrow-" + instance.id, instance.container);
                                $featuredarrow.css({
                                    top: t + "px"
                                });
                                if ($featuredarrow.is(":visible"))
                                    $featuredarrow.stop(true, true).animate({
                                        left: l + "px"
                                    });
                                else
                                    $featuredarrow.css({
                                        display: "block",
                                        left: l + "px"
                                    })
                            }
                            if ($navContainer.width() < $bulletWrapper.width() && !instance.pauseCarousel) {
                                var m = Math.abs(isNaN(parseInt($bulletWrapper.css("margin-left"))) ? 0 :
                                        parseInt($bulletWrapper.css("margin-left")));
                                if (pos.left < m || pos.left + instance.options.navwidth > m + $navContainer.width()) {
                                    var pl = -pos.left;
                                    if (pl <= $navContainer.width() - $bulletWrapper.width())
                                        pl = $navContainer.width() - $bulletWrapper.width();
                                    if (pl >= 0)
                                        pl = 0;
                                    $bulletWrapper.animate({
                                        "margin-left": pl + "px"
                                    }, {
                                        queue: false,
                                        duration: 500,
                                        easing: "easeOutCirc"
                                    });
                                    instance.updateCarouselLeftRightArrow(pl)
                                }
                            }
                        } else {
                            var l, t = pos.top + instance.options.navheight / 2 - instance.options.navfeaturedarrowimageheight / 2;
                            if (instance.options.navposition ==
                                    "left")
                                l = pos.left + instance.options.navwidth;
                            else
                                l = pos.left - instance.options.navfeaturedarrowimagewidth;
                            if (instance.options.navshowfeaturedarrow) {
                                var $featuredarrow = $(".amazingslider-nav-featuredarrow-" + instance.id, instance.container);
                                $featuredarrow.css({
                                    left: l + "px"
                                });
                                if ($featuredarrow.is(":visible"))
                                    $featuredarrow.stop(true, true).animate({
                                        top: t + "px"
                                    });
                                else
                                    $featuredarrow.css({
                                        display: "block",
                                        top: t + "px"
                                    })
                            }
                            if ($navContainer.height() < $bulletWrapper.height() && !instance.pauseCarousel) {
                                var m = Math.abs(isNaN(parseInt($bulletWrapper.css("margin-top"))) ?
                                        0 : parseInt($bulletWrapper.css("margin-top")));
                                if (pos.top < m || pos.top + instance.options.navheight > m + $navContainer.height()) {
                                    var pl = -pos.top;
                                    if (pl <= $navContainer.height() - $bulletWrapper.height())
                                        pl = $navContainer.height() - $bulletWrapper.height();
                                    if (pl >= 0)
                                        pl = 0;
                                    $bulletWrapper.animate({
                                        "margin-top": pl + "px"
                                    }, {
                                        queue: false,
                                        duration: 500,
                                        easing: "easeOutCirc"
                                    });
                                    instance.updateCarouselLeftRightArrow(pl)
                                }
                            }
                        }
                    }
                }
                return $bullet
            },
            slideRun: function (index, playVideo) {
                savedCur = this.curElem;
                this.calcIndex(index);
                if (savedCur ==
                        this.curElem)
                    return;
                if (this.isAnimating) {
                    if (this.transitionTimeout)
                        clearTimeout(this.transitionTimeout);
                    $(".amazingslider-img-box-" + this.id, this.container).unbind("transitionFinished");
                    var imageCodes = "<div class='amazingslider-img-" + this.id + " ' style='display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;overflow:hidden;'>";
                    imageCodes += "<img style='position:absolute;";
                    if (Math.abs(this.curImageMarginLeft) > 0)
                        imageCodes += "max-width:" + this.curImageMaxWidth + "%;width:" + this.curImageMaxWidth +
                                "%;height:100%;left:0%;top:0%;margin-left:" + this.curImageMarginLeft + "%";
                    else
                        imageCodes += "max-width:" + this.curImageMaxWidth + "%;width:" + this.curImageMaxWidth + "%;height:auto;left:0%;top:0%;margin-top:" + this.curImageMarginTop + "%;";
                    if (this.options.borderradius > 0)
                        imageCodes += "border-radius:" + this.options.borderradius + "px;-moz-border-radius:" + this.options.borderradius + "px;-webkit-border-radius:" + this.options.borderradius + "px;";
                    imageCodes += "' src='" + this.elemArray[savedCur][ELEM_SRC] + "' /></div>";
                    $(".amazingslider-img-box-" +
                            this.id, this.container).html(imageCodes);
                    this.isAnimating = false
                }
                if (this.elemArray[this.curElem][ELEM_TEXTEFFECT] && this.elemArray[this.curElem][ELEM_TEXTEFFECT].length > 0 && "textformat" in this.options && this.elemArray[this.curElem][ELEM_TEXTEFFECT] in this.options["textformat"])
                    this.textoptions = $.ASUpdateObject(this.textoptions, this.options["textformat"][this.elemArray[this.curElem][ELEM_TEXTEFFECT]]);
                else
                    this.textoptions = $.ASUpdateObject(this.textoptions, this.options);
                this.sliderTimeout.stop();
                this.sliderTimeout.timeout =
                        this.elemArray[this.curElem][ELEM_DURATION] > 0 ? this.elemArray[this.curElem][ELEM_DURATION] : this.options.slideinterval;
                this.videoPaused = false;
                this.container.trigger("amazingslider.switch", [savedCur, this.curElem]);
                $(".amazingslider-video-wrapper-" + this.id, this.container).find("iframe").each(function () {
                    $(this).attr("src", "")
                });
                this.container.trigger("amazingslider.switchtext", [savedCur, this.curElem]);
                if ((playVideo || this.options.autoplayvideo) && this.elemArray[this.curElem][ELEM_VIDEO].length > 0)
                    this.playVideo(true);
                else {
                    $(".amazingslider-video-wrapper-" + this.id, this.container).css({
                        display: "none"
                    }).empty();
                    var slideDirection = true;
                    if (index == -2)
                        slideDirection = false;
                    else if (index == -1)
                        slideDirection = true;
                    else if (index >= 0)
                        slideDirection = this.curElem > savedCur ? true : false;
                    this.showImage(slideDirection)
                }
                (new Image).src = this.elemArray[this.prevElem][ELEM_SRC];
                (new Image).src = this.elemArray[this.nextElem][ELEM_SRC];
                if (this.options.loop > 0)
                    if (this.curElem == this.elemArray.length - 1) {
                        this.loopCount++;
                        if (this.options.loop <=
                                this.loopCount)
                            this.isPaused = true
                    }
            },
            showImage: function (slideDirection) {
                var instance = this;
                var imgLoader = new Image;
                $(imgLoader).load(function () {
                    var $box = $(".amazingslider-img-box-" + instance.id, instance.container);
                    var $imgPrev = $(".amazingslider-img-" + instance.id, instance.container);
                    var imgCurCodes = "<div class='amazingslider-img-" + instance.id + "' style='display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;overflow:hidden;'>";
                    imgCurCodes += "<img class='amazingslider-img-elem-" + instance.id +
                            "' data-originalwidth='" + this.width + "' data-originalheight='" + this.height + "' style='position:absolute;" + (ASPlatforms.isIE678() ? "opacity:inherit;filter:inherit;" : "");
                    var sliderRatio = instance.options.height / instance.options.width;
                    var imgRatio = this.height / this.width;
                    instance.curImageMarginTop = 0;
                    instance.curImageMarginLeft = 0;
                    instance.curImageMaxWidth = 100;
                    if (sliderRatio < imgRatio)
                        if (instance.options.scalemode == "fit") {
                            instance.curImageMaxWidth = sliderRatio / imgRatio * 100;
                            instance.curImageMarginLeft = 50 - instance.curImageMaxWidth /
                                    2
                        } else
                            instance.curImageMarginTop = -1 * (imgRatio - sliderRatio) * 50;
                    else if (instance.options.scalemode == "fit")
                        instance.curImageMarginTop = (sliderRatio - imgRatio) * 50;
                    else {
                        instance.curImageMarginLeft = -1 * (1 / imgRatio - 1 / sliderRatio) * 50;
                        instance.curImageMaxWidth = 100 - 2 * instance.curImageMarginLeft
                    }
                    if (Math.abs(instance.curImageMarginLeft) > 0)
                        imgCurCodes += "max-width:" + instance.curImageMaxWidth + "%;width:" + instance.curImageMaxWidth + "%;height:100%;left:0%;top:0%;margin-left:" + instance.curImageMarginLeft + "%";
                    else
                        imgCurCodes +=
                                "max-width:" + instance.curImageMaxWidth + "%;width:" + instance.curImageMaxWidth + "%;height:auto;left:0%;top:0%;margin-top:" + instance.curImageMarginTop + "%;";
                    if (instance.options.borderradius > 0)
                        imgCurCodes += "border-radius:" + instance.options.borderradius + "px;-moz-border-radius:" + instance.options.borderradius + "px;-webkit-border-radius:" + instance.options.borderradius + "px;";
                    imgCurCodes += "' src='" + instance.elemArray[instance.curElem][ELEM_SRC] + "' />";
                    imgCurCodes += "</div>";
                    var $imgCur = $(imgCurCodes);
                    if ($imgPrev.length >
                            0)
                        $imgPrev.before($imgCur);
                    else
                        $box.append($imgCur);
                    var transitioneffect = instance.firstslide && !instance.options.transitiononfirstslide ? "" : instance.options.transition;
                    instance.firstslide = false;
                    instance.isAnimating = true;
                    $box.amazingsliderTransition(instance.id, $imgPrev, $imgCur, {
                        effect: transitioneffect,
                        direction: slideDirection,
                        duration: instance.options.transitionduration,
                        easing: instance.options.transitioneasing,
                        imgmarginleft: instance.curImageMarginLeft,
                        imgmargintop: instance.curImageMarginTop,
                        imgmaxwidth: instance.curImageMaxWidth,
                        crossfade: instance.options.crossfade,
                        fade: instance.options.fade,
                        slide: instance.options.slide,
                        elastic: instance.options.elastic,
                        slice: instance.options.slice,
                        blinds: instance.options.blinds,
                        threed: instance.options.threed,
                        threedhorizontal: instance.options.threedhorizontal,
                        blocks: instance.options.blocks,
                        shuffle: instance.options.shuffle
                    }, function () {
                        instance.isAnimating = false;
                        instance.sliderTimeout.resume(true)
                    }, function (timeoutid) {
                        instance.transitionTimeout = timeoutid;
                        if (!instance.isPaused && !instance.videoPaused &&
                                instance.elemArray.length > 1)
                            instance.sliderTimeout.startandpause()
                    });
                    var $swipeBox = $(".amazingslider-swipe-box-" + instance.id, instance.container);
                    if (instance.elemArray[instance.curElem][ELEM_LINK]) {
                        $swipeBox.css({
                            cursor: "pointer"
                        });
                        $swipeBox.unbind("click").bind("click", function () {
                            if (instance.elemArray[instance.curElem][ELEM_LIGHTBOX]) {
                                if (!instance.isPaused) {
                                    instance.lightboxPaused = true;
                                    instance.isPaused = true;
                                    instance.sliderTimeout.pause()
                                }
                                instance.html5Lightbox.showItem(instance.elemArray[instance.curElem][ELEM_LINK])
                            } else {
                                var target =
                                        instance.elemArray[instance.curElem][ELEM_TARGET] ? instance.elemArray[instance.curElem][ELEM_TARGET] : "_self";
                                window.open(instance.elemArray[instance.curElem][ELEM_LINK], target)
                            }
                        })
                    } else {
                        $swipeBox.css({
                            cursor: ""
                        });
                        $swipeBox.unbind("click")
                    }
                    var videoLightbox = instance.elemArray[instance.curElem][ELEM_LINK] && instance.elemArray[instance.curElem][ELEM_LIGHTBOX] && instance.checkVideoType(instance.elemArray[instance.curElem][ELEM_LINK]) > 0;
                    $(".amazingslider-lightbox-play-" + instance.id, instance.container).css({
                        display: videoLightbox ?
                                "block" : "none"
                    });
                    $(".amazingslider-play-" + instance.id, instance.container).css({
                        display: instance.elemArray[instance.curElem][ELEM_VIDEO].length > 0 ? "block" : "none"
                    })
                });
                imgLoader.src = this.elemArray[this.curElem][ELEM_SRC]
            },
            calcIndex: function (index) {
                var r;
                if (index == -2) {
                    this.nextElem = this.curElem;
                    this.curElem = this.prevElem;
                    this.prevElem = this.curElem - 1 < 0 ? this.elemArray.length - 1 : this.curElem - 1
                } else if (index == -1) {
                    this.prevElem = this.curElem;
                    this.curElem = this.nextElem;
                    this.nextElem = this.curElem + 1 >= this.elemArray.length ?
                            0 : this.curElem + 1
                } else if (index >= 0) {
                    this.curElem = index;
                    this.prevElem = this.curElem - 1 < 0 ? this.elemArray.length - 1 : this.curElem - 1;
                    this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1
                }
            }
        };
        var asbts = function (string) {
            var ret = "";
            var bytes = string.split(",");
            for (var i = 0; i < bytes.length; i++)
                ret += String.fromCharCode(bytes[i]);
            return ret
        };
        options = options || {};
        for (var key in options)
            if (key.toLowerCase() !== key) {
                options[key.toLowerCase()] = options[key];
                delete options[key]
            }
        this.each(function () {
            this.options =
                    $.extend({}, options);
            this.options.linktitle = (Math.random() > 0.4 ? asbts("82,101,115,112,111,110,115,105,118,101,32") : "") + asbts("106,81,117,101,114,121,32,83,108,105,100,101,114");
            if ($(this).data("textformat") && typeof AMAZINGSLIDER_TEXT_EFFECT_FORMATS !== "undefined")
                if ($(this).data("textformat") in AMAZINGSLIDER_TEXT_EFFECT_FORMATS)
                    this.options = $.extend({}, AMAZINGSLIDER_TEXT_EFFECT_FORMATS[$(this).data("textformat")], this.options);
            if ($(this).data("skin") && typeof AMAZINGSLIDER_SKIN_OPTIONS !== "undefined")
                if ($(this).data("skin") in
                        AMAZINGSLIDER_SKIN_OPTIONS)
                    this.options = $.extend({}, AMAZINGSLIDER_SKIN_OPTIONS[$(this).data("skin")], this.options);
            var instance = this;
            $.each($(this).data(), function (key, value) {
                instance.options[key.toLowerCase()] = value
            });
            var searchoptions = {};
            var searchstring = window.location.search.substring(1).split("&");
            for (var i = 0; i < searchstring.length; i++) {
                var keyvalue = searchstring[i].split("=");
                if (keyvalue && keyvalue.length == 2) {
                    var key = keyvalue[0].toLowerCase();
                    var value = unescape(keyvalue[1]).toLowerCase();
                    if (value ==
                            "true")
                        searchoptions[key] = true;
                    else if (value == "false")
                        searchoptions[key] = false;
                    else
                        searchoptions[key] = value
                }
            }
            this.options = $.extend(this.options, searchoptions);
            var defaultOptions = {
                watermarklinkdefault: "",
                watermarktargetdefault: "_blank",
                previewmode: false,
                isresponsive: true,
                isfullscreen: false,
                autoplay: false,
                pauseonmouseover: true,
                slideinterval: 5E3,
                randomplay: false,
                loop: 0,
                nativehtml5controls: false,
                lightboxbarheight: 48,
                lightboxresponsive: true,
                lightboxshowtitle: true,
                lightboxshowdescription: false,
                lightboxshownavigation: false,
                lightboxthumbwidth: 80,
                lightboxthumbheight: 60,
                lightboxthumbtopmargin: 12,
                lightboxthumbbottommargin: 4,
                lightboxtitlebottomcss: "{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
                lightboxdescriptionbottomcss: "{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
                scalemode: "fill",
                skinsfoldername: "skins",
                showtimer: true,
                timerposition: "bottom",
                timercolor: "#ffffff",
                timeropacity: 0.6,
                timerheight: 2,
                autoplayvideo: false,
                playvideoimage: "play-video.png",
                playvideoimagewidth: 64,
                playvideoimageheight: 64,
                playvideoonclickthumb: false,
                videohidecontrols: false,
                videohideplaybutton: false,
                enabletouchswipe: true,
                border: 6,
                bordercolor: "#ffffff",
                borderradius: 0,
                showshadow: true,
                shadowsize: 5,
                shadowcolor: "#aaaaaa",
                showbottomshadow: false,
                bottomshadowimage: "bottom-shadow.png",
                bottomshadowimagewidth: 140,
                bottomshadowimagetop: 90,
                showbackgroundimage: false,
                backgroundimage: "",
                backgroundimagewidth: 120,
                backgroundimagetop: -10,
                arrowstyle: "mouseover",
                arrowimage: "arrows.png",
                arrowwidth: 32,
                arrowheight: 32,
                arrowmargin: 0,
                arrowhideonmouseleave: 1E3,
                arrowtop: 50,
                showribbon: false,
                ribbonimage: "ribbon_topleft-0.png",
                ribbonposition: "topleft",
                ribbonimagex: -11,
                ribbonimagey: -11,
                showtext: true,
                shownumbering: false,
                numberingformat: "%NUM/%TOTAL ",
                navstyle: "thumbnails",
                navswitchonmouseover: false,
                navdirection: "horizontal",
                navposition: "bottom",
                navmargin: 24,
                navwidth: 64,
                navheight: 60,
                navspacing: 8,
                navmultirows: false,
                navrowspacing: 8,
                navshowpreview: true,
                navshowpreviewontouch: false,
                navpreviewposition: "top",
                navpreviewarrowimage: "preview-arrow.png",
                navpreviewarrowwidth: 20,
                navpreviewarrowheight: 10,
                navpreviewwidth: 120,
                navpreviewheight: 60,
                navpreviewborder: 8,
                navpreviewbordercolor: "#ffff00",
                navimage: "bullets.png",
                navradius: 0,
                navcolor: "",
                navhighlightcolor: "",
                navfont: "Lucida Console, Arial",
                navfontcolor: "#666666",
                navfonthighlightcolor: "#666666",
                navfontsize: 12,
                navbuttonshowbgimage: true,
                navbuttonbgimage: "navbuttonbgimage.png",
                navshowbuttons: false,
                navbuttonradius: 2,
                navbuttoncolor: "#999999",
                navbuttonhighlightcolor: "#333333",
                navshowplaypause: true,
                navshowarrow: true,
                navplaypauseimage: "nav-play-pause.png",
                navarrowimage: "nav-arrows.png",
                navshowplaypausestandalone: false,
                navshowplaypausestandaloneautohide: false,
                navshowplaypausestandaloneposition: "bottomright",
                navshowplaypausestandalonemarginx: 24,
                navshowplaypausestandalonemarginy: 24,
                navshowplaypausestandalonewidth: 32,
                navshowplaypausestandaloneheight: 32,
                navopacity: 0.8,
                navborder: 2,
                navbordercolor: "#ffffff",
                navborderhighlightcolor: "",
                navshowfeaturedarrow: true,
                navfeaturedarrowimage: "featured-arrow.png",
                navfeaturedarrowimagewidth: 20,
                navfeaturedarrowimageheight: 10,
                navthumbstyle: "imageonly",
                navthumbtitleheight: 20,
                navthumbtitlewidth: 120,
                navthumbtitlecss: "display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",
                navthumbtitlehovercss: "text-decoration:underline;",
                navthumbdescriptioncss: "display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
                navthumbnavigationstyle: "arrow",
                navthumbnavigationarrowimage: "",
                navthumbnavigationarrowimagewidth: 32,
                navthumbnavigationarrowimageheight: 32,
                navshowplayvideo: true,
                navplayvideoimage: "play-32-32-0.png",
                transitiononfirstslide: false,
                transition: "slide",
                transitionduration: 1E3,
                transitioneasing: "easeOutQuad",
                slice: {
                    checked: true,
                    effectdirection: 0,
                    effects: "up,down,updown",
                    slicecount: 10,
                    duration: 1500,
                    easing: "easeOutCubic"
                },
                blocks: {
                    columncount: 5,
                    checked: true,
                    rowcount: 5,
                    effects: "topleft,bottomright,top,bottom,random",
                    duration: 1500,
                    easing: "easeOutCubic"
                },
                slide: {
                    duration: 1E3,
                    easing: "easeOutCubic",
                    checked: true,
                    effectdirection: 0
                },
                elastic: {
                    duration: 1E3,
                    easing: "easeOutElastic",
                    checked: true,
                    effectdirection: 0
                },
                crossfade: {
                    duration: 1E3,
                    easing: "easeOutCubic",
                    checked: true
                },
                threedhorizontal: {
                    checked: true,
                    effectdirection: 0,
                    bgcolor: "#222222",
                    perspective: 1E3,
                    slicecount: 1,
                    duration: 1500,
                    easing: "easeOutCubic",
                    fallback: "slice",
                    scatter: 5,
                    perspectiveorigin: "bottom"
                },
                fade: {
                    duration: 1E3,
                    easing: "easeOutCubic",
                    checked: true
                },
                shuffle: {
                    duration: 1500,
                    easing: "easeOutCubic",
                    columncount: 5,
                    checked: true,
                    rowcount: 5
                },
                threed: {
                    checked: true,
                    effectdirection: 0,
                    bgcolor: "#222222",
                    perspective: 1E3,
                    slicecount: 5,
                    duration: 1500,
                    easing: "easeOutCubic",
                    fallback: "slice",
                    scatter: 5,
                    perspectiveorigin: "right"
                },
                blinds: {
                    duration: 1500,
                    easing: "easeOutCubic",
                    checked: true,
                    effectdirection: 0,
                    slicecount: 5
                },
                versionmark: "AMFree",
                showwdefault: true,
                wstyledefault: "text",
                wtextdefault: "65,109,97,122,105,110,103,32,83,108,105,100,101,114,32,70,114,101,101,32,86,101,114,115,105,111,110",
                wimagedefault: "",
                wposcss: "display:none;position:absolute;top:6px;left:6px;visibility:visible;",
                wtextcssdefault: "font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
                winkcssdefault: "text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;"
            };
            var defaultTextOptions = {
                textstyle: "static",
                textpositionstatic: "bottom",
                textautohide: false,
                textpositionmarginstatic: 0,
                textpositiondynamic: "topleft,topright,bottomleft,bottomright,topcenter,bottomcenter",
                textpositionmarginleft: 24,
                textpositionmarginright: 24,
                textpositionmargintop: 24,
                textpositionmarginbottom: 24,
                texteffect: "slide",
                texteffecteasing: "easeOutCubic",
                texteffectduration: 600,
                texteffectslidedirection: "left",
                texteffectslidedistance: 120,
                texteffectdelay: 500,
                texteffectseparate: true,
                texteffect1: "slide",
                texteffectslidedirection1: "right",
                texteffectslidedistance1: 120,
                texteffecteasing1: "easeOutCubic",
                texteffectduration1: 600,
                texteffectdelay1: 1500,
                texteffect2: "slide",
                texteffectslidedirection2: "right",
                texteffectslidedistance2: 120,
                texteffecteasing2: "easeOutCubic",
                texteffectduration2: 600,
                texteffectdelay2: 1500,
                addgooglefonts: true,
                googlefonts: "Inder",
                textcss: "display:block; padding:12px; text-align:left;",
                textbgcss: "display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#333333; opacity:0.6; filter:alpha(opacity=60);",
                titlecss: "display:block; position:relative; font:bold 14px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#fff;",
                descriptioncss: "display:block; position:relative; font:12px Anaheim,Arial,Tahoma,Helvetica,sans-serif; color:#fff;",
                buttoncss: "display:block; position:relative;",
                texteffectresponsive: true,
                texteffectresponsivesize: 600,
                titlecssresponsive: "font-size:12px;",
                descriptioncssresponsive: "font-size:12px;",
                buttoncssresponsive: ""
            };
            this.options = $.extend(defaultOptions, this.options);
            this.textoptions = $.ASUpdateObject(defaultTextOptions, this.options);
            if (typeof amazingslider_previewmode != "undefined")
                this.options.previewmode =
                        amazingslider_previewmode;
            this.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
            if (this.options.skinsfoldername.length > 0)
                this.options.skinsfolder = this.options.jsfolder + this.options.skinsfoldername + "/";
            else
                this.options.skinsfolder = this.options.jsfolder;
            var i;
            var l;
            var mark = "";
            var bytes = this.options.wtextdefault.split(",");
            for (i = 0; i < bytes.length; i++)
                mark += String.fromCharCode(bytes[i]);
            this.options.vermk = '';
            var d0 = "ammaagziicngsliderh.iclolms";
            for (i = 1; i <= 5; i++)
                d0 =
                        d0.slice(0, i) + d0.slice(i + 1);
            l = d0.length;
            for (i = 0; i < 5; i++)
                d0 = d0.slice(0, l - 9 + i) + d0.slice(l - 8 + i);
            if (this.options.versionmark != "AMC" + "om") {
                this.options.showwatermark = window.location.href.indexOf(d0) >= 0 ? false : true;
                this.options.watermarkstyle = this.options.wstyledefault;
                this.options.watermarktext = this.options.vermk;
                this.options.watermarkimage = this.options.wimagedefault;
                this.options.watermarklink = this.options.watermarklinkdefault;
                this.options.watermarktarget = this.options.watermarktargetdefault;
                this.options.watermarkpositioncss =
                        this.options.wposcss;
                this.options.watermarktextcss = this.options.wtextcssdefault;
                this.options.watermarklinkcss = this.options.winkcssdefault;
                this.options.watermarktitle = this.options.linktitle
            }
            if (this.options.arrowimage.substring(0, 7).toLowerCase() != "http://" && this.options.arrowimage.substring(0, 8).toLowerCase() != "https://")
                this.options.arrowimage = this.options.skinsfolder + this.options.arrowimage;
            if (this.options.navimage.substring(0, 7).toLowerCase() != "http://" && this.options.navimage.substring(0, 8).toLowerCase() !=
                    "https://")
                this.options.navimage = this.options.skinsfolder + this.options.navimage;
            var sliderid;
            if ("sliderid" in this.options)
                sliderid = this.options.sliderid;
            else {
                sliderid = amazingsliderId;
                amazingsliderId++
            }
            var object = new AmazingSlider($(this), this.options, this.textoptions, sliderid);
            $(this).data("object", object);
            $(this).data("id", sliderid);
            amazingsliderObjects.addObject(object)
        })
    }
})(jQuery);
(function ($) {
    $.ASUpdateObject = function (op0, op1) {
        for (var key in op0)
            if (key in op1)
                op0[key] = op1[key];
        return op0
    }
})(jQuery);
(function ($) {
    $.fn.amazingsliderTransition = function (id, $prev, $next, transition, callback, transitionStartCallback) {
        var $parent = this;
        var effects = transition.effect;
        var duration = transition.duration;
        var easing = transition.easing;
        var direction = transition.direction;
        var effect = null;
        if (effects) {
            effects = effects.split(",");
            effect = effects[Math.floor(Math.random() * effects.length)];
            effect = $.trim(effect.toLowerCase())
        }
        if ((effect == "threed" || effect == "threedhorizontal") && !ASPlatforms.css33dTransformSupported())
            effect =
                    transition[effect].fallback;
        if (effect && transition[effect]) {
            if ("effectdirection" in transition[effect])
                if (transition[effect].effectdirection == 1)
                    direction = true;
                else if (transition[effect].effectdirection == 2)
                    direction = false;
            if (transition[effect].duration)
                duration = transition[effect].duration;
            if (transition[effect].easing)
                easing = transition[effect].easing
        }
        if (effect == "fade") {
            transitionStartCallback();
            $parent.css({
                overflow: "hidden"
            });
            $next.hide();
            $prev.insertBefore($next);
            $next.fadeIn(duration, easing, function () {
                $prev.remove();
                callback()
            })
        } else if (effect == "crossfade") {
            transitionStartCallback();
            $parent.css({
                overflow: "hidden"
            });
            $next.hide();
            $prev.fadeOut(duration / 2, easing, function () {
                $next.fadeIn(duration / 2, easing, function () {
                    $prev.remove();
                    callback()
                })
            })
        } else if (effect == "slide" || effect == "elastic") {
            transitionStartCallback();
            $parent.css({
                overflow: "hidden"
            });
            if (direction) {
                $next.css({
                    left: "100%"
                });
                $next.animate({
                    left: "0%"
                }, duration, easing);
                $prev.animate({
                    left: "-100%"
                }, duration, easing, function () {
                    $prev.remove();
                    callback()
                })
            } else {
                $next.css({
                    left: "-100%"
                });
                $next.animate({
                    left: "0%"
                }, duration, easing);
                $prev.animate({
                    left: "100%"
                }, duration, easing, function () {
                    $prev.remove();
                    callback()
                })
            }
        } else if (effect == "slice") {
            $parent.css({
                overflow: "hidden"
            });
            $parent.sliceTransition(id, $prev, $next, $.extend({
                duration: duration,
                easing: easing,
                direction: direction,
                imgmargintop: transition.imgmargintop,
                imgmarginleft: transition.imgmarginleft,
                imgmaxwidth: transition.imgmaxwidth
            }, transition["slice"]), callback, transitionStartCallback)
        } else if (effect == "blinds") {
            $parent.css({
                overflow: "hidden"
            });
            $parent.blindsTransition(id, $prev, $next, $.extend({
                duration: duration,
                easing: easing,
                direction: direction,
                imgmargintop: transition.imgmargintop,
                imgmarginleft: transition.imgmarginleft,
                imgmaxwidth: transition.imgmaxwidth
            }, transition["blinds"]), callback, transitionStartCallback)
        } else if (effect == "threed") {
            $parent.css({
                overflow: "visible"
            });
            $parent.threedTransition(id, $prev, $next, $.extend({
                duration: duration,
                easing: easing,
                direction: direction,
                imgmargintop: transition.imgmargintop,
                imgmarginleft: transition.imgmarginleft,
                imgmaxwidth: transition.imgmaxwidth
            }, transition["threed"]), callback, transitionStartCallback)
        } else if (effect == "threedhorizontal") {
            $parent.css({
                overflow: "visible"
            });
            $parent.threedHorizontalTransition(id, $prev, $next, $.extend({
                duration: duration,
                easing: easing,
                direction: direction,
                imgmargintop: transition.imgmargintop,
                imgmarginleft: transition.imgmarginleft,
                imgmaxwidth: transition.imgmaxwidth
            }, transition["threedhorizontal"]), callback, transitionStartCallback)
        } else if (effect == "blocks") {
            $parent.css({
                overflow: "hidden"
            });
            $parent.blocksTransition(id, $prev, $next, $.extend({
                duration: duration,
                easing: easing,
                direction: direction,
                imgmargintop: transition.imgmargintop,
                imgmarginleft: transition.imgmarginleft,
                imgmaxwidth: transition.imgmaxwidth
            }, transition["blocks"]), callback, transitionStartCallback)
        } else if (effect == "shuffle") {
            $parent.css({
                overflow: "visible"
            });
            $parent.shuffleTransition(id, $prev, $next, $.extend({
                duration: duration,
                easing: easing,
                direction: direction,
                imgmargintop: transition.imgmargintop,
                imgmarginleft: transition.imgmarginleft,
                imgmaxwidth: transition.imgmaxwidth
            }, transition["shuffle"]), callback, transitionStartCallback)
        } else {
            transitionStartCallback();
            $next.show();
            $prev.remove();
            callback()
        }
    };
    $.fn.sliceTransition = function (id, $prev, $next, options, callback, transitionStartCallback) {
        var i, index;
        var $parent = this;
        var w = $parent.width();
        var sliceW = w / options.slicecount;
        $next.hide();
        for (i = 0; i < options.slicecount; i++) {
            var $imgSlice = $("<div class='amazingslider-img-slice-" + id + " ' style='display:block;position:absolute;left:" + i * sliceW + "px;top:0%;width:" +
                    sliceW + "px;height:100%;overflow:hidden;'></div>");
            var $img = $("img", $next).clone();
            if (Math.abs(options.imgmarginleft) > 0) {
                $img.css({
                    "margin-left": options.slicecount * options.imgmarginleft + "%"
                });
                $img.css({
                    "max-width": options.slicecount * options.imgmaxwidth + "%",
                    left: "-" + sliceW * i + "px",
                    width: options.slicecount * options.imgmaxwidth + "%"
                })
            } else {
                $img.css({
                    "margin-top": options.slicecount * options.imgmargintop + "%"
                });
                $img.css({
                    "max-width": options.slicecount * 100 + "%",
                    left: "-" + sliceW * i + "px",
                    width: options.slicecount *
                            100 + "%"
                })
            }
            $imgSlice.append($img);
            $parent.append($imgSlice)
        }
        var slices = $(".amazingslider-img-slice-" + id, $parent);
        if (!options.direction)
            slices = $($.makeArray(slices).reverse());
        var effects = options.effects.split(",");
        var effect = effects[Math.floor(Math.random() * effects.length)];
        effect = $.trim(effect.toLowerCase());
        $parent.unbind("transitionFinished").bind("transitionFinished", function () {
            $parent.unbind("transitionFinished");
            $prev.remove();
            $next.show();
            slices.remove();
            callback()
        });
        var duration = options.duration /
                2;
        var interval = options.duration / 2 / options.slicecount;
        index = 0;
        slices.each(function () {
            var slice = $(this);
            switch (effect) {
                case "up":
                    slice.css({
                        top: "",
                        bottom: "0%",
                        height: "0%"
                    });
                    break;
                case "down":
                    slice.css({
                        top: "0%",
                        height: "0%"
                    });
                    break;
                case "updown":
                    if (index % 2 == 0)
                        slice.css({
                            top: "0%",
                            height: "0%"
                        });
                    else
                        slice.css({
                            top: "",
                            bottom: "0%",
                            height: "0%"
                        });
                    break
            }
            setTimeout(function () {
                slice.animate({
                    height: "100%"
                }, duration, options.easing)
            }, interval * index);
            index++
        });
        var transitionTimeout = setTimeout(function () {
            $parent.trigger("transitionFinished")
        },
                options.duration);
        transitionStartCallback(transitionTimeout)
    };
    $.fn.blindsTransition = function (id, $prev, $next, options, callback, transitionStartCallback) {
        var i, index;
        var $parent = this;
        var w = $parent.width();
        var sliceW = w / options.slicecount;
        $next.hide();
        for (i = 0; i < options.slicecount; i++) {
            var $imgSliceWrapper = $("<div class='amazingslider-img-slice-wrapper-" + id + " ' style='display:block;position:absolute;left:" + i * sliceW + "px;top:0%;width:" + sliceW + "px;height:100%;overflow:hidden;'></div>");
            var $imgSlice = $("<div class='amazingslider-img-slice-" +
                    id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>");
            var $img = $("img", $next).clone();
            if (Math.abs(options.imgmarginleft) > 0) {
                $img.css({
                    "margin-left": options.slicecount * options.imgmarginleft + "%"
                });
                $img.css({
                    "max-width": options.slicecount * options.imgmaxwidth + "%",
                    left: "-" + sliceW * i + "px",
                    width: options.slicecount * options.imgmaxwidth + "%"
                })
            } else {
                $img.css({
                    "margin-top": options.slicecount * options.imgmargintop + "%"
                });
                $img.css({
                    "max-width": options.slicecount *
                            100 + "%",
                    left: "-" + sliceW * i + "px",
                    width: options.slicecount * 100 + "%"
                })
            }
            $imgSlice.append($img);
            $imgSliceWrapper.append($imgSlice);
            $parent.append($imgSliceWrapper)
        }
        var slices = $(".amazingslider-img-slice-" + id, $parent);
        if (!options.direction)
            slices = $($.makeArray(slices).reverse());
        $parent.unbind("transitionFinished").bind("transitionFinished", function () {
            $parent.unbind("transitionFinished");
            $prev.remove();
            $next.show();
            $(".amazingslider-img-slice-wrapper-" + id, $parent).remove();
            callback()
        });
        index = 0;
        slices.each(function () {
            var slice =
                    $(this);
            var target;
            if (!options.direction) {
                slice.css({
                    left: "",
                    right: "-100%"
                });
                target = {
                    right: "0%"
                }
            } else {
                slice.css({
                    left: "-100%"
                });
                target = {
                    left: "0%"
                }
            }
            slice.animate(target, options.duration * (index + 1) / options.slicecount, options.easing);
            index++
        });
        var transitionTimeout = setTimeout(function () {
            $parent.trigger("transitionFinished")
        }, options.duration);
        transitionStartCallback(transitionTimeout)
    };
    $.fn.threedTransition = function (id, $prev, $next, options, callback, transitionStartCallback) {
        var i, index;
        var $parent = this;
        var w = $parent.width(),
                h = $parent.height(),
                dist = h / 2;
        var sliceW = w / options.slicecount;
        var $cubeWrapper = $("<div class='amazingslider-img-cube-wrapper-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;'></div>");
        $parent.append($cubeWrapper);
        $cubeWrapper.css(ASPlatforms.applyBrowserStyles({
            "transform-style": "preserve-3d",
            "perspective": options.perspective,
            "perspective-origin": options.perspectiveorigin + " center"
        }));
        $next.hide();
        for (i = 0; i < options.slicecount; i++) {
            var $nextImg =
                    $("img", $next).clone();
            if (Math.abs(options.imgmarginleft) > 0) {
                $nextImg.css({
                    "margin-left": options.slicecount * options.imgmarginleft + "%"
                });
                $nextImg.css({
                    "max-width": options.slicecount * options.imgmaxwidth + "%",
                    left: "-" + sliceW * i + "px",
                    width: options.slicecount * options.imgmaxwidth + "%"
                })
            } else {
                $nextImg.css({
                    "margin-top": options.slicecount * options.imgmargintop + "%"
                });
                $nextImg.css({
                    "max-width": options.slicecount * 100 + "%",
                    left: "-" + sliceW * i + "px",
                    width: options.slicecount * 100 + "%"
                })
            }
            var $nextImgSlice = $("<div class='amazingslider-img-slice-" +
                    id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + options.bgcolor + ";'></div>");
            $nextImgSlice.append($nextImg);
            var $curImg = $("img", $prev).clone();
            if (Math.abs(options.imgmarginleft) > 0) {
                $curImg.css({
                    "margin-left": options.slicecount * options.imgmarginleft + "%"
                });
                $curImg.css({
                    "max-width": options.slicecount * options.imgmaxwidth + "%",
                    left: "-" + sliceW * i + "px",
                    width: options.slicecount * options.imgmaxwidth + "%"
                })
            } else {
                $curImg.css({
                    "margin-top": options.slicecount *
                            options.imgmargintop + "%"
                });
                $curImg.css({
                    "max-width": options.slicecount * 100 + "%",
                    left: "-" + sliceW * i + "px",
                    width: options.slicecount * 100 + "%"
                })
            }
            var $curImgSlice = $("<div class='amazingslider-img-slice-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + options.bgcolor + ";'></div>");
            $curImgSlice.append($curImg);
            var $left = $("<div class='amazingslider-img-slice-left-" + id + " ' style='display:block;position:absolute;left:2px;top:2px;width:" +
                    (h - 1) + "px;height:" + (h - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + options.bgcolor + ";'></div>");
            var $right = $("<div class='amazingslider-img-slice-right-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:" + (h - 1) + "px;height:" + (h - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + options.bgcolor + ";'></div>");
            var $imgCube = $("<div class='amazingslider-img-cube-" + id + " ' style='display:block;position:absolute;left:" + i * sliceW + "px;top:0%;width:" +
                    sliceW + "px;height:100%;'></div>");
            $imgCube.append($left);
            $imgCube.append($right);
            $imgCube.append($nextImgSlice);
            $imgCube.append($curImgSlice);
            $cubeWrapper.append($imgCube);
            $left.css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "rotateY(-90deg) translateZ(" + dist + "px" + ")"
            }));
            $right.css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "rotateY(90deg) translateZ(" + (sliceW - dist) + "px" +
                        ")"
            }));
            $curImgSlice.css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "translateZ(" + dist + "px" + ")"
            }));
            $nextImgSlice.css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "rotateX(" + (options.direction ? "90" : "-90") + "deg) translateZ(" + dist + "px" + ")"
            }))
        }
        var cubes = $(".amazingslider-img-cube-" + id, $parent);
        $parent.unbind("transitionFinished").bind("transitionFinished", function () {
            $parent.unbind("transitionFinished");
            $prev.remove();
            $next.show();
            setTimeout(function () {
                $cubeWrapper.remove()
            }, 100);
            callback()
        });
        var interval = options.duration / 2 / options.slicecount;
        var duration = options.duration / 2;
        cubes.each(function () {
            $(this).css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden"
            }));
            $(this).css(ASPlatforms.applyBrowserStyles({
                "transition-property": "transform"
            }, true));
            $(this).css(ASPlatforms.applyBrowserStyles({
                "transform": "translateZ(-" + dist + "px" + ")"
            }))
        });
        $prev.hide();
        index =
                0;
        cubes.each(function () {
            var cube = $(this);
            var mid = (options.slicecount - 1) / 2;
            var scatter = Math.round((index - mid) * options.scatter * w / 100);
            setTimeout(function () {
                cube.css(ASPlatforms.applyBrowserStyles({
                    "transform-style": "preserve-3d",
                    "backface-visibility": "hidden"
                }));
                cube.css(ASPlatforms.applyBrowserStyles({
                    "transition-property": "transform"
                }, true));
                cube.css(ASPlatforms.applyBrowserStyles({
                    "transition-duration": duration + "ms",
                    "transform": "translateZ(-" + dist + "px" + ") rotateX(" + (options.direction ? "-89.99" : "89.99") +
                            "deg)"
                }));
                cube.animate({
                    left: "+=" + scatter + "px"
                }, duration / 2 - 50, function () {
                    cube.animate({
                        left: "-=" + scatter + "px"
                    }, duration / 2 - 50)
                })
            }, interval * index + 100);
            index++
        });
        var transitionTimeout = setTimeout(function () {
            $parent.trigger("transitionFinished")
        }, options.duration);
        transitionStartCallback(transitionTimeout)
    };
    $.fn.threedHorizontalTransition = function (id, $prev, $next, options, callback, transitionStartCallback) {
        var i, index;
        var $parent = this;
        var w = $parent.width(),
                h = $parent.height(),
                dist = w / 2;
        var sliceH = h / options.slicecount;
        var $cubeWrapper = $("<div class='amazingslider-img-cube-wrapper-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;'></div>");
        $parent.append($cubeWrapper);
        $cubeWrapper.css(ASPlatforms.applyBrowserStyles({
            "transform-style": "preserve-3d",
            "perspective": options.perspective,
            "perspective-origin": "center " + options.perspectiveorigin
        }));
        $next.hide();
        for (i = 0; i < options.slicecount; i++) {
            var $nextImg = $("img", $next).clone();
            if (Math.abs(options.imgmarginleft) > 0) {
                $nextImg.css({
                    "margin-left": options.imgmarginleft +
                            "%",
                    height: "auto"
                });
                $nextImg.css({
                    "max-width": options.imgmaxwidth + "%",
                    top: "-" + sliceH * i + "px",
                    width: options.imgmaxwidth + "%"
                })
            } else {
                $nextImg.css({
                    "margin-top": options.imgmargintop + "%"
                });
                $nextImg.css({
                    "max-width": "100%",
                    top: "-" + sliceH * i + "px",
                    width: "100%"
                })
            }
            var $nextImgSlice = $("<div class='amazingslider-img-slice-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + options.bgcolor + ";'></div>");
            $nextImgSlice.append($nextImg);
            var $curImg = $("img", $prev).clone();
            if (Math.abs(options.imgmarginleft) > 0) {
                $curImg.css({
                    "margin-left": options.imgmarginleft + "%",
                    height: "auto"
                });
                $curImg.css({
                    "max-width": options.imgmaxwidth + "%",
                    top: "-" + sliceH * i + "px",
                    width: options.imgmaxwidth + "%"
                })
            } else {
                $curImg.css({
                    "margin-top": options.imgmargintop + "%"
                });
                $curImg.css({
                    "max-width": "100%",
                    top: "-" + sliceH * i + "px",
                    width: "100%"
                })
            }
            var $curImgSlice = $("<div class='amazingslider-img-slice-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" +
                    options.bgcolor + ";'></div>");
            $curImgSlice.append($curImg);
            var $top = $("<div class='amazingslider-img-slice-left-" + id + " ' style='display:block;position:absolute;left:2px;top:2px;width:" + (w - 1) + "px;height:" + (w - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + options.bgcolor + ";'></div>");
            var $bottom = $("<div class='amazingslider-img-slice-right-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:" + (w - 1) + "px;height:" + (w - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" +
                    options.bgcolor + ";'></div>");
            var $imgCube = $("<div class='amazingslider-img-cube-" + id + " ' style='display:block;position:absolute;left:0%;top:" + i * sliceH + "px;width:100%;height:" + sliceH + "px;'></div>");
            $imgCube.append($top);
            $imgCube.append($bottom);
            $imgCube.append($nextImgSlice);
            $imgCube.append($curImgSlice);
            $cubeWrapper.append($imgCube);
            $top.css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "rotateX(90deg) translateZ(" + dist + "px" + ")"
            }));
            $bottom.css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "rotateX(-90deg) translateZ(" + (sliceH - dist) + "px" + ")"
            }));
            $curImgSlice.css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "translateZ(" + dist + "px" + ")"
            }));
            $nextImgSlice.css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "rotateY(" + (options.direction ? "-90" : "90") + "deg) translateZ(" + dist + "px" + ")"
            }))
        }
        var cubes = $(".amazingslider-img-cube-" + id, $parent);
        $parent.unbind("transitionFinished").bind("transitionFinished", function () {
            $parent.unbind("transitionFinished");
            $prev.remove();
            $next.show();
            setTimeout(function () {
                $cubeWrapper.remove()
            }, 100);
            callback()
        });
        var interval = options.duration / 2 / options.slicecount;
        var duration = options.duration / 2;
        cubes.each(function () {
            $(this).css(ASPlatforms.applyBrowserStyles({
                "transform-style": "preserve-3d",
                "backface-visibility": "hidden"
            }));
            $(this).css(ASPlatforms.applyBrowserStyles({
                "transition-property": "transform"
            }, true));
            $(this).css(ASPlatforms.applyBrowserStyles({
                "transform": "translateZ(-" + dist + "px" + ")"
            }))
        });
        $prev.hide();
        index = 0;
        cubes.each(function () {
            var cube = $(this);
            var mid = (options.slicecount - 1) / 2;
            var scatter = Math.round((index - mid) * options.scatter * h / 100);
            setTimeout(function () {
                cube.css(ASPlatforms.applyBrowserStyles({
                    "transform-style": "preserve-3d",
                    "backface-visibility": "hidden"
                }));
                cube.css(ASPlatforms.applyBrowserStyles({
                    "transition-property": "transform"
                }, true));
                cube.css(ASPlatforms.applyBrowserStyles({
                    "transition-duration": duration +
                            "ms",
                    "transform": "translateZ(-" + dist + "px" + ") rotateY(" + (options.direction ? "89.99" : "-89.99") + "deg)"
                }));
                cube.animate({
                    top: "+=" + scatter + "px"
                }, duration / 2 - 50, function () {
                    cube.animate({
                        top: "-=" + scatter + "px"
                    }, duration / 2 - 50)
                })
            }, interval * index + 100);
            index++
        });
        var transitionTimeout = setTimeout(function () {
            $parent.trigger("transitionFinished")
        }, options.duration);
        transitionStartCallback(transitionTimeout)
    };
    $.fn.blocksTransition = function (id, $prev, $next, options, callback, transitionStartCallback) {
        var i, j, index;
        var $parent =
                this;
        var w = $parent.width(),
                h = $parent.height();
        var blockW = w / options.columncount;
        var blockH = h / options.rowcount;
        var effects = options.effects.split(",");
        var effect = effects[Math.floor(Math.random() * effects.length)];
        effect = $.trim(effect.toLowerCase());
        $next.hide();
        for (i = 0; i < options.rowcount; i++)
            for (j = 0; j < options.columncount; j++) {
                var $imgBlockWrapper = $("<div class='amazingslider-img-block-wrapper-" + id + " ' style='display:block;position:absolute;left:" + j * blockW + "px;top:" + i * blockH + "px;width:" + blockW + "px;height:" +
                        blockH + "px;overflow:hidden;'></div>");
                var $imgBlock = $("<div class='amazingslider-img-block-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>");
                var $img = $("img", $next).clone();
                if (Math.abs(options.imgmarginleft) > 0) {
                    $img.css({
                        "margin-left": options.columncount * options.imgmarginleft + "%"
                    });
                    $img.css({
                        "max-width": options.columncount * options.imgmaxwidth + "%",
                        left: "-" + blockW * j + "px",
                        top: "-" + blockH * i + "px",
                        width: options.columncount * options.imgmaxwidth +
                                "%",
                        height: "auto"
                    })
                } else {
                    $img.css({
                        "margin-top": options.columncount * options.imgmargintop + "%"
                    });
                    $img.css({
                        "max-width": options.columncount * 100 + "%",
                        left: "-" + blockW * j + "px",
                        top: "-" + blockH * i + "px",
                        width: options.columncount * 100 + "%"
                    })
                }
                $imgBlock.append($img);
                $imgBlockWrapper.append($imgBlock);
                $parent.append($imgBlockWrapper)
            }
        var blocks = $(".amazingslider-img-block-" + id, $parent);
        $parent.unbind("transitionFinished").bind("transitionFinished", function () {
            $parent.unbind("transitionFinished");
            $prev.remove();
            $next.show();
            $(".amazingslider-img-block-wrapper-" + id, $parent).remove();
            callback()
        });
        if (effect == "bottomright" || effect == "bottom")
            blocks = $($.makeArray(blocks).reverse());
        else if (effect == "random")
            blocks = $($.makeArray(blocks).sort(function () {
                return 0.5 - Math.random()
            }));
        index = 0;
        blocks.each(function () {
            var block = $(this);
            var row, col;
            row = Math.floor(index / options.columncount);
            col = index % options.columncount;
            block.hide();
            switch (effect) {
                case "topleft":
                case "bottomright":
                    block.delay(options.duration * (row + col) / (options.rowcount +
                            options.columncount)).fadeIn();
                    break;
                case "top":
                case "bottom":
                case "random":
                    block.delay(options.duration * index / (options.rowcount * options.columncount)).fadeIn();
                    break
            }
            index++
        });
        var transitionTimeout = setTimeout(function () {
            $parent.trigger("transitionFinished")
        }, options.duration);
        transitionStartCallback(transitionTimeout)
    };
    $.fn.shuffleTransition = function (id, $prev, $next, options, callback, transitionStartCallback) {
        var i, j, index;
        var $parent = this;
        var w = $parent.width(),
                h = $parent.height();
        var blockW = w / options.columncount;
        var blockH = h / options.rowcount;
        for (i = 0; i < options.rowcount; i++)
            for (j = 0; j < options.columncount; j++) {
                var $imgBlockWrapperNext = $("<div class='amazingslider-img-block-wrapper-next-" + id + " ' style='display:block;position:absolute;left:" + j * blockW + "px;top:" + i * blockH + "px;width:" + blockW + "px;height:" + blockH + "px;overflow:hidden;'></div>");
                var $imgBlockNext = $("<div class='amazingslider-img-block-next-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>");
                var $imgNext = $("img", $next).clone();
                if (Math.abs(options.imgmarginleft) > 0) {
                    $imgNext.css({
                        "margin-left": options.columncount * options.imgmarginleft + "%"
                    });
                    $imgNext.css({
                        "max-width": options.columncount * options.imgmaxwidth + "%",
                        left: "-" + blockW * j + "px",
                        top: "-" + blockH * i + "px",
                        width: options.columncount * options.imgmaxwidth + "%",
                        height: "auto"
                    })
                } else {
                    $imgNext.css({
                        "margin-top": options.columncount * options.imgmargintop + "%"
                    });
                    $imgNext.css({
                        "max-width": options.columncount * 100 + "%",
                        left: "-" + blockW * j + "px",
                        top: "-" + blockH *
                                i + "px",
                        width: options.columncount * 100 + "%"
                    })
                }
                $imgBlockNext.append($imgNext);
                $imgBlockWrapperNext.append($imgBlockNext);
                $parent.append($imgBlockWrapperNext);
                var $imgBlockWrapperPrev = $("<div class='amazingslider-img-block-wrapper-prev-" + id + " ' style='display:block;position:absolute;left:" + j * blockW + "px;top:" + i * blockH + "px;width:" + blockW + "px;height:" + blockH + "px;overflow:hidden;'></div>");
                var $imgBlockPrev = $("<div class='amazingslider-img-block-prev-" + id + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>");
                var $imgPrev = $("img", $prev).clone();
                if (Math.abs(options.imgmarginleft) > 0) {
                    $imgPrev.css({
                        "margin-left": options.columncount * options.imgmarginleft + "%"
                    });
                    $imgPrev.css({
                        "max-width": options.columncount * options.imgmaxwidth + "%",
                        left: "-" + blockW * j + "px",
                        top: "-" + blockH * i + "px",
                        width: options.columncount * options.imgmaxwidth + "%",
                        height: "auto"
                    })
                } else {
                    $imgPrev.css({
                        "margin-top": options.columncount * options.imgmargintop + "%"
                    });
                    $imgPrev.css({
                        "max-width": options.columncount * 100 + "%",
                        left: "-" + blockW * j + "px",
                        top: "-" + blockH *
                                i + "px",
                        width: options.columncount * 100 + "%"
                    })
                }
                $imgBlockPrev.append($imgPrev);
                $imgBlockWrapperPrev.append($imgBlockPrev);
                $parent.append($imgBlockWrapperPrev)
            }
        $next.hide();
        $prev.hide();
        var blocksNext = $(".amazingslider-img-block-wrapper-next-" + id, $parent);
        var blocksPrev = $(".amazingslider-img-block-wrapper-prev-" + id, $parent);
        $parent.unbind("transitionFinished").bind("transitionFinished", function () {
            $parent.unbind("transitionFinished");
            $prev.remove();
            $next.show();
            $(".amazingslider-img-block-wrapper-next-" +
                    id, $parent).remove();
            $(".amazingslider-img-block-wrapper-prev-" + id, $parent).remove();
            callback()
        });
        var offset = $parent.offset();
        var distL = -offset.left;
        var distR = $(window).width() - offset.left - $parent.width() / options.columncount;
        var distT = -offset.top * 100 / $parent.height();
        var distB = $(window).height() - offset.top - $parent.height() / options.rowcount;
        index = 0;
        blocksPrev.each(function () {
            var block = $(this);
            var posL = Math.random() * (distR - distL) + distL;
            var posT = Math.random() * (distB - distT) + distT;
            block.animate({
                left: posL +
                        "px",
                top: posT + "px",
                opacity: 0
            }, options.duration, options.easing);
            index++
        });
        index = 0;
        blocksNext.each(function () {
            var block = $(this);
            var row = Math.floor(index / options.columncount);
            var col = index % options.columncount;
            var posL = Math.random() * (distR - distL) + distL;
            var posT = Math.random() * (distB - distT) + distT;
            block.css({
                left: posL + "px",
                top: posT + "px",
                opacity: 0
            }, options.duration, options.easing);
            block.animate({
                left: col * blockW + "px",
                top: row * blockH + "px",
                opacity: 1
            }, options.duration, options.easing);
            index++
        });
        var transitionTimeout =
                setTimeout(function () {
                    $parent.trigger("transitionFinished")
                }, options.duration);
        transitionStartCallback(transitionTimeout)
    }
})(jQuery);
(function ($) {
    $.fn.touchSwipe = function (options) {
        var defaults = {
            preventWebBrowser: false,
            swipeLeft: null,
            swipeRight: null,
            swipeTop: null,
            swipeBottom: null
        };
        if (options)
            $.extend(defaults, options);
        return this.each(function () {
            var startX = -1,
                    startY = -1;
            var curX = -1,
                    curY = -1;

            function touchStart(event) {
                var e = event.originalEvent;
                if (e.targetTouches.length >= 1) {
                    startX = e.targetTouches[0].pageX;
                    startY = e.targetTouches[0].pageY
                } else
                    touchCancel(event)
            }

            function touchMove(event) {
                if (defaults.preventWebBrowser)
                    event.preventDefault();
                var e = event.originalEvent;
                if (e.targetTouches.length >= 1) {
                    curX = e.targetTouches[0].pageX;
                    curY = e.targetTouches[0].pageY
                } else
                    touchReset()
            }

            function touchEnd(event) {
                if (curX > 0 || curY > 0) {
                    triggerHandler();
                    touchReset()
                } else
                    touchReset()
            }

            function touchCancel(event) {
                if (navigator.userAgent.match(/Android/i) != null)
                    triggerHandler();
                touchReset()
            }

            function touchReset() {
                startX = -1;
                startY = -1;
                curX = -1;
                curY = -1
            }

            function triggerHandler() {
                if (curX > startX) {
                    if (defaults.swipeRight)
                        defaults.swipeRight.call()
                } else if (defaults.swipeLeft)
                    defaults.swipeLeft.call();
                if (curY > startY) {
                    if (defaults.swipeBottom)
                        defaults.swipeBottom.call()
                } else if (defaults.swipeTop)
                    defaults.swipeTop.call()
            }
            try {
                $(this).bind("touchstart", touchStart);
                $(this).bind("touchmove", touchMove);
                $(this).bind("touchend", touchEnd);
                $(this).bind("touchcancel", touchCancel)
            } catch (e) {
            }
        })
    }
})(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c /
                    2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function (x,
            t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function (x, t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function (x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * 0.3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 *
                Math.PI / p)) + b
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * 0.3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * 2 * Math.PI / p) + c + b
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * 0.3 * 1.5;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)
            return -0.5 * a * Math.pow(2, 10 *
                    (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) * 0.5 + c + b
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },
    easeInBounce: function (x, t, b, c, d) {
        return c -
                jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75)
            return c * 7.5625 * t * t + b;
        else if (t < 2 / 2.75)
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        else if (t < 2.5 / 2.75)
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        else
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2)
            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    }
});
if (typeof amazingsliderObjects === "undefined")
    var amazingsliderObjects = new function () {
        this.objects = [];
        this.addObject = function (obj) {
            this.objects.push(obj)
        };
        this.loadNext = function (id) {
            for (var i = 0; i < this.objects.length; i++)
                if (this.objects[i].id == id) {
                    this.objects[i].videoPaused = false;
                    if (!this.objects[i].isPaused)
                        this.objects[i].slideRun(-1)
                }
        }
    };
if (typeof ASYouTubeIframeAPIReady === "undefined") {
    var ASYouTubeIframeAPIReady = false;
    var ASYouTubeTimeout = 0;

    function onYouTubeIframeAPIReady() {
        ASYouTubeIframeAPIReady = true
    }
}
if (typeof amazingsliderId === "undefined")
    var amazingsliderId = 0;;
