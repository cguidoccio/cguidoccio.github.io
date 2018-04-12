"use strict";!function(e){function t(e){var t=new Image;return t.src=e.src,{width:t.width,height:t.height}}var i={init:function(i){return this.each(function(){var n={},a=e(this);i&&e.extend(n,i),a.click(function(){var i=a.get(0);if("IMG"==i.tagName.toUpperCase())var n=a.parent("a").attr("href");else if("A"==i.tagName.toUpperCase())var n=a.attr("href");return document.documentElement.clientWidth>767||window.innerWidth>767?(e("#ImageBox").remove(),e("body").append('<div id="ImageBox" style="display:none;"></div>'),e("#ImageBox").append('<img id="ImageBoxImg" src="'+n+'" />'),e("#ImageBox #ImageBoxImg").load(function(){var i=document.getElementById("ImageBoxImg"),n=i.naturalWidth?i.naturalWidth:t(i).width,a=e(window).width()-150;n=a>n?n:a,e(this).width(n-50),e("#ImageBox").dialog({width:"500px",draggable:!1,position:"center",resizable:!1,modal:!0,open:function(){e(".ui-dialog").css({top:"30px",position:"fixed",maxHeight:"90%",overflow:"scroll"}),e("#ImageBoxImg").css("maxWidth","100%")}})})):window.open(n),!1})})}};e.fn.imageLightbox=function(e){return i.init.apply(this,arguments)},e(document).ready(function(){e(".lightbox").imageLightbox()})}(jQuery);;
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,o){o.concur_assets=function(){var o={};return o.logCampaignForLater=function(o){var r,c=new Array,t=concur_include.concurGetCurrentDateTimeText(),a=e.cookie("_cnqrLogLater");if(null!=a){a.match(/~~/g)&&(a=this.clean_up_cookie(a));var n=this.fixcomma(a.split("#~#"));if(n.length>5)for(var s=0;s<5;s++)c.push(n[s]);else c=n}if(""!=o){var i=[o,e.concur.eloquaUserData.qs_pid,e.concur.eloquaUserData.qs_cid,e.concur.eloquaUserData.qs_pid_last,e.concur.eloquaUserData.qs_cid_last,t];c.push(i.join("!^"))}r=c.join("#~#"),e.cookie("_cnqrLogLater",r,{path:"/",expires:365})},o.prepEloquaData=function(o){var r=e.concur.eloquaUserData,c="";this.resetUserCookieDataFields(),r.C_Total_Employees=r.C_CT_EMPLOYEES1,0==r.CampaignTimeStampCnqrcmpsCookieSet&&(r.CampaignTimeStamp=concurGetCurrentDateTimeText()),r.docid=o,""!=o&&(e.each(r,function(e,o){c+=e+"="+o+"&"}),concur_forms.postData(c,!0))},o.resetUserCookieDataFields=function(){var o=e.concur.eloquaUserData;o.CampaignTimeStamp=concurGetCurrentDateTimeText(),o.qs_cid_last=e.cookie("qs_cid_last"),o.qs_pid_last=e.cookie("qs_pid_last"),o.qs_cid=e.cookie("qs_cid"),o.qs_pid=e.cookie("qs_pid")},o.clean_up_cookie=function(e){for(var o=e.split("~~"),r=new Array,c=0,t=o.length;c<t;c++){var a=o[c].split("~");6===a.length&&r.push(a.join("!^"))}return r.join("#~#")},o.fixcomma=function(e){for(var o=[],r=0,c=e.length;r<c;r++)e[r].match(/,/g)||o.push(e[r]);return o},o.elq_cid_create_cookie=function(){var o=Concur7.getQueryVariable("elq_cid");o&&o.length<=12&&e.cookie("qs_elq_cid",o,{path:"/",expires:365})},o.observer="undefined"!=typeof concur_assets?concur_assets.observer||[]:[],o.ready=function(){o.elq_cid_create_cookie(),e.concur.eloquaUserData.elq_cid=e.cookie("qs_elq_cid")||"";for(var r=0,c=o.observer.length;r<c;r++)o.observer[r]();o.observer=[],o.run_observers=function(e){"function"==typeof e&&e()}},o.ajax="undefined"!=typeof concur_assets?concur_assets.ajax||{}:{},o}()}(jQuery,window);try{jQuery.concur.eloquaUserData.run_observers(concur_assets.ready)}catch(e){var concur="object"===(void 0===concur?"undefined":_typeof(concur))?concur:{};concur.eloquaUserData_registered=concur.eloquaUserData_registered||[],concur.eloquaUserData_registered.push(concur_assets.ready)};
var concur_forms = {
	
	postData: function(postData, async, callback) {
		jQuery.ajax({
			type: "POST",
			url: "/ajax/post-handler",
			data: postData,
			success: typeof callback === 'function' ? callback : null,
			async: async ? true : false
		});
	},

	get_channel: function() {
		var channel = concurUtilHttp.getParameterCaseInsensitive("channel");

		channel = channel || jQuery.cookie("qs_channel");

		return channel;
	},

	get_C_BR___Channel1: function() {
		var channel = concur_forms.get_channel();

		if(channel === "amex") {
			return "AMEX-BROOKLYN";
		} else if(channel) {
			return channel.toUpperCase();
		} else if(regional === 'en-uk') {
			return "DIRECT-UK";
		} else {
			return "DIRECT";
		}

	},

	get_C_Lead_Source___Original1: function() {
		var qs_lsid = concurUtilHttp.getParameterCaseInsensitive("lsid");
		
		if(!qs_lsid) {
			qs_lsid = "Web";
		}

		return qs_lsid;
	},

	omnitureSubmitClick: function(){
		try{
			utag.link({event_flag:'form completed'});
		} catch(e){

		}
	},
};

