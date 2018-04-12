var concur_media = concur_media || {};
concur_media.players = concur_media.players || {};

concur_media.handle_tracking = function(value, immediate) {

    // if(immediate) {
        concurOmnitureSiteCatalyst.trackVideoOnClick(value, immediate);
    // } else {
    //     //Tracking for Video
        // utag_data.video_name = value;
        // utag_data.event_flag = 'video view';
    // }
}


/**
 * defaultPlayer
 * @param  {function} $ [Sets jQuery]
 * @return {function} Sets concur_media.players.defaultPlayer
 */
;(function ($) {

    'use strict';
    function defaultPlayer () {
        this.videos = {};

        this.initVideo = function (config, rebuild) {


            if (!config) {
                throw new Error('Not formatting the player config correctly, try JSON.');
                return;
            }
            /* check for youtube url and then call the youtube function */
            var playerCheck = config.video_id;
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = playerCheck.match(regExp);
            if (match&&match[7].length==11){
                var b=match[7];
                config.video_id = b;
                config.file_type = "youtube";
                return concur_media.players.youtube.initVideo(config);
            }

            var $this = this;

            // Make sure there aren't duplicate builds without actual thought behind them.
            if (this.videos['_' + config.video_id || config] && !rebuild) {
                return this.videos['_' + config.video_id || config];
            }

            config.width            = config.width || "100%";
            config.height           = config.height || "396";

            /**
             * Flag for firing tracking with s.tl call or not (True for placing videos after page load, False for letting this fire with page load s.t call)
             * Defaults: false
             * @type {[Boolean]}
             */




            config.manually_track = typeof config.manually_track !== 'undefined' ?  config.manually_track : false;

            config.videoEl = this.generate_html(config);

            return this.video_object(config, $this);

        };

    }






    defaultPlayer.prototype.generate_html = function(config) {

        switch(config.device) {

            case 'apple' :

                    if (config.file_type === 'mov' || document.createElement('video').canPlayType('video/' + config.file_type) !== '') {
                        return this.configure_mobile(config);
                    } else {
                        return this.unsupported_message(config.file_type, config.video_id);
                    }

                break;

            case 'android' :

                    if (config.file_type === 'mp4') {
                        return this.configure_mobile(config);
                    } else {
                        return this.unsupported_message(config.file_type, config.video_id);
                    }

                break;

            default:
                    return this.configure_desktop(config);
                break;
        }
    };

    defaultPlayer.prototype.configure_mobile = function(config) {

        var videoEl  = $('<video></video>')
            .attr('src',        config.video_id)
            .attr('controls',   'controls')
            .attr('type',       'video/' + config.file_type)
            .attr('width',      config.width)
            .attr('height',     config.height);

        return videoEl;
    };


    defaultPlayer.prototype.unsupported_message = function(file_type, video_id) {
        return $("<p>This device or browser does not support ." + file_type + " files, <a href=" + video_id + ">click to download </a>if you have another player on your device.</p>");
    };



    defaultPlayer.prototype.configure_desktop = function(config) {

        var s_account = concur_media.s_account;

        if(s_account.indexOf(",") === -1){
            var cleanS_account = s_account;
        } else {
            var S_array = s_account.split(",");
            var cleanS_account = S_array[1];
        }

        var videoEl = $('<embed></embed>')

            .attr('src',        'https://assets.concur.com/player_2011_010511.swf')
            .attr('flashvars',  'flvPath=' + config.video_id + '&sAccount=' + cleanS_account)
            .attr('type',       'application/x-shockwave-flash')
            .attr('width',      config.width)
            .attr('height',     config.height);

        return videoEl;

    };



    defaultPlayer.prototype.video_object = function(config, $this) {
        this.videos['_' + config.video_id] = {
            tpl             : config.videoEl
            ,tracking_id    : config.video_id + '~' + config.title
            ,immediate      : config.manually_track

            ,place          : function(elem, vid) {
                            var video = vid ? $this.videos['_' + vid] : this;

                            elem = $(elem);
                            elem.html(video.tpl);

                            concur_media.handle_tracking(video.tracking_id, video.immediate);

                        }
        };

        return this.videos['_' + config.video_id];
    };

    concur_media.players.defaultPlayer = new defaultPlayer();


})(jQuery);






