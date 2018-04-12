/*
* jquery.concur.util.js
*
* Collection of various plugins functions and utilities
*
*/

jQuery.concur = jQuery.concur || {};
 
jQuery(function () {
   
    // set up global values here injQuery.concur

    jQuery.concur.region = 'US';

    var marketo_cookie = jQuery.cookie("_mkto_trk");

    jQuery.concur.eloquaUserData = {
        C_FirstName:''
        ,C_LastName:''
        ,C_EmailAddress:''
        ,C_CT_EMPLOYEES1:''
        ,C_Company:''
        ,C_BusPhone:''
        ,industry: ''
        ,C_Zip_Postal: ''
        ,C_Title__Exact_1: ''
        ,C_Country:''
        ,id:'asset-premium-form'
        ,qs_pid: jQuery.cookie("qs_pid") || ""
        ,qs_cid: jQuery.cookie("qs_cid") || ""
        ,qs_pid_last: jQuery.cookie("qs_pid_last") || ""
        ,qs_cid_last: jQuery.cookie("qs_cid_last") || ""
        ,SEQuery: jQuery.cookie("qs_SEQuery") || ""
        ,C_Localized_Site_Region1: (typeof regional !== "undefined") ? regional : "en-us"
        ,CampaignTimeStamp:concurGetCurrentDateTimeText()
        ,CampaignTimeStampCnqrcmpsCookieSet:false
        ,docid:''
        ,elqCustomerGUID:''
        ,elqFormName:'Web_General_Assets_10-10'
        ,elqSiteID:537
        ,eloquaURL:'https://secure.eloqua.com/e/f2.aspx'
        ,elq_cid: ''
        ,marketo_cookie: encodeURIComponent(marketo_cookie)

        /**
        * if this object gets moved out of a ready function, 
        * this needs to be set after the try/catch and not in the object definition
        */
        ,run_observers: function (callback) { 
            if (typeof callback === 'function') {
                callback();
            }
        }
    };

    setConcurContactDataObject(jQuery.cookie('concur_contact_data'));

    try {
        var registered = concur.eloquaUserData_registered;

        for (var i = 0, cnt = registered.length; i < cnt; i++) {
            registered[i]();
        }

        concur.eloquaUserData_registered = [];
    } catch (e) {
        if (window.console && window.console.log) {
            console.log(e);
        }
    }

    var lang = concurGetCurrentLang();

    if (lang == "") {
        lang = "en-us";
    }

    jQuery('.free-trial-email .email-address').focus(function(){jQuery(this).val('')});
    jQuery('.free-trial-email').submit(function(){ return TrialEmailFormSubmitWithSpinningWheel(this) });



});

concur_include.eloqua = {
    /**
    * Parses a key=value cookie (string)
    *
    * @method setConcurContactDataObject
    *
    * @params post_data {String} cookie string (should look like a query string)
    */
    setConcurContactDataObject: function(post_data) {

        // Check the input
        if (!post_data) {
            return;
        }

        if (typeof post_data === 'object') {
            jQuery.extend(jQuery.concur.eloquaUserData, post_data);
        } else if (typeof post_data === 'string') {

            var cookie_data_array = post_data.split('&');

            jQuery(cookie_data_array).each(function(index) {

                // Split key|value pair, key = keys[0], value = keys[1];
                var keys = cookie_data_array[index].split("=");

                jQuery.concur.eloquaUserData[keys[0]] = keys[1];
            });

            jQuery.concur.eloquaUserData.C_Total_Employees =  jQuery.concur.eloquaUserData.C_CT_EMPLOYEES1;
        }
    }
};

var setConcurContactDataObject = concur_include.eloqua.setConcurContactDataObject; ;

(function($){

	function vidPlay(video, placement) {

		if(video.player === 'youtube') {
			concur_media.players.youtube.initVideo(video).place(placement);
		} else {
			concur_media.players.brightcove.initVideo(video).place(placement);
		}

	}

	function blindPost(e){

		var video = $(e.currentTarget).data('videoparam'),
			placement = $(e.currentTarget);
			video.title = document.title + ' - ' + video.title.toString();
			jQuery.concur.eloquaUserData.docid = video.tracking_id;

		if($.cookie('concur_contact_data')) {
			setTimeout(function(){
				concur_forms.postData(jQuery.concur.eloquaUserData, true, vidPlay(video, placement));
			});
		} else {
			vidPlay(video, placement);
		}
	}

	$(document).ready(function(){
		$('.video-responsive').on('click', blindPost);
	});

}(jQuery));
;