jQuery.postToEloqua = function(postData, async, callback){concur_forms.postData(postData, async, callback);};;
var concur_include = {
	/*
	 * Get the current language by the in page variable from php
	 * regional is set from template.php
	 */
	concurGetCurrentLang: function() {
	    if (typeof(regional) == 'undefined') {
	        return 'en-us';
	    } else {
	        return regional;
	    }
	},

	concurGetCurrentDateTimeText: function() {
	    var currentDateTime = new Date();
	    var month = currentDateTime.getUTCMonth() + 1;
	    var day = currentDateTime.getUTCDate();
	    var year = currentDateTime.getUTCFullYear();
	    var seconds = currentDateTime.getUTCSeconds();
	    var minutes = currentDateTime.getUTCMinutes();
	    var hours = currentDateTime.getUTCHours();
	    var dateTimeText = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

	    return dateTimeText;
	},

	concurGetFormattedDate: function(strFormat) {
	    var currentDateTime = new Date();
	    var month = currentDateTime.getUTCMonth() + 1;
	    var day = currentDateTime.getUTCDate();
	    var year = currentDateTime.getUTCFullYear();
	    var shortYear = currentDateTime.getUTCFullYear();
	    var seconds = currentDateTime.getUTCSeconds();
	    var minutes = currentDateTime.getUTCMinutes();
	    var hours = currentDateTime.getUTCHours();
	    var dateTimeText = "";

	    if (strFormat) {
	        year = "" + year;
	        year = year.substring(year.length - 4);

	        shortYear = "" + shortYear;
	        shortYear = shortYear.substring(shortYear.length - 2);

	        month = "0" + month;
	        month = month.substring(month.length - 2);

	        day = "0" + day;
	        day = day.substring(day.length - 2);

	        hours = "0" + hours;
	        hours = hours.substring(hours.length - 2);

	        minutes = "0" + minutes;
	        minutes = minutes.substring(minutes.length - 2);

	        seconds = "0" + seconds;
	        seconds = seconds.substring(seconds.length - 2);

	        dateTimeText = strFormat;
	        dateTimeText = dateTimeText.replace("yyyy", year);
	        dateTimeText = dateTimeText.replace("yy", shortYear);
	        dateTimeText = dateTimeText.replace("mm", month);
	        dateTimeText = dateTimeText.replace("dd", day);
	        dateTimeText = dateTimeText.replace("hh", hours);
	        dateTimeText = dateTimeText.replace("mi", minutes);
	        dateTimeText = dateTimeText.replace("ss", seconds);
	    }

	    return dateTimeText;
	}
};

var concurGetCurrentLang = concur_include.concurGetCurrentLang;
var concurGetFormattedDate = concur_include.concurGetFormattedDate;
var concurGetCurrentDateTimeText = concur_include.concurGetCurrentDateTimeText;;