/**
 * [description]
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function ($) {

    'use strict';
    function BrightcovePlayer () {
        this.videos = {};


        this.initVideo = function (config, rebuild) {
            if (!config) {
            throw new Error('Not formatting the player config correctly, try JSON.');
            return;
        }

        var $this = this;

        // Make sure there aren't duplicate builds without actual thought behind them.
        if (this.videos['_' + config.video_id || config] && !rebuild) {
            return this.videos['_' + config.video_id || config];
        }

        config = {
            video_id: config.video_id || config
            ,player_id: config.player_id || '3976001023001' // Our default player
            ,width: config.width || 480
            ,height: config.height || 270
            ,autoplay: config.autoplay || 'true'
            ,title: config.title

            /** Flag for firing tracking with s.tl call or not (True for placing videos after page load, False for letting this fire with page load s.t call) */
            ,manually_track : typeof config.manually_track !== 'undefined' ?  config.manually_track : false
        };



        var videoEl = $('<object id="bcVideo' + config.player_id + '" class="BrightcoveExperience">'
            +'<param name="bgcolor" value="#FFFFFF" />'
            +'<param name="width" value="' + config.width + '" />'
            +'<param name="height" value="' + config.height + '" />'
            +'<param name="playerID" value="' + config.player_id + '" />'
            +'<param name="playerKey" value="AQ~~,AAADlzdxOME~,lz4UWjb25bdekISWV4u0FR6tTuLUc3DP" />'
            +'<param name="isVid" value="true" />'
            +'<param name="isUI" value="true" />'
            +'<param name="dynamicStreaming" value="true" />'
            +'<param name="autoStart" value="' + config.autoplay + '" />'
            +'<param name="htmlFallback" value="true" />'
            +'<param name="secureConnections" value="true" />'
            +'<param name="secureHTMLConnections" value="true" />'
            +'<param name="includeAPI" value="true" />'
            +'<param name="templateLoadHandler" value="add_player" />'
            +'<param name="templateReadyHandler" value="brightcovePlayer.videos._' + config.video_id + '.callback" />'
            +'<param name="@videoPlayer" value="' + config.video_id + '" />'
            +'<param name="wmode" value="Opaque" />'
        +'</object>');



        this.videos['_' + config.video_id] = {
            tpl: videoEl
            ,tracking_id : config.video_id + '~' + config.title
            ,immediate : config.manually_track

            ,callback: function (event) {

                var APIModules = brightcove.api.modules.APIModules;
                var player = brightcove.api.getExperience(event.target.experience.id);
                var videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);

                // remove loading wheel if using the video load module
                $('.videoWrapper div.loader, #video-wrapper div.loader').fadeOut(500).remove();
                $('.videoWrapper .BrightcoveExperience').css({
                        visibility: 'visible',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                });
                //end loading wheel if using the video load module

                $this.videos['_' + config.video_id].api = videoPlayer;
                $this.videos['_' + config.video_id].exists = false;
            }

            ,place: function (elem, vid) {
                var elem = $(elem);
                var video = $this.videos['_' + vid] || this;
                var loaderStyles = 'position: absolute; height: 100%; background-size: cover; background-position: center; width: 100%; top: 0; left: 0; background-color: rgba(0,0,0,0.8); color: white; padding: 15% 10px 10px;';
                var spinnerStyles = 'display: block; animation:spin 4s linear infinite;';

                if (typeof brightcove === 'undefined') {
                    $.getScript( "https://sadmin.brightcove.com/js/BrightcoveExperiences.js", function(script, status) {
                        this.place(elem);
                    }.bind(this));

                    return;
                }

                if (video.exists) {
                    throw new Error('Run .init() before using this method');
                }

                var thumbnail = $('.videoWrapper img');

                if (thumbnail.length) {
                    loaderStyles += 'background-image: url(' + thumbnail.attr('src') + ');';
                }

                elem.html(video.tpl);

                // add a loading wheel if using the video load module
                $('.videoWrapper').prepend('<div class="loader" style="'+loaderStyles+'"><p class="lg text-center">Your video is loading...</p><h1 class="xlg"><i class="icon-spinner font-200 text-white" style="'+spinnerStyles+'"></i><h1></div>');
                setInterval(function(){
                    $('.videoWrapper .loader').html('<h5 class="prox-basic text-white">Sorry, we were unable to load your video</h5>');
                }, 8000)
                concur_media.handle_tracking("brightcove:" + video.tracking_id, video.immediate);
                //end add a loading wheel if using the video load module

                brightcove.createExperiences();
            }
        };

        return this.videos['_' + config.video_id];

        };
    }

    // Export...ish
    concur_media.players.brightcove = new BrightcovePlayer();
    window.brightcovePlayer = concur_media.players.brightcove;
})(jQuery);





