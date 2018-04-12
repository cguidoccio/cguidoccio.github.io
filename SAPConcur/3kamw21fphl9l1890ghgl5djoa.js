"use strict";var concurUtilHttp=new function(e){var r=this;this.getParameter=function(e){var r="",t=this.getAllParameters();return t[e]&&(r=t[e]),r},this.getAllParameters=function(){var e="undefined"!=typeof testOverwriteSearch?testOverwriteSearch:window.location.search;try{var t=new Array;t=r.getDeserializedQueryString(e)}catch(e){alert(e)}return t},this.getParameterByRegExp=function(e){var r="",t=this.getAllParameters();for(var n in t)if(n&&t.hasOwnProperty(n)){var a=(n+"").match(e);a&&a[0]&&(r=t[n])}return r},this.getParameterCaseInsensitive=function(e){return r.getParameterByRegExp(new RegExp("^"+e+"$","i"))},this.getDeserializedQueryString=function(e){var r={};return e&&(e=e.replace(/^\?/,""),e=e.replace(/\&$/,""),jQuery.each(e.split("&"),function(){var e;e=this.split("=");var t=e[0],n="";e[1]&&(n=decodeURIComponent(e[1])),n&&(r[t]=n)})),r},this.isMobile=function(){return!!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|ZuneWP7|Opera|Dolphin/i)},this.getHostname=function(r){var t="";return r&&(t=e("<a>").prop("href",r).prop("hostname")),t},this.getReferrerHostname=function(){var e=document.referrer?document.referrer:"";return r.getHostname(e)},this.isReferrer=function(e){return r.getReferrerHostname().toLowerCase()==e.toLowerCase()}}(jQuery);;
"use strict";!function(e){function r(e){return e.replace(/(^\s+|\s+$)/g,"")}function t(e,t,a){if(void 0===t){var c=null;if(document.cookie&&""!=document.cookie)for(var s=document.cookie.split(";"),_=0;_<s.length;_++){var i=r(s[_]);if(i.substring(0,e.length+1)==e+"="){c=decodeURIComponent(i.substring(e.length+1));break}}return c}a=a||{},null===t&&(t="",a.expires=-1);var n="";if(a.expires&&("number"==typeof a.expires||a.expires.toUTCString)){var h;"number"==typeof a.expires?(h=new Date,h.setTime(h.getTime()+24*a.expires*60*60*1e3)):h=a.expires,n="; expires="+h.toUTCString()}var p=a.path?"; path="+a.path:"",u=a.domain?"; domain="+a.domain:"",o=a.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),n,p,u,o].join("")}e.setPidCid=function(e,r){var e=e||document.referrer,r=r||window.location.origin;if(window.location.origin||(r=r||window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),0!==e.indexOf(r)){var a=concurUtilHttp.getParameter("elq_mid"),c=concurUtilHttp.getParameterCaseInsensitive("pid"),s=concurUtilHttp.getParameterCaseInsensitive("cid");if(""!==concurUtilHttp.getParameterCaseInsensitive("adbsc"))return void adobeSocialQuery();if(e||""!=c||""!=s){if(""!=c&&void 0!==c||""==s){var _={query:"",searchReferer:void 0===s||""==s?null:s,refType:void 0===c||""==c?null:c};null==_.refType&&(_=keywordReferrer(c,e)),setLastCookie(_),null==t("qs_pid")&&setIntialCookie(_),""!=a&&emailMidToCid()}}else directTraffic()}},e.keywordReferrer=function(e,r){var t={pidQuery:e,query:null,searchReferer:null,isLoggedIn:!1,refType:null,found_value:!1,referrer:r};t.referrer.match(/^http(s)?:\/\/(www\.)?google\..*/i)?t=google_bucket(t):t.referrer.match(/^http(s)?:\/\/[a-zA-Z]{0,3}(\.?search)?\.yahoo\.(com|co\.jp)/i)?t=yahoo_bucket(t):(t=final_bucket(t),"pr"===t.refType&&(t.query=t.query.split("?")[0],t.query.length>75&&(t.query=t.query.substring(0,75))));var a=t.referrer.split("/");return t.found_value||void 0===a[2]||(t.searchReferer=t.referrer.split("/")[2]+":",t.refType="sites",t.query=""),t},e.emailMidToCid=function(){var e=concurUtilHttp.getParameter("elq_mid");"null"==t("qs_cid")&&t("qs_cid",e,{path:"/"}),"null"==t("qs_cid_last")&&t("qs_cid_last",e,{path:"/"})},e.adobeSocialQuery=function(){var e=concurUtilHttp.getParameterCaseInsensitive("adbsc");null!=e&&(null==t("qs_pid")&&null==t("qs_cid")&&(t("qs_pid","social",{path:"/",expires:365}),t("qs_cid",e,{path:"/",expires:365})),t("qs_pid_last","social",{path:"/"}),t("qs_cid_last",e,{path:"/"}))},e.directTraffic=function(){var e=concurUtilHttp.getParameterCaseInsensitive("pid"),r=concurUtilHttp.getParameterCaseInsensitive("cid");document.referrer||""!=e||""!=r||(null==t("qs_pid")&&null==t("qs_cid")&&(t("qs_pid","direct",{path:"/",expires:365}),t("qs_cid","direct",{path:"/",expires:365})),t("qs_pid_last","direct",{path:"/"}),t("qs_cid_last","direct",{path:"/"}))},e.setLastCookie=function(e){t("qs_pid_last",e.refType,{path:"/"}),t("qs_cid_last",e.searchReferer+unescape(e.query),{path:"/"})},e.setIntialCookie=function(e){t("qs_pid",e.refType,{path:"/",expires:365}),t("qs_cid",e.searchReferer+unescape(e.query),{path:"/",expires:365})},e.google_bucket=function(e){var r=e.referrer.split("?");if(void 0!==r[1]&&void 0!==r[1].split("&")){var t=r[1].split("&");for(var a in t)"q="==t[a]&&(e.isLoggedIn=!0)}1==e.isLoggedIn?e.query="logged_in":e.referrer.match(/q=/)?e.query=e.referrer.replace(/^.*&q=([^&]+)&?.*$/i,"$1"):e.query="";var c=e.referrer.split("/")[2];return e.searchReferer=c.match(/google.*/)+":",e.refType="seo",e.found_value=!0,e},e.yahoo_bucket=function(e){e.referrer.match(/p=/)&&(e.query=e.referrer.replace(/^.*\?p=([^&]+)&?.*$/i,"$1")),e.refType="seo";var r=e.referrer.split("/")[2].split(".")[0];return e.searchReferer="yahoo-"+r+":",e.found_value=!0,e},e.final_bucket=function(e){var r=return_referrer_array();for(var t in r){for(var a in r[t]){var c=r[t][a];if(e.referrer.match(c.pattern_to_match)){void 0!==c.query_match&&e.referrer.match(c.query_match)?e.query=e.referrer.replace(c.query_replace,"$1"):e.query="",e.refType=t,e.searchReferer=c.search_ref,e.found_value=!0;break}}if(e.found_value)break}return e},e.return_referrer_array=function(){return{social:{Facebook:{pattern_to_match:/^http(s)?:\/\/[a-zA-Z]{1,3}?\.facebook\.*/i,query_match:/u=/,query_replace:/^.*?u=([^&]+)&?.*$/i,search_ref:"facebook:"},GooglePlus:{pattern_to_match:/^http(s)?:\/\/plus\.url\.google.*/i,query_match:/url=/,query_replace:/^.*?u=([^&]+)&?.*$/i,search_ref:"google-plus:"},Linkedin:{pattern_to_match:/^http(s)?:\/\/(www\.)?linkedin.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"linkedin:"},Twitter:{pattern_to_match:/^http(s)?:\/\/t.co/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"twitter:"}},pr:{AP:{pattern_to_match:/^http(s)?:\/\/(www\.)?ap\.org/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_ap:"},Bloomberg:{pattern_to_match:/^http(s)?:\/\/(www\.)?bloomberg.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_bloomberg:"},BusinessInsider:{pattern_to_match:/^http(s)?:\/\/(www\.)?businessinsider.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_businessinsider:"},CFO:{pattern_to_match:/^http(s)?:\/\/(ww2\.)?cfo.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_cfo:"},FastCompany:{pattern_to_match:/^http(s)?:\/\/(www\.)?fastcompany.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_fastcompany:"},FinancialExecutives:{pattern_to_match:/^http(s)?:\/\/(www\.)?financialexecutives.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_financialexecutives:"},Forbes:{pattern_to_match:/^http(s)?:\/\/(www\.)?forbes.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_forbes:"},Economist:{pattern_to_match:/^http(s)?:\/\/(www\.)?economist.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_economist:"},Fortune:{pattern_to_match:/^http(s)?:\/\/(www\.)?fortune.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_fortune:"},Nytimes:{pattern_to_match:/^http(s)?:\/\/(www\.)?nytimes.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_nytimes:"},Pymnts:{pattern_to_match:/^http(s)?:\/\/(www\.)?pymnts.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_pymnts:"},Quartz:{pattern_to_match:/^http(s)?:\/\/(www\.)?quartz.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_quartz:"},Reuters:{pattern_to_match:/^http(s)?:\/\/(www\.)?reuters.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_reuters:"},Spendmatters:{pattern_to_match:/^http(s)?:\/\/(www\.)?spendmatters.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_spendmatters:"},StrategicFinance:{pattern_to_match:/^http(s)?:\/\/(www\.)?sfmagazine.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_strategicfinance:"},TechTarget:{pattern_to_match:/^http(s)?:\/\/(www\.)?techtarget.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_techtarget:"},Usatoday:{pattern_to_match:/^http(s)?:\/\/(www\.)?usatoday.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_usatoday:"},Wired:{pattern_to_match:/^http(s)?:\/\/(www\.)?wired.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_wired:"},Wsj:{pattern_to_match:/^http(s)?:\/\/(www\.)?wsj.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"business-finance_wsj:"},Cio:{pattern_to_match:/^http(s)?:\/\/(www\.)?cio.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"tech_cio:"},PCmag:{pattern_to_match:/^http(s)?:\/\/(www\.)?pcmag.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"tech_pcmag:"},Nero:{pattern_to_match:/^http(s)?:\/\/(www\.)?nero.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"tech_nero:"},TechCrunch:{pattern_to_match:/^http(s)?:\/\/(www\.)?techcrunch.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"tech_techcrunch:"},VentureBeat:{pattern_to_match:/^http(s)?:\/\/(www\.)?venturebeat.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"tech_venturebeat:"},Buzzfeed:{pattern_to_match:/^http(s)?:\/\/(www\.)?buzzfeed.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"tech_buzzfeed:"},Travelpulse:{pattern_to_match:/^http(s)?:\/\/(www\.)?travelpulse.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"trade_travelpulse:"},AskBte:{pattern_to_match:/^http(s)?:\/\/(www\.)?businesstravelexecutive.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"trade_askbte:"},BusinessTravelNews:{pattern_to_match:/^http(s)?:\/\/(www\.)?businesstravelnews.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"trade_businesstravelnews:"},TheBeat:{pattern_to_match:/^http(s)?:\/\/(www\.)?thebeat.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"trade_thebeat:"},Skift:{pattern_to_match:/^http(s)?:\/\/(www\.)?skift.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"trade_skift:"},TheCompanyDime:{pattern_to_match:/^http(s)?:\/\/(www\.)?thecompanydime.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"trade_thecompanydime:"},Tnooz:{pattern_to_match:/^http(s)?:\/\/(www\.)?tnooz.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"trade_tnooz:"},TravelWeekly:{pattern_to_match:/^http(s)?:\/\/(www\.)?travelweekly.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"trade_travelweekly:"},BusinessNewsDaily:{pattern_to_match:/^http(s)?:\/\/(www\.)?businessnewsdaily.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"smn-channel_businessnewsdaily:"},Channele2e:{pattern_to_match:/^http(s)?:\/\/(www\.)?channele2e.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"smn-channel_channele2e:"},Channelnomics:{pattern_to_match:/^http(s)?:\/\/(www\.)?channelnomics.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"smn-channel_channelnomics:"},ChannelPartners:{pattern_to_match:/^http(s)?:\/\/(www\.)?channelpartners.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"smn-channel_channelpartners:"},Crn:{pattern_to_match:/^http(s)?:\/\/(www\.)?crn.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"smn-channel_crn:"},Entrepreneur:{pattern_to_match:/^http(s)?:\/\/(www\.)?entrepreneur.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"smn-channel_entrepreneur:"},Inc:{pattern_to_match:/^http(s)?:\/\/(www\.)?inc\.com/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"smn-channel_inc:"},SmallBusinessTrends:{pattern_to_match:/^http(s)?:\/\/(www\.)?smallbiztrends.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"smn-channel_smallbusinesstrends:"},FourTwoFivebusiness:{pattern_to_match:/^http(s)?:\/\/(www\.)?425business.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"local_425business:"},GeekWire:{pattern_to_match:/^http(s)?:\/\/(www\.)?geekwire.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"local_geekwire:"},BizJournals:{pattern_to_match:/^http(s)?:\/\/(www\.)?bizjournals.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"local_bizjournals:"},SeattleTimes:{pattern_to_match:/^http(s)?:\/\/(www\.)?seattletimes.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"local_seattletimes:"},Sap:{pattern_to_match:/^http(s)?:\/\/(www\.)?sap.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_sap:"},Tripit:{pattern_to_match:/^http(s)?:\/\/(www\.)?tripit.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_tripit:"},Expenseit:{pattern_to_match:/^http(s)?:\/\/(www\.)?expenseit.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_expenseit:"},Lyft:{pattern_to_match:/^http(s)?:\/\/(www\.)?lyft.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_lyft:"},Concurlabs:{pattern_to_match:/^http(s)?:\/\/(www\.)?concurlabs.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_concurlabs:"},Rocketrip:{pattern_to_match:/^http(s)?:\/\/(www\.)?rocketrip.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_rocketrip:"},Uber:{pattern_to_match:/^http(s)?:\/\/(www\.)?uber.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_uber:"},Airbnb:{pattern_to_match:/^http(s)?:\/\/(www\.)?airbnb*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_airbnb:"},Hipmunk:{pattern_to_match:/^http(s)?:\/\/(www\.)?hipmunk.*/i,query_match:/^/,query_replace:/^([^&]+)/i,search_ref:"partner_hipmunk:"}},seo:{AOL:{pattern_to_match:/^http(s)?:\/\/search\.aol.com/i,query_match:/q=/,query_replace:/^.*\&q=([^&]+)&?.*$/,search_ref:"aol:"},Ask_Jeeves:{pattern_to_match:/^http(s)?:\/\/www\.?ask\.*/i,query_match:/q=/,query_replace:/^.*\?q=([^&]+)&?.*$/,search_ref:"ask:"},Baidu:{pattern_to_match:/^http(s)?:\/\/www\.?baidu\.*/i,query_match:/wd=/,query_replace:/^.*\?wd=([^&]+)&?.*$/,search_ref:"baidu:"},Daum:{pattern_to_match:/^http(s)?:\/\/search\.daum\.net/i,query_match:/q=/,query_replace:/^.*\&q=([^&]+)&?.*$/,search_ref:"daum:"},Dogpile:{pattern_to_match:/^http(s)?:\/\/www\.?dogpile\.*/i,query_match:/q=/,query_replace:/^.*\&q=([^&]+)&?.*$/,search_ref:"dogpile:"},Libero:{pattern_to_match:/^http(s)?:\/\/arianna\.libero\.it/i,query_match:/query=/,query_replace:/^.*\&query=([^&]+)&?.*$/,search_ref:"arianna.libero:"},Bing:{pattern_to_match:/^http(s)?:\/\/www\.bing\.com\/*/i,query_match:/q=/,query_replace:/^.*\?q=([^&]+)&?.*$/,search_ref:"bing:"},Mywebsearch:{pattern_to_match:/^http(s)?:\/\/search\.mywebsearch\.com\/*/i,query_match:/searchfor=/,query_replace:/^.*\?searchfor=([^&]+)&?.*$/,search_ref:"mywebsearch:"},Naver:{pattern_to_match:/^http(s)?:\/\/search\.naver\.com\/*/i,query_match:/query=/,query_replace:/^.*\&query=([^&]+)&?.*$/,search_ref:"naver:"},Comcast:{pattern_to_match:/^http(s)?:\/\/search\.comcast\.net\/*/i,query_match:/q=/,query_replace:/^.*\&q=([^&]+)&?.*$/,search_ref:"comcast:"},SearchResults:{pattern_to_match:/^http(s)?:\/\/www\.search-results\.com\/*/i,query_match:/q=/,query_replace:/^.*\&q=([^&]+)&?.*$/,search_ref:"search-results:"},Seznam:{pattern_to_match:/^http(s)?:\/\/search\.seznam\.cz\/*/i,query_match:/q=/,query_replace:/^.*\?q=([^&]+)&?.*$/,search_ref:"seznam.cz:"},YahooJP:{pattern_to_match:/^http(s)?:\/\/search\.yahoo\.co\.jp\/*/i,query_match:/p=/,query_replace:/^.*\?p=([^&]+)&?.*$/,search_ref:"yahoo-jp:"},Yahoo:{pattern_to_match:/^http(s)?:\/\/([a-zA-Z]{1,2}\.)?search\.yahoo\.com/i,query_match:/p=/,query_replace:/^.*\?p=([^&]+)&?.*$/,search_ref:"yahoo.com:"},Yandex:{pattern_to_match:/^http(s)?:\/\/yandex\.ru\/*/i,query_match:/text=/,query_replace:/^.*\?text=([^&]+)&?.*$/,search_ref:"yandex.ru:"}}}},e.setPidCid()}(window);;
"use strict";!function(e){function a(a){var n=e.location.pathname.replace(/\/{2,}/g,"/").split("/"),_=n.lastIndexOf("");return n=n.slice(_+1),n.length||"page_name"!==a?"page_name"===a?n.join(":"):"number"==typeof a?n[a]||"":"":"homepage"}e.s=e.s||{},e.newURL=e.location.protocol+"://"+e.location.host+"/"+e.location.pathname;var n=n||"";n="undefined"==typeof regional?"admin":regional,e.siteregion=n,e.firstInteraction=[],e.pagename=e.newURL;var _={full_page_path:e.location.href,page_type:contentType,site_regional:n,page_name:a("page_name"),section_1:a(0),section_2:a(1),section_3:a(2),db_account_id:"",db_account_type:"",db_annual_sales:"",db_audience:"",db_audience_segment:"",db_city:"",db_company_name:"",db_country:"",db_country_name:"",db_employee_count:"",db_employee_range:"",db_industry:"",db_marketing_alias:"",db_primary_sic:"",db_revenue_range:"",db_state:"",db_sub_industry:"",db_zip:"",db_sap_customer:""};try{if(e.sessionStorage){var t=sessionStorage.getItem("s_dmdbase")||"",o=sessionStorage.getItem("s_dmdbase_custom")||"",s=sessionStorage.getItem("s_dmdbase_custom2")||"",d=t.split(":"),i=o.split(":"),c=s.split(":");_.db_company_name=d[0],_.db_marketing_alias=d[1],_.db_industry=d[2],_.db_sub_industry=d[3],_.db_employee_count=d[4],_.db_primary_sic=d[5],_.db_city=d[6],_.db_state=d[7],_.db_zip=i[0],_.db_country=i[1],_.db_country_name=i[2],_.db_annual_sales=i[3],_.db_revenue_range=i[4],_.db_employee_range=i[5],_.db_audience=i[6],_.db_audience_segment=i[7],_.db_account_type=c[0],_.db_account_id=c[1],_.db_sap_customer=c[2]}}catch(a){e.console&&console.log("DB _ ERR "+a.message)}e.utag_data=_}(window);;
"use strict";!function(e,t){function n(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:7&n|8).toString(16)})}function a(){try{utag.link({event_flag:"form started",form_name:"landingpage modal"})}catch(e){}}function o(){try{utag.link({event_flag:"form completed"})}catch(e){}}function r(){try{utag.link({event_flag:"demandbase_form"})}catch(e){}}function i(e){try{firstInteraction.indexOf(e)===-1&&(utag.link({pageInteraction_name:e,event_flag:"demo started"}),firstInteraction.push(e))}catch(e){}}function c(e){try{utag.link({video_name:e,event_flag:"video view"})}catch(e){}}function u(){try{s.linkTrackVars="events,eVar1",s.linkTrackEvents="event20",s.eVar1="en-us casestudy quote",s.events="event20",s.tl(this,"o","case study modal form started")}catch(e){}}function d(){try{s.linkTrackVars="events",s.linkTrackEvents="event21",s.events="event21",s.tl(this,"o","casestudy modal form completed")}catch(e){}}jQuery(document).on("click",'[rel="ctd"]',function(){var e=jQuery(this).data("ctd");concur_assets.logCampaignForLater(e),null!=jQuery.cookie("concur_contact_data")&&concur_assets.prepEloquaData(e)}),t.generateUUID=n,null==jQuery.cookie("concur_uuid")&&jQuery.cookie("concur_uuid",n(),{path:"/",expires:365}),t.omniturelandingformstarted=a,t.omniturelandingformCompleted=o,t.omnitureDemandbaseForm=r,t.omniturePageInteraction=i,t.omnitureVideo=c,t.omnitureModalFormStart=u,t.omnitureModalFormComplete=d,t.marinTracking=function(){var t={};return t.resourceCenter=function(){try{e(".trackingIFrame").remove(),e("body").append('<iframe class="trackingIFrame" style="display:none;" src="/sites/all/modules/custom_concur/trackingmod/html/marin/resource-center.html?v='+concurGetFormattedDate("yyyymmdd")+'"></iframe>')}catch(e){}},t.lpAssetConsumed=function(){try{e(".trackingIFrame").remove(),e("body").append('<iframe class="trackingIFrame" style="display:none;" src="/sites/all/modules/custom_concur/trackingmod/html/marin/asset-landing.html?v='+concurGetFormattedDate("yyyymmdd")+'"></iframe>')}catch(e){}},t}(),t.concurOmnitureSiteCatalyst=function(){var e={};return e.trackResource=function(e,t){"video"===e.data("asset-type")?this.trackVideoOnLoad(e.data,t):this.trackBrochureOnLoad(t),e.click(function(){"video"===e.data("asset-type")?this.trackVideoOnClick(t):jQuery("#form-box").hasClass("gated-asset")||this.trackBrochureOnClick(t)}.bind(this))},e.trackPremiumAssetFormOnLoad=function(){utag_loader.done(function(){utag.link({event_flag:"form started",form_name:"premium form started"}),s.eVar1="",s.events=""})},e.trackFormComplete=function(){utag_loader.done(function(){utag.link({event_flag:"form completed",registration_success:"premium"}),s.eVar1="",s.events=""})},e.trackVideoAutoPlay=e.trackVideoOnLoad=function(e,t){utag_loader.done(function(){utag.link({video_name:t+"~"+e,event_flag:"video view"})})},e.trackVideoOnClick=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];utag_loader.done(function(){t?utag.link({video_name:e,event_flag:"video view"}):(utag_data.video_name=e,utag_data.event_flag="video view")})},e.trackBrochureOnLoad=function(e){utag_loader.done(function(){utag.view({page_name:e})})},e.trackBrochureOnClick=function(e){utag_loader.done(function(){utag.link({download_file_name:e,event_flag:"file download"}),s.eVar6="",s.events=""})},e}()}(jQuery,window);;
"use strict";!function(t,a){a.utag_loader=function(){var a=new MicroEvent;a.status={s_t_loaded:!1,utag_loaded:!1},a.loaded=function(t){a.status.utag_loaded=!0,a.emit("utag_loaded")},a.once=function(t,a,o){var s=function s(){this.status.s_t_loaded||o?a():this.once("s_t_loaded",a),this.off(t,s)};this.on(t,s.bind(this))},a.done=function(t){this.status.utag_loaded&&this.status.s_t_loaded?t():this.status.utag_loaded?this.once("s_t_loaded",t,!0):this.once("utag_loaded",t)};var o=0,d=setInterval(function(){s.version?(a.status.s_t_loaded=!0,a.emit("s_t_loaded"),clearInterval(d)):o>=3e4&&clearInterval(d),o+=30},30);return t.getScript("https://tags.tiqcdn.com/utag/concur/concur/prod/utag.js"),a}(),a.utag_loaded_last=function(){a.utag_loader.loaded()}}(jQuery,window);;
"use strict";!function(e,n){n.QSTransformer={qsToCollection:function(e){var n=decodeURIComponent(e),o=[];return n&&(o=n.split("&").map(function(e){var n={},o=e.split("=");return n.key=o[0],n.value=o[1]||!0,n})),o},collectionToQS:function(n,o){var r=o?"?":"";return e.each(n,function(e,n){e>0&&(r+="&"),r+=n.key+(n.value===!0?"":"="+n.value)}),r},setTrackingQueryStrings:function(o,r){var c=[{key:"pid",value:n.encodeURIComponent(e.cookie("qs_pid_last"))},{key:"cid",value:n.encodeURIComponent(e.cookie("qs_cid_last"))}];e(o).each(function(o,t){if(t.href.match(r)){var i=t.href.split("?"),a=n.QSTransformer.qsToCollection(i[1]||"");e(c).each(function(n,o){var r=-1;e(a).each(function(e,n){n.key===o.key&&(r=e)}),r>=0?a[r].value=o.value:a.push(o)}),t.href=i[0]+"?"+n.QSTransformer.collectionToQS(a)}})}},e(document).ready(function(){n.QSTransformer.setTrackingQueryStrings("a",new RegExp(/go\.concur\.com/))})}(jQuery,window);;
;(function ($, exports) {

  // Check and load needed scripts and styles
  var hasForm = false;
  $('form').each(function (i, item) {
    if (item.action.indexOf('search') < 0) {
      hasForm = true;
    }
  });

  // Load the needed form scripts and styles
  if (!hasForm) {
    $.getScript('/sites/all/modules/custom_concur/concur_forms/js/contact_cookie.js');
    $('<link/>', {
      rel: 'stylesheet',
      type: 'text/css',
      href: '/sites/all/modules/custom_concur/concur_forms/css/form.css',
    }).appendTo('head');
  }

  // Make a store of the forms to be returned
  var store = {
    forms: {},
    cookie: getCookieInfo(),
  };


  // Get the contact cookie
  function getCookieInfo () {
    // return the contact cookie to be used as an Object
    return concurUtilHttp.getDeserializedQueryString($.cookie('concur_contact_data'));
  }

  // Click handler for the edit button when using the showEdit filter
  function toggleEditField () {
    // Show the input field and set focus
    $(this).parents('.form-item').find('[name]').removeClass('hidden').focus();

    // Hide the edit display field
    $(this).parents('.edit-field-container').addClass('hidden');
  }


  // Hide all fields that are already in the cookie
  function stripCookieFields (form, filter) {
    var $form = $(form);

    $form.addClass('form-loader-filter');

    // Maybe loop through the .form-item fields rather than the cookie fields
    $form.find('.form-item').each(function (i, elem) {
      var field = $(elem).find('[name]');
      var fieldName = field.attr('name');
      var cookieName = CookieSetup.prototype.contact_fields.filter(function (list) {
        if (list.indexOf(fieldName) >= 0) return true;
      });
      cookieName = cookieName[0] || [fieldName];

      if (cookieName.length && store.cookie[cookieName[0]] && !field.val()) {
        // Is in the cookie and no value is set
        field.val(store.cookie[cookieName[0]]);
      }

      // if in filter or in cookie
      if ((filter[fieldName] && filter[fieldName].display) || store.cookie[cookieName[0]]) {

        // Default to hide
        switch ((filter[fieldName] && filter[fieldName].display) || 'hide') {
          case 'showPopulated':
            // Make sure the field can be seen
            // It has already been populated above
            $(elem).removeClass('hidden');
            break;

          case 'showCleared':
            $(elem).removeClass('hidden'); // Make sure the field can be seen
            field.val(''); // Clear the value
            break;

          case 'showEdit':
            var tmpElem = $(elem);
            var fieldVal = field.val();

            // Hide the field
            field.addClass('hidden');

            if (tmpElem.find('.edit-field-container').length) {
              tmpElem.find('.edit-field-container').remove();
            }

            // Add the display field with edit link
            tmpElem.append(
              '<div class="edit-field-container">' +
                '<p>' + (filter[fieldName].labelText || '') + '</p>' +
                '<div class="show-edit-field">' +
                  '<span>' + fieldVal + '</span><a class="toggle-edit-field pull-right">' + (filter[fieldName].editText || 'edit') + '</a>' +
                '</div>' +
              '</div>'
            );

            tmpElem.find('a.toggle-edit-field').on('click', toggleEditField);
            break;

          case 'hide':
          default:
            // hide the element event if it is not filled via the cookie above
            $(elem).addClass('hidden');
            break;
        }
      }
    });

    // Find the demandbase scripts
    var removeScripts = [];
    $(form).find('script').each(function (i, script) {
      if (script.src.indexOf('demandbase') >= 0) {
        removeScripts.push({
          parent: script.parentNode,
          child: script,
        });
      }
    });

    // Remove the demandbase scripts
    for (var i = removeScripts.length - 1; i >= 0; i--) {
      removeScripts[i].parent.removeChild(removeScripts[i].child);
    }

    return form;
  }

  // Filter the form element
  function filterForm (options) {
    var tmpForm = document.createElement('div');

    // Assign the form as the html so we can select the fields
    if (typeof options.form === 'object') {
      tmpForm.appendChild(options.form);
    } else {
      tmpForm.innerHTML = options.form;
    }

    // return the filtered form
    return stripCookieFields(tmpForm.getElementsByTagName('form')[0], options.filter);
  }

  function loadReCaptcha (form) {
    grecaptcha.render($(form).find('.g-recaptcha')[0], {
      sitekey: $(form).find('.g-recaptcha').data('sitekey'),
      callback: function () {
        $(form).find('label#test-recaptcha-error').hide();
        $(form).find('#test-recaptcha').val($(form).find('.g-recaptcha-response').val());
      }
    });
  }


  // Ajax in the form if it hasn't been loaded
  function getForm (options, cb) {

    if (store.forms[options.name]) {

      // Filter the form
      var form = filterForm({
        filter: options.filter || {},
        form: store.forms[options.name], // Get the cached form
      });

      // return the filtered form via the callback
      cb(store.forms[options.name]);

      // break the function;
      return;
    }

    // Get the form
    $.get('/ajax/load-form/' + options.name)
    .done(function (data) {

      // Filter the form
      var form = filterForm({
        filter: options.filter || {},
        form: data.form,
      });

      // Render the recaptcha if it exists
      if ($(form).find('.g-recaptcha').length) {
        if (typeof grecaptcha === 'undefined') {
          // This loads the recaptcha on load, so no need to listen and fire anything
          // This API should be able to beet a human to the submit button every time
          $.getScript('https://www.google.com/recaptcha/api.js');
        } else {
          loadReCaptcha(form);
        }
      }

      // Attach validation
      attachValidation(form);

      // Cache the form
      store.forms[options.name] = form;

      // return the filtered form via the callback
      cb(form);
    })
    .fail(function (err) {
      console.log(err.error.msg);
    });
  }


  // Global function that will return an mql form html
  function loadMQLForm (options, cb) {

    // As this will be a global function it will need to validate
    if (typeof options.name !== 'string') {
      return new Error('The name prop should be a string');
    }

    // Set cookie to an object for use in this function
    // We need to check the cookie each time we call in a form
    // and not only on page load
    store.cookie = getCookieInfo();

    // Check if the form has already been loaded
    getForm(options, cb);
  }

  // Export all functions under the formLoader scope
  exports.formLoader = {
    loadMQLForm: loadMQLForm,
    stripCookieFields: stripCookieFields,
  };
}(jQuery, window));
;