(function($){
	
	function getTranslations() {
		
		var translations;

		switch(siteregion) {

			case "de-de":
				translations = {
					title: 'Concur – Reisen, Belege, Abrechnungen',
					googleText: 'Kostenlos in Google Play',
					appleText: 'Download im App Store',
					viewText: 'AUSSICHT',
					appleLink: 'itms://itunes.apple.com/us/app/concur-travel-receipts-expense/id335023774?mt=8/',
					googleLink: 'https://play.google.com/store/apps/details?id=com.concur.breeze',
				}
			break;

			case "fr-fr":
				translations = {
					title: 'Concur – Déplacements pros, Notes de frais',
					googleText: 'Voir dans Google Play',
					appleText: 'Voir dans l’App Store',
					viewText: 'VUE',
					appleLink: 'itms://itunes.apple.com/us/app/concur-travel-receipts-expense/id335023774?mt=8/',
					googleLink: 'https://play.google.com/store/apps/details?id=com.concur.breeze',
				}
			break;

			case "zh-hans-cn":
				translations = {
					title: 'Concur -差旅，单据，费用报销',
					googleText: '免費 - 在Baidu',
					appleText: '马上在app store 下载',
					viewText: '视图',
					appleLink: 'itms://itunes.apple.com/us/app/concur-travel-receipts-expense/id335023774?mt=8/',
					googleLink: 'http://shouji.baidu.com/game/7571499.html',
				}
			break;

			case "ja-jp":
				translations = {
					title: '経費精算、出張管理、請求書管理 の世界標準クラウド コンカー',
					googleText: '無料 Google Play',
					appleText: 'Concur 無料 App Store',
					viewText: 'ビュー',
					appleLink: 'itms://itunes.apple.com/us/app/concur-travel-receipts-expense/id335023774?mt=8/',
					googleLink: 'https://play.google.com/store/apps/details?id=com.concur.breeze',
				}
			break;

			case "it-it":
				translations = {
					title: 'Concur – Viaggi, ricevute, note spese',
					googleText: 'GRATUITO – in Google Play',
					appleText: 'Scaricalo – prendilo sull’app store',
					viewText: 'VISTA',
					appleLink: 'itms://itunes.apple.com/us/app/concur-travel-receipts-expense/id335023774?mt=8/',
					googleLink: 'https://play.google.com/store/apps/details?id=com.concur.breeze',
				}
			break;


			default:
				translations = {
					title: 'Concur - Travel, Receipts, Expense Reports',
					googleText: 'FREE - In Google Play',
					appleText: 'GET - On the App Store',
					viewText: 'VIEW',
					appleLink: 'itms://itunes.apple.com/us/app/concur-travel-receipts-expense/id335023774?mt=8/',
					googleLink: 'https://play.google.com/store/apps/details?id=com.concur.breeze',
				}
			break;
		}

		return translations;

	};


	function bannerHide() {
		$.cookie('concur-banner-hide', true, { expires : 10 });
		$('.sticky-menu').css('top', '0px');
		$('#smartbanner').remove();
	}

	function makeBanners() {
		
		var isMobile= navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|ZuneWP7|Opera|Dolphin/i),
			translate = getTranslations();

		if((!!isMobile && isMobile[0] == "Android") && !$.cookie('concur-banner-hide') ) {

			var banner = '<div id="smartbanner" class="bg-concur-light-grey" style="position: static; top: 0px;"><div class="container"><a href="javascript:void(0)" class="sb-close banner-close" >×</a><div class="col-xs-11"><span class="sb-icon" style="background-image: url(https://assets.concur.com/images/logos/smart-banner-logo.png);"></span><div class="sb-info"><strong>'+translate.title+'</strong><br><span class="author">Concur</span><br><span class="instore">'+translate.googleText+'</span></div></div><a href="'+translate.googleLink+'" class="sb-button-view">'+translate.viewText+'</a></div></div>';

			$('body').prepend(banner);

		} else if((!!isMobile ) && (isMobile[0] == 'iPhone' || isMobile[0] == 'iPad' || isMobile[0] == 'iPod') && !$.cookie('concur-banner-hide')) {

			var banner = '<div id="smartbanner" class="bg-concur-light-grey" style="position: static; top: 0px;"><div class="container"><a href="javascript:void(0)" class="sb-close banner-close" >×</a><div class="col-xs-11"><span class="sb-icon" style="background-image: url(https://assets.concur.com/images/logos/smart-banner-logo.png);"></span><div class="sb-info"><strong>'+translate.title+'</strong><br><span class="author">Concur</span><br><span class="instore">'+translate.appleText+'</span></div></div><a href="'+translate.appleLink+'" class="sb-button-view">'+translate.viewText+'</a></div></div>';

			$('body').prepend(banner);

		}
				
	}

	function scrollFix() {

		var isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|ZuneWP7|Opera|Dolphin/i);

		if((!!isMobile) && (isMobile[0] == "Android" || isMobile[0] == 'iPhone' || isMobile[0] == 'iPad' || isMobile[0] == 'iPod') && !$.cookie('concur-banner-hide')) {
			$(window).on('scroll', function(){

				if($('#smartbanner').length > 0) {

					var bannerHeight = $('#smartbanner').height() + 20;

					setTimeout(function(){
						var scrollPos = bannerHeight - $(window).scrollTop();

						if($(window).scrollTop() < bannerHeight) {
							$('.sticky-menu').css('top', bannerHeight - $(window).scrollTop());
						} else {
							$('.sticky-menu').css('top', '0px');
						}
					});
				}
				
			});
		}
	}


	$(document).ready(function(){
		makeBanners();
		scrollFix();
		$('.banner-close').on('click', bannerHide);
	});
	

}(jQuery));




;
var concur_overrides = {
	/** 
	* postToEloqua
	*
	* @class concur_overrides
	* @method postToEloqua
	*
	* @param postData {String} Serialized form data
	* @param async {Bool} Specify ajax call to be async or not
	* @param callback {Function} Success Function
	*/
	postToEloqua: function(postData, async, callback) {
		jQuery.ajax({
	        type: "POST",
	        url: "/ajax/post-handler",
	        data: postData,
	        success: callback ? callback() : null,
	        async: async ? true : false
	    });
	}
};


jQuery.postToEloqua = function(postData, async, callback){concur_overrides.postToEloqua(postData, async, callback);};;
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    }
}
/**
* The Animation object holds all of the selectors and animation functions
* for each item that needs to be animated
* 
* @class Animation
* 
* @param containerID {String} jQuery selector for the container
* @param options {Object} all of the items and styles you want to animate
*/
function ParallaxAnimation (containerID, options, state) {

    // Initiate variables
    var viewport = jQuery(window).height()
    ,   container = jQuery(containerID)
    ,   containerPos = container.offset().top
    ,   selectors = {}
    ,   selector
    ,   styles
    ,   style;

    // Store for reCalc() on resize
    this.containerID = containerID;
    this.options = options;

    // Assign public properties
    this.mobile = (options.mobile === false) ? false : true;
    this.start = (options.start || options.start === 0) ? options.start : 0.5;
    this.stop = (options.stop || options.stop === 0) ? options.stop : this.start;
    this.shift = (options.shift) ? options.shift : 0;
    this.state = state || 'start';
    this.calcStart = containerPos - (viewport * this.start) + this.shift;
    this.calcStop = (containerPos + container.height()) - (viewport * this.stop);
    this.startPercent = (this.calcStop - this.calcStart);
    this.itemNames = [];
    this.items = {};

    // Store each selector and what styles need to be animated
    var do_not_process = ['start', 'stop', 'event', 'shift', 'mobile'];
    for (selector in options) {
        if (do_not_process.indexOf(selector) < 0) {
            styles = options[selector];
            this.items[selector] = this.items[selector] ? this.items[selector] : {};
            this.items[selector].elem = jQuery(selector);
            this.items[selector].styles = [];
            this.itemNames.push(selector);
            for (style in styles) {
                // range, format, multiplier
                var item = this.items[selector],
                    tempStyles,
                    range = {
                        start: (typeof styles[style][0] === 'function') ? styles[style][0]() : styles[style][0],
                        stop: (typeof styles[style][1] === 'function') ? styles[style][1]() : styles[style][1]
                    };
                tempStyles = {};
                tempStyles.style = style;
                tempStyles.range = [range.start, range.stop];
                tempStyles.format = styles[style][2] || '';
                tempStyles.ease = styles[style][3] || 'linear';
                tempStyles.multiplier = multiplier(tempStyles.range);
                item.styles.push(tempStyles);
            }
        } else if (selector === 'event') {
            this.itemNames.push(selector);
            this.items[selector] = options[selector];
        }
    }

    // Multiplier
    function multiplier(range) {
        var a = range[0],
            b = range[1],
            multiplier = Math.abs(a - b);

        if (a > b) {
            return function (percent) {
                return a - (percent * multiplier);
            };
        } else {
            return function (percent) {
                return a + (percent * multiplier);
            };
        }
    }

    /**
    * Get the current percent completed of this animation
    * 
    * @method getPercent
    * 
    * @param scroll {Number} current window scroll position
    */
    this.getPercent = function (scroll) {
        return (scroll - this.calcStart) / this.startPercent;
    }
};