/**
 * [description]
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function ($) {


    'use strict';
    function youtubePlayer () {


        this.videos = {};


        /**
         * Initialization for Video player
         * @param  {[Object]} config    [configuration object]
         * @param  {[Boolean]} rebuild  [Boolean]
         * @return {[Object]}           [Object to allow for chaining of the place functionality]
         */
        this.initVideo = function (config, rebuild) {


            if (!config) {
                throw new Error('Not formatting the player config correctly, try JSON.');
                return;
            }


            var $this = this;


            // Make sure there aren't duplicate builds without actual thought behind them.
            if (this.videos['_' + config.video_id || config] && !rebuild) {


                return this.videos['_' + config.video_id || config];
            }

            config = this.configure(config);
            config.videoEl = this.generate_html(config);

            return this.video_object(config, $this);


        };

    }


    /**
     * Sets fallback values for the config object and forces Autoplay to String representations
     * @param  {[Object]} config [The config object]
     * @return {[Object]}        [Updated config object]
     */
    youtubePlayer.prototype.configure = function(config) {



        config.height = config.height || "396";
        config.width  = config.width  || "100%";

        /**
         * Flag for firing tracking with s.tl call or not (True for placing videos after page load, False for letting this fire with page load s.t call)
         * @type {[Boolean]}
         */
        config.manually_track = typeof config.manually_track !== 'undefined' ?  config.manually_track : false;

        //Check if autoplay undefined
        if (typeof config.autoplay !== "undefined" && ( !config.autoplay || config.autoplay.toLowerCase() === 'false' || config.autoplay === '0') ){
            config.autoplay = '0';
        } else {
            config.autoplay = '1';
        }

        return config;
    };



    /**
     * Generates the html for the iframe based on config variables
     * @param  {[Object]} config [The config object]
     * @return {[String]}        [Markup for the Iframe]

     */
    youtubePlayer.prototype.generate_html = function(config) {
        var src = 'https://www.youtube.com/embed/' + config.video_id + '?showinfo=0&rel=0&autoplay=' + config.autoplay + '&html5=1';

        return '<iframe id="youtube-player-1" width="' + config.width + '" height="' + config.height + '" src="' + src + '" frameborder="0" allowfullscreen></iframe>';
    }


    youtubePlayer.prototype.video_object = function(config, $this) {
        this.videos['_' + config.video_id] = {
            tpl     : config.videoEl
            ,tracking_id : config.video_id + '~' + config.title
            ,immediate : config.manually_track

            ,place  : function(elem, vid) {
                var elem = $(elem)
                ,video = vid ? $this.videos['_' + vid] : this;

                elem.html(video.tpl);

                // youtubePlayer
                concur_media.players.youtube.loadYouTubeAPI(elem); //Handles the video tracking portion

                concur_media.handle_tracking("youtube:" + video.tracking_id, video.immediate);

            }
        }

        return this.videos['_' + config.video_id];
    }

