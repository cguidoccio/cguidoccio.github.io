/*
 * Click Tracking
 */

var concurClickTracking = new function ()
{
    this.addOneToClickCounterByNodeUrl = function(url)
    {
	var node_id = 0;
	node_id = getNodeIdFromUrl(url);

	this.addOneToClickCounter(node_id);
    }

    this.addOneToClickCounter = function(node_id)
    {
	if (isPositiveInteger(node_id) && node_id > 0)
	{
	    try
	    {
		jQuery.post("/ajax/click_tracking", {nid:node_id}, function(data){});
	    }
	    catch(ex)
	    {
		if (nid)
		{
		    alert("Error adding click counter for node id " + nid);
		}
		else
		{
		    alert("Error adding click counter for node id ");
		}
	    }
	}
    }

    var getNodeIdFromUrl = function(url)
    {
	var nodeId = 0;
	var testString = "";

	var arrMatches = url.match(/\/node\/(\d+)/i);

	if (arrMatches)
	{
	    testString = arrMatches[1];

	    if (testString)
	    {
		testString = jQuery.trim(testString);

		if (isPositiveInteger(testString))
		{
		    nodeId = testString;
		}
	    }
	}

	return nodeId;
    }

    var isPositiveInteger = function(testString)
    {
	rtnVal = false;
	
	testStr = "" + testString;
	
	if (testStr)
	{
	    rtnVal = testStr.match(/^\d+$/);
	}
	
	return rtnVal;
    }
}
;
/*
 * StrikeIron Email Verification
 */

var concurServerSideFunc = new function ($)
{
    var self = this;

    this.valid_email_address = function(emailAddress) {
		var isValid = false;
		
		try {
		    jQuery.ajax({
				type: 'POST',
				url: "/ajax/server_side_email_validation",
				timeout: 7000,
				data: {
				    emailAddress:emailAddress
				},
				success: function(data){
				    if (data && data == "true")
				    {
						isValid = true;
				    }
				},
				error: function(jqXHR, textStatus, errorThrown) {
				    // This has nothing to do with s-iron.
				    isValid = true;
				},
				dataType: "text",
				async: false
		    });
		} catch(ex){

		}
		//console.log(isValid);
		return isValid;
    }
} (jQuery);;
    
jQuery('document').ready(function(){
	jQuery("a[rel=site-selector]").click(function(){
		jQuery("body").append("<div id='hidden-map' style='display:none;'></div>");
		jQuery("#hidden-map").load('/international-sites', function(){
			jQuery("#hidden-map").dialog({resizable: false, draggable: false, width: 650, height: 385, modal: true});
		});
		return false;
	});

});


;
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,r){r.ConcurBreezeConfig=function(){var e={};return e.qsToCookie={elq_mid:{expire:30,overwritable:"true",qualifiedRefererURL:"",deleteExclude:"false",alias:""},channel:{expire:30,overwritable:"false",qualifiedRefererURL:"",deleteExclude:"false",alias:""},BU:{expire:365,overwritable:"false",qualifiedRefererURL:"",deleteExclude:"false",alias:""},referrer:{expire:30,overwritable:"false",qualifiedRefererURL:"",deleteExclude:"false",alias:""},MID:{expire:30,overwritable:"true",qualifiedRefererURL:"",deleteExclude:"false",alias:""},PC:{expire:30,overwritable:"true",qualifiedRefererURL:"",deleteExclude:"false",alias:""},reg_url:{overwritable:"true",qualifiedRefererURL:"",deleteExclude:"false",alias:""}},e.refererCookieQualifiedURLPath={amex:[{URL:"americanexpresscorporatecard.html"},{URL:"/americanexpresscorporatecard"}]},e}(),r.concurConfigUtil_setQueryStringParamInCookie=function(){try{var e=ConcurBreezeConfig.qsToCookie,r=document.referrer&&document.referrer.length>0?concurGetUrlHost(document.referrer):"",o="";for(var i in e)if(e.hasOwnProperty(i)){var t=1,a=!0,n=!0,c=e[i];o=c.alias&&""!==c.alias?c.alias:i,c.expire&&""!==c.expire&&(t=c.expire),c.overwritable&&"false"===c.overwritable&&(a=!1),n=!r||!c.qualifiedRefererURL||r.indexOf(c.qualifiedRefererURL)>=0;var l=concurUtilHttp.getParameterCaseInsensitive(o);n&&l&&""!==l&&(a||!jQuery.cookie("qs_"+i)||""===jQuery.cookie("qs_"+i))&&t&&jQuery.cookie("qs_"+i,l,{expires:t,path:"/"})}}catch(e){alert(e)}},r.concurConfigUtil_deleteAllQsCookies=function(){var e=ConcurBreezeConfig.qsToCookie;for(var r in e)try{var o=e[r];!o.deleteExclude||""!==o.deleteExclude&&"false"!==o.deleteExclude||jQuery.cookie("qs_"+r,null,{path:"/"})}catch(e){alert(e)}},r.concurConfigUtil_setRefererCookie_amex=function(){try{var e=document.URL,r=new Array,o=ConcurBreezeConfig.refererCookieQualifiedURLPath.amex,i=concurGetUrlHost(e);if(i=i?i:"",concurIsArray(o)){for(var t="",a=0,n=o.length;a<n;a++)r[a]=o[a].URL;t=document.referrer?concurGetUrlHost(document.referrer):"";var c=concurUtilHttp.getParameter("referrer")?concurUtilHttp.getParameter("referrer"):jQuery.cookie("qs_referrer")?jQuery.cookie("qs_referrer"):"",l=jQuery.cookie("amexBU")?jQuery.cookie("amexBU"):"";concurHasSimilarElmInArray(e,r)&&jQuery.cookie("qs_referrer","amex",{expires:30,path:"/"}),c.indexOf("amex")>=0?jQuery.cookie("qs_referrer","amex",{expires:30,path:"/"}):l?jQuery.cookie("qs_referrer","amex",{expires:30,path:"/"}):i&&t&&t.indexOf(i)>=0||(c.indexOf("concur")>=0||t.indexOf(".concur.com")>=0)&&""==c&&jQuery.cookie("qs_referrer","concur",{expires:30,path:"/"})}}catch(e){alert(e)}},r.setGoogleLink=function(){jQuery(this).unbind(),jQuery(this).attr("href","https://www.google.com/enterprise/marketplace/viewListing?productListingId=3405+16677686081507204431")},r.concurIsArray=function(e){return!!(e&&"object"==(void 0===e?"undefined":_typeof(e))&&e instanceof Array)},r.concurHasSimilarElmInArray=function(e,r){if(r&&concurIsArray(r))for(var o=0,i=r.length;o<i;o++)if(r[o].indexOf(e)>=0)return!0;return!1},r.concurGetUrlHost=function(e){var r,o="",i=e;return e&&e.length>0&&(i=i.substring(i.indexOf("://")+3),r=i.split("/")),r&&r.length>0&&(o=r[0]),o},e(document).ready(function(){concurConfigUtil_setQueryStringParamInCookie(),concurConfigUtil_setRefererCookie_amex(),"google"==e.cookie("qs_referrer")&&e(".free-trial-right").click(setGoogleLink)})}(jQuery,window);;