/**
* Animate function to progress the animation based on percent
* 
* @method animate
* 
* @param scroll {Number} The current window scroll position
* 
* @param status {String} The Status of 'start' or 'stop'
*/
ParallaxAnimation.prototype.animate = function (scroll, status, direction) {
    var len = this.itemNames.length
    ,       percent = this.getPercent(scroll)
    ,       i, j, slen
    ,       item
    ,       change
    ,       current
    ,       finish;

    for (i = 0; i < len; i++) {
        // Select current item
        item = this.items[this.itemNames[i]];
        if (this.itemNames[i] === 'event') {
            if (direction === 'down') {
                if (item.called !== 'down' && percent >= item.percent) {
                    item.down(item.args);
                    item.called = 'down';
                }
            } else {
                if (item.called !== 'up' && percent < item.percent) {
                    item.up(item.args);
                    item.called = 'up';
                } else {
                    if (percent === 1) {
                        item.down(item.args);
                        item.called = 'down';
                    }
                }
            }

            continue;
        }
        slen = item.styles.length;
        // run multiplier on each style
        for (j = 0; j < slen; j++) {
            /**
            *
            *   Needs to be refactored
            *
            */
            current = item.styles[j];
            if (current.ease) {
                change = current.multiplier(this.ease[current.ease](percent));
            } else {
                change = current.multiplier(percent);
            }

            if (current.style === 'rotate') {
                if (status !== 'stop') {
                    item.elem.rotate(change);
                }
            } else {
                if (status && current.style === 'opacity') {
                    item.elem.css(current.style, '');
                    if (current.multiplier(percent) <= 0) {
                        item.elem.hide();
                    } else {
                        item.elem.show();
                    }
                } else {
                    if (current.style === 'opacity') {
                        item.elem.show();   
                    }
                    item.elem.css(current.style, change + current.format);
                }
            }
            /**
            *
            *   End of refactoring
            *
            */
        }
    }
};


/**
* Easing functions for use in the animate method
* 
* @property ease
* 
* @type Object
*/
ParallaxAnimation.prototype.ease = {
    // ToDo
    ellipse: function (p) {
        return p * p * p * p;
    },
    circle: function (p) {
        return 1 - Math.sqrt(1 - (p * p));
    },
    begin: function() {
        return 0;
    },
    end: function() {
        return 1;
    },
    linear: function(p) {
        return p;
    },
    quadratic: function(p) {
        return p * p;
    },
    cubic: function(p) {
        return p * p * p;
    },
    swing: function(p) {
        return (-Math.cos(p * Math.PI) / 2) + 0.5;
    },
    sqrt: function(p) {
        return Math.sqrt(p);
    },
    outCubic: function(p) {
        return (Math.pow((p - 1), 3) + 1);
    },
    outQuad: function (p) {
        return p * (2 - p);
    },
    //see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
    bounce: function(p) {
        var a;

        if(p <= 0.5083) {
            a = 3;
        } else if(p <= 0.8489) {
            a = 9;
        } else if(p <= 0.96208) {
            a = 27;
        } else if(p <= 0.99981) {
            a = 91;
        } else {
            return 1;
        }

        return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
    }
}


var timeList = [];


/**
* Parallax takes an input of elements an options to create a
* parallax scroll effect
* 
* @class Parallax
* 
* @param options {Object} yes, all your options in one object
*/
function Parallax (options, state) {

    // If not called as a constructor recalls as constuctor
    if (this === undefined || this.constructor !== Parallax) {
        console.log('not being constructed, call with "new"');
        return new Parallax(options);
    }

    var $this = this
    // Setup for the scroll event listener
    ,   scrollCache = 0
    ,   theWindow = jQuery(window)
    ,   key
    ,   scroll
    ,   stopper;

    this.isMobile = jQuery(window).width() < 768;

    function nextFrame () {
        $this.run(scroll, scrollCache);
    }

    // Memoize each animation and make it public incase they want to remove one.
    this.animations = [];
    this.processScroll = function () {
        scroll = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0;

        // requestAnimationFrame(nextFrame);
        nextFrame();

        scrollCache = scroll;
    }

    // init create each animation from options
    for (key in options) {
        this.animations.push(new ParallaxAnimation(key, options[key], state));
    };

    jQuery(window).scroll($this.processScroll);

    jQuery(document).ready($this.processScroll);

    jQuery(window).resize(function () {
        clearTimeout(stopper);
        stopper = setTimeout(function () {
            $this.reCalc();
        }, 100);
    });

};