/**
 * Handles loading the YouTube player script, or if present, adding the new player to the gtmYTListeners array from it.
 * @param  {[jQuery DOM Element]} elem [The parent object of the iframe]
 * @return {[None]}
 */
    youtubePlayer.prototype.loadYouTubeAPI = function(elem) {

        if (!window['YT'] || !window['gtmYTListeners']) {

            var j = document.createElement("script"),
            f = document.getElementsByTagName("script")[0];

            j.src = "//www.youtube.com/iframe_api";
            j.async = true;
            f.parentNode.insertBefore(j, f);

        } else {

            //Setup a new player -- code from trackingmod/js/youtubetracking.js
            var ytplayer = $('iframe', elem)[0];

            if (ytplayer.src.indexOf('enablejsapi=') === -1) {
                ytplayer.src += (ytplayer.src.indexOf('?') === -1 ? '?' : '&') + 'enablejsapi=1';
            }

            gtmYTListeners.push(new YT.Player(ytplayer, {
                events: {
                    onStateChange: onPlayerStateChange,
                    onError: onPlayerError
                }
            }));
            YT.gtmLastAction = "p";
        }
    }

    // Export...ish
    concur_media.players.youtube = new youtubePlayer();
})(jQuery);


// This is for China so they can play Youku Videos
(function ($) {


    'use strict';
    function youkuPlayer () {


        this.videos = {};


        /**
         * Initialization for Video player
         * @param  {[Object]} config    [configuration object]
         * @param  {[Boolean]} rebuild  [Boolean]
         * @return {[Object]}           [Object to allow for chaining of the place functionality]
         */
        this.initVideo = function (config, rebuild) {


            if (!config) {
                throw new Error('Not formatting the player config correctly, try JSON.');
                return;
            }


            var $this = this;


            // Make sure there aren't duplicate builds without actual thought behind them.
            if (this.videos['_' + config.video_id || config] && !rebuild) {


                return this.videos['_' + config.video_id || config];
            }

            config = this.configure(config);
            config.videoEl = this.generate_html(config);

            return this.video_object(config, $this);


        };

    }


    /**
     * Sets fallback values for the config object and forces Autoplay to String representations
     * @param  {[Object]} config [The config object]
     * @return {[Object]}        [Updated config object]
     */
    youkuPlayer.prototype.configure = function(config) {

        config.height = config.height || "396";
        config.width  = config.width  || "100%";

        /**
         * Flag for firing tracking with s.tl call or not (True for placing videos after page load, False for letting this fire with page load s.t call)
         * @type {[Boolean]}
         */
        config.manually_track = typeof config.manually_track !== 'undefined' ?  config.manually_track : false;


        return config;
    };



    /**
     * Generates the html for the iframe based on config variables
     * @param  {[Object]} config [The config object]
     * @return {[String]}        [Markup for the Iframe]

     */
    youkuPlayer.prototype.generate_html = function(config) {

        return '<div id="youkuplayer" style="width:' + config.width + ';height:' + config.height + 'px"></div>';
    }


    youkuPlayer.prototype.video_object = function(config, $this) {
        this.videos['_' + config.video_id] = {
            tpl     : config.videoEl
            ,tracking_id : config.video_id + '~' + config.title
            ,immediate : config.manually_track

            ,place  : function(elem, vid) {
                var elem = $(elem)
                ,video = vid ? $this.videos['_' + vid] : this;

                elem.html(video.tpl);

                // youkuPlayer
                concur_media.players.youku.loadYoukuAPI(elem, config.video_id); //Handles the video tracking portion

                concur_media.handle_tracking("youku:" + video.tracking_id, video.immediate);

            }
        }

        return this.videos['_' + config.video_id];
    }

/**
 * Handles loading the YouKu player script.
 * @param  {[jQuery DOM Element]} elem [The parent object of the iframe]
 * @return {[None]}
 */
    youkuPlayer.prototype.loadYoukuAPI = function(elem, vid) {

        if (!window.YKU) {

            var j = document.createElement("script"),
            f = document.getElementsByTagName("script")[0];

            j.src = "https://players.youku.com/jsapi";
            j.async = true;
            f.parentNode.insertBefore(j, f);
        }

        // Run this function every 300 milliseconds to check if API is loaded before calling player. If API doesn't load in 10 seconds we abort the mission
        var count = 0;
        var timer = setInterval(function(){

            if (window.YKU) {
                var YKplayer = new YKU.Player('youkuplayer',{
                    styleid: '0',
                    client_id: '5ce52e31cd791328',
                    vid: vid,
                });;

                clearInterval(timer);
            }

            if (count > 30) {
               clearInterval(timer); 
            }

            count++;


        }, 300)

    }

    // Export...ish
    concur_media.players.youku = new youkuPlayer();
})(jQuery);