/**
* Re-calculate the parallax numbers
* 
* @class Parallax
* 
* @method reCalc
*/
Parallax.prototype.reCalc = function () {
    var len = this.animations.length
    ,   i
    ,   item;

    this.isMobile = jQuery(window).width() < 768;

    for (i = 0; i < len; i++) {
        item = this.animations[i];
        this.animations[i] = new ParallaxAnimation(item.containerID, item.options);
    };
};



/**
* Run the animation for each animation in the animations array
* 
* @method run
* 
* @param scroll {Number} current scroll position in 'px'
* 
* @param $this {Object} It's the context...
*/
Parallax.prototype.run = function (scroll, scrollCache) {
    var len = this.animations.length
    ,   $this = this
    ,   i
    ,   anim = this.animations;

    function runLoop (animations, i, direction) {
        var current = animations[i];

        if ($this.isMobile && !current.mobile) {
            return;
        }

        if (current.calcStart <= scroll && current.calcStop >= scroll) {
            current.state = 'running';
            current.animate(scroll, null, direction);
        } else if (current.state !== 'start' && current.calcStart > scroll) {
            current.state = 'start';
            current.animate(current.calcStart, 'start');
        } else if (current.state !== 'stop' && current.calcStop < scroll) {
            current.state = 'stop';
            current.animate(current.calcStop, 'stop');
        }
    }

    if ((scroll - scrollCache) >= 0) {
        for (i = 0; i < len; i++) {
            runLoop(anim, i, 'down');
        }
    } else {
        for (i = len - 1; i >= 0; i--) {
            runLoop(anim, i, 'up');
        }
    }
}

/**
* Set the animation to done, like it has been scrolled to the bottom
* 
* @method setFinished
*/
Parallax.prototype.setFinished = function () {
    var len = this.animations.length
    ,   i
    ,   current;

    for (i = 0; i < len; i++) {
        current = this.animations[i];
        current.animate(current.calcStop, 'stop');
    }
    this.animations = [];
};
/**
*   Concur7 is a namespace for helper functions used on the concur7 theme.
*   No, there is no constructor right now, so just call Concur7.usefulFunction(params);
*   NOTE: please comment your code in the yuidoc format so we can generate docs!
*
*   @class Concur7
*/
var Concur7 = {

    /**
    *   A hide and show toggle for elements.<br /><br />
    *   data-target-hide='#target_id_to_hide, .target-class-too'<br /><br />
    *   data-target-show='#target_id_to_show'
    *   
    *   @method hideShow
    *   
    *   @param elem {Object} The element that is being interacted with
    *   @param speed {Number} The speed that the element fades in (in milliseconds) default = 400
    *   @param callback {Function} The callback to fire after fade in is complete (Tracking?)
    */
    hideShow: function (elem, parent, speed, callback, precall) {

        var speed = speed || 400;

        if (precall) {
            precall();
        }

        if (elem.data('target-toggle')) {
            var target = jQuery(elem.data('target-toggle'), parent);
            if (target.css('display') === 'none') {
                target.fadeIn(speed);
            } else {
                target.fadeOut(speed);
            }
        } else {
            var target_hide = jQuery(elem.data('target-hide'), parent),
                target_show = jQuery(elem.data('target-show'), parent);

            // Add/Remove the hidden class
            target_hide.hide();
            target_show.fadeIn(speed);
        }

        if (typeof callback === 'function') {
            setTimeout(callback, speed);
        }
    },

    /**
    *   A quick and dirty method to find query string variables and return their value
    *
    *   @method getQueryVariable
    *
    *   @param variable {string} The term to search for in the QS
    *   @param query {string} An optional url/query string segment to search against
    */
    getQueryVariable: function(variable, query) {
        var query = query || window.location.search.substring(1);
        
        //handles the case where user error occurs and feeds in a full uri
        if(query.indexOf('?') >= 0) {
            query = query.split('?')[1];
        }

        var vars = query.split('&');

        vars[vars.length - 1] = vars[vars.length - 1].split("#")[0];
        
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) === variable) {
                return pair[1];
            }
        }
        return '';
    },

    /**
    *   Function to pull the last index portion from the uri.
    *
    *   @method getPageNameFromUrl
    *
    *   @param pathname {string}  Optional pathname to parse instead of current url
    *
    */
    getPageNameFromUrl: function(pathname) {
        var pathname = pathname || location.pathname;
        pathname = pathname.split('?')[0].split('#')[0].split('/');

        while(!pathname[pathname.length - 1] && pathname.length > 0) {
            pathname.splice(pathname.length - 1, 1);
        }

        return pathname[pathname.length - 1] || "homepage";
    },

    /**
    *   Get the video id from a youtube url from either embed link or normal link
    *
    *   @method getYouTubeVideoName
    *
    *   @param path {String} Youtube embed link ("www.youtube.com/embed/R8W_6xWphtw") or normal path ("youtube.com/watch?v=R8W_6xWphtw")
    */
    getYouTubeVideoName: function(path) {

        return Concur7.getQueryVariable('v', path) || Concur7.getPageNameFromUrl(path);
    },

    /**
    *   Inject an item into the query string for videos and just
    *
    *   @method injectQueryString
    *
    *   @param url {String} The url you want to work with
    *   @param injectQS {String} Key/value pair to be added (doesn't have to have a value), example: autoplay=1
    */
    injectQueryString: function (url, injectQS) {
        var endString = (injectQS.indexOf('=') < 0) ? injectQS.indexOf('=') : injectQS.length,
            qs = injectQS.substring(0, endString);

        if (url.indexOf(qs) === -1) {
            var srcParts = url.split('?');
            srcParts[1] = (srcParts[1] && srcParts[1].substr(0, 1) !== '&') ? '&' + srcParts[1] : srcParts[1];
            url = srcParts[0] + '?' + injectQS + srcParts[1];
        }

        return url;
    },


    /**
    *   Add default event listener
    *
    *   @medthod default_bind
    *
    *   @param elem {Object} DOM element
    *   @param type {String} Event Type
    *   @param event_handler {Function} callback function
    *
    *   @return void
    */
    default_bind: function(elem, type, event_handler) {
        if ( elem.addEventListener ) {
            elem.addEventListener( type, event_handler, false );
        } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, event_handler );
        } else {
            elem["on" + type] = event_handler;
        }
    },

    /**
    *   Preload a list of images into the browser to prevent load times later
    *   
    *   @method imagePreload
    *
    *   @param loadList {Array} List of images urls to pre-load
    */
    imagePreload: (function () {
        var stack = [];
        var loaded = 0;

        return function (loadList) {
        
            var i
            ,   len
            ,   current;

            if (loadList !== 'next') {

                if (stack.length > 0) {
                    stack.push(loadList); // add to stack
                    return;
                }

                stack.push(loadList); // add to stack
            }

            current = stack[0];

            for (i = 0, len = current.length; i < len; i++) {
                var img = new Image();

                img.src = current[i];

                if (img.complete) { // this check will speed it up if the images are there
                    loaded++;

                    if (loaded === len) {
                        loaded = 0;
                        stack.shift(); // hit next stack item
                        if (stack.length > 0) {
                            Concur7.imagePreload('next');
                        }
                    }

                } else {
                    this.default_bind(img, 'load', function (e) {
                        loaded++;

                        if (loaded === len) {
                            loaded = 0;
                            stack.shift(); // hit next stack item
                            if (stack.length > 0) {
                                Concur7.imagePreload('next');
                            }
                        }
                    });
                }
            };

            return;
        }
    })(),

    /**
     * Checks if and what type of mobile device it is, within the major companies
     * @method isMobile
     * @return {Boolean|String} false if it is not a mobile device and the name of the device if it is.
     */
    isMobile: function () {
        var phones = {
            Android: function() {
                return (/Android/i.test(navigator.userAgent)) ? 'android' : false;
            },
            BlackBerry: function() {
                return (/BlackBerry/i.test(navigator.userAgent)) ? 'blackberry' : false;
            },
            iOS: function() {
                return (/iPhone|iPad|iPod/i.test(navigator.userAgent)) ? 'ios' : false;
            },
            Windows: function() {
                return (/IEMobile/i.test(navigator.userAgent)) ? 'windows' : false;
            },
        };

        return (phones.iOS() || phones.Android() || phones.BlackBerry() || phones.Windows());
    },

    /**
     * Hide menu items for landing pages if referring domain is the same as current domain
     */

    hideMenu: function (elem) {
        var refDomain = document.referrer.split('/')[2],
            myDomain = window.location.host,
            elem = elem ? elem : '.sticky-menu .container > div > div:not(:first-child)';

        if(refDomain !== myDomain) {
            jQuery(elem).hide();
        } 
    },

    /**
     * Hide footer items for landing pages if referring domain is the same as current domain
     */

    hideFooter: function (elem) {
          var refDomain = document.referrer.split('/')[2],
            myDomain = window.location.host,
            elem = elem ? elem : '.www-footer-com .container > div > div:nth-child(2), .www-footer-com .container > div > div:nth-child(3)';


        if(refDomain !== myDomain) {
            jQuery(elem).hide();
        } 
    },


    /**
     * Simple Accordion just pass in the target element, the hidden element inside of the target element and the animation speed if no
     speed we default to 250ms
     */

    toggleAccordion: function(targetElem, hiddenElem, speed){
        var hide = jQuery(targetElem).find(hiddenElem);
        var $ = jQuery;
        var speed = speed ? speed : 150;
        
        // add concur accordion class to the target elem and accordion hiden to the hidden elem 
        $(targetElem).hasClass('concur-accordion') || $(targetElem).addClass('concur-accordion');
        $(hide).addClass('accordion-hide');
         
        // run the animation.
        $(targetElem).on('click', function(){
            $(this).toggleClass('expanded');
            $(this).hasClass('expanded') ? $(this).find(hiddenElem).slideDown(speed) : $(this).find(hiddenElem).slideUp(speed);
        });    
    },

    /**
     * Same functionality as above but the accordion starts expanded instead of collapsed.
     */
    reverseToggleAccordion: function(targetElem, hiddenElem, speed) {
        var hide = jQuery(targetElem).find(hiddenElem);
        var $ = jQuery;
        var speed = speed ? speed : 150;

        // add concur accordion class to the target elem and accordion hiden to the hidden elem 
        $(targetElem).hasClass('concur-accordion') || $(targetElem).addClass('concur-accordion');

        // run the animation.
        $(targetElem).on('click', function () {
        $(this).toggleClass('expanded');
        $(this).hasClass('expanded') ? $(this).find(hiddenElem).slideUp(speed) : $(this).find(hiddenElem).slideDown(speed);
        });
    },

    /**
     * Setup DemandBase
     */
    demandbaseInit: function () {
        window.demandbaseAddScript = {
            newScript : function () {

                // Retrieve Form Connector core file from the cloud
                var dbt = document.createElement('script'); dbt.type = 'text/javascript'; dbt.async = true; dbt.id = 'demandbase-form';
                dbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'scripts.demandbase.com/formWidget.js'; 
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(dbt, s); 
                this.fired = true;
            }
            ,fired : false
        }

        /**
        * Start Demandbase Form Connector Implementation
        */
        window.dbAsyncInit = function() {

            // Form Connector Configuration
            var dbf = Demandbase.Connectors.WebForm;
            dbf.connect({   
                /* must be ID */
                emailID: "Email1",
                /* must be ID */
                companyID: "CompanyName",
                key: 'ed7a95b6c0ee0ca090f0ceea0af1ecb8eccc54f0',
                toggleFieldList: ['fieldIDsGoHere'],
                fieldMap: {
                    'company_name': '',
                    'industry': '',
                    'employee_count': '',
                    'zip':'',
                    'country':'',
                    'primary_sic':'',
                    'street_address':'',
                    'city':'',
                    'state':'',
                    'country_name':'',
                    'phone':'',
                    'web_site':'',
                    'annual_sales':'',
                    'demandbase_sid':'',
                    'b2b':'',
                    'b2c':'',
                    'information_level':'',
                    'ip':''
                },
                formNameList: ['concur-short-form']
            });

            /**
            * 'db_hook_' function implementations go here
            * Optional - define further functionality here, if needed
            **/
            Demandbase.Connectors.WebForm.autocompletePlaceholder = '';
        };
    }
};
;
jQuery(document).ready(function() {

	jQuery(".js-fn-center").each(function() {
		var that = jQuery(this);

		var fnTarget = jQuery(".js-fn-target", this);

		var fnSizer = typeof fnTarget.data("sizer") !== "undefined" ? jQuery(fnTarget.data("sizer"), fnTarget) : fnTarget;
		var fnDims = typeof that.data("dims") !== "undefined" ? that.data("dims") : [{"h" : 2, "w" : 2}];

		var vertOffset = Math.floor(that.closest("section").height()/fnDims[0].h) - Math.floor(fnSizer.height()/2);
		var horizOffset = Math.floor(that.width()/fnDims[0].w) - Math.floor(fnSizer.width()/2); //This accounts for gradation of image

		fnTarget.css({"padding-top":vertOffset, "padding-left":horizOffset});
	});

});;