/**
 * [description]
 * @param  {[type]} ) {               var domain [description]
 * @return {[type]}   [description]
 */
concur_media.s_account = concur_media.s_account || (function () {
    var domain = document.domain;
    switch (domain) {
        case 'www.concur.com':
                return 'concur-all';
            break;

        case 'www.concur.com.sg':
                return 'concur-com-sg';
            break;

        case 'fusion.concur.com':
                return 'concurfusion';
            break;

        case 'www.concur.de':
                return 'concur-de';
            break;
        case 'www.concur.ca':
                return 'concur-ca';
            break;

        case 'www.concur.fr':
                return 'concur-fr';
            break;

        case 'www.concur.com.au':
                return 'concur-com-au';
            break;

        case 'www.concur.co.uk':
                return 'concur-co-uk';
            break;

        case 'www.concur.co.in':
                return 'concur-co-in';
            break;

        case 'concur.com.hk':
                return 'concur-com-hk';
            break;

        case 'concur.com.mx':
                return 'concur-com-mx';
            break;

        case 'concur.co.jp':
                return 'concur-co-jp';
            break;

        default:
                if(domain.match(/www.concur./)) {
                    return domain.replace('www.', '').replace(/\./g, '-');
                }
                return 'concurdevelopment';
            break;
    }
})();
;