jQuery(document).ready(function () {
    jQuery(".play-link.hide-show").each(function () {
        
        var that = jQuery(this).closest('section');
        //bind the src for the player to the parent section
        that.data("src", jQuery("#player1", that).attr('src'));
        //bind the click functionality to the parent.
        jQuery(that).on("click", ".hide-show", function (e) {
            var that = jQuery(this);
            
            if (that.hasClass('hide-show')) {

                var parentSection = that.closest('section');

                Concur7.hideShow(that, parentSection, 400, function () {
                    var mobile = false;
                    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                        mobile = true;
                    }
                    if (that.hasClass('play-link')) {
                        var pTitle = Concur7.getPageNameFromUrl();
                        var vidSrc = jQuery(parentSection).data('src');
                        var vidName = Concur7.getYouTubeVideoName(vidSrc);
                        if (!gtmYTListeners[0].playVideo || mobile) {
                            vidSrc = Concur7.injectQueryString(vidSrc, 'autoplay=1');
                            jQuery('#player1', parentSection).attr('src', vidSrc);
                            // Tracking
                            s.linkTrackVars = 'eVar44';
                            s.eVar44 = 'YouTube|' + vidName;
                            s.tl(true,'o',pTitle[pTitle.length - 1] + '-youtube');
                        } else {
                            var url = jQuery('#player1', parentSection).attr('src');
                            for (var i = 0, len = gtmYTListeners.length; i < len; i++) {
                                var vid = gtmYTListeners[i].getVideoData().video_id;
                                if (url.indexOf(vid) >= 0) {
                                    gtmYTListeners[i].playVideo();
                                    break;
                                }
                            }
                        }
                    } else {
                        if (!gtmYTListeners[0].stopVideo || mobile) {
                            jQuery('#player1', parentSection).attr('src', '');
                        } else {
                            var url = jQuery('#player1', parentSection).attr('src');
                            for (var i = 0, len = gtmYTListeners.length; i < len; i++) {
                                var vid = gtmYTListeners[i].getVideoData().video_id;
                                if (url.indexOf(vid) >= 0) {
                                    gtmYTListeners[i].stopVideo();
                                    break;
                                }
                            }
                        }
                    }
                });

                // e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
            }

        });
    });
});;
"use strict";var MicroEvent=function(){};MicroEvent.prototype={on:function(t,e){this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e)},off:function(t,e){this._events=this._events||{},t in this._events!=!1&&this._events[t].splice(this._events[t].indexOf(e),1)},emit:function(t){if(this._events=this._events||{},t in this._events!=!1)for(var e=0;e<this._events[t].length;e++)this._events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}},MicroEvent.mixin=function(t){for(var e=["on","off","emit"],n=0;n<e.length;n++)"function"==typeof t?t.prototype[e[n]]=MicroEvent.prototype[e[n]]:t[e[n]]=MicroEvent.prototype[e[n]];return t},"undefined"!=typeof module&&"exports"in module&&(module.exports=MicroEvent);;
"use strict";!function(e){e.extend({cookie:function i(o,n,t){if(void 0===n){var r=null;if(document.cookie&&""!=document.cookie)for(var s=document.cookie.split(";"),u=0;u<s.length;u++){var i=e.trim(s[u]);if(i.substring(0,o.length+1)==o+"="){r=decodeURIComponent(i.substring(o.length+1));break}}return r}t=t||{},null===n&&(n="",t.expires=-1);var c="";if(t.expires&&("number"==typeof t.expires||t.expires.toUTCString)){var p;"number"==typeof t.expires?(p=new Date,p.setTime(p.getTime()+24*t.expires*60*60*1e3)):p=t.expires,c="; expires="+p.toUTCString()}var a=t.path?"; path="+t.path:"",m=t.domain?"; domain="+t.domain:"",d=t.secure?"; secure":"";document.cookie=[o,"=",encodeURIComponent(n),c,a,m,d].join("")}})}(jQuery);;
"use strict";!function(e,t){function a(e){if(e&&e.getPlayerState()==YT.PlayerState.PLAYING){var t=e.getDuration()-e.getCurrentTime()<=1.5?1:(Math.floor(e.getCurrentTime()/e.getDuration()*4)/4).toFixed(2);if(!e.lastP||t>e.lastP){var o=e.getVideoData(),r=o.video_id+":"+o.title;e.lastP=t,utag.link({youtube_player:"youtube",youtube_player_state:100*t+"%",youtube_player_label:r})}1!=e.lastP&&setTimeout(function(){a(e)},1e3)}}t.gtmYTListeners=[],t.firedVideoEloquaTracking=!1,t.onYouTubeIframeAPIReady=function(){e(document).ready(function(){for(var e=document.getElementsByTagName("iframe"),t=e.length;t--;)/youtube.com\/embed/.test(e[t].src)&&(e[t].src.indexOf("enablejsapi=")===-1&&(e[t].src+=(e[t].src.indexOf("?")===-1?"?":"&")+"enablejsapi=1"),gtmYTListeners.push(new YT.Player(e[t],{events:{onStateChange:onPlayerStateChange,onError:onPlayerError}})),YT.gtmLastAction="p")})},t.onPlayerStateChange=function(e){e.data==YT.PlayerState.PLAYING&&setTimeout(function(){a(e.target)},1e3);var t=e.target.getVideoData(),o=t.video_id+":"+t.title;if(e.data==YT.PlayerState.PLAYING){if(!firedVideoEloquaTracking){jQuery("iframe").data("ctdvideo")&&video_tracking_eloqua_docid()}utag.link({youtube_player:"youtube",youtube_player_state:"play",youtube_player_label:o})}e.data==YT.PlayerState.PAUSED&&utag.link({youtube_player:"youtube",youtube_player_state:"pause",youtube_player_label:o}),e.data==YT.PlayerState.ENDED&&utag.link({youtube_player:"youtube",youtube_player_state:"complete",youtube_player_label:o})},t.onPlayerError=function(e){utag.link({youtube_player:"error",youtube_player_state:"GTM",youtube_player_label:"youtube:"+e.target.src+"-"+e.data})},t.video_tracking_eloqua_docid=function(){var t=e("iframe").data("ctdvideo");firedVideoEloquaTracking=!0,concurOmnitureSiteCatalyst.trackVideoOnClick(),concur_assets.logCampaignForLater(t),null!=e.cookie("concur_contact_data")&&concur_assets.prepEloquaData(t)},t.add_player=function(e){var t=brightcove.api.getExperience(e),a=t.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER),o={0:!0,25:!0,50:!0,75:!0,100:!0};a.addEventListener(brightcove.api.events.MediaEvent.PLAY,function(e){utag.link({youtube_player:"brightcove",youtube_player_state:"play",youtube_player_label:e.media.displayName})}),a.addEventListener(brightcove.api.events.MediaEvent.STOP,function(e){Math.floor(e.position/e.duration*100)<=99&&utag.link({youtube_player:"brightcove",youtube_player_state:"pause",youtube_player_label:e.media.displayName})}),a.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,function(e){utag.link({youtube_player:"brightcove",youtube_player_state:"complete",youtube_player_label:e.media.displayName})}),a.addEventListener(brightcove.api.events.MediaEvent.PROGRESS,function(e){var t=Math.floor(e.position/e.duration*100);t>=99&&(t=100),o[t]&&(o[t]=!1,utag.link({youtube_player:"brightcove",youtube_player_state:t+"%",youtube_player_label:e.media.displayName}))}),a.addEventListener(brightcove.api.events.MediaEvent.ERROR,function(e){utag.link({youtube_player:"error",youtube_player_state:"GTM",youtube_player_label:"Brightcove: "+e.media.displayName})})},e(document).ready(function(){for(var e=document.getElementsByTagName("iframe"),t=e.length;t--;)if(/youtube.com\/embed/.test(e[t].src)){var a=document.createElement("script"),o=document.getElementsByTagName("script")[0];a.src="//www.youtube.com/iframe_api",a.async=!0,o.parentNode.insertBefore(a,o);break}})}(jQuery,window);;