(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
(function ($) {
$(document).ready(function() {
  $('body.page-user #page-wrapper #header .section a#logo').click(function(e){
      e.preventDefault();
  });
});
}(jQuery));;
// Menu event handlers
; (function ($) {
	$(document).ready(function () {
		/**********************/
		/* HEADER ONLY script */
		/**********************/

		// Toggle Search form
		var openSearch = false;

		// Toggle Menu drawer
		var isMenuOpen = false;

		// Cache the menu toggle text
		var gripText = $('.www-header-com .menu-toggle-grip span').text();

		function preventDefault(e) {
			e.preventDefault();
		}

		function preventBubble(e) {
			e.stopPropagation();
		}

		function handleGlobalClick() {
			toggleMenuDrawer();
		}

		function toggleMobileMenu() {
			var drawer = jQuery('.www-header-com .sticky-menu .header-drawer');

			if (window.innerWidth <= 1200) {
				$('.www-header-com .header-drawer').toggleClass('open');

				// Hide search icon and box if menu drawer is open
				openSearch = false;

				$('.www-header-com .sticky-menu').toggleClass('open').removeClass('mobile-search');
				$('.menu-search-box, .mobile-menu-search-box').toggleClass('hidden').css({
					'height': '0px'
				});
			}

		}

		function toggleMenuDrawer() {
			var drawer = $('.www-header-com .header-drawer');

			toggleMobileMenu();

			if (isMenuOpen) {
				// If closed

				// Remove the grey box
				$('.www-header-com .sticky-menu .grey-box-overlay').css({
					height: 0,
				});
				// Change grip X icon to hamburger icon
				$('.www-header-com .menu-toggle-grip img').attr('src', '/sites/all/modules/custom_concur/concur_responsive_menu/images/mob-ico-ham.png');
				$('.www-header-com .menu-toggle-grip span').css({
					color: '#fff',
				});

				// Unlock background content on menu scroll
				$('body').removeClass('lock-scroll');

				// Remove the toggle event from the esc key
				$(window).off('keyup', handleEsc);

				// Remove global close event
				$('.www-header-com .sticky-menu .grey-box-overlay').off('click', handleGlobalClick);
			} else {
				// if open

				var isMobile = window.innerWidth < 1200;

				// Grey out the content
				if (!isMobile) {
					$('.www-header-com .sticky-menu .grey-box-overlay').css({
						height: window.innerHeight,
					});
				}

				/*
					* Lock background content on menu scroll. Need fixed positioning for
					* iPhone. Apparently overflow:hidden works in every browser besides mobile safari...
				*/
				$('body').addClass('lock-scroll');

				// Change grip icon to X
				$('.www-header-com .menu-toggle-grip img').attr('src', '/sites/all/modules/custom_concur/concur_responsive_menu/images/mob-ico-close.png');
				$('.www-header-com .menu-toggle-grip span').css({
					color: 'transparent',
				});

				// Add the toggle event to the esc key
				$(window).on('keyup', handleEsc);

				// Add global close event
				setTimeout(function () {
					$('.www-header-com .sticky-menu .grey-box-overlay').on('click', handleGlobalClick);
				});
			}
			isMenuOpen = !isMenuOpen;
		}

		function toggleMobileLists() {
			var titleElem = $(this);
			var elem = titleElem.next();

			// Close all the other link groups
			$('.www-header-com .header-link-group .link-group-list').removeClass('expanded');

			$('.www-header-com .header-link-group .group-list-title').removeClass('selected');

			// Check if the list is open or not
			if (elem.innerHeight() > 0) {
				elem.css('height', 0);

				// Swap up and down menu title arrows
				$(this).find('.caret-up').hide();
				$(this).find('.caret-down').show();
			} else {
				var ulHeightList = $.map(elem.children(), function (t) { return $(t).height() + 12 });
				var ulHeight = 0;
				// Flips arrows only on mobile for ul menu dropdown
				$(this).find('.caret-up').show();
				$(this).find('.caret-down').hide();

				// Add everything together for the total
				for (var i = 0, len = ulHeightList.length; i < len; i++) {
					ulHeight += ulHeightList[i];
				}

				elem.css('height', ulHeight + 'px').addClass('expanded');
				$(this).addClass('selected');
			}
		}

		function toggleMobileSearch() {
			var mobileSearch = $('.www-header-com .mobile-menu-search-box');

			if (openSearch) {
				$('.www-header-com .sticky-menu').addClass('mobile-search');
				mobileSearch.css({
					height: '75px',
				});
				$('#mobile-menu-search-form #e-search-input').focus();
			} else {
				mobileSearch.css({
					height: 0,
				});
				$('.www-header-com .sticky-menu').removeClass('mobile-search');
			}
		}

		function toggleSearch() {
			var searchForm = $('.www-header-com .menu-search-form');
			var searchSlider = $('.www-header-com .menu-search-box .menu-search-slider');

			if (!openSearch || window.innerWidth < 1200) {
				searchForm.css({
					marginLeft: 0,
				});

				searchSlider.css({
					width: '40px',
					marginLeft: '0',
				});
			} else {
				var width = $('.www-header-com .cta-button-container').width();

				searchForm.css({
					marginLeft: width > 305 ? (width - 355) + 'px' : 0,
				});

				searchSlider.css({
					width: width > 305 ? (width + 100) + 'px' : '305px',
					marginLeft: width > 305 ? '-' + width + 'px' : '-255px',
				});
			}
		}

		function toggleSearchForm() {
			if (window.innerWidth < 1200) {
				toggleMobileSearch();
			}

			toggleSearch();
		}

		function toggleAppDownload() {
			var mobileLink = jQuery('.www-header-com .header-drawer .support-links > div > a');

			// check the user agent and set custom links to download the mobile app for android and ios users
			if (navigator.userAgent.match(/(iPhone|iPad|iPod)/i)) {
				mobileLink.attr('href', 'itms://itunes.apple.com/us/app/concur-travel-receipts-expense/id335023774?mt=8/');
			} else if ((navigator.userAgent.match(/Android/i))) {
				mobileLink.attr('href', 'https://play.google.com/store/apps/details?id=com.concur.breeze');
			} else {
				mobileLink.remove();
			}
		}

		function handleEsc(e) {
			if (e.keyCode === 27) {
				toggleMenuDrawer();
			}
		}

		function hideMenu() {
			$('.www-header-com .sticky-menu').addClass('hide-scroll');
			$('.www-header-com .logo-wrap').addClass('hide-scroll');
		}

		function showMenu() {
			$('.www-header-com .sticky-menu').removeClass('hide-scroll');
		}

		var lastScrollPos = 0;

		$(window).scroll(function (e) {
			var pos = $(window).scrollTop();
			var delta = pos - lastScrollPos;
			if (pos > 75 && delta > 5 && !isMenuOpen) {
				hideMenu();
			} else if (!isMenuOpen && (pos <= 75 || delta < -5)) {
				showMenu();
			}
			lastScrollPos = pos;
		});

		// Set the mobile download link
		toggleAppDownload();

		// Toggle Search form handler
		$('.www-header-com .menu-search-box .toggle-search').click(function () {
			openSearch = !openSearch;
			toggleSearchForm();
		});

		// Toggle Menu Drawer handler
		$('.www-header-com .menu-toggle-grip').click(toggleMenuDrawer);
		$('body .content').click(function () {
			if (isMenuOpen) {
				toggleMenuDrawer();
			}
		});

		/**********************/
		/* FOOTER ONLY script */
		/**********************/

		var siteSelector = $('.www-footer-com .support-section .site-selector');
		var siteSelectorToggle = $('.www-footer-com .support-section .site-selector-trigger');

		// Close the site selector
		function closeSiteSelector() {
			siteSelector.fadeOut(function () {
				siteSelectorToggle.on('click', openSiteSelector);
			});
		}

		// Open the site selector
		function openSiteSelector() {
			siteSelector.fadeIn();
			siteSelectorToggle.off('click', openSiteSelector);
		}

		// Attach close to the grey out area
		siteSelector.on('click', closeSiteSelector);

		// Keeps clicking in the modal from closing it
		$('div > div', siteSelector).click(function (e) {
			e.stopPropagation();
		});

		// Attach the open handler
		siteSelectorToggle.on('click', openSiteSelector);

		// Attach the close handler
		$('.www-footer-com .support-section .site-selector .close-out-button').click(closeSiteSelector);

		/*******************/
		/* GENERAL scripts */
		/*******************/

		// init mobile mode status
		var mobileMode = window.innerWidth < 1200 ? true : false;
		var initialRun = true;

		function resizeEvents() {

			// Toggle the search form on resize
			toggleSearchForm();

			if (window.innerWidth <= 1200 && (!mobileMode || initialRun)) {

				// Only trigger if the app is NOT in mobile mode

				// Add the event handler for mobile list toggling
				$('.www-header-com .header-drawer .group-list-title').on('click', toggleMobileLists);

				// Set mobileMode to true as we are now in mobile mode
				mobileMode = true;
			} else if (window.innerWidth > 1200 && (mobileMode || initialRun)) {
				mobileMode = false;
			}

			initialRun = false;
		}

		// Add the mobile events if applicable
		resizeEvents();

		// Resize debounce handler for adding/removing mobile events
		var stopper = null;
		jQuery(window).resize(function () {
			clearTimeout(stopper);
			stopper = setTimeout(function () {
				resizeEvents();
			}, 100);
		});
	});
})(jQuery);


;
